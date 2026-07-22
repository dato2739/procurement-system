Document title: Source Note — ABB TJC 6 Indoor Voltage Transformers Datasheet
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# წყაროს ბარათი (Source Note) — ABB TJC 6 Indoor Voltage Transformers Datasheet

წარმოდგენილი ბარათი მომზადებულია [`source_note_template.md`](source_note_template.md)-ის სტრუქტურით და ეფუძნება [`materials_inventory.md`](../materials_inventory.md)-ის პუნქტ 20-ს.

**⚠ მნიშვნელოვანი შესავალი შენიშვნა:** ეს დოკუმენტი არის **მწარმოებლის (ABB) datasheet**, **არა** IEC/GOST/კომპანიის mandatory სტანდარტი. ის შეიძლება გამოყენებულ იქნას მხოლოდ როგორც **manufacturer reference** — supplier evidence-ის შედარების დამხმარე წყარო, არასოდეს როგორც mandatory compliance-ის დამტკიცების საფუძველი (per `CLAUDE.md` §3.2, §18.1).

---

## Document Title

*TJC 6 — Indoor Voltage Transformers* ("MEDIUM VOLTAGE PRODUCT" datasheet).

## Standard Number

N/A — მწარმოებლის datasheet, არა სტანდარტი.

## Manufacturer / Issuing Entity

ABB s.r.o., ELDS Brno, Czech Republic — **იგივე საწარმოო ერთეული**, რაც [`abb_tpu_7x_indoor_supporting_current_transformers_datasheet_source_note.md`](abb_tpu_7x_indoor_supporting_current_transformers_datasheet_source_note.md)-ისთვის (document code family `1VLCxxxxxx`).

## Product Family / Type

TJC 6 — indoor voltage transformer (VT).

## Document Type

Manufacturer datasheet — VT-ის ratings, terminal marking, dimensions, ordering.

## Page Count

**7 გვერდი** — დადასტურებულია ორმაგად: `pdftotext` form-feed დათვლით და **სრული გვერდობრივი ვიზუალური წაკითხვით**.

## Document ID / Revision / Date

`1VLC000521 Rev.7, en 2025.06.01` — ვიზუალურად დადასტურებული back cover-ზე.

## Organization / Source

ABB s.r.o. — ოფიციალური საკონტაქტო ინფორმაცია დადასტურებულია back cover-ზე (ELDS Brno, Videnska 117, 619 00 Brno, Czech Republic).

## Language

ინგლისური.

## Raw Private File Reference

`knowledge/materials_inbox/abb_tjc_6_indoor_voltage_transformers_datasheet.pdf` (~488 KB) — ფაილი **არ არის** გადატანილი, გადარქმეული ან commit-ული; რჩება მხოლოდ ლოკალურ workspace-ში, `.gitignore`-ით დაცული, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

## Copyright Note

დოკუმენტის სრული ტექსტი/ცხრილები/გრაფიკა **არ არის** კოპირებული ამ ბარათში. მოცემულია მხოლოდ საკუთარი სიტყვებით გადმოცემული, პარაფრაზირებული შეჯამება, გვერდის/სექციის მითითებებით.

## Extraction Method (მნიშვნელოვანი)

ფაილის ზომა (~488 KB) მკვეთრად 20 MB vision-tool ლიმიტს ქვემოთაა. **ტექსტ-ექსტრაქციას ჰქონდა იგივე ნაწილობრივი დეფექტი**, რაც TPU CT datasheet-ში (item 18) — narrative-ტექსტში ჩართული ცალკეული რიცხვები (overvoltage factor, primary/secondary voltage-ის სია, fuse tripping current) `pdftotext`-ში ცარიელი placeholder-ების სახით გამოჩნდა. **სრულმა ვიზუალურმა (page-image) წაკითხვამ ეს პრობლემა მთლიანად აღმოფხვრა** — ყველა მნიშვნელობა ახლა High Confidence-ითაა დადასტურებული.

## Use Status

- [x] Preliminary
- [ ] Approved
- [ ] Legacy
- [ ] Current — unknown

**შენიშვნა:** სტატუსი — **Preliminary**. ვინაობა, სტრუქტურა და ამ დოკუმენტში წარმოდგენილი ტექნიკური content — **High Confidence** (სრული ვიზუალური დადასტურებით). Currency — Rev.7, 2025-06-01, ახალი, currency-პრობლემა არ დაფიქსირებულა.

## Voltage / Insulation Scope

Highest voltage for equipment: **17.5 - 24 (25) kV** — ცხადად მოიცავს 6-10 kV პროექტის scope-ს.

## Relevance to 6–10 kV VT and Cubicle Review

TJC 6 არის ABB-ის indoor VT სერია — რელევანტურია voltage measurement/protection review-სთვის და [`iec_60255_protection_relay_checklist.md`](../checklists/iec_60255_protection_relay_checklist.md) Item 20-თან (VT input compatibility). **⚠ ამ პროექტში ჯერ არ არსებობს ცალკე VT-სპეციფიკური checklist** — ეს datasheet წარმოადგენს პირველ VT reference-ს Knowledge Base-ში.

## Useful Technical Areas (ყველა ვიზუალურად დადასტურებული)

- Rated voltage/insulation: Um 17.5-24(25) kV; power-frequency test voltage 38-50(55) kV; lightning impulse test voltage 95-125 kV;
- Voltage ratio: rated primary voltages 11/√3, 15/√3, 20/√3, 22/√3 kV;
- Secondary voltage: 100/√3 V, 110/√3 V;
- Accuracy classes: 0.2, 0.5, 1 (measuring winding) ან 3P, 6P (protection winding);
- Burden/rated output: 50/0.2-150/0.5-200/1 VA/cl (measuring/protection); 50-200/6P VA/cl (residual);
- Overvoltage factor: **1.9 x Un/8 hrs** (სტანდარტული);
- Residual/open-delta winding: 100/3 V, 110/3 V, კლასი 6P — ზოგადი earthing პრინციპით;
- Frequency: 50/60 Hz;
- Standards: IEC, VDE, IEEE, BS, GOST, CSN;
- Terminal marking: სრული a-e სქემა (Picture 01);
- Dimensions/ordering: სრული dimensional drawing + external fuse holder (JT6 300mA/600mA).

## Limitations

- **⚠ Ferroresonance:** ეს დოკუმენტი **საერთოდ არ განიხილავს** ferroresonance-ის რისკს ან მის შემცირების ღონისძიებებს — **Not Present** ამ datasheet-ში.
- **⚠ Open-delta grounding:** მხოლოდ ზოგადი პრინციპია მოცემული, დეტალური wiring/grounding პროცედურა **არ არის**.
- Edition/publication თარიღი მხოლოდ დოკუმენტ-კოდიდან ("2025.06.01") არის დამოწმებული.

## ⚠ Mandatory-Status Warning

ABB TJC 6 **არასოდეს** არ უნდა ჩაითვალოს mandatory VT ტიპად. თუ მიმწოდებელი შესთავაზებს სხვა VT ტიპს/მწარმოებელს, **საჭირო იქნება ცალკე, supplier-specific VT datasheet/catalogue/type-test evidence** — non-TJC 6 VT არ უნდა უარვყოთ მხოლოდ იმის გამო, რომ TJC 6 არ არის.

## ⚠ Supporting Manual Warning

**Ferroresonance-ის მართვის, დეტალური open-delta grounding-ისა და installation პროცედურის** სრულყოფილი გაგებისთვის საჭიროა **supporting installation/use/maintenance manual** — ეს ამ task-ის ფარგლებში **არ არის მოძიებული ან დამუშავებული**.

## Citation Guidance

```text
[Source: ABB TJC 6 Indoor Voltage Transformers Datasheet, 1VLC000521 Rev.7 (2025-06-01), p. 2 — Parameters table]
[Source: ABB TJC 6 Datasheet, p. 3 — Terminal marking scheme (Picture 01, a-e), visually confirmed]
```

## Copyright-Safe Usage Rule

Per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md): raw PDF რჩება მხოლოდ `materials_inbox/`-ში, git-ignored; არცერთი გრძელი ტექსტი/ცხრილი/გრაფიკა არ კოპირდება ამ ბარათში; მხოლოდ პარაფრაზირებული, საკუთარი სიტყვებით შეჯამებული ინფორმაცია გამოიყენება.

## Status / Confidence

**Preliminary.** ვინაობა, სტრუქტურა, ამ დოკუმენტში წარმოდგენილი ტექნიკური content — **High Confidence** (სრული ვიზუალური დადასტურებით). Ferroresonance/დეტალური grounding — **Not Verified/Not Present**. Real project-ის კონკრეტული VT unit-ის კონფიგურაცია — **Supplier Evidence Required**, ყოველთვის.

## Recommended Next Action

1. თუ ferroresonance-ის ან დეტალური open-delta grounding-ის საკითხი გახდება აქტუალური რეალურ პროექტში — მოთხოვნილ იქნას supporting installation/use/maintenance manual (ცალკე task-ის ფარგლებში).
2. ეს source note ემსახურება, როგორც [`abb_tjc_6_indoor_voltage_transformers_datasheet_evidence_map.md`](../technical_notes/abb_tjc_6_indoor_voltage_transformers_datasheet_evidence_map.md) და [`abb_tjc_6_indoor_voltage_transformers_datasheet_location_map.md`](../technical_notes/abb_tjc_6_indoor_voltage_transformers_datasheet_location_map.md)-ის საფუძველი — **evidence-mapping reference only, not a compliance authority**.
