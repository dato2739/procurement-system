Document title: Knowledge Base — Regulations Folder Guide
Version: 1.0
Last updated: 2026-07-07
Status: Draft
Owner / Prepared by: David Dvalishvili / ChatGPT

---

# regulations/

This folder holds mandatory legal, regulatory, and local grid-code material relevant to 6–10 kV electrical systems (e.g., GNERC Grid Rules, national/local regulations such as Regulation №340-type documents).

Per `CLAUDE.md` section 18.1, mandatory legal/local requirements have the highest source priority for safety, reliability, protection, interlocking, grounding, short-circuit rating, insulation, and other mandatory-compliance issues — above IEC/international standards, company internal standards, the company technical assignment, and supplier datasheets.

## What belongs here

- Summaries or extracts of applicable regulations and grid rules, with article/section references.
- Regulation metadata: effective date, version, status (in force / superseded), per `CLAUDE.md` section 14.1.

## What does not belong here

- IEC/IEEE or other international standards — see `standards/`.
- Company-internal preferences — see `company_requirements/`.

## Current status

This folder is currently empty. No regulation content has been added yet. Until content is added, agents must not assert compliance with any regulation and must mark related conclusions as `Source not found in current Knowledge Base` or `[Source: Not verified — Engineer Review Required]`, per `CLAUDE.md` section 3.1.

## Citation format

When a file here is used as evidence, cite it per `CLAUDE.md` section 5.3, e.g.:

```text
[Source: Regulation №XXX, article/section X]
[Source: GNERC Grid Rules, article/section X]
[Source: Knowledge Base, file: regulations/<filename>.md, heading: <heading>]
```
