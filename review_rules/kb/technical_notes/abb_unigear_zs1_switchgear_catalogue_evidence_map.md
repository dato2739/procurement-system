Document title: Evidence Map — ABB UniGear ZS1 Technical Catalogue
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# Evidence Map — ABB UniGear ZS1 Technical Catalogue

**ეს დოკუმენტი არ არის checklist და არ არის mandatory requirement-ების სია.** ის ასახავს, თუ რა ტიპის supplier evidence შეიძლება შემოწმდეს ამ 103-გვერდიანი კატალოგის, როგორც **manufacturer reference**-ის, გამოყენებით (დამუშავებული **მხოლოდ ტექსტ-ექსტრაქციით**) — და, ყველაზე მნიშვნელოვანი, რა **არ შეიძლება** დამტკიცდეს მისი გამოყენებით. საფუძვლად გამოყენებულია [`abb_unigear_zs1_switchgear_catalogue_source_note.md`](../source_cards/abb_unigear_zs1_switchgear_catalogue_source_note.md).

**Status ენა, გამოყენებული ქვემოთ:** Reference Match / Supplier Evidence Required / Not Verified / Manufacturer-Specific / Engineer Review Required / Low Confidence (ცხრილის ექსტრაქცია დაბუნდოვანებულია).

---

## ⚠ Extraction Method — მნიშვნელოვანი წინაპირობა

დამუშავდა **სრული 103-გვერდიანი კატალოგი**, **მხოლოდ ტექსტ-ექსტრაქციით** (`pdftotext`, სამიზნე გვერდების + სრული დოკუმენტის pass). ნარატიული ტექსტი საიმედოდ იკითხება; **მკვრივი, მრავალსვეტიანი რიცხვითი ცხრილები ვერ დამოწმდა ვიზუალურად** (95 MB ფაილი > 20 MB vision-tool ლიმიტი, `pdftoppm` არ არის დაინსტალირებული). შესაბამისად, ქვემოთ ცალ-ცალკეა გამიჯნული **ნარატიული ფაქტები (Medium-High Confidence)** და **რიცხვითი ცხრილის მონაცემები (Low Confidence)**.

---

## 1. Product Identity and Configuration

- **Status: Reference Match**
- დადასტურებულია: მწარმოებელი — ABB; პროდუქტი — UniGear ZS1; დოკუმენტის ტიპი — სრული Technical Catalogue (103 გვ.); ზოგადი კატეგორია — "Medium-voltage air-insulated switchgear up to 24 kV"; rated voltage კლასები — 7.2/12/17.5/24 kV; up to 4000 A, up to 63 kA.
- დამატებით დადასტურდა: LSC classification concept (LSC2B, PM ყველაზე გავრცელებული ვარიანტი პანელისთვის); "700 000+ panels installed in 100+ countries."

## 2. Rated Voltage / Insulation Level

- **Status: Reference Match (ნარატიული დონე) / Low Confidence (ცხრილის ზუსტი მნიშვნელობები)**
- ნარატიულად დადასტურებულია rated voltage კლასები: 7.2 / 12 / 17.5 / 24 kV.
- Electrical characteristics ცხრილი (~გვ. 12) შეიცავს Rated insulation voltage, Rated power frequency withstand voltage, Rated lightning impulse withstand voltage სვეტებს თითოეული voltage-კლასისთვის — **მაგრამ სვეტების ზუსტი row/column მიბმა plain-text extraction-ში ბუნდოვანია**. **Low Confidence** — კონკრეტული voltage-კლასის ზუსტი insulation-level მნიშვნელობა ვიზუალურად დასადასტურებელია.
- **Engineer Review Required:** 12 kV კლასის შესაბამისობა 10 kV პროექტის ნომინალურ სისტემასთან — Assumption-ზე დაფუძნებული, არა კატალოგში ცხადად ნაპოვნი ფაქტი.

## 3. Rated Current

- **Status: Reference Match (ნარატიული) / Low Confidence (ცხრილი)**
- ნარატიულად: up to 4000 A (busbar/circuit-breaker მაქსიმალური კლასი, 24 kV ვერსიისთვის up to 3150 A).
- Technical data ცხრილში (dimensional/rated-current) კონკრეტული feeder-ტიპის (IF/IFD/BT/R/RM) rated current მნიშვნელობები **ვერ დამოწმდა ცხადად** column misalignment-ის გამო — **Low Confidence**.
- **Supplier Evidence Required:** კონკრეტული rated current-ის დამოწმება საჭიროა მიმწოდებლის project-specific datasheet-იდან.

## 4. Short-Time Withstand / Peak Withstand

- **Status: Reference Match (ნარატიული) / Low Confidence (ცხრილი)**
- ნარატიულად: up to 63 kA (12/17.5 kV კლასი), up to 31.5 kA (24 kV კლასი) მოხსენიებულია ზოგად characteristic-ების სიაში.
- Electrical characteristics ცხრილში კონკრეტული "Rated short time withstand current [kA/3s]" და "Peak current [kA]" სვეტების ზუსტი მიბმა თითოეულ voltage-კლასთან — **Low Confidence**.
- Type-test პროგრამის სია ნარატიულად ადასტურებს, რომ "Short-time and peak withstand current" ტესტი შესრულებულია IEC type-test-ის ფარგლებში — **Reference Match** ტესტის არსებობაზე, **Low Confidence** ზუსტ kA-მნიშვნელობებზე.

## 5. Internal Arc / IAC Information

- **Status: Reference Match (High Confidence — ნარატიული)**
- დადასტურებულია: **IAC AFLR** კლასიფიკაცია (passive, constructional containment — 1 წამი, up to 50 kA per ნარატიული description).
- **დამატებით მნიშვნელოვანი აღმოჩენა:** კატალოგი ცალკე აღწერს **UFES (Ultra-Fast Earthing Switch)**-ს, როგორც **აქტიურ (active) arc protection device**-ს (electronic detection + <4ms tripping) — ეს **ცხადად გამიჯნულია** პასიური IAC containment-ისგან. ეს **პირდაპირ ადასტურებს** სისტემის უკვე დამკვიდრებულ IAC-vs-active-arc-protection განსხვავებას (per [`iec_60255_protection_relay_checklist.md`](../checklists/iec_60255_protection_relay_checklist.md) Item 21-ის ლოგიკა).
- **Manufacturer-Specific:** UFES არის ABB-ის საკუთარი, brand-სპეციფიკური active-protection პროდუქტი — ტერმინოლოგია ("UFES") არ არის გენერიკული IEC ცნება.

## 6. VCB / Switching Device Information

- **Status: Reference Match (High Confidence — ნარატიული)**
- დადასტურებულია სამი VCB ვარიანტი: **VD4** (მექანიკური stored-energy operating mechanism), **VM1** (მაგნიტური actuator ვარიანტი), **VD4G** (გენერატორის კომუტაციისთვის სპეციალიზებული ვარიანტი, up to 63 kA system-fed faults).
- **ConVac** vacuum contactor — AC4 კატეგორია per IEC 62271-106, ხელმისაწვდომია ფიუზებით/ფიუზების გარეშე, 7.2/12 kV ვარიანტები.
- **Switch-disconnector** სექცია არსებობს, ნარატიულად ლოკალიზებული.
- Standards cross-reference ნარატიულად დადასტურებულია: **IEC 62271-100** (circuit-breakers), **IEC 62271-106** (contactors), **IEC 62271-103** (switch-disconnectors) — ეს **პირდაპირ ემთხვევა** არსებული checklist-ების საფუძველს.

## 7. CT/VT Compartment or Instrument Transformer Interfaces

- **Status: Reference Match (High Confidence — ნარატიული)**
- დადასტურებულია: block-type CT (**TPU** სერია), ring-core CT, voltage transformers (**TJC/TDC/TJP** სერია) — ყველა epoxy resin-insulated, **IEC 61869-1/IEC 61869-2** (CT) და **IEC 61869-1/IEC 61869-3** (VT) შესაბამისობის ცხადი განცხადებით.
- **მნიშვნელოვანი Manufacturer-Specific აღმოჩენა:** ABB ასევე გვთავაზობს **current/voltage sensor ტექნოლოგიას** (Rogowski coil-based, non-ferromagnetic core) — ეს **განსხვავებული ტექნოლოგიური პარადიგმაა** ჩვეულებრივი ratio-based CT/VT-სგან. **Engineer Review Required:** თუ მიმწოდებელი "sensor"-ტიპის გადაწყვეტას შესთავაზებს, [`iec_61869_2_current_transformer_checklist.md`](../checklists/iec_61869_2_current_transformer_checklist.md)-ის ratio/accuracy-class-ზე დაფუძნებული item-ები **პირდაპირ ვერ გამოიყენება** — საჭირო იქნება ცალკე ტექნიკური შეფასება.

## 8. Earthing Switch / Interlocking / Safety Logic

- **Status: Reference Match (High Confidence — ნარატიული)**
- დადასტურებულია: earthing switch-ს აქვს short-circuit making capacity; ჩვეულებრივ **interlocked**, რომ არ ამოქმედდეს live circuit-ზე.
- **მანდატორული უსაფრთხოების ინტერლოკები [1-5]** ცხადადაა მოხსენიებული, ცხრილის სახით (ცხრილის დეტალური content ვიზუალურად დაუდასტურებელია, მაგრამ არსებობის ფაქტი — Reference Match).
- **Locking magnets** — ავტომატური interlocking logic CB racking-in/out-სა და earthing switch-ს შორის, active-logic პრინციპით (auxiliary voltage-ის არარსებობისას სისტემა უსაფრთხო მდგომარეობაში რჩება).
- ეს პირდაპირ შეესაბამება [`iec_62271_102_disconnector_earthing_switch_checklist.md`](../checklists/iec_62271_102_disconnector_earthing_switch_checklist.md)-ის core-safety item-ებს (interlocking existence, earthing switch making capacity).

## 9. Cable Compartment / Busbar / Panel Arrangement

- **Status: Reference Match (High Confidence — ნარატიული)**
- დადასტურებულია: სამი power compartment-იანი სტრუქტურა (circuit-breaker, busbars, cables) + low-voltage compartment; busbars — flat/D-shaped cross-section (rated-current-ზე დამოკიდებული), 17.5/24 kV-სთვის insulated shrink-on sleeves-ით; cable compartment — earthing switch-ის ინტეგრაციის შესაძლებლობით; gas exhaust duct სისტემა.
- Single-line diagram სექცია არსებობს, **მხოლოდ structural/label-დონეზე ლოკალიზებული** — თავად დიაგრამის გრაფიკული content **არ არის** ვიზუალურად დამოწმებული (Not Verified იმ დონეზე, რაც სცილდება ტექსტურ label-ებს).

## 10. Auxiliary Circuits / Control / Protection Relay Interface

- **Status: Manufacturer-Specific / Not Verified (დეტალური)**
- ერთი მოკლე ნარატიული მითითება ნაპოვნია: "Protection relay with IEC 61850" low-voltage compartment-ის კონტექსტში — მაგრამ **დეტალური relay I/O, trip matrix ან SCADA signal ინფორმაცია ამ catalogue-ში არ არის** (ეს კატალოგის scope-ს სცილდება — switchgear-level მიმოხილვაა, არა relay-specific დოკუმენტი).
- **Supplier Evidence Required:** [`iec_60255_protection_relay_checklist.md`](../checklists/iec_60255_protection_relay_checklist.md)-ის შესაბამისად, ცალკე relay datasheet საჭიროა.

## 11. Tests / Routine Checks / Documentation References

- **Status: Reference Match (High Confidence — ნარატიული)**
- სრული IEC type-test სია ნარატიულად დადასტურებულია: short-time/peak withstand current, temperature rise, internal arc capability, dielectric test, making/breaking capacity (CB/contactor), earthing switch making capacity, mechanical operations, IP protection degree.
- IEC routine factory test სია: visual inspection, mechanical sequence operations, cabling check, electrical sequence operations, power-frequency withstand voltage, circuit-resistance measurement, secondary insulation test.
- დამატებით: marine-application-სპეციფიკური სპეციალური ტესტები (high ambient temp +45°C, inclination, vibration) — შესაბამისობის სერტიფიცირება LR/DNV/RINA/BV/GL საზღვაო რეგისტრებთან.
- **Manufacturer-Specific:** ეს არის **ტესტების ჩამონათვალის დეკლარაცია**, არა კონკრეტული ტესტის ანგარიშის მტკიცებულება — project-specific type-test report ცალკეა საჭირო.

## 12. Supplier Documents That Should Be Requested

თუ მომავალში ABB UniGear ZS1-ზე დაფუძნებული offer მოვა:

- სრული, project-specific technical datasheet (ზუსტი voltage-კლასის rated current/short-time withstand/IAC class);
- VCB datasheet (VD4/VM1/VD4G-დან რომელი ვარიანტია შემოთავაზებული);
- CT/VT datasheet-ები (ან, sensor-ტექნოლოგიის შემთხვევაში, sensor-ის ცალკე ტექნიკური მონაცემები);
- protection relay datasheet + I/O list (IEC 61850-ის მოხსენიება მოითხოვს ცალკე დადასტურებას, კონკრეტული relay model-ისთვის);
- GA drawing + single-line diagram + terminal diagram;
- type-test report (მათ შორის internal arc/UFES-ის, თუ აპლიკირებადია);
- routine test report (project-specific unit-ისთვის);
- interlocking scheme description/drawing;
- O&M manual, spare parts list.

## 13. What Must NOT Be Concluded From This Catalogue Alone

- **არ შეიძლება** დავასკვნათ, რომ კონკრეტული rated voltage/current/short-time withstand მნიშვნელობა (ცხრილიდან) ზუსტია — ცხრილის extraction column-misaligned-ია, საჭიროა ვიზუალური დადასტურება ან project-specific datasheet.
- **არ შეიძლება** დავასკვნათ, რომ "10 kV" ცხადად მოხსენიებული rated class-ია — კატალოგი იყენებს 12 kV-ს, "10 kV"-თან შესაბამისობა Assumption-ია.
- **არ შეიძლება** დავასკვნათ, რომ ნებისმიერი UniGear ZS1 შეთავაზება ავტომატურად აკმაყოფილებს IAC/UFES/interlocking მოთხოვნებს — ეს ფუნქციები **ხელმისაწვდომია პროდუქტ-ხაზში**, მაგრამ კონკრეტული project-ის კონფიგურაცია (options/variants) ცალკეა დასადასტურებელი.
- **არ შეიძლება** ეს catalogue გამოყენებულ იქნას, როგორც IEC 62271-1/62271-100/62271-102/62271-103/62271-106/61869-1/61869-2/61869-3/60529 mandatory compliance-ის დამტკიცება — ეს არის მწარმოებლის საკუთარი განცხადება შესაბამისობაზე, არა დამოუკიდებელი type-test report ან სერტიფიკატი.
- **არ შეიძლება** ამ catalogue-ის საფუძველზე automated "Pass" სტატუსი მიენიჭოს რომელიმე checklist item-ს რეალურ პროექტში — საჭიროა კონკრეტული, project-specific supplier-submitted evidence.
- **Engineer Review Required** მიენიჭება ნებისმიერ შემთხვევას, სადაც ეს catalogue გამოიყენება, როგორც ერთადერთი წყარო რაიმე ტექნიკური დასკვნისთვის.

---

## Recommended Next Action

თუ ზუსტი რიცხვითი ცხრილების დამოწმება საჭირო გახდება, რეკომენდირებულია: (ა) project-specific supplier datasheet-ის მოთხოვნა კონკრეტული მნიშვნელობებისთვის, ან (ბ) ცხრილების ვიზუალური დამოწმება, როცა `pdftoppm`/poppler ან მცირე extracted-pages PDF გახდება ხელმისაწვდომი.
