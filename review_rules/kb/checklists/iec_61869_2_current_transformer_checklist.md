Document title: Checklist — Current Transformer (CT) (IEC 61869-2 basis)
Version: 2.1 — Severity logic (Items 2/3/9) and duration-basis comparison (Item 7) corrected
Last updated: 2026-07-10
Status: Preliminary — checklist basis only, not final IEC/GOST compliance proof
Owner / Prepared by: David Dvalishvili / Claude

---

# Checklist — Current Transformer (CT) (IEC 61869-2 basis)

მომზადებულია [`checklist_template.md`](checklist_template.md)-ის სტრუქტურით (Version 2.0), [`iec_61869_2_source_note.md`](../source_cards/iec_61869_2_source_note.md)-ის საფუძველზე. **Section reference map ეფუძნება ზოგად CT საინჟინრო structure-ს, არა ვიზუალურად დადასტურებულ TOC-ს (Cyrillic OCR-შეზღუდვა)** — checklist item-ები ამიტომ **Low–Medium Confidence**-ითაა, სანამ ვიზუალური დადასტურება არ მოხდება. **Preliminary — არა საბოლოო compliance-ის მტკიცებულება.**

**⚠ Version 2.0 — Conditional Requirement Logic Applied + Graded Risk Escalation.** ეს არის მესამე checklist ([`iec_62271_102_disconnector_earthing_switch_checklist.md`](iec_62271_102_disconnector_earthing_switch_checklist.md) და [`iec_62271_1_general_switchgear_requirements_checklist.md`](iec_62271_1_general_switchgear_requirements_checklist.md)-ის შემდეგ), რომელიც განახლდა [`checklist_template.md`](checklist_template.md) Version 2.0-ის მიხედვით. **Items 2, 3, 9** გახდა ფორმალურად **Conditional: Yes** (accuracy class protection/metering core-ისთვის, knee point voltage). **Items 7, 8, 11** (short-time thermal current, dynamic current, polarity) რჩება Unconditional, მაგრამ მიიღეს **გრადუირებული Risk Escalation** (Missing Evidence ≠ Confirmed Undersized/Unsafe). **დაემატა ახალი Item 14** ("CT existence / requirement gate") — **ნუმერაცია 1–13 უცვლელია** (backward-compatibility არსებულ test report-ებთან, რომლებიც კონკრეტულ item-ის ნომრებზე მიუთითებენ, მაგ. [`iec_61869_2_checklist_sample_test_report.md`](../../reports/iec_61869_2_checklist_sample_test_report.md)). სრული დასაბუთება იხ. [`iec_61869_2_ct_checklist_conditional_logic_update_report.md`](../../reports/iec_61869_2_ct_checklist_conditional_logic_update_report.md).

**⚠ Version 2.1 — Severity Logic and Duration-Basis Correction.** [`iec_61869_2_ct_conditional_logic_retest_summary.md`](../../reports/iec_61869_2_ct_conditional_logic_retest_summary.md)-ის re-test-მა დაადასტურა ორი კონკრეტული სისუსტე: (1) **Items 2, 3, 9**-ის severity ლოგიკა არ იყო თანმიმდევრული Items 7/8/11-თან — protection ფუნქციის დადასტურებული საჭიროებისას, evidence-ის უბრალო არარსებობა ცალსახად აღარ არის "ჩვეულებრივი" Missing Data, ეს ახლა ავტომატურად ესკალირდება Engineer Review Required-მდე; (2) **Item 7**-ის (short-time thermal current) შედარება ახლა ცხადად ითვალისწინებს **duration-basis-ს** (CT-ის 1s vs cubicle-ის 3s ტიპის განსხვავებას) — "თანაბარი რიცხვი" აღარ ნიშნავს ავტომატურ OK-ს, თუ duration განსხვავებულია. სრული დასაბუთება იხ. [`iec_61869_2_ct_severity_and_duration_correction_report.md`](../../reports/iec_61869_2_ct_severity_and_duration_correction_report.md).

## Equipment / Review Area
current transformer (CT), 10 kV outgoing feeder cubicle-ის ფარგლებში [Source: CLAUDE.md, section 2.3]

**⚠ სანამ Items 1–13 გამოყენებული იქნება, რეკომენდირებულია ჯერ Item 14-ის (CT existence/requirement gate) შემოწმება** — ესეიგი, დადასტურდეს, რომ ეს კონკრეტული feeder circuit საერთოდ საჭიროებს CT-ს. Item 14 ნუმერაციულად ბოლოშია (backward-compatibility-ის დაცვისთვის), მაგრამ ლოგიკურად წინაპირობაა.

---

## Check Items

### 1. CT ratio
**Why it matters:** primary/secondary ტოკის სწორი გარდაქმნა.
**Conditional Requirement:** No — CT-ის არსებობის შემთხვევაში (იხ. Item 14), ratio ყოველთვის საჭიროა.
**Supplier evidence required:** datasheet, nameplate.
**Related section reference:** Ratings (ზოგადი, section number დაუდასტურებელია)
**Risk if missing:** measurement/protection error.
**Status options:** OK / Missing Data / Clarification Required / Engineer Review Required / Critical Risk / Not Applicable / Not Checked
**Confidence rule:** High — datasheet + nameplate ორივე; Low — ერთი წყარო.
**Engineer Review Required trigger:** ratio პროექტის load current-თან შეუსაბამო.

### 2. Accuracy class (protection)
**Why it matters:** protection relay-ის ტოკის ზუსტი გაზომვის საფუძველი — **მხოლოდ** იმ შემთხვევაში, თუ ეს feeder-ი საერთოდ საჭიროებს protection relay-ის ფუნქციას, რომელიც ამ CT-ს იყენებს.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** Protection-core accuracy class საჭიროა **მხოლოდ**, თუ ამ feeder circuit-ისთვის company technical assignment/SLD ცალსახად ითხოვს protection relay-ს (overcurrent, earth fault და ა.შ. — იხ. [`iec_60255_protection_relay_checklist.md`](iec_60255_protection_relay_checklist.md)), რომელიც ამ CT-ს იყენებს input-ად. Outgoing feeder cubicle-ისთვის ეს თითქმის ყოველთვის საჭიროა, მაგრამ ფორმალურად ცალკე დასადასტურებელია.
**If Required, Evidence Needed:** protection-core accuracy class datasheet-ში (მაგ. 5P20, 10P10 ტიპის აღნიშვნა).
**If Not Required, Acceptable Status:** **Not Applicable** — მისაღებია, თუ ცხადადაა დადასტურებული, რომ ამ feeder-ს protection relay საერთოდ არ სჭირდება (იშვიათი, მაგრამ თეორიულად შესაძლებელი — მაგ. მხოლოდ metering-ის მიზნით).
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** Ratings/Design
**Risk if missing — გრადუირებული ესკალაცია (Version 2.1 correction, per [`iec_61869_2_ct_severity_and_duration_correction_report.md`](../../reports/iec_61869_2_ct_severity_and_duration_correction_report.md)):**
- **Not Applicable:** protection ფუნქცია ცხადადაა დადასტურებული, რომ არ არის საჭირო.
- **Clarification Required:** applicability გაურკვეველია მხოლოდ scope-ის დონეზე (ჯერ არ დაზუსტებულა, სჭირდება თუ არა საერთოდ protection relay).
- **Engineer Review Required — ავტომატურად:** protection ფუნქცია **დადასტურებულია საჭიროდ**, მაგრამ protection-core accuracy class evidence **სრულიად არ არსებობს**. **⚠ ეს არ არის ჩვეულებრივი, დაბალი-პრიორიტეტის Missing Data** — ვინაიდან protection-ის ფუნქციონირებას პირდაპირ უკავშირდება, ეს item ავტომატურად ინიშნება Engineer Review Required-ად (არა უბრალო Missing Data-ად, რომელიც შეიძლება დაუყოვნებლივი ყურადღების გარეშე დარჩეს).
- **Critical Risk:** **მხოლოდ**, თუ დადასტურებულია (ა) რომ მოწოდებული accuracy class ტექნიკურად არასაკმარისია კონკრეტული protection ფუნქციისთვის (მაგ. კლასი არასაკმარისად ზუსტია fault-ის ტიპურ დონეზე), ან (ბ) protection-core საერთოდ არ არსებობს, protection ფუნქცია დადასტურებით საჭიროა, **და** პროექტის უსაფრთხოებრივი ზეგავლენა შეფასებულია მაღალ დონედ (მაგ. ალტერნატიული დაცვის საშუალება არ არსებობს).
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — მკაფიო protection-core მითითება.
**Escalation Rule:** გაურკვეველია, ესაჭიროება თუ არა feeder-ს protection relay-ის ფუნქცია — **Engineer Review Required** (cross-check IEC 60255 checklist-თან), არა ავტომატური Not Applicable ან Critical Risk.
**Responsible Party for Applicability Decision:** **Client / Designer / Protection Engineer**.
**Engineer Review Required trigger:** accuracy class მოთხოვნილ protection ფუნქციასთან შეუსაბამო; protection-ის საჭიროება დადასტურებული, მაგრამ core არ არსებობს; ან evidence სრულიად აკლია, მიუხედავად დადასტურებული საჭიროებისა. **არცერთ შემთხვევაში არ არის დაშვებული საბოლოო CT-ის საკმარისობის დამტკიცება ინჟინრის დამოუკიდებელი ვერიფიკაციის გარეშე.**

### 3. Accuracy class (metering)
**Why it matters:** ვაჭრობითი/billing გაზომვის სიზუსტე ან SCADA-ზე metering-readout-ის სიზუსტე — **მხოლოდ** იმ შემთხვევაში, თუ ეს ფუნქცია საერთოდ სჭირდება ამ feeder-ს. **განსხვავებით Item 2-ისგან, metering-ის დაკარგვა ჩვეულებრივ არ არის უსაფრთხოებრივი (protection) რისკი — ეს არის კომერციული/ოპერაციული სიზუსტის საკითხი**, ამიტომ ესკალაცია ჩვეულებრივ Item 2-ზე დაბალია, გარდა პროექტ-სპეციფიკური გამონაკლისებისა.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** Metering-core accuracy class საჭიროა **მხოლოდ**, თუ ცალკე billing/commercial metering ან SCADA-ზე ამ feeder-ის ცალკე ენერგო-გაზომვის readout არის მოთხოვნილი company technical assignment-ის მიხედვით.
**If Required, Evidence Needed:** metering-core accuracy class datasheet-ში (მაგ. 0.5, 0.2S).
**If Not Required, Acceptable Status:** **Not Applicable** — მისაღებია, თუ ცალკე metering/billing/SCADA-readout ფუნქცია ამ feeder-ისთვის მოთხოვნილი არ არის.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** Ratings/Design
**Risk if missing — გრადუირებული ესკალაცია (Version 2.1 correction):**
- **Not Applicable:** metering/billing/SCADA-readout ფუნქცია ცხადადაა დადასტურებული, რომ არ არის საჭირო.
- **Clarification Required:** applicability გაურკვეველია (ჯერ არ დაზუსტებულა, სჭირდება თუ არა billing/SCADA-metering).
- **Missing Data / Engineer Review Required:** metering ფუნქცია დადასტურებულია საჭიროდ, მაგრამ evidence აკლია — Medium პრიორიტეტის Missing Data, რომელიც Engineer Review Required-ად ესკალირდება, თუ ეს პროექტისთვის commercial/billing-კრიტიკულია (მაგ. ცალკე ანგარიშსწორების წერტილი).
- **Critical Risk:** **იშვიათად** — მხოლოდ იმ განსაკუთრებულ შემთხვევაში, თუ პროექტისთვის დადასტურებულია, რომ metering-ის სიზუსტის დაკარგვას პირდაპირი, მძიმე ოპერაციული/საკონტრაქტო შედეგი აქვს (მაგ. custody-transfer/ანგარიშსწორების ერთადერთი წერტილი) — **არა ავტომატურად**, უბრალო metering-ის missing evidence-ზე.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Escalation Rule:** გაურკვეველია, ესაჭიროება თუ არა metering/SCADA-readout ფუნქცია — **Clarification Required**.
**Responsible Party for Applicability Decision:** **Client / Designer**.
**Engineer Review Required trigger:** metering მოთხოვნილია (დადასტურებული), მაგრამ ცალკე core არ არსებობს, **და** ეს პროექტისთვის commercial/billing-კრიტიკულია.

### 4. Burden
**Why it matters:** CT-ის დატვირთვის საკმარისობა დაკავშირებულ მოწყობილობებთან (relay, meter).
**Conditional Requirement:** No — CT-ის არსებობის შემთხვევაში, burden ყოველთვის უნდა დადასტურდეს.
**Supplier evidence required:** datasheet, VA რეიტინგი.
**Related section reference:** Ratings
**Risk if missing:** accuracy degradation რისკი.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Engineer Review Required trigger:** ფაქტობრივი დატვირთვა (relay+wiring) burden-ს აღემატება.

### 5. Rated primary current
**Why it matters:** ქსელის load current-თან შესაბამისობა.
**Conditional Requirement:** No.
**Supplier evidence required:** datasheet.
**Related section reference:** Ratings
**Risk if missing:** undersized/oversized CT.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High.
**Engineer Review Required trigger:** primary current feeder-ის rated current-თან შეუსაბამო.

### 6. Rated secondary current
**Why it matters:** დამაკავშირებელი მოწყობილობების (relay/meter) standard input-თან თავსებადობა (ჩვეულებრივ 1A/5A).
**Conditional Requirement:** No.
**Supplier evidence required:** datasheet.
**Related section reference:** Ratings
**Risk if missing:** interface შეუთავსებლობა.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High.
**Engineer Review Required trigger:** secondary current relay-ის input-თან შეუსაბამო.

### 7. Rated short-time thermal current
**Why it matters:** fault-ის დროს CT-ის თერმული გამძლეობა — უსაფრთხოებრივად კრიტიკული, დაკავშირებული cubicle-ის short-time withstand current-თან. **⚠ Version 2.1 correction:** CT-ის short-time thermal current ჩვეულებრივ **1 წამის** ბაზაზეა გამოხატული (IEC 61869-ის სტანდარტული პრაქტიკა), ხოლო switchgear-ის (cubicle-ის) rated short-time withstand current ხშირად **3 წამის** ბაზაზეა. **ორი განსხვავებული time-base-ის მქონე მნიშვნელობის პირდაპირი, "naive" რიცხვითი შედარება (მაგ. "20kA = 20kA, OK") ტექნიკურად არასწორია** — საჭიროა duration-ის გათვალისწინება, სანამ რაიმე დასკვნა გაკეთდება.
**Conditional Requirement:** No — ეს ბაზისური რეიტინგი ყოველთვის საჭიროა.
**Supplier evidence required:** type test report, **duration-ის (time-base-ის) ცალსახა მითითებით** (მაგ. "20 kA / 1 s").
**Related section reference:** Type tests (ზოგადი)
**Risk if missing — გრადუირებული ესკალაცია, duration-basis-ის გათვალისწინებით (Version 2.1 correction, per [`iec_61869_2_ct_severity_and_duration_correction_report.md`](../../reports/iec_61869_2_ct_severity_and_duration_correction_report.md)):**
- **Missing Data:** ღირებულება/test report საერთოდ არ არსებობს.
- **Clarification Required:** მნიშვნელობა (kA) მოცემულია, **მაგრამ duration/time-base არ არის მითითებული** (მაგ. მხოლოდ "20kA", 1s/3s-ის დაზუსტების გარეშე) — duration-ის გარეშე შედარება ტექნიკურად შეუძლებელია.
- **Engineer Review Required — ავტომატურად, ორ სცენარში:**
  1. მნიშვნელობა და duration ორივე მოცემულია, მაგრამ cubicle-ის short-time withstand current-თან (IEC 62271-1/GOST R 55190-2022 checklist-ის შესაბამისი item) შედარება ჯერ არ ჩატარებულა.
  2. **CT-ისა და cubicle-ის duration/time-base ერთმანეთისგან განსხვავდება** (მაგ. CT rated 1s-ზე, cubicle rated 3s-ზე) — **ამ შემთხვევაში "თანაბარი რიცხვი" არ ნიშნავს თანაბარ ადეკვატურობას.** საჭიროა თერმული ეკვივალენტობის ინჟინრული გადამოწმება/კონვერტაცია (მიახლოებითი ფორმულა: $I_{th,t2} = I_{th,t1}\sqrt{t1/t2}$) ან მწარმოებლის ცალკე დადასტურება, სანამ საბოლოო დასკვნა გაკეთდება. **ეს item არასოდეს არ უნდა დაიხუროს ავტომატური OK-ით მხოლოდ რიცხვების დამთხვევის საფუძველზე, თუ duration-ები განსხვავებულია.**
- **Critical Risk:** **მხოლოდ** მაშინ, თუ duration-basis-ის სათანადო კონვერტაციის/გადამოწმების **შემდეგაც** ცხადადაა დადასტურებული, რომ CT-ის short-time thermal current **ნაკლებია** cubicle-ის ეკვივალენტურ short-time withstand current-ზე (ანუ CT fault-ის დროს დაზიანდება switchgear-ზე ადრე).
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — test report + duration + cubicle-ის მნიშვნელობასთან **duration-ადაპტირებული** შედარება; Medium — duration ორივეს ცნობილია, მაგრამ კონვერტაცია ჯერ არ ჩატარებულა; Low — duration ერთ-ერთი მხარისთვის უცნობია.
**Escalation Rule:** N/A — Unconditional, გრადუირებული severity.
**Responsible Party for Applicability Decision:** N/A — Unconditional.
**Engineer Review Required trigger:** short-time thermal current cubicle-ის short-time withstand current-თან ჯერ არ არის შედარებული; ან duration/time-base მხარეებს შორის განსხვავდება და ეკვივალენტობის კონვერტაცია ჯერ არ ჩატარებულა.

### 8. Rated dynamic current
**Why it matters:** electrodynamic ძალების გამძლეობა fault-ის დროს — დაკავშირებული cubicle-ის peak withstand current-თან.
**Conditional Requirement:** No.
**Supplier evidence required:** type test report.
**Related section reference:** Type tests (ზოგადი)
**Risk if missing — გრადუირებული ესკალაცია:**
- **Missing Data:** ღირებულება/test report არ არსებობს.
- **Clarification Required:** ბუნდოვანი მონაცემი.
- **Engineer Review Required:** ღირებულება მოცემულია, მაგრამ cubicle-ის peak withstand current-თან შედარება ჯერ არ ჩატარებულა.
- **Critical Risk:** **მხოლოდ** დადასტურებული შემთხვევაში — CT-ის rated dynamic current ცხადადაა ნაკლები cubicle-ის peak withstand current-ზე.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High.
**Escalation Rule:** N/A — Unconditional, გრადუირებული severity.
**Responsible Party for Applicability Decision:** N/A — Unconditional.
**Engineer Review Required trigger:** dynamic current cubicle-ის peak withstand current-თან ჯერ არ არის შედარებული.

### 9. Knee point voltage / excitation characteristic (protection CT only)
**Why it matters:** protection relay-ის სწორი ფუნქციონირების საფუძველი — **მხოლოდ** კონკრეტული protection scheme-ებისთვის (მაგ. მაღალი impedance დაცვა, ზოგიერთი differential ან earth-fault სქემა), რომლებიც ცალკე knee-point/excitation მონაცემს საჭიროებენ.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** საჭიროა **მხოლოდ**, თუ Item 2-ის protection ფუნქცია დადასტურებულია საჭიროდ **და** კონკრეტული protection scheme (per Relay Protection Agent-ის ან company technical assignment-ის განსაზღვრა) იყენებს ალგორითმს, რომელსაც knee-point/excitation მონაცემი სჭირდება (მაგ. high-impedance restricted earth fault). სტანდარტული overcurrent/დაბალი-impedance earth-fault protection-ს ჩვეულებრივ ეს არ სჭირდება.
**If Required, Evidence Needed:** excitation curve/knee point test data.
**If Not Required, Acceptable Status:** **Not Applicable** — მისაღებია non-protection core-ისთვის, ან protection scheme-ისთვის, რომელსაც ეს მონაცემი არ სჭირდება.
**Supplier evidence required:** იხ. "If Required, Evidence Needed".
**Related section reference:** Design/Ratings (ზოგადი)
**Risk if missing — გრადუირებული ესკალაცია (Version 2.1 correction):**
- **Not Applicable:** დადასტურებულია, რომ კონკრეტული protection scheme knee-point მონაცემს არ საჭიროებს (მაგ. სტანდარტული overcurrent/დაბალი-impedance earth-fault).
- **Engineer Review Required:** გაურკვეველია, საჭიროებს თუ არა კონკრეტული protection scheme (high-impedance და მისთ.) knee-point მონაცემს — Relay Protection Agent-ის ჩართვა საჭირო, სანამ Missing Data-ს პრიორიტეტი განისაზღვრება.
- **Engineer Review Required — ავტომატურად:** კონკრეტული protection scheme **დადასტურებით** საჭიროებს knee-point მონაცემს, მაგრამ ეს evidence **სრულიად არ არსებობს** — ეს **არ რჩება** ჩვეულებრივ, დაბალი-პრიორიტეტის Missing Data-ად, ვინაიდან პირდაპირ protection-ის ფუნქციონირებას უკავშირდება.
- **Critical Risk:** **მხოლოდ**, თუ დადასტურებულია, რომ ამ კონკრეტული protection scheme-ის სწორი ოპერაცია **უშუალოდ** არის დამოკიდებული ამ მონაცემზე (მაგ. high-impedance restricted earth fault სქემა უკვე დანერგილია/მოთხოვნილია) **და** ალტერნატიული უსაფრთხოებრივი შემოწმება არ არსებობს.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium — ხშირად ცალკე მოთხოვნაა.
**Escalation Rule:** გაურკვეველია, საჭიროებს თუ არა კონკრეტული protection scheme knee-point მონაცემს — **Engineer Review Required** (Relay Protection Agent-ის ჩართვა).
**Responsible Party for Applicability Decision:** **Protection Engineer / Relay Protection Agent**.
**Engineer Review Required trigger:** knee point მოთხოვნილია protection scheme-ისთვის (დადასტურებული), მაგრამ არ არის მოწოდებული. **არცერთ შემთხვევაში არ არის დაშვებული საბოლოო protection-scheme-ის ადეკვატურობის დამტკიცება ინჟინრის დამოუკიდებელი ვერიფიკაციის გარეშე.**

### 10. Terminal marking
**Why it matters:** სწორი wiring-ის უზრუნველყოფა.
**Conditional Requirement:** No.
**Supplier evidence required:** datasheet/nameplate, terminal diagram.
**Related section reference:** Design
**Risk if missing:** wiring შეცდომის რისკი.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High.
**Engineer Review Required trigger:** terminal marking ბუნდოვანია drawing-ში.

### 11. Polarity
**Why it matters:** directional/differential protection ფუნქციების სისწორე — polarity-ის მონაცემი ზოგადად ყოველთვის სასურველია, მაგრამ მისი **კრიტიკულობა** დამოკიდებულია იმაზე, გამოიყენება თუ არა directional/differential protection ეს feeder-ზე.
**Conditional Requirement:** No — polarity-ის ბაზისური მონაცემი (mark-ის არსებობა) ყოველთვის საჭიროა; **მაგრამ Risk Level გრადუირებულია** დაცვის ფუნქციის ტიპის მიხედვით.
**Supplier evidence required:** datasheet, polarity mark.
**Related section reference:** Design
**Risk if missing — გრადუირებული ესკალაცია:**
- **Missing Data:** polarity mark საერთოდ არ არის მითითებული.
- **Clarification Required:** datasheet-სა და drawing-ს შორის polarity mark შეუსაბამოა.
- **Engineer Review Required:** გაურკვეველია, გამოიყენება თუ არა directional/differential protection ამ feeder-ზე — cross-check IEC 60255/Relay Protection Agent-თან საჭირო.
- **Critical Risk:** **მხოლოდ**, თუ დადასტურებულია, რომ directional/differential protection ფუნქცია გამოიყენება ამ feeder-ზე **და** polarity evidence აკლია ან ეწინააღმდეგება.
**Status options:** იხ. ზემოთ.
**Confidence rule:** Medium.
**Escalation Rule:** N/A — Unconditional მონაცემი, გრადუირებული severity.
**Responsible Party for Applicability Decision:** N/A — Unconditional (severity decision ეყრდნობა protection scheme-ს, არა applicability-ს).
**Engineer Review Required trigger:** polarity mark drawing-სა და datasheet-ს შორის შეუსაბამოა, ან directional/differential protection-ის გამოყენება ჯერ არ არის დაზუსტებული.

### 12. Test evidence (type/routine)
**Why it matters:** ratio/accuracy/burden-ის დამოუკიდებელი დადასტურება.
**Conditional Requirement:** No.
**Supplier evidence required:** type test report + routine test report, model-სპეციფიკური.
**Related section reference:** Type tests / Routine tests
**Risk if missing:** მაღალი პრიორიტეტის Missing Data.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — model-სპეციფიკური; Low — family-donis.
**Engineer Review Required trigger:** test report საერთოდ არ არსებობს.

### 13. Datasheet consistency
**Why it matters:** ratio/accuracy/burden/terminal marking-ის თანმიმდევრულობა datasheet-სა და GA/terminal diagram-ს შორის.
**Conditional Requirement:** No.
**Supplier evidence required:** cross-check ყველა დოკუმენტს შორის.
**Related section reference:** ზოგადი
**Risk if missing:** დოკუმენტური წინააღმდეგობა.
**Status options:** იხ. ზემოთ.
**Confidence rule:** High — ყველა დოკუმენტი ერთმანეთს ემთხვევა.
**Engineer Review Required trigger:** წინააღმდეგობა აღმოჩენილია დოკუმენტებს შორის.

### 14. CT existence / requirement for this feeder circuit *(new — logical gate, numbered last for backward-compatibility)*
**Why it matters:** ამ checklist-ის Items 1–13 ივარაუდებს, რომ CT ამ feeder circuit-ისთვის უკვე დადასტურებულია საჭიროდ — ეს item ფორმალურად ადასტურებს ამ დაშვებას, სანამ checklist-ის დანარჩენი ნაწილი გამოყენებული იქნება.
**Conditional Requirement:** **Yes**
**Condition / Applicability Rule:** CT საჭიროა, თუ company technical assignment/SLD ცალსახად ითხოვს protection relay-ის ფუნქციას **და/ან** ცალკე metering/billing/SCADA-readout ფუნქციას ამ feeder circuit-ისთვის (იხ. Items 2/3-ის Condition-ები). 10 kV outgoing feeder cubicle-ისთვის ეს თითქმის ყოველთვის მოცემულია, მაგრამ ფორმალურად ცალკე დასადასტურებელია, ვინაიდან ზოგიერთი cell-ტიპი (მაგ. მხოლოდ VT cell) შესაძლოა ცალკე CT-ს არ საჭიროებდეს.
**If Required, Evidence Needed:** CT-ის მოდელი/ტიპი ცხადადაა მითითებული SLD-სა და datasheet package-ში — Items 1–13-ის დანარჩენი ნაწილი გამოიყენება.
**If Not Required, Acceptable Status:** **Not Applicable** (მთელი checklist-ისთვის) — მისაღებია მხოლოდ, თუ ცხადადაა დადასტურებული, რომ ამ კონკრეტულ feeder circuit-ს CT არ სჭირდება.
**Supplier evidence required:** SLD-ის ცალსახა მითითება CT-ის არსებობაზე ამ feeder-ისთვის.
**Related section reference:** N/A — checklist-ის საკუთარი scope-გადამოწმება, არა IEC 61869-2-ის კონკრეტული სექცია.
**Risk if missing:** N/A — ეს item განსაზღვრავს, გამოიყენება თუ არა დანარჩენი checklist საერთოდ.
**Status options:** OK / Missing Data / Clarification Required / Engineer Review Required / Critical Risk / Not Applicable / Not Checked
**Confidence rule:** High — SLD-ის ცალსახა მითითება; Low — ივარაუდება ზოგადი cubicle-ტიპიდან.
**Escalation Rule:** გაურკვეველია, სჭირდება თუ არა CT ამ feeder-ს — **Engineer Review Required**, checklist-ის დანარჩენი ნაწილი დროებით შეჩერებული რჩება, სანამ ეს არ დადასტურდება.
**Responsible Party for Applicability Decision:** **Client / Designer**.
**Engineer Review Required trigger:** CT-ის საჭიროება ამ feeder-ისთვის ჯერ არ არის ცალსახად დადასტურებული SLD-დან/technical assignment-იდან.

---

## Confidence Rule (Overall)
წყაროს Section Reference Map ეფუძნება ზოგად CT ცოდნას, არა ვიზუალურად დადასტურებულ ამ ეგზემპლარის TOC-ს — შესაბამისად, არცერთ item-ს არ შეიძლება მიენიჭოს High Confidence მხოლოდ ამ checklist-ის საფუძველზე.

## Engineer Review Required Trigger (Overall)
Items 2, 7, 8, 9, 11 — უსაფრთხოებრივად/ფუნქციურად კრიტიკული — Missing Data-დ დარჩენა ავტომატურად ითხოვს Engineer Review Required-ს, განსაკუთრებით protection relay-სთან დაკავშირებული პუნქტებისთვის (საჭიროებს Relay Protection Agent-ის ჩართვასაც). **Items 7, 8, 11-ის Critical Risk** ახლა გამოიყენება **მხოლოდ** დადასტურებული, კონკრეტული შეუსაბამობის/გამოყენების შემთხვევაში (იხ. თითოეული item-ის გრადუირებული ლოგიკა), **არა** ავტომატურად Missing Data-ზე. **Items 2, 3, 9, 14-ის Conditional Requirement Logic**-ის მიხედვით, protection/metering-სპეციფიკური მოთხოვნები საჭიროა მხოლოდ დადასტურებული ფუნქციური საჭიროების შემდეგ — არასოდეს ავტომატური Not Applicable ან Critical Risk გაურკვეველ ფუნქციურ scope-ზე.

**Version 2.1 დამატება:** **Items 2 და 9**-ისთვის, protection ფუნქციის/scheme-ის დადასტურებული საჭიროებისას, evidence-ის სრული არარსებობა **ავტომატურად** ესკალირდება Engineer Review Required-მდე (**არა** დაბალი-პრიორიტეტის Missing Data-დ დატოვება) — ეს ასახავს, რომ protection-ის ფუნქციონირებაზე პირდაპირ მოქმედი Missing Data სხვაგვარად უნდა განიხილებოდეს, ვიდრე ჩვეულებრივი დოკუმენტაციური ხარვეზი. **Item 3**-ის (metering) ესკალაცია განზრახ რჩება უფრო რბილი, ვინაიდან metering-ის დაკარგვა ჩვეულებრივ არ არის უსაფრთხოებრივი რისკი. **Item 7**-ის შედარება ახლა ცხადად მოითხოვს duration-basis-ის (time-base) გათვალისწინებას — იხ. Item 7-ის საკუთარი გრადუირებული ცხრილი.
