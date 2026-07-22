Document title: Knowledge Base — Standards Folder Guide
Version: 1.0
Last updated: 2026-07-07
Status: Draft
Owner / Prepared by: David Dvalishvili / ChatGPT

---

# standards/

This folder holds summaries and technical notes on IEC, IEEE, and other relevant international standards applicable to 6–10 kV switchgear, cubicles, and associated equipment.

Used primarily by the Standards & Compliance Agent (`CLAUDE.md` section 5.2), and consulted by other agents when a standards basis is needed for a technical judgment.

## What belongs here

- Standard summaries (not full copyrighted text unless explicitly permitted) — scope, applicable clauses, key requirements relevant to the equipment list in `CLAUDE.md` section 2.3.
- Notes on standard family relevance (e.g., which IEC series applies to metal-enclosed switchgear, insulation coordination, CT/VT, protection relays, surge arresters).
- Version/edition metadata for each summarized standard, per `CLAUDE.md` section 14.1.

## What does not belong here

- Mandatory legal/regulatory/grid-code material — see `regulations/`.
- Company-internal preferences — see `company_requirements/`.
- Project-specific contractor documents — these belong with the project under review, not the knowledge base.

## Current status

This folder is currently empty. No standards content has been added yet. Until content is added, agents must treat any standards reference as unavailable locally and mark related conclusions as `Source not found in current Knowledge Base` or `[Source: Not verified — Engineer Review Required]`, per `CLAUDE.md` section 3.1.

## Citation format

When a file here is used as evidence, cite it per `CLAUDE.md` section 5.3, e.g.:

```text
[Source: Knowledge Base, file: standards/<filename>.md, heading: <heading>]
```
