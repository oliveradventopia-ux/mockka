# Source registry · Microsoft Azure Fundamentals (AZ-900)

Written at S1, before distillation. Format + tier rules:
`methodology/01-source-distillation.md` (§tiers, §registry). Every downstream artefact must
trace back to an entry here. Forums and exam-experience threads are always excluded.

## Registered sources

| id | type | author | url | date_accessed | license / permission basis | usage constraint |
|---|---|---|---|---|---|---|
| `az900-studyguide` | public_blueprint | Microsoft Corporation | https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900 | 2026-08-16 | public publication by the certification owner; facts only (skill areas, weight bands, objective bullets, pass mark, scoring model) | blueprint data + vocabulary |
| `ms-practice-assessment` | public_practice_set | Microsoft Corporation | https://learn.microsoft.com/en-us/credentials/certifications/exams/az-900/practice/assessment?assessment-type=practice&assessmentId=23 | 2026-08-16 (metadata only — **content not accessed**) | free vendor-published practice assessment; Microsoft documents it as free and unlimited-retake on the Practice Assessments page | classification-only — **PENDING ACCESS** (see below) |
| `ms-learn-az900-modules` | public_syllabus | Microsoft Corporation (Microsoft Learn WWL) | https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/ · https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/ · https://learn.microsoft.com/en-us/training/paths/describe-azure-management-governance/ | 2026-08-16 | public publication by the certification owner; free, no paywall, **no sign-in required** for module and knowledge-check units | vocabulary + classification |
| `tutorialsdojo-az900` | public_practice_set | Jon Bonso, Tutorials Dojo | https://tutorialsdojo.com/az-900-microsoft-azure-fundamentals-sample-exam-questions/ | 2026-08-16 | freely published article, no paywall or login; named author; the free sampler page is published as a public marketing artefact of a paid product, and the vendor publicly positions its material as originally authored | classification-only |
| `insidecloud-az900` | public_practice_set | Inside Cloud and Security (site/channel operator; **no individual author named** on the page and none verifiable at S1 `[UNVERIFIED]`) | https://insidethemicrosoftcloud.com/az900quiz/ | 2026-08-16 | freely published quiz page, no paywall, no login, no signup | classification-only |

Derivation docs: one `source-<id>.md` per entry above (Artefact A for practice sources,
Artefact B for syllabus-grade sources).

| id | artefact | file |
|---|---|---|
| `az900-studyguide` | Artefact B — syllabus distillation (57 objective bullets) | [`source-az900-studyguide.md`](source-az900-studyguide.md) |
| `ms-learn-az900-modules` | Artefact A — practice distillation (35 knowledge-check items, full) + module→domain map | [`source-ms-learn-az900-modules.md`](source-ms-learn-az900-modules.md) |
| `tutorialsdojo-az900` | Artefact A — practice distillation (10 items, full) | [`source-tutorialsdojo-az900.md`](source-tutorialsdojo-az900.md) |
| `insidecloud-az900` | Artefact A — practice distillation (100 items, full) | [`source-insidecloud-az900.md`](source-insidecloud-az900.md) |
| `ms-practice-assessment` | *(none — access pending)* | — |

### Why `ms-learn-az900-modules` is one source, not two

The Microsoft Learn AZ-900 curriculum is *both* a syllabus-grade source (module prose supplies
canonical vocabulary) and a practice source (each module ends with a knowledge check). It is
registered **once** and distilled into **one** derivation doc, because registering it twice would
manufacture convergence between two readings of the same material. Its derivation doc is an
Artefact A (the knowledge-check items are the calibration payload) with the module→domain
reconciliation table an Artefact B normally carries. Deviation from the one-artefact-per-type rule
in `methodology/01-source-distillation.md`, recorded deliberately.

For convergence arithmetic at S3: `az900-studyguide` and `ms-learn-az900-modules` are both
**Microsoft** and are *not* fully independent readings of the exam. The genuinely independent
signal in this package comes from `tutorialsdojo-az900` and `insidecloud-az900`.

### `ms-practice-assessment` — pending access, deliberately not accessed

The Tier-1 official Practice Assessment is the best available calibration for this exam (Microsoft:
"Created by the same team that develops our certification exams") and is registered so the gap is
visible rather than silent.

What is **publicly documented** (Practice Assessments page + exam-duration page, both accessed
2026-08-16):

- Practice Assessments are **free**, can be **attempted as many times as desired**, and give a
  score report with **the answer, the rationale, and links to further learning for every question**
  (https://learn.microsoft.com/en-us/credentials/certifications/practice-assessments-for-microsoft-certifications).
- AZ-900 is item 16 on the published availability list, so an assessment exists for this exam.
- Microsoft states the questions "are not the same as what you will see on the exam", and that the
  assessment is **not illustrative of the length or complexity of the exam** — so it calibrates
  style, wording and difficulty, not paper shape.
- Microsoft states Practice Assessments are **authored with assistance from AI**.
- **An account is required:** "Simply sign in to your Microsoft Learn profile or create an account
  before taking a Practice Assessment," and the documented user flow step 2 is "If prompted, sign in
  using your Microsoft Account or create one."

Evidence the wall is hard, not cosmetic (recorded so the Gate-1 reviewer does not have to re-derive
it): the assessment page at the URL above returns a JavaScript shell with `assessment_id=23` in its
metadata and no question content. Its rendering script contains an explicit auth gate —
unauthenticated visitors are redirected to sign-in before any assessment object is constructed — and
the assessment endpoints referenced by that script return 404 to unauthenticated requests.

No account was created and no sign-in was performed (free-first / no-signup rule), so **no content
from this source has been read and no artefact exists for it**. It carries zero weight in the
concept inventory. **Gate-1 decision for Oliver:** authorise (or decline) a Microsoft Learn sign-in
so a later S2 top-up pass can distil the assessment. Note the trade: it is the only Tier-1 source
for this exam, and without it every format-mix claim in this package rests on third parties.

## Excluded sources — screened and rejected

Exclusion is a Gate-1 legality matter, so the screening is recorded, not just the outcome. Method:
screen candidate banks **by content against the dump corpus, lowest ids first** — never by licence
file. Eight candidates screened, **six excluded**, one deferred, one carried forward.

| candidate | why excluded | evidence |
|---|---|---|
| ExamTopics AZ-900 pages and the mirror/aggregator sites carrying the same corpus (examsnet, pass4success, vceguide, exam4training, pupuweb, certdeed, itexams, killexams, study-here) | braindump / "actual questions" collections built from candidate recall of live sittings — the always-excluded class, and NDA-conflicted | sites self-describe as dumps or "actual free exam questions"; corpus is numbered as `topic 1 question N` recall entries; pupuweb's own URL slug is `…actual-exam-question-answer-dumps…` |
| `Ditectrev/Microsoft-Azure-AZ-900-Microsoft-Azure-Fundamentals-Practice-Tests-Exams-Questions-Answers` (≈4.5k-line README bank, 351 stars) | **dump lineage, and no licence at all.** GitHub reports `license: null` while the same corpus is sold as EPUB/PDF on five storefronts — so there is no permission basis even for an import lane | screened lowest-id-first: the first two content items I checked both land in the dump corpus — the "correlate events from multiple resources into a central repository" item appears verbatim on examsnet/vceguide/study-here and as ExamTopics AZ-900 topic-1 q117, and the "minimum number of virtual machines and availability zones for a 99.99% SLA" item is the ExamTopics topic-1 q21/q116/q120 family. The text also carries OCR scars (`Azure loT Hub`, `Azure Al bot` — lowercase L for capital I), the signature of text lifted from screenshots rather than authored |
| `WISNIOM/azure-fundamentals` (MIT, 400+ items) | **licence does not launder recalled exam content.** MIT covers the repository, not the provenance of the items inside it | the repo's own README: "Over 400 questions scrapped from this [repo]" linking to the excluded Ditectrev bank |
| `eduardconstantin/azure-cloud-exams` (MIT, 54 stars) | same lineage, one hop further | its own README: "Question sets scrapped from this [Ditectrev] collection", and an UPDATE line stating the project now uses the Ditectrev repo *as its database* |
| `mscertquiz.com` AZ-900 (500 items, marketed "no signup") | paid product behind a small free sampler (40 of 500 free, "$14.99 for the full 500"); no named author; unverifiable performance claims — fails free-first and fails attribution | pricing and gating stated on its own landing page; the "no signup" claim applies only to a 5-question teaser |
| Brainly / Chegg / Quizlet re-hosts of AZ-900 items | unlicensed re-hosting of other people's items with the provenance stripped — un-screenable by construction | surfaced during screening of `insidecloud-az900` stems; the same stems appear there without attribution |
| Whizlabs, SkillCertPro, Udemy sets, Tutorials Dojo's **full** practice exams, Microsoft's own **paid** offerings | payment and/or account signup required — free-first + no-signup rule; not screened further | portals require registration or purchase |
| Reddit r/AzureCertification and equivalent exam-experience threads | always excluded by methodology (plan §Decisions 2) | — |

### Deferred, not excluded — `marczak.io` AZ-900 course practice tests

Adam Marczak's free AZ-900 course (https://marczak.io/az-900/, published 2020-07-07) carries a
per-episode practice test across 39 episodes — a named Azure MVP, freely published, no login, and
no dump signature found. It is **deferred rather than registered** for two reasons, both
methodological rather than legal:

1. **Blueprint drift.** The course is built against the pre-2021 AZ-900 outline (its own module
   headers read "Describe cloud concepts (15-20%)", and its episode list covers Cosmos DB, IoT Hub,
   HDInsight, Databricks, Azure Blueprints, Security Center, Azure AD, NSG/ASG, UDR — a large
   fraction of which the 2026-07-20 outline no longer contains). Calibrating on it would import a
   five-year-old paper shape.
2. **Keys are not in the page.** The practice tests are interactive; option text renders
   server-side but the key does not, so per-item distractor classification would rest on my own
   answer determination for ~195 items, with no possibility of a cross-check.

If Gate 1 wants a fourth practice source, the cheaper win is authorising the Tier-1 official
Practice Assessment, not this.

### Screening note on `insidecloud-az900` (carried forward)

Screened the same way, lowest-id-first: item 2 ("Tailspin Toys … Office 365 and Microsoft Azure")
and item 5 ("Azure SQL Database and an on-premises SQL cluster represent a(n) ___ expense…") were
searched against the corpus. Item 5 has **no external match at all**; item 2 surfaces only on
homework-help re-hosts (Brainly, Chegg), which quote *this* quiz rather than the dump corpus. There
is no numbered correspondence to any ExamTopics topic/question index, and the option sets differ
from the dump versions of topically similar items — e.g. its "correlate events into a central
repository" item (id 22) offers Data Lake / Log Analytics / Event Grid / Event Hub, where the dump
version of that concept offers a different option set and a different key, and `tutorialsdojo-az900`
offers a third. **Topic convergence, not item correspondence.** Screening is evidence of absence,
not proof of originality — recorded as such. Residual risk noted at Gate 1: the source has **no
named individual author** and **no licence statement**, so its only permission basis is free public
publication plus classification-only use.

## Source map · Microsoft (vendor notes)

Methodology asks for `methodology/source-maps/microsoft.md`; that path is outside this session's
ownership (`content/az-900/**` only), so the vendor notes are recorded here for a later lift into
the shared map. Method: `methodology/01-source-distillation.md#source-maps`.

- **Vendor:** Microsoft Corporation · **Program:** Microsoft Credentials —
  https://learn.microsoft.com/en-us/credentials/ · **Last checked:** 2026-08-16

| Source class | Tier | URL pattern | Notes |
|---|---|---|---|
| Study guide (blueprint) | 2 | `https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/<exam-code-lowercase>` | The blueprint proper. Versioning is a **date, not a number**: an H2 reading "Skills measured as of \<Month D, YYYY\>", plus a **Change log** table at the foot diffing the previous outline against the current one at skill-area granularity (values: *No change* / *Minor* / *Major*). Also carries the pass mark and the free-practice-assessment link. Plain server-rendered HTML; `curl` is sufficient |
| Exam details page (logistics) | 2 | `https://learn.microsoft.com/en-us/credentials/certifications/exams/<exam-code-lowercase>/` | Carries what the study guide omits: exam duration as sat, languages, scheduling providers (Pearson VUE / Certiport), and the "Last Updated" date that mirrors the skills-measured date. **Question count is not published per exam** — a program-level statement only (see below). Price is region-resolved client-side and does **not** render for an unauthenticated `curl` `[UNVERIFIED]` |
| Program-level exam mechanics | 2 | `https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience` and `https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports` | Where the numbers that are *not* on the exam page live: the 40–60 question band, the Fundamentals 45-minute/65-minute seat-time row, the 1–1000 scaled score with 700 to pass, no guessing penalty, unscored items, partial credit on multi-part items, and the sample item-type list |
| Official free Practice Assessment | 1 | `https://learn.microsoft.com/en-us/credentials/certifications/exams/<exam-code>/practice/assessment?assessment-type=practice&assessmentId=<n>` · index at `https://learn.microsoft.com/en-us/credentials/certifications/practice-assessments-for-microsoft-certifications` | free, unlimited retakes, **account wall**. `assessmentId` is a small integer per exam (AZ-900 = 23) discoverable in the page's `assessment_id` meta tag |
| Exam sandbox (item-type demo) | 1 | linked from the exam details page ("Launch the sandbox") | the only vendor-sanctioned way to see the real item **types**; Microsoft explicitly refuses to publish the format list otherwise |
| Official curriculum | 3 | learning paths `https://learn.microsoft.com/en-us/training/paths/<path-slug>/`; modules `https://learn.microsoft.com/en-us/training/modules/<module-slug>/`; knowledge checks at `<module-url><n>-knowledge-check` | Free, **no sign-in**. Path/module structure is client-rendered but the free catalog API `https://learn.microsoft.com/api/catalog/?type=learningPaths|modules&locale=en-us` returns uids, titles, urls and unit lists as JSON. Knowledge-check **questions and options render server-side; the key does not** (validated by an authenticated progress API), so keys must be determined analytically. The `<n>` in the unit URL is the unit's 1-based index and is *not* stable across module revisions — resolve it from the catalog API's `units` array, and be ready to probe ±2 |
| Community prep worth registering | 4 | assess per exam | The Azure certification space is saturated with dump-lineage material wearing permissive licences and with permissive-licensed repos that scrape *other* dump-lineage repos. **Screen every candidate against the dump corpus by content, not by licence file** — see the exclusions table above |

**Licence posture.** Study-guide, exam-details, support and training pages: public Microsoft
publication, used for blueprint data and canonical vocabulary only. Practice sets: classification-only
regardless of source. Trademark line for the per-exam README: *"Microsoft", "Azure", "Microsoft
Entra", "Microsoft Purview" and "Microsoft Certified: Azure Fundamentals" are trademarks of the
Microsoft group of companies. This project is not affiliated with, endorsed by, or connected to
Microsoft Corporation.* Known redistribution restrictions: none for analytical classification.

**Crawl notes.** `learn.microsoft.com` credential and training pages are server-rendered and fetch
cleanly over plain HTTP with a browser User-Agent — no JS, no cookie gate, no robots obstacle
encountered. Three exceptions: (1) the Practice Assessment player is a JS app behind a Microsoft
account gate, so firecrawl/playwright buy nothing without credentials; (2) learning-path and module
*index* pages render their unit lists client-side — use the catalog API instead of scraping them;
(3) exam price is injected client-side per region. The `?accept=text/markdown` query parameter is
advertised in a `markdown_url` meta tag on doc pages and is the cleanest fetch for the study guide.

**Watch notes (P1 vendor-watch seam).** Blueprint revision signal: the "Skills measured as of
\<date\>" heading plus the Change log table on the study guide — diff against
`manifest.blueprint_version`; a row flipping to *Major* is a re-validation trigger, *Minor* a
review trigger. Note the study-guide page footer carries a **different** "Last updated" date from
the skills-measured date (2026-06-22 vs 2026-07-20 at time of check) — the footer is the article's
publishing timestamp and is **not** the blueprint version; do not diff on it. New-certification
signal: https://learn.microsoft.com/en-us/credentials/browse/. Practice-set update signal: not
observable without an account.

## Blueprint facts recorded for the manifest

Source: `az900-studyguide`, read in full on 2026-08-16, with logistics and scoring from the two
program-level pages named in the source map. Detail and citation live in
[`source-az900-studyguide.md`](source-az900-studyguide.md).

- `blueprint_version`: **"skills measured as of 2026-07-20"** (Microsoft does not issue numeric
  blueprint versions for this exam). Previous outline superseded on that date; the change log
  records *Minor* changes to three skill groups — *Describe Azure compute and networking services*,
  *Describe features and tools for managing and deploying Azure resources*, and *Describe monitoring
  tools in Azure* — and *No change* everywhere else
- `source_checked_date`: **2026-08-16**
- Exam: **45 minutes** of exam time, **65 minutes** of seat time (Fundamentals row of the
  exam-duration table). Offered in 13 languages, English first, others updated ≈8 weeks later;
  +30 minutes available on request if the exam is not offered in the candidate's language.
  Proctored via Pearson VUE (or Certiport for students/educators). Microsoft Learn look-up during
  the exam is **not** available on Fundamentals exams
- Scoring: scaled **1–1000**, minimum passing score **700**, and Microsoft explicitly warns that
  "as this is a scaled score, it may not equal 70% of the points". **No penalty for guessing.**
  Some items are **unscored and unidentified**. Multi-part items carry **partial credit** — one
  point per correctly answered component. Section-level results are reported as a bar chart only,
  and Microsoft states the chart cannot be used to derive per-section counts
- Domains (weights are published as **bands**, not points): D1 Describe cloud concepts 25–30% · D2
  Describe Azure architecture and services 35–40% · D3 Describe Azure management and governance
  30–35%. 12 skill groups, **57 objective bullets** total (D1: 3 groups / 15 bullets · D2: 4 groups
  / 27 bullets · D3: 4 groups / 15 bullets)
- Item types: **not published.** Microsoft states directly, "To protect exam security and the value
  of our certifications, we don't identify specific exam formats or question types before the exam."
  What *is* published is the sample list demoed in the exam sandbox — **active screen, build list,
  case studies, drag and drop, hot area, multiple choice** (plus labs, which do not apply to
  Fundamentals) — and the existence of "problem-solution question sets (where you are presented a
  problem and asked if the solution provided would solve the problem)"

### Two numbers the vendor does not publish — modelling decisions for Gate 1

Both are recorded in `manifest.json` as **modelled**, not as blueprint facts. Flagged for Oliver.

1. **`exam.item_count` = 50 (modelled).** Microsoft publishes only "Most Microsoft Certification
   exams typically contain between 40-60 questions; however, the number can vary depending on the
   exam", and states the count is subject to change. 50 is the midpoint of the vendor's own band.
   Every downstream arithmetic claim (per-domain exam items, bank ≈1.35×) inherits this assumption.
2. **`exam.pass_threshold_pct` = 70 (modelled).** The real pass mark is **700 on a 1–1000 scaled
   score**, and Microsoft says in terms that this "may not equal 70% of the points". Mockka's
   manifest has no scaled-score field, so the mock models the bar as 70% of items correct. This is a
   **presentation divergence from the real exam and must be disclosed** in the intro/README, next to
   the format-coverage disclosure.

### Weight-band → point-weight arithmetic (recorded so Gate 1 can check it)

The manifest needs weights that sum to 100; the vendor publishes bands. Band midpoints are 27.5 /
37.5 / 32.5, which sum to 97.5 — so they are normalised by ×100/97.5 and rounded:

| Domain | Published band | Midpoint | Normalised | Manifest `weight_pct` | Inside the published band? |
|---|---|---|---|---|---|
| d1 Describe cloud concepts | 25–30% | 27.5 | 28.21 | **28** | yes |
| d2 Describe Azure architecture and services | 35–40% | 37.5 | 38.46 | **38** | yes |
| d3 Describe Azure management and governance | 30–35% | 32.5 | 33.33 | **34** | yes |
| | | 97.5 | 100.00 | **100** | |

Each rounded weight still falls inside its published band, so the allocation is defensible against
the official page as well as arithmetically clean. Note the tension the numbers expose: d2 carries
27 of 57 objective bullets (47%) against a 38% weight, so per-bullet coverage in d2 will be thinner
than in d1 (15 bullets at 28%) — an S3 concern for concept-to-item allocation, not a blueprint error.

### Format profile vs Mockka's three formats

Mockka supports `single_choice`, `multiple_response`, `scenario_matching`. The vendor's own sample
list has six item types for a Fundamentals exam. Mapping, for the manifest's `format_coverage`
disclosure:

| Real item type (vendor sample list) | Mockka support | How this mock approximates it |
|---|---|---|
| Multiple choice (single answer) | **exact** | `single_choice` |
| Multiple choice, multi-select ("choose two/three") | **exact-ish** | `multiple_response` — but see the partial-credit divergence below |
| Drag and drop | **approximated** | `scenario_matching` (options matched to prompts, option reuse allowed) |
| Hot area (per-statement Yes/No or per-statement dropdown grid) | **not supported** | approximated as `multiple_response` "select every true statement", which loses the per-statement scoring and the No-branch |
| Build list (place steps in order) | **not supported** | approximated as `single_choice` over permutations of the same steps — the ordering concept survives, the interaction does not |
| Active screen (configure a control in a rendered UI) | **not supported** | not attempted; the underlying concept is authored as `single_choice` |
| Case study (one shared scenario, several dependent items) | **not supported as a container** | items authored standalone; the cross-item dependency is lost |
| Problem-solution sets (same scenario, different proposed solution, Yes/No) | **partially supported** | each member is a `single_choice` with two options; the *set* relationship — three siblings where more than one may be valid — is not representable |
| Labs | n/a | Fundamentals exams do not carry labs |

Two scoring divergences to disclose alongside the format list: (a) Microsoft awards **partial
credit** on multi-part items (one point per correct component), where Mockka's `multiple_response`
is all-or-nothing; (b) Microsoft reports a **scaled 1–1000** score, where Mockka reports percent
correct.

## Clean-room statement

This session (research-manager, S1–S2) read the registered sources. Everything in this directory is
analytical classification: concept statements in our own words, distractor-pattern labels, format
counts. No question text, option text or rationale prose from any source is reproduced, and nothing
here can be used to reconstruct a source item. The one deliberate exception is *canonical
vocabulary* in the Artefact B document — short technical terms lifted verbatim from the official
study guide, permitted by `methodology/01-source-distillation.md#clean-room` because terminology is
what makes a rationale traceable back to study material. Authoring sessions (S3 onward) work from
these artefacts alone and never open the sources.

One source-specific note: for `ms-learn-az900-modules` the vendor does not publish answer keys in
the page, so each item's key was **determined analytically** during distillation rather than read
off the source. That strengthens rather than weakens the clean-room position — nothing was copied —
but it means the key attributions in that artefact are my judgment, and are marked where not
unambiguous.

## NDA statement

This package contains no live exam content. Nothing here is drawn from the AZ-900 item bank, and no
question reproduces an item encountered in a real sitting. Actual exam content is confidential and
protected by the Microsoft Certification exam agreement. Sources whose items trace back to candidate
recall of a live sitting were screened out at S1 — see the exclusions table. This is an independent
study tool: it is not affiliated with, endorsed by, or connected to Microsoft Corporation or
Pearson VUE. "Microsoft", "Azure", "Microsoft Entra", "Microsoft Purview" and "Microsoft Certified:
Azure Fundamentals" are trademarks of the Microsoft group of companies.
