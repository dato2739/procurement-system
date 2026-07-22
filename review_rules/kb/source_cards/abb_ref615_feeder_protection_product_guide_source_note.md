Document title: Source Note — ABB REF615 Feeder Protection and Control Product Guide
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# წყაროს ბარათი (Source Note) — ABB REF615 Feeder Protection and Control Product Guide

წარმოდგენილი ბარათი მომზადებულია [`source_note_template.md`](source_note_template.md)-ის სტრუქტურით და ეფუძნება [`materials_inventory.md`](../materials_inventory.md)-ის პუნქტ 17-ს.

**⚠ მნიშვნელოვანი შესავალი შენიშვნა:** ეს დოკუმენტი არის **მწარმოებლის (ABB) product guide**, **არა** IEC/GOST/კომპანიის mandatory სტანდარტი. ის შეიძლება გამოყენებულ იქნას მხოლოდ როგორც **manufacturer reference** — supplier evidence-ის შედარების დამხმარე წყარო, არასოდეს როგორც mandatory compliance-ის დამტკიცების საფუძველი (per `CLAUDE.md` §3.2, §18.1).

---

## Document Title

*Relion® 615 series — Feeder Protection and Control REF615 Product Guide*, Product version 4.0.

## Standard Number

N/A — მწარმოებლის product guide, არა სტანდარტი.

## Manufacturer

ABB Oy, Distribution Automation (Vaasa, ფინეთი).

## Product Family

Relion® 615 series — REF615 (feeder protection and control IED).

## Document Type

Manufacturer product guide — სრული ტექნიკური დოკუმენტაცია (88 გვერდი): აღწერა, protection functions, technical data, terminal diagrams, ordering data.

## Page Count

**88 გვერდი** — დადასტურებულია ორმაგად: `pdftotext` form-feed დათვლით და **სრული გვერდობრივი ვიზუალური წაკითხვით** (ორივე მეთოდი თანხმდება).

## Document Code / Revision / Date

`1MRS756379 L`; **Issued: 2012-05-11; Revision: L** (Document revision history, §31: A–L, 2007-12-20–2012-05-11).

## Organization / Source

ABB Oy — ოფიციალური საკონტაქტო ინფორმაცია დადასტურებულია back cover-ზე (P.O. Box 699, FI-65101 Vaasa, Finland). ასევე მოხსენიებულია **KEMA IEC 61850 Certificate** (Level A1) და **DNV (Det Norske Veritas) Type Approval Certificate**.

## Language

ინგლისური.

## Raw Private File Reference

`knowledge/materials_inbox/abb_ref615_feeder_protection_product_guide.pdf` (~8.85 MB) — ფაილი **არ არის** გადატანილი, გადარქმეული ან commit-ული; რჩება მხოლოდ ლოკალურ workspace-ში, `.gitignore`-ით დაცული, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

## Copyright Note

დოკუმენტის სრული ტექსტი/ცხრილები/გრაფიკა **არ არის** კოპირებული ამ ბარათში. მოცემულია მხოლოდ საკუთარი სიტყვებით გადმოცემული, პარაფრაზირებული შეჯამება, გვერდის/სექციის მითითებებით.

## Extraction Method (მნიშვნელოვანი)

ფაილის ზომა (~8.85 MB) **20 MB vision-tool ლიმიტს ქვემოთაა**, ამიტომ **სრული 88-გვერდიანი დოკუმენტი წარმატებით წაიკითხა ვიზუალურად** (page-image confirmation), დამატებით ტექსტ-ექსტრაქციასთან ერთად. ეს **მნიშვნელოვნად განსხვავდება** ABB UniGear ZS1-ის (95 MB) შემთხვევისგან — **არცერთი ცხრილის column-misalignment-ის პრობლემა არ დარჩა**: ყველა ტექნიკური ცხრილი (rated values, settings ranges, I/O ცხრილები), terminal diagram-ები და ordering key ვიზუალურად დადასტურდა. **High Confidence მთელ დოკუმენტზე**, ერთადერთი გამონაკლისით — currency (იხ. ქვემოთ).

## Use Status

- [x] Preliminary
- [ ] Approved
- [ ] Legacy
- [ ] Current — unknown

**შენიშვნა:** სტატუსი — **Preliminary**. ვინაობა, სტრუქტურა და ტექნიკური content — **High Confidence** (სრული ვიზუალური დადასტურებით). Edition currency — **Not Verified**.

## Relevance to 6–10 kV Feeder Protection Review

REF615 არის ABB-ის feeder protection and control IED — პირდაპირ რელევანტურია [`iec_60255_protection_relay_checklist.md`](../checklists/iec_60255_protection_relay_checklist.md)-ის scope-თან (protection functions, trip-circuit supervision, CT input compatibility, binary I/O, arc protection). ასევე მოხსენიებულია IEC 61850 station communication, რაც პროექტის §19 (SCADA/Communication Scope) ფარგლებშია.

## Current Edition Status — Not Verified

⚠️ **ეს დოკუმენტი 2012 წლისაა (Revision L).** REF615-ს სავარაუდოდ ჰქონდა უფრო ახალი product guide revision-ები 2012 წლის შემდეგ — **ეს ვერსია არ უნდა ჩაითვალოს მიმდინარე, ოფიციალურ REF615 დოკუმენტაციად** დამატებითი დადასტურების გარეშე.

## Useful Technical Areas (ყველა ვიზუალურად დადასტურებული)

- პროდუქტის ვინაობა, Standard configurations A-J (Table 1-2);
- Protection functions მიმოხილვა და single-line diagram-ები (Figures 1-12);
- Technical data — Dimensions, Power supply, Energizing inputs (CT/VT), Binary I/O, Signal output ratings, **Trip-circuit supervision (Table 14)**, Environmental/EMC/Insulation/Mechanical tests (Tables 7-28);
- Protection function-ების ზუსტი accuracy/settings ცხრილები (Tables 29-68);
- Current circuit supervision, Fuse failure supervision (Tables 81-83);
- Terminal diagrams (Figures 22-26) — BI/BO/CT/VT ტერმინალები 5 კონფიგურაციისთვის;
- Selection/Ordering key (18-ციფრიანი კოდი, სრულად);
- Certificates (KEMA, DNV); Functions/Codes/Symbols ცხრილი (IEC 61850 ↔ IEC 60617 ↔ IEC-ANSI).

## Relevant Equipment

protection relay (REF615), CT/VT (ინტერფეისის დონეზე) — per `CLAUDE.md` §2.3.

## Relevant Agents

- **relay-protection** (პირველადი).
- **supplier-offer-review** (მეორადი, evidence-mapping-ისთვის).

## Section References Only (გვერდის მითითებები — ვიზუალურად დადასტურებული)

- გვ. 1 — Cover/title
- გვ. 2 — Table of Contents
- გვ. 3-7 — Description, Standard configurations (Table 1-2)
- გვ. 8-22 — Protection functions, Application, Figures 1-14
- გვ. 22-24 — Supported ABB solutions, Control (Table 3-4)
- გვ. 25-26 — Measurement, Disturbance recorder, Event log, Recorded data, Condition monitoring, Trip-circuit supervision, Self-supervision, Fuse failure supervision, Current circuit supervision, Access control
- გვ. 26-29 — Inputs and outputs (Table 5), Station communication (Table 6)
- გვ. 30-66 — Technical data (Tables 7-28), Protection function ratings (Tables 29-68), Operation characteristics (Table 69), Control/Measurement/Supervision (Tables 70-83)
- გვ. 67-68 — Local HMI
- გვ. 68-69 — Mounting methods, IED case
- გვ. 69-73 — Selection and ordering data (18-digit key)
- გვ. 74-75 — Accessories, Tools
- გვ. 76 — Supported functions (WebHMI/PCM600, Table 89)
- გვ. 77-81 — Terminal diagrams (Figures 22-26)
- გვ. 82 — Certificates, Inspection reports
- გვ. 82 — References
- გვ. 83-85 — Functions, codes and symbols (Table 90); Document revision history (§31)
- გვ. 88 — Contact us / back cover

## Limitations

- **Edition currency** — Not Verified (Revision L, 2012).
- ეს ჯერ კიდევ **მხოლოდ product-line reference** — კონკრეტული real project-ის supplier offer-ის REF615 (თუ იქნება) მაინც ცალკე project-specific datasheet/order-code confirmation-ს საჭიროებს.
- Terminal diagram-ების ვიზუალური სისწორე დადასტურებულია, მაგრამ კონკრეტული ინსტალაციისთვის wiring interpretation მაინც Drawing & Schematics Review Agent-ის scope-შია.

## Citation Guidance

```text
[Source: ABB REF615 Feeder Protection and Control Product Guide, 1MRS756379 L Rev. L (2012-05-11), p. 25 — Trip-circuit supervision, description]
[Source: ABB REF615 Product Guide, Table 14 (p. 33) — Double-pole power output relays with TCS function, visually confirmed]
```

## Copyright-Safe Usage Rule

Per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md): raw PDF რჩება მხოლოდ `materials_inbox/`-ში, git-ignored; არცერთი გრძელი ტექსტი/ცხრილი/გრაფიკა არ კოპირდება ამ ბარათში; მხოლოდ პარაფრაზირებული, საკუთარი სიტყვებით შეჯამებული ინფორმაცია გამოიყენება.

## Status / Confidence

**Preliminary.** ვინაობა, სტრუქტურა, ტექნიკური content — **High Confidence** (სრული ვიზუალური დადასტურებით). Edition currency — **Not Verified**. Real project-ის კონკრეტული REF615 unit-ის კონფიგურაცია — **Supplier Evidence Required**, ყოველთვის.

## Recommended Next Action

1. თუ რეალური პროექტისთვის REF615-ის მიმდინარე ტექნიკური მონაცემები საჭირო გახდება — მოთხოვნილ იქნას უახლესი ოფიციალური ABB REF615 product guide/manual ან project-specific supplier datasheet.
2. ეს source note ემსახურება, როგორც [`abb_ref615_feeder_protection_product_guide_evidence_map.md`](../technical_notes/abb_ref615_feeder_protection_product_guide_evidence_map.md) და [`abb_ref615_feeder_protection_product_guide_location_map.md`](../technical_notes/abb_ref615_feeder_protection_product_guide_location_map.md)-ის საფუძველი — **evidence-mapping reference only, not a compliance authority**.
