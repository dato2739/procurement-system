Document title: Source Note — ABB UniGear ZS1 Technical Catalogue
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# წყაროს ბარათი (Source Note) — ABB UniGear ZS1 Technical Catalogue

წარმოდგენილი ბარათი მომზადებულია [`source_note_template.md`](source_note_template.md)-ის სტრუქტურით და ეფუძნება [`materials_inventory.md`](../materials_inventory.md)-ის პუნქტ 16-ს.

**⚠ მნიშვნელოვანი შესავალი შენიშვნა:** ეს დოკუმენტი არის **მწარმოებლის (ABB) technical catalogue**, **არა** IEC/GOST/სხვა mandatory სტანდარტი. ის შეიძლება გამოყენებულ იქნას მხოლოდ როგორც **manufacturer reference** — supplier evidence-ის შედარების დამხმარე წყარო, არასოდეს როგორც mandatory compliance-ის დამტკიცების საფუძველი (per `CLAUDE.md` §3.2, §18.1).

---

## Document Title

*UniGear ZS1 — Medium-voltage air-insulated switchgear up to 24 kV* (სრული ტექნიკური კატალოგი, დოკუმენტის კოდი `1VCP000138 REV Y 2026` ხილული back-cover-ზე).

## Standard Number

N/A — მწარმოებლის კატალოგი, არა სტანდარტი.

## Manufacturer

ABB (Distribution Solutions / Electrification ბიზნეს-ერთეული).

## Product Family

UniGear ZS1

## Document Type

Manufacturer technical catalogue — სრული პროდუქტ-ხაზის ტექნიკური მიმოხილვა (103 გვერდი).

## Page Count

**103 გვერდი** — დადასტურებულია `pdftotext` form-feed დათვლით და boundary-შემოწმებით (გვ.103 = back-cover/contact page, გვ.104-105 = ცარიელი).

## Year / Edition

დოკუმენტის კოდი `1VCP000138 REV Y 2026` — ზუსტი გამოცემის თარიღი დამატებით არ არის დამოწმებული.

## Organization / Source

ABB Ltd., Zurich, Switzerland — ოფიციალური საკონტაქტო ინფორმაცია ხილულია back-cover-ზე.

## Language

ინგლისური.

## Raw Private File Reference

`knowledge/materials_inbox/abb_unigear_zs1_switchgear_catalogue.pdf` (~95 MB) — ფაილი **არ არის** გადატანილი, გადარქმეული ან commit-ული; რჩება მხოლოდ ლოკალურ workspace-ში, `.gitignore`-ით დაცული, per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md).

## Copyright Note

დოკუმენტის სრული ტექსტი/ცხრილები/გრაფიკა **არ არის** კოპირებული ამ ბარათში. მოცემულია მხოლოდ საკუთარი სიტყვებით გადმოცემული, პარაფრაზირებული შეჯამება, გვერდის მიახლოებითი მითითებებით.

## Extraction Method (მნიშვნელოვანი)

დამუშავება ჩატარდა **მხოლოდ ტექსტ-ექსტრაქციით** (`pdftotext`) — არა ვიზუალური/image-based extraction-ით. მიზეზი: ფაილი (~95 MB, 103 გვ.) სცილდება vision-tool-ის 20 MB ლიმიტს, ხოლო გვერდობრივი ვიზუალური რენდერისთვის საჭირო `pdftoppm`/poppler ამ გარემოში დაინსტალირებული არ არის (დადასტურებული `PROCESS ONE MATERIAL — diagnostic`-ის ეტაპზე). შედეგად:
- **ნარატიული ტექსტი** (აღწერები, feature-ების განმარტებები, ტესტების ჩამონათვალი) — **სუფთად და საიმედოდ** იკითხება.
- **მკვრივი, მრავალსვეტიანი რიცხვითი ცხრილები** (Electrical characteristics, LSC Classification, dimensional/Technical data) — plain-text extraction-ში სვეტების ზუსტი შესაბამისობა **დაუზუსტებელია** (row/column მიბმა ბუნდოვანია ვიზუალური დადასტურების გარეშე).

## Use Status

- [x] Preliminary
- [ ] Approved
- [ ] Legacy
- [ ] Current — unknown

**შენიშვნა:** სტატუსი — **Preliminary**. ვინაობა და ნარატიული ტექნიკური content — Medium-High Confidence. ზუსტი რიცხვითი reyting-ცხრილები — Low Confidence, ვიზუალურად დაუდასტურებელი.

## Relevance to 6–10 kV Switchgear/Cubicle Review

UniGear ZS1-ის rated voltage კლასებია **7.2 / 12 / 17.5 / 24 kV**. **12 kV** კლასი, ჩვეულებრივი IEC საინჟინრო კონვენციით, შეესაბამება **10 kV** ნომინალურ განაწილების სისტემას — **ეს შესაბამისობა არის Assumption/ზოგადი კონვენცია, არა კატალოგში პირდაპირ დაფიქსირებული ფაქტი** (კატალოგი არასდროს იყენებს სიტყვასიტყვით "10 kV"-ს, როგორც rated class-ს; ტექსტში ნაპოვნი "10 kV" შემთხვევები მხოლოდ ერთ, არარელევანტურ short-circuit calculation მაგალითში გვხვდება). შესაბამისად, 6–10 kV პროექტთან პირდაპირი კავშირი — **Engineer Review Required**, არა ავტომატურად confirmed.

## Useful Technical Areas (დამოწმებული content-ის მიხედვით)

- პროდუქტის ვინაობა და საბაზისო კონფიგურაცია (High Confidence);
- IEC classification/LSC (LSC2B, PM) და IAC (Internal Arc Classified — AFLR) ცნებების ნარატიული განმარტება (High Confidence);
- compartment structure, busbar, cable compartment, earthing switch, gas exhaust duct (High Confidence);
- VCB (VD4/VM1/VD4G), ConVac vacuum contactor, switch-disconnector — ნარატიული აღწერა (High Confidence);
- Instrument transformers (TPU CT, TJC/TDC/TJP VT) და ABB sensor-technology ალტერნატივა — IEC 61869-1/2/3 შესაბამისობის განცხადება (High Confidence);
- Interlocking mechanisms (მანდატორული ინტერლოკები [1-5], locking magnets), UFES active arc protection (High Confidence);
- Type/routine test პროგრამის ჩამონათვალი (High Confidence);
- Electrical characteristics/dimensional ცხრილები — **Low Confidence** (column misalignment).

## Relevant Equipment

switchgear / cubicle (MV air-insulated), VCB, disconnector/earthing switch, CT/VT (per `CLAUDE.md` §2.3).

## Relevant Agents

- **supplier-offer-review** (პირველადი) — ABB UniGear ZS1 შემოთავაზების evidence-mapping-ისთვის.
- **technical-specification / standards-compliance / relay-protection** (მეორადი, reference only — **არა** mandatory compliance წყარო).

## Main Topics Covered

Description/Applications; IEC Classification/LSC/IAC; Design features (compartments/busbars/cables/earthing/gas duct); Fully type-tested (test program); Safety/Interlocks/UFES; Vacuum circuit-breaker (VD4/VM1/VD4G); ConVac vacuum contactor; Switch-disconnector; Instrument transformers/sensors; Single-line diagrams (structural reference only); Technical/dimensional data.

## Section References Only (მიახლოებითი გვერდის მითითებები)

⚠️ TOC-ის ტექსტ-ექსტრაქცია column-flattened იყო — ქვემოთ მოცემული გვერდები დაფუძნებულია inline page-footer ციფრებზე, რომლებიც უშუალოდ დავადასტურეთ ტექსტში; **მიახლოებითია, არა 100%-ით ზუსტი**:

- გვ. ~1 — Cover/title
- გვ. ~8–11 — Description / Applications
- გვ. ~12 — Electrical characteristics ცხრილი (Low Confidence მნიშვნელობებზე)
- გვ. ~13–14 — IEC Classification / LSC / IAC narrative
- გვ. ~15 — Design features (compartments, busbars, cable connections, earthing switch, gas exhaust duct)
- გვ. ~23–26 — Vacuum circuit-breaker (VD4/VM1/VD4G)
- გვ. ~40–41 — Instrument transformers
- გვ. ~41–42 — Current and voltage sensors
- earthing switch/UFES section — გვერდი დაუდასტურებელი ზუსტად, სექცია ტექსტურად ლოკალიზებულია სათაურით "UniGear ZS1 Ultra Fast Earthing Switch"
- Technical data (dimensional/rated-current ცხრილები) — სექცია არსებობს, ზუსტი გვერდი დაუდასტურებელი
- back cover — გვ. 103 (დოკუმენტის კოდი `1VCP000138 REV Y 2026`)

## Limitations

- **⚠ მთავარი შეზღუდვა:** ვიზუალური (page-image) დამოწმება ამ ეტაპზე შეუძლებელია (95 MB > 20 MB vision-tool ლიმიტი; `pdftoppm` არ არის დაინსტალირებული) — ეს ნიშნავს, რომ **მკვრივი რიცხვითი ცხრილები ვერ დამოწმდა ვიზუალურად**.
- Edition/publication თარიღი მხოლოდ დოკუმენტ-კოდიდან ("2026") არის ივარაუდება, არა ცალკე დამოწმებული publication date-ით.
- "10 kV"-ის პირდაპირი შესაბამისობა 12 kV კლასთან — Assumption, არა ტექსტში ცხადად ნაპოვნი ფაქტი.
- TOC-ის გვერდის დიაპაზონები column-flattened ექსტრაქციის გამო ნაწილობრივ ბუნდოვანია — Section References ზემოთ მიახლოებითია.
- ეს არის მწარმოებლის საკუთარი მასალა — **არასოდეს** უნდა იქნას გამოყენებული, როგორც IEC/GOST mandatory compliance-ის დამტკიცება.

## Citation Guidance

```text
[Source: ABB UniGear ZS1 Technical Catalogue, p. ~15 (Design features) — manufacturer reference only, narrative content, page number approximate]
[Source: ABB UniGear ZS1 Technical Catalogue, Electrical characteristics table (~p.12) — Low Confidence, exact values not visually verified]
```

კონკრეტული რიცხვითი მნიშვნელობის ციტირებისას (rated voltage/current/short-time withstand) **სავალდებულოა** დამატებითი შენიშვნა "Low Confidence — table column alignment not visually verified" — არასოდეს არ უნდა წარმოდგინდეს, როგორც High Confidence ფაქტი ამ ცხრილებიდან.

## Copyright-Safe Usage Rule

Per [`copyright_safe_extraction_guideline.md`](../technical_notes/copyright_safe_extraction_guideline.md): raw PDF რჩება მხოლოდ `materials_inbox/`-ში, git-ignored; არცერთი გრძელი ტექსტი/ცხრილი/გრაფიკა არ კოპირდება ამ ბარათში; მხოლოდ პარაფრაზირებული, საკუთარი სიტყვებით შეჯამებული ინფორმაცია გამოიყენება.

## Status / Confidence

**Preliminary.** ვინაობა და ნარატიული ტექნიკური content — **High-Medium Confidence**. ზუსტი რიცხვითი reyting-ცხრილები — **Low Confidence / Engineer Review Required**. 6-10 kV პირდაპირი შესაბამისობა — **Engineer Review Required** (Assumption-ზე დაფუძნებული).

## Recommended Next Action

1. თუ საჭირო გახდება ზუსტი რიცხვითი rated-მნიშვნელობის დამტკიცება (მაგ. კონკრეტული 12 kV/40 kA/2500 A კომბინაცია) რეალური supplier offer-ის შედარებისთვის — მოთხოვნილ იქნას დამოუკიდებელი supplier datasheet/type-test evidence, არა ამ catalogue-ის ცხრილის ექსტრაქციაზე დაყრდნობა.
2. თუ მომავალში `pdftoppm`/poppler ან მცირე extracted-pages PDF გახდება ხელმისაწვდომი — რეკომენდებულია ცხრილების ვიზუალური დამოწმება, კონკრეტულად Electrical characteristics (გვ. ~12) და Technical/dimensional data სექციები.
3. ეს source note ემსახურება, როგორც [`abb_unigear_zs1_switchgear_catalogue_evidence_map.md`](../technical_notes/abb_unigear_zs1_switchgear_catalogue_evidence_map.md)-ის საფუძველი — **evidence-mapping reference only, not a compliance authority**.
