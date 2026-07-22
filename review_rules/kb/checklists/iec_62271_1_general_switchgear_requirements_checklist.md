Document title: Checklist — General Switchgear Common Specifications (IEC 62271-1 basis)
Version: 2.0 — Conditional Requirement logic applied
Last updated: 2026-07-10
Status: Preliminary — checklist basis only, not final IEC compliance proof
Owner / Prepared by: David Dvalishvili / Claude

---

# Checklist — General Switchgear Common Specifications (IEC 62271-1 basis)

მომზადებულია [`checklist_template.md`](checklist_template.md)-ის სტრუქტურით (Version 2.0), [`iec_62271_1_source_note.md`](../source_cards/iec_62271_1_source_note.md)-ის საფუძველზე.

**მნიშვნელოვანი შეზღუდვა:** ეს არის **ზოგადი/საბაზისო (foundation-layer) checklist** — უნდა გამოყენებულ იქნას cubicle-სპეციფიკური checklist-ების (IEC 62271-200, GOST R 55190-2022) **გვერდით**, არა მათ ჩამნაცვლებლად. **Preliminary — არა საბოლოო IEC compliance-ის მტკიცებულება.**

**⚠ Version 2.0 — Conditional Requirement Logic Applied + Graded Risk Escalation.** ეს არის მეორე checklist (პირველის შემდეგ — [`iec_62271_102_disconnector_earthing_switch_checklist.md`](iec_62271_102_disconnector_earthing_switch_checklist.md)), რომელიც განახლდა [`checklist_template.md`](checklist_template.md) Version 2.0-ის მიხედვით. **3 item** (Item 8, 9, 10 — Service conditions, Ambient temperature, Altitude) გახდა ფორმალურად **Conditional: Yes**. დამატებით, [`iec_62271_102_item10_earthing_continuity_risk_correction_report.md`](../../reports/iec_62271_102_item10_earthing_continuity_risk_correction_report.md)-ში დადგენილი **გრადუირებული Risk Escalation** პრინციპი (Missing Evidence ≠ Confirmed Unsafe/Non-Compliant Design) გამოყენებულია **Items 5, 6, 7, 12**-ზეც (short-time/peak withstand current, short-circuit duration, temperature rise) — ეს item-ები რჩება **Unconditional**, მაგრამ Critical Risk აღარ არის ავტომატური, მხოლოდ Missing Data-ზე დაფუძნებული. სრული დასაბუთება იხ. [`iec_62271_1_checklist_conditional_logic_update_report.md`](../../reports/iec_62271_1_checklist_conditional_logic_update_report.md).

## Checklist Title
General Switchgear Common Specifications — IEC 62271-1 basis

## Based On Source Note
[`iec_62271_1_source_note.md`](../source_cards/iec_62271_1_source_note.md)

## Equipment / Review Area
switchgear / cubicle (ზოგადი, ყველა 62271-ოჯახის მოწყობილობისთვის საერთო ბაზისი) [Source: CLAUDE.md, section 2.1–2.3]

**Internal arc classification (IAC) — scope note:** ეს foundation-layer checklist **არ შეიცავს** ცალკე IAC item-ს — IAC არის cubicle-სპეციფიკური მოთხოვნა, დაფარულია [`gost_r_55190_2022_10kv_metal_clad_switchgear_checklist.md`](gost_r_55190_2022_10kv_metal_clad_switchgear_checklist.md)-ის item 18-ში (რომელიც უკვე Not Applicable/Conditional ხასიათისაა). თუ IAC პროექტს სჭირდება, გამოყენებულ იქნას ის checklist, არა ეს.

---

## Check Items

### 1. Rated voltage / system voltage compatibility
**Why it matters:** ძირითადი ძაბვის კლასის დადასტურება ქსელის მოთხოვნასთან.
**Conditional Requirement:** No — ყოველთვის საჭირო, პროექტის მიუხედავად.
**Supplier evidence required:** დატაშითი (rated voltage, highest voltage for equipment).
**Related section reference:** Section 4 (Ratings)
**Risk if missing:** ძაბვის კლასის შეუსაბამობა.
**Status options:** OK / Missing Data / Clarification Required / Engineer Review Required / Critical Risk / Not Applicable / Not Checked
**Confidence rule:** High — datasheet მკაფიო მითითებით; Low — ზოგადი catalogue.
**Engineer Review Required trigger:** rated/highest voltage ბუნდოვანია ან რამდენიმე კლასი მოიცავს დაზუსტების გარეშე.

### 2. Rated insulation level
**Why it matters:** dielectric withstand-ის საკმარისობა.
**Conditional Requirement:** No.
**Supplier evidence required:** dielectric type test report.
**Related section reference:** Section 4; Section 6.2 (Dielectric tests)
**Risk if missing:** flashover რისკი.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — type test report; Low — datasheet-ის მარტო მითითება.
**Engineer Review Required trigger:** insulation level მითითებული არ არის ან test report არ ემთხვევა rated voltage-ს.

### 3. Rated frequency
**Why it matters:** 50/60 Hz თავსებადობა.
**Conditional Requirement:** No.
**Supplier evidence required:** დატაშითი.
**Related section reference:** Section 4.3
**Risk if missing:** Low, მაგრამ დასადასტურებელი.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — პირდაპირ მითითებული.
**Engineer Review Required trigger:** იშვიათად საჭირო.

### 4. Rated normal current
**Why it matters:** დატვირთვის საკმარისობა.
**Conditional Requirement:** No.
**Supplier evidence required:** დატაშითი + temperature-rise test report.
**Related section reference:** Section 4.4
**Risk if missing:** overheating რისკი.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — test report + datasheet ორივე.
**Engineer Review Required trigger:** rated current declared მაგრამ temperature-rise evidence არ არსებობს.

### 5. Rated short-time withstand current
**Why it matters:** fault-ის დროს მექანიკური/თერმული გამძლეობა — ეს არის ერთ-ერთი ყველაზე უსაფრთხოებრივად კრიტიკული switchgear-ის რეიტინგი.
**Conditional Requirement:** No — ეს ბაზისური რეიტინგი ყოველთვის საჭიროა, პროექტის მიუხედავად.
**Supplier evidence required:** type test report, duration-ის ჩათვლით.
**Related section reference:** Section 4.5; Section 6.6
**Risk if missing — გრადუირებული ესკალაცია (Version 2.0 correction, per [`iec_62271_102_item10_earthing_continuity_risk_correction_report.md`](../../reports/iec_62271_102_item10_earthing_continuity_risk_correction_report.md)-ის პრეცედენტი):**
- **Missing Data:** ღირებულება/test report საერთოდ არ არსებობს, პროექტის ფაქტობრივ fault-level მოთხოვნასთან შედარება ჯერ არ ჩატარებულა (ან პროექტის მოთხოვნაც არ არის ჯერ დაზუსტებული) → **Missing Data**, მაღალი პრიორიტეტის.
- **Clarification Required:** ღირებულება მოცემულია, მაგრამ datasheet-სა და test report-ს შორის შეუსაბამობაა, ან ბუნდოვანია.
- **Engineer Review Required:** ღირებულება მოცემულია, მაგრამ პროექტის ფაქტობრივი fault-level მოთხოვნა ჯერ არ არის დაზუსტებული — შედარება ვერ ხერხდება.
- **Critical Risk:** **მხოლოდ** მაშინ, როცა **ცხადადაა დადასტურებული**, რომ მოწოდებული short-time withstand current **ნაკლებია** პროექტის ფაქტობრივ, დადასტურებულ fault-level მოთხოვნაზე.
**Status options:** OK / Missing Data / Clarification Required / Engineer Review Required / Critical Risk / Not Applicable / Not Checked
**Confidence rule:** High — model-სპეციფიკური test report + პროექტის fault-level მოთხოვნის დამოუკიდებელი დადასტურება ორივე; Medium — მხოლოდ ერთი; Low — ვერცერთი.
**Escalation Rule:** N/A — Unconditional item, მაგრამ Risk Level-ის დადგენა გრადუირებულია (იხ. ზემოთ) — ეს არ არის applicability-conditional ესკალაცია, ეს არის severity-გრადაცია.
**Responsible Party for Applicability Decision:** N/A — Unconditional.
**Engineer Review Required trigger:** ავტომატურად, თუ evidence ან პროექტის fault-level მოთხოვნა საბოლოო ეტაპზეც არ არსებობს/არ არის შედარებული.

### 6. Rated peak withstand current
**Why it matters:** electrodynamic ძალების გამძლეობა — უსაფრთხოებრივად კრიტიკული, დაკავშირებული Item 5-თან.
**Conditional Requirement:** No.
**Supplier evidence required:** type test report ან გამოთვლა.
**Related section reference:** Section 4.6; Section 6.6
**Risk if missing — გრადუირებული ესკალაცია (იგივე პრინციპი, რაც Item 5-ში):**
- **Missing Data:** ღირებულება/test report არ არსებობს, შედარება ჯერ არ ჩატარებულა → **Missing Data**.
- **Clarification Required:** ბუნდოვანი ან შეუსაბამო მონაცემი.
- **Engineer Review Required:** ღირებულება მოცემულია, მაგრამ short-time withstand current-თან (Item 5) თანმიმდევრულობა (Section 6.6-ის ერთიანი ტესტირების ლოგიკის მიხედვით) ვერ დასტურდება.
- **Critical Risk:** **მხოლოდ** დადასტურებული შეუსაბამობის შემთხვევაში — peak withstand current ცხადადაა არასაკმარისი პროექტის fault-level მოთხოვნასთან შედარებით, ან წინააღმდეგობაშია Item 5-ის დადასტურებულ მნიშვნელობასთან.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — დამოუკიდებელი test report; Medium — გამოთვლაზე დაფუძნებული; Low — არცერთი.
**Escalation Rule:** N/A — Unconditional, გრადუირებული severity (იხ. ზემოთ).
**Responsible Party for Applicability Decision:** N/A — Unconditional.
**Engineer Review Required trigger:** short-time withstand current დადასტურებულია, peak — არა (ან პირიქით).

### 7. Short-circuit duration
**Why it matters:** withstand current-ის duration-ის სისწორე (მაგ. 1s/3s) — Item 5/6-ის მნიშვნელობების ვალიდურობის საფუძველი.
**Conditional Requirement:** No.
**Supplier evidence required:** type test report duration-ის მითითებით.
**Related section reference:** Section 4.7
**Risk if missing — გრადუირებული ესკალაცია:**
- **Missing Data:** duration საერთოდ არ არის მითითებული test report-ში.
- **Clarification Required:** duration ბუნდოვანია ან წყაროებს შორის განსხვავდება.
- **Engineer Review Required:** duration მოცემულია, მაგრამ პროექტის ფაქტობრივი მოთხოვნა (მაგ. 1s vs 3s) ჯერ არ არის დაზუსტებული.
- **Critical Risk:** **მხოლოდ** მაშინ, თუ duration **ცხადადაა** პროექტის დადასტურებულ მოთხოვნაზე ნაკლები.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — test report-ში ცალსახად მითითებული და პროექტის მოთხოვნასთან შედარებული.
**Escalation Rule:** N/A — Unconditional, გრადუირებული severity.
**Responsible Party for Applicability Decision:** N/A — Unconditional.
**Engineer Review Required trigger:** duration ბუნდოვანია ან პროექტის მოთხოვნასთან შედარება ვერ ხერხდება.

### 8. Service conditions
**Why it matters:** ინსტალაციის რეალურ გარემოსთან შესაბამისობა — IEC 62271-1 თავად განასხვავებს "normal" და "special" service conditions-ს (Section 2), სადაც special conditions-ის მტკიცებულება მხოლოდ მაშინ არის საჭირო, თუ საიტის რეალური გარემო სცილდება ჩვეულებრივ ფარგლებს.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** "Special service conditions"-ის (არაჩვეულებრივი გარემო — კოროზიული ატმოსფერო, გადამეტებული მტვერი/ტენიანობა, სეისმური მოთხოვნები და ა.შ.) დამატებითი evidence საჭიროა **მხოლოდ**, თუ პროექტის ტექნიკური მოთხოვნა/site survey ცხადად ადასტურებს ასეთი არაჩვეულებრივი პირობის არსებობას. თუ საიტი სტანდარტულ (normal) ფარგლებშია, ეს დამატებითი მოთხოვნა არ ვრცელდება — მხოლოდ ჩვეულებრივი, ბაზისური datasheet-ის დონის დადასტურება საკმარისია.
**If Required, Evidence Needed:** environmental compliance statement/test evidence, კონკრეტული special condition-ის მიმართ (მაგ. corrosion-resistance certificate).
**If Not Required, Acceptable Status:** **Not Applicable** (special-conditions ფენისთვის) — მისაღებია, თუ site survey/technical assignment ცხადად ადასტურებს სტანდარტულ გარემოს.
**Supplier evidence required:** ბაზისურად — datasheet; special conditions დადასტურების შემთხვევაში — იხ. "If Required, Evidence Needed".
**Related section reference:** Section 2 (Normal and special service conditions)
**Risk if missing:** Medium — გარემო შეუთავსებლობის რისკი, **მხოლოდ** თუ special conditions რეალურად ვრცელდება ამ საიტზე.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium — ჩვეულებრივ catalogue-დონეზეა მითითებული.
**Escalation Rule:** თუ გაურკვეველია, საიტის გარემო სტანდარტულია თუ special — **Clarification Required** (site survey-ის მოთხოვნა), **არა** ავტომატური Not Applicable ან Engineer Review Required.
**Responsible Party for Applicability Decision:** **Client / Designer**.
**Engineer Review Required trigger:** special service conditions დადასტურებულია საჭიროდ, მაგრამ supplier-ის მტკიცებულება არ არსებობს.

### 9. Ambient temperature range
**Why it matters:** temperature-rise ტესტის ვალიდურობის საფუძველი — ე.წ. extended/non-standard ambient temperature range-ის დამატებითი evidence საჭიროა მხოლოდ იმ შემთხვევაში, თუ საიტის რეალური კლიმატი სცილდება სტანდარტულ დიაპაზონს.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** Extended/non-standard ambient temperature evidence (მაგ. -25°C-ზე დაბალი ან +50°C-ზე მაღალი) საჭიროა **მხოლოდ**, თუ პროექტის საიტის ფაქტობრივი კლიმატური მონაცემები ცხადადაა სტანდარტული ტიპური ფარგლების (დაახლ. -5°C…+40°C) მიღმა. ბაზისური, სტანდარტული დიაპაზონის დადასტურება (datasheet-ის დონეზე) რჩება ყოველთვის საჭირო, ეს ცალკე, Unconditional ბაზისური შემოწმებაა.
**If Required, Evidence Needed:** extended-range type test evidence ან მწარმოებლის ცალკე declaration.
**If Not Required, Acceptable Status:** **Not Applicable** (extended-range ფენისთვის) — მისაღებია, თუ საიტის კლიმატი დადასტურებულია სტანდარტულ ფარგლებში.
**Supplier evidence required:** ბაზისურად — datasheet, ambient temperature დიაპაზონი; extended-range confirm-ის შემთხვევაში — იხ. "If Required".
**Related section reference:** Section 2
**Risk if missing:** Low–Medium ბაზისურ დონეზე; Medium–High, **მხოლოდ თუ** საიტი ცხადადაა extended-range-ში და evidence არ არსებობს.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — მკაფიო დიაპაზონი მითითებული და საიტის კლიმატთან შედარებული.
**Escalation Rule:** გაურკვეველია, საიტის კლიმატი სტანდარტულია თუ extended — **Clarification Required**.
**Responsible Party for Applicability Decision:** **Client / Designer** (site survey-ის საფუძველზე).
**Engineer Review Required trigger:** პროექტის ტემპერატურის დიაპაზონი დადასტურებულია, რომ სცილდება სტანდარტულ ზღვარს, და correction/extended evidence არ არსებობს.

### 10. Altitude
**Why it matters:** dielectric performance-ზე გავლენა მაღალ სიმაღლეზე — ეს item-ი უკვე ორიგინალურადაც შეიცავდა ნაწილობრივ conditional ენას ("Not Applicable, თუ altitude სტანდარტულ ფარგლებშია") — ეს ახლა ფორმალიზებულია.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** Altitude correction factor-ის evidence საჭიროა **მხოლოდ**, თუ საიტის ფაქტობრივი altitude ≥1000m (IEC 62271-1-ის სტანდარტული ბაზისური ზღვარი).
**If Required, Evidence Needed:** altitude correction factor-ის დადასტურება (dielectric/thermal performance-ის კორექციით).
**If Not Required, Acceptable Status:** **Not Applicable** — მისაღებია, თუ საიტის altitude <1000m.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** Section 2
**Risk if missing:** Low, თუ altitude სტანდარტულ ფარგლებშია (ანუ საერთოდ Not Applicable); Medium–High, **მხოლოდ თუ** altitude ≥1000m და correction factor არ არსებობს.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Escalation Rule:** გაურკვეველია, საიტის altitude ≥1000m არის თუ არა — **Clarification Required**, არა ავტომატური Not Applicable.
**Responsible Party for Applicability Decision:** **Client / Designer**.
**Engineer Review Required trigger:** site altitude ≥1000m დადასტურებულია და correction factor არ არის მოწოდებული.

### 11. Indoor/outdoor application
**Why it matters:** ინსტალაციის ტიპთან კონსტრუქციული შესაბამისობა.
**Conditional Requirement:** No — indoor/outdoor დანიშნულების დადგენა ყოველთვის საჭიროა (ეს ფაქტობრივი მახასიათებელია, არა project-scope-ზე დამოკიდებული ოფცია).
**Supplier evidence required:** datasheet, GA drawing.
**Related section reference:** Section 2; Section 5.14 (Creepage distances)
**Risk if missing:** Medium.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — GA drawing + explicit designation.
**Engineer Review Required trigger:** indoor/outdoor დანიშნულება ბუნდოვანია ან პროექტის მოთხოვნას არ ემთხვევა.

### 12. Temperature rise limits and evidence
**Why it matters:** rated current-ის რეალურ თერმულ საკმარისობასთან დაკავშირება.
**Conditional Requirement:** No.
**Supplier evidence required:** temperature-rise type test report.
**Related section reference:** Section 6.5
**Risk if missing — გრადუირებული ესკალაცია:**
- **Missing Data:** test report საერთოდ არ არსებობს.
- **Clarification Required:** test report არსებობს, მაგრამ ეხება განსხვავებულ configuration-ს/model-ს ცალსახად დაუზუსტებლად.
- **Engineer Review Required:** test report ეხება family-donis კონფიგურაციას, მოდელ-სპეციფიკური არაა, და ეს განსხვავება უსაფრთხოებრივად რელევანტურია.
- **Critical Risk:** **მხოლოდ**, თუ ცხადადაა დადასტურებული, რომ temperature-rise მნიშვნელობა აღემატება დასაშვებ ზღვარს რეალურ დატვირთვის პირობებში.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — model-სპეციფიკური test report.
**Escalation Rule:** N/A — Unconditional, გრადუირებული severity.
**Responsible Party for Applicability Decision:** N/A — Unconditional.
**Engineer Review Required trigger:** temperature-rise report არ არსებობს ან ეხება განსხვავებულ configuration-ს.

### 13. Dielectric/type test evidence (overall)
**Why it matters:** ძირითადი რეიტინგების დამოუკიდებელი დადასტურება.
**Conditional Requirement:** No.
**Supplier evidence required:** type test report(-ები), model-სპეციფიკური.
**Related section reference:** Section 6 (Type tests, 6.1–6.11)
**Risk if missing:** მაღალი პრიორიტეტის Missing Data.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — სრული test report set; Low — ნაწილობრივი.
**Engineer Review Required trigger:** test report family-სთვისაა, არა კონკრეტული მოდელისთვის.

### 14. Routine test evidence
**Why it matters:** კონკრეტული მიწოდებული ერთეულის ხარისხის დადასტურება.
**Conditional Requirement:** No.
**Supplier evidence required:** routine test report, serial number-ით.
**Related section reference:** Section 7 (Routine tests, 7.1–7.5)
**Risk if missing:** Medium–High.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — unit-სპეციფიკური report.
**Engineer Review Required trigger:** routine test report საერთოდ არ არსებობს.

### 15. Nameplate information
**Why it matters:** მოწყობილობის იდენტიფიკაცია და cross-check.
**Conditional Requirement:** No.
**Supplier evidence required:** nameplate ფოტო/drawing.
**Related section reference:** Section 5.10 (Nameplates)
**Risk if missing:** Low–Medium.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — ფაქტობრივი ფოტო.
**Engineer Review Required trigger:** nameplate მონაცემები ეწინააღმდეგება datasheet-ს.

### 16. Documentation completeness
**Why it matters:** tender/enquiry ეტაპზე საჭირო სრული ინფორმაციის დადასტურება.
**Conditional Requirement:** No.
**Supplier evidence required:** ზემოთ ჩამოთვლილი დოკუმენტების პაკეტი.
**Related section reference:** Section 9 (Information to be given with enquiries, tenders and orders)
**Risk if missing:** დამოუკიდებელი ვერიფიკაციის შეზღუდვა.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — სრული პაკეტი; Low — ფრაგმენტული.
**Engineer Review Required trigger:** დოკუმენტაცია მუდმივად ვერ მოწოდდება.

### 17. Deviations from standard service conditions
**Why it matters:** non-standard გარემო/ოპერაციული პირობების იდენტიფიცირება — დაკავშირებულია Item 8/9/10-ის Conditional determinations-თან.
**Conditional Requirement:** No — deviation list-ის მოთხოვნა (თუნდაც ცარიელი) ყოველთვის საჭიროა, per `CLAUDE.md` §16.
**Supplier evidence required:** deviation list, per `CLAUDE.md` §16.
**Related section reference:** Section 2; Section 8 (Guide to selection)
**Risk if missing:** დაუდასტურებელი გადახრები — **არა ავტომატური Critical Risk**. თუ deviation list საერთოდ არ არსებობს → Missing Data. თუ deviation იდენტიფიცირებულია, მაგრამ მისი ტექნიკური რისკი არ არის შეფასებული → Clarification Required ან Engineer Review Required (იხ. ტრიგერი). Critical Risk **მხოლოდ** მაშინ, თუ იდენტიფიცირებული deviation თავად უსაფრთხოებრივად კრიტიკულ პარამეტრს ეხება (მაგ. short-time withstand current-ის დაქვეითება) და დადასტურებულია, რომ პროექტის მოთხოვნას არ აკმაყოფილებს.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Engineer Review Required trigger:** deviation გამოვლენილია, მაგრამ ტექნიკური რისკი არ არის შეფასებული.

### 18. Supplier evidence traceability
**Why it matters:** ყოველი claim-ი უნდა იყოს კონკრეტულ დოკუმენტთან/მოდელთან მიბმული.
**Conditional Requirement:** No.
**Supplier evidence required:** model/serial number cross-reference ყველა წარმოდგენილ დოკუმენტში.
**Related section reference:** ზოგადი, ეფუძნება Section 6/7/9-ის მოთხოვნებს ერთობლივად.
**Risk if missing:** დოკუმენტები შეიძლება ეხებოდეს სხვა მოდელს/კონფიგურაციას.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — ყველა დოკუმენტში ერთი და იგივე model/serial number.
**Engineer Review Required trigger:** model/serial mismatch აღმოჩენილია დოკუმენტებს შორის.

### 19. Final engineer review requirement (missing-data risk escalation)
**Why it matters:** უსაფრთხოებრივად მნიშვნელოვანი Missing Data არ უნდა დარჩეს დაუმუშავებელი — **მაგრამ** ეს არ ნიშნავს ავტომატურ Critical Risk-ს ყოველ Missing Data-ზე (იხ. Items 5, 6, 7, 12-ის გრადუირებული ლოგიკა Version 2.0-ის შემდეგ).
**Conditional Requirement:** No — ეს არის შიდა rule-item, ყოველთვის აქტიური.
**Supplier evidence required:** N/A — შიდა rule.
**Related section reference:** ეფუძნება `CLAUDE.md` §10.1, §28.
**Risk if missing:** N/A.
**Status options:** Rule acknowledged and applied / Not yet applied.
**Confidence rule:** N/A.
**Escalation Rule:** N/A — Unconditional meta-rule.
**Responsible Party for Applicability Decision:** N/A — Unconditional.
**Engineer Review Required trigger:** ნებისმიერი უსაფრთხოებრივად მნიშვნელოვანი item (5, 6, 7, 12), რომელიც რჩება Missing Data/Clarification Required/Engineer Review Required სტატუსში საბოლოო offer-ის ეტაპზეც, საჭიროებს Engineer Review-ს — **Critical Risk-ის მინიჭება კი ხდება მხოლოდ ცხადად დადასტურებული შეუსაბამობის შემთხვევაში** (იხ. თითოეული item-ის საკუთარი გრადუირებული "Risk if missing" ველი).

---

## Confidence Rule (Overall)
Preliminary წყაროზე დაფუძნებული checklist-ის გამო, არცერთ item-ს არ შეიძლება მიენიჭოს High Confidence მხოლოდ ამ checklist-ის საფუძველზე — საბოლოო Confidence რეალურ supplier-ის მტკიცებულებაზეა დამოკიდებული.

## Engineer Review Required Trigger (Overall)
წყაროს ბარათის Preliminary სტატუსი (edition currency, BIS/India jurisdiction დაუდასტურებელი) ავტომატურად ზღუდავს ნებისმიერ საბოლოო დადებით დასკვნას — საჭიროა Standards & Compliance Agent-ის ჩართვა non-preliminary წყაროს ხელმისაწვდომობის შემდეგ, per `CLAUDE.md` §28. **Items 5, 6, 7, 12**-ის გრადუირებული Risk logic-ის მიხედვით, Critical Risk ამ item-ებზე გამოიყენება **მხოლოდ** დადასტურებული, პროექტ-რელევანტური შეუსაბამობის შემთხვევაში — არა ავტომატურად Missing Data-ზე. **Items 8, 9, 10**-ის Conditional Requirement Logic-ის მიხედვით, "special"/"extended-range"/"high-altitude" evidence საჭიროა მხოლოდ საიტის ფაქტობრივი პირობების დადასტურების შემდეგ — არასოდეს ავტომატური Not Applicable ან Critical Risk გაურკვეველ საიტ-პირობებზე.
