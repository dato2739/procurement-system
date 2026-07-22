Document title: Evidence Map — ABB TJC 6 Indoor Voltage Transformers Datasheet
Version: 1.1
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# Evidence Map — ABB TJC 6 Indoor Voltage Transformers Datasheet

**ეს დოკუმენტი არ არის checklist და არ არის mandatory requirement-ების სია.** ის ასახავს, თუ რა ტიპის supplier evidence შეიძლება შემოწმდეს ამ 7-გვერდიანი TJC 6 datasheet-ის, როგორც **manufacturer reference**-ის, გამოყენებით — და, ყველაზე მნიშვნელოვანი, რა **არ შეიძლება** დამტკიცდეს მისი გამოყენებით. საფუძვლად გამოყენებულია [`abb_tjc_6_indoor_voltage_transformers_datasheet_source_note.md`](../source_cards/abb_tjc_6_indoor_voltage_transformers_datasheet_source_note.md).

**Status ენა, გამოყენებული ქვემოთ:** Reference Match / Supplier Evidence Required / Not Verified / Manufacturer-Specific / Low Confidence / Engineer Review Required.

---

## ⚠ Extraction Quality — წინაპირობა

ფაილი (~488 KB, 7 გვ.) სრულად წაკითხულია **ვიზუალურად** — ტექსტ-ექსტრაქციის ნაწილობრივი დეფექტი (narrative-ჩართული რიცხვების დაკარგვა) სრულად აღმოიფხვრა. **ყველა მონაცემი, რომელიც ამ დოკუმენტში არსებობს, High Confidence-ითაა.** ეს datasheet თავად **არ** ფარავს ferroresonance-ს და დეტალურ open-delta grounding-ს, მაგრამ ამ ორივე თემისთვის ახლა **ხელმისაწვდომია დამხმარე cross-reference** — [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md) (განახლდა 2026-07-14) — იხ. §9 და §16 ქვემოთ.

---

## 1. VT Identity and Model/Type

- **Status: Reference Match**
- დადასტურებულია: მწარმოებელი — ABB (ABB s.r.o., ELDS Brno); პროდუქტი — **TJC 6** (indoor voltage transformer); document code 1VLC000521, Rev.7, 2025-06-01.

## 2. Rated Voltage and Insulation Level

- **Status: Reference Match (High Confidence)**
- Highest voltage for equipment (Um): **17.5 - 24 (25) kV**; power-frequency test voltage: 38-50(55) kV; lightning impulse test voltage: 95-125 kV.
- ეს ცხადად მოიცავს 6-10 kV პროექტის scope-ს.

## 3. Voltage Ratio

- **Status: Reference Match (High Confidence)**
- Rated primary voltages: **11/√3, 15/√3, 20/√3, 22/√3 kV** — სხვა primary voltage-ები მოთხოვნით.

## 4. Secondary Voltage

- **Status: Reference Match (High Confidence)**
- Rated secondary voltages: **100/√3 V, 110/√3 V**.

## 5. Measuring Winding Accuracy Class

- **Status: Reference Match (High Confidence)**
- Measuring winding accuracy classes: **0.2, 0.5, 1**.
- **Engineer Review Required / Supplier Evidence Required:** project-specific relay-ს voltage-input accuracy მოთხოვნასთან cross-check საჭიროა.

## 6. Protection/Residual Winding Accuracy Class

- **Status: Reference Match (High Confidence)**
- Protection winding: **3P, 6P**; residual winding (open-delta): კლასი **6P**.

## 7. Burden / Rated Output

- **Status: Reference Match (High Confidence)**
- Max. rated burden: **50/0.2 - 150/0.5 - 200/1 VA/cl** (measuring/protection); residual winding: **50-200/6P VA/cl**.
- Standard execution ცხრილი (გვ. 3-4) აჩვენებს ტიპურ კომბინაციებს (მაგ. burden 10;15;25 VA at accuracy 0.2).

## 8. Overvoltage Factor

- **Status: Reference Match (High Confidence)**
- სტანდარტული overvoltage factor: **1.9 x Un/8 hrs**, თუ სხვა არ არის მოთხოვნილი.
- **Engineer Review Required:** ეს ღირებულება პირდაპირ უკავშირდება ქსელის neutral-ის ტიპს (isolated/compensated/solidly earthed) — project-ის ქსელის ტიპთან შესაბამისობა ცალკე უნდა დადასტურდეს.

## 9. Residual/Open-Delta Winding

- **Status: Reference Match (High Confidence — ნარატიული პრინციპი) / Supporting Reference Available (დეტალური wiring)**
- Residual winding: 100/3 V, 110/3 V, კლასი 6P; ერთ-ერთი secondary winding-ი (3 VT-დან ერთი) გამოიყენება open-delta კონფიგურაციისთვის სამფაზა სისტემაში.
- ნარატიულად დადასტურებულია: **ერთი ტერმინალი თითოეული secondary winding-იდან, და ერთი ტერმინალი open-delta-დან, უნდა იყოს დამიწებული**.
- **✅ Gap closed (Supporting Reference Available):** დეტალური open-delta/residual winding grounding წესი — "dn ტერმინალი დამიწებული მხოლოდ ერთ-ერთ სამი VT-დან (დანარჩენ ორზე grounding screw-ი უნდა მოიხსნას)" — ახლა ხელმისაწვდომია [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md) §5-ში (Appendix 1, გვ. 10 ორიგინალ მანუალში). ეს რჩება **ზოგადი, product-family-level წესი** — project-specific wiring diagram მაინც საჭიროა, იხ. §16.

## 10. Frequency

- **Status: Reference Match (High Confidence)**
- Rated frequency: **50 Hz ან 60 Hz**.

## 11. Standard References

- **Status: Reference Match (High Confidence, ზოგადი) / Not Verified (ზუსტი edition)**
- დადასტურებული: "manufactured conformably to the requirements and recommendations of IEC, VDE, IEEE, BS, GOST and CSN" — **ზოგადი განცხადება**, კონკრეტული clause/edition ნომრები **არ არის** მითითებული.

## 12. Terminal Marking

- **Status: Reference Match (High Confidence — ვიზუალურად დადასტურებული)**
- სრული a-e სქემა (Picture 01, გვ. 3): A(M)/N(0) — პირველადი; a(m)/n(o) — მეორადი; a1/a2 (m1/m2) — tap-იანი; da/dn ან da1/da2/dn — residual/open-delta winding.
- **Supporting Reference:** ეს ტერმინალის მარკირების პრინციპი ფართოდაა გამეორებული/დეტალიზებული [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md) §3-ში (Appendix 1, IEC და IEEE ორივე კონვენციით) — სასარგებლოა, თუ project-specific VT-ს განსხვავებული tap/core კონფიგურაცია აქვს, ვიდრე TJC 6-ის სტანდარტული a-e სქემა.

## 13. Dimensions / Ordering Code / Mechanical Arrangement

- **Status: Reference Match (High Confidence — ვიზუალურად დადასტურებული)**
- TJC 6 dimensional drawing: weight ~38 kg, creepage distance 338 mm, drawing №44203580 (გვ. 5).
- External fuse holder dimensional drawing: length 346 mm, drawing/order numbers ცალკეული fuse rating-ისთვის (გვ. 6).

## 14. External Fuse Holder

- **Status: Reference Match (High Confidence — Manufacturer-Specific)**
- ხელმისაწვდომია, როგორც optional accessory — JT6 fuse, tripping current **300 mA** (რეკომენდებული system voltage 6.6 kV-ზე მაღლა) ან **600 mA** (6.6 kV-მდე), ცალკე მიწოდებული (order numbers: 1VL4200499R0201 / R0202).
- **Supporting Reference:** ზოგადი VT fuse rated current/voltage/length ცხრილი და external fuse holder-ის ინსტალაციის წესი ხელმისაწვდომია [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md) §9-ში — სასარგებლოა სხვა VT ტიპის fuse-ის შედარებისთვისაც, არა მხოლოდ TJC 6-ის.

## 15. Relay Voltage-Input Compatibility Evidence Required

- **Status: Engineer Review Required (ცხადი cross-check საჭირო)**
- VT-ს secondary voltage (100/√3 V ან 110/√3 V) უნდა შეესაბამებოდეს relay-ს voltage input rated secondary voltage-ს, per [`iec_60255_protection_relay_checklist.md`](../checklists/iec_60255_protection_relay_checklist.md) Item 20 (VT input compatibility).
- **Manufacturer-Specific:** ეს TJC 6-ის product-line-ის ზოგადი მონაცემია — project-specific relay-ს input rating-თან cross-check ცალკე უნდა გაკეთდეს.

## 16. VT-Cubicle Compatibility Evidence — Supporting Manual Now Available (Updated 2026-07-14)

- **Status: Supporting Reference Available (product-family level) / Engineer Review Required (project-specific application) / Project Drawing Required (actual wiring)**
- **✅ Ferroresonance — გაპი დახურულია, დამხმარე წყაროთი:** ეს TJC 6 datasheet თავად **კვლავ არ განიხილავს** ferroresonance-ის რისკს ან შემცირების ღონისძიებებს — ეს ფაქტი უცვლელია. თუმცა, ახლა ხელმისაწვდომია [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md) §7 (Appendix 3, ორიგინალ მანუალში გვ. 16) — ტექნიკური ფონი, VT Guard Pro/Pro-D მოწყობილობის აღწერა, damping resistor-ის რეკომენდებული მნიშვნელობები (100:3V→22Ω/450W, 110:3V→27Ω/450W), და over-voltage factor-ის რეკომენდაცია (2.5-3×Un/8h, TJC 6-ის სტანდარტული 1.9×Un/8h-ის ნაცვლად, თუ ferroresonance-ის რისკის შემცირება საჭიროა). ეს **product-family-level supporting reference-ია**, არა project-specific დადასტურება.
- **✅ Open-delta grounding — გაპი დახურულია, დამხმარე წყაროთი:** დეტალური wiring/schematic პრინციპი ("dn ტერმინალი დამიწებული მხოლოდ ერთ-ერთ სამი VT-დან") ახლა ხელმისაწვდომია იმავე დამხმარე evidence map-ის §5-ში — იხ. §9 ზემოთ.
- **⚠ რაც კვლავ რჩება Supplier/Project-specific:** ferroresonance mitigation-ის რეალური საჭიროება დამოკიდებულია project-ის ქსელის ტიპზე (isolated/compensated/solidly earthed) — ეს ცალკე უნდა შეფასდეს Engineer Review-ით; project-ის actual wiring diagram (Project Drawing Required) მაინც აუცილებელია, რადგან დამხმარე მანუალის wiring diagram-ები (Appendix 2) ტიპური მაგალითებია, არა project-specific schematic.

## 17. Supplier Documents That Should Be Requested

თუ მომავალში ABB TJC 6-ზე დაფუძნებული offer მოვა (ან ნებისმიერი სხვა VT):

- project-specific VT datasheet — ზუსტი voltage ratio, secondary voltage, winding purpose (measuring/protection/residual), accuracy class, burden, overvoltage factor;
- **project-specific wiring diagram/terminal diagram** — ✅ ზოგადი interpretation-ის მხარდაჭერა უკვე ხელმისაწვდომია [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md)-დან, მაგრამ project-ის საკუთარი schematic მაინც საჭიროა;
- fuse arrangement-ის დადასტურება, თუ გამოიყენება;
- type-test/routine-test report (project-specific unit).

**✅ Supporting installation/use/maintenance manual — უკვე დამუშავებულია და cross-referenced (2026-07-14):** [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_source_note.md`](../source_cards/abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_source_note.md) და [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md) ფარავს ferroresonance damping-ს (§7) და დეტალურ open-delta grounding-ს (§5) — იხ. §9 და §16 ზემოთ. ეს რჩება **დამხმარე product-family-level reference**, არა project-specific evidence.

## 18. What Must NOT Be Concluded From This Datasheet Alone

- **არ შეიძლება** დავასკვნათ, რომ project-ის კონკრეტული VT-ს აქვს ესა თუ ის ratio/accuracy class/burden — ეს ცხრილი **product-line-ის ხელმისაწვდომი ვარიანტებია**, არა project-ის offer-ის მონაცემი.
- **არ შეიძლება** დავასკვნათ, რომ ferroresonance-ის რისკი მართულია — ეს თემა ამ datasheet-ში საერთოდ არ განიხილება.
- **არ შეიძლება** დავასკვნათ, რომ open-delta grounding-ის სრული wiring procedure ცნობილია — მხოლოდ ზოგადი პრინციპია.
- **არ შეიძლება** ეს datasheet გამოყენებულ იქნას, როგორც IEC/GOST mandatory compliance-ის დამტკიცება.
- **Engineer Review Required** მიენიჭება ნებისმიერ შემთხვევას, სადაც ეს datasheet გამოიყენება, როგორც ერთადერთი წყარო რაიმე ტექნიკური დასკვნისთვის რეალურ პროექტში.

---

## Missing / Insufficient Information — Acquisition Instruction (განახლებული 2026-07-14)

**რა აკლია ახლაც:** (ა) project-specific VT-ის ზუსტი მონაცემები (ratio/accuracy/burden/overvoltage factor); (ბ) project-ის საკუთარი wiring/terminal diagram; (გ) type/routine test evidence კონკრეტული offered unit-ისთვის.

**რაც აღარ არის "Not Verified" — გაპი დახურულია (2026-07-14):** ferroresonance mitigation-ის ზოგადი პრინციპი და დეტალური open-delta grounding-ის wiring procedure ახლა ხელმისაწვდომია [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md)-ის მეშვეობით — იხ. §9 და §16 ზემოთ. ეს **product-family-level supporting reference-ია**, არა project-specific დადასტურება — ქსელის ტიპთან (isolated/compensated/solidly earthed) შესაბამისობა და actual wiring მაინც Engineer Review Required/Project Drawing Required-ია.

**რატომ არის საჭირო დარჩენილი გაპების დახურვა:** რეალური project review-სთვის საჭიროა კონკრეტული VT unit-ის მონაცემები და project-ის საკუთარი schematic — product-family-level reference-ი, თუნდაც ferroresonance/grounding-ს ფარავდეს ზოგადად, ვერ ჩაანაცვლებს ამას.

**რა ტიპის დოკუმენტს შეუძლია მოწოდება:** Supplier-specific VT datasheet; project-ის wiring/terminal diagram; type/routine test report.

**სად მოძებნოს:** მიმწოდებლის ტექნიკური კომუნიკაცია; პროექტის დიზაინის დოკუმენტაცია.

**რა უნდა აიტვირთოს:** სრული supplier VT datasheet; project-ის wiring/terminal diagram; type/routine test report.

**სად ატვირთოს:** `inputs/datasheets/` (datasheet) ან `inputs/drawings/` (wiring diagram).

**რეკომენდირებული filename:** `[supplier]_vt_datasheet_[project].pdf`, `[project]_vt_wiring_diagram.pdf`.

**სტატუსი მანამდე:** **Supplier Evidence Required** (project-specific datasheet) / **Project Drawing Required** (wiring/terminal diagram).

---

## Recommended Next Action

Ferroresonance-ისა და დეტალური open-delta grounding-ის ინტერპრეტაციისთვის, იხ. [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md). თუ project-specific მონაცემი ან actual wiring diagram საჭირო გახდება რეალურ პროექტში, მოთხოვნილ იქნას supplier-specific evidence ცალკე task-ის ფარგლებში — ეს Evidence Map რჩება **product-line-ის სტრუქტურული reference**, არა project-specific ან installation-level evidence.
