Document title: Source Note — ABB Current and Voltage Instrument Transformers Installation/Use/Maintenance Manual
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# წყაროს ბარათი (Source Note) — ABB Current and Voltage Instrument Transformers Installation/Use/Maintenance Manual

წარმოდგენილი ბარათი მომზადებულია [`source_note_template.md`](source_note_template.md)-ის სტრუქტურით და ეფუძნება [`materials_inventory.md`](../materials_inventory.md)-ის პუნქტ 21-ს.

**⚠ მნიშვნელოვანი შესავალი შენიშვნა:** ეს დოკუმენტი არის **მწარმოებლის (ABB) supporting installation/use/maintenance manual**, **არა** product-line datasheet და **არა** IEC/GOST/კომპანიის mandatory სტანდარტი. ის შეიძლება გამოყენებულ იქნას მხოლოდ როგორც **დამხმარე reference** — terminal marking-ის, grounding-ის, ferroresonance-ისა და wiring-ის ინტერპრეტაციის დასახმარებლად, არასოდეს როგორც project-specific evidence-ის ან mandatory compliance-ის დამტკიცების საფუძველი (per `CLAUDE.md` §3.2, §3.3, §18.1).

---

## Document Title

*Current and Voltage Instrument Transformers — Instruction for Installation, Use and Maintenance* ("MEDIUM VOLTAGE PRODUCTS").

## Standard Number

N/A — მწარმოებლის supporting manual, არა სტანდარტი.

## Manufacturer / Issuing Entity

ABB s.r.o., ELDS Brno, Czech Republic — **იგივე საწარმოო ერთეული**, რაც [`abb_tpu_7x_indoor_supporting_current_transformers_datasheet_source_note.md`](abb_tpu_7x_indoor_supporting_current_transformers_datasheet_source_note.md) და [`abb_tjc_6_indoor_voltage_transformers_datasheet_source_note.md`](abb_tjc_6_indoor_voltage_transformers_datasheet_source_note.md)-ისთვის (document code family `1VLMxxxxxx`).

## CT/VT Product Families Covered

- **CT types:** TPU, TPE, TTR, BB, BBO, KOKS, KOFA, IHBF — **მოიცავს TPU 7x-ს** (item 18).
- **VT types:** TJE, TJCL, TJC, TJCH, TDC, TJP, TJPH, TDP, KGUG, KGUGI, TJMC, TJMP, TDMC, TJCN, TJPN, UDZ — **მოიცავს TJC-ს**, TJC 6-ის ოჯახს (item 20).

## Document Type

Manufacturer supporting installation/use/maintenance manual — CT/VT-ის ინსტალაცია, terminal marking, grounding, ferroresonance damping, wiring, dimensional drawings.

## Page Count

**68 გვერდი** — დადასტურებულია ორმაგად: `pdftotext` form-feed დათვლით და **სრული გვერდობრივი ვიზუალური წაკითხვით**.

## Document ID / Revision / Date

`1VLM000610 Rev.35, en 2026.02.26` — ვიზუალურად დადასტურებული back cover-ზე.

## Organization / Source

ABB s.r.o. — ოფიციალური საკონტაქტო ინფორმაცია დადასტურებულია back cover-ზე (ELDS Brno, Videnska 117, 619 00 Brno, Czech Republic).

## Language

ინგლისური.

## Raw Private File Reference

`knowledge/materials_inbox/abb_current_voltage_instrument_transformers_installation_use_maintenance_manual.pdf` (~10.75 MB) — ფაილი **არ არის** გადატანილი, გადარქმეული ან commit-ული; რჩება მხოლოდ ლოკალურ workspace-ში, `.gitignore`-ით დაცული, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

## Copyright Note

დოკუმენტის სრული ტექსტი/ცხრილები/დიაგრამები **არ არის** კოპირებული ამ ბარათში. მოცემულია მხოლოდ საკუთარი სიტყვებით გადმოცემული, პარაფრაზირებული შეჯამება, გვერდის/სექციის მითითებებით.

## Extraction Method (მნიშვნელოვანი)

ფაილის ზომა (~10.75 MB) 20 MB vision-tool ლიმიტს ქვემოთაა. **მთელი 68-გვერდიანი დოკუმენტი წარმატებით წაიკითხა ვიზუალურად** (page-image confirmation) — ყველა მოთხოვნილი სექცია High Confidence-ითაა დადასტურებული. ტექსტ-ექსტრაქციის ჩვეული ნაწილობრივი დეფექტი (რომელიც TPU CT-სა და TJC 6-ში ფიქსირდებოდა) აქ არარელევანტურია, რადგან ვიზუალურმა წაკითხვამ ის მთლიანად დაფარა.

## Use Status

- [x] Preliminary
- [ ] Approved
- [ ] Legacy
- [ ] Current — unknown

**შენიშვნა:** სტატუსი — **Preliminary**. ვინაობა, სტრუქტურა და ამ დოკუმენტში წარმოდგენილი ტექნიკური content — **High Confidence** (სრული ვიზუალური დადასტურებით). Currency — Rev.35, 2026-02-26, ახალი, currency-პრობლემა არ დაფიქსირებულა.

## Relevance to Phase 1 CT/VT Review

ეს მანუალი წარმოადგენს **პირველ CT+VT-ერთობლივ supporting installation/O&M reference-ს** Knowledge Base-ში — რელევანტურია [`iec_61869_2_current_transformer_checklist.md`](../checklists/iec_61869_2_current_transformer_checklist.md) და [`iec_60255_protection_relay_checklist.md`](../checklists/iec_60255_protection_relay_checklist.md) Items 19-20-თან (CT/VT input compatibility), ასევე უკვე დამუშავებულ TPU 7x CT (item 18) და TJC 6 VT (item 20) evidence map-ებთან.

## Useful Technical Areas (ყველა ვიზუალურად დადასტურებული)

- Service conditions (ambient temperature, altitude);
- Technical details / rating plate ინტერპრეტაცია — CT და VT ცალ-ცალკე მაგალითებით;
- Primary/secondary connection, mounting, torque ცხრილები;
- CT/VT secondary terminal marking — IEC და IEEE ორივე კონვენციით, TJMC plug-in connection-ის ჩათვლით;
- Secondary grounding rules (8 უსაფრთხოების წესი);
- **Open-delta/residual winding grounding** — ცხადი წესი: dn ტერმინალი დამიწებული მხოლოდ ერთ-ერთ სამი VT-დან;
- Capacitive voltage indicator (divider) — C1/C2 ცხრილი;
- Fuses — rated current/voltage/length ცხრილი, external fuse holder;
- Routine test report შემადგენლობა;
- Normative references — სრული IEC/AS/ČSN/IEEE/GOST/BS სია;
- Wiring diagram მაგალითები (CT და VT);
- **Ferroresonance damping** (Appendix 3) — ტექნიკური ფონი, VT Guard Pro/Pro-D, damping resistor ცხრილი, over-voltage factor რეკომენდაცია;
- Transformer handling (4 მეთოდი);
- Dimensional drawings — მთელი პროდუქტ-ხაზისთვის.

## Limitations

- ეს არის **product-line-ის ზოგადი მანუალი** — არ ადასტურებს project-specific CT/VT unit-ის ზუსტ rating-ს.
- Standard references ზოგადი სიაა, კონკრეტული clause/edition ნომრები არ არის დეტალურად მითითებული ყველა შემთხვევაში.
- Wiring diagram-ები არის **ტიპური მაგალითები**, არა project-specific schematic.

## ⚠ Mandatory-Status Warning

ეს მანუალი **არასოდეს** არ უნდა ჩაითვალოს mandatory სტანდარტად ან product-line-ის ერთადერთ დასაშვებ ტიპად. ის ეხმარება ნებისმიერი CT/VT-ის (არა მხოლოდ ABB-ის) ტერმინალის მარკირების/grounding-ის/ferroresonance-ის ზოგადი პრინციპების გაგებას, მაგრამ non-ABB CT/VT არ უნდა უარვყოთ მხოლოდ იმის გამო, რომ ეს კონკრეტული მანუალი მას არ ეხება.

## ⚠ Datasheet/Evidence Warning

ეს მანუალი **არ ცვლის**:
- supplier-specific CT/VT datasheet-ს (ზუსტი ratio/accuracy/burden-ისთვის);
- project wiring/terminal diagram-ს (project-specific SCADA/relay/metering/grounding schematic-ისთვის);
- type/routine test evidence-ს კონკრეტული offered unit-ისთვის.

## Citation Guidance

```text
[Source: ABB Current and Voltage Instrument Transformers Installation/Use/Maintenance Manual, 1VLM000610 Rev.35 (2026-02-26), p. 16 — Appendix 3, Ferroresonance Damping]
[Source: ABB CT/VT Installation Manual, p. 10 — Appendix 1, Open-Delta Terminal Marking, visually confirmed]
```

## Copyright-Safe Usage Rule

Per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md): raw PDF რჩება მხოლოდ `materials_inbox/`-ში, git-ignored; არცერთი გრძელი ტექსტი/ცხრილი/დიაგრამა არ კოპირდება ამ ბარათში; მხოლოდ პარაფრაზირებული, საკუთარი სიტყვებით შეჯამებული ინფორმაცია გამოიყენება.

## Status / Confidence

**Preliminary.** ვინაობა, სტრუქტურა, ამ დოკუმენტში წარმოდგენილი ტექნიკური content — **High Confidence** (სრული ვიზუალური დადასტურებით). Real project-ის კონკრეტული CT/VT unit-ის კონფიგურაცია, wiring და test evidence — **Supplier Evidence Required / Project Drawing Required**, ყოველთვის.

## Recommended Next Action

1. გამოიყენება, როგორც დამხმარე reference terminal marking/grounding/ferroresonance/wiring საკითხების ინტერპრეტაციისთვის.
2. ეს source note ემსახურება, როგორც [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md`](../technical_notes/abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_evidence_map.md) და [`abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_location_map.md`](../technical_notes/abb_current_voltage_instrument_transformers_installation_use_maintenance_manual_location_map.md)-ის საფუძველი — **supporting reference only, not a compliance authority**.
3. არსებული TPU 7x CT და TJC 6 VT evidence map-ები ამ task-ის ფარგლებში **არ არის განახლებული** — მომავალში, ცალკე task-ის ფარგლებში, შესაძლებელია მათი cross-reference განახლება ამ მანუალის მითითებით.
