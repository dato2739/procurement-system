Document title: Evidence Map — ABB REF615 Feeder Protection and Control Product Guide
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# Evidence Map — ABB REF615 Feeder Protection and Control Product Guide

**ეს დოკუმენტი არ არის checklist და არ არის mandatory requirement-ების სია.** ის ასახავს, თუ რა ტიპის supplier evidence შეიძლება შემოწმდეს ამ 88-გვერდიანი REF615 product guide-ის, როგორც **manufacturer reference**-ის, გამოყენებით — და, ყველაზე მნიშვნელოვანი, რა **არ შეიძლება** დამტკიცდეს მისი გამოყენებით. საფუძვლად გამოყენებულია [`abb_ref615_feeder_protection_product_guide_source_note.md`](../source_cards/abb_ref615_feeder_protection_product_guide_source_note.md).

**Status ენა, გამოყენებული ქვემოთ:** Reference Match / Supplier Evidence Required / Not Verified / Manufacturer-Specific / Low Confidence / Engineer Review Required.

---

## ⚠ Extraction Quality — წინაპირობა

ფაილი (~8.85 MB, 88 გვ.) სრულად წაკითხულია **ვიზუალურად** (page-image confirmation) — ყველა ცხრილი, terminal diagram და ordering key High Confidence-ითაა დადასტურებული. ერთადერთი შეზღუდვა — **edition currency Not Verified** (Revision L, 2012).

---

## 1. Relay Identity and Model/Version

- **Status: Reference Match**
- დადასტურებულია: მწარმოებელი — ABB; პროდუქტი — **REF615**; სერია — Relion 615; Product version 4.0; document code 1MRS756379 L, Rev. L, 2012-05-11.
- Ordering key (§23, გვ. 69-73) იძლევა 18-ციფრიან order-code-ს, საიდანაც კონკრეტული REF615 unit-ის ზუსტი კონფიგურაცია (standard configuration A-J, I/O options, communication module, protocol, language, front panel, options, power supply) იკითხება.

## 2. Feeder Protection Functions

- **Status: Reference Match (High Confidence)**
- სრული protection function-ების სია დადასტურებულია: non-directional/directional overcurrent, earth-fault (non-directional/directional/admittance/wattmetric/harmonics-based), transient/intermittent earth-fault, negative-sequence overcurrent, phase discontinuity, residual/positive/negative-sequence voltage protection, frequency protection, thermal overload, circuit breaker failure protection, inrush detection, **arc protection (ARCSARC)**, master trip.
- Standard configurations A-J განსაზღვრავენ, რომელი function-ები ხელმისაწვდომია კონკრეტული კონფიგურაციისთვის (Table 2, Supported functions matrix) — **Supplier Evidence Required**, კონკრეტული project-ისთვის შერჩეული standard configuration-ის დასადასტურებლად.

## 3. CT Input / Current Measurement Compatibility

- **Status: Reference Match (High Confidence) — cross-check საჭირო**
- დადასტურებული ზუსტი მონაცემები (Table 9, Table 10): phase-current inputs **1/5 A** ან **0.2/1 A** (sensitive earth-fault); rated frequency 50/60 Hz; thermal withstand 20A(continuous)/500A(1s) at 1/5A rating; dynamic withstand 1250A (half-wave); ასევე sensor-based CT ალტერნატივა (Rogowski-type, 75mV...2812.5mV rated secondary, standard configuration G-ისთვის).
- **Engineer Review Required / Supplier Evidence Required:** [`iec_61869_2_current_transformer_checklist.md`](../checklists/iec_61869_2_current_transformer_checklist.md) Item 6-თან (CT rated secondary current) ცხადი cross-check საჭიროა — REF615-ის 1A/5A input rating უნდა დაემთხვეს project-ის CT-ს rated secondary current-ს, per relay checklist Item 19-ის ლოგიკა.

## 4. VT Input / Voltage Measurement Compatibility

- **Status: Reference Match (High Confidence)**
- Voltage inputs: rated voltage **60-210 V AC**, phase-to-phase ან phase-to-earth; continuous withstand 240V AC, 10s withstand 360V AC (Table 9). Standard configurations E/F/H/J მოიცავენ ამ voltage input-ებს (Table 5), A-D — არა (მხოლოდ residual voltage ზოგიერთში).
- **Supplier Evidence Required:** კონკრეტული VT rated secondary voltage-ის cross-check project-ის VT datasheet-თან.

## 5. Binary Inputs / Binary Outputs

- **Status: Reference Match (High Confidence)**
- Binary inputs: rated voltage 24-250 V DC, threshold 18-176 V DC, reaction time 3ms (Table 11).
- I/O რაოდენობა standard configuration-ის მიხედვით ცვალებადია — **A: 3 BI/6 BO** მდე **E/F/H/J: 16 BI/10 BO**-მდე (Table 5, Table 4).
- Output relay ტიპები: Signal output (Table 12), Signal outputs + IRF (Table 13), **Double-pole power output relays with TCS function (Table 14)**, Single-pole power output relays (Table 15) — ყველა rated voltage 250V AC/DC.

## 6. Trip Output / Trip-Circuit Supervision

- **Status: Reference Match (High Confidence)**
- Trip-circuit supervision (TCS) — უწყვეტად აკონტროლებს trip circuit-ის ხელმისაწვდომობას (open/closed მდგომარეობაში), აღმოაჩენს control voltage-ის დაკარგვას (§12, გვ. 25).
- ზუსტი TCS მონაცემები (Table 14): control voltage range 20-250 V AC/DC, current drain ~1.5 mA, minimum voltage over TCS contact 20 V AC/DC (15-20V).
- **Manufacturer-Specific:** TCS ხელმისაწვდომია double-pole power output relay-ებზე — ეს კონკრეტული REF615-ის hardware feature-ია, არა გენერიკული.

## 7. Current Circuit Supervision

- **Status: Reference Match (High Confidence)**
- Current circuit supervision (CCRDIF) — აღმოაჩენს CT secondary circuit-ის fault-ს, ადარებს phase current-ების ჯამს reference current-თან (core-balance CT ან separate core). Operate time <30ms (Table 81), settings range: start value 0.05-0.20 x In, maximum operate current 1.00-5.00 x In (Table 82).

## 8. Disturbance Recorder / Event Log / Recorded Data

- **Status: Reference Match (High Confidence)**
- Disturbance recorder: up to 12 analog + 64 binary channels (§8, გვ. 25).
- Event log: 1024 events non-volatile storage (§9).
- Recorded data: 128 latest fault events, DFT/RMS/peak-to-peak measurement modes (§10).

## 9. Station Communication / IEC 61850 / Protocols

- **Status: Reference Match (High Confidence)**
- მხარდაჭერილი პროტოკოლები: **IEC 61850** (GOOSE-ის ჩათვლით), **IEC 60870-5-103**, **Modbus** (RTU/ASCII/TCP), **DNP3** (serial/TCP) — Table 6, §18.
- Self-healing Ethernet ring (RSTP), up to 30 IEDs per ring.
- **Manufacturer-Specific:** IEC 61850 Certificate Level A1 (KEMA) ცალკეა მოხსენიებული — ეს **product-line-ის სერტიფიკატია**, არა project-specific commissioning-ის მტკიცებულება.

## 10. Protection Settings / Setting Groups / Function Blocks

- **Status: Reference Match (High Confidence) — ზუსტი მნიშვნელობები**
- ყოველი protection function-ისთვის ცალკე settings-ცხრილი არსებობს (Tables 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68) — start value/current, time multiplier, operate delay time, operating curve type-ის ჩათვლით.
- **Low Confidence საკუთარი project-ის settings-ისთვის:** ეს ცხრილები აჩვენებენ IED-ის **range**-ს (მაგ. Start value 0.05...5.00 x In), არა კონკრეტული project-ის actual set value-ს — ეს ცალკეა supplier-ისგან/commissioning-ისგან მოსათხოვნი.

## 11. Terminal Diagrams and Wiring Reference

- **Status: Reference Match (High Confidence — ვიზუალურად დადასტურებული)**
- 5 სრული terminal diagram (Figures 22-26) — standard configurations A/B, C/D, E/F, G, H/J-სთვის, ცალკეული BI/BO/CT/VT ტერმინალის ნომრით (X100, X110, X120, X130, X13-X15).
- **Engineer Review Required:** ეს diagram-ები რეალური, project-specific wiring-ის საფუძველია, მაგრამ **კონკრეტული ინსტალაციისთვის** ცალკე ვერიფიკაცია საჭიროა (Drawing & Schematics Review Agent scope) — ეს არ არის ავტომატური "Pass" project-ის terminal diagram-ისთვის.

## 12. Ordering/Selection Code Limitations

- **Status: Manufacturer-Specific**
- 18-ციფრიანი ordering key (§23) განსაზღვრავს ზუსტ REF615 კონფიგურაციას — **სასარგებლოა** მხოლოდ, თუ project-ის offer-ი შეიცავს ამ ზუსტ order code-ს დასადასტურებლად.
- **Supplier Evidence Required:** კონკრეტული project-ის REF615 unit-ის order code უნდა მოეთხოვოს მიმწოდებელს ცალკე, ამ ცხრილთან შედარებისთვის.

## 13. Certificates / Approvals

- **Status: Reference Match**
- KEMA IEC 61850 Certificate Level A1 (№ 30920420-Consulting 09-1712); DNV Type Approval Certificate (№ E-11189) — მოხსენიებული §27-ში.
- **Manufacturer-Specific:** ეს product-line-ის სერტიფიკატებია — project-specific unit-ის ცალკე routine/type test report-ი მაინც საჭიროა (per `CLAUDE.md` §21).

## 14. Supplier Documents That Should Be Requested

თუ მომავალში ABB REF615-ზე დაფუძნებული offer მოვა:

- project-specific relay datasheet + ordering code-ის დადასტურება;
- I/O list (standard configuration + optional module-ების ჩათვლით);
- CT/VT rated secondary current/voltage-ის cross-check evidence;
- terminal diagram/wiring diagram project-ისთვის;
- protection settings/relay setting file (project-specific);
- communication protocol-ის დადასტურება (IEC 61850/Modbus/DNP3), თუ SCADA ინტეგრაცია საჭიროა;
- routine/type test report (project-specific unit);
- უახლესი official REF615 product guide/manual, თუ ეს 2012 წლის ვერსია მოძველებულია.

## 15. What Must NOT Be Concluded From This Product Guide Alone

- **არ შეიძლება** დავასკვნათ, რომ ეს არის REF615-ის **მიმდინარე, უახლესი** ტექნიკური დოკუმენტაცია — Revision L, 2012, currency **Not Verified**.
- **არ შეიძლება** დავასკვნათ, რომ კონკრეტული project-ის REF615 unit-ს აქვს ესა თუ ის function/I/O კონფიგურაცია — დამოკიდებულია არჩეულ standard configuration-ზე და order code-ზე, ცალკე დასადასტურებელი.
- **არ შეიძლება** ამ დოკუმენტის settings-ცხრილები (range) წარმოდგინდეს, როგორც project-ის actual relay settings — ეს მხოლოდ **დასაშვები დიაპაზონია**, არა commissioning-ის მონაცემი.
- **არ შეიძლება** ეს product guide გამოყენებულ იქნას, როგორც IEC 60255/61850 mandatory compliance-ის დამტკიცება — ეს არის მწარმოებლის საკუთარი მასალა, თუმცა KEMA/DNV სერტიფიცირება მოხსენიებულია.
- **Engineer Review Required** მიენიჭება ნებისმიერ შემთხვევას, სადაც ეს product guide გამოიყენება, როგორც ერთადერთი წყარო რაიმე ტექნიკური დასკვნისთვის რეალურ პროექტში.

---

## Missing / Insufficient Information — Acquisition Instruction

**რა აკლია:** REF615-ის **მიმდინარე (2026 წლის) official product guide/manual revision**.

**რატომ არის საჭირო:** ეს დოკუმენტი 2012 წლისაა (Revision L) — REF615-ს შესაძლოა ჰქონდეს ახალი firmware/hardware ვერსია, დამატებითი protection function ან შეცვლილი technical data 2012 წლის შემდეგ.

**რა ტიპის დოკუმენტს შეუძლია ამის მოწოდება:** უახლესი ABB REF615 Product Guide ან Technical Manual, ან project-specific supplier datasheet.

**სად უნდა მოძებნოს user-მა:** ABB-ის ოფიციალური library (`www.abb.com/substationautomation` ან `search.abb.com/library`) — REF615 product page.

**საძიებო ტერმინები:** "ABB REF615 product guide", "REF615 technical manual latest revision".

**რა უნდა აიტვირთოს:** სრული ან selected-page PDF უახლესი REF615 product guide-ისა, ან project-specific supplier relay datasheet.

**სად ატვირთოს:** `inputs/datasheets/` (project-specific supplier datasheet-ისთვის) ან `knowledge/materials_inbox/` (ახალი manufacturer reference-ისთვის, per §3.1).

**რეკომენდირებული filename:** `abb_ref615_product_guide_[YYYY]_edition.pdf` ან `[supplier]_ref615_datasheet_[project].pdf`.

**სტატუსი მანამდე:** **Not Verified** (edition currency).

---

## Recommended Next Action

თუ ზუსტი, მიმდინარე ტექნიკური მონაცემი საჭირო გახდება რეალური REF615 offer-ის შესაფასებლად, მოთხოვნილ იქნას project-specific supplier datasheet ან უახლესი official REF615 დოკუმენტაცია — ეს Evidence Map რჩება **product-line-ის სტრუქტურული reference**, არა project-specific evidence.
