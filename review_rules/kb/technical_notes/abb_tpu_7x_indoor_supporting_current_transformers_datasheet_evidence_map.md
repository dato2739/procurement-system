Document title: Evidence Map — ABB TPU 7x.xx Indoor Supporting Current Transformers Datasheet
Version: 1.1
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# Evidence Map — ABB TPU 7x.xx Indoor Supporting Current Transformers Datasheet

**ეს დოკუმენტი არ არის checklist და არ არის mandatory requirement-ების სია.** ის ასახავს, თუ რა ტიპის supplier evidence შეიძლება შემოწმდეს ამ 10-გვერდიანი TPU 7x.xx datasheet-ის, როგორც **manufacturer reference**-ის, გამოყენებით — და, ყველაზე მნიშვნელოვანი, რა **არ შეიძლება** დამტკიცდეს მისი გამოყენებით. საფუძვლად გამოყენებულია [`abb_tpu_7x_indoor_supporting_current_transformers_datasheet_source_note.md`](../source_cards/abb_tpu_7x_indoor_supporting_current_transformers_datasheet_source_note.md).

**Status ენა, გამოყენებული ქვემოთ:** Reference Match / Supplier Evidence Required / Not Verified / Manufacturer-Specific / Low Confidence / Engineer Review Required.

---

## ⚠ Extraction Quality — წინაპირობა

ფაილი (~919 KB, 10 გვ.) სრულად წაკითხულია **ვიზუალურად** — ტექსტ-ექსტრაქციის ნაწილობრივი დეფექტი (narrative-ჩართული რიცხვების დაკარგვა) სრულად აღმოიფხვრა. **ყველა მონაცემი High Confidence-ითაა.**

---

## 1. CT Identity and Model/Type

- **Status: Reference Match**
- დადასტურებულია: მწარმოებელი — ABB; პროდუქტი — **TPU 7x.xx** (indoor supporting current transformer); ordering key (გვ. 3) განსაზღვრავს ზუსტ ტიპს: `TPU x x . x x` — voltage (7=up to 36/40.5kV), current (0/3/4/5/6 — მოცემული primary current range-ის მიხედვით), dimension (4/5/6/7 — ზომა), primary terminals (1/2/3/4).
- **Supporting Reference — Rating Plate Interpretation:** CT rating plate-ის ველების ზოგადი ინტერპრეტაცია (s.n., type code, or.n., ratio, accuracy classes, Ith/Idyn, temperature class) დეტალურადაა ახსნილი [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md) §1-ში (TPU 40.13 მაგალითით) — სასარგებლოა TPU 7x.xx-ის rating plate-ის წასაკითხადაც, რადგან იგივე ABB CT rating-plate ფორმატს იზიარებს.

## 2. Rated Voltage / Insulation Level

- **Status: Reference Match (High Confidence)**
- Um: **36; 38.5; 40.5 kV**; rated power-frequency withstand voltage: **70; 80; 90 kV**; rated lightning impulse withstand voltage: **170; 180; 200 kV**.
- ეს ცხადად მოიცავს 6-10 kV პროექტის scope-ს (36-40.5 kV Um კლასი ტიპურად გამოიყენება 35 kV-მდე სისტემებში, 10 kV-ის ჩათვლით).

## 3. Primary Current Range

- **Status: Reference Match (High Confidence)**
- Rated primary current: **10 - 2500 A**, სტანდარტული მნიშვნელობებით: 10;15;20;25;30;40;50;60;75;100;150;200;300;400;500;600;750;1000;1250;1500;2000;2500 A.
- "Reconnectible (primary till 2x600 A)" — ორმაგი primary connection ვარიანტიც არსებობს.

## 4. Secondary Current 1A / 5A

- **Status: Reference Match (High Confidence)**
- Rated secondary currents: **5 A; 1 A** (შესაძლებელია სხვადასხვა მნიშვნელობის კომბინირება ერთ transformer-ში, მაგ. multi-core design).
- **Engineer Review Required / Supplier Evidence Required:** project-specific CT-ის secondary current-ი უნდა დაემთხვეს project-ის relay-ს CT input rating-ს (per [`iec_60255_protection_relay_checklist.md`](../checklists/iec_60255_protection_relay_checklist.md) Item 19).

## 5. CT Ratio Evidence

- **Status: Reference Match (High Confidence) — product-line დონეზე**
- "Standardized transformers" ცხრილი (გვ. 4) აჩვენებს ტიპურ ratio-ებს (მაგ. 10//5, 100//5, 2500//5, multi-secondary ვარიანტებით — 10//5/5, 40//5/5 და ა.შ.).
- **Supplier Evidence Required:** project-specific ratio-ს დასადასტურებლად საჭიროა კონკრეტული supplier datasheet/order code.

## 6. Metering Accuracy Class and Burden

- **Status: Reference Match (High Confidence)**
- Metering class **0.5** ფიგურირებს ცხრილში (მაგ. TPU 70.51, Ratio 10//5, Burden 15 VA, Class 0.5, FS5).
- Burden values: 5-60 VA დიაპაზონში, ტიპის/კომბინაციის მიხედვით.

## 7. Protection Accuracy Class and Burden

- **Status: Reference Match (High Confidence)**
- Protection classes **5P, 10P** ცხადადაა ცხრილში, სხვადასხვა ALF (Accuracy Limit Factor) მნიშვნელობით (5, 10, 15).
- Burden values ანალოგიურად 5-60 VA დიაპაზონში.

## 8. FS / ALF / PX-Class Information

- **Status: Reference Match (High Confidence) — ნაწილობრივი დეტალი**
- **FS (Factor of Safety)** მითითებულია ცხრილში (მაგ. FS5, FS5/10, FS10/10) — metering core-ის დაცვის ფაქტორი.
- **ALF (Accuracy Limit Factor)** მითითებულია ცხრილში, ხშირად "FS/ALF" ერთ სვეტში (მაგ. "5/5" ნიშნავს ALF=5).
- **PX-class:** narrative ტექსტში მოხსენიებულია, რომ "testing winding, PX class windings" შესაძლებელია secondary winding-ის დანიშნულებად — **მაგრამ ცხრილში კონკრეტული PX-class მონაცემები (Rpx, Ipx, Ek) არ ჩანს** — **Not Verified** ამ დოკუმენტში, project-specific PX-class მოთხოვნის შემთხვევაში საჭირო იქნება ცალკე supplier datasheet.

## 9. Short-Time Thermal Current (Ith)

- **Status: Reference Match (High Confidence)**
- "Rated short-time thermal current up to 100 kA/1s" (Parameters ცხრილი, გვ. 2); "Standardized transformers" ცხრილში (გვ. 4) Ithn მნიშვნელობები ცალკეული ტიპისთვის: 6.3 kA-დან 100 kA-მდე.
- **Engineer Review Required — duration-basis:** ეს მნიშვნელობები **1s** ბაზისზეა გამოსახული (per parameters table) — თუ project-ის cubicle-ის short-time withstand სხვა დროის ბაზისზეა (მაგ. 3s), საჭიროა duration-basis conversion, ანალოგიურად, როგორც ABB UniGear ZS1-ის შემთხვევაში დაფიქსირდა (`iec_61869_2_current_transformer_checklist.md` Item 7-ის ლოგიკა).

## 10. Dynamic Current (Idyn)

- **Status: Reference Match (High Confidence)**
- "Standardized transformers" ცხრილში Idyn მითითებულია Ithn-თან ერთად (Ithn/dyn ფორმატში, მაგ. "6.3/16" = Ithn 6.3 kA, Idyn 16 kA; "50/125" = Ithn 50 kA, Idyn 125 kA).

## 11. Frequency

- **Status: Reference Match (High Confidence)**
- Rated frequency: **50 Hz ან 60 Hz**, სხვა — მოთხოვნით.

## 12. Number of Secondary Windings / Cores

- **Status: Reference Match (High Confidence) — Manufacturer-Specific ტერმინოლოგია**
- Secondary windings: **1-დან 8-მდე** (ჩვეულებრივ 2), დამოკიდებული parameter-კომბინაციაზე (accuracy class, short-circuit current, overcurrent factor).
- დანიშნულება: measurement, protection, ან სპეციალური გამოყენება (testing winding, PX-class winding).
- CT outlet marking scheme (a-f, გვ. 3) აჩვენებს single-core, double-core (reconnectable secondary/primary-ზე), three-core დიზაინებს.

## 13. Terminal Marking / Polarity / Secondary Terminal Reference

- **Status: Reference Match (High Confidence — ვიზუალურად დადასტურებული)**
- ტერმინალის მარკირების სქემები (a-f, გვ. 3): S1/S2 (single-core), 1S1/1S2/2S1/2S2 (double-core), 1S1/1S2/1S3/2S1/2S2/2S3 (double-core reconnectable), 1S1/1S2/2S1/2S2/3S1/3S2 (three-core), C1/C2 (double-core reconnectable primary-ზე).
- Secondary terminal box ფოტო აჩვენებს 1S1/1S2/2S1/2S2/Ck/PE ტერმინალებს.
- Polarity: P1→secondary terminal, P2→secondary terminal (dimensional drawings-ში ცალკეული drawing number-ით).
- **Supporting Reference:** უფრო ფართო CT terminal marking სქემა (1-6 core, taps, capacitive divider ვარიანტები, IEC და IEEE ორივე კონვენციით) ხელმისაწვდომია [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md) §2-ში — სასარგებლოა, თუ project-specific CT-ს TPU 7x.xx-ისგან განსხვავებული core/tap კონფიგურაცია აქვს.

## 14. Dimensions / Ordering Code / Mechanical Arrangement

- **Status: Reference Match (High Confidence — ვიზუალურად დადასტურებული)**
- სრული dimensional drawings (გვ. 5-9) — weight (41-88 kg, ტიპის მიხედვით), creepage distance (377-488 mm), cantilever strength (5 kN), torque specs (M5/M8/M12), drawing number-ები (მაგ. 1VL4600986R0101/0102), polarity.
- 18-ტიპის ordering key — voltage/current/dimension/primary terminals.

## 15. CT-Relay Compatibility Evidence Required

- **Status: Engineer Review Required (ცხადი cross-check საჭირო)**
- CT-ს secondary current (1A ან 5A) უნდა შეესაბამებოდეს relay-ს CT input rated secondary current-ს.
- CT-ს burden უნდა იყოს relay-ს/cable-ის ჯამურ burden-ზე მეტი ან ტოლი.
- **Manufacturer-Specific:** ეს TPU 7x.xx-ის product-line-ის ზოგადი მონაცემია — project-specific relay-ს (მაგ. REF615) input rating-თან cross-check ცალკე უნდა გაკეთდეს, per [`abb_ref615_feeder_protection_product_guide_evidence_map.md`](abb_ref615_feeder_protection_product_guide_evidence_map.md) §3.

## 16. Supplier Documents That Should Be Requested

თუ მომავალში ABB TPU 7x.xx-ზე დაფუძნებული offer მოვა:

- project-specific CT datasheet — ზუსტი ratio, core purpose (protection/metering), burden, accuracy class, ALF/FS ან PX-data;
- Ith/Idyn duration-basis დადასტურება (1s vs project-ის cubicle-ის short-time withstand ბაზისი);
- secondary current (1A/5A) დადასტურება, project-ის relay-ს input rating-თან cross-check-ისთვის;
- terminal marking/wiring diagram-ის project-specific ვერსია;
- type test report/routine test report (project-specific unit).

## 17. What Must NOT Be Concluded From This Datasheet Alone

- **არ შეიძლება** დავასკვნათ, რომ project-ის კონკრეტული CT-ს აქვს ესა თუ ის ratio/accuracy class/burden — ეს დოკუმენტი მხოლოდ product-line-ის **ხელმისაწვდომ ვარიანტებს** აჩვენებს.
- **არ შეიძლება** დავასკვნათ, რომ Ith-ის 1s ბაზისი ავტომატურად ემთხვევა project-ის cubicle-ის withstand-ის drug-ს (მაგ. 3s) — საჭიროა duration-basis conversion.
- **არ შეიძლება** დავასკვნათ, რომ project-ის CT-ს აქვს PX-class winding, თუ ეს project-specific datasheet-ით არ დადასტურდება.
- **არ შეიძლება** ეს datasheet გამოყენებულ იქნას, როგორც IEC 61869-2 mandatory compliance-ის დამტკიცება — ეს არის მწარმოებლის საკუთარი მასალა.
- **Engineer Review Required** მიენიჭება ნებისმიერ შემთხვევას, სადაც ეს datasheet გამოიყენება, როგორც ერთადერთი წყარო რაიმე ტექნიკური დასკვნისთვის რეალურ პროექტში.

## 18. Supporting Reference — CT Secondary Grounding and Wiring Interpretation (Installation Manual Cross-Reference, added 2026-07-14)

- **Status: Supporting Reference Available (product-family level) / Project Drawing Required (actual wiring)**
- ეს TPU 7x.xx datasheet თავად **არ** შეიცავს secondary grounding-ის ან wiring diagram-ის სექციას. ეს გაპი ახლა **ნაწილობრივ დახურულია** დამხმარე მანუალით — [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md), კონკრეტულად:
  - **CT secondary grounding** — §4-ში (unused CT secondary-ს short-circuit-ისა და additional grounding-ის წესი; PE terminal-ის constant-grounding წესი voltage-indication-იანი CT-სთვის);
  - **CT wiring diagram interpretation** — §6-ში (Appendix 2, ტიპური single/multi-core CT connection მაგალითები).
- **⚠ რაც კვლავ რჩება Project-specific:** ეს არის **product-family-level supporting reference**, არა project-specific wiring evidence — Appendix 2-ის მაგალითები ტიპურია, project-ის საკუთარი terminal/wiring diagram მაინც აუცილებელია (**Project Drawing Required**) SCADA/relay/metering/grounding cross-check-ისთვის.

---

## Missing / Insufficient Information — Acquisition Instruction

**რა აკლია:** ეს დოკუმენტი product-line reference-ია — **project-specific CT-ის ზუსტი ratio, core purpose, burden, accuracy class, ALF/FS ან PX-data, Ith/Idyn duration, secondary current, terminal marking/wiring reference**.

**რატომ არის საჭირო:** რეალური project review-სთვის საჭიროა კონკრეტული, project-ისთვის შეკვეთილი CT unit-ის ზუსტი მონაცემები, არა product-line-ის ზოგადი დიაპაზონი.

**რა ტიპის დოკუმენტს შეუძლია ამის მოწოდება:** Supplier-specific CT datasheet ან order-confirmation დოკუმენტი.

**სად უნდა მოძებნოს user-მა:** მიმწოდებლის ტექნიკური კომუნიკაცია ან project-ის offer-ის დანართები.

**რა უნდა აიტვირთოს:** სრული supplier CT datasheet ან order-code confirmation.

**სად ატვირთოს:** `inputs/datasheets/`.

**რეკომენდირებული filename:** `[supplier]_tpu_ct_datasheet_[project].pdf`.

**სტატუსი მანამდე:** **Supplier Evidence Required**.

**დამატებით — CT-relay compatibility:** თუ CT-relay compatibility review ხდება, **ორივე მხარე** (CT-ს secondary current ამ დოკუმენტიდან/supplier datasheet-იდან, და relay-ს CT input rating [`abb_ref615_feeder_protection_product_guide_evidence_map.md`](abb_ref615_feeder_protection_product_guide_evidence_map.md)-დან ან სხვა relay-ს დოკუმენტაციიდან) უნდა დადასტურდეს ცალ-ცალკე, სანამ compatibility "Pass" ჩაითვლება.

**✅ Terminal marking/grounding/wiring interpretation-ის დამხმარე წყარო — უკვე ხელმისაწვდომია (2026-07-14):** [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_source_note.md`](../source_cards/abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_source_note.md) და [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md) — იხ. §1, §13, §18 ზემოთ. ეს **არ ცვლის** ზემოთ ჩამოთვლილი project-specific supplier CT datasheet-ისა და wiring diagram-ის საჭიროებას.

---

## Recommended Next Action

Terminal marking/secondary grounding/wiring interpretation-ისთვის, იხ. [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md). თუ ზუსტი, project-specific CT მონაცემი ან actual wiring diagram საჭირო გახდება რეალური offer-ის შესაფასებლად, მოთხოვნილ იქნას project-specific supplier CT datasheet/wiring diagram ცალკე task-ის ფარგლებში — ეს Evidence Map რჩება **product-line-ის სტრუქტურული reference**, არა project-specific evidence.
