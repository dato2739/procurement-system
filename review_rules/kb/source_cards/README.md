Document title: Knowledge Base — Source Cards Folder Guide
Version: 1.0
Last updated: 2026-07-07
Status: Draft
Owner / Prepared by: David Dvalishvili / ChatGPT

---

# source_cards/

This folder holds short, structured "source cards" — one file per source — summarizing a single standard clause, regulation article, manual section, or other reference in a consistent, quickly citable format.

Source cards are a lightweight alternative/complement to the fuller summaries in `standards/` and `regulations/`: they exist to make a single fact quickly retrievable and citable, not to reproduce an entire document.

## Recommended source card format

```text
Document title: Source Card — <short subject>
Version:
Last updated:
Status: Draft / Approved Example / Reference / Archived
Owner / Prepared by:

Source: <standard/regulation/manual name, edition/date>
Location: <clause / article / section / table / page>
Topic: <short topic label>

Summary:
<short, plain-language summary of the specific point — no invented values>

Applies to: <equipment/cell type from CLAUDE.md section 2.3, if relevant>
```

## What belongs here

- One card per discrete, citable fact or requirement.
- Cards must reference a real, identifiable source. Do not create a source card from general model knowledge alone — mark such notes as Assumption / Not verified instead, per `CLAUDE.md` section 3.1.

## Current status

This folder is currently empty. No source cards have been added yet.

## Citation format

When a card here is used as evidence, cite it per `CLAUDE.md` section 5.3, e.g.:

```text
[Source: Knowledge Base, file: source_cards/<filename>.md, heading: <heading>]
```
