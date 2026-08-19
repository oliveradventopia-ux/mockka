# Source registry · Microsoft Azure AI Fundamentals (AI-901)

Written at S1, before distillation. Format + tier rules:
`methodology/01-source-distillation.md` (§tiers, §registry). Every downstream artefact must
trace back to an entry here. Forums and exam-experience threads are always excluded.

> **Context: this is the live successor exam.** Microsoft retired **AI-900 on 2026-06-30** and
> replaced it with **AI-901**; *Microsoft Certified: Azure AI Fundamentals* now requires AI-901,
> and the AI-901 exam page states **"Retirement date: none"** (accessed 2026-08-17). The retirement
> evidence and the vendor source-map that this package builds on are in
> [`content/ai-900/derivation/sources.md`](../../ai-900/derivation/sources.md). **AI-901 is not a
> re-numbered AI-900** — see [§Discontinuity](#discontinuity). Nothing from the AI-900 concept
> inventory is copied here; the blueprint was distilled fresh.

## Registered sources

| id | type | author | url | date_accessed | license / permission basis | usage constraint |
|---|---|---|---|---|---|---|
| `ms-ai901-blueprint` | public_blueprint | Microsoft Corporation | https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901 | 2026-08-17 | public publication by the certification owner; facts only (skill areas, weight ranges, objective bullets, audience profile) | blueprint data + vocabulary |
| `ms-ai901-curriculum` | public_syllabus | Microsoft Corporation (Worldwide Learning) | https://learn.microsoft.com/en-us/training/courses/ai-901t00 → learning paths https://learn.microsoft.com/en-us/training/paths/ai-concepts/ and https://learn.microsoft.com/en-us/training/paths/get-started-ai-apps-agents/ | 2026-08-17 | public Microsoft Learn training content; readable without an account, no paywall | vocabulary + classification |
| `akashp-ai901-simulator` | public_practice_set | `akashp18`, GitHub repository `akashp18/ai901-exam-simulator` | https://github.com/akashp18/ai901-exam-simulator | 2026-08-17 | MIT licence on the repository (explicit, commercial-compatible); used classification-only regardless | classification-only |
| `kittoyeah-ai901-prep` | public_practice_set | `kittoyeah`, GitHub repository `kittoyeah/ai-901-prep` | https://github.com/kittoyeah/ai-901-prep | 2026-08-17 | freely published repository, no paywall or login; author states the bank is grounded in the public blueprint and the Microsoft Learn AI-901T00 modules | classification-only — **REGISTERED, NOT DISTILLED** (see below) |
| `ms-practice-assessment` | public_practice_set | Microsoft Corporation | https://aiskillsnavigator.microsoft.com/credentials/cert-83587e0a0754cfee561ade3e27d9fa1cdaf15ae03be52d2413b2b858d1b4eda4 | 2026-08-17 (metadata only — **content not accessed**) | free vendor-published practice assessment; Microsoft documents it as free and unlimited-retake | classification-only — **PENDING ACCESS** (see below) |

Derivation docs: one `source-<id>.md` per entry above (Artefact A for practice sources,
Artefact B for syllabus-grade sources).

| id | artefact | file |
|---|---|---|
| `ms-ai901-blueprint` | Artefact B — syllabus distillation | [`source-ms-ai901-blueprint.md`](source-ms-ai901-blueprint.md) |
| `ms-ai901-curriculum` | Artefact B — curriculum distillation (14 modules, 103 units) | [`source-ms-ai901-curriculum.md`](source-ms-ai901-curriculum.md) |
| `akashp-ai901-simulator` | Artefact A — practice distillation (196 items, full) | [`source-akashp-ai901-simulator.md`](source-akashp-ai901-simulator.md) |
| `kittoyeah-ai901-prep` | *(none — registered, screened, not distilled)* | — |
| `ms-practice-assessment` | *(none — access pending)* | — |

### `ms-practice-assessment` — pending access, deliberately not accessed

The Tier-1 official assessment is the best available calibration for this exam and is registered so
the gap is visible rather than silent. AI-901 **is** listed in Microsoft's practice-assessment
availability table (row 8 of the table on
*Practice Assessments for Microsoft Certifications*, accessed 2026-08-17). What is publicly
documented on that page: the assessments are **free**, **retakeable as many times as desired**,
**"created by the same team that develops our certification exams"**, give **"the answer, rationale,
and links to additional information for every question"**, and are **"updated in step with
certifications"**. Microsoft states elsewhere that they are **not** the exam questions and are not
illustrative of the exam's length or complexity.

For AI-901 the assessment has moved off Microsoft Learn onto **AI Skills Navigator**. All three
Microsoft pages for this exam (study guide, exam detail page, certification page) carry the same
note: *"The Practice Assessment is available on AI Skills Navigator... NOTE: You must be signed in
to AI Skills Navigator to be able to launch the Practice Assessment."* An unauthenticated fetch of
the AI Skills Navigator credential URL returns a **1,776-byte JavaScript shell** with no item
content, confirming the wall is real rather than cosmetic.

**No account was created (free-first / no-signup rule), so no content from this source has been read
and no artefact exists for it.** It carries zero weight in the concept inventory. Gate-1 decision for
Oliver: authorise (or decline) a Microsoft sign-in so a later S2 top-up pass can distil the official
items. This is the same open decision recorded for `aif-c01` and `ai-900`; a single ruling covers
all three.

### `kittoyeah-ai901-prep` — registered, screened, deliberately not distilled

A 210-item bank (five section files: 40 responsible-AI, 40 workloads, 40 model-selection, 40
foundry-agents, 50 foundry-implementation), each section carrying a `blueprintRef` field naming the
real AI-901 objective group, per-option explanations, and a mock exam weighted **42% concepts /
58% Foundry** — i.e. inside the published weight ranges. It is freely published, no login, and its
README states the questions are *"grounded in the official AI-901 skills-measured blueprint and the
Microsoft Learn AI-901T00 modules"*. It passed the dump screen (below).

It is **registered but not distilled**, deliberately, and the reason is a convergence argument
rather than a legality one: its own stated provenance is the two sources this package already holds
**directly** (`ms-ai901-blueprint` and `ms-ai901-curriculum`). Distilling it would add a third
"independent" attestation to the master inventory that is not independent at all — it would inflate
the S3 convergence count with a derived reading of sources already registered at Tier 2 and Tier 3.
Recorded here so any later use has a registry entry to trace to, and so the choice is visible at
Gate 1 rather than silent. If Oliver prefers convergence breadth over convergence honesty, this is
the one-file S2 top-up that adds it.

## Excluded sources — screened and rejected

Exclusion is a Gate 1 legality matter, so the screening is recorded, not just the outcome.
**A permissive licence does not launder recalled exam content** — every candidate bank was screened
against the dump corpus by content, lowest ids first, not by licence file.

| candidate | why excluded | evidence |
|---|---|---|
| The AI-901 dump corpus: pass4sure, pass4success, actual4test, passitexams, certshero, validexamdumps, lead2pass, passleader, dumpset, examtopics and the mirror/aggregator sites carrying the same material | braindump / "actual questions" collections built from candidate recall of a live sitting — the always-excluded class, and conflicted with the Microsoft Certification Exam Candidate Agreement | sites self-describe as *"actual exam dumps"*, *"latest real exam questions"*, *"many actual questions and answers"* with claimed 98–100% pass rates; accessed 2026-08-17 |
| skillcertpro AI-901 set (550 items) | vendor of "latest **real** exam questions"; paid. Dump-class self-description plus payment wall — excluded on both grounds | product page advertises *"550 latest real Microsoft Azure AI Fundamentals (AI-901) exam questions"*, behind purchase; accessed 2026-08-17 |
| `aguidetocloud.com` "Guided" AI-901 practice | freemium teaser, not a freely published set: the page title says **"20 Free Questions"** while the marketing copy claims 265, and the page carries six `$9` price markers. No named author and no provenance statement, so it cannot be screened | page `<title>` = *"AI-901 Practice Exam — 20 Free Questions · Guided"*; pricing markers in page source; accessed 2026-08-17 |
| `histack.net` AI-901 "40 free practice questions" | Substack newsletter behind a subscribe/paywall gate (42 "Subscribe" affordances, 6 "paywall" markers, login prompts in page source) — free-first + no-signup rule | fetched 2026-08-17; page source contains paywall and subscription gating markup |
| `dotcreds.com` AI-901 practice test | paywall plus tiered pricing markers; daily 10-question teaser only, no author attribution, no provenance statement | fetched 2026-08-17; paywall markers and price markers in page source |
| `Chinzillla/ai-901-practice-exam` | **machine-derived from Microsoft Learn unit text, and unlicensed.** The repository ships `AI901_SOURCE_MANIFEST.md` (a unit-by-unit traversal list of the two official learning paths) plus `scripts/rewrite-from-mslearn-text.mjs` and `scripts/rewrite-real-question-banks.mjs`, which generate the 1.6 MB `public/questions.json` from those unit pages. Two grounds: `license: null` (no licence file), and its content is a mechanical derivative of a source this package already registers directly at Tier 3 — so it adds no independent reading. To its credit its `isCountedTitle()` filter **excludes** Microsoft's own "Module assessment"/"Knowledge check" units, so it is *not* a reproduction of vendor knowledge-check items | repository file listing + script source, accessed 2026-08-17; GitHub API `license: null` |
| `Ganamedee/AI901-Questions`, `altimirov-arch/ai901`, `NathiJonas/AI901-Prep-Test` | unlicensed, zero-star, pseudonymous single-day repository drops (created and last-pushed on the same date) with no README methodology and no provenance statement. Unscreenable at source level and contributing no independent expert reading | GitHub API: `license: null`, `created_at == pushed_at` (2026-07-23, 2026-07-30/08-02, 2026-07-27), ★0; accessed 2026-08-17 |
| `infinity-decoder/AI-901` | unlicensed; ships a 2.9 MB `AI901 Sample Quiz.pdf` of undocumented origin alongside course material. A binary quiz drop with no stated provenance cannot be screened | repository file listing, `license: null`; accessed 2026-08-17 |
| `sanjeep8/Azure-AI-901-Study-Guide-with-Practice-tests` | not a source: a 4 KB README of **links** to third-party practice tests, several of them dump-class | repository is a single README.md; accessed 2026-08-17 |
| Reddit / r/AzureCertification and equivalent exam-experience threads | always excluded by methodology (plan §Decisions 2) | — |

### Considered and set aside without prejudice (not legality exclusions)

| candidate | disposition | evidence |
|---|---|---|
| `timothywarner-org/ai901` (MIT, Tim Warner / Microsoft MVP — the same author whose AI-900 repo this project accepted) | **no question bank to distil.** It is courseware: 16 lessons of Bicep/PowerShell deployment scripts and Python demos, plus `.github/skills/ai901-item-creator/SKILL.md` — an item *generator*, not items. Worth re-checking at S2 top-up if the author publishes a bank | repository tree, accessed 2026-08-17 |
| `timothywarner-org/ai901-cert-buddy-claude` (MIT, ★9, same author) | **too small to calibrate.** `mcp-server/data/question-bank.json` is 5,112 bytes containing **4 seed items**; the tool generates questions at runtime through Microsoft Learn MCP rather than shipping a bank. Four items cannot support a format-mix or frequency table | file fetched and parsed 2026-08-17: 4 objects, keys `id, domain, objective, stem, choices, answer, rationale, references` |

### Dump screen performed on the accepted / registered practice sources

Both surviving practice sources were screened by content before registration, lowest ids first, per
the `aif-c01` and `ai-900` precedent.

| source | items screened | method | result |
|---|---|---|---|
| `akashp-ai901-simulator` | Q1, Q3, Q4, Q7 (lowest ids first, choosing the most distinctive stems) | exact-phrase search of each stem and of its most distinctive invented option across the open web including the AI-901 dump sites | **no match.** No stem or option string surfaced on any dump site. Supporting evidence of authored (LLM-generated) rather than recalled provenance: the repository was created **and** fully pushed on 2026-06-21 — a single-day bulk drop of 196 items; every item carries machine-uniform metadata (`avg_time`, `confused_services`, an `explanations` dict with fixed keys `correct`/`incorrect`/`concept`); the prose is saturated with generated-item tells (*"MOST appropriate"*, *"the RECOMMENDED optimization strategy... at the lowest architectural complexity"*). The decisive reverse tell: the bank contains **zero** occurrences of *"Microsoft Foundry"*, *"Foundry SDK"*, *"Foundry Tools"* and *"Foundry IQ"* and only **two** of *"Content Understanding"* — the exact vocabulary the April 2026 AI-901 blueprint introduced. A bank recalled from live AI-901 sittings could not miss the terminology the live exam is built on |
| `kittoyeah-ai901-prep` | `rai-001` (lowest id) | exact-phrase search of the stem and of its distinctive scenario feature | **no id-aligned dump match.** The stem's concept (a loan model rejecting one postcode at a higher rate → fairness) is the canonical loan-approval fairness example taught in Microsoft's own public material, and the near-identical scenario surfaced on third-party AI-901 *prep blogs* (crackcerts, examinotion, refactored.pro), **not** on any dump site and with **no numbered correspondence**. Residual risk **low**, recorded rather than dismissed: the responsible-AI scenario space is small and saturated, so scenario similarity here is convergence on a canonical example, not lineage |

**Exclusions recorded: 10 candidate classes** (1 always-excluded dump class covering ten named
sites, 1 paid dump vendor, 3 paywalled/teaser sets, 5 unlicensed or unscreenable repositories),
plus 2 candidates set aside without prejudice for lack of distillable content.

## Source map · Microsoft (vendor notes — deltas since the AI-900 pass)

The Microsoft vendor map is recorded in
[`content/ai-900/derivation/sources.md`](../../ai-900/derivation/sources.md) §Source map (URL
patterns for study guides, exam pages, certification pages, duration, scoring, practice
assessments, sandbox, training). `methodology/source-maps/microsoft.md` is outside this session's
ownership (`content/ai-901/**` only); this section records only what **changed or was newly
learned** at the AI-901 pass, for a later lift into the shared map.

- **Vendor:** Microsoft Corporation · **Program:** Microsoft Credentials ·
  **Last checked:** 2026-08-17

1. **Practice assessments have migrated for new exams.** The Microsoft Learn
   `.../exams/<code>/practice/assessment?assessmentId=<n>` pattern is legacy. AI-901's assessment
   is a stable AI Skills Navigator URL of the form
   `https://aiskillsnavigator.microsoft.com/credentials/cert-<64-hex>`, unauthenticated fetch of
   which returns a ~1.8 KB SPA shell. The **availability table**
   (`.../certifications/practice-assessments-for-microsoft-certifications`) is still the correct
   place to detect whether an exam has one — it lists AI-900 and AI-901 as separate rows.
2. **A brand-new exam has no change log.** The AI-901 study guide carries exactly one
   *"Skills measured as of \<date\>"* heading and **no Change log table** — the diff table the
   vendor-watch engine keys on only appears after the first revision. A watcher must therefore
   tolerate its absence rather than treating it as a fetch failure.
3. **The Microsoft Learn catalog API is a free, structured route to the Tier-3 curriculum.**
   `https://learn.microsoft.com/api/catalog/?locale=en-us&type=courses&uid=course.<code>t00`
   returns the exam's official course with a `study_guide` array of learning-path uids; querying
   `type=learningPaths` then `type=modules` walks down to module titles, summaries, durations and
   `last_modified` dates. `type=units` is **not supported** (404) — unit titles must be scraped
   from the module page. This turns the Tier-3 crawl into three API calls plus N page fetches.
4. **The vendor's own pages lag their blueprints.** Two stale artefacts observed on 2026-08-17:
   the AI-901 exam page's *"Prove that you can describe the following..."* blurb still lists
   **AI-900's five skill areas** (computer vision, NLP, machine learning on Azure...), and the
   AI-901 study guide's *Find documentation* block still links **Anomaly Detector, Language
   Understanding (LUIS) and Azure Machine Learning** — none of which appear anywhere in the AI-901
   objective bullets. Consequence for the watch engine and for authoring: **only the "Skills
   measured" section and the "Assessed on this exam" list are authoritative**; the marketing
   blurbs and resource lists on the same pages are not.
5. **Course-code convention holds:** `AI-901` → instructor-led course `AI-901T00-A`
   ("Introduction to AI in Azure"), catalog uid `course.ai-901t00`, 24 hours, mapping to exactly
   two learning paths. Same pattern as other Microsoft fundamentals exams.
6. **Vendor-wide facts re-verified unchanged at 2026-08-17** (duration, scoring, item types) —
   see the manifest facts below.

## Discontinuity — why AI-900's inventory is not a head start {#discontinuity}

Recorded because the task brief allows reusing AI-900 Artefact B insight *only through what the new
blueprint itself covers*, and the honest answer is: very little. Facts from the AI-901 study guide
and the AI-900 study guide, both accessed from learn.microsoft.com:

- **Shape.** AI-900 had five skill areas at 15–20% / 15–20% / 15–20% / 15–20% / 20–25%. AI-901 has
  **two**: *Identify AI concepts and capabilities* **40–45%** and *Implement AI solutions by using
  Microsoft Foundry* **55–60%**.
- **Level.** AI-900 was a *describe*-level exam whose audience profile explicitly did not require
  code. AI-901's audience profile requires **"knowledge of Python coding syntax and programming
  techniques"** and familiarity with **"REST APIs, SDKs, and CLIs"**, and the second skill area's
  verbs are `Create`, `Deploy`, `Build`, `Implement`, `Respond to`, `Extract`, `Interpret` — not
  `Describe`.
- **Dropped wholesale.** AI-900's *"Describe fundamental principles of machine learning on Azure"*
  area — regression, classification, clustering, deep learning, Azure Machine Learning studio,
  AutoML, evaluation metrics — has **no counterpart anywhere in the AI-901 objective list**. That
  is roughly a fifth of the old exam gone.
- **Renamed and re-platformed.** The service taxonomy AI-900 tested (Azure AI Vision, Azure AI
  Language, Azure AI Document Intelligence, Azure AI Speech as separate services; Azure AI Foundry
  as the portal) is replaced in AI-901's bullets by **Microsoft Foundry**, the **Foundry SDK**,
  **Azure Speech in Foundry Tools** and **Azure Content Understanding in Foundry Tools**.
- **Genuinely carried over:** the six responsible-AI principles (identical six, and AI-901 asks for
  *"considerations"* per principle rather than naming), and the workload-recognition ideas — text
  analysis techniques, speech recognition/synthesis, computer vision and image generation,
  information extraction. These sit inside AI-901's 40–45% concepts area.

**Net:** the concepts half is a partial overlap with vocabulary drift; the 55–60% implementation
half is entirely net-new. This package therefore distils AI-901 from scratch. No concept, no
distractor annotation and no vocabulary term has been copied from `content/ai-900/`.

## Blueprint facts recorded for the manifest

Source: `ms-ai901-blueprint`, read in full on 2026-08-17, plus the vendor-wide scoring and duration
pages named in the AI-900 source map (re-verified the same day). Detail and citation live in
[`source-ms-ai901-blueprint.md`](source-ms-ai901-blueprint.md).

- `blueprint_version`: **skills measured as of 2026-04-15** (page `ms.date` 2026-03-31,
  `updated_at` 2026-07-14, footer "Last updated on 2026-07-13"; **no change log exists yet** —
  first revision of a new exam)
- `source_checked_date`: **2026-08-17**
- Exam: **45 minutes** exam time, 65 minutes seat time (official, per exam type — Fundamentals);
  **question count is not published per exam**, only the vendor-wide statement that most exams
  *"typically contain between 40-60 questions"*. **Retirement date: none.** Available in 13
  languages; English updated 2026-04-15
- Scoring: scaled **1–1,000**, passing score **700**, explicitly *"may not equal 70% of the
  points"*; multi-part items award **one point per correctly answered component** (partial credit);
  no guessing penalty; some items are unscored pilot items and are not identified; the score report
  gives **no per-section pass bar** and Microsoft states the section bar chart *"can't be used to
  calculate the number of questions answered correctly"*
- Skill areas (Microsoft publishes **ranges**, not point weights): **S1 Identify AI concepts and
  capabilities 40–45%** · **S2 Implement AI solutions by using Microsoft Foundry 55–60%**
- Item types: Microsoft **refuses to publish per-exam formats** — *"To protect exam security and the
  value of our certifications, we don't identify specific exam formats or question types before the
  exam."* The sanctioned list from the exam-sandbox documentation is **active screen, build list,
  case studies, drag and drop, hot area, multiple choice, labs**, plus **problem-solution sets**
  described in the break policy. Microsoft Learn access during the exam is **explicitly excluded
  from Fundamentals exams**; the duration table publishes lab-inclusive timings only for
  associate/expert role-based exams, and the Fundamentals row carries a single duration — so labs
  are **not indicated** for AI-901
- Preview-feature notice (new relative to AI-900's page): *"Most questions cover features that are
  general availability (GA). The exam may contain questions on Preview features if those features
  are commonly used. You should be familiar with REST APIs, SDKs, and CLIs."*

### Three arithmetic consequences Gate 1 must ratify

1. **The weights do not sum to 100 and cannot be made to without a judgment call.** The published
   minimums sum to **95**, the maximums to **105**. The manifest needs point weights. Proposed rule
   (to be recorded in `manifest.json` as PROPOSED, not asserted): take each range's midpoint
   (42.5 / 57.5, sum 100 exactly) → **S1 42 / S2 58** after integer rounding, or **43/57** if the
   rounding is taken the other way. The midpoints already sum to 100, so unlike AI-900 no
   normalisation constant is needed — only a tie-break on the half-point. **42/58 is recommended**
   because it keeps S2 strictly inside its published 55–60% band with room either side and matches
   the split an independent bank (`kittoyeah-ai901-prep`) arrived at from the same ranges.
2. **The exam item count is not a vendor fact for this exam.** `exam.item_count` must be chosen from
   the vendor-wide 40–60 band and disclosed as chosen. Left `TODO` in the manifest for S3/Gate 1
   rather than invented. Note the interaction with the two-domain structure: with only two domains,
   almost any count in the band divides cleanly, so the S3 choice should be driven by the concept
   pool and the 1.35× bank rule, not by rounding.
3. **`pass_threshold_pct` is a proxy, not a fact.** The real exam is scaled 1–1,000 with a 700 pass
   mark that Microsoft states *"may not equal 70% of the points"*, awards per-component partial
   credit, and mixes in unidentified unscored items. Whatever number S3 sets must be disclosed in
   `format_coverage` as a proxy — the AI-900 precedent (70, disclosed) applies unchanged.

## Format profile vs Mockka's supported formats

Mockka supports three formats: `single_choice`, `multiple_response`, `scenario_matching`. The
vendor's real profile is wider, **partially scored**, and — new for AI-901 — includes code-reading
interactions that a text-only player cannot rehearse.

| Microsoft item type | Interaction | Mockka coverage |
|---|---|---|
| Multiple choice | one key among options | **exact** → `single_choice` |
| Multi-select / multi-part | more than one selection or sub-answer | `multiple_response` — but Mockka is all-or-nothing while Microsoft awards **one point per correct component**, so a Mockka score is stricter than the real one |
| Build list | order/sequence a set of steps | **not supported** — must be authored as `single_choice` over candidate sequences |
| Drag and drop | pair items across two lists | approximated by `scenario_matching` (option reuse across scenarios), which exercises the same discrimination but not the same interaction |
| Hot area | select regions/dropdowns inside an image or a rendered UI | **not supported** — no image or region affordance in the player. **This matters more for AI-901 than it did for AI-900**: the only accessible practice source uses a dropdown-hotspot form for 11 of its 196 items, most of them fill-in-the-blank over a Python snippet |
| Active screen | operate a simulated settings screen | **not supported** — and AI-901's 55–60% implementation half is exactly the material this form tests |
| Case study | one long scenario, several dependent items | **not supported** — no shared-stem item group |
| Problem-solution sets | one scenario repeated with different proposed solutions, each judged yes/no | **not supported**; also note these blocks disallow breaks |
| Labs | perform tasks in a live environment | **not indicated for Fundamentals** — Microsoft publishes lab-inclusive durations only for associate/expert role-based exams |

`format_coverage` disclosure must therefore state: three of the vendor's item types map cleanly or
approximately; **build list, hot area, active screen, case studies and problem-solution sets are not
rehearsed at all**; Mockka's all-or-nothing scoring of multi-selection items is stricter than
Microsoft's partial credit; the real exam mixes unscored pilot items into the paper and reports a
scaled 1–1,000 score, so no raw percentage from this mock converts to a Microsoft score. It must
**additionally** state, for this exam specifically, that AI-901 devotes 55–60% of its weight to
*implementing* solutions in Microsoft Foundry — work whose real assessment involves portal screens,
SDK code and CLI invocations — and that a text-only mock necessarily tests **recognition of the
right implementation move rather than performance of it**.

## Clean-room statement

This session (research-manager, S1–S2) read the registered sources. Everything in this directory is
analytical classification: concept statements in our own words, distractor-pattern labels, format
counts. No question text, option text or rationale prose from any source is reproduced, and nothing
here can be used to reconstruct a source item. The one deliberate exception is *canonical
vocabulary* in the Artefact B documents — short technical terms lifted verbatim from the study
guide's objective bullets and from Microsoft Learn module and unit titles, permitted by
`methodology/01-source-distillation.md#clean-room` because terminology is what makes a rationale
traceable back to study material. Authoring sessions (S3 onward) work from these artefacts alone and
never open the sources.

## NDA statement

This package contains no live exam content. Nothing here is drawn from the AI-901 item bank, and no
question reproduces an item encountered in a real sitting. Actual exam content is confidential and
protected by the Microsoft Certification Exam Candidate Agreement; sources whose items trace back to
candidate recall of a live sitting were screened out at S1 and are listed with evidence in the
exclusions table above. This is an independent study tool: it is not affiliated with, endorsed by,
or connected to Microsoft Corporation or Pearson VUE. "Microsoft", "Azure", "Microsoft Foundry" and
"Microsoft Certified: Azure AI Fundamentals" are trademarks of the Microsoft group of companies.
