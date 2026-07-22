Document title: Copyright-Safe Extraction Guideline
Version: 1.0
Last updated: 2026-07-08
Status: Reference
Owner / Prepared by: David Dvalishvili / Claude

---

# Copyright-Safe Extraction Guideline

This guideline governs how standards, regulations, and manufacturer documents collected in `knowledge/materials_inbox/` are turned into usable Knowledge Base content ([`source_note_template.md`](../source_cards/source_note_template.md), [`checklist_template.md`](../checklists/checklist_template.md)) without redistributing copyrighted material.

## 1. Raw standards stay private and are not committed

Raw PDF files (standards, regulations, datasheets, manuals) are working reference material only. They remain local to the workspace and are **not committed to git**. `knowledge/materials_inbox/.gitignore` already enforces this for the inbox (only `.gitignore` and `README.md` are tracked there); the same principle applies to any raw document wherever it ends up in the Knowledge Base folder structure — only derived notes (source notes, checklists, technical notes) are committed, never the source document itself.

## 2. Do not copy full clauses, tables, annexes, or long passages

Never reproduce a standard's clause text, full tables, annexes, or extended passages into a source note, checklist, report, or any committed file. This applies regardless of the standard's IDT/MOD/NEQ relationship to an international base text — the restriction is about the specific document's copyright, not about technical equivalence.

## 3. Write short paraphrased checklist items in our own words

When a requirement from a standard needs to become a checklist item, restate it briefly in plain language reflecting its substance — not a copy or near-copy of the original wording. If a requirement can't be reasonably paraphrased without losing precision, flag it as **Engineer Review Required** rather than copying the source text verbatim.

## 4. Use section references instead of copied text

Cite the standard by section, clause, table, or annex number (e.g. "IEC 62271-200, clause 6.4") so a reviewer can look up the original if needed — this is a reference, not a substitute for reading the actual standard. Do not paste the referenced text alongside the reference.

## 5. Do not claim current IEC compliance unless a current, verified source exists

A source note's **Use Status** must not be marked "Current" unless the document's edition has been checked against the latest IEC/Rosstandart/GNERC registry and confirmed still in force. If currency has not been verified, the Use Status stays "Current — unknown" (or "Legacy" / "Preliminary" as appropriate), and any compliance conclusion drawn from it must be marked Clarification Required or Engineer Review Required per `CLAUDE.md` §5.4 and §14.1 — never presented as a confirmed Pass.

## 6. Supplier evidence is required for compliance review

A source note or checklist derived from a standard establishes what to check — it is not itself evidence that a specific contractor offer, datasheet, or drawing complies. Per `CLAUDE.md` §5.2 (Supplier Offer Review Agent) and §16 (Deviation List), actual supplier-submitted evidence (datasheet values, test reports, drawings) is required before any Pass/Fail status is assigned to a checklist item for a real project.

## 7. PDF files must remain ignored by git

Any new folder created under `knowledge/` that will hold raw PDF or other copyrighted source documents should carry the same `.gitignore` pattern used in `knowledge/materials_inbox/.gitignore` (ignore everything except `.gitignore` and `README.md`), so raw documents are never accidentally committed as the Knowledge Base grows.
