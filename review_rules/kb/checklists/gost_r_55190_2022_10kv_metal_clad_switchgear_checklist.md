Document title: Checklist — 10 kV Outgoing Feeder Cubicle / Metal-Clad Switchgear (GOST R 55190-2022 basis)
Version: 1.0
Last updated: 2026-07-09
Status: Preliminary — checklist basis only, not final GOST/IEC compliance proof
Owner / Prepared by: David Dvalishvili / Claude

---

# Checklist — 10 kV Outgoing Feeder Cubicle / Metal-Clad Switchgear (GOST R 55190-2022 basis)

მომზადებულია [`checklist_template.md`](checklist_template.md)-ის სტრუქტურით, [`gost_r_55190_2022_source_note.md`](../source_cards/gost_r_55190_2022_source_note.md)-ის საფუძველზე.

**მნიშვნელოვანი შეზღუდვა:** ეს checklist წარმოადგენს **preliminary engineering checklist**-ს — **არა საბოლოო GOST/IEC compliance-ის მტკიცებულებას (not final GOST/IEC compliance proof)**. Current IEC compliance ან GOST R 55190-2022-თან სრული clause-level შესაბამისობა ამ დოკუმენტით **არ არის** დეკლარირებული. ყოველი მნიშვნელოვანი check item მოითხოვს მიმწოდებლის (supplier) მტკიცებულებას, სანამ ნებისმიერი Pass/Fail სტატუსი მიენიჭება რეალურ პროექტში.

**Section reference-ების სტატუსი:** ქვემოთ გამოყენებული Section/Annex სათაურები (Section 1–11, Annex A–E) ეფუძნება **მომხმარებლის მიერ ვიზუალურად დადასტურებულ Table of Contents-ს**, შესაბამისად სექციების **დასახელებები** უფრო მაღალი Confidence-ითაა, ვიდრე [`gost_r_55190_2022_source_note.md`](../source_cards/gost_r_55190_2022_source_note.md)-ში ადრე მოცემული ტიპური/მოსალოდნელი დასახელებები. **თუმცა, ამ სექციების/დანართების შიდა clause-ის შინაარსი, ცხრილები და ტექსტი ამ checklist-ის მომზადებისას არ არის განხილული ან კოპირებული** — ყოველი check item წარმოადგენს ჩვენს საკუთარ, პარაფრაზირებულ საინჟინრო შეფასების პუნქტს, არა სტანდარტიდან ციტირებულ მოთხოვნას.

## Checklist Title

10 kV Outgoing Feeder Cubicle / Metal-Clad Switchgear — Preliminary Requirement Checklist (GOST R 55190-2022 basis)

## Based On Source Note

[`gost_r_55190_2022_source_note.md`](../source_cards/gost_r_55190_2022_source_note.md)

## Equipment / Review Area

switchgear / cubicle (10 kV outgoing feeder, indoor metal-clad/metal-enclosed) [Source: CLAUDE.md, section 2.1, 2.2, 2.3]

---

## Check Items

### 1. Rated voltage suitability for 10 kV

**Check item:** დადასტურებულია თუ არა cubicle-ის rated voltage და highest voltage for equipment მნიშვნელობები, და მათი შესაბამისობა 10 kV პროექტის მოთხოვნასთან, ასევე სტანდარტის საერთო scope-ის (≤35 kV) ფარგლებში ყოფნა.

**Required supplier evidence:** დატაშითი, სადაც მითითებულია rated voltage და highest voltage for equipment.

**Related section reference:** Section 1 Scope; Section 4 Main parameters

**Risk if missing:** ძაბვის კლასის ფორმალური დაუდასტურებლობა.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence მხოლოდ მაშინ, თუ datasheet-ში მითითებულია ორივე მნიშვნელობა (rated + highest voltage) კონკრეტული მოდელისთვის; ზოგადი catalogue-ის მითითება — Low Confidence.

**Engineer Review Required trigger:** თუ rated voltage ბუნდოვანია ან cubicle-ის catalogue family მოიცავს ერთზე მეტ ძაბვის კლასს ცალსახა დაზუსტების გარეშე.

---

### 2. Rated current

**Check item:** დადასტურებულია თუ არა outgoing feeder circuit-ისა და busbar-ის rated normal current და მისი საკმარისობა დატვირთვის მოთხოვნასთან.

**Required supplier evidence:** დატაშითი, rated current ცხრილი feeder-ისა და busbar-ისთვის ცალ-ცალკე.

**Related section reference:** Section 4 Main parameters

**Risk if missing:** overheating/undersized circuit-ის რისკი.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — datasheet-ში ცალკე მითითებული feeder და busbar rated current; Medium — მხოლოდ ერთი ზოგადი მნიშვნელობაა მოცემული ორივესთვის.

**Engineer Review Required trigger:** თუ feeder-ის rated current busbar-ის rated current-ზე მეტია ან ბუნდოვანია.

---

### 3. Short-time withstand current

**Check item:** დადასტურებულია თუ არა rated short-time withstand current (kA) და მისი duration, და შესაბამისობა პროექტის მინიმალურ მოთხოვნასთან.

**Required supplier evidence:** type test report ან datasheet-ში მითითებული მნიშვნელობა და duration.

**Related section reference:** Section 4 Main parameters; Section 8 Test methods

**Risk if missing:** fault-ის დროს მექანიკური/თერმული დაზიანების **Critical Risk**.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence მხოლოდ type test report-ის საფუძველზე, კონკრეტული მოდელისთვის; datasheet-ის მარტო მითითება — Medium Confidence.

**Engineer Review Required trigger:** ავტომატურად, თუ ეს პარამეტრი Missing Data-დ დარჩება საბოლოო offer-ის ეტაპზეც.

---

### 4. Peak withstand current

**Check item:** დადასტურებულია თუ არა rated peak withstand current (kA peak) და მისი თანმიმდევრულობა short-time withstand current-თან.

**Required supplier evidence:** type test report ან calculation reference.

**Related section reference:** Section 4 Main parameters; Section 8 Test methods

**Risk if missing:** electrodynamic ძალების ვერდაზუსტება — **Critical Risk** ბუნებით.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence მხოლოდ დამოუკიდებელი test report-ით; calculation-ზე დაფუძნებული მტკიცებულება — Medium.

**Engineer Review Required trigger:** ავტომატურად, თუ short-time withstand current დადასტურებულია, მაგრამ peak withstand current არა.

---

### 5. Frequency 50/60 Hz applicability

**Check item:** დადასტურებულია თუ არა cubicle-ის rated frequency (50 Hz ან 60 Hz) და მისი შესაბამისობა პროექტის ქსელის სიხშირესთან.

**Required supplier evidence:** დატაშითი.

**Related section reference:** Section 1 Scope; Section 4 Main parameters

**Risk if missing:** ჩვეულებრივ Low რისკი, თუ ორივე 50/60 Hz მხარდაჭერილია, მაგრამ საჭიროებს დადასტურებას.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — პირდაპირ დატაშითში მითითებული მნიშვნელობა.

**Engineer Review Required trigger:** მხოლოდ იშვიათ შემთხვევაში — თუ მოწყობილობა სპეციალურად სხვა სიხშირისთვისაა დაპროექტებული.

---

### 6. Insulation medium / compartment insulation

**Check item:** დადასტურებულია თუ არა compartment-ის იზოლაციის საშუალება (ჰაერი, solid insulation და ა.შ.) და მისი dielectric withstand მახასიათებლები.

**Required supplier evidence:** datasheet, dielectric type test report, climatic test evidence (თუ პროექტს გარემო პირობები ეხება).

**Related section reference:** Section 5 Technical requirements; Section 8 Test methods; Annex E Climatic test list

**Risk if missing:** flashover/dielectric failure რისკი.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — dielectric type test report; Low — მხოლოდ ზოგადი catalogue აღწერა.

**Engineer Review Required trigger:** თუ insulation medium ბუნდოვანია ან environmental/climatic მოთხოვნები არ არის დაზუსტებული პროექტისთვის.

---

### 7. Cabinet/cubicle type and metal enclosure

**Check item:** დადასტურებულია თუ არა cubicle-ის ტიპი (metal-clad/metal-enclosed) და enclosure-ის ზოგადი კონსტრუქციული შესაბამისობა პროექტის მოთხოვნასთან.

**Required supplier evidence:** GA drawing, cubicle type description, catalogue reference.

**Related section reference:** Section 5 Technical requirements; Annex B Cabinet arrangement examples

**Risk if missing:** კონსტრუქციული შეუთავსებლობის რისკი დაგეგმილ ინსტალაციასთან.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — GA drawing + ტიპის მკაფიო მითითება; Low — მხოლოდ ზოგადი ტერმინი "metal-enclosed" დამატებითი დეტალის გარეშე.

**Engineer Review Required trigger:** თუ cubicle ტიპი (metal-clad vs. metal-enclosed) ბუნდოვანია და ეს პროექტისთვის მნიშვნელოვანია.

---

### 8. Busbar system

**Check item:** მითითებულია თუ არა busbar-ის კონფიგურაცია (single/double busbar), rated current და მისი შესაბამისობა cubicle-ის განლაგებასთან.

**Required supplier evidence:** GA drawing/single-line diagram, busbar rating datasheet.

**Related section reference:** Section 5 Technical requirements; Annex B Cabinet arrangement examples

**Risk if missing:** კონფიგურაციური შეუთავსებლობა ქსელთან.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — drawing + datasheet ორივე ხელმისაწვდომია; Medium — მხოლოდ ერთი წყარო.

**Engineer Review Required trigger:** თუ busbar კონფიგურაცია (single/double) არ შეესაბამება პროექტის დაგეგმილ ქსელის სქემას.

---

### 9. Outgoing feeder functional unit

**Check item:** დადასტურებულია თუ არა, რომ შემოთავაზებული cubicle კონკრეტულად წარმოადგენს outgoing feeder ფუნქციურ ერთეულს (და არა, მაგალითად, incoming/bus coupler/VT cell), მისი განლაგება/დანიშნულების მითითებით.

**Required supplier evidence:** functional unit designation catalogue reference, single-line diagram cell-ის ტიპის მითითებით.

**Related section reference:** Section 5 Technical requirements; Annex B Cabinet arrangement examples

**Risk if missing:** cell type-ის შეცდომით შერჩევა (მაგ. incoming cell outgoing feeder-ის ნაცვლად).

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — single-line diagram-ზე ცალსახად მითითებული cell type.

**Engineer Review Required trigger:** თუ functional unit ტიპი ბუნდოვანია ან catalogue-ში ერთი მოდელი მრავალფუნქციურადაა შეთავაზებული დაზუსტების გარეშე.

---

### 10. Switching device: VCB / load break switch / disconnector as applicable

**Check item:** დადასტურებულია თუ არა შემოთავაზებული switching device-ის ტიპი (VCB, LBS ან disconnector) და მისი შესაბამისობა outgoing feeder-ის პროექტის მოთხოვნასთან (მაგ. VCB, თუ პროექტს ეს მოეთხოვება).

**Required supplier evidence:** switching device datasheet, ტიპისა და rating-ის მკაფიო მითითებით.

**Related section reference:** Section 5 Technical requirements

**Risk if missing:** ტექნოლოგიური შეუსაბამობა — **Critical Risk**, თუ fault-interruption duty არასაკმარისია პროექტის მოთხოვნასთან შედარებით.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — მკაფიო device datasheet + rating; Low — ზოგადი "switching device included" ფრაზა დეტალის გარეშე.

**Engineer Review Required trigger:** ავტომატურად, თუ device ტიპი პროექტის მოთხოვნისგან განსხვავდება (მაგ. LBS VCB-ის ნაცვლად).

---

### 11. Earthing switch / earthing continuity

**Check item:** დადასტურებულია თუ არა earthing switch-ის არსებობა და earthing busbar-ის უწყვეტობა cubicle-ის მასშტაბით.

**Required supplier evidence:** earthing scheme drawing, earthing busbar rated current/withstand data.

**Related section reference:** Section 5 Technical requirements; Section 6 Safety requirements

**Risk if missing:** პერსონალის უსაფრთხოების **Critical Risk**.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — earthing scheme drawing + rated data ორივე ხელმისაწვდომია.

**Engineer Review Required trigger:** ავტომატურად, თუ earthing continuity ვერ დასტურდება დოკუმენტების მიწოდების შემდეგაც.

---

### 12. Mechanical/electrical interlocking

**Check item:** დადასტურებულია თუ არა interlocking scheme breaker-ს, disconnector-სა და earthing switch-ს შორის — რომ არასწორი switching sequence შეუძლებელია.

**Required supplier evidence:** interlocking scheme description/drawing, operational sequence description.

**Related section reference:** Section 6 Safety requirements

**Risk if missing:** არასწორი switching ოპერაციის **Critical Risk**.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — დეტალური scheme description; Low — ზოგადი "interlocking provided" განცხადება.

**Engineer Review Required trigger:** ავტომატურად, თუ scheme-ის დეტალები არ არის მოწოდებული ან non-standard სქემაა შემოთავაზებული.

---

### 13. Cable compartment and cable termination

**Check item:** დადასტურებულია თუ არა cable compartment-ის ზომები, cable entry მიმართულება და cable termination-ის თავსებადობა პროექტის cable schedule-სთან.

**Required supplier evidence:** cable compartment drawing, cable entry/termination specification, cable schedule (თუ არსებობს).

**Related section reference:** Section 5 Technical requirements; Annex B Cabinet arrangement examples

**Risk if missing:** ფიზიკური თავსებადობის პრობლემა.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — drawing + cable schedule ორივე ხელმისაწვდომია; Missing Data — cable schedule საერთოდ არ არსებობს.

**Engineer Review Required trigger:** თუ cable size/routing მონაცემები ეწინააღმდეგება cubicle-ის compartment ზომებს.

---

### 14. Auxiliary and control circuits

**Check item:** დადასტურებულია თუ არა control voltage (DC/AC), trip/close coil supply, auxiliary contacts, control fuse/MCB circuits მოთხოვნები.

**Required supplier evidence:** control schematic, auxiliary circuit datasheet, control voltage confirmation.

**Related section reference:** Section 5 Technical requirements

**Risk if missing:** control/trip circuit ფუნქციონირების ვერდადასტურება.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — control schematic + confirmed control voltage.

**Engineer Review Required trigger:** თუ trip circuit-ის უწყვეტობა ვერ დასტურდება — შესაძლოა გახდეს **Critical Risk**.

---

### 15. Protection relay interface / trip circuit evidence

**Check item:** დადასტურებულია თუ არა protection relay-ის trip output-ის ფიზიკური/ლოგიკური კავშირი breaker-ის trip coil-თან, და დაცვის ფუნქციების ზოგადი ჩამონათვალი.

**Required supplier evidence:** relay datasheet, trip circuit wiring drawing, relay I/O list (თუ არსებობს).

**Related section reference:** Section 5 Technical requirements *(ზოგადი — protection relay-ის ფუნქციური სიღრმისეული დეტალი სცილდება switchgear-სტანდარტის pure switchgear scope-ს; საჭიროებს Relay Protection Agent-ის ჩართვას)*

**Risk if missing:** ვერდადასტურებული trip path — **Critical Risk**, თუ ფაქტობრივი trip verification არ არსებობს.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence მხოლოდ trip matrix/relay I/O list-ის cross-check-ით.

**Engineer Review Required trigger:** ავტომატურად — trip path-ის დამოუკიდებელი დადასტურება switchgear-ის საკუთარი დოკუმენტაციიდან ჩვეულებრივ შეუძლებელია; საჭიროა Relay Protection Agent-ის ცალკე მიმოხილვა.

---

### 16. Nameplate and marking

**Check item:** დადასტურებულია თუ არა cubicle-ის nameplate-ზე საჭირო მონაცემების სისრულე (rated voltage, current, short-circuit rating, მწარმოებელი, serial number, წელი).

**Required supplier evidence:** nameplate ფოტო/drawing ან ტექსტის ჩამონათვალი.

**Related section reference:** Section 5 Technical requirements

**Risk if missing:** იდენტიფიკაციისა და მომავალი მოვლის სირთულე — ჩვეულებრივ Low–Medium რისკი.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — ფაქტობრივი nameplate ფოტო.

**Engineer Review Required trigger:** იშვიათად საჭირო, გარდა იმ შემთხვევისა, როცა nameplate მონაცემები ეწინააღმდეგება datasheet-ს.

---

### 17. IP / enclosure protection if available from project/supplier

**Check item:** დადასტურებულია თუ არა cubicle-ის IP დაცვის ხარისხი და მისი შესაბამისობა installation-ის გარემო პირობებთან — **მხოლოდ იმ შემთხვევაში, თუ ეს მონაცემი პროექტისთვის ხელმისაწვდომია/მოთხოვნილია**.

**Required supplier evidence:** datasheet, IP test report (თუ არსებობს), climatic test evidence.

**Related section reference:** Section 5 Technical requirements; Section 8 Test methods; Annex E Climatic test list

**Risk if missing:** გარემო ფაქტორებისგან დაუცველობის რისკი, თუ ეს პროექტისთვის მოთხოვნილია.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk [ ] N/A (not specified by project)

**Confidence rule:** High Confidence — IP test report; Low — ზოგადი catalogue მითითება.

**Engineer Review Required trigger:** თუ IP მოთხოვნილია პროექტის მიერ და მტკიცებულება ვერ დასტურდება.

---

### 18. Internal arc classification only if project requires it

**Check item:** თუ პროექტი ან უსაფრთხოების პრაქტიკა მოითხოვს internal arc classification-ს (IAC), დადასტურებულია თუ არა შესაბამისი კლასი და test report.

**Required supplier evidence:** internal arc test report, IAC classification მითითებით (თუ გამოყენებადია).

**Related section reference:** Annex A Internal arc conditions

**Risk if missing:** თუ პროექტს ეს მოთხოვნილი აქვს და მტკიცებულება არ არსებობს — Missing Data; თუ არა — N/A.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk [ ] N/A (not required by project)

**Confidence rule:** High Confidence — მხოლოდ დამოუკიდებელი internal arc test report-ით.

**Engineer Review Required trigger:** თუ IAC მოთხოვნილია პროექტის მიერ და test report ვერ დასტურდება.

---

### 19. Type test evidence

**Check item:** წარმოდგენილია თუ არა type test report(-ები), რომლებიც ადასტურებენ ძირითად რეიტინგებს შემოთავაზებული მოდელისთვის კონკრეტულად.

**Required supplier evidence:** type test report(-ები), მოდელის/კონფიგურაციის მკაფიო მითითებით.

**Related section reference:** Section 7 Acceptance; Section 8 Test methods

**Risk if missing:** ძირითადი რეიტინგების დამოუკიდებელი დადასტურების არარსებობა — მაღალი პრიორიტეტის Missing Data.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — model-სპეციფიკური test report; Low — ზოგადი "family" test report.

**Engineer Review Required trigger:** თუ test report არ არის მოდელ-სპეციფიკური და უსაფრთხოებრივად მნიშვნელოვან პარამეტრს ეხება.

---

### 20. Routine / acceptance test evidence

**Check item:** წარმოდგენილია თუ არა routine/acceptance test report კონკრეტული მიწოდებული ერთეულისთვის, serial number-ის მითითებით.

**Required supplier evidence:** routine test report, unit-სპეციფიკური serial number-ით; test specimen identification (თუ ხელმისაწვდომია).

**Related section reference:** Section 7 Acceptance; Annex C Test specimen identification; Annex D Test protocol information

**Risk if missing:** კონკრეტული მიწოდებული ერთეულის ხარისხის დამოუკიდებელი დადასტურების არარსებობა.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — serial number-ით მიბმული routine test report.

**Engineer Review Required trigger:** თუ routine test report საერთოდ არ არსებობს მიწოდებულ ერთეულზე.

---

### 21. Transportation and storage requirements

**Check item:** დადასტურებულია თუ არა cubicle-ის transportation/storage მოთხოვნები (ტემპერატურული დიაპაზონი, ტენიანობა, შენახვის ვადა, შეფუთვა).

**Required supplier evidence:** transportation/storage instructions, packaging specification.

**Related section reference:** Section 9 Transportation and storage

**Risk if missing:** ტრანსპორტირების/შენახვის დროს დაზიანების რისკი.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — მკაფიო instructions დოკუმენტი; Low — ზოგადი catalogue-ის ფრაზა.

**Engineer Review Required trigger:** იშვიათად საჭირო — უფრო documentation-completeness საკითხია, ვიდრე უსაფრთხოებრივი.

---

### 22. Operation/maintenance documentation

**Check item:** დადასტურებულია თუ არა O&M manual-ის, მოვლის ინტერვალის და საექსპლუატაციო ინსტრუქციების არსებობა.

**Required supplier evidence:** O&M manual, maintenance interval schedule.

**Related section reference:** Section 10 Operation instructions

**Risk if missing:** არასწორი ექსპლუატაცია/მოვლის რისკი.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — სრული O&M manual მოწოდებულია.

**Engineer Review Required trigger:** იშვიათად საჭირო.

---

### 23. Manufacturer warranty / guarantee conditions

**Check item:** დადასტურებულია თუ არა მწარმოებლის warranty/guarantee პირობები (ვადა, დაფარვის ფარგლები).

**Required supplier evidence:** warranty statement/certificate.

**Related section reference:** Section 11 Manufacturer warranty

**Risk if missing:** კომერციული/საგარანტიო რისკი — **ტექნიკური რისკი კი არა**; შენიშვნა: warranty პირობების დეტალური კომერციული შეფასება სცილდება ამ checklist-ის ტექნიკურ scope-ს [Source: CLAUDE.md, section 24, Commercial Scope].

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — წერილობითი warranty statement მოწოდებულია.

**Engineer Review Required trigger:** არ არის ტიპური — ეს არის დოკუმენტაციური სისრულის საკითხი, არა უსაფრთხოებრივი.

---

### 24. Missing data risk escalation

**Check item (წესი, არა ცალკეული პროდუქტის შემოწმება):** თუ რომელიმე ზემოთ ჩამოთვლილი უსაფრთხოებრივად მნიშვნელოვანი პუნქტი (rated voltage, short-time/peak withstand current, insulation medium, earthing continuity, interlocking, switching device type, protection relay trip path) რჩება Missing Data სტატუსში საბოლოო დოკუმენტების მოწოდების შემდეგაც კი, ეს ავტომატურად უნდა აღინიშნოს **Engineer Review Required** ან **Critical Risk**-ად.

**Required supplier evidence:** N/A — შიდა rule.

**Related section reference:** ეფუძნება `CLAUDE.md` §10.1 (Risk Levels) და §28 (General Safety Principle) — არა კონკრეტულ GOST სექციას.

**Risk if missing:** N/A (ეს პუნქტი თავად წარმოადგენს risk-escalation წესს).

**Status:** [ ] Rule acknowledged and applied [ ] Not yet applied

**Confidence rule:** N/A.

**Engineer Review Required trigger:** თავად ეს item წარმოადგენს ტრიგერს დანარჩენი checklist item-ებისთვის.

---

### 25. Supplier document package checklist

**Check item:** დადასტურებულია თუ არა სრული დოკუმენტაციის პაკეტის არსებობა: technical offer, datasheet, GA drawing, single-line diagram, control schematic, terminal diagram, cable schedule, type test report, routine test report, O&M manual, transportation/storage instructions, warranty statement, spare parts list.

**Required supplier evidence:** ზემოთ ჩამოთვლილი დოკუმენტების სია, per `CLAUDE.md` §13 (Completeness Check).

**Related section reference:** ზოგადი — ეფუძნება Section 7 Acceptance, Section 9, Section 10, Section 11-ის დოკუმენტაციურ მოთხოვნებს ერთობლივად

**Risk if missing:** არასრული პაკეტი ზღუდავს დამოუკიდებელ ვერიფიკაციას ყველა ზემოთ ჩამოთვლილი პუნქტისთვის.

**Status:** [ ] Pass [ ] Fail [ ] Conditional Pass [ ] Missing Data [ ] Clarification Required [ ] Engineer Review Required [ ] Critical Risk

**Confidence rule:** High Confidence — სრული პაკეტი მოწოდებულია ერთბაშად; Low — დოკუმენტები ფრაგმენტულად/არათანმიმდევრულად მოდის.

**Engineer Review Required trigger:** თუ დოკუმენტაციის ნაწილი მუდმივად ვერ მოწოდდება მოთხოვნის მიუხედავად.

---

## Confidence Rule (Overall)

Confidence Level განცალკევებულია სტატუსისგან, per `CLAUDE.md` §11:

- **High Confidence** — პირდაპირ დადასტურებულია მკაფიო დოკუმენტური მტკიცებულებით, წინააღმდეგობის გარეშე.
- **Medium Confidence** — დადასტურებულია ხელმისაწვდომი მტკიცებულებით, მაგრამ ინტერპრეტაციის/cross-check-ის გზით.
- **Low Confidence** — ეფუძნება არასრულ ინფორმაციას, ბუნდოვან drawing-ს, ნაწილობრივ მონაცემებს ან ვარაუდებს.
- **Not Verified** — არცერთი საიმედო მტკიცებულება ვერ მოიძებნა.

ვინაიდან ეს checklist ეფუძნება Preliminary-სტატუსის წყაროს ბარათს, **არცერთი item არ შეიძლება მოინიშნოს High Confidence-ით მხოლოდ ამ checklist-ის საფუძველზე** — საბოლოო Confidence Level ყოველთვის დამოკიდებულია რეალურ პროექტში წარმოდგენილ მტკიცებულებაზე.

## Engineer Review Required Trigger (Overall)

გარდა თითოეული item-ის ინდივიდუალური trigger-ისა (იხ. ზემოთ), item უნდა მოინიშნოს **Engineer Review Required**-ად ზოგადად, თუ:

- წყაროს ბარათის Use Status არის Preliminary (ეს ბარათი ამჟამად **Preliminary**-ია), და finding უსაფრთხოებრივად/mandatory compliance-ის თვალსაზრისით მნიშვნელოვანია;
- მოწოდებული მტკიცებულება ეწინააღმდეგება სხვა წყაროს (მაგ. datasheet vs drawing);
- საჭიროა ადამიანური საინჟინრო განსჯა, რომელსაც ეს checklist ვერ წყვეტს დამოუკიდებლად.

ტრიგერის გააქტიურებისას, საერთო დადებითი დასკვნა ამ item-ისთვის **არ შეიძლება** წარმოდგინდეს, სანამ ტრიგერი არ მოგვარდება, per `CLAUDE.md` §28.
