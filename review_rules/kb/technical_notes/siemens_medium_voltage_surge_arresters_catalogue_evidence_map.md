Document title: Evidence Map — Siemens Medium-Voltage Surge Arresters Catalogue
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# Evidence Map — Siemens Medium-Voltage Surge Arresters Catalogue

**ეს დოკუმენტი არ არის checklist და არ არის mandatory requirement-ების სია.** ის ასახავს, თუ რა ტიპის supplier evidence შეიძლება შემოწმდეს ამ 94-გვერდიანი Siemens surge arrester catalogue-ის, როგორც **manufacturer reference**-ის, გამოყენებით — და, ყველაზე მნიშვნელოვანი, რა **არ შეიძლება** დამტკიცდეს მისი გამოყენებით. საფუძვლად გამოყენებულია [`siemens_medium_voltage_surge_arresters_catalogue_source_note.md`](../source_cards/siemens_medium_voltage_surge_arresters_catalogue_source_note.md).

**Status ენა, გამოყენებული ქვემოთ:** Reference Match / Supplier Evidence Required / Project Calculation Required / Not Verified / Low Confidence / Manufacturer-Specific / Engineer Review Required.

---

## ⚠ Extraction Quality — წინაპირობა

ფაილი (~12.43 MB, 94 გვ.) სრულად წაკითხულია **ვიზუალურად** — ტექსტ-ექსტრაქციის ჩვეული ცხრილში-ჩართული რიცხვების ხარვეზი სრულად აღმოიფხვრა. **ყველა მონაცემი, რომელიც ამ დოკუმენტში არსებობს, High Confidence-ითაა.**

---

## 1. Surge Arrester Identity and Model/Type

- **Status: Reference Match**
- დადასტურებულია: მწარმოებელი — Siemens Energy Global GmbH & Co. KG; პროდუქტ-ხაზები — **3EK** (distribution class), **3EH4** (medium-voltage plug-in), **3EJ** (high energy discharge: EJ2/EJ3/EJ4/EJ0/EJ9), **3EP-G** (porcelain, generator/motor protection).
- **Manufacturer-Specific:** ეს Siemens-ის product-line-ის კლასიფიკაციაა — სხვა მწარმოებელს განსხვავებული ტიპის აღნიშვნა ექნება.

## 2. Application — Feeder/Cable/Transformer/Generator/Motor Protection

- **Status: Reference Match (High Confidence)**
- 3EK/3EH4/3EJ ზოგადი feeder/cable/transformer overvoltage protection-ისთვისაა; **3EP-G სპეციალურად generator/motor protection-ისთვისაა** დაპროექტებული (დაბალი residual voltage მოთხოვნა rotating machine-ის დაცვისთვის).

## 3. Rated Voltage Ur

- **Status: Reference Match (High Confidence)**
- Ur დიაპაზონი პროდუქტ-ხაზის მიხედვით: EK7 — 3.0-60 kV; EJ3 — 1.4-54 kV; EP-G — 3.0-51 kV.
- ცხადად მოიცავს 6-10 kV პროექტის scope-ს.

## 4. Continuous Operating Voltage Uc

- **Status: Reference Match (High Confidence)**
- Uc ცხრილები ცალკეული Ur მნიშვნელობისთვის — ტიპურად Ur-ის ~80%-ის ფარგლებში (MOV-ის სტანდარტული თანაფარდობა).

## 5. Nominal Discharge Current In

- **Status: Reference Match (High Confidence)**
- **5 kA** (EJ0), **10 kA** (EK/EJ2), **20 kA** (EJ3/EJ4, EP-G).
- **Engineer Review Required:** project-ის required discharge current class ცალკე უნდა განისაზღვროს ქსელის fault-level/lightning-exposure ანალიზით.

## 6. Residual Voltage / Protection Level

- **Status: Reference Match (High Confidence)**
- სრული ცხრილები discharge current-ის სხვადასხვა დონეზე (8/20µs 1-20kA, 30/60µs 125-500A) — თითოეული ტიპისთვის.
- **Project Calculation Required:** protection level-ის საკმარისობა დამოკიდებულია დაცული აპარატურის (ტრანსფორმატორი, ამომრთველი) BIL/insulation coordination-ზე — ეს catalogue მხოლოდ arrester-ის საკუთარ მონაცემებს იძლევა, არა insulation coordination-ის დასკვნას.

## 7. Energy Capability / Charge Transfer / Thermal Energy Rating

- **Status: Reference Match (High Confidence)**
- Energy class (IEEE C62.11, A-N კლასები, 3.0-30 kJ/kVMCOV, გვ. 12); charge transfer rating (Qrs); thermal charge transfer (Qth); thermal energy rating (Wth) — ცალკეული პროდუქტ-ხაზისთვის.
- Line-discharge/charge-transfer გამოთვლის ფორმულები (IEC 60099-5 და IEEE C62.22 მეთოდები, გვ. 11) — ზოგადი engineering guidance, არა project-specific გამოთვლა.

## 8. Line Discharge Class / Energy Class

- **Status: Reference Match (High Confidence) — Manufacturer-Specific ტერმინოლოგია**
- IEEE C62.11 energy class classification გამოყენებულია (A-N) — IEC-ის line discharge class (1-5) კატალოგში **პირდაპირ არ არის მითითებული ცალკე ცხრილად** — **Not Verified** IEC line-discharge-class ტერმინოლოგიით.

## 9. Rated Short-Circuit Current / Pressure Relief

- **Status: Reference Match (High Confidence)**
- Rated short-circuit current (Is): **20-300 kA** დიაპაზონი (EP-G-ის მაქსიმუმი) — pressure-relief/short-circuit withstand rating პროდუქტ-ხაზის მიხედვით.
- **Engineer Review Required — duration/rating basis:** ეს მნიშვნელობა უნდა შედარდეს project-ის cubicle/switchgear-ის short-circuit rating-თან, არა უბრალოდ ტოლობით.

## 10. Housing / Insulation / Creepage Distance

- **Status: Reference Match (High Confidence)**
- Creepage distance, lightning/power-frequency withstand voltage ცხრილები — housing-ის ტიპის (პოლიმერული, პორცელანის EP-G-ისთვის) მიხედვით.
- **Engineer Review Required:** project-ის pollution-level/environmental კატეგორია (IEC 60815) ცალკე უნდა შედარდეს creepage distance მოთხოვნასთან.

## 11. Installation / Mounting Arrangement

- **Status: Reference Match (High Confidence — ვიზუალურად დადასტურებული)**
- Mounting options: transformer bracket, cross-arm bracket, insulated/grounded mounting plates — სრული dimensional drawing-ებით (გვ. 44-46 EK-ისთვის, გვ. 85-87 EJ-ისთვის).
- **Project Drawing Required:** project-specific mounting/wiring layout ცალკე უნდა დადასტურდეს.

## 12. Environmental / Application Limits

- **Status: Reference Match (High Confidence, ზოგადი)**
- Indoor/outdoor ვარიანტები product-line-ის მიხედვით; ტემპერატურის დიაპაზონი და pollution-level-ის ზოგადი მითითება.
- **Low Confidence:** ზუსტი ambient temperature/altitude ლიმიტები ცალკეული ტიპისთვის მოითხოვს დამატებით შემოწმებას project-specific climate-ის მიხედვით.

## 13. Applicable Standards, Especially IEC 60099-4

- **Status: Reference Match (High Confidence, ზოგადი) / Not Verified (ზუსტი edition)**
- დადასტურებულია: **IEC 60099-4** (surge arrester requirements), **IEC 60099-5** (selection/application guide), **IEC 60099-8** (EGLA), **IEC 60099-9** (HVDC), **IEEE C62.11**, **IEEE C62.22**, **GB 11032** (გვ. 7).
- **Not Verified:** კონკრეტული IEC 60099-4 edition/amendment ნომერი catalogue-ში ცალკე არ არის მითითებული.

## 14. Type Test / Routine Test References

- **Status: Reference Match (High Confidence, ზოგადი პრინციპი) / Not Verified (ზუსტი report)**
- გვ. 7: type tests დამოუკიდებელ PEHLA-სერტიფიცირებულ ლაბორატორიებში; ყოველი ერთეულის routine test + routine test certificate; ISO 9001:2008/ISO 14002:2004/BS OHSAS 18001:2007 ხარისხის სისტემები.
- **Supplier Evidence Required:** კონკრეტული offered unit-ის type/routine test report ცალკე უნდა მოთხოვნილიყოს.

## 15. Selection Guide / Ordering Code

- **Status: Reference Match (High Confidence — ვიზუალურად დადასტურებული)**
- 5-ნაბიჯიანი "How to select a suitable surge arrester" პროცედურა (გვ. 9-14): Uc/Ur → In → protective level → energy class → protective zone.
- "How to order" სექცია ყველა პროდუქტ-ხაზისთვის, order-code-ის სრული breakdown-ით.

## 16. Surge Arrester to Cubicle/Feeder Compatibility Evidence Required

- **Status: Engineer Review Required (ცხადი cross-check საჭირო)**
- Arrester-ის Ur/Uc უნდა შეესაბამებოდეს project-ის ქსელის ნომინალურ ძაბვასა და neutral-ის ტიპს (isolated/compensated/solidly earthed); mounting arrangement უნდა შეესაბამებოდეს cubicle/feeder cable termination-ის layout-ს.
- **Manufacturer-Specific:** ეს Siemens-ის product-line-ის ზოგადი მონაცემია — project-specific cubicle/feeder-ის cross-check ცალკე უნდა გაკეთდეს.

## 17. Insulation Coordination Evidence Required

- **Status: Project Calculation Required / Engineer Review Required**
- Arrester-ის residual voltage/protection level უნდა იყოს საკმარისად დაბალი დაცული აპარატურის (ტრანსფორმატორი, CT/VT, ამომრთველი) rated withstand voltage-თან (BIL) შედარებით, საკმარისი coordination margin-ით.
- **⚠ ეს catalogue მხოლოდ arrester-ის საკუთარ მონაცემებს იძლევა** — სრული insulation coordination study (IEC 60071-2 მეთოდოლოგიით) ცალკე inженерული ამოცანაა, არა catalogue-matching.

## 18. Supplier Documents That Should Be Requested

თუ მომავალში Siemens-ზე დაფუძნებული offer მოვა (ან ნებისმიერი სხვა surge arrester მწარმოებელი):

- project-specific surge arrester datasheet — ზუსტი offered type, Ur, Uc, In, residual voltage/protection level, energy capability, short-circuit/pressure relief rating, creepage distance, housing type;
- installation/mounting arrangement drawing;
- applicable standard-ის ცხადი მითითება (IEC 60099-4 edition);
- type test/routine test report/certificate;
- insulation coordination study ან calculation (თუ პროექტში მოთხოვნილია).

## 19. What Must NOT Be Concluded From This Catalogue Alone

- **არ შეიძლება** დავასკვნათ, რომ project-ის კონკრეტულ surge arrester-ს აქვს ესა თუ ის Ur/Uc/In/residual voltage — ეს ცხრილები **product-line-ის ხელმისაწვდომი ვარიანტებია**, არა project-ის offer-ის მონაცემი.
- **არ შეიძლება** დავასკვნათ, რომ insulation coordination დაცულია მხოლოდ იმის გამო, რომ catalogue-ის residual voltage რიცხვი "ჩანს დაბალი" — საჭიროა formal calculation/engineer review.
- **არ შეიძლება** ეს catalogue გამოყენებულ იქნას, როგორც IEC 60099-4 mandatory compliance-ის დამტკიცება — ეს არის მწარმოებლის საკუთარი მასალა.
- **არ შეიძლება** დავასკვნათ, რომ Siemens არის mandatory surge arrester მწარმოებელი ან ტიპი — ნებისმიერი სხვა მწარმოებელი დასაშვებია, საკუთარი evidence-ით.
- **Engineer Review Required** მიენიჭება ნებისმიერ შემთხვევას, სადაც ეს catalogue გამოიყენება, როგორც ერთადერთი წყარო რაიმე ტექნიკური დასკვნისთვის რეალურ პროექტში.

---

## Missing / Insufficient Information — Acquisition Instruction

**რა აკლია:** (ა) project-specific surge arrester-ის ზუსტი მონაცემები (offered type, Ur, Uc, In, residual voltage/protection level, energy capability, short-circuit/pressure relief rating, creepage distance, housing type, installation arrangement); (ბ) applicable standard-ის ცხადი edition; (გ) type/routine test evidence; (დ) insulation coordination study/calculation.

**რატომ არის საჭირო:** ეს catalogue product-line reference-ია — რეალური project review-სთვის საჭიროა კონკრეტული offered unit-ის მონაცემები. Insulation coordination/arrester selection კრიტიკულია აპარატურის დაცვისთვის და მოითხოვს project calculation-ს, არა მხოლოდ catalogue-matching-ს.

**რა ტიპის დოკუმენტს შეუძლია მოწოდება:** Supplier-specific surge arrester datasheet/catalogue; type/routine test report; insulation coordination study.

**სად მოძებნოს:** მიმწოდებლის ტექნიკური კომუნიკაცია; ან, თუ Siemens-ის offer-ია, Siemens-ის ოფიციალური library/Energy Shop.

**რა უნდა აიტვირთოს:** სრული supplier surge arrester datasheet ან order-confirmation.

**სად ატვირთოს:** `inputs/datasheets/`.

**რეკომენდირებული filename:** `[supplier]_surge_arrester_datasheet_[project].pdf`.

**სტატუსი მანამდე:** **Supplier Evidence Required** (project-specific მონაცემები) / **Project Calculation Required** (insulation coordination).

**⚠ მნიშვნელოვანი წესი:** თუ მიმწოდებელი შესთავაზებს სხვა surge arrester ტიპს/მწარმოებელს, **არ უნდა უარვყოთ** მხოლოდ იმის გამო, რომ Siemens არ არის — მოთხოვნილ იქნას ამ კონკრეტული arrester-ის საკუთარი datasheet/catalogue/type-test evidence.

---

## Recommended Next Action

თუ project-ში surge arrester selection ან insulation coordination review გახდება საჭირო, მოთხოვნილ იქნას project-specific supplier surge arrester datasheet და, საჭიროების შემთხვევაში, ცალკე insulation coordination calculation — ეს Evidence Map რჩება **product-line-ის სტრუქტურული reference**, არა project-specific ან calculation-level evidence.
