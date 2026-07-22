Document title: Checklist — Disconnector and Earthing Switch (IEC 62271-102 basis + GOST R 52726 NEQ enrichment)
Version: 2.1 — Item 10 (earthing continuity) risk classification corrected
Last updated: 2026-07-10
Status: Preliminary — checklist basis only, not final IEC/GOST compliance proof
Owner / Prepared by: David Dvalishvili / Claude

---

# Checklist — Disconnector and Earthing Switch (IEC 62271-102 basis)

მომზადებულია [`checklist_template.md`](checklist_template.md)-ის სტრუქტურით (Version 2.0), [`iec_62271_102_source_note.md`](../source_cards/iec_62271_102_source_note.md)-ის საფუძველზე. **Preliminary — არა საბოლოო IEC compliance-ის მტკიცებულება.**

**⚠ Version 2.0 — Conditional Requirement Logic Applied.** ეს არის პირველი checklist, რომელიც სრულად გასწორდა [`checklist_template.md`](checklist_template.md) Version 2.0-ის Conditional Requirement structure-ის მიხედვით, დამტკიცებული [`checklist_conditional_requirement_logic_proposal.md`](../../drafts/change_proposals/checklist_conditional_requirement_logic_proposal.md)-ის მიხედვით. **6 item** (Item 3, Item 9, GOST-N.6, GOST-N.7, GOST-N.10, GOST-N.13) გახდა ფორმალურად **Conditional: Yes**, სრული 5 დამატებითი ველით. დანარჩენი item-ები რჩება **Conditional: No** — per template-ის საკუთარი წესი ("თუ 'No' — დანარჩენი conditional-სპეციფიკური ველების გამოტოვება დასაშვებია"), ეს item-ები ინარჩუნებენ თავიანთ ორიგინალურ, არსებით ველებს (`Condition/If Required/If Not Required/Escalation Rule/Responsible Party` ველების გარეშე). დეტალური დასაბუთება, თუ რატომ ესა თუ ის item Conditional/Unconditional-ად დარჩა, იხ. [`iec_62271_102_checklist_conditional_logic_update_report.md`](../../reports/iec_62271_102_checklist_conditional_logic_update_report.md).

**⚠ Version 2.1 — Item 10 (Earthing logic/continuity) Risk Classification Corrected.** Re-test-ის დროს ([`positive_supplier_offer_retest_after_conditional_logic.md`](../../reports/positive_supplier_offer_retest_after_conditional_logic.md)) დაფიქსირდა, რომ Item 10-ის **ბინარული** ("ყოველთვის Critical Risk თუ Missing") ლოგიკა დარჩენილი false-positive-risk იყო — **ეს არ იყო Conditional Requirement-ის საკითხი** (item სწორადვე რჩება Unconditional), არამედ **გრადუირებული Risk Level**-ის ცალკე საჭიროება. Item 10 ახლა განასხვავებს Missing Data / Clarification Required / Engineer Review Required / Critical Risk-ს, დეტალები იხ. [`iec_62271_102_item10_earthing_continuity_risk_correction_report.md`](../../reports/iec_62271_102_item10_earthing_continuity_risk_correction_report.md).

## Equipment / Review Area
disconnector, earthing switch (10 kV outgoing feeder cubicle-ის ფარგლებში) [Source: CLAUDE.md, section 2.3]

---

## Check Items

### 1. Disconnector type and construction
**Why it matters:** disconnector-ის ტიპი (single-break/double-break, rotary/vertical) cubicle-ის დიზაინთან თავსებადობა.
**Conditional Requirement:** No — disconnector-ის ტიპის დადგენა ყოველთვის საჭიროა, პროექტის სპეციფიკის მიუხედავად.
**Supplier evidence required:** datasheet, GA drawing.
**Related section reference:** Section 3.4–3.6 (Definitions); Section 5 (Design and construction)
**Risk if missing:** კონსტრუქციული შეუთავსებლობა.
**Status options:** OK / Missing Data / Clarification Required / Engineer Review Required / Critical Risk / Not Applicable / Not Checked
**Confidence rule:** High — GA drawing + ტიპის მკაფიო მითითება.
**Engineer Review Required trigger:** ტიპი ბუნდოვანია.

### 2. Earthing switch presence and type
**Why it matters:** უსაფრთხოებრივად სავალდებულო ელემენტი.
**Conditional Requirement:** No — earthing switch-ის არსებობა/ტიპი ყოველთვის უნდა დადასტურდეს, პროექტის მოთხოვნის მიუხედავად (მისი *ფუნქციური scope*, მაგ. fault-making capacity, შეიძლება იყოს conditional — იხ. Item 3).
**Supplier evidence required:** datasheet, earthing scheme drawing.
**Related section reference:** Section 5.3 (Earthing)
**Risk if missing:** **Critical Risk**.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — scheme drawing-ით დადასტურებული.
**Engineer Review Required trigger:** earthing switch საერთოდ არ არის მითითებული.

### 3. Rated short-circuit making current (earthing switch)
**Why it matters:** fault-ზე earthing switch-ის ჩართვის უსაფრთხოება — **მხოლოდ** იმ შემთხვევაში, თუ ეს ფუნქცია (fault-making capability) პროექტს საერთოდ სჭირდება.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** საჭიროა **მხოლოდ** მაშინ, თუ კომპანიის/პროექტის ტექნიკური მოთხოვნა (technical assignment, client confirmation, ან ინჟინრის ცალსახა დადასტურება) ითხოვს fault-making-კაპაციტეტიან earthing switch-ს. ბევრ პროექტში earthing switch გამოიყენება მხოლოდ ჩვეულებრივი (non-fault) earthing ფუნქციისთვის, ისე რომ ეს მოთხოვნა საერთოდ არ ვრცელდება.
**If Required, Evidence Needed:** rated short-circuit making current-ის მნიშვნელობა, model-სპეციფიკური datasheet, type test report, Section 4.101.
**If Not Required, Acceptable Status:** **Not Applicable** — მისაღებია, თუ Client/Designer ცხადად ადასტურებს (technical assignment-ის სექცია ან წერილობითი confirmation), რომ ეს ფუნქცია არ არის საჭირო.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** Section 4.101
**Risk if missing:** **Critical Risk**, **მხოლოდ თუ** Condition/Applicability Rule დადასტურებულია საჭიროდ. თუ პირობა არ სრულდება (ან საერთოდ არ დგინდება), **არ არის** ავტომატური Critical Risk — იხ. Escalation Rule.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — model-სპეციფიკური test report (Required შემთხვევაში) ან ცხადი client confirmation დოკუმენტი (Not Required შემთხვევაში).
**Escalation Rule:** თუ ცხადად არ დგინდება, სჭირდება თუ არა პროექტს fault-making ფუნქცია — **Engineer Review Required**. **არასოდეს** ავტომატური Not Applicable და **არასოდეს** ავტომატური Critical Risk მხოლოდ გაურკვევლობის საფუძველზე.
**Responsible Party for Applicability Decision:** **Client / Designer** — არა Supplier.
**Engineer Review Required trigger:** (ა) applicability გაურკვეველია; (ბ) საჭიროდ დადასტურებული, მაგრამ making current-ის მნიშვნელობა ან test report არ არსებობს; (გ) Not Applicable-ის დამადასტურებელი დოკუმენტი დამოუკიდებლად არ არის გადამოწმებული.

### 4. Rated contact zone
**Why it matters:** disconnector-ის contact-ის ტექნიკური მახასიათებელი.
**Conditional Requirement:** No — ეს არის disconnector-ის ძირითადი, ყოველთვის შესამოწმებელი პარამეტრი.
**Supplier evidence required:** datasheet, Section 4.102.
**Related section reference:** Section 4.102
**Risk if missing:** Medium.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Engineer Review Required trigger:** მონაცემი საერთოდ არ არსებობს და პროექტს კონკრეტული მოთხოვნა აქვს.

### 5. Rated mechanical terminal load
**Why it matters:** cable/busbar-თან მექანიკური დატვირთვის გამძლეობა.
**Conditional Requirement:** No.
**Supplier evidence required:** type test/calculation, Section 4.103.
**Related section reference:** Section 4.103
**Risk if missing:** Medium–High.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Engineer Review Required trigger:** მონაცემი არ არსებობს.

### 6. Interlocking devices
**Why it matters:** disconnector/earthing switch/breaker-ს შორის არასწორი ოპერაციის თავიდან აცილება.
**Conditional Requirement:** No — **ცალსახად შენარჩუნებულია Unconditional-ად**, მიუხედავად იმისა, რომ interlocking task-ის "focus" სიაშია. მექანიკური/ელექტრული ურთიერთბლოკირების **არსებობა** არის ბაზისური უსაფრთხოებრივი მოთხოვნა ნებისმიერი disconnector/earthing switch/breaker კომბინაციისთვის, per `CLAUDE.md` §28 — ეს **არ არის** პროექტის სპეციფიკიდან გამომდინარე ოფციონალური მოთხოვნა. (კონკრეტული interlocking scheme-ის *ტიპი* ცხადია პროექტ-სპეციფიკურია, მაგრამ ეს არის evidence-ის ვარიაბელობა, არა Conditional Requirement — ეს item-ი Missing Data-ს, არა Not Applicable-ს დაექვემდებარება, თუ scheme არ არის მოწოდებული.)
**Supplier evidence required:** interlocking scheme description/drawing, Section 5.11.
**Related section reference:** Section 5.11
**Risk if missing:** **Critical Risk**.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — დეტალური scheme description.
**Engineer Review Required trigger:** scheme non-standard-ია ან დეტალები არ არსებობს.

### 7. Position indication
**Why it matters:** ოპერატორისთვის ცალსახა ვიზუალური/ელექტრული სტატუსის ჩვენება.
**Conditional Requirement:** No — ვიზუალური/მექანიკური position indication ბაზისური უსაფრთხოებრივი მოთხოვნაა ნებისმიერი disconnector/earthing switch-ისთვის, პროექტის სპეციფიკის მიუხედავად. (**შენიშვნა:** electrical/remote position indication SCADA-სთვის — იხ. Item 9/GOST-N.6, Auxiliary Contacts — ეს ნაწილი **არის** conditional.)
**Supplier evidence required:** mechanism description, Section 5.12.
**Related section reference:** Section 5.12
**Risk if missing:** Medium–High (misoperation-ის რისკი).
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Engineer Review Required trigger:** position indication-ის მექანიზმი ბუნდოვანია.

### 8. Mechanical operation evidence
**Why it matters:** endurance-ისა და ოპერაციული საიმედოობის დადასტურება.
**Conditional Requirement:** No — მექანიკური endurance ბაზისური საიმედოობის მოთხოვნაა ნებისმიერი disconnector-ისთვის.
**Supplier evidence required:** mechanical endurance type test report.
**Related section reference:** Section 6 (Type tests)
**Risk if missing:** Medium.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium — ხშირად family-donis test report.
**Engineer Review Required trigger:** endurance test report საერთოდ არ არსებობს.

### 9. Auxiliary contacts
**Why it matters:** SCADA/relay ინტერფეისისთვის position signal-ის მიწოდება — **მხოლოდ** იმ შემთხვევაში, თუ remote monitoring/SCADA ინტეგრაცია პროექტს საერთოდ სჭირდება.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** საჭიროა **მხოლოდ**, თუ პროექტის ტექნიკური მოთხოვნა/single-line diagram ითხოვს remote monitoring-ს ან SCADA ინტეგრაციას (breaker/disconnector/earthing switch status-ის remote ჩვენებას). თუ cubicle განკუთვნილია მხოლოდ ადგილობრივი (local-only) მართვისთვის, ეს მოთხოვნა შეიძლება საერთოდ არ ვრცელდებოდეს.
**If Required, Evidence Needed:** auxiliary contact datasheet, wiring drawing, contact რაოდენობა/რეიტინგი.
**If Not Required, Acceptable Status:** **Not Applicable** — მისაღებია, თუ პროექტის SLD/technical assignment ცალსახად აჩვენებს, რომ ეს cubicle local-only მართვისთვისაა.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** Section 5.4
**Risk if missing:** Medium — remote monitoring შეზღუდვა, **მხოლოდ თუ** ეს ფუნქცია საჭიროა.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Escalation Rule:** თუ SCADA/remote-monitoring საჭიროება გაურკვეველია — **Engineer Review Required** ან **Clarification Required**, არა ავტომატური Not Applicable ან Critical Risk.
**Responsible Party for Applicability Decision:** **Client / Designer**.
**Engineer Review Required trigger:** auxiliary contacts მოთხოვნილია (დადასტურებული), მაგრამ არ არის მოწოდებული.

### 10. Earthing logic / continuity
**Why it matters:** cubicle-ის საერთო earthing სისტემასთან თანმიმდევრულობა — earthing/protective-conductor სისტემის უწყვეტობა უსაფრთხოებრივად მნიშვნელოვანია, მაგრამ **ეს არ არის იგივე**, რაც Item 13/GOST-N.8-ის ("earthing switch on live circuit prevention") უშუალო, დაუყოვნებელი უსაფრთხოებრივი საფრთხე — ეს ორი item ცალკეა შეფასებადი.
**Conditional Requirement:** No — earthing continuity-ის დადგენა ყოველთვის საჭიროა.
**Supplier evidence required:** earthing scheme drawing, earthing busbar rated current/withstand data.
**Related section reference:** Section 5.3
**Risk if missing — გრადუირებული ესკალაცია (Version 2.1 correction, იხ. [`iec_62271_102_item10_earthing_continuity_risk_correction_report.md`](../../reports/iec_62271_102_item10_earthing_continuity_risk_correction_report.md)):**
- **Missing Data:** evidence (scheme drawing ან rated data) უბრალოდ არ არის მოწოდებული, **მაგრამ** დაკავშირებული უსაფრთხოებრივი item-ები (Item 6/13, GOST-N.4/8 — interlocking, earthing-on-live-circuit prevention) დამოუკიდებლად უკვე დადასტურებულია → **Missing Data**, **არა** ავტომატური Critical Risk.
- **Clarification Required:** ნაწილობრივი მონაცემია (მხოლოდ scheme drawing rated data-ს გარეშე, ან პირიქით) → **Clarification Required**.
- **Engineer Review Required:** ხელმისაწვდომი ინფორმაცია არასაკმარისია, რომ დამოუკიდებლად შეფასდეს earthing სისტემის საკმარისობა (მაგ. scheme drawing ბუნდოვანია, ან rated data მოცემულია, მაგრამ cubicle-ის ფაქტობრივ fault-current მოთხოვნასთან შესაბამისობა გაურკვეველია) → **Engineer Review Required**.
- **Critical Risk:** **მხოლოდ** მაშინ, როცა არსებობს **ცხადი, პროექტ-რელევანტური, უსაფრთხოებრივად კრიტიკული შეუსაბამობა ან დადასტურებული სახიფათო earthing/interlocking მდგომარეობა** — მაგ. (ა) მოწოდებული earthing busbar rated data ცხადად არასაკმარისია პროექტის ფაქტობრივი fault-current მოთხოვნასთან შედარებით, ან (ბ) Item 13/GOST-N.8-ის დამოუკიდებელი უსაფრთხოებრივი trigger ასევე აქტიურია იმავე დროს.
**Status options:** OK / Missing Data / Clarification Required / Engineer Review Required / Critical Risk / Not Applicable / Not Checked
**Confidence rule:** High — scheme drawing + rated data ორივე ხელმისაწვდომია და ცხადია; Medium — მხოლოდ ერთი წყარო; Low — ორივე ბუნდოვანია ან ნაწილობრივია.
**Escalation Rule:** N/A — Unconditional item, მაგრამ Risk Level-ის დადგენა თავად საჭიროებს გრადუირებულ შეფასებას (იხ. "Risk if missing" ზემოთ) — ეს **არ არის** applicability-conditional ესკალაცია, ეს არის severity-გრადაცია.
**Responsible Party for Applicability Decision:** N/A — Unconditional.
**Engineer Review Required trigger:** (ა) ხელმისაწვდომი evidence არასაკმარისია დამოუკიდებელი უსაფრთხოებრივი შეფასებისთვის; (ბ) scheme drawing ან rated data ეწინააღმდეგება სხვა წყაროს; (გ) earthing continuity-ის სტატუსსა და Item 13/GOST-N.8-ის შედეგს შორის კავშირი ცალკე შესამოწმებელია.

### 11. Type test evidence (overall)
**Why it matters:** ძირითადი disconnector/earthing switch რეიტინგების დამოუკიდებელი დადასტურება.
**Conditional Requirement:** No.
**Supplier evidence required:** type test report(-ები).
**Related section reference:** Section 6
**Risk if missing:** მაღალი პრიორიტეტის Missing Data.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — model-სპეციფიკური.
**Engineer Review Required trigger:** family-donis report, არა model-სპეციფიკური.

### 12. Routine test evidence
**Why it matters:** კონკრეტული ერთეულის ხარისხის დადასტურება.
**Conditional Requirement:** No.
**Supplier evidence required:** routine test report, serial number-ით.
**Related section reference:** Section 7
**Risk if missing:** Medium.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — unit-სპეციფიკური.
**Engineer Review Required trigger:** routine report საერთოდ არ არსებობს.

### 13. Safety risk trigger — earthing switch on live circuit
**Why it matters:** ეს არის უმაღლესი უსაფრთხოებრივი რისკის სცენარი switchgear-ში.
**Conditional Requirement:** No — **ეს არის ცენტრალური, ყოველთვის აქტიური უსაფრთხოებრივი trigger-rule**, per `CLAUDE.md` §28 (General Safety Principle). ეს **არასოდეს** შეიძლება გახდეს Conditional/Not Applicable, პროექტის სპეციფიკის მიუხედავად — earthing switch-ის ცოცხალ წრეზე ჩართვის პრევენცია ბაზისური მოთხოვნაა ყველა შემთხვევაში.
**Supplier evidence required:** interlocking scheme-ის დამოუკიდებელი დადასტურება, რომ earthing switch ვერ ჩაირთვება ცოცხალ წრეზე.
**Related section reference:** Section 5.11 (Interlocking); ეფუძნება ასევე `CLAUDE.md` §28-ს.
**Risk if missing:** **Critical Risk** — ავტომატურად.
**Status options:** იხ. ზემოთ.
**Confidence rule:** N/A — ეს არის trigger-rule, არა ცალკეული პროდუქტის შემოწმება.
**Engineer Review Required trigger:** ეს item თავად წარმოადგენს Critical Risk ტრიგერს, თუ interlocking scheme-ის დამოუკიდებელი დადასტურება არ არსებობს.

---

## Confidence Rule (Overall — Items 1–13, IEC 62271-102 basis)
წყაროს OCR ხარისხის მცირე ხარვეზების გამო (subsection-ის ნომრებში), Confidence Level-ი ზოგადად Medium-ით შემოისაზღვრება, სანამ ცალკეული clause არ დაზუსტდება ოფიციალურ ტექსტთან.

## Engineer Review Required Trigger (Overall — Items 1–13, IEC 62271-102 basis)
Items 2, 3, 6, 13 — უსაფრთხოებრივად კრიტიკული — Missing Data სტატუსში დარჩენა ავტომატურად ნიშნავს Engineer Review Required-ს ან Critical Risk-ს, per `CLAUDE.md` §10.1, §28. **Item 3-ისთვის** ეს ტრიგერი აქტიურდება **მხოლოდ** მას შემდეგ, რაც Condition/Applicability Rule დადასტურდება საჭიროდ — იხ. Item 3-ის Escalation Rule. **Item 10** (Version 2.1-ის შემდეგ) **აღარ** ექვემდებარება ავტომატურ Critical Risk-ს Missing Data-ზე — მისი ესკალაცია ახლა გრადუირებულია (Missing Data / Clarification Required / Engineer Review Required / Critical Risk) — იხ. Item 10-ის საკუთარი "Risk if missing" ველი.

---

# GOST R 52726 NEQ-specific enrichment items

**წყარო:** [`gost_r_52726_source_note.md`](../source_cards/gost_r_52726_source_note.md) — **GOST R 52726—2007**, «Разъединители и заземлители переменного тока на напряжение свыше 1 кВ и приводы к ним. Общие технические условия» (disconnectors, earthing switches, and their operating mechanisms, AC >1kV). **Source confirmation status: High** — სრული 55-გვერდიანი დოკუმენტის ვიზუალური წაკითხვით დადასტურებული (2026-07-09).

⚠ **მკაცრი გამიჯვნა IEC 62271-102-ის ზემოთ მოცემული item-ებისგან (1–13):** GOST R 52726 დოკუმენტშივე მარკირებულია **NEQ (non-equivalent)** IEC 62271-102:2001-თან (Amendments 1:2002, 2:2003) მიმართებით. ეს ნიშნავს, რომ **ქვემოთ მოცემული item-ები არ არის** IEC 62271-102-ის item-ების უბრალო თარგმანი ან ეკვივალენტი — ეს არის **დამატებითი, domestic (Russian)-jurisdiction-სპეციფიკური** cross-reference ფენა. **არცერთ შემთხვევაში არ არის დაშვებული** ამ item-ების გამოყენება, როგორც IEC 62271-102-ის შესაბამისობის მტკიცებულება, ან პირიქით.

## Equipment / Review Area (GOST-specific layer)
disconnector, earthing switch, operating mechanism/drive (10 kV outgoing feeder cubicle-ის ფარგლებში, domestic/Russian-jurisdiction cross-reference) [Source: `gost_r_52726_source_note.md`, §1, §4]

---

## Check Items (GOST-N.1 – GOST-N.14)

### GOST-N.1. Disconnector identification and application (GOST R 52726 scope match)
**Why it matters:** GOST R 52726-ის Scope (Section 1) გამორიცხავს გარკვეულ სპეციალურ შესრულებებს (surge-limiter-კომბინირებული, plug-in ტიპის, ჩაშენებული fuse-ით, GIS-ტიპის, ასაფეთქებელ/ხანძარსაშიშ გარემოსთვის, ხშირი კომუტაციისთვის). აუცილებელია დადასტურდეს, რომ შემოთავაზებული disconnector ამ scope-ის ფარგლებშია, სანამ ეს checklist გამოყენებული იქნება.
**Conditional Requirement:** No — ეს არის identity/scope-match შემოწმება, ყოველთვის საჭირო, სანამ დანარჩენი GOST-N.* item-ები საერთოდ გამოყენებადი გახდება.
**Supplier evidence required:** datasheet-ის მკაფიო მითითება disconnector-ის ტიპზე (სტანდარტული vs სპეციალური შესრულება).
**Related source reference:** [Source: gost_r_52726_source_note.md, §3 Scope]
**Risk if missing:** Clarification Required — თუ ტიპი გაურკვეველია, ეს checklist ვერ იქნება გამოყენებადი.
**Status options:** OK / Missing Data / Clarification Required / Engineer Review Required / Critical Risk / Not Applicable / Not Checked
**Confidence rule:** Source identity — **High** (დოკუმენტი სრულად დადასტურებულია). Კონკრეტული პროდუქტის scope-შესაბამისობა — Medium, მოწოდებული datasheet-ის სიცხადეზეა დამოკიდებული.
**Engineer Review Required trigger:** თუ disconnector სპეციალურ შესრულებას მიეკუთვნება (Scope-ის გამონაკლისებიდან) — მაშინ GOST R 52726-ის item-ები **არ გამოიყენება** ამ კონკრეტულ ერთეულზე.

### GOST-N.2. Earthing switch identification and application
**Why it matters:** GOST R 52726-ის Classification (Section 4, Table 1) განასხვავებს disconnector-ებს earthing switch-ის არსებობის/არარსებობის მიხედვით (ცალკე, ინტეგრირებული, ან საერთოდ არარსებული).
**Conditional Requirement:** No — earthing switch-ის ტიპისა და ინტეგრაციის დადგენა ყოველთვის საჭიროა.
**Supplier evidence required:** datasheet, GA drawing — earthing switch-ის ტიპისა და ინტეგრაციის მკაფიო მითითებით.
**Related source reference:** [Source: gost_r_52726_source_note.md, §4 Section Reference Map — Section 4 Классификация, Table 1]
**Risk if missing:** Critical Risk, თუ პროექტს earthing switch სჭირდება და მისი ტიპი გაურკვეველია.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Source identity — High. კონკრეტული პროდუქტის კლასიფიკაცია — Medium.
**Engineer Review Required trigger:** earthing switch-ის ტიპი/ინტეგრაცია ბუნდოვანია ან არ არის მითითებული.

### GOST-N.3. Operating mechanism / drive identification
**Why it matters:** GOST R 52726 ცალკე მოიცავს "приводы" (operating mechanisms/drives) — Приложение А-ს პროდუქტის დანიშნულების კოდის სტრუქტურა ცალკე გამოყოფს drive-ის ტიპს (მექანიკური/ხელის, ძრავიანი და ა.შ.).
**Conditional Requirement:** No — drive-ის **ტიპის იდენტიფიცირება** (მანუალური vs მოტორიზებული) ყოველთვის საჭიროა, ტიპის მიუხედავად. (**შენიშვნა:** მოტორიზებული/remote-operated drive-ის **დამატებითი** evidence — იხ. GOST-N.10 — **არის** conditional, remote-ოპერაციის მოთხოვნაზე დამოკიდებული.)
**Supplier evidence required:** drive datasheet, ტიპის მითითებით (manual/motorized/spring-operated).
**Related source reference:** [Source: gost_r_52726_source_note.md, §4 Section Reference Map — Приложение А (product designation code); Section 5.9]
**Risk if missing:** Medium — cubicle-ის control/SCADA ინტეგრაციაზე გავლენას ახდენს.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Source identity — High. Drive-ის კონკრეტული ტიპის დადასტურება — Medium.
**Engineer Review Required trigger:** drive-ის ტიპი არ არის მითითებული, ან cubicle-ის control-სქემასთან თავსებადობა გაურკვეველია.

### GOST-N.4. Mechanical interlocking (disconnector ↔ earthing switch)
**Why it matters:** GOST R 52726-ის Section 5.10.8 კონკრეტულად ეხება disconnector-ისა და ინტეგრირებული earthing switch-ის **მექანიკურ ურთიერთბლოკირებას** — ეს არის ცალკე, GOST-სპეციფიკური დეტალიზაცია, დამატებით ზემოთ მოცემულ item 6-თან (IEC 62271-102 basis).
**Conditional Requirement:** No — **ცალსახად შენარჩუნებულია Unconditional-ად**, იმავე დასაბუთებით, რაც Item 6-ისთვის (ზემოთ): მექანიკური ურთიერთბლოკირება ბაზისური უსაფრთხოებრივი მოთხოვნაა, per `CLAUDE.md` §28 — ეს **არ** უნდა გახდეს project-scope-ზე დამოკიდებული Conditional-item, რათა თავიდან იქნას აცილებული ნამდვილი უსაფრთხოებრივი მოთხოვნის შესუსტება.
**Supplier evidence required:** interlocking mechanism-ის ცალკე აღწერა/დრაუინგი, რომელიც კონკრეტულად მექანიკურ (არა მხოლოდ ელექტრულ) ურთიერთბლოკირებას ადასტურებს.
**Related source reference:** [Source: gost_r_52726_source_note.md, §4 Section Reference Map — Section 5.10.8]
**Risk if missing:** **Critical Risk**.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Source identity — High. კონკრეტული პროდუქტის მექანიზმის დეტალური თანხვედრა GOST-ის მოთხოვნებთან — **Engineer Review Required**, ვინაიდან ზუსტი პარამეტრული შედარება IEC 62271-102-ის item 6-თან **არ არის დადასტურებული** (NEQ სტატუსი).
**Engineer Review Required trigger:** მექანიკური (არა მხოლოდ ელექტრული) ურთიერთბლოკირების დამოუკიდებელი მტკიცებულება არ არსებობს.

### GOST-N.5. Position indication (safety-related signaling)
**Why it matters:** GOST R 52726-ის Section 6 (Требования безопасности) მოიცავს position-indication/interlock signaling უსაფრთხოების მოთხოვნებს, დამატებით ზოგად IEC-ბაზირებულ item 7-თან.
**Conditional Requirement:** No — იმავე დასაბუთებით, რაც Item 7-ისთვის: ვიზუალური/მექანიკური position indication ბაზისური მოთხოვნაა. (Electrical/remote signaling — იხ. GOST-N.6, Conditional.)
**Supplier evidence required:** position-indication მექანიზმის აღწერა, უსაფრთხოებრივი სიგნალიზაციის სქემით.
**Related source reference:** [Source: gost_r_52726_source_note.md, §4 Section Reference Map — Section 6]
**Risk if missing:** Medium–High (misoperation-ის რისკი).
**Status options:** იხ. ზემოთ.
**Confidence rule:** Source identity — High. კონკრეტული სქემის GOST-შესაბამისობა — Medium–Engineer Review Required.
**Engineer Review Required trigger:** position-indication სქემა ბუნდოვანია ან უსაფრთხოებრივი სიგნალიზაცია არ არის აღწერილი.

### GOST-N.6. Auxiliary contacts (control/SCADA signaling)
**Why it matters:** GOST R 52726-ის Section 5.9 (Вспомогательные цепи и цепи управления, Table 7) ცალკე არეგულირებს auxiliary/control circuit-ის მოთხოვნებს — **მხოლოდ** იმ შემთხვევაში, თუ remote/SCADA ინტეგრაცია საერთოდ სჭირდება (იგივე პირობა, რაც Item 9-ში).
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** საჭიროა **მხოლოდ**, თუ პროექტი მოითხოვს remote/SCADA-ტიპის control/monitoring ინტეგრაციას (იხ. Item 9-ის იგივე Condition).
**If Required, Evidence Needed:** auxiliary contact datasheet, wiring drawing, GOST Table 7-ის ტიპის ველების დონეზე.
**If Not Required, Acceptable Status:** **Not Applicable** — მისაღებია, თუ პროექტი ცალსახად local-only მართვისთვისაა.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related source reference:** [Source: gost_r_52726_source_note.md, §4 Section Reference Map — Section 5.9]
**Risk if missing:** Medium — remote monitoring შეზღუდვა, **მხოლოდ თუ** ეს ფუნქცია საჭიროა.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Source identity — High. კონკრეტული აუქსილარული წრედის GOST-შესაბამისობა — Medium.
**Escalation Rule:** გაურკვეველი SCADA-საჭიროების შემთხვევაში — **Engineer Review Required** ან **Clarification Required**, არა ავტომატური Not Applicable/Critical Risk.
**Responsible Party for Applicability Decision:** **Client / Designer**.
**Engineer Review Required trigger:** auxiliary contacts მოთხოვნილია (დადასტურებული), მაგრამ GOST-ის Table 7-თან შესაბამისობა არ დასტურდება.

### GOST-N.7. Earthing switch safety logic (induced current / fault-making current switching)
**Why it matters:** GOST R 52726-ის Section 5.8 ცალკე არეგულირებს earthing switch-ის induced-current და fault-making-current კომუტაციას, E0/E1/E2 endurance/switching class-ებით (Tables 4–6) — **პირდაპირ დაკავშირებული Item 3-ის (IEC basis) იმავე პირობასთან.**
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** იგივე პირობა, რაც Item 3-ში — საჭიროა **მხოლოდ**, თუ earthing switch-ს ესაჭიროება fault-making ფუნქცია, დადასტურებული Client/Designer-ის მიერ.
**If Required, Evidence Needed:** E-კლასის (E0/E1/E2) მითითება და შესაბამისი test evidence.
**If Not Required, Acceptable Status:** **Not Applicable** — მისაღებია იმავე დადასტურების საფუძველზე, რაც Item 3-ისთვის (ერთი დადასტურება ორივე item-ს ფარავს).
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related source reference:** [Source: gost_r_52726_source_note.md, §4 Section Reference Map — Section 5.8, Tables 4–6]
**Risk if missing:** **Critical Risk** — **მხოლოდ თუ** earthing switch-ს fault-making ფუნქცია სჭირდება და E-კლასი დაუდასტურებელია.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Source identity — High. E-კლასის ზუსტი შესაბამისობა IEC-ის ანალოგიურ კლასიფიკაციასთან — **Engineer Review Required** (NEQ სტატუსის გამო პირდაპირი შესაბამისობა **დაუდასტურებელია**).
**Escalation Rule:** იგივე, რაც Item 3-ში — გაურკვეველი საჭიროება → **Engineer Review Required**, არასოდეს ავტომატური Not Applicable/Critical Risk.
**Responsible Party for Applicability Decision:** **Client / Designer** (იგივე გადაწყვეტილება, რაც Item 3-ში — არ საჭიროებს ცალკე გადამოწმებას).
**Engineer Review Required trigger:** E-კლასი არ არის მითითებული, ან GOST-ის E-კლასისა და პროექტის ფაქტობრივი fault-current მოთხოვნის შესაბამისობა გაურკვეველია.

### GOST-N.8. Prevention of unsafe operation (earthing switch on live circuit)
**Why it matters:** ეს არის უმაღლესი უსაფრთხოებრივი რისკის სცენარი — GOST R 52726-ის Section 5.10.8 (მექანიკური ურთიერთბლოკირება) და Section 6 (უსაფრთხოების მოთხოვნები) ერთად უნდა უზრუნველყოფდნენ, რომ earthing switch ვერ ჩაირთვება ცოცხალ წრეზე. ეს item დამატებით აძლიერებს ზემოთ IEC-ბაზირებულ item 13-ს.
**Conditional Requirement:** No — იმავე დასაბუთებით, რაც Item 13-ისთვის: ეს არის ცენტრალური, ყოველთვის აქტიური უსაფრთხოებრივი trigger-rule, per `CLAUDE.md` §28 — **არასოდეს** Conditional/Not Applicable.
**Supplier evidence required:** interlocking scheme-ის დამოუკიდებელი მტკიცებულება (მექანიკური + სადაც შესაძლებელია ელექტრული), რომ earthing switch-ის ჩართვა ცოცხალ წრეზე ტექნიკურად შეუძლებელია.
**Related source reference:** [Source: gost_r_52726_source_note.md, §4 Section Reference Map — Section 5.10.8, Section 6]
**Risk if missing:** **Critical Risk** — ავტომატურად.
**Status options:** იხ. ზემოთ.
**Confidence rule:** N/A — ეს არის trigger-rule, არა ცალკეული პროდუქტის შემოწმება.
**Engineer Review Required trigger:** ეს item თავად წარმოადგენს Critical Risk ტრიგერს, თუ interlocking scheme-ის დამოუკიდებელი დადასტურება არ არსებობს — per `CLAUDE.md` §28.

### GOST-N.9. Supplier evidence for interlocking and mechanical operation (endurance classes)
**Why it matters:** GOST R 52726-ის Section 5.5 (M0/M1/M2 mechanical endurance classes, Table 3, Figures 1–2) განსაზღვრავს disconnector-ის მექანიკურ გამძლეობის კლასიფიკაციას.
**Conditional Requirement:** No — მექანიკური endurance ბაზისური საიმედოობის მოთხოვნაა ნებისმიერი disconnector-ისთვის, არა პროექტ-სპეციფიკური ოფცია.
**Supplier evidence required:** M-კლასის მითითება და შესაბამისი mechanical endurance type test report.
**Related source reference:** [Source: gost_r_52726_source_note.md, §4 Section Reference Map — Section 5.5, Table 3]
**Risk if missing:** Medium — ხანგრძლივი ოპერაციული საიმედოობის რისკი.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Source identity — High. M-კლასის ზუსტი შესაბამისობა IEC-ის ანალოგიურ endurance class-თან — **Engineer Review Required** (NEQ სტატუსის გამო).
**Engineer Review Required trigger:** M-კლასი ან შესაბამისი test report არ არსებობს.

### GOST-N.10. Supplier evidence for operating mechanism / drive
**Why it matters:** drive-ის (привод) საიმედოობა უშუალოდ განსაზღვრავს disconnector/earthing switch-ის ოპერაციულ უსაფრთხოებას — **მოტორიზებული/remote-operated** drive-ის დამატებითი evidence საჭიროა **მხოლოდ**, თუ remote-ოპერაცია პროექტს სჭირდება (მანუალური drive-ის ძირითადი იდენტიფიცირება, GOST-N.3, რჩება Unconditional).
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** დამატებითი (motor supply, remote-control interface) evidence საჭიროა **მხოლოდ**, თუ პროექტი მოითხოვს მოტორიზებულ/remote-operated drive-ს (ჩვეულებრივ, იგივე Condition, რაც Item 9/GOST-N.6-ში — SCADA/remote-monitoring საჭიროებასთან ხშირად თანხვედრილი).
**If Required, Evidence Needed:** drive-ის ცალკე test evidence ან manufacturer-ის declaration, motor supply-ის მონაცემები, remote-control interface-ის აღწერა, დაკავშირებული Приложение А-ს designation code-თან.
**If Not Required, Acceptable Status:** **Not Applicable** (მხოლოდ მოტორიზებული-სპეციფიკური ნაწილისთვის) — მისაღებია, თუ მანუალური drive საკმარისია და ეს დადასტურებულია. ძირითადი drive-ის იდენტიფიცირება (GOST-N.3) რჩება სავალდებულო ორივე შემთხვევაში.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related source reference:** [Source: gost_r_52726_source_note.md, §4 Section Reference Map — Приложение А, Section 5.9]
**Risk if missing:** Medium, **მხოლოდ თუ** მოტორიზებული drive საჭიროა და მისი evidence აკლია.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Source identity — High. Drive-ის კონკრეტული ტესტ-მტკიცებულების სისრულე — Medium.
**Escalation Rule:** გაურკვეველი remote-operation საჭიროების შემთხვევაში — **Engineer Review Required** ან **Clarification Required**.
**Responsible Party for Applicability Decision:** **Client / Designer**.
**Engineer Review Required trigger:** მოტორიზებული drive დადასტურებულია საჭიროდ, მაგრამ ცალკე test evidence არ არსებობს.

### GOST-N.11. Type/routine test evidence matrix (GOST R 52726 test-type structure)
**Why it matters:** GOST R 52726-ის Section 7 (Правила приемки, Table 11) განსაზღვრავს ტესტების ტიპების სრულ მატრიცას (qualification/acceptance/periodic/type) — ეს დამატებით ალტერნატიულ სტრუქტურას იძლევა ზემოთ IEC-ბაზირებულ item 11–12-თან შედარებით.
**Conditional Requirement:** No.
**Supplier evidence required:** test report(-ები), მკაფიო მითითებით, რომელ ტესტის ტიპს შეესაბამება (qualification/acceptance/periodic/type — GOST-ის ტერმინოლოგიით).
**Related source reference:** [Source: gost_r_52726_source_note.md, §4 Section Reference Map — Section 7, Table 11]
**Risk if missing:** მაღალი პრიორიტეტის Missing Data.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Source identity — High. კონკრეტული test report-ის GOST-ტერმინოლოგიასთან შესაბამისობა — Medium, ვინაიდან ტესტების ტიპების ზუსტი შესაბამისობა IEC-ის ტერმინოლოგიასთან (routine/type/sample) **დაუდასტურებელია**.
**Engineer Review Required trigger:** test report-ის ტიპი გაურკვეველია ან GOST-ის მატრიცასთან შესაბამისობა ვერ დგინდება.

### GOST-N.12. Documentation / datasheet evidence (marking requirements)
**Why it matters:** GOST R 52726-ის Section 5.14 (Маркировка, Table 10) განსაზღვრავს nameplate/marking-ის მოთხოვნილ მონაცემებს.
**Conditional Requirement:** No.
**Supplier evidence required:** nameplate/marking-ის ფოტო ან მონაცემები, Table 10-ის ტიპის ველების დონეზე (კონკრეტული ველების ჩამონათვალი აქ არ არის კოპირებული).
**Related source reference:** [Source: gost_r_52726_source_note.md, §4 Section Reference Map — Section 5.14, Table 10]
**Risk if missing:** Low–Medium — დოკუმენტაციური სისრულის საკითხი.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Source identity — High. Marking-ის სისრულის კონკრეტული შემოწმება — Medium.
**Engineer Review Required trigger:** nameplate-ის მონაცემები არასრულია ან არ არსებობს.

### GOST-N.13. Drawing evidence (if GA/interlocking drawing available)
**Why it matters:** disconnector/earthing switch/drive-ის ურთიერთმდებარეობისა და interlocking-ის ვიზუალური დადასტურება — **მხოლოდ** მაშინ, თუ drawing-ი პროექტის ამ ეტაპისთვის საერთოდ მოთხოვნილია (ეს item უკვე შეიცავდა ნაწილობრივ conditional ენას წინა ვერსიაშიც — ახლა ფორმალიზებულია).
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** GA/interlocking drawing-ის ფიზიკური თანდართვა საჭიროა, თუ პროექტის ეტაპი (მაგ. tender-ის ფინალური ეტაპი, ან drawing review უკვე დაწყებულია) ამას მოითხოვს. ადრეულ, მხოლოდ ტექნიკური offer-ის ეტაპზე, drawing-ის reference-ით მითითება (ფიზიკური თანდართვის გარეშე) შეიძლება საკმარისი იყოს preliminary review-ისთვის.
**If Required, Evidence Needed:** GA drawing, interlocking scheme drawing — ფიზიკურად თანდართული ან სპეციალურად მოთხოვნის შემდეგ მიწოდებული.
**If Not Required, Acceptable Status:** **Not Applicable**, თუ drawing პროექტის ამ ეტაპისთვის საერთოდ არ არის მოთხოვნილი — მისაღებია მხოლოდ ტექსტური აღწერით/reference-ით (მაგ. GOST-N.4/GOST-N.8-ის evidence-ისთვის).
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related source reference:** [Source: gost_r_52726_source_note.md, §4 Section Reference Map — Section 5.10, 5.10.8]
**Risk if missing:** Medium — მხოლოდ ტექსტური აღწერით ვერ დგინდება ფიზიკური განლაგება, **მხოლოდ თუ** drawing ამ ეტაპზე მოთხოვნილია.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Source identity — High. Drawing-ის ხარისხი/სისრულე — Low–Medium, დამოკიდებულია drawing-ის ხელმისაწვდომობასა და წაკითხვადობაზე.
**Escalation Rule:** თუ გაურკვეველია, მოთხოვნილია თუ არა drawing ამ ეტაპზე — **Clarification Required**, არა ავტომატური Not Applicable.
**Responsible Party for Applicability Decision:** **Designer / Project Engineer** (პროექტის ეტაპის მიხედვით).
**Engineer Review Required trigger:** drawing არ არსებობს, მაგრამ interlocking-ის დამოუკიდებელი მტკიცებულება საჭიროა (იხ. GOST-N.4, GOST-N.8) — ეს ორი item **არასოდეს** კმაყოფილდება მხოლოდ ტექსტური აღწერით, თუ Critical Risk trigger აქტიურია.

### GOST-N.14. Engineer Review Required trigger — NEQ parameter-level comparison
**Why it matters:** ეს item ცალკე, ცხადად აფიქსირებს, რომ GOST R 52726-ის კონკრეტული რიცხვითი მოთხოვნები (Table 2 rated values, Table 3 M-კლასები, Tables 4–6 E-კლასები) **არ არის შედარებული** IEC 62271-102-ის ანალოგიურ მოთხოვნებთან პარამეტრის დონეზე.
**Conditional Requirement:** No — ეს არის permanent meta-trigger, ყოველთვის აქტიური, არა პროექტ-სპეციფიკური Conditional item.
**Supplier evidence required:** N/A — ეს არის internal cross-check trigger, არა მომწოდებლისგან მოთხოვნადი მტკიცებულება.
**Related source reference:** [Source: gost_r_52726_source_note.md, §7 Risk Triggers / Limitations and Caution]
**Risk if missing:** N/A — ეს თავად არის Engineer Review Required ტრიგერი.
**Status options:** Engineer Review Required (ავტომატურად, ყოველთვის, სანამ ცალკე პარამეტრული შედარება არ ჩატარდება).
**Confidence rule:** N/A — trigger-rule.
**Engineer Review Required trigger:** **ყოველთვის აქტიური** — ნებისმიერი GOST-N.* item-ის გამოყენება domestic-jurisdiction ბაზისზე მოითხოვს ცალკე საინჟინრო დადასტურებას, რომ GOST-ის კონკრეტული პარამეტრი (არა მხოლოდ თემატიკა) აკმაყოფილებს პროექტის ფაქტობრივ მოთხოვნას — **არასოდეს არ გამოიყენება ავტომატური IEC 62271-102-ის ეკვივალენტობის claim-ისთვის**.

---

## Confidence Rule (Overall — GOST-N.1–GOST-N.14)
**Source identity confidence: High** — GOST R 52726 სრულად ვიზუალურად დადასტურებულია (2026-07-09). **Detailed parameter-level comparison confidence: Engineer Review Required** ყველა item-ისთვის, სანამ კონკრეტული რიცხვითი მნიშვნელობები (Table 2–11) ცალკე არ შედარდება IEC 62271-102-ის შესაბამის მოთხოვნებთან. **არანაირი IEC/GOST ეკვივალენტობის claim არ კეთდება** ამ checklist-ის ფარგლებში.

## Engineer Review Required Trigger (Overall — GOST-N.1–GOST-N.14)
GOST-N.4, GOST-N.7, GOST-N.8, GOST-N.9, GOST-N.14 — უსაფრთხოებრივად კრიტიკული ან NEQ-სპეციფიკური პარამეტრული განუსაზღვრელობის მატარებელი — ავტომატურად ითხოვს Engineer Review Required-ს ან Critical Risk-ს, per `CLAUDE.md` §10.1, §28. **NEQ სტატუსის გამო, არცერთი GOST-N.* item არ შეიძლება ჩაითვალოს IEC 62271-102-ის თანაბარ substitute-ად** — ეს არის დამატებითი, არა შემცვლელი, cross-reference ფენა. **GOST-N.6, GOST-N.7, GOST-N.10, GOST-N.13-ის Conditional ლოგიკა** ემთხვევა ზემოთ (Items 3, 9) IEC 62271-102-ბაზისზე დადგენილ იმავე applicability-პირობებს — ეს ორმხრივი შესაბამისობა შემთხვევითი არ არის, ვინაიდან ორივე ფენა ერთსა და იმავე ფიზიკურ მოწყობილობას აღწერს.
