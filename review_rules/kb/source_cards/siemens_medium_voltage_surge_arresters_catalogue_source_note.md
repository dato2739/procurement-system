Document title: Source Note — Siemens Medium-Voltage Surge Arresters Catalogue
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# წყაროს ბარათი (Source Note) — Siemens Medium-Voltage Surge Arresters Catalogue

წარმოდგენილი ბარათი მომზადებულია [`source_note_template.md`](source_note_template.md)-ის სტრუქტურით და ეფუძნება [`materials_inventory.md`](../materials_inventory.md)-ის პუნქტ 22-ს.

**⚠ მნიშვნელოვანი შესავალი შენიშვნა:** ეს დოკუმენტი არის **მწარმოებლის (Siemens Energy) technical/product catalogue**, **არა** IEC/GOST/კომპანიის mandatory სტანდარტი. ის შეიძლება გამოყენებულ იქნას მხოლოდ როგორც **manufacturer reference** — supplier evidence-ის შედარების დამხმარე წყარო, არასოდეს როგორც mandatory compliance-ის ან mandatory manufacturer/type-ის დამტკიცების საფუძველი (per `CLAUDE.md` §3.2, §18.1).

**⚠ პროექტში პირველი Siemens-ბრენდის reference** — ყველა წინა manufacturer reference ამ Knowledge Base-ში ABB-ის იყო.

---

## Document Title

*Medium-voltage surge arresters* (მწარმოებლის technical/product catalogue).

## Standard Number

N/A — მწარმოებლის catalogue, არა სტანდარტი.

## Manufacturer / Issuing Entity

**Siemens Energy Global GmbH & Co. KG** (Transmission, Freyeslebenstraße 1, 91058 Erlangen, Germany); ასევე Siemens Energy Inc., Raleigh NC, USA — აშშ-ის ბაზრისთვის.

## Product Family / Type

- **3EK** — distribution class surge arresters;
- **3EH4** — medium-voltage plug-in arresters;
- **3EJ** — high energy discharge surge arresters (EJ2/EJ3/EJ4/EJ0/EJ9);
- **3EP-G** — porcelain surge arresters (generator/motor protection).

## Document Type

Manufacturer technical/product catalogue — surge arrester ratings, MOV ტექნოლოგია, სტანდარტების მიმოხილვა, selection guide, mounting, ordering.

## Page Count

**94 გვერდი** — დადასტურებულია ორმაგად: `pdftotext` form-feed დათვლით და **სრული გვერდობრივი ვიზუალური წაკითხვით**.

## Document ID / Revision / Date

**Not Verified** — ზუსტი document code/revision ნომერი **არ ჩანს** დოკუმენტში. მხოლოდ **© Siemens Energy, 2021** publication-year მარკირებაა დადასტურებული back cover-ზე (გვ. 94).

## Organization / Source

Siemens Energy Global GmbH & Co. KG — ოფიციალური საკონტაქტო ინფორმაცია დადასტურებულია back cover-ზე; ვებგვერდი siemens-energy.com/arresters.

## Language

ინგლისური.

## Raw Private File Reference

`knowledge/materials_inbox/siemens_medium_voltage_surge_arresters_catalogue.pdf` (~12.43 MB) — ფაილი **არ არის** გადატანილი, გადარქმეული ან commit-ული; რჩება მხოლოდ ლოკალურ workspace-ში, `.gitignore`-ით დაცული, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

## Copyright Note

დოკუმენტის სრული ტექსტი/ცხრილები/დიაგრამები **არ არის** კოპირებული ამ ბარათში. მოცემულია მხოლოდ საკუთარი სიტყვებით გადმოცემული, პარაფრაზირებული შეჯამება, გვერდის/სექციის მითითებებით.

## Extraction Method (მნიშვნელოვანი)

ფაილის ზომა (~12.43 MB) 20 MB vision-tool ლიმიტს ქვემოთაა. **მთელი 94-გვერდიანი დოკუმენტი წარმატებით წაიკითხა ვიზუალურად** (page-image confirmation) — ყველა მოთხოვნილი სექცია High Confidence-ითაა დადასტურებული. ტექსტ-ექსტრაქციას ჰქონდა ჩვეული ცხრილში-ჩართული რიცხვების ხარვეზი, სრულად აღმოფხვრილი ვიზუალური წაკითხვით.

## Use Status

- [x] Preliminary
- [ ] Approved
- [ ] Legacy
- [ ] Current — unknown

**შენიშვნა:** სტატუსი — **Preliminary**. ვინაობა, სტრუქტურა და ამ დოკუმენტში წარმოდგენილი ტექნიკური content — **High Confidence** (სრული ვიზუალური დადასტურებით). Currency — publication year 2021 დადასტურებული, document ID/revision — **Not Verified**.

## Surge Arrester Technical Scope

- MOV (Metal Oxide Varistor) ტექნოლოგიის ზოგადი აღწერა;
- Standards and testing (IEC 60099-4/5/8/9, IEEE C62.11/C62.22, GB 11032);
- Selection guide — 5-ნაბიჯიანი პროცედურა (Uc/Ur, In, protection level, energy class, protective zone);
- Rated voltage (Ur), continuous operating voltage (Uc), nominal discharge current (In);
- Residual voltage/protection level (8/20µs, 30/60µs impulse ცხრილები);
- Energy capability — energy class (IEEE C62.11), charge transfer rating (Qrs), thermal charge transfer (Qth), thermal energy rating (Wth);
- Rated short-circuit current (Is);
- Housing/insulation/creepage distance;
- Mounting arrangements (transformer bracket, cross-arm bracket, insulated/grounded plates);
- Ordering data.

## Relevance to 6–10 kV Cubicle/Feeder Review

Siemens 3EK/3EH4/3EJ/3EP-G დაფარავს 3-60 kV Ur დიაპაზონს (product-line-ის მიხედვით) — ცხადად მოიცავს 6-10 kV პროექტის scope-ს. ეს არის **პროექტში პირველი surge arrester manufacturer reference** — ჯერ არ არსებობს ცალკე surge arrester-ის checklist ამ Knowledge Base-ში.

## Useful Technical Areas (ყველა ვიზუალურად დადასტურებული)

- Definition/application (გვ. 2);
- MOV technology principle (გვ. 6);
- Standards and testing — IEC 60099-4 ცხადი ციტირებით (გვ. 7);
- Selection guide (გვ. 9-14);
- Ur/Uc ცხრილები ყველა პროდუქტ-ხაზისთვის;
- Nominal discharge current (5/10/20 kA, ტიპის მიხედვით);
- Residual voltage/protection level ცხრილები;
- Energy class/charge transfer/thermal energy rating (გვ. 12);
- Rated short-circuit current (20-300 kA დიაპაზონი);
- Housing/creepage distance;
- Mounting/dimensional drawings;
- Ordering key.

## Limitations

- **Document ID/revision Not Verified** — ზუსტი publication/edition ნომერი არ ჩანს, მხოლოდ 2021 წელი.
- Type/routine test evidence მხოლოდ ზოგადი პრინციპითაა აღწერილი (გვ. 7) — კონკრეტული test report template ან ნომრები არ არის მოცემული.
- Selection guide-ის მაგალითები ზოგადია — project-specific insulation coordination calculation ცალკე საჭიროა.

## ⚠ Mandatory-Status Warning

Siemens Energy **არასოდეს** არ უნდა ჩაითვალოს mandatory surge arrester მწარმოებლად ან mandatory ტიპად. თუ მიმწოდებელი შესთავაზებს სხვა surge arrester ტიპს/მწარმოებელს, **საჭირო იქნება ცალკე, supplier-specific surge arrester datasheet/catalogue/type-test evidence** — non-Siemens arrester არ უნდა უარვყოთ მხოლოდ იმის გამო, რომ Siemens არ არის.

## Citation Guidance

```text
[Source: Siemens Energy Medium-Voltage Surge Arresters Catalogue, © 2021, p. 12 — Energy Class Table]
[Source: Siemens Surge Arresters Catalogue, p. 7 — Standards and Testing, IEC 60099-4, visually confirmed]
```

## Copyright-Safe Usage Rule

Per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md): raw PDF რჩება მხოლოდ `materials_inbox/`-ში, git-ignored; არცერთი გრძელი ტექსტი/ცხრილი/დიაგრამა არ კოპირდება ამ ბარათში; მხოლოდ პარაფრაზირებული, საკუთარი სიტყვებით შეჯამებული ინფორმაცია გამოიყენება.

## Status / Confidence

**Preliminary.** ვინაობა, სტრუქტურა, ამ დოკუმენტში წარმოდგენილი ტექნიკური content — **High Confidence** (სრული ვიზუალური დადასტურებით). Document ID/revision — **Not Verified**. Real project-ის კონკრეტული surge arrester unit-ის შერჩევა და insulation coordination — **Supplier Evidence Required / Project Calculation Required**, ყოველთვის.

## Recommended Next Action

1. გამოიყენება, როგორც surge arrester ratings/selection/standards-ის სტრუქტურული reference.
2. ეს source note ემსახურება, როგორც [`siemens_medium_voltage_surge_arresters_catalogue_evidence_map.md`](../technical_notes/siemens_medium_voltage_surge_arresters_catalogue_evidence_map.md) და [`siemens_medium_voltage_surge_arresters_catalogue_location_map.md`](../technical_notes/siemens_medium_voltage_surge_arresters_catalogue_location_map.md)-ის საფუძველი — **evidence-mapping reference only, not a compliance authority**.
