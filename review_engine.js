// Rule-governed technical chat engine.
//
// Builds a system prompt for the review-status chat from the synced
// CLAUDE.md core rules + the one/two most relevant specialist agent file(s)
// + a handful of relevant Knowledge Base snippets — instead of loading the
// entire ~940KB rule set into every call (too big, too slow, too expensive).
//
// Source content lives in review_rules/ (populated by review_rules/sync_rules.js,
// run manually on David's machine whenever CLAUDE.md/agents/KB change in the
// sibling First_Agents project — see that script's header comment).
//
// This module is intentionally simple (keyword scoring, no embeddings/vector DB) —
// the KB is small (~800KB / ~50 files) and doesn't need more than that yet.

const fs = require('fs');
const path = require('path');

const RULES_ROOT = path.join(__dirname, 'review_rules');

const AGENT_FILES = {
  coordinator:     '01_main_coordinator.md',
  technical_spec:  '02_technical_specification.md',
  standards:       '03_standards_compliance.md',
  supplier_offer:  '04_supplier_offer_review.md',
  drawing:         '05_drawing_schematics_review.md',
  relay_protection: '06_relay_protection.md'
};

// Keyword groups per agent, mirroring CLAUDE.md §5.1's routing table (Georgian + English).
const AGENT_KEYWORDS = {
  drawing: [
    'ნახაზ', 'სქემა', 'ერთხაზოვან', 'გეგმარ', 'schematic', 'single-line', 'sld',
    'wiring', 'terminal diagram', 'ტერმინალ', 'layout', 'განლაგებ', 'cable schedule',
    'კაბელის ცხრილ'
  ],
  relay_protection: [
    'დაცვ', 'რელე', 'relay', 'trip', 'ტრიპ', 'ინტერლოკ', 'interlock', 'ct/vt',
    'protection', 'i/o', 'alarm', 'ავარიულ სიგნალ', 'settings', 'coordination'
  ],
  standards: [
    'სტანდარტ', 'iec', 'gost', 'gnerc', 'ieee', 'სავალდებულო', 'compliance',
    'შესაბამისობ', 'რეგულაცი', 'ნორმატიულ'
  ],
  supplier_offer: [
    'მომწოდებელ', 'შეთავაზებ', 'offer', 'proposal', 'დეფსავიაცი', 'deviation',
    'კონტრაქტორ', 'contractor', 'datasheet', 'დატაშიტ'
  ],
  technical_spec: [
    'ტექნიკური დავალებ', 'სპეციფიკაცი', 'specification', 'ვენდორ-ნეიტრალურ',
    'vendor-neutral', 'template', 'შაბლონ'
  ]
};

let _cache = null;

function loadAll() {
  if (_cache) return _cache;

  const coreRules = fs.readFileSync(path.join(RULES_ROOT, 'core', 'CLAUDE.md'), 'utf8');

  const agents = {};
  for (const [key, filename] of Object.entries(AGENT_FILES)) {
    const p = path.join(RULES_ROOT, 'agents', filename);
    if (fs.existsSync(p)) agents[key] = fs.readFileSync(p, 'utf8');
  }

  const kb = [];
  const kbRoot = path.join(RULES_ROOT, 'kb');
  if (fs.existsSync(kbRoot)) {
    for (const folder of fs.readdirSync(kbRoot)) {
      const folderPath = path.join(kbRoot, folder);
      if (!fs.statSync(folderPath).isDirectory()) continue;
      for (const file of fs.readdirSync(folderPath)) {
        if (!file.endsWith('.md') || file === 'README.md') continue;
        kb.push({
          folder,
          file,
          text: fs.readFileSync(path.join(folderPath, file), 'utf8')
        });
      }
    }
  }

  _cache = { coreRules, agents, kb };
  return _cache;
}

// Picks 0-2 specialist agents whose keywords appear in the question.
// Falls back to 'coordinator' if nothing matches.
function selectAgents(question) {
  const q = (question || '').toLowerCase();
  const scored = Object.entries(AGENT_KEYWORDS)
    .map(([key, words]) => ({ key, score: words.filter(w => q.includes(w)).length }))
    .filter(a => a.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) return ['coordinator'];
  return scored.slice(0, 2).map(a => a.key);
}

// Simple keyword-overlap scoring across the KB text corpus.
// Only returns docs that actually matched something — no match means the
// answer must be marked Assumption / Not Verified rather than invented.
function retrieveKB(question, topN = 5) {
  const { kb } = loadAll();
  const tokens = (question || '')
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(t => t.length >= 4);

  if (tokens.length === 0) return [];

  const scored = kb.map(doc => {
    const haystack = (doc.file + ' ' + doc.text).toLowerCase();
    let score = 0;
    for (const t of tokens) {
      const filenameHit = doc.file.toLowerCase().includes(t) ? 3 : 0;
      const bodyHits = haystack.split(t).length - 1;
      score += filenameHit + bodyHits;
    }
    return { ...doc, score };
  })
  .filter(d => d.score > 0)
  .sort((a, b) => b.score - a.score);

  return scored.slice(0, topN);
}

function buildSystemPrompt(question) {
  const { coreRules, agents } = loadAll();
  const selectedAgents = selectAgents(question);
  const kbMatches = retrieveKB(question);

  let prompt = `შენ ხარ 6–10 kV ელექტრო-ტექნიკური რევიუს პროფესიონალური აგენტი, რომელიც მუშაობს ქვემოთ მოცემული წესების (CLAUDE.md) მიხედვით. ეს წესები სავალდებულოა და აქტუალურია.\n\n`;

  prompt += `=== ძირითადი წესები (CLAUDE.md) ===\n${coreRules}\n\n`;

  for (const key of selectedAgents) {
    if (agents[key]) {
      prompt += `=== სპეციალისტი აგენტი: ${key} ===\n${agents[key]}\n\n`;
    }
  }

  if (kbMatches.length > 0) {
    prompt += `=== ცოდნის ბაზის შესაბამისი ამონარიდები (ციტირებისას გამოიყენე ფაილის სახელი) ===\n`;
    for (const m of kbMatches) {
      prompt += `--- ფაილი: ${m.file} ---\n${m.text}\n\n`;
    }
  } else {
    prompt += `=== ცოდნის ბაზა ===\n(ამ კონკრეტულ შეკითხვასთან პირდაპირი შესაბამისობა ცოდნის ბაზაში ვერ მოიძებნა — თუ პასუხი ზოგად ტექნიკურ ცოდნას ეყრდნობა, მკაფიოდ მონიშნე როგორც Assumption / Not Verified / Engineer Review Required, CLAUDE.md §3.1-ის მიხედვით.)\n\n`;
  }

  prompt += `=== მნიშვნელოვანი შეზღუდვა ===\nარასდროს გააკეთო ფასების, ბიუჯეტის ან სხვა კომერციული ანალიზი — ეს ცალკე ფუნქციაა ამ აპში (ტექნიკური და კომერციული ანალიზი განცალკევებულია, CLAUDE.md §24). თუ მომხმარებელი ფასებზე გკითხავს, თავაზიანად უთხარი, რომ ამისთვის აპის ფასების შედარების ფუნქცია გამოიყენოს.\n\n`;

  prompt += `=== ჩატის რეჟიმის შენიშვნა ===\nეს არის სწრაფი, საუბრული ტექნიკური კონსულტაცია (არა ფორმალური სრული რევიუ-რეპორტი) — მაგრამ ციტირების ფორმატი (CLAUDE.md §5.3) და სტატუსების დისციპლინა (§5.4) მაინც უნდა დაიცვა, მოკლედ და პრაქტიკულად.`;

  return prompt;
}

module.exports = { buildSystemPrompt, selectAgents, retrieveKB, loadAll };
