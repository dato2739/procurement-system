Document title: Evidence Map — ABB VD4 Vacuum Circuit Breaker Catalogue
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# Evidence Map — ABB VD4 Vacuum Circuit Breaker Catalogue

**ეს დოკუმენტი არ არის checklist და არ არის mandatory requirement-ების სია.** ის ასახავს, თუ რა ტიპის supplier evidence შეიძლება შემოწმდეს ამ 60-გვერდიანი VD4 catalogue-ის, როგორც **manufacturer-specific reference**-ის, გამოყენებით — და, ყველაზე მნიშვნელოვანი, რა **არ შეიძლება** დამტკიცდეს მისი გამოყენებით. საფუძვლად გამოყენებულია [`abb_vd4_vacuum_circuit_breaker_catalogue_source_note.md`](../source_cards/abb_vd4_vacuum_circuit_breaker_catalogue_source_note.md).

**Status ენა, გამოყენებული ქვემოთ:** Reference Match / Supplier Evidence Required / Not Verified / Manufacturer-Specific / Low Confidence / Engineer Review Required.

**⚠⚠ Mandatory-status გაფრთხილება:** **ABB VD4 არ არის სავალდებულო breaker ტიპი.** ეს Evidence Map ასახავს, რა შეიძლება შემოწმდეს **VD4-სპეციფიკურად**, თუ project-ის offer-ი სწორედ VD4-ს გვთავაზობს. **თუ მიმწოდებელი სხვა VCB ტიპს/მწარმოებელს გვთავაზობს, ეს Evidence Map პირდაპირ არ გამოიყენება** — საჭირო იქნება იმ კონკრეტული VCB-ის საკუთარი evidence-map/datasheet, ანალოგიური სტრუქტურით.

---

## ⚠ Extraction Quality — წინაპირობა

ფაილი (~10.2 MB, 60 გვ.) სრულად წაკითხულია **ვიზუალურად** — ტექსტ-ექსტრაქციის მნიშვნელოვანი დეფექტები (dimensional drawing ცხრილები, switching-cycle გრაფიკები) სრულად აღმოიფხვრა. **ყველა მონაცემი High Confidence-ითაა.**

---

## 1. VCB Identity and Model/Type

- **Status: Reference Match**
- დადასტურებულია: მწარმოებელი — ABB Xiamen Switchgear Co., Ltd.; პროდუქტი — **VD4**; ტიპი — vacuum circuit breaker, embedded epoxy pole, CL operating mechanism.
- Breaker type-კოდირება (მაგ. `1206-25`, `1712-40`) კოდირებას შეიცავს voltage class-ის, rated current-ისა და short-circuit rating-ის შესახებ (§2.1, §3.1 ცხრილები).

## 2. Rated Voltage and Insulation Level

- **Status: Reference Match (High Confidence)**
- Rated voltage: **12/17.5/24 kV**.
- Rated power-frequency withstand voltage: 28/38/50 kV (42kV მოთხოვნით); rated lightning impulse withstand voltage: 75/95/125 kV.
- Peak of TRV (transient recovery voltage): 20.6/30.0/41 kV.

## 3. Rated Normal Current

- **Status: Reference Match (High Confidence)**
- Rated current: **630-4000 A**, ცხადი ცხრილით ყოველი voltage/short-circuit-კომბინაციისთვის (§2.1.1-2.1.3, §3.1.1-3.1.3).

## 4. Short-Circuit Breaking Current

- **Status: Reference Match (High Confidence)**
- Rated short-circuit breaking current symm.: **25/31.5/40/50 kA**; asymm.: 27.3-54.5 kA.

## 5. Making Current

- **Status: Reference Match (High Confidence)**
- Rated short-circuit making current (peak): **63-150 kA**, breaking current class-ის მიხედვით.

## 6. Short-Time Withstand Current and Duration

- **Status: Reference Match (High Confidence)**
- Rated short circuit duration: **3 წამი** (ცხადად მითითებული ყველა ratings ცხრილში).
- **⭐ CT Duration-Basis Cross-Check Note:** VD4-ის short-time withstand duration (3s) **უნდა შედარდეს** switchgear-ისა და CT-ის short-time withstand duration-თან. **არ უნდა ვივარაუდოთ**, რომ CT-ის 1s ბაზისი (per [`abb_tpu_7x_indoor_supporting_current_transformers_datasheet_evidence_map.md`](abb_tpu_7x_indoor_supporting_current_transformers_datasheet_evidence_map.md) §9) და VD4/switchgear-ის 3s ბაზისი ავტომატურად ეკვივალენტურია — საჭიროა duration-basis conversion (per `iec_61869_2_current_transformer_checklist.md` Item 7-ის ლოგიკა), სანამ ორივე მხარის short-time withstand რიცხვი პირდაპირ შედარდება.

## 7. Operating Sequence

- **Status: Reference Match (High Confidence)**
- Rated operating sequence: **O-3min-CO-3min-CO**.
- ავტორეკლოუზინგით: **O-0.3s-CO-3min-CO**.

## 8. Opening/Closing/Breaking Times

- **Status: Reference Match (High Confidence)**
- Closing time: 55-70ms (24kV) / 55-67ms (სხვები); Opening time: 33-45ms; Arcing time: ≤15ms; Break time: 40-60ms.
- Minimum command time on closing/opening: 20ms (rated supply voltage-ზე).

## 9. Spring Charging Motor / Operating Mechanism

- **Status: Reference Match (High Confidence)**
- Operating mechanism: stored-energy spring type (spiral spring), CL ("Chain drive/Latching") mechanism.
- Motor-operated mechanisms: rated supply voltage AC 110/220V ან DC 24/48/110/220V, power consumption ~200W, charging time ≤15s (§2.3).
- ხელით დამუხტვის ალტერნატივა ხელმისაწვდომია (charging lever, ~25 stroke).

## 10. Opening/Closing Coil Voltages

- **Status: Reference Match (High Confidence)**
- Shunt release OFF (Y2/Y9): AC 250VA, DC 250W.
- Shunt release ON (Y3): AC 250VA, DC 250W.
- Blocking magnet (Y1): AC 11VA, DC 10W.
- Undervoltage release (Y4): DC 10W.
- Indirect overcurrent release (Y7): two-phase/three-phase, ცალკე power consumption.
- Rated supply voltages: AC 110/220V, DC 24/48/60/110/220V.

## 11. Auxiliary Contacts

- **Status: Reference Match (High Confidence)**
- Auxiliary switches S1 (mechanism), S2 (blocking magnet), S3-S5 (breaker shaft), S7 (fault annunciation, fleeting contact ≥30ms).
- Withdrawable part-specific: S8 (test position), S9 (service position).
- სრული wiring diagram §2.6 (fixed) და §3.3 (withdrawable).

## 12. Interlocking and Safety Logic

- **Status: Reference Match (High Confidence) — Core Safety**
- §4.5-ში სრული, 7-პუნქტიანი withdrawable-part interlock სია: (1) test↔service position მოძრაობა მხოლოდ breaker open + earthing switch open-ისას; (2) breaker closing მხოლოდ ზუსტ test/service position-ში; (3) breaker manual opening უზრუნველყოფილია control voltage-ის გარეშეც; (4) control wiring plug disconnection მხოლოდ test position-ში; (5) earthing switch closing მხოლოდ test/removed position-ში; (6) test→service მოძრაობა დაბლოკილია, თუ earthing switch closed-ია; (7) დამატებითი interlocks (blocking magnet) — project-specific order documentation-ში.
- **Engineer Review Required:** ეს არის core-safety ინფორმაცია — project-specific offer-ისთვის interlocking scheme-ის ცალკე ვერიფიკაცია აუცილებელია, per [`iec_62271_102_disconnector_earthing_switch_checklist.md`](../checklists/iec_62271_102_disconnector_earthing_switch_checklist.md)-ის core-safety item-ების ანალოგიური ლოგიკა.

## 13. Cubicle / Withdrawable-Part Compatibility

- **Status: Reference Match (High Confidence) — Manufacturer-Specific**
- VD4 ხელმისაწვდომია fixed installation-ისთვის (§2) და withdrawable part-ისთვის (§3), Type A (auxiliary switches გარეშე, მხოლოდ manual) და Type B (built-in auxiliary switches, manual/motorized) ვარიანტებით.
- **⭐ Cross-reference:** გვ. 30-31-ის dimensional drawing-ები ცხადად მიუთითებს "**Powerbloc**" და "**UniGear type ZS1**" panel-სისტემებზე თავსებადობის ზომებზე (P/N/Q/R/S პარამეტრები) — პირდაპირი კავშირი [`abb_unigear_zs1_switchgear_catalogue_evidence_map.md`](abb_unigear_zs1_switchgear_catalogue_evidence_map.md)-თან.
- §4.3.2: VD4-ის სხვა მწარმოებლის truck-ებზე დამონტაჟებისას საჭიროა დამატებითი auxiliary switch-ები (მექანიკური lock/release device-ის დამოკიდებულებით).

## 14. Dimensions / Ordering Code / Mechanical Arrangement

- **Status: Reference Match (High Confidence — ვიზუალურად დადასტურებული)**
- სრული dimensional drawings ყველა rated-კომბინაციისთვის (§2.5, §3.2) — weight, terminal type (A1/A2/A3), pole centres, earthing conductor terminal.
- Breaker-type კოდირება ცხადადაა ცხრილებში ინტეგრირებული (მაგ. `1206-25`, `2431-31`).

## 15. Type Test / Routine Test / Standard References

- **Status: Reference Match (High Confidence)**
- Switchgear manufacture: **GB/T 11022 & IEC 62271-1**, **GB/T 1984 & IEC 62271-100**.
- Installation/operation: IEC 61936-1, VDE 0105, DIN VDE 0141.
- Routine test: VDE 0670 part 1000 ან IEC 60694 (§5.1).
- X-ray safety: PTB (Physikalisch-Technische Bundesanstalt) test, VDE 0671 part 100/IEC 62271-100 (§9).
- **Not Verified:** GB/T↔IEC ზუსტი IDT/MOD/NEQ შესაბამისობა დოკუმენტში არ არის დაზუსტებული.

## 16. VCB-Cubicle Compatibility Evidence Required

- **Status: Engineer Review Required (ცხადი cross-check საჭირო)**
- Pole centres, terminal type, dimensional footprint უნდა შეესაბამებოდეს project-ის cubicle-ის GA drawing-ს.
- Interlocking scheme (earthing switch, disconnector) უნდა შემოწმდეს project-ის cubicle-ის schematic-თან.
- Auxiliary contact allocation (S1-S9) უნდა დაემთხვეს project-ის control/protection wiring-ს.

## 17. Supplier Documents That Should Be Requested

თუ მომავალში ABB VD4-ზე ან სხვა VCB-ზე დაფუძნებული offer მოვა:

- project-specific VCB datasheet — ზუსტი breaker type/rating, terminal arrangement, GA drawing;
- interlocking scheme-ის project-specific დადასტურება (cubicle-VCB ინტეგრაცია);
- CT/switchgear short-time withstand duration-ის cross-check evidence (1s vs 3s ბაზისი);
- auxiliary contact allocation/wiring diagram project-ისთვის;
- type test report/routine test report (project-specific unit);
- **თუ VD4 არ არის შემოთავაზებული:** იმ კონკრეტული VCB-ის საკუთარი datasheet/catalogue/type-test evidence.

## 18. What Must NOT Be Concluded From This Catalogue Alone

- **არ შეიძლება** დავასკვნათ, რომ project-ის offer-ის VCB არის VD4 ან VD4-ის ეკვივალენტი — მიმწოდებელმა შესაძლოა სხვა ტიპი/მწარმოებელი შესთავაზოს, რაც **ცალკე, დამოუკიდებელ** evidence-ს საჭიროებს.
- **არ შეიძლება** ვივარაუდოთ, რომ project-ის cubicle-ის dimensional footprint/pole centres ავტომატურად ემთხვევა VD4-ის dimensional drawing-ებს — cubicle-specific GA drawing საჭიროა.
- **არ შეიძლება** ვივარაუდოთ, რომ CT-ის 1s short-time withstand ბაზისი და VD4-ის 3s ბაზისი პირდაპირ შედარებადია — duration-basis conversion აუცილებელია.
- **არ შეიძლება** ეს catalogue გამოყენებულ იქნას, როგორც IEC 62271-100/GB/T 1984 mandatory compliance-ის დამტკიცება — ეს არის მწარმოებლის საკუთარი მასალა.
- **არ შეიძლება** non-VD4 VCB უარყოფილ იქნას მხოლოდ იმის გამო, რომ ის VD4 არ არის — ეს **მკაცრად აკრძალულია**, per `CLAUDE.md` §3.2/§18.1.
- **Engineer Review Required** მიენიჭება ნებისმიერ შემთხვევას, სადაც ეს catalogue გამოიყენება, როგორც ერთადერთი წყარო რაიმე ტექნიკური დასკვნისთვის რეალურ პროექტში.

---

## Missing / Insufficient Information — Acquisition Instruction

**რა აკლია:** project-specific VCB-ის ზუსტი offered breaker type, rated voltage/current, breaking/making current, short-time withstand current/duration, operating sequence, motor/coil voltages, auxiliary contacts, interlocking compatibility, type/routine test evidence.

**რატომ:** ეს catalogue product-line reference-ია (VD4-სპეციფიკური) — რეალური project review-სთვის საჭიროა კონკრეტული, project-ისთვის შემოთავაზებული VCB unit-ის ზუსტი მონაცემები, **განურჩევლად იმისა, VD4-ია თუ სხვა VCB**.

**რა დოკუმენტს შეუძლია მოწოდება:** Supplier-specific VCB datasheet/catalogue/type-test evidence.

**სად მოძებნოს:** მიმწოდებლის ტექნიკური კომუნიკაცია ან project-ის offer-ის დანართები.

**რა უნდა აიტვირთოს:** სრული supplier VCB datasheet/catalogue.

**სად ატვირთოს:** `inputs/datasheets/`.

**რეკომენდირებული filename:** `[supplier]_vcb_datasheet_[project].pdf`.

**სტატუსი მანამდე:** **Supplier Evidence Required**.

**⚠ განსაკუთრებული შენიშვნა:** თუ მიმწოდებელი VD4-ისგან განსხვავებულ VCB ტიპს/მწარმოებელს გვთავაზობს, **არ გამოვიყენოთ ეს VD4 evidence map პირდაპირ შედარებისთვის** — მოთხოვნილ იქნას იმ კონკრეტული VCB-ის საკუთარი evidence-map/datasheet. **Non-VD4 breaker-ის უარყოფა მხოლოდ "არა-VD4"-ის საფუძველზე დაუშვებელია.**

---

## Recommended Next Action

თუ ზუსტი, project-specific VCB მონაცემი საჭირო გახდება რეალური offer-ის შესაფასებლად, მოთხოვნილ იქნას project-specific supplier VCB datasheet — ეს Evidence Map რჩება **VD4-სპეციფიკური, product-line structural reference**, არა project-specific ან universal VCB evidence.
