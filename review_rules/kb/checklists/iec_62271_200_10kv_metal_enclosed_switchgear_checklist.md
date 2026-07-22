Document title: Checklist — 10 kV Outgoing Feeder Cubicle / AC Metal-Enclosed Switchgear (IEC 62271-200 basis)
Version: 1.0
Last updated: 2026-07-08
Status: Preliminary — checklist basis only, not final compliance authority
Owner / Prepared by: David Dvalishvili / Claude

---

# Checklist — 10 kV Outgoing Feeder Cubicle / AC Metal-Enclosed Switchgear

მომზადებულია [`checklist_template.md`](checklist_template.md)-ის სტრუქტურით.

**მნიშვნელოვანი შეზღუდვა:** ეს checklist წარმოადგენს **მხოლოდ საბაზისო ჩარჩოს (checklist basis only)** — არა საბოლოო შესაბამისობის ავტორიტეტს (**not final compliance authority**), და **არა clause-level compliance proof**. Current IEC compliance ამ დოკუმენტით **არ არის** დეკლარირებული — იხ. წყაროს ბარათის Use Status = Preliminary. ყოველი მნიშვნელოვანი check item მოითხოვს მიმწოდებლის (supplier) მტკიცებულებას, სანამ ნებისმიერი Pass/Fail სტატუსი მიენიჭება რეალურ პროექტში.

**Section reference-ების შეზღუდვა (ვრცელდება ქვემოთ მოცემულ ყველა "Related section reference" ველზე, 1-დან 19-მდე):** წყაროს PDF არის სკანირებული დოკუმენტი, რომლის ტექსტური ფენა title/cover გვერდის მიღმა ვერ იქნა ამოღებული (იხ. [`iec_62271_200_source_note.md`](../source_cards/iec_62271_200_source_note.md), Limitations). შესაბამისად, ყოველი ქვემოთ მითითებული "Related section reference" (მაგ. "Section 4 — Ratings", "Section 5 — Design and construction" და ა.შ.) წარმოადგენს IEC 62271-200-ის **ტიპურ/მოსალოდნელ (typical/expected)** სექციურ სტრუქტურას ზოგადი საინჟინრო ცოდნის დონეზე — **არცერთი ეს მითითება არ არის დამოწმებული ამ კონკრეტული ეგზემპლარის რეალურ გვერდ-ნომრებთან ან clause-ტექსტთან**. ეს მითითებები არ უნდა იქნას ციტირებული როგორც confirmed evidence, სანამ არ მოხდება გვერდების ვიზუალური დამოწმება.

## Checklist Title

10 kV Outgoing Feeder Cubicle / AC Metal-Enclosed Switchgear — Completeness & Requirement Checklist (IEC 62271-200 basis)

## Based On Source Note

[`iec_62271_200_source_note.md`](../source_cards/iec_62271_200_source_note.md)

## Equipment / Review Area

switchgear / cubicle (10 kV outgoing feeder, indoor metal-enclosed) [Source: CLAUDE.md, section 2.1, 2.2, 2.3]

---

## Check Items

### 1. Rated voltage (Rated Voltage)

**Check item (ჩვენი სიტყვებით):** დადასტურებულია თუ არა cubicle-ის rated (nominal) voltage და მისი შესაბამისობა პროექტის 10 kV მოთხოვნასთან, ასევე rated insulation level-ის საბაზისო ძაბვასთან კავშირი.

**Evidence required from supplier:** დატაშითი/სპეციფიკაცია, სადაც მითითებულია rated voltage და highest voltage for equipment.

**Related section reference:** Section 4 — Ratings

**Risk if missing:** ძაბვის კლასის შეუსაბამობა → switchgear-ის არასაკმარისი ან გადამეტებული design margin.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 2. Rated normal current (Rated Normal Current)

**Check item:** დადასტურებულია თუ არა cubicle-ის/busbar-ისა და outgoing feeder circuit-ის rated normal current და მისი საკმარისობა დატვირთვასთან მიმართებაში.

**Evidence required from supplier:** დატაშითი, rated current ცხრილი feeder-ისა და busbar-ისთვის ცალ-ცალკე.

**Related section reference:** Section 4 — Ratings

**Risk if missing:** overheating/thermal risk ან undersized busbar/feeder circuit.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 3. Short-time withstand current (Rated Short-Time Withstand Current)

**Check item:** დადასტურებულია თუ არა rated short-time withstand current (kA) და მისი duration (წამებში), და შეესაბამება თუ არა პროექტის მინიმალურ მოთხოვნას.

**Evidence required from supplier:** type test report ან datasheet-ში მითითებული მნიშვნელობა და duration.

**Related section reference:** Section 4 — Ratings; Section 6 — Type tests

**Risk if missing:** fault-ის დროს switchgear-ის მექანიკური/თერმული დაზიანების **Critical Risk**.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 4. Peak withstand current (Rated Peak Withstand Current)

**Check item:** დადასტურებულია თუ არა rated peak withstand current (kA peak) და მისი თანმიმდევრულობა short-time withstand current-თან (მაგ. სტანდარტული თანაფარდობა ~2.5×).

**Evidence required from supplier:** type test report ან calculation reference.

**Related section reference:** Section 4 — Ratings; Section 6 — Type tests

**Risk if missing:** electrodynamic ძალების ვერდაზუსტება fault-ის დროს — **Critical Risk** ბუნებით.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 5. Insulation level (Rated Insulation Level)

**Check item:** დადასტურებულია თუ არა power-frequency withstand voltage და lightning impulse withstand voltage მნიშვნელობები 10 kV კლასისთვის.

**Evidence required from supplier:** type test report (dielectric test) ან datasheet.

**Related section reference:** Section 4 — Ratings; Section 6 — Type tests

**Risk if missing:** flashover/dielectric failure რისკი.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 6. Busbar system (Busbar Arrangement)

**Check item:** მითითებულია თუ არა busbar-ის კონფიგურაცია (single busbar/double busbar), busbar-ის rated current, და მისი შესაბამისობა project-ის cubicle-ის კონფიგურაციასთან.

**Evidence required from supplier:** GA drawing / single-line diagram, busbar rating datasheet.

**Related section reference:** Section 5 — Design and construction

**Risk if missing:** კონფიგურაციური შეუთავსებლობა არსებულ/დაგეგმილ ქსელთან.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 7. Enclosure / compartment structure (Enclosure and Compartmentalization)

**Check item:** დადასტურებულია თუ არა cubicle-ის კომპარტმენტების დანაწილება (busbar compartment, cable compartment, LV/control compartment, switching device compartment) ცალკეულ, გამიჯნულ განყოფილებებად.

**Evidence required from supplier:** GA drawing, cross-section drawing, cubicle layout.

**Related section reference:** Section 5 — Design and construction

**Risk if missing:** უსაფრთხოებრივი/მოვლის რისკი — compartment-ის გაუმიჯვნელობამ შეიძლება გაზარდოს fault-ის გავრცელების რისკი.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 8. Earthing continuity (Earthing System Continuity)

**Check item:** დადასტურებულია თუ არა earthing busbar-ის უწყვეტობა cubicle-ის მასშტაბით და earthing switch-ის/earthing point-ების არსებობა.

**Evidence required from supplier:** earthing scheme drawing, earthing busbar rated current/withstand data.

**Related section reference:** Section 5 — Design and construction

**Risk if missing:** პერსონალის უსაფრთხოების **Critical Risk**, თუ earthing continuity ვერ დასტურდება.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 9. Interlocking (Interlocking Scheme)

**Check item:** დადასტურებულია თუ არა mechanical/electrical interlocking scheme breaker-ს, disconnector-სა და earthing switch-ს შორის — რომ არასწორი switching sequence ფიზიკურად ან ლოგიკურად შეუძლებელია.

**Evidence required from supplier:** interlocking scheme description/drawing, operational sequence description.

**Related section reference:** Section 5 — Design and construction

**Risk if missing:** არასწორი switching ოპერაციის **Critical Risk** (მაგ. earthing switch-ის ჩართვა ცოცხალ წრეზე).

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 10. VCB or switching device compatibility (Switching Device Compatibility)

**Check item:** დადასტურებულია თუ არა შემოთავაზებული switching device-ის (VCB ან სხვა) ტიპისა და rating-ის შესაბამისობა cubicle-ის დიზაინთან და პროექტის მოთხოვნასთან (მაგ. VCB მოთხოვნილია outgoing feeder-ისთვის).

**Evidence required from supplier:** switching device datasheet, compatibility statement/drawing cubicle-სთან ერთად.

**Related section reference:** Section 5 — Design and construction

**Risk if missing:** ტექნოლოგიური შეუსაბამობა (მაგ. LBS VCB-ის ნაცვლად) — **Critical Risk**, თუ fault-interruption duty არასაკმარისია.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 11. Cable compartment / cable termination (Cable Compartment and Termination)

**Check item:** დადასტურებულია თუ არა cable compartment-ის ზომები, cable entry მიმართულება (ზედა/ქვედა), და cable termination-ის თავსებადობა პროექტის cable schedule-სთან.

**Evidence required from supplier:** cable compartment drawing, cable entry/termination specification, cable schedule (თუ არსებობს).

**Related section reference:** Section 5 — Design and construction

**Risk if missing:** ფიზიკური თავსებადობის პრობლემა (cable size/routing) — **Missing Data**, თუ cable schedule საერთოდ არ არსებობს.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 12. Auxiliary and control circuits (Auxiliary and Control Circuits)

**Check item:** დადასტურებულია თუ არა control voltage (DC/AC), trip/close coil supply, auxiliary contacts, control fuse/MCB circuits, cubicle heater/lighting/ventilation მოთხოვნები.

**Evidence required from supplier:** control schematic, auxiliary circuit datasheet, control voltage confirmation.

**Related section reference:** Section 5 — Design and construction (auxiliary circuits typically covered under general design/construction requirements)

**Risk if missing:** control/trip circuit-ის ფუნქციონირების ვერდადასტურება — შესაძლოა გახდეს **Critical Risk**, თუ trip circuit-ის უწყვეტობა ვერ დასტურდება (იხ. Relay Protection Agent-ის ჩართვა საჭიროების შემთხვევაში).

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 13. Nameplate / markings (Nameplate and Marking Requirements)

**Check item:** დადასტურებულია თუ არა cubicle-ის nameplate-ზე საჭირო მონაცემების სისრულე (rated voltage, current, short-circuit rating, manufacturer, serial number, წელი).

**Evidence required from supplier:** nameplate ფოტო/drawing ან nameplate-ის ტექსტის ჩამონათვალი.

**Related section reference:** Section 5 — Design and construction (marking); typically also referenced generally alongside Section 4 — Ratings

**Risk if missing:** მოწყობილობის იდენტიფიკაციისა და მომავალი მოვლის სირთულე — ჩვეულებრივ **Low–Medium** რისკი, თუმცა დოკუმენტაციური სისრულისთვის მნიშვნელოვანია.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 14. IP degree / enclosure protection (Degree of Protection — IP Rating)

**Check item:** დადასტურებულია თუ არა cubicle-ის IP დაცვის ხარისხი (მაგ. IP3X, IP4X და ა.შ.) და მისი შესაბამისობა installation-ის გარემო პირობებთან (indoor/outdoor, dust/moisture).

**Evidence required from supplier:** datasheet, IP test report (თუ არსებობს).

**Related section reference:** Section 4 — Ratings (environmental/service conditions typically referenced alongside ratings); Section 6 — Type tests (IP verification)

**Risk if missing:** გარემო ფაქტორებისგან (მტვერი, ტენიანობა) დაუცველობის რისკი.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 15. Type test evidence (Type Test Report Availability)

**Check item:** წარმოდგენილია თუ არა type test report(-ები), რომლებიც ადასტურებენ ძირითად რეიტინგებს (short-circuit, dielectric, temperature-rise, IP, internal arc — თუ რელევანტურია) შემოთავაზებული მოდელისთვის კონკრეტულად (არა ზოგადი family-სთვის).

**Evidence required from supplier:** type test report(-ები), მოდელის/კონფიგურაციის მკაფიო მითითებით.

**Related section reference:** Section 6 — Type tests

**Risk if missing:** ძირითადი რეიტინგების დამოუკიდებელი დადასტურების არარსებობა — **Missing Data**, მაღალი პრიორიტეტით.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 16. Routine test evidence (Routine Test Report Availability)

**Check item:** წარმოდგენილია თუ არა routine test report კონკრეტული მიწოდებული ერთეულისთვის (არა type test-ის განმეორება).

**Evidence required from supplier:** routine test report, unit-სპეციფიკური serial number-ით.

**Related section reference:** Section 7 — Routine tests

**Risk if missing:** კონკრეტული მიწოდებული ერთეულის ხარისხის დამოუკიდებელი დადასტურების არარსებობა.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 17. Internal arc classification (Internal Arc Classification) — *მხოლოდ თუ პროექტისთვის საჭიროა ან უკვე მითითებულია*

**Check item:** თუ პროექტის მოთხოვნა ან უსაფრთხოების პრაქტიკა მოითხოვს internal arc classification-ს (IAC), დადასტურებულია თუ არა შესაბამისი კლასი (მაგ. IAC AFLR) და მისი test report.

**Evidence required from supplier:** internal arc test report, IAC classification მითითებით (თუ გამოყენებადია).

**Related section reference:** Annex-ები (internal arc classification-თან დაკავშირებული, IEC 62271-200-ის ტიპური სტრუქტურის მიხედვით — ზუსტი Annex ნომერი ამ ეგზემპლარში დაუდასტურებელია)

**Risk if missing:** თუ პროექტს ეს მოთხოვნილი აქვს და მტკიცებულება არ არსებობს — **Missing Data**; თუ პროექტს არ მოეთხოვება, აღინიშნება როგორც **N/A**.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk [ ] N/A (not required by project)

---

### 18. Documentation required from supplier (Overall Documentation Package)

**Check item:** დადასტურებულია თუ არა სრული დოკუმენტაციის პაკეტის არსებობა: technical offer, datasheet, GA drawing, single-line diagram, control schematic, terminal diagram, cable schedule, type test report, routine test report, O&M manual, spare parts list.

**Evidence required from supplier:** ზემოთ ჩამოთვლილი დოკუმენტების სია, per `CLAUDE.md` §13 (Completeness Check).

**Related section reference:** ზოგადი — არ არის კონკრეტული clause-ზე დაფუძნებული, ეფუძნება პროექტის completeness check პრაქტიკას

**Risk if missing:** არასრული პაკეტი ზღუდავს დამოუკიდებელ ვერიფიკაციას ყველა ზემოთ ჩამოთვლილი პუნქტისთვის.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

---

### 19. Missing data risk triggers (Missing Data → Risk Escalation Rule)

**Check item (წესი, არა ცალკეული პროდუქტის შემოწმება):** თუ რომელიმე ზემოთ ჩამოთვლილი უსაფრთხოებრივად მნიშვნელოვანი პუნქტი (short-time/peak withstand current, insulation level, interlocking, earthing continuity, switching device compatibility) რჩება **Missing Data** სტატუსში დოკუმენტების მოწოდების შემდეგაც კი, ეს ავტომატურად უნდა აღინიშნოს **Engineer Review Required** ან **Critical Risk**-ად — არ შეიძლება ჩაითვალოს Low-რისკიან ხარვეზად.

**Evidence required from supplier:** N/A — ეს არის შიდა rule, არა ცალკეული საბუთის მოთხოვნა.

**Related section reference:** ეფუძნება `CLAUDE.md` §10.1 (Risk Levels) და §28 (General Safety Principle)

**Risk if missing:** N/A (ეს პუნქტი თავად წარმოადგენს risk-escalation წესს).

**Status:** [ ] Rule acknowledged and applied [ ] Not yet applied

---

## Confidence Rule

Confidence Level განცალკევებულია სტატუსისგან, per `CLAUDE.md` §11:

- **High Confidence** — პირდაპირ დადასტურებულია მკაფიო დოკუმენტური მტკიცებულებით, წინააღმდეგობის გარეშე.
- **Medium Confidence** — დადასტურებულია ხელმისაწვდომი მტკიცებულებით, მაგრამ ინტერპრეტაციის/cross-check-ის გზით.
- **Low Confidence** — ეფუძნება არასრულ ინფორმაციას, ბუნდოვან drawing-ს, ნაწილობრივ მონაცემებს ან ვარაუდებს.
- **Not Verified** — არცერთი საიმედო მტკიცებულება ვერ მოიძებნა.

ვინაიდან ეს checklist ეფუძნება Preliminary-სტატუსის წყაროს ბარათს (§Use Status ზემოთ), **არცერთი item არ შეიძლება მოინიშნოს High Confidence-ით მხოლოდ ამ checklist-ის საფუძველზე** — საბოლოო Confidence Level ყოველთვის დამოკიდებულია რეალურ პროექტში წარმოდგენილ მტკიცებულებაზე.

## Engineer Review Required Trigger

Item უნდა მოინიშნოს **Engineer Review Required**-ად, თუ:

- წყაროს ბარათის Use Status არის Preliminary, Legacy ან Current-unknown (ეს ბარათი ამჟამად **Preliminary**-ია), და finding უსაფრთხოებრივად/mandatory compliance-ის თვალსაზრისით მნიშვნელოვანია;
- item ეხება short-time withstand current, peak withstand current, insulation level, interlocking, earthing continuity ან switching device compatibility, და მტკიცებულება არასრული/ბუნდოვანია;
- მოწოდებული მტკიცებულება ეწინააღმდეგება სხვა წყაროს (მაგ. datasheet vs drawing);
- საჭიროა ადამიანური საინჟინრო განსჯა, რომელსაც ეს checklist ვერ წყვეტს დამოუკიდებლად.

ტრიგერის გააქტიურებისას, საერთო დადებითი დასკვნა ამ item-ისთვის **არ შეიძლება** წარმოდგინდეს, სანამ ტრიგერი არ მოგვარდება, per `CLAUDE.md` §28.
