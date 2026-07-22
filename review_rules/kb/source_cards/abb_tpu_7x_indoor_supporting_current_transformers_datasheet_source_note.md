Document title: Source Note — ABB TPU 7x.xx Indoor Supporting Current Transformers Datasheet
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# წყაროს ბარათი (Source Note) — ABB TPU 7x.xx Indoor Supporting Current Transformers Datasheet

წარმოდგენილი ბარათი მომზადებულია [`source_note_template.md`](source_note_template.md)-ის სტრუქტურით და ეფუძნება [`materials_inventory.md`](../materials_inventory.md)-ის პუნქტ 18-ს.

**⚠ მნიშვნელოვანი შესავალი შენიშვნა:** ეს დოკუმენტი არის **მწარმოებლის (ABB) datasheet**, **არა** IEC/GOST/კომპანიის mandatory სტანდარტი. ის შეიძლება გამოყენებულ იქნას მხოლოდ როგორც **manufacturer reference** — supplier evidence-ის შედარების დამხმარე წყარო, არასოდეს როგორც mandatory compliance-ის დამტკიცების საფუძველი (per `CLAUDE.md` §3.2, §18.1).

---

## Document Title

*TPU 7x.xx — Indoor Supporting Current Transformers* ("MEDIUM VOLTAGE PRODUCT" datasheet).

## Standard Number

N/A — მწარმოებლის datasheet, არა სტანდარტი.

## Manufacturer

ABB (ABB s.r.o., ELDS Brno, Czech Republic).

## Product Family / Type

TPU 7x.xx — indoor supporting current transformer (CT).

## Document Type

Manufacturer datasheet — CT-ის ტექნიკური მონაცემები, ordering key, dimensional drawings.

## Page Count

**10 გვერდი** — დადასტურებულია ორმაგად: `pdftotext` form-feed დათვლით და **სრული გვერდობრივი ვიზუალური წაკითხვით** (ორივე მეთოდი თანხმდება).

## Document ID / Revision / Date

`1VLC000513 Rev.9, en 2026.03.16` — ვიზუალურად დადასტურებული back cover-ზე.

## Organization / Source

ABB s.r.o. — ოფიციალური საკონტაქტო ინფორმაცია დადასტურებულია back cover-ზე (ELDS Brno, Videnska 117, 619 00 Brno, Czech Republic).

## Language

ინგლისური.

## Raw Private File Reference

`knowledge/materials_inbox/abb_tpu_7x_indoor_supporting_current_transformers_datasheet.pdf` (~919 KB) — ფაილი **არ არის** გადატანილი, გადარქმეული ან commit-ული; რჩება მხოლოდ ლოკალურ workspace-ში, `.gitignore`-ით დაცული, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

## Copyright Note

დოკუმენტის სრული ტექსტი/ცხრილები/გრაფიკა **არ არის** კოპირებული ამ ბარათში. მოცემულია მხოლოდ საკუთარი სიტყვებით გადმოცემული, პარაფრაზირებული შეჯამება, გვერდის/სექციის მითითებებით.

## Extraction Method (მნიშვნელოვანი)

ფაილის ზომა (~919 KB) მკვეთრად 20 MB vision-tool ლიმიტს ქვემოთაა. **ტექსტ-ექსტრაქციას ჰქონდა ნაწილობრივი დეფექტი** — narrative-ტექსტში ჩართული ცალკეული რიცხვები (insulation voltage, primary/secondary current-ის სია, cantilever strength) `pdftotext`-ში ცარიელი placeholder-ების სახით გამოჩნდა (font-encoding-ის თავისებურება), **მაშინ როცა ცხრილებში ჩართული რიცხვები სუფთად ამოვიდა**. **სრულმა ვიზუალურმა (page-image) წაკითხვამ ეს პრობლემა მთლიანად აღმოფხვრა** — ყველა მნიშვნელობა ახლა High Confidence-ითაა დადასტურებული, პირდაპირ დანახული რენდერირებული გვერდებზე.

## Use Status

- [x] Preliminary
- [ ] Approved
- [ ] Legacy
- [ ] Current — unknown

**შენიშვნა:** სტატუსი — **Preliminary**. ვინაობა, სტრუქტურა და ტექნიკური content — **High Confidence** (სრული ვიზუალური დადასტურებით). Currency — Rev.9, 2026-03-16, **ახალი/მიმდინარესთან ახლო**, currency-პრობლემა არ დაფიქსირებულა.

## Relevance to 6–10 kV CT and CT-Relay Review

TPU 7x.xx არის ABB-ის indoor supporting CT სერია — პირდაპირ რელევანტურია [`iec_61869_2_current_transformer_checklist.md`](../checklists/iec_61869_2_current_transformer_checklist.md)-ის scope-თან (rated ratio, accuracy class, burden, Ith/Idyn) და [`iec_60255_protection_relay_checklist.md`](../checklists/iec_60255_protection_relay_checklist.md) Item 19-თან (CT-relay input compatibility — secondary current 1A/5A).

## Useful Technical Areas (ყველა ვიზუალურად დადასტურებული)

- Rated voltage/insulation: Um 36/38.5/40.5 kV; power-frequency withstand 70/80/90 kV; lightning impulse withstand 170/180/200 kV;
- Primary current range: 10-2500 A (22 სტანდარტული მნიშვნელობა);
- Secondary current: 1A/5A (კომბინირებადი);
- Accuracy classes/burden: სრული "Standardized transformers" ცხრილი — 0.5/3/5P/10P კლასები, FS/ALF;
- Ith/Idyn: 6.3/16 kA-დან 100/250 kA-მდე, ტიპის მიხედვით;
- Frequency/სტანდარტები: 50/60 Hz; IEC, VDE, IEEE, BS, GOST, CSN;
- Secondary winding count (1-8, ჩვეულებრივ 2), დანიშნულება (measurement/protection/testing/PX-class);
- Terminal marking scheme (a-f configurations, S1/S2 vs 1S1/2S1 naming);
- Ordering key (voltage/current/dimension/primary terminals) + dimensional drawings.

## Relevant Equipment

current transformer (CT) — per `CLAUDE.md` §2.3.

## Relevant Agents

- **relay-protection / standards-compliance** (პირველადი, CT circuit checks).
- **supplier-offer-review** (მეორადი, evidence-mapping-ისთვის).

## Section References Only (გვერდის მითითებები — ვიზუალურად დადასტურებული)

- გვ. 1 — Cover/title
- გვ. 2 — Parameters ცხრილი (Um, withstand voltages, primary current, Ith), Description, Rated primary/secondary currents, Frequency, Standards, Cantilever strength, Torques
- გვ. 3 — CT outlet marking (a-f), Secondary terminal box, Code designation (ordering key)
- გვ. 4 — Standardized transformers ცხრილი (Type/Ithn-dyn/Ratio/Burden/Class/FS-ALF), TPU 70.51-76.51
- გვ. 5-9 — Dimensional Drawings (weight, creepage distance, drawing number, polarity) — TPU 70.41-დან 78.63-მდე
- გვ. 10 — NOTE/disclaimer, Contact us, back cover

## Limitations

- Terminal marking/core-purpose (protection vs metering) project-specific მინიჭება მაინც project-specific supplier datasheet-ს საჭიროებს.
- Rev.9-ის წინა ისტორია (Rev.1-8) ხელმისაწვდომი არ არის — მაგრამ ეს არ არის რეალური შეზღუდვა, ვინაიდან ეს არის უახლესი ცნობილი revision.

## Citation Guidance

```text
[Source: ABB TPU 7x.xx Indoor Supporting CT Datasheet, 1VLC000513 Rev.9 (2026-03-16), p. 2 — Parameters table]
[Source: ABB TPU 7x.xx Datasheet, p. 4 — Standardized transformers table, visually confirmed]
```

## Copyright-Safe Usage Rule

Per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md): raw PDF რჩება მხოლოდ `materials_inbox/`-ში, git-ignored; არცერთი გრძელი ტექსტი/ცხრილი/გრაფიკა არ კოპირდება ამ ბარათში; მხოლოდ პარაფრაზირებული, საკუთარი სიტყვებით შეჯამებული ინფორმაცია გამოიყენება.

## Status / Confidence

**Preliminary.** ვინაობა, სტრუქტურა, ტექნიკური content — **High Confidence** (სრული ვიზუალური დადასტურებით). Currency — უახლესი ცნობილი revision. Real project-ის კონკრეტული CT unit-ის კონფიგურაცია — **Supplier Evidence Required**, ყოველთვის.

## Recommended Next Action

1. თუ რეალური პროექტისთვის TPU CT-ის ზუსტი project-specific მონაცემები საჭირო გახდება (ratio, core purpose, burden, accuracy class) — მოთხოვნილ იქნას project-specific supplier CT datasheet.
2. ეს source note ემსახურება, როგორც [`abb_tpu_7x_indoor_supporting_current_transformers_datasheet_evidence_map.md`](../technical_notes/abb_tpu_7x_indoor_supporting_current_transformers_datasheet_evidence_map.md) და [`abb_tpu_7x_indoor_supporting_current_transformers_datasheet_location_map.md`](../technical_notes/abb_tpu_7x_indoor_supporting_current_transformers_datasheet_location_map.md)-ის საფუძველი — **evidence-mapping reference only, not a compliance authority**.
