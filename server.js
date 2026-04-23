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

// ── Supabase helper ───────────────────────────────────────────
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

// ── Health check ──────────────────────────────────────────────
app.get('/', (_, res) => res.json({ status: 'ok', version: '2.0' }));

// ── /analyze ──────────────────────────────────────────────────
app.post('/analyze', upload.array('files', 20), async (req, res) => {
  try {
    const { project, num, description, chatHistory, question, requestId, status } = req.body;
    const files = req.files || [];

    const msgContent = [];

    // Process files
    for (const file of files) {
      const ext = file.originalname.split('.').pop().toLowerCase();

      if (ext === 'pdf') {
        const b64 = file.buffer.toString('base64');
        msgContent.push({ type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: b64 } });
        msgContent.push({ type: 'text', text: `=== PDF: ${file.originalname} ===` });

      } else if (['xls','xlsx'].includes(ext)) {
        const XLSX = require('xlsx');
        const wb   = XLSX.read(file.buffer, { type: 'buffer' });
        let text   = '';
        wb.SheetNames.forEach(name => {
          const ws   = wb.Sheets[name];
          const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
          text += `=== ${name} ===\n`;
          rows.filter(r => r.some(c => c !== '')).slice(0, 150).forEach(row => {
            text += row.map(c => String(c)).join('\t') + '\n';
          });
        });
        msgContent.push({ type: 'text', text: `=== XLS: ${file.originalname} ===\n${text.slice(0, 15000)}` });

      } else if (['doc','docx'].includes(ext)) {
        try {
          const mammoth = require('mammoth');
          const result  = await mammoth.extractRawText({ buffer: file.buffer });
          msgContent.push({ type: 'text', text: `=== WORD: ${file.originalname} ===\n${result.value.slice(0, 10000)}` });
        } catch(e) {
          msgContent.push({ type: 'text', text: `=== WORD: ${file.originalname} === [ვერ წავიკითხე]` });
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
      // CHAT MODE
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
      // ANALYSIS MODE
      const analysisPrompt = contextText +
        '\nგააკეთე მოკლე ტექნიკური შეჯამება:\n' +
        '1. რა პროექტია (ობიექტი, სახელი)\n' +
        '2. სამუშაოების ძირითადი სახეები\n' +
        '3. ძირითადი მასალები და მოცულობები (ბეტონი მ³, არმატურა კგ)\n' +
        '4. 2-3 ტექნიკური შენიშვნა ან შეუსაბამობა PDF vs XLS\n\n' +
        'მოკლედ და კონკრეტულად.';

      msgContent.push({ type: 'text', text: analysisPrompt });
      const summary = await callAI(systemPrompt, [{ role: 'user', content: msgContent }]);

      // Save to Supabase
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

      return res.json({ type: 'analysis', summary });
    }

  } catch(e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// ── Anthropic helper ──────────────────────────────────────────
async function callAI(system, messages) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type':      'application/json',
      'x-api-key':         ANTHROPIC_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({ model: MODEL, max_tokens: 2000, system, messages })
  });
  const d = await r.json();
  if (d.error) throw new Error(d.error.message);
  return (d.content || []).map(c => c.text || '').join('');
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
