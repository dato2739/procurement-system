Document title: Source Note — IEC 61869-2 (GOST adoption, current transformers)
Version: 1.0
Last updated: 2026-07-09
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# წყაროს ბარათი (Source Note) — IEC 61869-2 (CT)

**Copyright Note:** სტანდარტის სრული ტექსტი არ არის კოპირებული ან შენახული, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

## 1. Source Identification

- **Current raw filename:** `knowledge/materials_inbox/IEC 61869-2.pdf`
- **Standard number:** ГОСТ IEC 61869-2 (GOST IEC 61869-2)
- **Title:** Трансформаторы измерительные. Часть 2. Дополнительные требования к трансформаторам тока / *Instrument transformers — Part 2: Additional requirements for current transformers*
- **Edition/Year:** დაფუძნებული IEC 61869-2:2012-ზე (**IDT** — identical adoption, ეს მარკირება პირდაპირ ჩანს ტექსტში: "IEC 61869-2-2012 ... (IDT)"); ზუსტი GOST-ის საკუთარი გამოცემის წელი Cyrillic-ის ვერკითხვის გამო **არ არის სრულად დადასტურებული** (ადრეულ ინვენტორიზაციაში "2013" ფრაგმენტი იყო ხილული).
- **Language:** რუსული (ინგლისური IEC სათაური ცალკეა შენარჩუნებული ბიბლიოგრაფიულ მითითებაში)
- **Document type:** МГС/ISC → Rosstandart-ის იდენტური (IDT) ადაპტაცია
- **Equipment/topic family:** current transformer (CT)
- **Source confirmation status:** **Medium** — IDT სტატუსი და ბაზისური IEC 61869-2:2012 მითითება მკაფიოდ იკითხება (ლათინური ტექსტი); დანარჩენი Cyrillic შინაარსი (definitions, clauses) ვერ იშლება.

## 2. Visual/Source Confirmation

- **რა დადასტურდა:** "IEC 61869-2-2013" საკუთარი GOST ნომერი, "IEC 61869-2-2012 ... (IDT)" ბაზისური მითითება — ორივე ლათინური ტექსტით, სუფთად იკითხება.
- **OCR/scanned შეზღუდვა:** **დიახ** — Cyrillic ტექსტის უმეტესობა ვერ იშლება; TOC-ის დონემდე struqturuli mapi ver aigo amჯერად.
- **გამოსადეგია checklist-ისთვის?** **ნაწილობრივ** — checklist შესაძლებელია აშენდეს **ზოგადი CT საინჟინრო ცოდნის საფუძველზე** (რომელიც ამ ტიპის ტრანსფორმატორის სტანდარტულ სტრუქტურას ეყრდნობა), მაგრამ **კონკრეტული clause-მითითებები ამ სპეციფიკური GOST ეგზემპლარისთვის დაუდასტურებელია**.
- **Confidence Level:** **Medium** (IDT სტატუსისთვის) / **Low** (კონკრეტული clause-მითითებებისთვის).

## 3. Scope and Relevance for This Project

- **10 kV outgoing feeder cubicle:** ცალსახად რელევანტური — CT მოთხოვნილი ელემენტია protection relay-ისა და metering-ისთვის.
- **Company technical assignment:** CT ratio, accuracy class, burden-ის ფორმალური მოთხოვნის ჩამოსაყალიბებლად.
- **Supplier offer review:** CT datasheet-ის comparison.
- **Datasheet review:** ratio/accuracy/burden cross-check.
- **Drawings/schematics:** CT circuit wiring, terminal diagram-ის ნაწილში.
- **Type/routine test evidence:** dielectric/accuracy test-ების საფუძველი.
- **Missing Data ლოგიკა:** CT ratio, accuracy class ჩვენს sample technical assignment-ში ჯერ არ იყო ცალკე გამოკვეთილი — ეს დოკუმენტი ავსებს ამ ხარვეზს.

## 4. Section Reference Map Only

*(ეს ცხრილი ეფუძნება CT-ის ზოგად საერთაშორისო საინჟინრო სტრუქტურას — ეს არ არის ამ კონკრეტული GOST ეგზემპლარის ვიზუალურად დადასტურებული TOC, რადგან Cyrillic ვერ იშლება. **მკაცრად typical/expected structure**, არა clause-ის ტექსტი):*

| სავარაუდო თემატური ბლოკი | პარაფრაზირებული საინჟინრო მნიშვნელობა |
|---|---|
| General/Scope | გამოყენების არეალის ზოგადი განმარტება |
| Definitions | CT-სპეციფიკური ტერმინოლოგია (burden, accuracy class, knee point და ა.შ.) |
| Ratings | rated primary/secondary current, ratio, accuracy class, burden |
| Design/construction | terminal marking, polarity, insulation |
| Type tests | dielectric, accuracy, short-time thermal/dynamic current ტესტები |
| Routine tests | routine accuracy/dielectric ტესტები |

## 5. Engineering Use in This Review System
- CT ratio/accuracy class-ის ფორმალური მოთხოვნის ჩამოსაყალიბებლად company technical assignment-ში.
- Supplier offer review-ში CT datasheet-ის ratio/accuracy/burden-ის cross-check.
- Protection relay-ის CT-input მოთხოვნებთან (relay-protection agent-ის workflow) დაკავშირებისთვის.

## 6. Supplier Evidence Requirements Derived From This Source
- CT ratio, accuracy class (protection/metering), burden — datasheet.
- Rated short-time thermal current, dynamic current — type test report.
- Terminal marking/polarity — datasheet/nameplate.
- Test evidence (type/routine) — model-სპეციფიკური.

## 7. Risk Triggers
- **Missing Data:** CT ratio, accuracy class, ან burden საერთოდ არ არის მითითებული.
- **Clarification Required:** protection core vs. metering core დანაწილება ბუნდოვანია.
- **Engineer Review Required:** knee point voltage მოთხოვნილია (protection CT-სთვის), მაგრამ არ არის მოწოდებული — ეს პირდაპირ უკავშირდება Relay Protection Agent-ის workflow-ს.
- **Critical Risk:** CT accuracy class არასაკმარისია protection relay-ის მოთხოვნისთვის.

## 8. Checklist Decision

- **Create checklist:** **Yes**
- **Reason:** CT — core equipment item (`CLAUDE.md` §2.3), ზოგადი CT საინჟინრო structure (ratio, accuracy, burden, terminal marking) საკმარისად სტანდარტულია checklist-ის ორგანიზებისთვის, მიუხედავად clause-დონის Cyrillic-შეზღუდვისა.
- **Proposed checklist filename:** `knowledge/checklists/iec_61869_2_current_transformer_checklist.md`

## Limitations and Caution
- **Section reference map ეფუძნება ზოგად CT საინჟინრო ცოდნას, არა ამ კონკრეტული ეგზემპლარის ვიზუალურად დადასტურებულ TOC-ს** — ეს მკაფიოდ უნდა გადაწმდეს checklist-შიც.
- IDT status მარკირებულია სტანდარტში, მაგრამ ეს GOST-ის საკუთარი edition-ის (2013) currency ცალკე დაუდასტურებელია.
- No final IEC/GOST compliance claim.
