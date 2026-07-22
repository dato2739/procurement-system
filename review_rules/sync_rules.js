// Syncs the 6-10kV technical review rules (CLAUDE.md + agent files + text-based
// Knowledge Base) from the sibling First_Agents project into this repo, so the
// procurement-system chat can use them as its system prompt.
//
// This script only runs LOCALLY (on David's machine, where both projects live
// side by side under C:\Claude\). Render cannot reach First_Agents at request
// time, so the rules must be copied in and committed/pushed like any other file.
//
// Usage:  node review_rules/sync_rules.js
// After running: review the diff, then `git add review_rules && git commit && git push`
// to actually update the deployed chat.

const fs = require('fs');
const path = require('path');

const SOURCE_ROOT = path.join(__dirname, '..', '..', 'First_Agents');
const OUT_ROOT = __dirname;

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyMdFiles(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return 0;
  let count = 0;
  for (const name of fs.readdirSync(srcDir)) {
    if (!name.endsWith('.md')) continue;
    copyFile(path.join(srcDir, name), path.join(destDir, name));
    count++;
  }
  return count;
}

function main() {
  if (!fs.existsSync(SOURCE_ROOT)) {
    console.error(`First_Agents not found at ${SOURCE_ROOT}. This script must run on David's machine.`);
    process.exit(1);
  }

  // 1. Core rules
  copyFile(path.join(SOURCE_ROOT, 'CLAUDE.md'), path.join(OUT_ROOT, 'core', 'CLAUDE.md'));

  // 2. Specialist agent files
  const agentsSrc = path.join(SOURCE_ROOT, '.claude', 'agents');
  const agentsCount = copyMdFiles(agentsSrc, path.join(OUT_ROOT, 'agents'));

  // 3. Text-based Knowledge Base (materials_inbox excluded on purpose — raw
  //    catalogues, 400MB+, reference-only, never chat context per CLAUDE.md §3.3)
  const kbFolders = ['source_cards', 'checklists', 'technical_notes', 'standards', 'regulations'];
  let kbCount = 0;
  for (const folder of kbFolders) {
    kbCount += copyMdFiles(
      path.join(SOURCE_ROOT, 'knowledge', folder),
      path.join(OUT_ROOT, 'kb', folder)
    );
  }

  // 4. Manifest — when this sync happened and from what state, for traceability
  let sourceCommit = 'no-git-history (First_Agents has no commit at sync time or git unavailable)';
  try {
    const { execSync } = require('child_process');
    sourceCommit = execSync('git rev-parse HEAD', { cwd: SOURCE_ROOT }).toString().trim();
  } catch (e) { /* First_Agents may be in a state with no commits yet — non-fatal */ }

  const manifest = {
    syncedAt: new Date().toISOString(),
    sourceCommit,
    agentFilesCopied: agentsCount,
    kbFilesCopied: kbCount
  };
  fs.writeFileSync(path.join(OUT_ROOT, 'sync_manifest.json'), JSON.stringify(manifest, null, 2));

  console.log(`Synced: CLAUDE.md, ${agentsCount} agent files, ${kbCount} KB files.`);
  console.log(`Source commit: ${sourceCommit}`);
  console.log('Review the diff, then commit + push to deploy.');
}

main();
