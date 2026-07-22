Document title: Checklist — Protection Relay (IEC 60255-1 / IEC 60255-27 basis)
Version: 2.0 — Conditional Requirement logic applied
Last updated: 2026-07-10
Status: Preliminary — checklist basis only, not final IEC/GOST compliance proof
Owner / Prepared by: David Dvalishvili / Claude

---

# Checklist — Protection Relay (IEC 60255-1 / IEC 60255-27 basis)

მომზადებულია [`checklist_template.md`](checklist_template.md)-ის სტრუქტურით (Version 2.0), [`iec_60255_source_note.md`](../source_cards/iec_60255_source_note.md) და [`iec_60255_27_source_note.md`](../source_cards/iec_60255_27_source_note.md)-ის საფუძველზე. **Preliminary — არა საბოლოო compliance-ის მტკიცებულება.** ეს checklist ეხება relay-ის **საერთო/common-requirements + product-safety** ასპექტებს — **არ** ფარავს კონკრეტული დაცვის ფუნქციების (overcurrent, earth fault, trip logic coordination) **სიღრმისეულ** შეფასებას/კოორდინაციას, რომელიც Relay Protection Agent-ის ცალკე scope-ია, per `CLAUDE.md` §5.2, §27. ახალი (Version 2.0) item-ები (16–22) ამოწმებენ მხოლოდ **funkciebis სია/completeness/applicability**-ს (რომელი ფუნქციებია საერთოდ მოთხოვნილი და relay-ის დატაშითი ადასტურებს თუ არა მხარდაჭერას) — **არა** trip-logic-ის ან coordination-ის სისწორეს.

**⚠ Version 2.0 — Conditional Requirement Logic Applied + Graded Risk Escalation + New Applicability-Scope Items.** ეს არის მეოთხე checklist ([`iec_62271_102_disconnector_earthing_switch_checklist.md`](iec_62271_102_disconnector_earthing_switch_checklist.md), [`iec_62271_1_general_switchgear_requirements_checklist.md`](iec_62271_1_general_switchgear_requirements_checklist.md), [`iec_61869_2_current_transformer_checklist.md`](iec_61869_2_current_transformer_checklist.md)-ის შემდეგ), რომელიც განახლდა [`checklist_template.md`](checklist_template.md) Version 2.0-ის მიხედვით. **Items 5, 10** გახდა ფორმალურად **Conditional: Yes**. **Items 4, 7, 11** მიიღეს **გრადუირებული Risk Escalation**. **დაემატა 7 ახალი item (16–22)** — protection function scope, trip circuit supervision, CT/VT input compatibility, arc protection, event recorder — **ნუმერაცია 1–15 უცვლელია** (backward-compatibility). სრული დასაბუთება იხ. [`iec_60255_protection_relay_checklist_conditional_logic_update_report.md`](../../reports/iec_60255_protection_relay_checklist_conditional_logic_update_report.md).

## Equipment / Review Area
protection relay, 10 kV outgoing feeder cubicle-ის ფარგლებში [Source: CLAUDE.md, section 2.3]

**⚠ სანამ Items 1–15 გამოყენებული იქნება, რეკომენდირებულია ჯერ Item 16-ის (Relay existence/requirement gate) შემოწმება.**

---

## Check Items

### 1. Protection relay identification
**Why it matters:** კონკრეტული model/firmware-ის იდენტიფიცირება ყველა შემდგომი შემოწმებისთვის.
**Conditional Requirement:** No — CT-ის/relay-ის არსებობის შემთხვევაში (იხ. Item 16), ეს ყოველთვის საჭიროა.
**Supplier evidence required:** datasheet, model/firmware number.
**Related section reference:** General/Scope (ზოგადი)
**Risk if missing:** ვერიფიკაციის შეუძლებლობა.
**Status options:** OK / Missing Data / Clarification Required / Engineer Review Required / Critical Risk / Not Applicable / Not Checked
**Confidence rule:** High — datasheet + nameplate.
**Engineer Review Required trigger:** model/firmware ბუნდოვანია დოკუმენტებს შორის.

### 2. Auxiliary supply
**Why it matters:** relay-ის ელექტრომომარაგების საკმარისობა cubicle-ის DC/AC წყაროსთან.
**Conditional Requirement:** No.
**Supplier evidence required:** datasheet (voltage range, current consumption).
**Related section reference:** Ratings (IEC 60255-1 ზოგადი)
**Risk if missing:** relay-ის არასწორი ფუნქციონირება.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High.
**Engineer Review Required trigger:** auxiliary supply cubicle-ის control voltage-თან შეუსაბამო.

### 3. Binary inputs
**Why it matters:** cubicle-ის status/control სიგნალების მიღების საკმარისობა.
**Conditional Requirement:** No — ბაზისური I/O capacity ყოველთვის საჭიროა შესამოწმებელი; კონკრეტული საჭირო რაოდენობა დამოკიდებულია Items 17/18/20/21-ის conditional ფუნქციებზე.
**Supplier evidence required:** I/O list, datasheet.
**Related section reference:** Design/construction (ზოგადი)
**Risk if missing:** ფუნქციური შეზღუდვა.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Engineer Review Required trigger:** საჭირო binary input-ების რაოდენობა relay-ის capacity-ს აღემატება.

### 4. Output contacts
**Why it matters:** trip/close/alarm სიგნალების გაცემის საკმარისობა.
**Conditional Requirement:** No.
**Supplier evidence required:** I/O list, datasheet, contact rating.
**Related section reference:** Design/construction
**Risk if missing — გრადუირებული ესკალაცია (Version 2.0 correction, per [`iec_62271_102_item10_earthing_continuity_risk_correction_report.md`](../../reports/iec_62271_102_item10_earthing_continuity_risk_correction_report.md)-ის პრეცედენტი):**
- **Missing Data:** I/O list/datasheet არ არსებობს.
- **Clarification Required:** contact rating ბუნდოვანია, ან I/O list-სა და wiring drawing-ს შორის შეუსაბამობაა.
- **Engineer Review Required:** I/O list მოცემულია, მაგრამ breaker-ის trip coil მოთხოვნასთან შედარება ჯერ არ ჩატარებულა.
- **Critical Risk:** **მხოლოდ** დადასტურებული შემთხვევაში — trip output contact rating ცხადადაა არასაკმარისი breaker-ის trip coil-ის მოთხოვნასთან შედარებით, ან trip circuit-ის უწყვეტობა დამოუკიდებლად უარყოფილია.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — I/O list + wiring drawing.
**Escalation Rule:** N/A — Unconditional, გრადუირებული severity.
**Responsible Party for Applicability Decision:** N/A — Unconditional.
**Engineer Review Required trigger:** trip output contact rating breaker-ის trip coil მოთხოვნას არ შეესაბამება, ან შედარება ჯერ არ ჩატარებულა.

### 5. Communication ports/protocols
**Why it matters:** SCADA/RTU ინტეგრაციის საკმარისობა — **მხოლოდ** იმ შემთხვევაში, თუ SCADA/remote monitoring ინტეგრაცია ამ პროექტისთვის საერთოდ სჭირდება.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** საჭიროა **მხოლოდ**, თუ company technical assignment/SLD ითხოვს SCADA/RTU ინტეგრაციას ამ feeder-ისთვის (იგივე Condition-ოჯახი, რაც [`iec_62271_102_disconnector_earthing_switch_checklist.md`](iec_62271_102_disconnector_earthing_switch_checklist.md)-ის Item 9/GOST-N.6-ში — auxiliary contacts). თუ cubicle local-only მართვისთვისაა, ეს მოთხოვნა შეიძლება არ ვრცელდებოდეს.
**If Required, Evidence Needed:** datasheet (protocol: Modbus/IEC 60870-5-104 და ა.შ.).
**If Not Required, Acceptable Status:** **Not Applicable** — მისაღებია, თუ ცხადადაა დადასტურებული, რომ ეს cubicle local-only მართვისთვისაა.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** ზოგადი (`CLAUDE.md` §19 basic-level scope)
**Risk if missing:** SCADA ინტეგრაციის შეზღუდვა, **მხოლოდ თუ** ეს ფუნქცია საჭიროა.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Escalation Rule:** გაურკვეველია, საჭიროებს თუ არა SCADA ინტეგრაციას — **Clarification Required** ან **Engineer Review Required**, არა ავტომატური Not Applicable ან Critical Risk.
**Responsible Party for Applicability Decision:** **Client / Designer**.
**Engineer Review Required trigger:** მოთხოვნილი protocol relay-ს არ გააჩნია (დადასტურებული საჭიროებისას).

### 6. Environmental requirements
**Why it matters:** cubicle-ის საექსპლუატაციო გარემოსთან თავსებადობა.
**Conditional Requirement:** No.
**Supplier evidence required:** datasheet (temperature/humidity range).
**Related section reference:** Normal service conditions (IEC 60255-1 ზოგადი)
**Risk if missing:** Low–Medium.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High.
**Engineer Review Required trigger:** environmental range პროექტის მოთხოვნაზე ვიწროა.

### 7. Electrical safety requirements
**Why it matters:** relay-ის corpus-ის dielectric/insulation უსაფრთხოება.
**Conditional Requirement:** No.
**Supplier evidence required:** type test report (IEC 60255-27 basis).
**Related section reference:** Electrical safety requirements (IEC 60255-27 ზოგადი)
**Risk if missing — გრადუირებული ესკალაცია:**
- **Missing Data:** safety test report საერთოდ არ არსებობს.
- **Clarification Required:** report არსებობს, მაგრამ model/firmware ბუნდოვანია.
- **Engineer Review Required:** report model-სპეციფიკური არაა, ან relay-ის high-energy circuit-თან პირდაპირი წვდომის ფაქტი ჯერ არ არის დაზუსტებული.
- **Critical Risk:** **მხოლოდ** დადასტურებული შემთხვევაში — relay-ს **დადასტურებულად** აქვს პირდაპირი წვდომა high-energy circuit-ზე **და** model-სპეციფიკური safety evidence არ არსებობს.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — model-სპეციფიკური safety test report.
**Escalation Rule:** N/A — Unconditional, გრადუირებული severity.
**Responsible Party for Applicability Decision:** N/A — Unconditional.
**Engineer Review Required trigger:** safety test evidence საერთოდ არ არსებობს, ან high-energy-წვდომის ფაქტი დაუდასტურებელია.

### 8. EMC/safety evidence
**Why it matters:** ინდუსტრიულ გარემოში (switchgear-ის სიახლოვეს) სტაბილური ფუნქციონირება.
**Conditional Requirement:** No.
**Supplier evidence required:** EMC type test report.
**Related section reference:** EMC requirements (ზოგადი)
**Risk if missing:** relay-ის false trip/no-trip რისკი ინდუსტრიული ხმაურის გამო.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Engineer Review Required trigger:** EMC evidence არ არსებობს switchgear-ის ახლოს ინსტალაციისთვის.

### 9. Manuals
**Why it matters:** სწორი ინსტალაცია/configuration/მოვლა.
**Conditional Requirement:** No.
**Supplier evidence required:** installation/configuration/maintenance manual.
**Related section reference:** ზოგადი
**Risk if missing:** Low–Medium.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — სრული manual მოწოდებულია.
**Engineer Review Required trigger:** manual არ არსებობს ან არასრულია.

### 10. Settings files
**Why it matters:** relay-ის კონკრეტული configuration-ის ჩანაწერი/backup — ჩვეულებრივ, **commissioning-ეტაპის** მოთხოვნაა, არა ტექნიკური offer-ის ეტაპის.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** Settings file/backup საჭიროა **მხოლოდ**, თუ პროექტის O&M/commissioning პრაქტიკა ცხადად ითხოვს configuration backup-ს ამ ეტაპზე (ჩვეულებრივ, ეს დეფერირებულია commissioning-ის ეტაპამდე).
**If Required, Evidence Needed:** settings file (თუ ხელმისაწვდომია) ან supplier-ის წერილობითი commitment, რომ commissioning-ის ეტაპზე მიაწვდის.
**If Not Required, Acceptable Status:** **Not Applicable** ან **დეფერირებული** — მისაღებია ტექნიკური offer-ის ეტაპზე, თუ commissioning-ეტაპზე მიწოდება არ არის უარყოფილი.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** N/A (`CLAUDE.md` §22, "future/optional concern")
**Risk if missing:** Low ამ ეტაპზე — future/optional, **გარდა იმ შემთხვევისა**, თუ supplier ცხადად უარყოფს commissioning-ეტაპზე მიწოდებას.
**Status options:** იხ. ზემოთ.
**Confidence rule:** N/A.
**Escalation Rule:** N/A ამ ეტაპზე — commissioning-ეტაპამდე დეფერირება სტანდარტული პრაქტიკაა.
**Responsible Party for Applicability Decision:** **Client / Designer** (commissioning practice-ის მიხედვით).
**Engineer Review Required trigger:** არ გამოიყენება ამ ეტაპზე, გარდა commissioning-mandatory-ის ცხადი უარყოფისა.

### 11. Trip matrix
**Why it matters:** დაცვის ფუნქცია → trip target-ის ლოგიკური რუკა.
**Conditional Requirement:** No.
**Supplier evidence required:** trip matrix document.
**Related section reference:** N/A — ეს სცილდება IEC 60255-1/-27-ის pure common/safety scope-ს, საჭიროა **Relay Protection Agent**-ის ჩართვა.
**Risk if missing — გრადუირებული ესკალაცია:**
- **Missing Data:** trip matrix document საერთოდ არ არსებობს.
- **Engineer Review Required — ყოველთვის:** trip matrix-ის სიღრმისეული შეფასება **ყოველთვის** საჭიროებს Relay Protection Agent-ს, დოკუმენტის არსებობის მიუხედავად — ეს ტრიგერი უცვლელია.
- **Critical Risk:** **მხოლოდ**, თუ Relay Protection Agent-ის მიმოხილვამ **დაადასტურა** კონკრეტული trip logic-ის ხარვეზი (მაგ. კონკრეტულ fault-ტიპს არ აქვს დადასტურებული trip target) — **არა** ავტომატურად trip matrix-ის უბრალო არარსებობაზე.
**Status options:** იხ. ზემოთ.
**Confidence rule:** N/A ამ checklist-ის ფარგლებში.
**Escalation Rule:** N/A — ყოველთვის Engineer Review Required (Relay Protection Agent).
**Responsible Party for Applicability Decision:** N/A — Unconditional, ყოველთვის საჭირო.
**Engineer Review Required trigger:** ავტომატურად — trip matrix-ის სიღრმისეული შეფასება ყოველთვის საჭიროებს Relay Protection Agent-ს.

### 12. I/O list
**Why it matters:** ყველა binary input/output-ის ცალსახა დანომვრა/დანიშნულება.
**Conditional Requirement:** No.
**Supplier evidence required:** relay I/O list document.
**Related section reference:** Design/construction (ზოგადი)
**Risk if missing:** wiring/cross-check შეუძლებლობა.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — სრული I/O list.
**Engineer Review Required trigger:** I/O list საერთოდ არ არსებობს.

### 13. Terminal diagram consistency
**Why it matters:** relay-ის ტერმინალების cubicle-ის terminal diagram-თან თანმიმდევრულობა.
**Conditional Requirement:** No.
**Supplier evidence required:** terminal diagram, relay-ის wiring-ის მითითებით.
**Related section reference:** ზოგადი (დაკავშირებულია drawing-schematics-review agent-ის workflow-სთან)
**Risk if missing:** wiring შეცდომის რისკი.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — cross-check terminal diagram-სა და relay datasheet-ს შორის.
**Engineer Review Required trigger:** terminal numbering relay datasheet-ს არ ემთხვევა.

### 14. Test evidence (common + safety)
**Why it matters:** IEC 60255-1 (common) და IEC 60255-27 (safety) — ორივე ტიპის ტესტის დამოუკიდებელი დადასტურება.
**Conditional Requirement:** No.
**Supplier evidence required:** type test report(-ები), model-სპეციფიკური.
**Related section reference:** Type tests (ზოგადი, ორივე დოკუმენტიდან)
**Risk if missing:** მაღალი პრიორიტეტის Missing Data.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — model-სპეციფიკური; Low — family-donis.
**Engineer Review Required trigger:** test report family-donისაა, არა model-სპეციფიკური.

### 15. Engineer review trigger — protection function scope
**Why it matters:** კონკრეტული დაცვის ფუნქციების **სიღრმისეული, კოორდინაციული** შეფასება (trip logic, selectivity, settings) **ყოველთვის** საჭიროებს Relay Protection Agent-ის ცალკე მიმოხილვას — ეს checklist მხოლოდ common/safety + Items 16-22-ის completeness/applicability ასპექტებს ფარავს.
**Conditional Requirement:** No.
**Supplier evidence required:** N/A — შიდა rule.
**Related section reference:** N/A (`CLAUDE.md` §5.2, Relay Protection Agent boundary)
**Risk if missing:** N/A.
**Status options:** Rule acknowledged and applied / Not yet applied.
**Confidence rule:** N/A.
**Engineer Review Required trigger:** ეს item ავტომატურად ითხოვს Relay Protection Agent-ის ჩართვას ყოველთვის, როცა "protection relay required" მოთხოვნა ჩნდება ცალკე ფუნქციური scope-ის გარეშე.

---

## Check Items — Applicability/Scope (New, Version 2.0, Items 16–22)

**⚠ ეს item-ები ამოწმებენ მხოლოდ, თუ რომელი ფუნქციები/ინტერფეისებია მოთხოვნილი და დატაშითი ადასტურებს თუ არა მხარდაჭერას — ისინი არ აფასებენ trip-logic-ის სისწორეს ან coordination-ს (Item 15-ის საზღვარი უცვლელია).**

### 16. Relay existence / requirement gate *(new — logical gate, numbered last-section for backward-compatibility)*
**Why it matters:** Items 1–15 ივარაუდებს, რომ protection relay ამ feeder circuit-ისთვის უკვე დადასტურებულია საჭიროდ — ეს item ფორმალურად ადასტურებს ამ დაშვებას.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** Protection relay საჭიროა, თუ company technical assignment/SLD ცალსახად ითხოვს protection ფუნქციას ამ feeder circuit-ისთვის — 10 kV outgoing feeder cubicle-ისთვის ეს თითქმის ყოველთვის მოცემულია (per `CLAUDE.md` §2.3, item 8), მაგრამ ფორმალურად ცალკე დასადასტურებელია.
**If Required, Evidence Needed:** relay model/type ცხადადაა მითითებული SLD-სა და datasheet package-ში — Items 1–15-ის დანარჩენი ნაწილი გამოიყენება.
**If Not Required, Acceptable Status:** **Not Applicable** (მთელი checklist-ისთვის) — მისაღებია მხოლოდ, თუ ცხადადაა დადასტურებული, რომ ამ კონკრეტულ feeder circuit-ს ცალკე protection relay არ სჭირდება (მაგ. სრულად upstream-დაცული).
**Supplier evidence required:** SLD-ის ცალსახა მითითება relay-ის არსებობაზე ამ feeder-ისთვის.
**Related section reference:** N/A — checklist-ის საკუთარი scope-გადამოწმება.
**Risk if missing:** N/A — ეს item განსაზღვრავს, გამოიყენება თუ არა დანარჩენი checklist საერთოდ.
**Status options:** OK / Missing Data / Clarification Required / Engineer Review Required / Critical Risk / Not Applicable / Not Checked
**Confidence rule:** High — SLD-ის ცალსახა მითითება; Low — ივარაუდება ზოგადი cubicle-ტიპიდან.
**Escalation Rule:** გაურკვეველია, სჭირდება თუ არა relay ამ feeder-ს — **Engineer Review Required**, checklist-ის დანარჩენი ნაწილი დროებით შეჩერებული რჩება.
**Responsible Party for Applicability Decision:** **Client / Designer**.
**Engineer Review Required trigger:** relay-ის საჭიროება ამ feeder-ისთვის ჯერ არ არის ცალსახად დადასტურებული SLD-დან/technical assignment-იდან.

### 17. Protection function scope / list (completeness only — not coordination)
**Why it matters:** ადასტურებს, **რომელი** დაცვის ფუნქციები (ANSI კოდები: 50/51 overcurrent, 50N/51N earth fault, 46 negative sequence/unbalance, 49 thermal overload, 27/59 under/over-voltage, 81 frequency, arc protection — თუ გამოყენებადია) მოთხოვნილია company technical assignment/protection philosophy-ის მიხედვით, და დატაშითი ადასტურებს თუ არა ამ ფუნქციების მხარდაჭერას. **არ აფასებს** კონკრეტული ფუნქციის trip-logic-ის/settings-ის სისწორეს — ეს რჩება Item 15-ის/Relay Protection Agent-ის scope-ში.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** კონკრეტული ფუნქციები მოთხოვნილია company technical assignment-ის/protection philosophy-ის მიხედვით — არა ყველა ფუნქცია გამოიყენება ყოველ feeder-ზე (მაგ. 27/59 საჭიროებს VT-ს — იხ. Item 20; 81 იშვიათად სჭირდება outgoing feeder-ს).
**If Required, Evidence Needed:** datasheet ადასტურებს თითოეული მოთხოვნილი ფუნქციის მხარდაჭერას (ANSI კოდის მითითებით).
**If Not Required, Acceptable Status:** **Not Applicable** კონკრეტული ფუნქციისთვის, თუ ის საერთოდ არ არის მოთხოვნილი ამ feeder-ისთვის.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** N/A — completeness-check, არა IEC 60255-ის კონკრეტული სექცია.
**Risk if missing:** **Missing Data** (ფუნქციების სია საერთოდ არ არსებობს) → **Engineer Review Required** (მოთხოვნილი ფუნქციები დადასტურებულია, მაგრამ relay-ის მხარდაჭერა გაურკვეველია) → **Critical Risk** (**მხოლოდ**, თუ დადასტურებულია, რომ უსაფრთხოებრივად კრიტიკული მოთხოვნილი ფუნქცია — მაგ. earth fault protection — **ცხადად არ არის** მხარდაჭერილი relay-ის მიერ).
**Status options:** OK / Missing Data / Clarification Required / Engineer Review Required / Critical Risk / Not Applicable / Not Checked
**Confidence rule:** High — datasheet ცხადად ადასტურებს ANSI კოდების სიას; Low — ზოგადი "protection functions included" ფრაზა დეტალის გარეშე.
**Escalation Rule:** გაურკვეველია, რომელი ფუნქციებია მოთხოვნილი — **Engineer Review Required** (Relay Protection Agent-ის/company technical assignment-ის cross-check).
**Responsible Party for Applicability Decision:** **Client / Designer / Protection Engineer**.
**Engineer Review Required trigger:** მოთხოვნილი ფუნქციების სია დადასტურებული, მაგრამ relay-ის მხარდაჭერა ცალკეულ ფუნქციაზე გაურკვეველია.

### 18. Trip circuit supervision (TCS)
**Why it matters:** trip circuit-ის (52a/b, coil, wiring) უწყვეტობის მონიტორინგი — გავრცელებული, მაგრამ არა უნივერსალური მოთხოვნა.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** საჭიროა **მხოლოდ**, თუ company technical assignment ცხადად ითხოვს trip circuit supervision-ს (ხშირად უფრო მაღალი საიმედოობის პროექტებში, არა ყოველთვის სავალდებულო).
**If Required, Evidence Needed:** TCS ფუნქცია დადასტურებულია relay-ის datasheet-ში/binary I/O განაწილებაში.
**If Not Required, Acceptable Status:** **Not Applicable**.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** N/A — completeness-check.
**Risk if missing:** Missing Data/Engineer Review Required, **თუ** TCS დადასტურებულია საჭიროდ; Critical Risk **იშვიათად**, მხოლოდ პროექტ-სპეციფიკურ, მაღალი საიმედოობის მოთხოვნის შემთხვევაში.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Escalation Rule:** გაურკვეველია, საჭიროებს თუ არა პროექტი TCS-ს — **Clarification Required**.
**Responsible Party for Applicability Decision:** **Client / Designer**.
**Engineer Review Required trigger:** TCS მოთხოვნილია (დადასტურებული), მაგრამ არ არის მოწოდებული.

### 19. CT input compatibility
**Why it matters:** relay-ის CT input rating (1A/5A) და burden უნდა ემთხვეოდეს CT-ის secondary output-ს — **პირდაპირი cross-reference** [`iec_61869_2_current_transformer_checklist.md`](iec_61869_2_current_transformer_checklist.md)-ის Item 6-თან (rated secondary current) და Item 4-თან (burden).
**Conditional Requirement:** No — CT-ზე დაფუძნებული ნებისმიერი protection ფუნქციისთვის (რაც Item 16-ის დადასტურების შემდეგ თითქმის ყოველთვის მოცემულია) ეს ყოველთვის საჭიროა.
**Supplier evidence required:** relay datasheet-ის CT input rating (1A/5A), burden თითოეულ input-ზე.
**Related section reference:** N/A — cross-checklist compatibility check.
**Risk if missing — გრადუირებული ესკალაცია:**
- **Missing Data:** relay-ის CT input rating datasheet-ში არ არის მითითებული.
- **Engineer Review Required:** relay-ის CT input rating მოცემულია, მაგრამ CT checklist-ის (Item 6) rated secondary current-თან cross-check ჯერ არ ჩატარებულა.
- **Critical Risk:** **მხოლოდ** დადასტურებული შემთხვევაში — relay-ის CT input rating **ცხადადაა შეუსაბამო** CT-ის ფაქტობრივ secondary current-თან (მაგ. relay ელოდება 5A input-ს, CT-ს კი 1A secondary აქვს).
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — cross-checked CT checklist-ის Item 6-თან.
**Escalation Rule:** N/A — Unconditional, გრადუირებული severity.
**Responsible Party for Applicability Decision:** N/A — Unconditional.
**Engineer Review Required trigger:** relay-ის CT input rating CT-ის secondary current-თან ჯერ არ არის შედარებული.

### 20. VT input compatibility
**Why it matters:** საჭიროა **მხოლოდ**, თუ voltage-based ფუნქციები (27/59 under/over-voltage, directional, synchro-check) Item 17-ის მიხედვით მოთხოვნილია. **⚠ Coverage note:** ამ Knowledge Base-ში ამჟამად **არ არსებობს** ცალკე VT-checklist (იხ. [`system_maturity_checkpoint_report.md`](../../reports/system_maturity_checkpoint_report.md), coverage gap) — ეს item მხოლოდ VT-input-ის relay-მხრიდან თავსებადობას ამოწმებს, არა VT-ის საკუთარ rating-ს.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** საჭიროა **მხოლოდ**, თუ Item 17-ის მიხედვით voltage-based ფუნქცია დადასტურებულია საჭიროდ **და** VT ხელმისაწვდომია ამ feeder-ის/busbar-ისთვის (ჩვეულებრივ, outgoing feeder-ს ცალკე VT არ სჭირდება — busbar VT ხშირად საზიარო/საკმარისია).
**If Required, Evidence Needed:** relay-ის VT input rating datasheet-ში, VT-ის ხელმისაწვდომობის დადასტურება.
**If Not Required, Acceptable Status:** **Not Applicable** — მისაღებია უმეტესობა outgoing feeder-ისთვის.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** N/A — cross-checklist compatibility check (VT checklist ჯერ არ არსებობს).
**Risk if missing:** Missing Data/Engineer Review Required, **მხოლოდ თუ** voltage-based ფუნქცია დადასტურებულია საჭიროდ.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Escalation Rule:** გაურკვეველია, საჭიროებს თუ არა ეს feeder voltage-based ფუნქციას — **Engineer Review Required**.
**Responsible Party for Applicability Decision:** **Client / Designer / Protection Engineer**.
**Engineer Review Required trigger:** voltage-based ფუნქცია დადასტურებულია საჭიროდ, მაგრამ VT input compatibility არ არის დადასტურებული.

### 21. Arc protection (arc-flash detection)
**Why it matters:** ოპტიკური/სენსორული arc-detection სისტემა სწრაფი trip-ისთვის — მზარდი, მაგრამ არა უნივერსალური მოთხოვნა, ხშირად დაკავშირებული Internal Arc Classification (IAC)-თან.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** საჭიროა **მხოლოდ**, თუ cubicle/project-სპეციფიკაცია ითხოვს arc protection-ს — ხშირად დაკავშირებულია IAC-თან (იხ. [`gost_r_55190_2022_10kv_metal_clad_switchgear_checklist.md`](gost_r_55190_2022_10kv_metal_clad_switchgear_checklist.md), item 18).
**If Required, Evidence Needed:** arc sensor-ის ინტეგრაცია დადასტურებულია, ცალკე trip output/binary input გამოყოფილია.
**If Not Required, Acceptable Status:** **Not Applicable**.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** N/A — cross-checklist (IAC).
**Risk if missing:** Missing Data/Engineer Review Required, **მხოლოდ თუ** IAC/arc protection დადასტურებულია საჭიროდ.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Escalation Rule:** გაურკვეველია, საჭიროა თუ არა IAC/arc protection — **Engineer Review Required** (cross-check cubicle checklist-თან).
**Responsible Party for Applicability Decision:** **Client / Designer**.
**Engineer Review Required trigger:** arc protection დადასტურებულია საჭიროდ, მაგრამ არ არის მოწოდებული.

### 22. Event recorder / disturbance recorder
**Why it matters:** სასარგებლოა fault-ის შემდგომი ანალიზისთვის — ჩვეულებრივ, value-added ფუნქციაა, არა ბაზისური protection-ის მოთხოვნა.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** საჭიროა **მხოლოდ**, თუ company technical assignment ცალკე ითხოვს event/disturbance recording შესაძლებლობას.
**If Required, Evidence Needed:** datasheet ადასტურებს recorder-ის capability-ს, memory depth-ს, sampling rate-ს.
**If Not Required, Acceptable Status:** **Not Applicable**.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** N/A.
**Risk if missing:** Low — ჩვეულებრივ არ არის უსაფრთხოებრივად კრიტიკული.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Escalation Rule:** გაურკვეველია, საჭიროა თუ არა ეს ფუნქცია — **Clarification Required**.
**Responsible Party for Applicability Decision:** **Client / Designer**.
**Engineer Review Required trigger:** იშვიათად საჭირო — მხოლოდ, თუ recorder ცალსახად მოთხოვნილია და საერთოდ არ არსებობს.

---

## Confidence Rule (Overall)
Preliminary წყაროებზე დაფუძნებული checklist — High Confidence ვერცერთ item-ს ვერ მიენიჭება მხოლოდ ამ checklist-ის საფუძველზე.

## Engineer Review Required Trigger (Overall)
Items 4, 7, 11, 15 — უსაფრთხოებრივად/ფუნქციურად კრიტიკული. Item 11 და 15 ავტომატურად საჭიროებენ **Relay Protection Agent**-ის ჩართვას, per `CLAUDE.md` §5.2. **Items 4, 7, 11-ის Critical Risk** ახლა გამოიყენება **მხოლოდ** დადასტურებული, კონკრეტული შეუსაბამობის/ხარვეზის შემთხვევაში (იხ. თითოეული item-ის გრადუირებული ლოგიკა), **არა** ავტომატურად Missing Data-ზე. **Items 5, 10, 16–22-ის Conditional Requirement Logic**-ის მიხედვით, ფუნქციური/ინტერფეისის მოთხოვნები საჭიროა მხოლოდ დადასტურებული ფუნქციური საჭიროების შემდეგ — არასოდეს ავტომატური Not Applicable ან Critical Risk გაურკვეველ ფუნქციურ scope-ზე. **Item 19 (CT input compatibility)** პირდაპირ უკავშირდება [`iec_61869_2_current_transformer_checklist.md`](iec_61869_2_current_transformer_checklist.md)-ის Item 6/4-ს — ეს ორი checklist ერთად უნდა იქნას გამოყენებული, თუ protection relay CT-ზეა დამოკიდებული (რაც თითქმის ყოველთვის ასეა).
