Document title: Evidence Map — ABB Current and Voltage Instrument Transformers Installation/Use/Maintenance Manual
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# Evidence Map — ABB Current and Voltage Instrument Transformers Installation/Use/Maintenance Manual

**ეს დოკუმენტი არ არის checklist და არ არის mandatory requirement-ების სია.** ის ასახავს, თუ რა ტიპის supplier/project evidence შეიძლება შემოწმდეს ამ 68-გვერდიანი installation/use/maintenance manual-ის, როგორც **დამხმარე reference**-ის, გამოყენებით — და, ყველაზე მნიშვნელოვანი, რა **არ შეიძლება** დამტკიცდეს მისი გამოყენებით. საფუძვლად გამოყენებულია [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_source_note.md`](../source_cards/abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_source_note.md).

**Status ენა, გამოყენებული ქვემოთ:** Reference Match / Supporting Reference / Supplier Evidence Required / Project Drawing Required / Not Verified / Low Confidence / Manufacturer-Specific / Engineer Review Required.

---

## ⚠ Extraction Quality — წინაპირობა

ფაილი (~10.75 MB, 68 გვ.) სრულად წაკითხულია **ვიზუალურად** — ყველა მოთხოვნილი სექცია High Confidence-ითაა. ამ დოკუმენტს არ ჰქონია ის ტექსტ-ექსტრაქციის დეფექტი, რაც TPU CT-სა და TJC 6-ში იყო, რადგან ვიზუალურმა წაკითხვამ ის მთლიანად დაფარა.

---

## 1. CT/VT Identity and Rating Plate Interpretation

- **Status: Supporting Reference (High Confidence)**
- მანუალი (გვ. 3-4) იძლევა CT და VT rating plate-ის სრულ ინტერპრეტაციას — s.n., type code, or.n., rated ratio, accuracy classes, Ith/Idyn, temperature class, წარმოების წელი და ა.შ.
- **Manufacturer-Specific:** მაგალითები TPU 40.13 (CT) და TJC 4 (VT)-ზეა აგებული, მაგრამ პრინციპი გამოსადეგია ნებისმიერი ABB CT/VT rating plate-ის წასაკითხად.

## 2. CT Secondary Terminal Marking Support

- **Status: Supporting Reference (High Confidence)**
- Appendix 1 (გვ. 9, 11) იძლევა CT-ის ტერმინალის მარკირების სრულ სქემას IEC (s1/s2...) და IEEE (x1/x2...) კონვენციებით, ერთი-ექვსი ბირთვამდე, tap-ებით, capacitive divider (CD)-ით.

## 3. VT Secondary Terminal Marking Support

- **Status: Supporting Reference (High Confidence)**
- Appendix 1 (გვ. 10, 12) იძლევა VT-ის ტერმინალის მარკირების სქემას (single/double pole, measuring+residual, tap-ებით) IEC და IEEE კონვენციებით, ასევე TJMC 7.x plug-in connection-ის ცხრილს.

## 4. Secondary Grounding Support

- **Status: Supporting Reference (High Confidence)**
- გვ. 4-ზე 8 უსაფრთხოების წესია ჩამოთვლილი, მათ შორის: CT secondary-ს short-circuit-ისა და დამატებითი grounding-ის წესი (item 4); VT secondary-ს short-circuit-ის აკრძალვა (item 5); PE ტერმინალის constant-grounding წესი voltage-indication-იანი CT-სთვის (item 7).

## 5. Open-Delta / Residual Winding Grounding Support

- **Status: Supporting Reference (High Confidence)** — ეს პირდაპირ პასუხობს [`abb_tjc_6_indoor_voltage_transformers_datasheet_evidence_map.md`](abb_tjc_6_indoor_voltage_transformers_datasheet_evidence_map.md) §16-ის ხარვეზს.
- გვ. 4 (safety instruction item 3) და გვ. 10 (Appendix 1) ცხადად აყალიბებს წესს: **"Residual voltage windings connected to open delta must have dn terminal earthed only on one of three transformers (earthing screws at dn terminals of others two transformers have to be removed)."**
- ეს არის ნარატიული წესი და ვიზუალურად დადასტურებული ტერმინალის დიაგრამა ერთად — არა სრული project-specific wiring schematic.

## 6. Wiring Diagrams Support

- **Status: Supporting Reference (High Confidence)**
- Appendix 2 (გვ. 13-15) იძლევა CT-ისა და VT-ის ტიპურ connection-ის მაგალითებს (single/multi-core CT, single/double-pole VT, ground connection ვარიანტებით).
- **⚠ Project Drawing Required:** ეს არის **ტიპური მაგალითები**, არა project-specific schematic — რეალურ პროექტში საჭიროა project-ის საკუთარი wiring/terminal diagram.

## 7. Ferroresonance Damping Support

- **Status: Supporting Reference (High Confidence)** — ეს პირდაპირ პასუხობს [`abb_tjc_6_indoor_voltage_transformers_datasheet_evidence_map.md`](abb_tjc_6_indoor_voltage_transformers_datasheet_evidence_map.md) §16-ის "Not Present" ხარვეზს.
- Appendix 3 (გვ. 16) იძლევა: ტექნიკურ ფონს (ferroresonance-ის მიზეზი, single-pole insulated VT-ის რისკი unearthed ქსელში); VT Guard Pro / VT Guard Pro-D მოწყობილობის აღწერას (damping resistor-ის ალტერნატივა, self-diagnostic ვერსია); damping resistor-ის რეკომენდებულ მნიშვნელობებს (100:3V→22Ω/450W, 110:3V→27Ω/450W); over-voltage factor რეკომენდაციას (**2.5-3×Un/8h**, სტანდარტული 1.9×Un/8h-ის ნაცვლად, თუ ferroresonance-ის რისკის შემცირება საჭიროა).

## 8. Capacitive Voltage Indicator / Divider Support

- **Status: Supporting Reference (High Confidence)**
- გვ. 7 იძლევა coupling electrode-ის პრინციპს (C1/C2 კონდენსატორული ეფექტი), IEC 62271-213:2021-თან შესაბამისობას, და რეკომენდებულ მინიმალურ capacitance ცხრილს ნომინალური ძაბვის დიაპაზონის მიხედვით.

## 9. Fuse Support

- **Status: Supporting Reference (High Confidence)**
- გვ. 7 იძლევა VT fuse-ის სრულ ცხრილს (rated current, rated voltage, length, striker pin ხელმისაწვდომობა), external fuse holder-ის ინსტალაციის წესს, და TJP 7.4-ის სპეციალურ fuse-ის შენიშვნას.

## 10. Routine Test Report Support

- **Status: Supporting Reference (High Confidence)**
- გვ. 8 ადასტურებს, რომ routine test report და ორი rating plate მოწოდების ნაწილია სტანდარტულად; დამატებითი (ფასიანი) რეპორტების სია (accuracy test, magnetizing curve, verification tests) ასევე მოცემულია.

## 11. Normative References

- **Status: Reference Match (ზოგადი) / Not Verified (ზუსტი edition/clause)**
- გვ. 8 იძლევა IEC 61869-1/2/3, IEC 61243-5, IEC 60529, ISO 12100, EN 50110-1 სიას, ასევე დამატებით ეროვნულ/საერთაშორისო სტანდარტების ჩამონათვალს (AS, ČSN, IEEE, CSA, GOST, BS) — **ზოგადი განცხადება**, კონკრეტული clause ნომრები არ არის.

## 12. Dimensional Drawing Support

- **Status: Supporting Reference (High Confidence — ვიზუალურად დადასტურებული)**
- გვ. 22-67 იძლევა dimensional drawing-ებს TPU, TPE, TTR, BB, KOKS, KOFA, IHBF, TJC, TJE, UDZ, TJCN, TJP, TDC, TDP, KGUG, KGUGI, TJMC, TDMC ტიპებისთვის — წონა, creepage distance, drawing номер-ების ჩათვლით.

## 13. Relation to ABB TPU 7x CT Datasheet

- **Status: Supporting Reference (Manufacturer-Specific)**
- ეს მანუალი გვ. 3-ზე ცხადად ადასტურებს, რომ ვალიდურია **TPU** ტიპისთვის — ავსებს [`abb_tpu_7x_indoor_supporting_current_transformers_datasheet_evidence_map.md`](abb_tpu_7x_indoor_supporting_current_transformers_datasheet_evidence_map.md)-ს terminal marking-ისა და secondary grounding-ის ინტერპრეტაციის კუთხით.
- **⚠ ეს evidence map ამ task-ის ფარგლებში არ არის განახლებული** — cross-reference მხოლოდ აქ, ამ დოკუმენტის მხრიდან, არის დაფიქსირებული.

## 14. Relation to ABB TJC 6 VT Datasheet

- **Status: Supporting Reference (Manufacturer-Specific)**
- ეს მანუალი გვ. 3-ზე ცხადად ადასტურებს, რომ ვალიდურია **TJC** ტიპისთვის — პირდაპირ ავსებს [`abb_tjc_6_indoor_voltage_transformers_datasheet_evidence_map.md`](abb_tjc_6_indoor_voltage_transformers_datasheet_evidence_map.md) §16-ის ორივე ხარვეზს (ferroresonance, დეტალური open-delta grounding).
- **⚠ ეს evidence map ამ task-ის ფარგლებში არ არის განახლებული** — cross-reference მხოლოდ აქ, ამ დოკუმენტის მხრიდან, არის დაფიქსირებული.

## 15. Supplier/Project Documents That Should Be Requested

თუ ferroresonance mitigation, დეტალური open-delta grounding, ან project-specific terminal marking/wiring საკითხი გახდება აქტუალური:

- project-specific CT/VT datasheet — ზუსტი ratio/accuracy/burden/overvoltage factor;
- project wiring/terminal diagram — SCADA/relay/metering/grounding schematic-ის დასადასტურებლად;
- type/routine test report — offered unit-ისთვის;
- თუ ferroresonance mitigation მოწყობილობა (VT Guard Pro/Pro-D ან damping resistor) გამოიყენება — ცალკე supplier datasheet ამ მოწყობილობისთვისვე (per manual: "please follow the latest Instructions for installation, use and maintenance for the VT Guard Pro / VT Guard Pro-D, document 1VLM000657").

## 16. What Must NOT Be Concluded From This Manual Alone

- **არ შეიძლება** დავასკვნათ, რომ project-ის კონკრეტული CT/VT-ს აქვს ესა თუ ის ratio/accuracy class/burden — ეს არის ზოგადი product-line მანუალი.
- **არ შეიძლება** დავასკვნათ, რომ project-ის actual wiring/terminal diagram შეესაბამება Appendix 2-ის ტიპურ მაგალითს — project-specific schematic მაინც საჭიროა.
- **არ შეიძლება** დავასკვნათ, რომ ferroresonance-ის რისკი project-ში მართულია მხოლოდ იმის გამო, რომ მანუალი აღწერს mitigation-ის მეთოდებს — project-specific ქსელის ტიპი (isolated/compensated/solidly earthed) და actual VT-ის კონფიგურაცია ცალკე უნდა შემოწმდეს.
- **არ შეიძლება** ეს მანუალი გამოყენებულ იქნას, როგორც IEC/GOST mandatory compliance-ის დამტკიცება.
- **Engineer Review Required** მიენიჭება ნებისმიერ შემთხვევას, სადაც ეს მანუალი გამოიყენება, როგორც ერთადერთი წყარო რაიმე ტექნიკური დასკვნისთვის რეალურ პროექტში.

---

## Missing / Insufficient Information — Acquisition Instruction

**რა აკლია:** (ა) project-specific CT/VT-ის ზუსტი მონაცემები; (ბ) project wiring/terminal diagram; (გ) type/routine test evidence კონკრეტული offered unit-ისთვის.

**რატომ არის საჭირო:** ეს მანუალი product-line-ის ზოგადი installation/O&M reference-ია — რეალური project review-სთვის საჭიროა კონკრეტული unit-ის მონაცემები, project-ის საკუთარი wiring/terminal diagram (relay/SCADA/metering/grounding დასადასტურებლად), და test evidence.

**რა ტიპის დოკუმენტს შეუძლია მოწოდება:** Supplier-specific CT/VT datasheet; project wiring/terminal diagram; type/routine test report.

**სად მოძებნოს:** მიმწოდებლის ტექნიკური კომუნიკაცია; პროექტის დიზაინის დოკუმენტაცია.

**რა უნდა აიტვირთოს:** სრული supplier CT/VT datasheet; project-ის wiring/terminal diagram; type/routine test report.

**სად ატვირთოს:** `inputs/datasheets/` (datasheet), `inputs/drawings/` (wiring diagram).

**რეკომენდირებული filename:** `[supplier]_ct_vt_datasheet_[project].pdf`, `[project]_ct_vt_wiring_diagram.pdf`.

**სტატუსი მანამდე:** **Supplier Evidence Required** (project-specific მონაცემები) / **Project Drawing Required** (wiring/terminal diagram).

**⚠ მინიმალური დამატებითი წესები (task item 8):**
- ეს მანუალი **ვერ ადასტურებს** project-ის ზუსტ CT/VT rating-ს.
- რეალური project review-სთვის **მაინც საჭიროა** supplier-specific CT/VT datasheet-ები.
- Relay, SCADA, metering და grounding-ის დასადასტურებლად **საჭიროა** project-ის wiring/terminal diagram-ი.
- ზუსტი offered CT/VT unit-ისთვის **საჭიროა** type/routine test evidence.
- ეს მანუალი ეხმარება terminal marking-ის, grounding-ის, open-delta/residual winding-ის, fuse-ის და ferroresonance-ის ინტერპრეტაციას, მაგრამ **ვერ ჩაანაცვლებს** project-specific evidence-ს.

---

## Recommended Next Action

თუ მომავალში საჭირო გახდება, ცალკე task-ის ფარგლებში, [`abb_tpu_7x_indoor_supporting_current_transformers_datasheet_evidence_map.md`](abb_tpu_7x_indoor_supporting_current_transformers_datasheet_evidence_map.md) და [`abb_tjc_6_indoor_voltage_transformers_datasheet_evidence_map.md`](abb_tjc_6_indoor_voltage_transformers_datasheet_evidence_map.md) შეიძლება განახლდეს ამ მანუალის cross-reference-ის დასამატებლად (განსაკუთრებით TJC 6-ის ferroresonance/open-delta ხარვეზის დახურვისთვის) — **ეს ამ task-ის ფარგლებში არ განხორციელებულა**, per მომხმარებლის ცხადი ინსტრუქცია.
