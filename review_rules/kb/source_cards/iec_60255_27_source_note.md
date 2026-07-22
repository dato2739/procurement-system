Document title: Source Note — IEC 60255-27 (GOST adoption, product safety requirements)
Version: 1.0
Last updated: 2026-07-09
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# წყაროს ბარათი (Source Note) — IEC 60255-27

**Copyright Note:** სტანდარტის სრული ტექსტი არ არის კოპირებული ან შენახული, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

## 1. Source Identification

- **Current raw filename:** `knowledge/materials_inbox/IEC 60255-27.pdf`
- **Standard number:** ГОСТ IEC 60255-27 (GOST IEC 60255-27)
- **Title:** Реле измерительные и устройства защиты. Часть 27. Требования к безопасности изделия / *Measuring relays and protection equipment — Part 27: Product safety requirements*
- **Edition/Year:** —2013 (identical adoption — IDT — of IEC 60255-27:2005); effective in Russia ~2015-07-01
- **Language:** რუსული (ინგლისური IEC სათაური ცალკეა)
- **Document type:** МГС/ISC → Rosstandart-ის IDT ადაპტაცია
- **Equipment/topic family:** protection relay — product safety (electrical/mechanical/thermal safety)
- **Source confirmation status:** **Medium** — front matter იკითხება (standard number, IDT სტატუსი, ბაზისური IEC 60255-27:2005 მითითება); clause-დონე Cyrillic-ით შეზღუდულია.

## 2. Visual/Source Confirmation

- **რა დადასტურდა:** "ГОСТ IEC 60255-27—2013", "IEC 60255-27:2005 IDT", enactment order № 62-П (approx. 2013).
- **OCR/scanned შეზღუდვა:** დიახ — Cyrillic clause-შინაარსი ვერ იშლება.
- **გამოსადეგია checklist-ისთვის?** ნაწილობრივ — safety-topic-ის ზოგადი structure-ის დონეზე.
- **Confidence Level:** **Medium** (identity) / **Low** (clause-დონე).

## 3. Scope and Relevance for This Project

- **10 kV outgoing feeder cubicle:** რელევანტური — relay-ის უსაფრთხოების (electrical/thermal/mechanical) მოთხოვნების დასადასტურებლად.
- **Company technical assignment:** relay-ის safety-related მოთხოვნების (insulation, temperature, mechanical robustness) ჩამოსაყალიბებლად.
- **Supplier offer review:** relay-ის safety test evidence-ის შემოწმებისთვის.
- **Type/routine test evidence:** electrical safety (dielectric withstand relay-ისთვის), thermal, mechanical robustness tests.
- **Missing Data/Engineer Review Required ლოგიკა:** relay-ის product safety test evidence (მაგ. dielectric withstand test relay-ის თვითონ, არა cubicle-ის) ხშირად გამოტოვებულია supplier package-დან — checklist-მა ეს ცალკე უნდა დააფიქსიროს.

## 4. Section Reference Map Only

*(ზოგადი product-safety-სტანდარტის თემატური სტრუქტურა — **არა** ამ ეგზემპლარის ვიზუალურად დადასტურებული TOC):*

| სავარაუდო თემატური ბლოკი | პარაფრაზირებული საინჟინრო მნიშვნელობა |
|---|---|
| Scope | გამოყენების არეალი — relay-ის product safety |
| Electrical safety requirements | dielectric withstand, insulation resistance relay-ის corpus-ისთვის |
| Thermal safety | ცეცხლგამძლეობა, თერმული სტაბილურობა |
| Mechanical safety | corpus-ის მექანიკური სიმტკიცე |
| Marking requirements | უსაფრთხოებრივი მარკირება |
| Test requirements | type test-ების ჩამონათვალი safety-ისთვის |

## 5. Engineering Use in This Review System
- Supplier offer review-ში relay-ის product-safety test evidence-ის ცალკე მოთხოვნა (განსხვავებით cubicle-ის type test-ისგან).
- Company technical assignment-ში relay-ის safety-მოთხოვნების ჩამონათვალის შესავსებად.

## 6. Supplier Evidence Requirements Derived From This Source
- Relay product safety type test report (electrical/thermal/mechanical).
- Marking compliance evidence.

## 7. Risk Triggers
- **Missing Data:** relay product safety test evidence საერთოდ არ არსებობს.
- **Clarification Required:** safety marking ბუნდოვანია.
- **Engineer Review Required:** relay-ის safety test evidence ეხება სხვა model/configuration-ს.
- **Critical Risk:** relay-ის electrical safety test evidence საერთოდ არ არსებობს და relay-ს პირდაპირი წვდომა აქვს control/protection circuit-ზე.

## 8. Checklist Decision

- **Create checklist:** **Yes, ერთობლივად IEC 60255-1-თან**
- **Reason:** იხ. [`iec_60255_source_note.md`](iec_60255_source_note.md) §8.
- **Proposed checklist filename:** `knowledge/checklists/iec_60255_protection_relay_checklist.md`

## Limitations and Caution
- Section reference map ზოგადია, არა ვიზუალურად დადასტურებული.
- No final IEC/GOST compliance claim.
