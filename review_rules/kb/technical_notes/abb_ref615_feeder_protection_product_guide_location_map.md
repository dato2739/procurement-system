Document title: Location Map — ABB REF615 Feeder Protection and Control Product Guide
Version: 1.0
Last updated: 2026-07-14
Status: Preliminary
Owner / Prepared by: David Dvalishvili / Claude

---

# Location Map — ABB REF615 Feeder Protection and Control Product Guide

**მიზანი:** დაეხმაროს მომავალ agent-ებს/მომხმარებელს, სად მოძებნონ კონკრეტული თემა REF615 Product Guide-ში (`knowledge/materials_inbox/abb_ref615_feeder_protection_product_guide.pdf`, 88 გვ., 1MRS756379 L Rev. L, 2012-05-11), სრული ტექსტის კოპირების გარეშე. გვერდის მითითებები **ვიზუალურად დადასტურებულია** (page-image confirmation), per [`abb_ref615_feeder_protection_product_guide_source_note.md`](../source_cards/abb_ref615_feeder_protection_product_guide_source_note.md).

**⚠ სრული ტექსტი/ცხრილები აქ არ არის კოპირებული** — მხოლოდ მოკლე, პარაფრაზირებული აღწერა და გვერდის მითითება, per [`copyright_safe_extraction_guideline.md`](copyright_safe_extraction_guideline.md).

---

| თემა | გვერდი/სექცია | მოკლე აღწერა |
|---|---|---|
| **Cover/Title, ვინაობა** | გვ. 1 | ABB, Relion 615 series, REF615, Product Guide |
| **Table of Contents** | გვ. 2 | სრული 31-სექციიანი სტრუქტურა, dot-leader გვერდის ნომრებით |
| **Description / Application** | §1 (გვ. 3), §4 (გვ. 16-22) | REF615-ის ზოგადი დანიშნულება (feeder IED), standard configuration-ების გამოყენების სცენარები |
| **Standard Configurations** | §2 (გვ. 3-7), Table 1-2 | 9 standard configuration (A-J), Supported functions matrix |
| **Protection Functions** | §3 (გვ. 8), Figures 1-12 (გვ. 9-21) | Protection function overview + single-line diagram თითოეული configuration-ისთვის |
| **Control (CB/Disconnector/Earthing switch)** | §6 (გვ. 23-24), Table 4 | Circuit-breaker/disconnector/earthing switch control, controllable objects |
| **Measurement** | §7 (გვ. 25) | Current/voltage/power/energy measurement, demand value |
| **Disturbance Recorder** | §8 (გვ. 25) | 12 analog + 64 binary channels |
| **Event Log** | §9 (გვ. 25) | 1024 events, non-volatile |
| **Recorded Data** | §10 (გვ. 25) | 128 fault records |
| **Condition Monitoring** | §11 (გვ. 25) | CB spring/SF6/travel-time monitoring |
| **Trip-Circuit Supervision** | §12 (გვ. 25), Table 14 (გვ. 33) | TCS description + ზუსტი ratings |
| **Self-Supervision** | §13 (გვ. 26) | IED hardware/software fault detection |
| **Fuse Failure Supervision** | §14 (გვ. 26), Table 83 (გვ. 66) | NPS/Delta algorithm |
| **Current Circuit Supervision** | §15 (გვ. 26), Tables 81-82 (გვ. 66) | CT secondary circuit fault detection |
| **Access Control** | §16 (გვ. 26) | 4-level role-based authentication |
| **Inputs and Outputs** | §17 (გვ. 26-27), Table 5 (გვ. 27) | CT/VT/BI/BO overview standard configuration-ის მიხედვით |
| **Station Communication** | §18 (გვ. 27-29), Table 6 (გვ. 29) | IEC 61850, Modbus, DNP3, IEC 60870-5-103; Ethernet ring |
| **Technical Data — Dimensions/Power Supply** | §19 (გვ. 30), Tables 7-8 | Width/height/depth/weight; Uaux 100-250V AC/DC ან 24-60V DC |
| **Technical Data — Energizing Inputs (CT/VT)** | Tables 9-10 (გვ. 31) | Rated current 1/5A ან 0.2/1A; rated voltage 60-210V AC; sensor input alternative |
| **Technical Data — Binary I/O, Output Relays** | Tables 11-15 (გვ. 32-33) | BI rating; SO/TCS output relay ratings |
| **Technical Data — Communication Interfaces** | Tables 16-18 (გვ. 33-34) | Ethernet/fibre-optic, IRIG-B |
| **Technical Data — Arc Protection Sensor** | Table 19 (გვ. 34) | Lens sensor, fibre-optic cable specs |
| **Technical Data — Environmental/EMC/Insulation/Mechanical** | Tables 20-25 (გვ. 34-37) | IP degree, temperature range, EMC tests, dielectric tests, vibration/seismic |
| **Technical Data — Product Safety/EMC/RoHS Compliance** | Tables 26-28 (გვ. 38) | LV directive, EMC directive, RoHS |
| **Protection Function Ratings/Settings (თითოეული ცალკე)** | Tables 29-68 (გვ. 39-59) | Accuracy, start time, settings range თითოეული protection function-ისთვის (PHxPTOC, DPHxPDOC, EFxPTOC, DEFxPDEF, INTRPTEF, EFPADM, WPWDE, HAEFPTOC, PHPTOV, PHPTUV, PSPTUV, FRPFRQ, NSPTOV, ROVPTOV, NSPTOC, PDNSPTOC, CCBRBRF, T1PTTR, INRPHAR, **ARCSARC**) |
| **Operation Characteristics (Curve Types)** | Table 69 (გვ. 60) | ANSI/IEC curve type-ების სია |
| **Control Functions (Autoreclosing/Synchrocheck)** | Tables 70-72 (გვ. 61-63) | DARREC, SECRSYN settings |
| **Measurement Functions** | Tables 73-80 (გვ. 64-65) | CMMXU, VMMXU, RESCMMXU, PEMMXU, FMMXU accuracy |
| **Supervision Functions** | Tables 81-83 (გვ. 66) | CCRDIF, SEQRFUF |
| **Local HMI** | §20 (გვ. 67-68), Tables 84-85 | Small/Large display specs |
| **Mounting Methods** | §21 (გვ. 68) | Flush/semi-flush/wall/rack mounting |
| **IED Case / Plug-in Unit** | §22 (გვ. 69) | CT short-circuiting contacts, mechanical coding |
| **Selection and Ordering Data** | §23 (გვ. 69-73) | 18-digit ordering key, ყოველი digit-ის მნიშვნელობა |
| **Accessories and Ordering Data** | §24 (გვ. 74), Tables 86-87 | Cables, mounting accessories order numbers |
| **Tools** | §25 (გვ. 75), Table 88 | PCM600, WebHMI, Connectivity Package |
| **Supported Functions per Tool** | Table 89 (გვ. 76) | WebHMI vs PCM600 Basic vs PCM600 Engineering Pro |
| **Terminal Diagrams** | §26 (გვ. 77-81), Figures 22-26 | 5 სრული terminal diagram (A/B, C/D, E/F, G, H/J configuration-ებისთვის) |
| **Certificates** | §27 (გვ. 82) | KEMA IEC 61850 Cert., DNV Type Approval |
| **Inspection Reports** | §28 (გვ. 82) | KEMA GOOSE performance report |
| **References** | §29 (გვ. 82) | ABB product page URL |
| **Functions, Codes and Symbols** | §30 (გვ. 83-85), Table 90 | სრული IEC 61850 ↔ IEC 60617 ↔ IEC-ANSI mapping |
| **Document Revision History** | §31 (გვ. 85) | Revisions A-L, 2007-12-20 – 2012-05-11 |
| **Contact Us / Back Cover** | გვ. 88 | ABB Oy ოფიციალური საკონტაქტო ინფორმაცია |

---

## შენიშვნა

ეს Location Map ეფუძნება **ვიზუალურად დადასტურებულ** გვერდის ნომრებს (page-footer-ზე ან section heading-ის მიმდებარედ დანახული), არა მხოლოდ TOC-ის ტექსტ-ექსტრაქციას — ამიტომ Confidence აქ **High**-ია, განსხვავებით ABB UniGear ZS1-ის location-references-ისგან, სადაც TOC column-flattened იყო.
