const express = require('express');
const multer  = require('multer');
const cors    = require('cors');
const fetch   = (...a) => import('node-fetch').then(({default: f}) => f(...a));

const app    = express();
const uploadRaw = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } });

// multer ფაილის სახელს latin1-ად კითხულობს — ქართული UTF-8 უნდა გავასწოროთ.
// wrapper, რომელიც multer-ის შემდეგ ყველა file.originalname-ს UTF-8-ად გადააკოდირებს.
function fixNames(req, res, next) {
  const fix = f => { if (f && f.originalname) {
    try { f.originalname = Buffer.from(f.originalname, 'latin1').toString('utf8'); } catch(e){}
  }};
  if (req.file) fix(req.file);
  if (Array.isArray(req.files)) req.files.forEach(fix);
  next();
}
const upload = {
  array: (field, max) => [uploadRaw.array(field, max), fixNames],
  single: (field) => [uploadRaw.single(field), fixNames]
};

app.use(cors());
app.use(express.json({ limit: '50mb' }));

const ANTHROPIC_KEY = process.env.ANTHROPIC_KEY;
const SUPABASE_URL  = process.env.SUPABASE_URL;
const SUPABASE_KEY  = process.env.SUPABASE_KEY;
const MODEL         = 'claude-haiku-4-5-20251001';
const BUCKET        = 'project-files';

// ── Supabase DB helper ──────────────────────────────────────────
const SB_H = () => ({
  'Content-Type': 'application/json',
  'apikey': SUPABASE_KEY,
  'Authorization': 'Bearer ' + SUPABASE_KEY
});

async function sbSave(entry) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return;
  try {
    const check = await fetch(`${SUPABASE_URL}/rest/v1/requests?id=eq.${entry.id}&select=id`, { headers: SB_H() });
    const exists = await check.json();
    if (exists.length > 0) {
      await fetch(`${SUPABASE_URL}/rest/v1/requests?id=eq.${entry.id}`,
        { method: 'PATCH', headers: { ...SB_H(), 'Prefer': 'return=minimal' }, body: JSON.stringify(entry) });
    } else {
      await fetch(`${SUPABASE_URL}/rest/v1/requests`,
        { method: 'POST', headers: { ...SB_H(), 'Prefer': 'return=minimal' }, body: JSON.stringify(entry) });
    }
  } catch(e) { console.error('Supabase error:', e.message); }
}

async function sbGetRequest(id) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return null;
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/requests?id=eq.${id}&select=*`, { headers: SB_H() });
    const arr = await r.json();
    return arr[0] || null;
  } catch(e) { console.error('Supabase get error:', e.message); return null; }
}

// ── Supabase Storage helpers ────────────────────────────────────
async function sbStorageUpload(path, buffer, contentType) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return false;
  try {
    const encodedPath = String(path).split('/').map(encodeURIComponent).join('/');
    const url = `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${encodedPath}`;
    const headers = {
      'apikey': SUPABASE_KEY,
      'Authorization': 'Bearer ' + SUPABASE_KEY,
      'Content-Type': contentType || 'application/octet-stream',
      'x-upsert': 'true'
    };
    // POST ქმნის ახალს. თუ ფაილი უკვე არსებობს, POST 400-ს აბრუნებს —
    // ამ შემთხვევაში PUT-ით ვანახლებთ (Supabase-ის სტანდარტული upsert).
    let r = await fetch(url, { method: 'POST', headers, body: buffer });
    if (!r.ok) {
      r = await fetch(url, { method: 'PUT', headers, body: buffer });
    }
    if (!r.ok) {
      const txt = await r.text().catch(() => '');
      console.error('Storage upload failed:', r.status, path, txt.slice(0, 200));
    }
    return r.ok;
  } catch(e) { console.error('Storage upload error:', e.message); return false; }
}

async function sbStorageDownload(path) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return null;
  try {
    // path-ის თითო სეგმენტი ცალკე უნდა დაიშიფროს (ქართული ასოები, spaces, სპეცსიმბ.)
    const encodedPath = String(path).split('/').map(encodeURIComponent).join('/');
    const r = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${encodedPath}`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY }
    });
    if (!r.ok) { console.error('Storage download failed:', r.status, path); return null; }
    const ab = await r.arrayBuffer();
    return Buffer.from(ab);
  } catch(e) { console.error('Storage download error:', e.message); return null; }
}

// Delete specific storage paths by exact path list
async function sbStorageDeletePaths(paths) {
  if (!SUPABASE_URL || !SUPABASE_KEY || !paths.length) return false;
  try {
    await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}`, {
      method: 'DELETE',
      headers: { ...SB_H(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ prefixes: paths })
    });
    return true;
  } catch(e) { console.error('Storage delete paths error:', e.message); return false; }
}

// Delete all files under a request's folder (prefix), e.g. "req_123/*"
async function sbStorageDeleteFolder(prefix) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return false;
  try {
    const listRes = await fetch(`${SUPABASE_URL}/storage/v1/object/list/${BUCKET}`, {
      method: 'POST',
      headers: { ...SB_H(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ prefix: prefix + '/' })
    });
    const items = await listRes.json();
    if (!Array.isArray(items) || items.length === 0) return true;
    const prefixes = items.map(it => `${prefix}/${it.name}`);
    await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}`, {
      method: 'DELETE',
      headers: { ...SB_H(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ prefixes })
    });
    return true;
  } catch(e) { console.error('Storage delete error:', e.message); return false; }
}

// ფოლდერის ფაილების ჩამოთვლა (სახელი + სრული path)
async function sbStorageListFolder(prefix) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return [];
  try {
    const listRes = await fetch(`${SUPABASE_URL}/storage/v1/object/list/${BUCKET}`, {
      method: 'POST',
      headers: { ...SB_H(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ prefix: prefix + '/', limit: 200 })
    });
    const items = await listRes.json();
    if (!Array.isArray(items)) return [];
    // მხოლოდ ფაილები — გაფართოების მიხედვით (ფოლდერებს გაფართოება არ აქვს)
    return items
      .filter(it => it.name && /\.(xls|xlsx|pdf|doc|docx)$/i.test(it.name))
      .map(it => ({ name: it.name, path: `${prefix}/${it.name}` }));
  } catch(e) { console.error('Storage list error:', e.message); return []; }
}

// ── File processing → msgContent parts ──────────────────────────
async function processFile(buffer, originalname) {
  const parts = [];
  const ext = originalname.split('.').pop().toLowerCase();

  if (ext === 'pdf') {
    let buf = buffer;
    if (buf.length > 20 * 1024 * 1024) {
      try {
        const { PDFDocument } = require('pdf-lib');
        const src = await PDFDocument.load(buf, { ignoreEncryption: true });
        const total = src.getPageCount();
        const maxPages = Math.min(total, 15);
        const trimmed = await PDFDocument.create();
        const pages = await trimmed.copyPages(src, [...Array(maxPages).keys()]);
        pages.forEach(p => trimmed.addPage(p));
        buf = Buffer.from(await trimmed.save());
        parts.push({ type: 'text', text: `[შენიშვნა: ${originalname} — ${total} გვერდიდან გაანალიზებულია პირველი ${maxPages}]` });
      } catch(e) {
        console.error('PDF trim error:', e.message);
      }
    }
    const b64 = buf.toString('base64');
    parts.push({ type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: b64 } });
    parts.push({ type: 'text', text: `=== PDF: ${originalname} ===` });

  } else if (['xls','xlsx'].includes(ext)) {
    const XLSX = require('xlsx');
    const wb   = XLSX.read(buffer, { type: 'buffer' });
    let text   = '';
    let hasPrices = false;
    const priceRe = /ფას|ღირ|price|unit.?price|цена|стоим|ერთეულის/i;
    wb.SheetNames.forEach(name => {
      const ws   = wb.Sheets[name];
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

      // Find the REAL header row: scan first 15 non-empty rows for one whose
      // cells contain a price keyword. Titles (R0) often lack the price column,
      // so we must not assume the first non-empty row is the header.
      let headerIdx = -1;
      const priceCols = [];
      const scanLimit = Math.min(rows.length, 15);
      for (let i = 0; i < scanLimit; i++) {
        const r = rows[i];
        if (!r || !r.some(c => c !== '')) continue;
        const cols = [];
        r.forEach((h, ci) => { if (priceRe.test(String(h))) cols.push(ci); });
        if (cols.length) { headerIdx = i; priceCols.push(...cols); break; }
      }

      if (headerIdx >= 0 && priceCols.length) {
        // Check numeric fill in the price columns BELOW the header row
        const dataRows = rows.slice(headerIdx + 1).filter(r => r.some(c => c !== ''));
        const filledCount = dataRows.filter(r => priceCols.some(ci => {
          const v = parseFloat(String(r[ci]).replace(/[,\s]/g, ''));
          return !isNaN(v) && v > 0;
        })).length;
        // At least 3 priced rows OR 15% filled → it's a priced (განფასება) sheet
        if (filledCount >= 3 || filledCount >= Math.max(1, dataRows.length * 0.15)) hasPrices = true;
      }

      text += `=== ${name} ===\n`;
      rows.filter(r => r.some(c => c !== '')).slice(0, 150).forEach(row => {
        text += row.map(c => String(c)).join('\t') + '\n';
      });
    });
    const tag = hasPrices ? '[ფასებით — კონტრაქტორის განფასება]' : '[ფასების გარეშე — ჩვენი ჩამონათვალი]';
    parts.push({ type: 'text', text: `=== XLS: ${originalname} ${tag} ===\n${text.slice(0, 15000)}` });
    parts._xlsHasPrices = hasPrices;

  } else if (['doc','docx'].includes(ext)) {
    try {
      const mammoth = require('mammoth');
      const result  = await mammoth.extractRawText({ buffer });
      parts.push({ type: 'text', text: `=== WORD: ${originalname} ===\n${result.value.slice(0, 10000)}` });
    } catch(e) {
      parts.push({ type: 'text', text: `=== WORD: ${originalname} === [ვერ წავიკითხე]` });
    }
  }
  return parts;
}

function contentTypeFor(originalname) {
  const ext = originalname.split('.').pop().toLowerCase();
  const map = { pdf: 'application/pdf', xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    doc: 'application/msword', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' };
  return map[ext] || 'application/octet-stream';
}

// ── Health check ──────────────────────────────────────────────
app.get('/', (_, res) => res.json({ status: 'ok', version: '3.1' }));

// ── DELETE /request/:id — removes DB row + all storage files + linked prices ──
app.delete('/request/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (SUPABASE_URL && SUPABASE_KEY) {
      // Get request to find num, files, date
      const row = await sbGetRequest(id);
      const reqNum = row && row.num;
      const reqFiles = (row && row.files) || [];
      const reqDate = row && row.date;

      // 1. Delete request folder ({id}/*)
      await sbStorageDeleteFolder(id);

      // 2. Delete historical archive copies (historical/{date}/{filename})
      if (reqDate && reqFiles.length) {
        const histPaths = reqFiles.map(f => `historical/${reqDate}/${f.name}`);
        await sbStorageDeletePaths(histPaths);
      }

      // 3. Delete the request row
      await fetch(`${SUPABASE_URL}/rest/v1/requests?id=eq.${id}`, { method: 'DELETE', headers: SB_H() });

      // 4. Delete linked prices (unit_prices.request_id == num)
      if (reqNum) {
        await fetch(`${SUPABASE_URL}/rest/v1/unit_prices?request_id=eq.${encodeURIComponent(reqNum)}`,
          { method: 'DELETE', headers: SB_H() });
      }
    } else {
      await sbStorageDeleteFolder(id);
    }
    res.json({ ok: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});
app.get('/file/:requestId/:filename', async (req, res) => {
  try {
    const path = `${req.params.requestId}/${req.params.filename}`;
    const buf = await sbStorageDownload(path);
    if (!buf) return res.status(404).send('ფაილი ვერ მოიძებნა');
    res.setHeader('Content-Type', contentTypeFor(req.params.filename));
    res.setHeader('Content-Disposition', `inline; filename="${encodeURIComponent(req.params.filename)}"`);
    res.send(buf);
  } catch(e) {
    res.status(500).send(e.message);
  }
});

// ── /analyze ──────────────────────────────────────────────────
app.post('/analyze', upload.array('files', 20), async (req, res) => {
  try {
    const { project, num, description, chatHistory, question, requestId, status } = req.body;
    const uploadedFiles = req.files || [];

    let msgContent = [];
    let filesMeta = [];
    let hasContractorPricing = false;
    let pricedXlsFiles = []; // {name, buffer} — XLS files that contain prices

    if (uploadedFiles.length > 0) {
      for (const file of uploadedFiles) {
        const parts = await processFile(file.buffer, file.originalname);
        if (parts._xlsHasPrices) {
          hasContractorPricing = true;
          pricedXlsFiles.push({ name: file.originalname, buffer: file.buffer });
        }
        msgContent.push(...parts);
      }

      if (requestId) {
        for (const file of uploadedFiles) {
          const path = `${requestId}/${file.originalname}`;
          const ok = await sbStorageUpload(path, file.buffer, contentTypeFor(file.originalname));
          if (ok) filesMeta.push({ name: file.originalname, path, size: file.size, type: file.mimetype });
        }
        if (filesMeta.length > 0) {
          await sbSave({ id: requestId, num: num || requestId, project: project || '', files: filesMeta, updated_at: new Date().toISOString() });
        }
      }

    } else if (requestId) {
      const row = await sbGetRequest(requestId);
      filesMeta = (row && row.files) || [];
      for (const fm of filesMeta) {
        const buf = await sbStorageDownload(fm.path);
        if (buf) {
          const parts = await processFile(buf, fm.name);
          if (parts._xlsHasPrices) {
            hasContractorPricing = true;
            pricedXlsFiles.push({ name: fm.name, buffer: buf });
          }
          msgContent.push(...parts);
        }
      }
    }

    const systemPrompt =
      'შენ ხარ სს ენერგო-პრო ჯორჯიას ტექნიკური ექსპერტი — ' +
      'სამშენებლო და ელ-ტექნიკური პროექტების ინჟინერი. ' +
      'PDF ნახაზებს, სპეციფიკაციებს და XLS სამუშაოთა ცხრილებს ერთობლივად აანალიზებ. ' +
      'კონკრეტული რიცხვები, პოზიციები, შეუსაბამობები — ზოგადი ფრაზები არ გინდა.';

    const contextText = `პროექტი: ${project || '—'} | №${num || '—'}\n` +
      (description ? `შენიშვნა: ${description}\n` : '');

    if (question) {
      const messages = [];
      if (msgContent.length > 0) {
        messages.push({ role: 'user', content: [...msgContent, { type: 'text', text: contextText }] });
        messages.push({ role: 'assistant', content: 'კარგი, ფაილები გავეცანი.' });
      }
      if (chatHistory) {
        try {
          const hist = JSON.parse(chatHistory);
          hist.forEach(m => messages.push({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text }));
        } catch(e) {}
      }
      messages.push({ role: 'user', content: question });

      const answer = await callAI(systemPrompt, messages);
      return res.json({ type: 'chat', answer });

    } else {
      if (msgContent.length === 0) {
        return res.status(400).json({ error: 'ფაილები ვერ ვიპოვე — ატვირთე ან ხელახლა გააგზავნე' });
      }

      // ── Stage C: ისტორიული ფასები unit_prices-დან ──────────────
      let histPricesContext = '';
      if (SUPABASE_URL && SUPABASE_KEY) {
        try {
          // Pull all prices (paginated past Supabase's 1000-row cap)
          let hitems = [];
          let hfrom = 0;
          for (let i = 0; i < 20; i++) {
            const hpr = await fetch(
              `${SUPABASE_URL}/rest/v1/unit_prices?select=work_name,unit,unit_price,currency&order=created_at.desc`,
              { headers: { ...SB_H(), 'Range-Unit': 'items', 'Range': `${hfrom}-${hfrom + 999}` } }
            );
            const batch = await hpr.json();
            if (!Array.isArray(batch) || batch.length === 0) break;
            hitems = hitems.concat(batch);
            if (batch.length < 1000) break;
            hfrom += 1000;
          }
          if (hitems.length > 0) {
            const hmap = {};
            for (const it of hitems) {
              const key = (it.work_name || '').toLowerCase().trim();
              if (!key) continue;
              if (!hmap[key]) hmap[key] = { work_name: it.work_name, unit: it.unit || '', currency: it.currency || '₾', prices: [] };
              hmap[key].prices.push(parseFloat(it.unit_price) || 0);
            }
            const hlines = Object.values(hmap).map(g => {
              const avg = (g.prices.reduce((s, p) => s + p, 0) / g.prices.length).toFixed(2);
              return `${g.work_name} | ${avg} ${g.currency}/${g.unit}`;
            });
            if (hlines.length) histPricesContext = hlines.slice(0, 120).join('\n');
          }
        } catch (e) { console.error('unit_prices fetch:', e.message); }
      }

      const analysisPrompt = contextText +
        '\nგააკეთე ტექნიკური ანალიზი ზუსტად ამ სტრუქტურით (Markdown-ით, ## სათაურები, **bold** მნიშვნელოვანი ტერმინებისთვის):\n\n' +
        '## მოკლე შინაარსი\n' +
        '- **დასახელება:** (პროექტის სახელი/კოდი)\n' +
        '- **აღწერა:** 1-2 წინადადება რა კეთდება\n' +
        '- **ბიუჯეტი:** თუ ფაილებში მითითებულია თანხა, მიუთითე; თუ არა — "არ არის მითითებული"\n\n' +
        '## ძირითადი სამუშაოები\n' +
        'მხოლოდ ყველაზე მნიშვნელოვანი პოზიციები, **მაქსიმალურად მოკლედ** — ერთი ან ორი ცხრილი, არა 3-4. გააერთიანე მსგავსი კატეგორიები, გამოტოვე უმნიშვნელო/მცირე პოზიციები. საერთო მოცულობა არ უნდა აღემატებოდეს 8-10 სტრიქონს.\n\n' +
        '## შეუსაბამობები\n' +
        'მხოლოდ **მნიშვნელოვანი, რეალური** შეუსაბამობები PDF-სა და XLS-ს შორის — ისეთები, რაც გავლენას ახდენს ბიუჯეტზე, მოცულობებზე ან ტექნოლოგიაზე. ' +
        'ყურდაღება არ მიაქციო წვრილმან/უმნიშვნელო სხვაობებს (მაგ. დამრგვალება, ერთეულის ჩასწორება, უმნიშვნელო % განსხვავება). თითო პუნქტში მიუთითე **ზუსტი მდებარეობა**: გვერდი/ცხრილი/სტრიქონის №. თუ მნიშვნელოვანი შეუსაბამობა არ ნაპოვნია, დაწერე "მნიშვნელოვანი შეუსაბამობები არ ნაპოვნია".\n\n' +
        '## დასკვნა\n' +
        '2-3 წინადადებით ზოგადი შეფასება და რეკომენდაცია.\n\n' +
        (hasContractorPricing
          ? '## 📊 ფასების შედარება\n' +
            'ფაილებში არის კონტრაქტორის განფასება (მონიშნულია "[ფასებით]") და ჩვენი ჩამონათვალი (მონიშნულია "[ფასების გარეშე]"). ' +
            'შეადარე ისინი დასახელებებით (case-insensitive, მოქნილი matching):\n' +
            '- **ფასობრივი:** დამთხვეული პოზიციების ფასები (თუ ჩვენს ჩამონათვალში ფასი არ არის, შეადარე ისტორიულ/საბაზრო ფასს)\n' +
            '- **გამოტოვებული:** ჩვენთან არის, კონტრაქტორთან არა → რისკი: მერე დამატებით მოითხოვს\n' +
            '- **ზედმეტი:** კონტრაქტორთან არის, ჩვენთან არა → რისკი: ფასის გაბერვა\n' +
            'ცხრილით ან მოკლე ჩამონათვალით, მხოლოდ მნიშვნელოვანი სხვაობები.\n\n'
          : '') +
        'წეს — არანაირი ტექნიკური სიმბოლო ან კოდის ბლოკი, მხოლოდ ზემოთ მითითებული Markdown სათაურები და bold.' +
        (histPricesContext
          ? '\n\n## 💰 დაახლოებითი ღირებულება\n' +
            'ქვემოთ მოცემულია ისტორიული ერთეულის ფასები ბაზიდან (ფორმ: სამუშაო | საშ.ფასი ₾/ერთ.):\n' +
            histPricesContext +
            '\nშეადარე ამ ფაილებიდან ნაპოვნი სამუშაოები ისტორიულ ფასებს (case-insensitive, მოქნილი matching). ' +
            'გამოთვალე: Σ(რაოდ × ისტ.საშ.ფასი) ყველა დამთხვეული პოზიციისთვის. ' +
            'გამოიტანე ბოლოს: "სავარაუდო ღირებულება: ~X ₾ (Y პოზ. ბაზით, Z — ფასი უცნობია)"'
          : '\n\n## 💰 დაახლოებითი ღირებულება\n' +
            'დაწერე: "ფასების ბაზა ჯერ ცარიელია — ეტაპ B-ის შემდეგ ჩაივსება."');

      msgContent.push({ type: 'text', text: analysisPrompt });
      const summary = await callAI(systemPrompt, [{ role: 'user', content: msgContent }]);

      if (requestId) {
        await sbSave({
          id: requestId,
          num: num || requestId,
          project: project || '',
          analysis: summary,
          status: status || 'review',
          updated_at: new Date().toISOString()
        });
      }

      // Tell frontend whether a priced XLS exists (so it can show "add prices" button)
      // but DON'T add prices automatically — user controls that via separate action.
      return res.json({ type: 'analysis', summary, files: filesMeta, hasPricedXls: pricedXlsFiles.length > 0 });
    }

  } catch(e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

async function callAI(system, messages) {
  return callAIWithTokens(system, messages, 4096);
}

async function callAIWithTokens(system, messages, maxTokens) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type':      'application/json',
      'x-api-key':         ANTHROPIC_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({ model: MODEL, max_tokens: maxTokens || 4096, system, messages })
  });
  const d = await r.json();
  if (d.error) throw new Error(d.error.message);
  return (d.content || []).map(c => c.text || '').join('');
}

// Extract prices from a priced XLS buffer and save to unit_prices.
// Returns number of saved positions.
async function extractAndSavePrices(buffer, fileName, { projectName, contractor, requestNum, currency, date }) {
  const XLSX = require('xlsx');
  let text = '';
  try {
    const wb = XLSX.read(buffer, { type: 'buffer' });
    wb.SheetNames.forEach(name => {
      const ws = wb.Sheets[name];
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
      text += `=== ${name} ===\n`;
      rows.filter(r => r.some(c => c !== '')).slice(0, 200).forEach(row => {
        text += row.map(c => String(c)).join('\t') + '\n';
      });
    });
  } catch (e) { console.error('xls read:', e.message); return 0; }

  const prompt =
    `ეს არის სამშენებლო/ელ-ტექნიკური სამუშაოების განფასების XLS ფაილი:\n${text.slice(0, 16000)}\n\n` +
    `**ყურადღება:** ცხრილის სათაური (header) შესაძლოა არ იყოს პირველ რიგში — ხშირად პირველი 1-3 რიგი არის ` +
    `ობიექტის დასახელება/სათაური. რეალური სვეტების სათაურები (NN, დასახელება, განზომილება, რაოდენობა, ` +
    `ერთეულის ღირებულება/ფასი, სულ) უფრო ქვემოთ მოდის. იპოვე ფასების სვეტი ("ერთეულის ღირებულება", ` +
    `"unit price", "ფასი") და ამოიღე ფასიანი პოზიციები.\n\n` +
    `ამოიღე მხოლოდ ის პოზიციები, რომლებსაც აქვთ შევსებული **ერთეულის** ფასი (>0). ` +
    `(გაითვალისწინე: "ერთეულის ღირებულება" = unit price, "სულ/Total" = ჯამური — გვინდა ერთეულის ფასი, არა ჯამი).\n` +
    `გიპასუხე მხოლოდ JSON მასივით, სხვა ტექსტის გარეშე:\n` +
    `[{"work_name":"სამუშოს სახელი","quantity":0,"unit":"ერთ.","unit_price":0}]\n` +
    `- work_name: სამუშაოს დასახელება (ქართულად)\n` +
    `- unit_price: ერთეულის ფასი რიცხვად (აუცილებლად >0)\n` +
    `- quantity: რაოდენობა რიცხვად\n` +
    `- unit: ერთეული (მ³, მ², კგ, ც, გრძ.მ. და ა.შ.)\n` +
    `**მნიშვნელოვანი:** გამოტოვე სათაურები, ქვესექციების სახელები (მაგ. "სამშენებლო სამუშაოები"), ` +
    `და ის რიგები სადაც ფასი ცარიელია ან 0-ია. მხოლოდ რეალური განფასებული პოზიციები. JSON მასივი — ზუსტად, სხვა არაფერი.`;

  const raw = await callAIWithTokens('შენ ხარ ფინანსური ექსპერტი. XLS-დან ფასების ამოღება. მხოლოდ JSON მასივი.',
    [{ role: 'user', content: prompt }], 8192);

  let items = [];
  try {
    const cleaned = raw.replace(/```json|```/g, '').trim();
    const match = cleaned.match(/\[[\s\S]*\]/);
    if (match) items = JSON.parse(match[0]);
  } catch (e) { console.error('price JSON parse:', fileName, e.message); }

  let saved = 0;
  const cur = currency || '₾';
  const dt = date || new Date().toISOString().slice(0, 10);
  for (const item of items) {
    const price = parseFloat(item.unit_price) || 0;
    if (!item.work_name || price <= 0) continue;
    const r = await fetch(`${SUPABASE_URL}/rest/v1/unit_prices`, {
      method: 'POST',
      headers: { ...SB_H(), 'Prefer': 'return=minimal' },
      body: JSON.stringify({
        id: 'up_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
        project_name: projectName || '',
        contractor:   contractor || 'კონტრაქტორი',
        work_name:    String(item.work_name).trim(),
        quantity:     parseFloat(item.quantity) || 0,
        unit:         String(item.unit || '').trim(),
        unit_price:   price,
        currency:     cur,
        date:         dt,
        request_id:   requestNum || ''
      })
    });
    if (r.ok) saved++;
  }
  return saved;
}

// ── GET /check-request-prices — რამდენი ფასი აქვს მოთხოვნას ──────
app.get('/check-request-prices', async (req, res) => {
  try {
    const { requestId, num } = req.query;
    let reqNum = num;
    if (!reqNum && requestId) {
      const row = await sbGetRequest(requestId);
      reqNum = row ? (row.num || requestId) : requestId;
    }
    if (!reqNum) return res.json({ count: 0 });
    const r = await fetch(
      `${SUPABASE_URL}/rest/v1/unit_prices?request_id=eq.${encodeURIComponent(reqNum)}&select=id`,
      { headers: { ...SB_H(), 'Prefer': 'count=exact', 'Range': '0-0' } }
    );
    const cr = r.headers.get('content-range') || '';
    const total = parseInt((cr.split('/')[1] || '0'), 10) || 0;
    res.json({ count: total, reqNum });
  } catch (e) {
    res.json({ count: 0 });
  }
});

// ── POST /save-request-prices — მოთხოვნის ფასიანი XLS → unit_prices ──
// replace=true → ძველი ფასები წაიშლება და ახლით ჩაანაცვლებს
app.post('/save-request-prices', async (req, res) => {
  try {
    const { requestId, replace } = req.body;
    if (!requestId) return res.status(400).json({ error: 'requestId სავალდებულოა' });

    const row = await sbGetRequest(requestId);
    if (!row) return res.status(404).json({ error: 'მოთხოვნა ვერ მოიძებნა' });

    const reqNum = row.num || requestId;
    const doReplace = replace === 'true' || replace === true;

    // Duplicate check — already have prices for this request?
    const existCheck = await fetch(
      `${SUPABASE_URL}/rest/v1/unit_prices?request_id=eq.${encodeURIComponent(reqNum)}&select=id&limit=1`,
      { headers: SB_H() }
    );
    const existing = await existCheck.json();
    const hasExisting = Array.isArray(existing) && existing.length > 0;

    if (hasExisting && !doReplace) {
      return res.json({ ok: true, alreadyExists: true, pricesSaved: 0,
        message: 'ამ მოთხოვნის ფასები უკვე ბაზაშია' });
    }

    // Find XLS files — ჯერ requests.files, თუ ცარიელია — Storage-ის ფოლდერი
    let files = (row.files || []);
    if (!files.length) {
      files = await sbStorageListFolder(requestId);
      if (files.length) {
        await sbSave({ id: requestId, num: reqNum, files, updated_at: new Date().toISOString() });
      }
    }
    const xlsFiles = files.filter(f => /\.(xls|xlsx)$/i.test(f.name));
    if (!xlsFiles.length) return res.json({ ok: true, pricesSaved: 0, noPricedXls: true, message: 'XLS ფაილი არ მოიძებნა' });

    // replace → ჯერ ძველი ფასები წავშალოთ
    if (doReplace && hasExisting) {
      await fetch(
        `${SUPABASE_URL}/rest/v1/unit_prices?request_id=eq.${encodeURIComponent(reqNum)}`,
        { method: 'DELETE', headers: SB_H() }
      );
    }

    let totalSaved = 0;
    let pricedFound = false;
    for (const fm of xlsFiles) {
      const buf = await sbStorageDownload(fm.path);
      if (!buf) continue;
      const parts = await processFile(buf, fm.name);
      if (!parts._xlsHasPrices) continue;
      pricedFound = true;
      totalSaved += await extractAndSavePrices(buf, fm.name, {
        projectName: row.project || reqNum,
        contractor: row.contractor_name || 'კონტრაქტორი',
        requestNum: reqNum,
        currency: '₾',
        date: row.date || new Date().toISOString().slice(0, 10)
      });
    }

    if (!pricedFound) {
      return res.json({ ok: true, pricesSaved: 0, noPricedXls: true,
        message: 'ფასიანი XLS (განფასება) ვერ მოიძებნა' });
    }

    res.json({ ok: true, pricesSaved: totalSaved, replaced: doReplace && hasExisting });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// ── POST /compare-pricing — ეტაპი B ─────────────────────────────
app.post('/compare-pricing', upload.single('contractor_file'), async (req, res) => {
  try {
    const { requestId, contractorName, pricingDate, currency } = req.body;
    const cf = req.file;
    if (!cf || !requestId) {
      return res.status(400).json({ error: 'requestId და კონტრაქტორის ფაილი სავალდებულოა' });
    }

    const row = await sbGetRequest(requestId);
    if (!row) return res.status(404).json({ error: 'მოთხოვნა ვერ მოიძებნა' });

    const ourFiles = (row.files || []).filter(f => /\.(xls|xlsx)$/i.test(f.name));
    if (!ourFiles.length) {
      return res.status(400).json({ error: 'მოთხოვნაში XLS/XLSX ვერ მოიძებნა — ჯერ ეტაპ A ჩატარდეს' });
    }

    const XLSX = require('xlsx');
    const xlsText = (buf) => {
      const wb = XLSX.read(buf, { type: 'buffer' });
      let t = '';
      wb.SheetNames.forEach(name => {
        const ws = wb.Sheets[name];
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
        t += `=== ${name} ===\n`;
        rows.filter(r => r.some(c => c !== '')).slice(0, 200).forEach(row => {
          t += row.map(c => String(c)).join('\t') + '\n';
        });
      });
      return t.slice(0, 9000);
    };

    const ourBuf = await sbStorageDownload(ourFiles[0].path);
    if (!ourBuf) return res.status(500).json({ error: 'XLS ვერ ჩამოიტვირთა Storage-დან' });

    const ourText  = xlsText(ourBuf);
    const contrText = xlsText(cf.buffer);

    // Upload contractor file to storage
    const cfPath = `${requestId}/contractor/${cf.originalname}`;
    await sbStorageUpload(cfPath, cf.buffer, contentTypeFor(cf.originalname));

    const cname = contractorName || 'კონტრაქტორი';
    const prompt =
      `შეადარე ორი XLS ფაილი:\n\n` +
      `=== ჩვენი სამუშაოთა ჩამონათვალი ===\n${ourText}\n\n` +
      `=== კონტრაქტორის (${cname}) განფასება ===\n${contrText}\n\n` +
      `გამოავლინე შეუსაბამობები. დასახელებების დასაბმელად — ჭკვიანი matching ` +
      `(case-insensitive, სინონიმები, მოქნილი ფორმულირება). ` +
      `მხოლოდ მნიშვნელოვანი სხვაობები (>5% ან სრულად გამოტოვებული).\n\n` +
      `უპასუხე ამ სტრუქტურით (Markdown):\n\n` +
      `## ფასობრივი შეუსაბამობები\n` +
      `| სამუშაო | ჩვენი ერთ.ფასი | კონტ. ერთ.ფასი | სხვაობა | % |\n|---|---|---|---|---|\n\n` +
      `## გამოტოვებული პოზიციები (ჩვენთან → კონტრაქტორთან არა)\n- ...\n\n` +
      `## ზედმეტი პოზიციები (კონტრაქტორთან → ჩვენთან არა)\n- ...\n\n` +
      `## დასკვნა\n2-3 წინადადება: ჯამური სხვაობა, მთავარი რისკები.\n\n` +
      `ბოლოს, მხოლოდ ერთი JSON მასივი (სხვა ტექსტის გარეშე), ზუსტად ამ ფორმატით:\n` +
      `---JSON_PRICES---\n` +
      `[{"work_name":"სამუშაოს სახელი","quantity":10,"unit":"მ²","unit_price":50.0}]\n` +
      `---JSON_END---\n` +
      `(მხოლოდ კონტ. პოზიციები, რომლებიც ჩვენს ჩამონათვალშიც გვხვდება. გამოტოვებული პოზიციები JSON-ში არ შეიტანო.)`;

    const raw = await callAI(
      'შენ ხარ ტექნიკური და ფინანსური ექსპერტი. XLS შედარება — ზუსტი, კონკრეტული, ქართულად.',
      [{ role: 'user', content: prompt }]
    );

    // Extract JSON prices — handles both ---JSON_PRICES--- delimiters and ```json blocks
    let priceItems = [];
    // Try delimiter format first
    const jm1 = raw.match(/---JSON_PRICES---\n?([\s\S]*?)\n?---JSON_END---/);
    // Fallback: any ```json [...] ``` block that contains an array
    const jm2 = !jm1 && raw.match(/```json\n?(\[[\s\S]*?\])\n?```/);
    const jsonStr = jm1 ? jm1[1].trim() : (jm2 ? jm2[1].trim() : null);
    if (jsonStr) { try { priceItems = JSON.parse(jsonStr); } catch (e) { console.error('price JSON parse:', e.message); } }

    // Strip ALL json/code blocks from displayed summary
    const summary = raw
      .replace(/---JSON_PRICES---[\s\S]*?---JSON_END---/g, '')
      .replace(/```json[\s\S]*?```/g, '')
      .replace(/```[\s\S]*?```/g, '')
      .trim();

    // Save prices to unit_prices (Stage C data)
    const cur = currency || '₾';
    const dt = pricingDate || new Date().toISOString().split('T')[0];
    let savedCount = 0;
    for (const item of priceItems) {
      if (!item.work_name || item.unit_price == null) continue;
      const r2 = await fetch(`${SUPABASE_URL}/rest/v1/unit_prices`, {
        method: 'POST',
        headers: { ...SB_H(), 'Prefer': 'return=minimal' },
        body: JSON.stringify({
          id: 'up_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
          project_name: row.project || '',
          contractor:   cname,
          work_name:    item.work_name,
          quantity:     item.quantity || 0,
          unit:         item.unit || '',
          unit_price:   item.unit_price || 0,
          currency:     cur,
          date:         dt,
          request_id:   requestId
        })
      });
      if (r2.ok) savedCount++;
    }

    // Save comparison result to request row
    await sbSave({
      id: requestId,
      pricing_comparison: summary,
      contractor_name: cname,
      updated_at: new Date().toISOString()
    });

    res.json({ ok: true, summary, pricesSaved: savedCount });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// ── GET /rebuild-list — დასაამუშავებელი მოთხოვნების სია ──────────
app.get('/rebuild-list', async (req, res) => {
  try {
    if (!SUPABASE_URL || !SUPABASE_KEY) return res.status(500).json({ error: 'Supabase არ არის კონფიგურირებული' });
    let requests = [];
    let from = 0;
    for (let i = 0; i < 20; i++) {
      const r = await fetch(
        `${SUPABASE_URL}/rest/v1/requests?select=id,num&order=created_at.desc`,
        { headers: { ...SB_H(), 'Range-Unit': 'items', 'Range': `${from}-${from + 999}` } }
      );
      const batch = await r.json();
      if (!Array.isArray(batch) || batch.length === 0) break;
      requests = requests.concat(batch);
      if (batch.length < 1000) break;
      from += 1000;
    }
    res.json({ ok: true, requests: requests.map(r => ({ id: r.id, num: r.num })) });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── POST /rebuild-one — ერთი მოთხოვნის ფასების აღდგენა ───────────
// frontend ციკლში ერთ-ერთს უგზავნის — Render timeout-ის თავიდან აცილება
app.post('/rebuild-one', async (req, res) => {
  try {
    const { requestId } = req.body;
    if (!requestId) return res.status(400).json({ error: 'requestId სავალდებულოა' });

    const row = await sbGetRequest(requestId);
    if (!row) return res.json({ ok: true, num: requestId, status: 'not_found', pricesSaved: 0 });
    const reqNum = row.num || requestId;

    // უკვე აქვს ფასები?
    const existCheck = await fetch(
      `${SUPABASE_URL}/rest/v1/unit_prices?request_id=eq.${encodeURIComponent(reqNum)}&select=id&limit=1`,
      { headers: SB_H() }
    );
    const existing = await existCheck.json();
    if (Array.isArray(existing) && existing.length > 0) {
      return res.json({ ok: true, num: reqNum, status: 'already_has', pricesSaved: 0 });
    }

    // ფაილების წყარო: ჯერ requests.files, თუ ცარიელია — Storage-ის ფოლდერი
    let files = (row.files) || [];
    if (!files.length) {
      // Storage-ის ფოლდერი = requestId (req_...)
      files = await sbStorageListFolder(requestId);
      // აღვადგინოთ paths ბაზაში, რომ მომავალში დეტალებშიც ჩანდეს
      if (files.length) {
        await sbSave({ id: requestId, num: reqNum, files, updated_at: new Date().toISOString() });
      }
    }

    const xlsFiles = files.filter(f => /\.(xls|xlsx)$/i.test(f.name));
    if (!xlsFiles.length) {
      return res.json({ ok: true, num: reqNum, status: 'no_xls', pricesSaved: 0 });
    }

    let saved = 0;
    let foundPriced = false;
    for (const fm of xlsFiles) {
      const buf = await sbStorageDownload(fm.path);
      if (!buf) continue;
      const parts = await processFile(buf, fm.name);
      if (!parts._xlsHasPrices) continue;
      foundPriced = true;
      saved += await extractAndSavePrices(buf, fm.name, {
        projectName: row.project || reqNum,
        contractor: 'კონტრაქტორი',
        requestNum: reqNum,
        currency: '₾',
        date: row.date || new Date().toISOString().slice(0, 10)
      });
    }

    res.json({ ok: true, num: reqNum,
      status: foundPriced ? (saved > 0 ? 'done' : 'no_price_extracted') : 'no_priced_xls',
      pricesSaved: saved });
  } catch (e) {
    res.status(500).json({ error: e.message, num: req.body.requestId });
  }
});

// ── POST /rebuild-prices — ფასების ბაზის თავიდან აგება ────────────
// ყველა მოთხოვნის Storage-ის ფაილებიდან ფასიან XLS-ებს პოულობს და
// ფასებს თავიდან ამოიღებს. გამოიყენება მონაცემთა აღდგენისთვის.
app.post('/rebuild-prices', async (req, res) => {
  try {
    if (!SUPABASE_URL || !SUPABASE_KEY) return res.status(500).json({ error: 'Supabase არ არის კონფიგურირებული' });

    // 1. ყველა მოთხოვნის წამოღება (პაგინაციით)
    let requests = [];
    let from = 0;
    for (let i = 0; i < 20; i++) {
      const r = await fetch(
        `${SUPABASE_URL}/rest/v1/requests?select=id,num,project,date&order=created_at.desc`,
        { headers: { ...SB_H(), 'Range-Unit': 'items', 'Range': `${from}-${from + 999}` } }
      );
      const batch = await r.json();
      if (!Array.isArray(batch) || batch.length === 0) break;
      requests = requests.concat(batch);
      if (batch.length < 1000) break;
      from += 1000;
    }

    const summary = { totalRequests: requests.length, processed: 0, withPrices: 0, pricesSaved: 0, skipped: [], errors: [] };

    // 2. თითო მოთხოვნა — ფასიანი XLS იპოვე და ფასები ამოიღე
    for (const row of requests) {
      summary.processed++;
      const reqNum = row.num || row.id;

      try {
        // უკვე აქვს ფასები? (გამოტოვე, რომ დუბლი არ შეიქმნას)
        const existCheck = await fetch(
          `${SUPABASE_URL}/rest/v1/unit_prices?request_id=eq.${encodeURIComponent(reqNum)}&select=id&limit=1`,
          { headers: SB_H() }
        );
        const existing = await existCheck.json();
        if (Array.isArray(existing) && existing.length > 0) {
          summary.skipped.push({ num: reqNum, reason: 'უკვე აქვს ფასები' });
          continue;
        }

        // ფაილების სია
        const full = await sbGetRequest(row.id);
        const files = (full && full.files) || [];
        const xlsFiles = files.filter(f => /\.(xls|xlsx)$/i.test(f.name));
        if (!xlsFiles.length) {
          summary.skipped.push({ num: reqNum, reason: 'XLS არ აქვს' });
          continue;
        }

        // ფასიანი XLS-ები იპოვე და ფასები ამოიღე
        let savedForThis = 0;
        let foundPriced = false;
        for (const fm of xlsFiles) {
          const buf = await sbStorageDownload(fm.path);
          if (!buf) continue;
          const parts = await processFile(buf, fm.name);
          if (!parts._xlsHasPrices) continue;  // სპეციფიკაცია — გამოტოვე
          foundPriced = true;
          savedForThis += await extractAndSavePrices(buf, fm.name, {
            projectName: row.project || reqNum,
            contractor: 'კონტრაქტორი',
            requestNum: reqNum,
            currency: '₾',
            date: row.date || new Date().toISOString().slice(0, 10)
          });
        }

        if (foundPriced && savedForThis > 0) {
          summary.withPrices++;
          summary.pricesSaved += savedForThis;
        } else {
          summary.skipped.push({ num: reqNum, reason: foundPriced ? 'ფასი ვერ ამოვიდა' : 'ფასიანი XLS არ აქვს' });
        }
      } catch (e) {
        summary.errors.push({ num: reqNum, error: e.message });
      }
    }

    res.json({ ok: true, ...summary });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// ── GET /prices — ფასების ბაზის წამოღება ────────────────────────
app.get('/prices', async (req, res) => {
  try {
    if (!SUPABASE_URL || !SUPABASE_KEY) return res.json({ items: [] });

    // Supabase caps each request at 1000 rows. Paginate with Range headers
    // to pull the full price database.
    const pageSize = 1000;
    let from = 0;
    let all = [];
    for (let i = 0; i < 50; i++) {  // safety cap: 50k rows
      const r = await fetch(
        `${SUPABASE_URL}/rest/v1/unit_prices?select=*&order=created_at.desc`,
        { headers: { ...SB_H(), 'Range-Unit': 'items', 'Range': `${from}-${from + pageSize - 1}` } }
      );
      const batch = await r.json();
      if (!Array.isArray(batch) || batch.length === 0) break;
      all = all.concat(batch);
      if (batch.length < pageSize) break;  // last page
      from += pageSize;
    }
    res.json({ items: all });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// ── POST /delete-file — ერთი ფაილის წაშლა (Storage + requests.files) ──
app.post('/delete-file', async (req, res) => {
  try {
    const { requestId, fileName } = req.body;
    if (!requestId || !fileName) return res.status(400).json({ error: 'requestId და fileName სავალდებულოა' });

    const row = await sbGetRequest(requestId);
    if (!row) return res.status(404).json({ error: 'მოთხოვნა ვერ მოიძებნა' });

    const files = (row.files || []);
    const target = files.find(f => f.name === fileName);
    const storagePath = (target && target.path) || `${requestId}/${fileName}`;

    // Storage-დან წაშლა
    const encodedPath = String(storagePath).split('/').map(encodeURIComponent).join('/');
    await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${encodedPath}`, {
      method: 'DELETE',
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY }
    });

    // requests.files-დან ამოღება
    const remaining = files.filter(f => f.name !== fileName);
    await sbSave({ id: requestId, num: row.num || requestId, files: remaining, updated_at: new Date().toISOString() });

    res.json({ ok: true, files: remaining });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// ── POST /upload-files — ფაილების Storage-ში ატვირთვა (ანალიზის გარეშე) ──
app.post('/upload-files', upload.array('files', 50), async (req, res) => {
  try {
    const { requestId, project, num } = req.body;
    const files = req.files || [];
    if (!requestId || !files.length) return res.status(400).json({ error: 'requestId და ფაილები სავალდებულოა' });

    const newMeta = [];
    const failed = [];
    for (const file of files) {
      const path = `${requestId}/${file.originalname}`;
      const ok = await sbStorageUpload(path, file.buffer, contentTypeFor(file.originalname));
      // ფაილს მაინც ვამატებთ ბაზაში — ან აიტვირთა, ან უკვე Storage-შია (upsert).
      // ასე requests.files არასდროს რჩება ცარიელი ატვირთვის შემდეგ.
      newMeta.push({ name: file.originalname, path, size: file.size, type: file.mimetype });
      if (!ok) failed.push(file.originalname);
    }

    // Merge with existing files (append, don't overwrite). Dedupe by name.
    const row = await sbGetRequest(requestId);
    const existing = (row && row.files) || [];
    const byName = {};
    for (const f of existing) byName[f.name] = f;
    for (const f of newMeta) byName[f.name] = f;  // new replaces same-name
    const merged = Object.values(byName);
    await sbSave({
      id: requestId,
      num: (row && row.num) || num || requestId,
      project: (row && row.project) || project || '',
      files: merged,
      updated_at: new Date().toISOString()
    });
    return res.json({ ok: true, files: merged, added: newMeta.length, failed });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// ── POST /import-prices — საწყისი ფასების ბაზის შევსება ─────────
app.post('/import-prices', upload.array('files', 50), async (req, res) => {
  try {
    const { project_name, contractor, date, currency } = req.body;
    const files = req.files || [];
    if (!files.length) return res.status(400).json({ error: 'ფაილი ვერ მოიძებნა' });

    const cur = currency || '₾';
    const dt  = date || new Date().toISOString().slice(0, 10);
    const contrName = contractor || 'საწყისი';
    const results = [];

    // ფოლდერის სახელი = მოთხოვნის № = პროექტი
    const reqNum = (project_name || '').trim() || ('import_' + Date.now());
    const requestId = 'req_' + reqNum.replace(/[^a-zA-Z0-9_\-]/g, '_') + '_' + Date.now();

    // 1. ფაილების ატვირთვა Storage-ში — პარალელურად (timeout-ის თავიდან აცილება)
    const filesMeta = [];
    await Promise.all(files.map(async (file) => {
      const reqPath = `${requestId}/${file.originalname}`;
      const histPath = `historical/${dt}/${file.originalname}`;
      const [ok] = await Promise.all([
        sbStorageUpload(reqPath, file.buffer, contentTypeFor(file.originalname)),
        sbStorageUpload(histPath, file.buffer, contentTypeFor(file.originalname))
      ]);
      if (ok) filesMeta.push({ name: file.originalname, path: reqPath, size: file.size, type: file.mimetype });
    }));

    // 2. ფასების ამოღება — მხოლოდ ფასიანი XLS-დან (ახალი დეტექცია: multi-row header)
    for (const file of files) {
      const isXls = /\.(xls|xlsx)$/i.test(file.originalname);
      if (!isXls) {
        results.push({ file: file.originalname, storagePath: `historical/${dt}/${file.originalname}`, itemsSaved: 0, total: 0, type: 'storage-only' });
        continue;
      }

      // იგივე დეტექცია, რასაც processFile იყენებს
      const parts = await processFile(file.buffer, file.originalname);
      if (!parts._xlsHasPrices) {
        // ფასების გარეშე XLS (სპეციფიკაცია/დაზუსტება) — ფასები არ ამოიღება
        results.push({ file: file.originalname, storagePath: `historical/${dt}/${file.originalname}`, itemsSaved: 0, total: 0, type: 'no-prices' });
        continue;
      }

      const saved = await extractAndSavePrices(file.buffer, file.originalname, {
        projectName: reqNum,
        contractor:  contrName,
        requestNum:  reqNum,
        currency:    cur,
        date:        dt
      });
      results.push({ file: file.originalname, storagePath: `historical/${dt}/${file.originalname}`, itemsSaved: saved, total: saved });
    }

    // 3. მოთხოვნის შექმნა — "დასრულებული" სტატუსით
    if (filesMeta.length > 0) {
      await sbSave({
        id: requestId,
        num: reqNum,
        project: reqNum,
        initiator: contrName,
        cat: 'service',
        priority: 'mid',
        status: 'done',
        files: filesMeta,
        date: dt,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });
    }

    res.json({ ok: true, results, requestId, requestNum: reqNum });

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
