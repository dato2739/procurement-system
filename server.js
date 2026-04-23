const express = require('express');
const multer  = require('multer');
const cors    = require('cors');
const fetch   = (...a) => import('node-fetch').then(({default: f}) => f(...a));

const app    = express();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } });

app.use(cors());
app.use(express.json({ limit: '50mb' }));

const ANTHROPIC_KEY = process.env.ANTHROPIC_KEY;
const MODEL         = 'claude-haiku-4-5-20251001';

// ── Health check ──────────────────────────────────────────────
app.get('/', (_, res) => res.json({ status: 'ok', version: '1.0' }));

// ── /analyze  (multipart: files[] + optional body fields) ─────
app.post('/analyze', upload.array('files', 20), async (req, res) => {
  try {
    const { project, num, description, chatHistory, question } = req.body;
    const files = req.files || [];

    const msgContent = [];

    // ── Process uploaded files ─────────────────────────────────
    for (const file of files) {
      const ext = file.originalname.split('.').pop().toLowerCase();

      if (ext === 'pdf') {
        // Send PDF as base64 document block
        const b64 = file.buffer.toString('base64');
        msgContent.push({
          type: 'document',
          source: { type: 'base64', media_type: 'application/pdf', data: b64 }
        });
        msgContent.push({ type: 'text', text: `=== PDF: ${file.originalname} ===` });

      } else if (['xls','xlsx'].includes(ext)) {
        // Parse XLS with xlsx library
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
          text += '\n';
        });
        msgContent.push({ type: 'text', text: `=== XLS: ${file.originalname} ===\n${text.slice(0, 15000)}` });

      } else if (['doc','docx'].includes(ext)) {
        // mammoth for Word
        try {
          const mammoth = require('mammoth');
          const result  = await mammoth.extractRawText({ buffer: file.buffer });
          msgContent.push({ type: 'text', text: `=== WORD: ${file.originalname} ===\n${result.value.slice(0, 10000)}` });
        } catch(e) {
          msgContent.push({ type: 'text', text: `=== WORD: ${file.originalname} === [ვერ წავიკითხე]` });
        }
      }
    }

    // ── System prompt ─────────────────────────────────────────
    const systemPrompt =
      'შენ ხარ სს ენერგო-პრო ჯორჯიას ტექნიკური ექსპერტი — ' +
      'სამშენებლო და ელ-ტექნიკური პროექტების ინჟინერი. ' +
      'PDF ნახაზებს, სპეციფიკაციებს და XLS სამუშაოთა ცხრილებს ერთობლივად აანალიზებ. ' +
      'კონკრეტული რიცხვები, პოზიციები, შეუსაბამობები — ზოგადი ფრაზები არ გინდა.';

    // ── Build user message ────────────────────────────────────
    const contextText =
      `პროექტი: ${project || '—'} | №${num || '—'}\n` +
      (description ? `შენიშვნა: ${description}\n` : '');

    if (question) {
      // ── CHAT MODE ─────────────────────────────────────────
      const messages = [];

      // file context as first turn
      if (msgContent.length > 0) {
        const fileMsg = [...msgContent, { type: 'text', text: contextText + '\nფაილები გავეცანი.' }];
        messages.push({ role: 'user',      content: fileMsg });
        messages.push({ role: 'assistant', content: 'კარგი, ფაილები გავეცანი. დამისვი კითხვები.' });
      }

      // previous chat history
      if (chatHistory) {
        const hist = JSON.parse(chatHistory);
        hist.forEach(m => messages.push({ role: m.role, content: m.text }));
      }

      messages.push({ role: 'user', content: question });

      const resp = await callAI(systemPrompt, messages);
      return res.json({ type: 'chat', answer: resp });

    } else {
      // ── ANALYSIS MODE ─────────────────────────────────────
      const analysisPrompt =
        contextText +
        '\nზემოთ გაქვს PDF ნახაზები და XLS სამუშაოთა ცხრილი.\n' +
        'გააკეთე მოკლე ტექნიკური შეჯამება:\n' +
        '1. რა პროექტია (ობიექტი, სახელი)\n' +
        '2. სამუშაოების ძირითადი სახეები\n' +
        '3. ძირითადი მასალები და მოცულობები (ბეტონი მ³, არმატურა კგ)\n' +
        '4. 2-3 ტექნიკური შენიშვნა ან შეუსაბამობა PDF vs XLS\n\n' +
        'მოკლედ და კონკრეტულად.';

      msgContent.push({ type: 'text', text: analysisPrompt });

      const resp = await callAI(systemPrompt, [{ role: 'user', content: msgContent }]);
      return res.json({ type: 'analysis', summary: resp });
    }

  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// ── Helper: call Anthropic ─────────────────────────────────────
async function callAI(system, messages) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type':    'application/json',
      'x-api-key':       ANTHROPIC_KEY,
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
