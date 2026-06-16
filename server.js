const express = require('express');
const multer  = require('multer');
const cors    = require('cors');
const fetch   = (...a) => import('node-fetch').then(({default: f}) => f(...a));

const app    = express();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } });

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
    const r = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': 'Bearer ' + SUPABASE_KEY,
        'Content-Type': contentType || 'application/octet-stream',
        'x-upsert': 'true'
      },
      body: buffer
    });
    return r.ok;
  } catch(e) { console.error('Storage upload error:', e.message); return false; }
}

async function sbStorageDownload(path) {
  if (!SUPABASE_URL || !SUPABASE_KEY) return null;
  try {
    const r = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY }
    });
    if (!r.ok) return null;
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
          const hpr = await fetch(
            `${SUPABASE_URL}/rest/v1/unit_prices?select=work_name,unit,unit_price,currency&limit=500`,
            { headers: SB_H() }
          );
          const hitems = await hpr.json();
          if (Array.isArray(hitems) && hitems.length > 0) {
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
            if (hlines.length) histPricesContext = hlines.slice(0, 80).join('\n');
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

// ── POST /save-request-prices — მოთხოვნის ფასიანი XLS → unit_prices ──
// დუბლის დაცვით: ჯერ ამოწმებს უკვე არსებობს თუ არა ამ მოთხოვნის ფასები
app.post('/save-request-prices', async (req, res) => {
  try {
    const { requestId } = req.body;
    if (!requestId) return res.status(400).json({ error: 'requestId სავალდებულოა' });

    const row = await sbGetRequest(requestId);
    if (!row) return res.status(404).json({ error: 'მოთხოვნა ვერ მოიძებნა' });

    const reqNum = row.num || requestId;

    // Duplicate check — already have prices for this request?
    const existCheck = await fetch(
      `${SUPABASE_URL}/rest/v1/unit_prices?request_id=eq.${encodeURIComponent(reqNum)}&select=id&limit=1`,
      { headers: SB_H() }
    );
    const existing = await existCheck.json();
    if (Array.isArray(existing) && existing.length > 0) {
      return res.json({ ok: true, alreadyExists: true, pricesSaved: 0,
        message: 'ამ მოთხოვნის ფასები უკვე ბაზაშია' });
    }

    // Find priced XLS files in the request
    const xlsFiles = (row.files || []).filter(f => /\.(xls|xlsx)$/i.test(f.name));
    if (!xlsFiles.length) return res.json({ ok: true, pricesSaved: 0, message: 'XLS ფაილი არ მოიძებნა' });

    let totalSaved = 0;
    let pricedFound = false;
    for (const fm of xlsFiles) {
      const buf = await sbStorageDownload(fm.path);
      if (!buf) continue;
      // Re-check this XLS has prices
      const parts = await processFile(buf, fm.name);
      if (!parts._xlsHasPrices) continue;  // skip non-priced (ჩვენი ჩამონათვალი/დაზუსტება)
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

    res.json({ ok: true, pricesSaved: totalSaved });
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

// ── GET /prices — ფასების ბაზის წამოღება ────────────────────────
app.get('/prices', async (req, res) => {
  try {
    if (!SUPABASE_URL || !SUPABASE_KEY) return res.json({ items: [] });
    const r = await fetch(
      `${SUPABASE_URL}/rest/v1/unit_prices?select=*&order=created_at.desc&limit=2000`,
      { headers: SB_H() }
    );
    const items = await r.json();
    res.json({ items: Array.isArray(items) ? items : [] });
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

    const filesMeta = [];
    for (const file of files) {
      const path = `${requestId}/${file.originalname}`;
      const ok = await sbStorageUpload(path, file.buffer, contentTypeFor(file.originalname));
      if (ok) filesMeta.push({ name: file.originalname, path, size: file.size, type: file.mimetype });
    }
    if (filesMeta.length > 0) {
      await sbSave({ id: requestId, num: num || requestId, project: project || '', files: filesMeta, updated_at: new Date().toISOString() });
    }
    res.json({ ok: true, files: filesMeta });
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

    const XLSX = require('xlsx');
    const cur = currency || '₾';
    const dt  = date || new Date().toISOString().slice(0, 10);
    const results = [];

    // ფოლდერის სახელი = მოთხოვნის № = პროექტი
    const reqNum = (project_name || '').trim() || ('import_' + Date.now());
    const requestId = 'req_' + reqNum.replace(/[^a-zA-Z0-9_\-]/g, '_') + '_' + Date.now();
    const filesMeta = [];

    for (const file of files) {
      // 1. Storage — ისტორიული არქივი
      const storagePath = `historical/${dt}/${file.originalname}`;
      await sbStorageUpload(storagePath, file.buffer, contentTypeFor(file.originalname));
      // 2. Storage — მოთხოვნის სივრცე (რომ მოთხოვნის დეტალებში ჩანდეს)
      const reqPath = `${requestId}/${file.originalname}`;
      const ok = await sbStorageUpload(reqPath, file.buffer, contentTypeFor(file.originalname));
      if (ok) filesMeta.push({ name: file.originalname, path: reqPath, size: file.size, type: file.mimetype });

      const isXls = /\.(xls|xlsx)$/i.test(file.originalname);

      if (!isXls) {
        // PDF და სხვა — მხოლოდ Storage-ში
        results.push({ file: file.originalname, storagePath, itemsSaved: 0, total: 0, type: 'storage-only' });
        continue;
      }

      // XLS — ფასების ამოღება AI-ით
      const wb = XLSX.read(file.buffer, { type: 'buffer' });
      let text = '';
      wb.SheetNames.forEach(name => {
        const ws   = wb.Sheets[name];
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
        text += `=== ${name} ===\n`;
        rows.filter(r => r.some(c => c !== '')).slice(0, 200).forEach(row => {
          text += row.map(c => String(c)).join('\t') + '\n';
        });
      });

      const prompt =
        `ეს XLS ფაილია განფასებით:\n${text.slice(0, 9000)}\n\n` +
        `ამოიღე მხოლოდ ის პოზიციები, რომლებსაც აქვთ შევსებული ერთეულის ფასი (>0). ` +
        `გიპასუხე მხოლოდ JSON მასივით, სხვა ტექსტის გარეშე:\n` +
        `[{"work_name":"სამუშოს სახელი","quantity":0,"unit":"ერთ.","unit_price":0}]\n` +
        `- unit_price: ერთეულის ფასი რიცხვად (აუცილებლად >0)\n` +
        `- unit: ერთეული (მ², კგ, ც, გრ.მ. და ა.შ.)\n` +
        `**მნიშვნელოვანი:** თუ პოზიციას ფასი არ აქვს ან 0-ია — საერთოდ გამოტოვე, JSON-ში არ შეიტანო. ` +
        `მხოლოდ განფასებული პოზიციები. JSON მასივი — ზუსტად, სხვა არარა.`;

      const raw = await callAI(
        'შენ ხარ ფინანსური ექსპერტი. XLS-დან ფასების ამოღება. მხოლოდ JSON მასივი.',
        [{ role: 'user', content: prompt }]
      );

      let items = [];
      try {
        const cleaned = raw.replace(/```json|```/g, '').trim();
        const match = cleaned.match(/\[[\s\S]*\]/);
        if (match) items = JSON.parse(match[0]);
      } catch (e) { console.error('JSON parse:', file.originalname, e.message); }

      let saved = 0;
      const contrName = contractor || 'საწყისი';

      for (const item of items) {
        const price = parseFloat(item.unit_price) || 0;
        if (!item.work_name || price <= 0) continue;  // only priced positions
        const r = await fetch(`${SUPABASE_URL}/rest/v1/unit_prices`, {
          method: 'POST',
          headers: { ...SB_H(), 'Prefer': 'return=minimal' },
          body: JSON.stringify({
            id: 'up_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
            project_name: reqNum,
            contractor:   contrName,
            work_name:    String(item.work_name).trim(),
            quantity:     parseFloat(item.quantity) || 0,
            unit:         String(item.unit || '').trim(),
            unit_price:   price,
            currency:     cur,
            date:         dt,
            request_id:   reqNum
          })
        });
        if (r.ok) saved++;
      }

      results.push({ file: file.originalname, storagePath, itemsSaved: saved, total: items.length });
    }

    // მოთხოვნის შექმნა — "დასრულებული" სტატუსით
    if (filesMeta.length > 0) {
      await sbSave({
        id: requestId,
        num: reqNum,
        project: reqNum,
        initiator: contractor || 'საწყისი',
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
