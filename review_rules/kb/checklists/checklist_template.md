Document title: Checklist Template
Version: 2.0 — Conditional Requirement logic added
Last updated: 2026-07-10
Status: Reference
Owner / Prepared by: David Dvalishvili / Claude

---

# Checklist Template

Use this template to build a reusable review checklist derived from a source note in `knowledge/source_cards/`. Copy this file into `knowledge/checklists/` under a descriptive filename (e.g. `AC-metal-enclosed-switchgear_completeness-checklist.md`) and fill in each field. Every check item must be written in our own words — do not copy clause text from the underlying standard; reference it by section number only, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

**⚠ Version 2.0 — Conditional Requirement Logic.** ეს ვერსია ამატებს ფორმალურ, სტრუქტურირებულ ველებს პირობითი (conditional) მოთხოვნებისთვის — დამტკიცებული, per [`checklist_conditional_requirement_logic_proposal.md`](../../drafts/change_proposals/checklist_conditional_requirement_logic_proposal.md), ორი supplier offer validation ტესტის (negative/incomplete და positive/complete) დაკვირვებების საფუძველზე. **ეს ცვლილება ეხება მხოლოდ ამ template-ს — არსებული checklist ფაილები ამ ცვლილებას ავტომატურად არ იღებენ**, სანამ ისინი ცალკე, ეტაპობრივად არ განახლდება (იხ. [`checklist_template_conditional_requirement_update_report.md`](../../reports/checklist_template_conditional_requirement_update_report.md)).

---

## Checklist Title

## Based On Source Note

*(Link to the source note in `knowledge/source_cards/` this checklist is derived from.)*

## Equipment / Review Area

*(Reference the equipment list in `CLAUDE.md` §2.3, e.g. switchgear/cubicle, VCB, disconnector/earthing switch, CT, VT, protection relay, etc.)*

---

## Conditional Requirement Logic — Guidance (Read Before Filling Check Items)

ბევრი checklist item **უპირობოა** — ეს არის default/ჩვეულებრივი შემთხვევა, და ასეთი item-ებისთვის Conditional-სპეციფიკური ველები (ქვემოთ) უბრალოდ იწერება **"N/A — Unconditional"**.

ზოგიერთი item კი **პირობითია** — ანუ, ის საერთოდ გამოიყენება მხოლოდ კონკრეტულ პროექტში/scope-ში (მაგ. "earthing switch-ის fault-making capacity" — საჭიროა მხოლოდ, თუ პროექტი ამ ფუნქციას მოითხოვს). ასეთი item-ებისთვის:

1. **Critical Risk არ უნდა მიენიჭოს Conditional item-ს, სანამ პირობა ცხადად არ დადასტურდება საჭიროდ.** პირობითი "Risk if missing"-ის ფრაზა (მაგ. "Critical Risk, თუ ეს ფუნქცია საჭიროა") არ ნიშნავს ავტომატურ Critical Risk-ს — ის ნიშნავს **პირობით** Critical Risk-ს, რომელიც აქტიურდება მხოლოდ დადასტურებული საჭიროების შემთხვევაში.
2. **თუ applicability (საჭიროა თუ არა ეს მოთხოვნა) გაურკვეველია** — გამოიყენეთ **Engineer Review Required** ან **Clarification Required**, **არასოდეს** ავტომატური Not Applicable და **არასოდეს** ავტომატური Critical Risk.
3. **თუ პირობა ცხადადაა დადასტურებული, რომ საერთოდ არ არის საჭირო** კომპანიის/პროექტის scope-ის მიხედვით — გამოიყენეთ **Not Applicable**.
4. **თუ პირობა დადასტურებულია საჭიროდ და მიმწოდებლის მტკიცებულება არ არსებობს** — გამოიყენეთ **Missing Data**, ან **Critical Risk**, უსაფრთხოებრივი ზეგავლენის მიხედვით (თუ item თავად უსაფრთხოებრივად კრიტიკულია, თუნდაც პირობითად).
5. **Applicability ტრასირებადი უნდა იყოს** — ყოველი "საჭიროა" ან "არ არის საჭირო" გადაწყვეტილება უნდა ეყრდნობოდეს კონკრეტულ წყაროს (company technical assignment-ის სექცია, drawing, client confirmation document, ან ინჟინრის ცალსახა დადასტურება) — არა ჩვეულებრივი ვარაუდი ან "ეჭვის შემთხვევაში" გადაწყვეტილება.

**Status Logic Summary (Conditional Items):**

| სცენარი | სტატუსი |
|---|---|
| პირობა დადასტურებულია საჭიროდ + evidence სრულია | **OK** |
| პირობა დადასტურებულია საჭიროდ + evidence არ არსებობს | **Missing Data** (ან **Critical Risk**, უსაფრთხოებრივი ზეგავლენის მიხედვით) |
| პირობა დადასტურებულია საჭიროდ + evidence ბუნდოვანია | **Clarification Required** |
| პირობა ცხადად **არ არის** საჭირო (დადასტურებული) | **Not Applicable** |
| საჭიროება **გაურკვეველია** | **Engineer Review Required** — არასოდეს ავტომატური Not Applicable ან Critical Risk |
| საჭირო + evidence მოწოდებულია, დამოუკიდებლად ჯერ არ გადამოწმებული | **OK (Preliminary)**, Engineer Review Required — verification-ისთვის |

---

## Check Items

Repeat this block for each check item. **Conditional-სპეციფიკური ველები (Conditional Requirement, Condition/Applicability Rule, If Required/If Not Required, Escalation Rule, Responsible Party for Applicability Decision) ივსება მხოლოდ იმ item-ებისთვის, რომლებიც რეალურად პირობითია — უპირობო item-ებისთვის იწერება "N/A — Unconditional".**

### Check Item

*(Written in our own words — a plain-language requirement or question, not a copied clause.)*

**Why it matters:**

*(ერთი-ორი წინადადება — რატომ არის ეს item მნიშვნელოვანი ტექნიკური/უსაფრთხოებრივი თვალსაზრისით.)*

**Conditional Requirement:** Yes / No

*(თუ "No" — დანარჩენი conditional-სპეციფიკური ველები იწერება "N/A — Unconditional" და გამოტოვება დასაშვებია.)*

**Condition / Applicability Rule:**

*(მხოლოდ "Yes"-ის შემთხვევაში — პარაფრაზირებული აღწერა, თუ რა განსაზღვრავს, საჭიროა თუ არა ეს მოთხოვნა. მაგ. "საჭიროა, თუ პროექტის technical assignment ან client confirmation ცხადად მოითხოვს ამ ფუნქციას/ატრიბუტს".)*

**If Required, Evidence Needed:**

*(მხოლოდ "Yes"-ის შემთხვევაში — რა მტკიცებულებაა საჭირო, თუ პირობა დადასტურდა საჭიროდ.)*

**If Not Required, Acceptable Status:**

*(მხოლოდ "Yes"-ის შემთხვევაში — ჩვეულებრივ "Not Applicable", კონკრეტული დასაბუთებით.)*

**Supplier evidence required:**

*(ზოგადი მტკიცებულების მოთხოვნა — უპირობო item-ებისთვის ეს არის მთავარი evidence ველი; conditional item-ებისთვის ეს შეიძლება იყოს "If Required, Evidence Needed"-ის იდენტური ან მისი შემოკლებული ვერსია.)*

**Related source reference:**

*(Section/clause/table number in the source standard — reference only, no copied text.)*

**Risk if missing:**

*(უპირობო item-ებისთვის — პირდაპირი რისკის აღწერა. Conditional item-ებისთვის — ცხადად მიუთითეთ, რომ რისკი **პირობითია**, მაგ. "Critical Risk, **მხოლოდ თუ** Condition/Applicability Rule დადასტურებულია საჭიროდ".)*

**Status options:** OK / Missing Data / Clarification Required / Engineer Review Required / Critical Risk / Not Applicable / Not Checked

**Confidence rule:**

*(per `CLAUDE.md` §11 — High/Medium/Low/Not Verified, კონკრეტული evidence-ის ხარისხის მიხედვით.)*

**Escalation Rule:**

*(მხოლოდ "Yes"-ის შემთხვევაში — რა ხდება, თუ applicability **თავად** გაურკვეველია. Default: **Engineer Review Required**, არასოდეს ავტომატური Not Applicable ან Critical Risk. უპირობო item-ებისთვის: "N/A — Unconditional".)*

**Responsible Party for Applicability Decision:**

*(მხოლოდ "Yes"-ის შემთხვევაში — ვინ წყვეტს, საჭიროა თუ არა ეს მოთხოვნა (ჩვეულებრივ Client/Designer/Engineer, არა Supplier). უპირობო item-ებისთვის: "N/A — Unconditional".)*

**Engineer Review Required trigger:**

*(როდის ხდება ეს item ავტომატურად Engineer Review Required — ეს ველი გამოიყენება ორივე, პირობითი და უპირობო, item-ისთვის.)*

---

## Example — Conditional Item

ეს არის შევსებული მაგალითი, დაფუძნებული [`iec_62271_102_disconnector_earthing_switch_checklist.md`](iec_62271_102_disconnector_earthing_switch_checklist.md)-ის item 3-ზე და [`checklist_conditional_requirement_logic_proposal.md`](../../drafts/change_proposals/checklist_conditional_requirement_logic_proposal.md)-ის §2-ზე:

> ### Check Item
> Earthing switch-ის rated short-circuit making current (fault-making capacity) — დადასტურებულია თუ არა, თუ ეს ფუნქცია პროექტს სჭირდება.
>
> **Why it matters:** fault-ზე earthing switch-ის ჩართვის უსაფრთხოება, **მხოლოდ იმ შემთხვევაში**, თუ პროექტს ეს ფუნქცია საერთოდ სჭირდება.
>
> **Conditional Requirement:** **Yes**
>
> **Condition / Applicability Rule:** საჭიროა **მხოლოდ** მაშინ, თუ კომპანიის/პროექტის ტექნიკური მოთხოვნა ცალსახად ითხოვს fault-making-კაპაციტეტიან earthing switch-ს (ზოგ პროექტს ეს ფუნქცია საერთოდ არ სჭირდება — earthing switch შეიძლება გამოიყენებოდეს მხოლოდ ჩვეულებრივი, non-fault earthing ფუნქციისთვის).
>
> **If Required, Evidence Needed:** rated short-circuit making current-ის მნიშვნელობა, model-სპეციფიკური datasheet, type/routine test evidence.
>
> **If Not Required, Acceptable Status:** **Not Applicable** — მისაღებია, თუ client/designer ცხადად ადასტურებს (მაგ. project confirmation letter-ით ან technical assignment-ის სექციით), რომ ეს ფუნქცია არ არის საჭირო.
>
> **Supplier evidence required:** იხ. "If Required, Evidence Needed".
>
> **Related source reference:** [Source: iec_62271_102_disconnector_earthing_switch_checklist.md, item 3]
>
> **Risk if missing:** **Critical Risk**, **მხოლოდ თუ** Condition/Applicability Rule დადასტურებულია საჭიროდ. თუ პირობა არ სრულდება (ან საერთოდ არ დგინდება), **არ არის** ავტომატური Critical Risk.
>
> **Status options:** OK / Missing Data / Clarification Required / Engineer Review Required / Critical Risk / Not Applicable / Not Checked
>
> **Confidence rule:** High — თუ model-სპეციფიკური test report ხელმისაწვდომია (Required შემთხვევაში) ან client confirmation დოკუმენტი ცალსახაა (Not Required შემთხვევაში).
>
> **Escalation Rule:** თუ ცხადად არ დგინდება, სჭირდება თუ არა პროექტს ეს ფუნქცია — **Engineer Review Required**. **არასოდეს** ავტომატური Not Applicable (ხარვეზის დამალვის რისკი) და **არასოდეს** ავტომატური Critical Risk (ზედმეტი შეშფოთების რისკი) მხოლოდ გაურკვევლობის საფუძველზე.
>
> **Responsible Party for Applicability Decision:** **Client / Designer** — არა Supplier. Supplier-ს მხოლოდ evidence-ის მოწოდება ევალება, თუ ფუნქცია უკვე დადასტურებულია საჭიროდ.
>
> **Engineer Review Required trigger:** (ა) applicability გაურკვეველია; (ბ) პირობა დადასტურებულია საჭიროდ, მაგრამ evidence მხოლოდ ნაწილობრივია; (გ) Not Applicable status-ის დამადასტურებელი დოკუმენტი (მაგ. client confirmation letter) დამოუკიდებლად არ არის გადამოწმებული.

---

## Confidence Rule

Confidence Level is separate from citation status, per `CLAUDE.md` §11:

- **High Confidence** — directly supported by clear document evidence, no contradiction found.
- **Medium Confidence** — supported by available evidence but derived through interpretation or cross-checking.
- **Low Confidence** — based on incomplete information, unclear drawings, partial data, or assumptions.
- **Not Verified** — no reliable supporting evidence was found.

Conditional item-ებისთვის, Confidence Level ორ დონეზე გამოიყენება: (1) confidence applicability-გადაწყვეტილებაში (საჭიროა თუ არა ეს მოთხოვნა), და (2) confidence მოწოდებულ evidence-ში (თუ პირობა დადასტურებულია საჭიროდ). ორივე დონე ცალკე უნდა შეფასდეს — მაღალი confidence ერთში არ ანაზღაურებს დაბალ confidence-ს მეორეში.

## Engineer Review Required Trigger

Mark a check item **Engineer Review Required** when any of the following apply:

- The underlying source note's Use Status is Preliminary, Legacy, or Current-unknown, and the finding is safety/reliability/mandatory-compliance relevant.
- The source standard is NEQ (non-equivalent) or otherwise not clause-for-clause identical to its IEC/international base, and the specific requirement being checked falls in a diverging area.
- The evidence provided is unclear, incomplete, or contradicts another source.
- Human engineering judgment is needed beyond what this checklist can resolve (per `CLAUDE.md` §5.4 example: a non-standard interlocking scheme).
- **(Conditional items only) Applicability itself is unclear** — it is not confirmed whether the condition applies to this project, per the Escalation Rule above.

When triggered, do not present an overall positive conclusion for the affected item until the trigger is resolved, per `CLAUDE.md` §28.
