Document title: Source Note — IEC 60255-1 (GOST adoption, common requirements)
Version: 1.0
Last updated: 2026-07-09
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# წყაროს ბარათი (Source Note) — IEC 60255-1

**Copyright Note:** სტანდარტის სრული ტექსტი არ არის კოპირებული ან შენახული, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

## 1. Source Identification

- **Current raw filename:** `knowledge/materials_inbox/IEC 60255.pdf`
- **Standard number:** ГОСТ IEC 60255-1 (GOST IEC 60255-1)
- **Title:** Реле измерительные и устройства защиты. Часть 1. Общие требования / *Measuring relays and protection equipment — Part 1: Common requirements*
- **Edition/Year:** —2014 (identical adoption — IDT — of IEC 60255-1:2009); effective in Russia from 2016-01-01
- **Language:** რუსული (ინგლისური IEC სათაური ცალკეა)
- **Document type:** МГС/ISC → Rosstandart-ის IDT ადაპტაცია
- **Equipment/topic family:** protection relay — საერთო/ბაზისური მოთხოვნები
- **Source confirmation status:** **Medium** — front matter (standard number, IDT სტატუსი, ბაზისური IEC 60255-1:2009 მითითება, ეფექტური თარიღი) სუფთად იკითხება ლათინური/ციფრული ტექსტით; clause-დონის Cyrillic შინაარსი ვერ იშლება.

## 2. Visual/Source Confirmation

- **რა დადასტურდა:** "ГОСТ IEC 60255-1—2014", "IEC 60255-1:2009 IDT", ეფექტური თარიღი 2016-01-01, enactment order № 1463-ст (30.10.2014).
- **OCR/scanned შეზღუდვა:** დიახ — Cyrillic ტექსტის უმეტესობა (definitions, requirements) ვერ იშლება ამ გარემოში.
- **გამოსადეგია checklist-ისთვის?** ნაწილობრივ — ზოგადი protection relay common-requirements structure-ის დონეზე, დიახ (ეყრდნობა ზოგად IEC 60255-ოჯახის საერთაშორისო ცოდნას); clause-სპეციფიკურად — არა.
- **Confidence Level:** **Medium** (identity) / **Low** (clause-დონე).

## 3. Scope and Relevance for This Project

- **10 kV outgoing feeder cubicle:** რელევანტური — protection relay მოთხოვნილი ელემენტია, თუმცა ფუნქციური scope ჯერ "To be confirmed by protection engineer"-ადაა მონიშნული ჩვენს sample-ში.
- **Company technical assignment:** relay-ის auxiliary supply, environmental, electrical safety მოთხოვნების ჩამოსაყალიბებლად.
- **Supplier offer review:** relay datasheet-ის საერთო/ბაზისური მოთხოვნების შემოწმებისთვის.
- **Drawings/schematics/terminal diagrams:** relay-ის terminal/wiring documentation-ის consistency-ისთვის.
- **Type/routine test evidence:** relay-ის common (non-protection-function-specific) ტესტების საფუძველი.
- **Missing Data/Engineer Review Required ლოგიკა:** ეს დოკუმენტი (Part 1, Common requirements) **არ** ფარავს კონკრეტულ დაცვის ფუნქციებს (overcurrent, earth fault და ა.შ.) — ეს რჩება Relay Protection Agent-ის/ცალკე დოკუმენტების საკითხად.

## 4. Section Reference Map Only

*(ეს ცხრილი ეფუძნება IEC 60255-1-ის ზოგადად ცნობილ საერთაშორისო სტრუქტურას (common requirements-ის ტიპური თემები) — **არა** ამ კონკრეტული GOST ეგზემპლარის ვიზუალურად დადასტურებულ TOC-ს, Cyrillic-შეზღუდვის გამო):*

| სავარაუდო თემატური ბლოკი | პარაფრაზირებული საინჟინრო მნიშვნელობა |
|---|---|
| General/Scope | გამოყენების არეალი — ყველა protection relay ტიპისთვის საერთო |
| Normal service conditions | გარემო/ოპერაციული პირობები (ტემპერატურა, ტენიანობა, ვიბრაცია) |
| Ratings | auxiliary supply voltage/current რეიტინგები |
| Design/construction | binary inputs/outputs, terminal marking, casing |
| Electrical safety requirements | dielectric/insulation მოთხოვნები relay-სთვის |
| EMC requirements | ელექტრომაგნიტური თავსებადობა |
| Type tests / Routine tests | საერთო ტესტირების ლოგიკა |

## 5. Engineering Use in This Review System
- Company technical assignment-ში relay-ის auxiliary supply/environmental მოთხოვნის ჩამოსაყალიბებლად.
- Supplier offer review-ში relay datasheet-ის საბაზისო (non-function-specific) მოთხოვნების cross-check.
- **მნიშვნელოვანი:** ეს დოკუმენტი **არ** გამოიყენება დაცვის ფუნქციების (protection functions) სიღრმისეული შეფასებისთვის — ეს არის Relay Protection Agent-ის ცალკე scope.

## 6. Supplier Evidence Requirements Derived From This Source
- Auxiliary supply voltage/current — datasheet.
- Binary input/output count and specification — datasheet.
- EMC/electrical safety test evidence — type test report (თუ ხელმისაწვდომია).
- Environmental (temperature/humidity) compliance — datasheet.

## 7. Risk Triggers
- **Missing Data:** auxiliary supply voltage არ არის მითითებული.
- **Clarification Required:** binary I/O რაოდენობა ბუნდოვანია.
- **Engineer Review Required:** EMC/safety test evidence არ არსებობს.
- **Critical Risk:** N/A ცალკე ამ common-requirements დოკუმენტისთვის — კონკრეტული protection function-ის Critical Risk-ები ცალკე დოკუმენტების (IEC 60255-27, ფუნქციური datasheet) საკითხია.

## 8. Checklist Decision

- **Create checklist:** **Yes, ერთობლივად IEC 60255-27-თან** — ერთი "Protection Relay" checklist, ორივე წყაროზე დაფუძნებული.
- **Reason:** ორივე დოკუმენტი ერთი და იმავე relay-ის სხვადასხვა ასპექტს (common requirements + product safety) ფარავს — ცალკე checklist-ების ნაცვლად ერთი კონსოლიდირებული checklist უფრო პრაქტიკულია.
- **Proposed checklist filename:** `knowledge/checklists/iec_60255_protection_relay_checklist.md`

## Limitations and Caution
- Section reference map ეფუძნება ზოგად IEC 60255-ოჯახის ცოდნას, არა ამ ეგზემპლარის ვიზუალურად დადასტურებულ სექციებს.
- No final IEC/GOST compliance claim.
- პროტექციული ფუნქციების სიღრმისეული შეფასება (settings, coordination) სცილდება ამ დოკუმენტისა და first-stage scope-ს (`CLAUDE.md` §27).
