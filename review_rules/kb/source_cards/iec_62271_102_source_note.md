Document title: Source Note — IEC 62271-102 (IS/IEC adoption)
Version: 1.0
Last updated: 2026-07-09
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# წყაროს ბარათი (Source Note) — IEC 62271-102

**Copyright Note:** სტანდარტის სრული ტექსტი **არ არის** კოპირებული ან შენახული ამ ბარათში. მოცემულია მხოლოდ სათაურის/scope-ის/სექციური სტრუქტურის მეტამონაცემი, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

## 1. Source Identification

- **Current raw filename:** `knowledge/materials_inbox/ISIEC 62271-102.pdf`
- **Standard number:** IS/IEC 62271-102
- **Title (visually/source-confirmed):** *High-Voltage Switchgear and Controlgear — Part 102: Alternating Current Disconnectors and Earthing Switches*
- **Edition/Year:** (2003)
- **Language:** ინგლისური
- **Document type:** Bureau of Indian Standards (BIS)-ის ეროვნული ადაპტაცია, კომიტეტი ETD 8
- **Equipment/topic family:** disconnector, earthing switch
- **Source confirmation status:** სათაური და TOC მკაფიოდ იკითხება ტექსტური ექსტრაქციით (High Confidence identity-ისთვის); clause-დონის content ცალკე არ არის განხილული.

## 2. Visual/Source Confirmation

- **რა დადასტურდა:** სრული სათაური, standard number, გამოცემის წელი, BIS/ETD 8 კომიტეტი. TOC სტრუქტურულად წაკითხულია Section 1-დან Section 11-მდე (subsection-ების ჩათვლით, მაგ. 4.101 Rated short-circuit making current, 4.102 Rated contact zone, 4.103 Rated mechanical terminal load — ეს disconnector/earthing switch-სპეციფიკური დამატებებია IEC 62271-1-ის საერთო სტრუქტურაზე).
- **OCR/scanned შეზღუდვა:** დოკუმენტს გააჩნია მდიდარი ტექსტური ფენა (~250 KB ექსტრაქცია), თუმცა ტექსტში შესამჩნევია OCR-ხარვეზები (მაგ. "35" ნაცვლად "3.5", "l3" ნაცვლად "13" ცალკეულ ადგილებში) — ეს მიუთითებს, რომ სავარაუდოდ **OCR-ბაზირებული სკანია, არა born-digital ტექსტი**, საშუალო ხარისხის ამოცნობით.
- **გამოსადეგია checklist-ისთვის?** **დიახ** — მიუხედავად წვრილმანი OCR ხარვეზებისა, ძირითადი სექციური სტრუქტურა და სათაურები საკმარისად საიმედოა checklist-ის ორგანიზებისთვის.
- **Confidence Level:** **Medium** — იდენტობა High Confidence-ითაა დადასტურებული, მაგრამ OCR ხარისხის ხარვეზების გამო ცალკეული subsection-ის ნომრები (მაგ. "35" vs "3.5") საჭიროებს სიფრთხილეს გამოყენებისას.

## 3. Scope and Relevance for This Project

- **10 kV outgoing feeder cubicle:** ცალსახად რელევანტური — earthing switch პირდაპირ მოთხოვნილი ელემენტია ჩვენს template/checklist/sample-ში.
- **Company technical assignment:** disconnector/earthing switch-ის რეიტინგების (rated short-circuit making current, mechanical terminal load) სპეციფიკაციისთვის.
- **Supplier offer review:** earthing switch-ის datasheet-ის comparison-ისთვის.
- **Datasheet review:** contact zone, mechanical/electrical endurance მონაცემების cross-check-ისთვის.
- **Drawings/schematics:** interlocking scheme და earthing scheme drawing-ების შემოწმებისთვის.
- **Type/routine test evidence:** Section 6/7-ის სტრუქტურა პირდაპირ უჭერს მხარს ამ workflow-ს.
- **Missing Data/Engineer Review Required ლოგიკა:** earthing continuity და interlocking — ორივე ჩვენს არსებულ Engineer Review Required სიაშია უკვე (sample technical assignment, Section 30).

## 4. Section Reference Map Only

*(TOC-დან, სექცია/ქვესექცია სათაურები + პარაფრაზირებული მნიშვნელობა — არა clause ტექსტი):*

| Section | სათაური | პარაფრაზირებული მნიშვნელობა |
|---|---|---|
| 1 | General (1.1 Scope, 1.2 Normative references) | ზოგადი შესავალი |
| 2 | Normal and special service conditions | გარემო პირობების ზოგადი განმარტება |
| 3 | Definitions (3.1–3.7) | ტერმინოლოგია, disconnector/earthing switch-ის ნაწილების განმარტება |
| 4 | Ratings (4.1–4.103) | rated voltage, insulation level, frequency, normal current/temperature rise, short-time withstand (4.5), peak withstand (4.6), short-circuit duration (4.7), **short-circuit making current (4.101)**, **contact zone (4.102)**, **mechanical terminal load (4.103)** |
| 5 | Design and construction (5.1–5.15+) | earthing (5.3), auxiliary/control equipment (5.4), operation modes (5.5–5.8), interlocking/monitoring (5.9), nameplates (5.10), interlocking devices (5.11), position indication (5.12), degree of protection (5.13) |
| 6 | Type tests | დიელექტრიკული, temperature-rise, short-time/peak withstand, making-capacity ტესტები (ზუსტი subsection-ები OCR-ხარვეზის გამო არ არის ცალკე ამოღებული) |
| 7 | Routine tests | routine ტესტების ჩამონათვალი |
| 8 | Guide to the selection of disconnectors and earthing switches | შერჩევის სახელმძღვანელო |
| 10 | Rules for transport, storage, installation, operation and maintenance | ტრანსპორტირება/მოვლა |
| 11 | Safety (Operation) | უსაფრთხოების ზოგადი მოსაზრებები |

## 5. Engineering Use in This Review System

- Company technical assignment-ის დროს — earthing switch-ის rated making current და mechanical terminal load-ის ფორმალური მოთხოვნის ჩამოსაყალიბებლად.
- Supplier offer review — disconnector/earthing switch-ის datasheet-ის შედარებისთვის ამ დამატებით რეიტინგებთან (4.101–4.103), რომლებიც არ ფიგურირებდა ჩვენს IEC 62271-1 checklist-ში.
- Drawing/schematic review — interlocking scheme-ის (5.11) და position indication-ის (5.12) დადასტურებისთვის.

## 6. Supplier Evidence Requirements Derived From This Source
- Rated short-circuit making current — type test report, Section 4.101.
- Mechanical terminal load — type test/calculation, Section 4.103.
- Interlocking scheme description — Section 5.11.
- Position indication mechanism description — Section 5.12.
- Type/routine test evidence — Section 6/7.

## 7. Risk Triggers
- **Missing Data:** rated short-circuit making current, mechanical terminal load, ან earthing continuity scheme სრულად არ არის მითითებული.
- **Clarification Required:** disconnector-ის ტიპი (single/double break) ან earthing switch-ის მდებარეობა ბუნდოვანია.
- **Engineer Review Required:** interlocking scheme non-standard-ია ან OCR-ხარვეზის გამო კონკრეტული subsection ვერ დასტურდება.
- **Critical Risk:** earthing switch-ის rated making current არასაკმარისია fault-ის დონესთან შედარებით, ან interlocking scheme საერთოდ არ არსებობს.

## 8. Checklist Decision
- **Create checklist:** **Yes**
- **Reason:** disconnector/earthing switch — core equipment item (`CLAUDE.md` §2.3), პირდაპირ რელევანტური 10 kV outgoing feeder cubicle-ისთვის, TOC საკმარისად საიმედოა checklist-ის ორგანიზებისთვის.
- **Proposed checklist filename:** `knowledge/checklists/iec_62271_102_disconnector_earthing_switch_checklist.md`

## Limitations and Caution
- OCR ხარისხის ხარვეზები (subsection-ის ნომრებში) ნიშნავს, რომ ზუსტი clause-მითითებები საბოლოო engineering review-ის დროს ოფიციალურ სტანდარტთან უნდა გადამოწმდეს.
- BIS/India იურისდიქცია, 2003 წლის გამოცემის მიმდინარეობა — დაუდასტურებელი.
- No final IEC compliance claim.
