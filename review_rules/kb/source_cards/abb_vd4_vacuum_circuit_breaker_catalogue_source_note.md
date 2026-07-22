Document title: Source Note — ABB VD4 Vacuum Circuit Breaker Catalogue
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# წყაროს ბარათი (Source Note) — ABB VD4 Vacuum Circuit Breaker Catalogue

წარმოდგენილი ბარათი მომზადებულია [`source_note_template.md`](source_note_template.md)-ის სტრუქტურით და ეფუძნება [`materials_inventory.md`](../materials_inventory.md)-ის პუნქტ 19-ს.

**⚠ მნიშვნელოვანი შესავალი შენიშვნა:** ეს დოკუმენტი არის **მწარმოებლის (ABB) VCB catalogue**, **არა** IEC/GOST/კომპანიის mandatory სტანდარტი. ის შეიძლება გამოყენებულ იქნას მხოლოდ როგორც **manufacturer-specific reference** — supplier evidence-ის შედარების დამხმარე წყარო, არასოდეს როგორც mandatory compliance-ის ან mandatory breaker-type-ის დამტკიცების საფუძველი (per `CLAUDE.md` §3.2, §18.1).

**⚠⚠ Mandatory-status გაფრთხილება:** **ABB VD4 არ უნდა ჩაითვალოს სავალდებულო breaker ტიპად.** თუ მიმწოდებელი შესთავაზებს სხვა VCB ტიპს/მწარმოებელს, საჭირო იქნება იმ კონკრეტული VCB-ის **საკუთარი** datasheet/catalogue/type-test evidence — non-VD4 breaker **არ უნდა** უარყოფილ იქნას მხოლოდ იმ მიზეზით, რომ ის VD4 არ არის.

---

## Document Title

*VD4 Vacuum circuit breaker — Embedded epoxy pole & CL operating mechanism, 12...24kV, 630...4000A, 25...50kA* ("CATALOG").

## Standard Number

N/A — მწარმოებლის კატალოგი, არა სტანდარტი.

## Manufacturer / Issuing Entity

**ABB Xiamen Switchgear Co., Ltd.** (China) — ⚠️ ეს არის ABB-ის ჩინური საწარმოო ერთეული (No. 885, FangShanXiEr Road, Xiang'an District, Xiamen, Fujian, 361101), განსხვავებული ნებისმიერი ევროპული ABB VD4 საწარმოო ხაზისგან.

## Product Family / Type

VD4 — vacuum circuit breaker (embedded epoxy pole, CL operating mechanism).

## Document Type

Manufacturer catalogue — სრული ტექნიკური დოკუმენტაცია (60 გვერდი): ratings, structure/function, installation, commissioning/operation, maintenance, X-ray regulations, designation comparison.

## Page Count

**60 გვერდი** — დადასტურებულია ორმაგად: `pdftotext` form-feed დათვლით და **სრული გვერდობრივი ვიზუალური წაკითხვით** (ორივე მეთოდი თანხმდება).

## Document ID / Revision / Date

`1YHA000039_EN_REV Q, 01-2022, XM-VS` — ვიზუალურად დადასტურებული back cover-ზე.

## Voltage/Current/Short-Circuit Current Scope

**12...24 kV, 630...4000 A, 25...50 kA** — ეს პირდაპირ მოიცავს 6-10 kV პროექტის scope-ს (12 kV კლასი).

## Organization / Source

ABB Xiamen Switchgear Co., Ltd. — ოფიციალური საკონტაქტო ინფორმაცია დადასტურებულია back cover-ზე. კატალოგი მიუთითებს შესაბამისობას **GB/T 11022 & IEC 62271-1**, **GB/T 1984 & IEC 62271-100**-თან.

## Language

ინგლისური.

## Raw Private File Reference

`knowledge/materials_inbox/abb_vd4_vacuum_circuit_breaker_catalogue.pdf` (~10.2 MB) — ფაილი **არ არის** გადატანილი, გადარქმეული ან commit-ული; რჩება მხოლოდ ლოკალურ workspace-ში, `.gitignore`-ით დაცული, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

## Copyright Note

დოკუმენტის სრული ტექსტი/ცხრილები/გრაფიკა **არ არის** კოპირებული ამ ბარათში. მოცემულია მხოლოდ საკუთარი სიტყვებით გადმოცემული, პარაფრაზირებული შეჯამება, გვერდის/სექციის მითითებებით.

## Extraction Method (მნიშვნელოვანი)

ფაილის ზომა (~10.2 MB) 20 MB vision-tool ლიმიტს ქვემოთაა. **ტექსტ-ექსტრაქციას ჰქონდა მნიშვნელოვანი დეფექტები** — dimensional drawing ცხრილები და switching-cycle გრაფიკები plain-text-ში ძლიერ არეული/გამოუსადეგარი იყო. **სრულმა ვიზუალურმა (page-image) წაკითხვამ ეს პრობლემა მთლიანად აღმოფხვრა** — ყველა rating, დიაგრამა და ცხრილი ახლა High Confidence-ითაა დადასტურებული.

## Use Status

- [x] Preliminary
- [ ] Approved
- [ ] Legacy
- [ ] Current — unknown

**შენიშვნა:** სტატუსი — **Preliminary**. ვინაობა, სტრუქტურა და ტექნიკური content — **High Confidence** (სრული ვიზუალური დადასტურებით). GB/T↔IEC ზუსტი შესაბამისობის სტატუსი (IDT/MOD/NEQ) — **Not Verified**.

## Relevance to 6–10 kV VCB and Cubicle Review

VD4 არის ABB-ის ცნობილი VCB პროდუქტ-ხაზი, 12-24 kV კლასის (12 kV კლასი პირდაპირ 10 kV პროექტის scope-შია). ეს არის **პირველი VCB-სპეციფიკური manufacturer reference** ამ Knowledge Base-ში — Phase 1-ს ჯერ არ აქვს ცალკე VCB checklist (per `CLAUDE.md` §27, Advanced Scope), ამიტომ ეს catalogue მხოლოდ **evidence-mapping reference**-ის დონეზეა გამოსადეგი.

**⭐ მნიშვნელოვანი cross-reference:** გვ. 30-31-ის dimensional drawings ცხადად მიუთითებს "Powerbloc" და "**UniGear type ZS1**" panel-სისტემებზე თავსებადობის ზომებზე — პირდაპირი კავშირი უკვე დამუშავებულ [`abb_unigear_zs1_switchgear_catalogue_evidence_map.md`](../technical_notes/abb_unigear_zs1_switchgear_catalogue_evidence_map.md)-თან.

## Useful Technical Areas (ყველა ვიზუალურად დადასტურებული)

- Rated voltage: 12/17.5/24 kV; insulation level (power-frequency withstand 28/38/50 kV, lightning impulse 75/95/125 kV);
- Rated current: 630-4000A;
- Short-circuit breaking current: symm. 25/31.5/40/50 kA (asymm. 27.3-54.5 kA);
- Making current (peak): 63-150 kA;
- Short-time withstand duration: **3 წამი**;
- Operating sequence: O-3min-CO-3min-CO (ავტორეკლოუზინგით O-0.3s-CO-3min-CO);
- Function times: closing 55-70ms, opening 33-45ms, arcing ≤15ms, break time 40-60ms;
- Charging motor/releases: AC 110/220V, DC 24/48/60/110/220V;
- Auxiliary switches S1-S9, releases Y1-Y9;
- Interlocking (§4.5, 7-პუნქტიანი withdrawable-part interlock სია);
- Dimensional drawings, ordering key, GA-cubicle compatibility (Powerbloc/UniGear ZS1);
- Type/routine tests (GB/T 11022/IEC 62271-1, GB/T 1984/IEC 62271-100, VDE 0670/IEC 60694).

## Relevant Equipment

vacuum circuit breaker (VCB) — per `CLAUDE.md` §2.3.

## Relevant Agents

- **standards-compliance / supplier-offer-review** (პირველადი, VCB evidence-mapping).
- **drawing-schematics-review** (მეორადი, interlocking/wiring cross-check).

## Section References Only (გვერდის მითითებები — ვიზუალურად დადასტურებული)

- გვ. 1 — Cover/title
- გვ. 3 — Table of Contents
- გვ. 4-5 — Your safety first, §1 Summary/Standards
- გვ. 6-10 — §2 Technical data (fixed installation ratings, function times, releases/blocking magnet, motor-operated mechanisms)
- გვ. 11-19 — Figures 2/1-2/10 (photos), §2.4 switching-cycle graphs, §2.5 Dimensional drawings (fixed installation)
- გვ. 20 — §2.6 Circuit-breaker wiring diagram
- გვ. 21-34 — §3 Technical data (withdrawable part ratings + dimensional drawings, incl. UniGear ZS1/Powerbloc panel compatibility pp. 30-31)
- გვ. 35-36 — §3.3 Wiring diagrams for withdrawable part
- გვ. 37-42 — §4 Structure and function (breaker/mechanism structure, releases §4.3.1, interlocks §4.5)
- გვ. 43 — §5 Despatch and storage
- გვ. 44 — §6 Installation and mounting (torque tables)
- გვ. 45-48 — §7 Commissioning/Operation
- გვ. 49-57 — §8 Maintenance (inspection, servicing, repair, spare parts, interlock testing)
- გვ. 58 — §9 Application of X-ray regulations
- გვ. 59 — §10 VDE-DIN 40719 ↔ IEC 61346 designation comparison
- back cover — ABB Xiamen contact info, document code

## Limitations

- **GB/T↔IEC ზუსტი შესაბამისობა (IDT/MOD/NEQ) — Not Verified** დოკუმენტიდან.
- ABB Xiamen (China) manufacturing entity — შესაძლოა განსხვავდებოდეს ევროპული VD4 production line-ის დეტალებისგან.
- Permissible-switching-operations გრაფიკები (§2.4) ვიზუალურად დანახულია, მაგრამ ზუსტი რიცხვითი მნიშვნელობების ამოღება curve-ებიდან საჭიროებს დამატებით ვიზუალურ ინტერპრეტაციას თითოეული კონკრეტული rating-კომბინაციისთვის.

## Citation Guidance

```text
[Source: ABB VD4 Vacuum Circuit Breaker Catalogue, 1YHA000039_EN_REV Q (01-2022), p. 9 — Function times/rated voltage table]
[Source: ABB VD4 Catalogue, p. 40 — §4.5 Interlocks/protection against maloperation]
```

## Copyright-Safe Usage Rule

Per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md): raw PDF რჩება მხოლოდ `materials_inbox/`-ში, git-ignored; არცერთი გრძელი ტექსტი/ცხრილი/გრაფიკა არ კოპირდება ამ ბარათში; მხოლოდ პარაფრაზირებული, საკუთარი სიტყვებით შეჯამებული ინფორმაცია გამოიყენება.

## Status / Confidence

**Preliminary.** ვინაობა, სტრუქტურა, ტექნიკური content — **High Confidence** (სრული ვიზუალური დადასტურებით). GB/T↔IEC შესაბამისობა — **Not Verified**. Real project-ის კონკრეტული VCB offer-ის კონფიგურაცია — **Supplier Evidence Required**, ყოველთვის — და **მხოლოდ VD4-ისთვის** არ შემოიფარგლება.

## Recommended Next Action

1. თუ რეალური პროექტისთვის VD4-ის ან სხვა VCB-ის ზუსტი მონაცემები საჭირო გახდება — მოთხოვნილ იქნას project-specific supplier VCB datasheet/catalogue/type-test evidence.
2. ეს source note ემსახურება, როგორც [`abb_vd4_vacuum_circuit_breaker_catalogue_evidence_map.md`](../technical_notes/abb_vd4_vacuum_circuit_breaker_catalogue_evidence_map.md) და [`abb_vd4_vacuum_circuit_breaker_catalogue_location_map.md`](../technical_notes/abb_vd4_vacuum_circuit_breaker_catalogue_location_map.md)-ის საფუძველი — **evidence-mapping reference only, not a mandatory-type authority**.
