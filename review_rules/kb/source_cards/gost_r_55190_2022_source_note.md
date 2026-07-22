Document title: Source Note — GOST R 55190-2022
Version: 1.0
Last updated: 2026-07-09
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# წყაროს ბარათი (Source Note) — GOST R 55190-2022

მომზადებულია [`source_note_template.md`](source_note_template.md)-ის სტრუქტურით. ეფუძნება [`materials_inventory.md`](../materials_inventory.md)-ის პუნქტ 15-ს და [`materials_rename_and_classification_plan.md`](../materials_rename_and_classification_plan.md)-ის პუნქტ 15-ს.

**წყაროს დონე:** ქვემოთ მოცემული ძირითადი იდენტიფიკაციის ფაქტები (სათაური, scope, replacement statement, ეფექტური თარიღი) დადასტურებულია **მომხმარებლის მიერ მოწოდებული ვიზუალური screenshot-ებით** — არა ამ სესიაში Claude-ის მიერ დამოუკიდებლად ჩატარებული image-based ინსპექციით (ეს ბლოკირებული იყო ფაილის ზომის ლიმიტით — 75 MB > 20 MB — და `pdftoppm`/poppler rendering ხელსაწყოს არარსებობით ამ გარემოში). ეს განსხვავება მკაფიოდ არის მითითებული Limitations სექციაში.

---

## Document Title

**რუსული (User-confirmed via screenshot):** Устройства комплектные распределительные в металлической оболочке (КРУ) на номинальное напряжение до 35 кВ. Общие технические условия

**ინგლისური (from document, user-confirmed):** *Metal-clad switchgear for rated voltages up to 35 kV. General specifications*

## Standard Number

GOST R 55190-2022 (ГОСТ Р 55190-2022)

## Year / Edition

—2022; ეფექტური თარიღი **2023-01-01**.

## Organization / Source

Rosstandart — Russian Federation national standard (национальный стандарт Российской Федерации).

## Language

რუსული, ინგლისური სათაურის ჩათვლით დოკუმენტში.

## Raw Private File Reference

`knowledge/materials_inbox/GOST_R_55190_2022_to_verify_raw_private.pdf.pdf` — ფაილი **არ არის** გადატანილი, გადარქმეული ან commit-ული; რჩება მხოლოდ ლოკალურ workspace-ში, `.gitignore`-ით დაცული, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

## Copyright Note

დოკუმენტის სრული ტექსტი **არ არის** კოპირებული ამ ბარათში — არცერთი clause, ცხრილი ან დანართის ტექსტი. მოცემულია მხოლოდ საკუთარი სიტყვებით გადმოცემული scope-ის შეჯამება და სექციების ზოგადი მითითებები.

## Use Status

- [x] Preliminary
- [ ] Approved
- [ ] Legacy
- [ ] Current — unknown

**შენიშვნა:** ეს დოკუმენტი მონიშნულია როგორც **Preferred Preliminary Source** ამ ეტაპისთვის — ანუ, საუკეთესო ხელმისაწვდომი domestic-jurisdiction წყარო 6–10 kV metal-enclosed switchgear-ისთვის ამ Knowledge Base-ში, მაგრამ **არა IEC-ekvivalentobis dadasturebis** და **არა final compliance authority**. IEC 62271-200-თან შესაბამისობის ხარისხი (IDT/MOD/NEQ) screenshot-ებიდან **არ დასტურდება**. Current IEC compliance ამ ბარათით **არ არის** დეკლარირებული.

## Scope Summary (in our own words)

წინამდებარე სტანდარტი ეხება **AC metal-clad / metal-enclosed switchgear**-ს (КРУ — комплектные распределительные устройства в металлической оболочке), ნომინალური სიხშირით 50/60 Hz, ნომინალური ძაბვისთვის **10 kV-ის ჩათვლით 35 kV-მდე**. ეს **პირდაპირ და ცალსახად მოიცავს 10 kV outgoing feeder cubicle-ის ძაბვის კლასს** — ჩვენი პროექტის ცენტრალურ equipment class-ს. სტანდარტი წარმოადგენს "Общие технические условия" (General specifications) ტიპის დოკუმენტს — ანუ ზოგადი ტექნიკური პირობები: კონსტრუქცია, რეიტინგები, ტესტების პროგრამა და მისთ. ის ცვლის (**replaces**) წინა გამოცემას — **GOST R 55190-2012** — 2023-01-01-დან.

## Relevant Equipment

switchgear / cubicle (indoor, metal-enclosed/metal-clad, ≤35 kV); პირდაპირ რელევანტურია 10 kV outgoing feeder cubicle-ისთვის [Source: CLAUDE.md, section 2.1, 2.2, 2.3].

## Relevant Agents

- **standards-compliance** (პირველადი) — domestic-jurisdiction switchgear სტანდარტთან შესაბამისობის შემოწმებისთვის.
- **technical-specification** (მეორადი) — vendor-neutral spec-ის structure-ის დასაბუთებისთვის.
- **supplier-offer-review** — მომავალი checklist-ის გამოყენებით მიმწოდებლის offer-ის შედარებისთვის.

## Main Topics Covered

- Metal-clad/metal-enclosed switchgear-ის ზოგადი ტექნიკური პირობები (general specifications), ≤35 kV;
- ტერმინები, განსაზღვრებები, აბრევიატურები;
- classification (მოწყობილობის კლასიფიკაცია);
- ტექნიკური მოთხოვნები (technical requirements) — კონსტრუქცია, რეიტინგები;
- ტესტების პროგრამა;
- დანართები (Приложение А, Б — შინაარსი დაუდასტურებელია, იხ. Limitations).

## Section References Only

*(სექციების ნომრები და გვერდების დიაპაზონი მოცემულია სტრუქტურული TOC-ის მიხედვით, ტექსტური `pdftotext` ექსტრაქციიდან — არა კონკრეტული Cyrillic სექციის სათაურები, რომლებიც ჯერ არ არის დადასტურებული ვიზუალურად):*

- Section 1 (გვ. 1)
- Section 2 (გვ. 1)
- Section 3 — Terms, definitions, abbreviations *(ტიპური დასახელება, დაუდასტურებელი)* (გვ. 4)
- Section 4 — Classification *(ტიპური დასახელება, დაუდასტურებელი)* (გვ. 13)
- Section 5 — Technical requirements *(ტიპური დასახელება, დაუდასტურებელი)* (გვ. 16)
- Section 6 (გვ. 29)
- Section 7 (გვ. 33)
- Section 8 (გვ. 36)
- Section 9 (გვ. 64)
- Section 10 (გვ. 64)
- Section 11 (გვ. 65)
- Приложение А (გვ. ~66)
- Приложение Б (გვ. შემდეგ)
- ბიბლიოგრაფია/литература (გვ. ~78–79)

**ეს სექციური რუკა ეფუძნება მხოლოდ TOC-ის გვერდის ნომრებს (სტრუქტურული მეტამონაცემი) — არა კონკრეტული სექციის დასახელებების ან clause-ის ტექსტის წაკითხვას.** სექციების Cyrillic დასახელებები ჯერ არ არის ვიზუალურად დამოწმებული.

## Limitations

- **მხოლოდ ნაწილობრივი ვიზუალური დადასტურება.** სათაური (რუსული და ინგლისური), scope-ის ძაბვის დიაპაზონი (≤35 kV), replacement statement (GOST R 55190-2012-ის ჩანაცვლება) და ეფექტური თარიღი (2023-01-01) დადასტურებულია **მომხმარებლის მიერ მოწოდებული screenshot-ებით** — ეს არის სანდო წყარო, მაგრამ ეს ბარათი აღიარებს, რომ Claude-მ ამ კონკრეტულ სესიაში **ვერ ჩაატარა** დამოუკიდებელი image-based ინსპექცია (ფაილის ზომა 75 MB აღემატება 20MB ლიმიტს, და `pdftoppm`/poppler page-rendering ხელსაწყო ამ გარემოში არ არის დაინსტალირებული).
- **IEC 62271-200 ekvivalentoba დაუდასტურებელია.** Screenshot-ებით არ დასტურდება, ეხება თუ არა ეს გამოცემა IEC 62271-200-ს (IDT/MOD/NEQ სტატუსი უცნობია). ცალკე, ამ სესიის ადრეულ ეტაპზე ჩატარებულმა `pdftotext` ტექსტურმა ძებნამ (დაბალი Confidence, არა ვიზუალურად დადასტურებული) აჩვენა, რომ დოკუმენტის ბიბლიოგრაფია შეიცავს "IEC 62271-1: 2017"-ის მითითებას, ხოლო "62271-200" სტრიქონი საერთოდ არ მოიძებნა მთელ ტექსტში — ეს არის **დამატებითი, სუსტი სიგნალი**, არა დადასტურებული ფაქტი, და არ უნდა იქნას გამოყენებული, როგორც IEC 62271-200-თან ან 62271-1-თან ურთიერთობის საბოლოო დასკვნა.
- **Clause-ის დონის შინაარსი, ცხრილები და დანართები არ არის განხილული.** ეს ბარათი ეფუძნება მხოლოდ სათაურს, scope-ს, replacement statement-ს და TOC page-map-ს.
- **ეს არ არის IEC compliance-ის დამტკიცება.** Current IEC compliance ამ ბარათით **არ არის** დეკლარირებული.
- **ეს არ არის საბოლოო შესაბამისობის ავტორიტეტი (final compliance authority).** ეს source note წარმოადგენს მხოლოდ checklist/review-ის ბაზისს.

## Recommended Next Action

1. ეს დოკუმენტი გამოცხადებულია, როგორც **preferred preliminary source** 6–10 kV metal-enclosed switchgear/cubicle მუშაობისთვის — უპირატესობით `gost IEC 62271-200.pdf` (GOST R 55190-2012, [`materials_inventory.md`](../materials_inventory.md) პუნქტი 8) წინაშე, რომელიც ახლა legacy/superseded candidate-ადაა მონიშნული.
2. სასურველია ცალკე checklist-ის მომზადება ([`checklist_template.md`](../checklists/checklist_template.md)-ის სტრუქტურით) ამ source note-ის საფუძველზე, ანალოგიურად [`iec_62271_200_10kv_metal_enclosed_switchgear_checklist.md`](../checklists/iec_62271_200_10kv_metal_enclosed_switchgear_checklist.md)-ისა.
3. Real project review-ისთვის, **მიმწოდებლის (supplier) მტკიცებულება აუცილებელია** — ეს source note მხოლოდ ადგენს, რა უნდა შემოწმდეს, არ წარმოადგენს კონკრეტული cubicle-ის/მოწოდების შესაბამისობის მტკიცებულებას.
4. **არცერთი საბოლოო compliance დასკვნა არ უნდა გაკეთდეს მხოლოდ ამ source note-ის საფუძველზე** — საჭიროა Standards & Compliance Agent-ის ჩართვა, დამატებითი ვიზუალური/clause-level დადასტურება, და, საჭიროების შემთხვევაში, ცალკე შემოწმება IEC 62271-200/62271-1-თან ურთიერთობის დასაზუსტებლად.
5. თუ სამომავლოდ საჭირო გახდება TOC-ის სექციების ზუსტი Cyrillic დასახელებების დადასტურება, ეს მოითხოვს ან (ა) ვიზუალურ screenshot-ებს დამატებითი გვერდებისთვის, ან (ბ) PDF rendering ხელსაწყოს (`pdftoppm`/poppler) ხელმისაწვდომობას ამ გარემოში.
