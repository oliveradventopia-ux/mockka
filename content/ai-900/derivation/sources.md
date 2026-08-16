# Source registry · Microsoft Azure AI Fundamentals (AI-900)

Written at S1, before distillation. Format + tier rules:
`methodology/01-source-distillation.md` (§tiers, §registry). Every downstream artefact must
trace back to an entry here. Forums and exam-experience threads are always excluded.

> **⚑ GATE-1 BLOCKER — this exam was retired before this package was scaffolded.**
> Microsoft retired **AI-900 on 2026-06-30** and replaced it with **AI-901**; the *Microsoft
> Certified: Azure AI Fundamentals* certification now requires AI-901. Evidence and the
> scope fork are in [§Retirement](#retirement) below. Everything in this package is a faithful
> distillation of the **final AI-900 blueprint** (skills measured as of 2025-05-02) — it is
> accurate for the exam that existed, and no candidate can sit that exam any more. Oliver's
> decision at Gate 1: **ship AI-900 as an archival study mock, pivot the slug to AI-901, or park it.**

## Registered sources

| id | type | author | url | date_accessed | license / permission basis | usage constraint |
|---|---|---|---|---|---|---|
| `ms-ai900-blueprint` | public_blueprint | Microsoft Corporation | https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-900 | 2026-08-16 | public publication by the certification owner; facts only (skill areas, weight ranges, objective bullets, audience profile, change log) | blueprint data + vocabulary |
| `warner-ai900` | public_practice_set | Tim Warner (Microsoft MVP), GitHub repository `timothywarner/ai900` | https://github.com/timothywarner/ai900/tree/main/practice-questions | 2026-08-16 | MIT licence on the repository (explicit, commercial-compatible); used classification-only regardless | classification-only |
| `wrieden-ai900` | public_practice_set | Olaf Wrieden, GitHub repository `olafwrieden/Azure-AI-900-Practice-Questions` | https://github.com/olafwrieden/Azure-AI-900-Practice-Questions | 2026-08-16 | freely published repository, no paywall or login; named author; author states items were **not** transcribed from the real exam ("Questions have not been transcribed from the real exam, which is against exam policy") | classification-only |
| `ms-practice-assessment` | public_practice_set | Microsoft Corporation | https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-900/practice/assessment?assessment-type=practice&assessmentId=26 | 2026-08-16 (metadata only — **content not accessed**) | free vendor-published practice assessment; Microsoft documents it as free | classification-only — **PENDING ACCESS** (see below) |
| `ms-learn-training` | public_syllabus | Microsoft Corporation | https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/ | 2026-08-16 (URL resolved 200; **not read**) | public Microsoft Learn training content, no account needed to read | vocabulary + classification — **NOT DISTILLED THIS PASS** (S2 top-up candidate) |

Derivation docs: one `source-<id>.md` per entry above (Artefact A for practice sources,
Artefact B for syllabus-grade sources).

| id | artefact | file |
|---|---|---|
| `ms-ai900-blueprint` | Artefact B — syllabus distillation | [`source-ms-ai900-blueprint.md`](source-ms-ai900-blueprint.md) |
| `warner-ai900` | Artefact A — practice distillation (25 items, full) | [`source-warner-ai900.md`](source-warner-ai900.md) |
| `wrieden-ai900` | Artefact A — practice distillation (29 items, full) | [`source-wrieden-ai900.md`](source-wrieden-ai900.md) |
| `ms-practice-assessment` | *(none — access pending)* | — |
| `ms-learn-training` | *(none — registered, not yet distilled)* | — |

### `ms-practice-assessment` — pending access, deliberately not accessed

The Tier-1 official assessment is the best available calibration for this exam and is registered so
the gap is visible rather than silent. What is **publicly documented** (Microsoft Learn, *Practice
Assessments for Microsoft Certifications*, accessed 2026-08-16): the assessments are **free**,
retakeable without limit, **created by the same team that develops the certification exams**,
provide "the answer, rationale, and links to additional information for every question", and are
intended to convey "the style, wording, and difficulty of the questions you're likely to experience
on the exam". Microsoft states plainly that they are **not** the exam questions and **not**
illustrative of the exam's length or complexity. Access requires an account: *"Simply sign in to
your Microsoft Learn profile or create an account before taking a Practice Assessment."*

The AI-900 assessment (`assessmentId=26`) is still listed on the availability table and its page
still resolves, but the page is a JavaScript shell — an unauthenticated fetch returns the layout
frontmatter with `word_count: 0` and no item content. **No account was created (free-first /
no-signup rule), so no content from this source has been read and no artefact exists for it.** It
carries zero weight in the concept inventory. Note also that for the *replacement* exam the
assessment has moved behind AI Skills Navigator, which Microsoft documents as requiring sign-in.
Gate-1 decision for Oliver: authorise (or decline) a Microsoft Learn sign-in so a later S2 top-up
pass can distil the official items.

### `ms-learn-training` — registered, not distilled

The legacy AI-900 learning path resolves (HTTP 200, 2026-08-16) and is readable without an account,
which makes it a legitimate Tier-3 vocabulary source. It was **not read in this pass**: the S1–S2
budget went to the blueprint plus two practice sources, and the AI-900 blueprint's objective bullets
are terse ("Identify features of image classification solutions") compared with, say, the AWS exam
guide, so a Tier-3 top-up is the highest-value follow-up if this exam proceeds past Gate 1. Recorded
here so that any later use has a registry entry to trace to.

## Excluded sources — screened and rejected

Exclusion is a Gate 1 legality matter, so the screening is recorded, not just the outcome.
**A permissive licence does not launder recalled exam content** — every candidate bank was screened
against the dump corpus by content, lowest ids first, not by licence file.

| candidate | why excluded | evidence |
|---|---|---|
| ExamTopics AI-900 pages, and the mirror/aggregator sites carrying the same corpus (itexams, marks4sure, certsmarket, ace4sure, p2pexams, crucialexams) | braindump / "actual questions" collections built from candidate recall of a live sitting — the always-excluded class, and NDA-conflicted | sites self-describe as "free actual questions" / "latest real exam questions"; the corpus is numbered as `exam AI-900 topic 1 question N` recall entries with per-question discussion threads |
| `anxkhn/azure-ai-900-exam-prep` (310 stars) | **dump lineage, self-declared.** The repository ships a `dumps/` directory containing `ai-900.pdf` (5.7 MB) alongside dumps for ai-102, az-900, dp-203 and dp-900, and the README states the author "compiled a list of questions from the web **and the official practice tests**" after passing the exam — i.e. both harvested dump material and reproduced vendor practice items | `GET /repos/anxkhn/azure-ai-900-exam-prep/contents/dumps` → `ai-900.pdf` 5,746,236 bytes (+6 sibling dumps); README, accessed 2026-08-16 |
| `Nirant07/Azure-AI-Fundamentals-AI-900-Microsoft` | dump lineage via aggregator. One of the two question banks in the repo is literally named for an ExamTopics-derived aggregator | repository file listing: `AI-900 Question Bank CertyIQ.pdf` (CertyIQ redistributes the ExamTopics corpus), accessed 2026-08-16 |
| `IsabellaSulisufi/AI-900` (115 stars) | **mixed, unlicensed provenance.** Section 1 of the README is, by the author's own description, "practice questions provided by Microsoft within their training modules" — a verbatim reproduction of Microsoft's own knowledge-check items, with no licence file on the repo. Section 2 is the author's own work but is explicitly derived from `olafwrieden`, so it is not an independent reading and contributes no convergence signal | README.MD: "The first section comprises practice questions provided by Microsoft within their training modules"; "I have drawn inspiration from [olafwrieden/Azure-AI-900-Practice-Questions]"; `license: null` via GitHub API, accessed 2026-08-16 |
| `harshpandita2000/Azure-AI-900-Practice-Questions-2024` | **unattributed derivative.** It reuses `wrieden-ai900`'s banner asset and near-identical Purpose/Disclaimer wording without crediting it, then adds ~110 further items of undocumented origin. An uncredited fork with undocumented additions cannot be screened, and it is not independent of a source already registered | same banner URL `https://i.imgur.com/iM3VRJQ.png`; README wording paralleling `wrieden-ai900` clause-for-clause; `license: null`; README note "Currently, there are 139 questions available", accessed 2026-08-16 |
| Tutorials Dojo free AI-900 sampler; Whizlabs / SkillCertPro / CertStud sets | account signup and/or payment required — free-first + no-signup rule; not screened further | portal requires registration |
| EDUSUM, CertiMaan and similar "free sample questions" landing pages | lead-generation pages for paid banks with no author attribution and no provenance statement; unscreenable | pages gate the full set behind a purchase and name no author |
| Quizlet / Brainscape / studyx AI-900 flashcard decks | user-uploaded, unattributed, and demonstrably carrying the same items as the dump corpus | search for AI-900 item phrasings surfaces Quizlet decks alongside ExamTopics question pages carrying the same content |
| Reddit / r/AzureCertification and equivalent exam-experience threads | always excluded by methodology (plan §Decisions 2) | — |

### Dump screen performed on the two accepted practice sources

Both accepted sources were screened by content before distillation, lowest ids first, per the
`aif-c01` precedent.

| source | items screened | method | result |
|---|---|---|---|
| `warner-ai900` | item 1 of domain 1 (lowest id) | exact-phrase search of the item's distinctive scenario opening across the open web including dump sites | **no match.** The stem does not exist in the dump corpus. Supporting evidence: every file carries `generated: 2026-02-23` frontmatter, items are scenario-led on the standard Microsoft doc personas (Contoso/Fabrikam/Northwind/Tailwind/Adatum), each item names the study-guide objective it targets and cites a Microsoft Learn URL, and the repository is the courseware backing a named MVP's O'Reilly course. Provenance: authored (AI-assisted) from public documentation, not recalled |
| `wrieden-ai900` | items 1, 4 and 8 (lowest ids first) | exact-phrase search of each stem and of its most distinctive invented option | **no id-aligned dump match.** Item 1's concept wording tracks Microsoft's own module phrasing for semantic segmentation (public documentation, not exam text); item 4's invented distractor "Compute Balancers" appears nowhere in the dump corpus; item 8's concept (celebrities + landmarks domain models) is documented in Microsoft's public product docs and circulates widely in flashcard decks, but with no numbered correspondence to any dump item. Residual risk **low-moderate**, recorded rather than dismissed: the set is 2021-vintage community work with no licence file, accepted on classification-only terms |

**Exclusions recorded: 9 candidate classes** (2 with hard dump-artifact evidence, 2 unlicensed /
unattributable derivatives, 5 access-walled or unscreenable).

## Source map · Microsoft (vendor notes)

Methodology asks for `methodology/source-maps/microsoft.md`; that path is outside this session's
ownership (`content/ai-900/**` only), so the vendor notes are recorded here for a later lift into
the shared map. Method: `methodology/01-source-distillation.md#source-maps`.

- **Vendor:** Microsoft Corporation · **Program:** Microsoft Credentials —
  https://learn.microsoft.com/en-us/credentials/ · **Last checked:** 2026-08-16

| Source class | Tier | URL pattern | Notes |
|---|---|---|---|
| Study guide (blueprint) | 2 | `https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/<exam-code>` | **This is the blueprint** — "Skills at a glance" + per-skill-area objective bullets + a **Change log** table diffing the previous revision against the current one. Versioning is by *revision date*, stated as "Skills measured as of \<Month D, YYYY\>", not by a version number. Pages carry a `ms.date` and an `updated_at` in frontmatter; treat the "skills measured as of" date as `blueprint_version` |
| Exam detail page (logistics) | 2 | `https://learn.microsoft.com/en-us/credentials/certifications/exams/<exam-code>/` | carries passing score, languages, retirement notice, "Assessed on this exam" weight ranges. **Does not publish per-exam question count or duration** |
| Certification page | 2 | `https://learn.microsoft.com/en-us/credentials/certifications/<cert-slug>/` | names the currently required exam(s) — the authoritative place to detect an exam-code swap (this is where AI-900 → AI-901 surfaced) |
| Exam duration + experience | 2 | `https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience` | the only official source of duration: **Fundamentals exams = 45 minutes exam time, 65 minutes seat time**; "most exams typically contain between 40-60 questions"; 5 break minutes are built into the exam time |
| Exam scoring | 2 | `https://learn.microsoft.com/en-us/credentials/certifications/exam-scoring-reports` | scale **1–1,000**, pass **700**, explicitly "may not equal 70% of the points"; multi-part questions score **one point per correct component** (partial credit); no guessing penalty; unscored pilot items present and unidentified; no per-section bar |
| Official free practice assessment | 1 | `https://learn.microsoft.com/en-us/credentials/certifications/exams/<exam-code>/practice/assessment?assessment-type=practice&assessmentId=<n>` — newer exams redirect to `https://aiskillsnavigator.microsoft.com/credentials/cert-<hash>` | free, unlimited retakes, **account wall**. Availability table: `.../certifications/practice-assessments-for-microsoft-certifications` |
| Exam sandbox (format demo) | 1 | `https://aka.ms/examdemo` | interactive demo of the item **types** and UI; the only sanctioned way to see formats. Not machine-readable |
| Official training | 3 | `https://learn.microsoft.com/en-us/training/paths/<path>/` · course pages `.../training/courses/<code>` | free, no account needed to read; the vocabulary source |
| Community prep worth registering | 4 | assess per exam | the Microsoft certification space is saturated with dump-lineage material. **Screen every candidate against the dump corpus by content, not by licence file** — see the exclusions table above |

**Licence posture.** Study-guide and exam pages: public Microsoft publication, used for blueprint
data and canonical vocabulary only. Practice sets: classification-only regardless of source.
Trademark line for the per-exam README: *"Microsoft", "Azure" and "Microsoft Certified: Azure AI
Fundamentals" are trademarks of the Microsoft group of companies. This project is not affiliated
with, endorsed by, or connected to Microsoft Corporation.* Known redistribution restrictions: none
for analytical classification.

**Crawl notes.** `learn.microsoft.com` credential pages render server-side and fetch cleanly over
plain HTTP; the returned document carries a YAML frontmatter block (`updated_at`, `ms.date`,
`original_content_git_url`) that is itself a useful freshness signal, and the underlying markdown
is public in `MicrosoftDocs/learn-certs-pr`. Practice-assessment pages are JS shells behind auth —
`word_count: 0`, no items — so firecrawl/playwright buy nothing without credentials. The
`/credentials/certifications/exam-duration-question-types` path 404s; the live path is
`/credentials/support/exam-duration-exam-experience`.

**Watch notes (P1 vendor-watch seam).** Blueprint revision signal: the "Skills measured as of
\<date\>" heading plus the Change log table on the study guide — diff against
`manifest.blueprint_version`. **Exam-replacement signal: the certification page's required-exam
list** — Microsoft retires an exam code and mints a successor rather than versioning the blueprint,
so a watcher that only diffs the study guide will miss a retirement entirely (this exam is the
worked example). Practice-set update signal: not observable without an account.

## Retirement — the AI-900 → AI-901 fork {#retirement}

Facts, all from Microsoft pages accessed 2026-08-16:

- The study guide carries: *"This exam was retired on June 30, 2026, at 11:59 PM Central Standard
  Time."*
- The exam page carries: *"The certification requirements have changed. The AI-900 exam was retired
  on June 30, 2026, and has been replaced by AI-901. To earn this certification, candidates must
  now pass AI-901."*
- The certification page (*Microsoft Certified: Azure AI Fundamentals*) now lists **Required exams:
  AI-901** and states the English version of the certification *"was updated on April 15, 2026"*.
- AI-901 is **not a re-numbered AI-900**. Its "Assessed on this exam" list is two skill areas —
  **Identify AI concepts and capabilities (40-45%)** and **Implement AI solutions by using Microsoft
  Foundry (55-60%)** — against AI-900's five 15-25% areas, and its audience profile adds *"knowledge
  of Python coding syntax and programming techniques"* and familiarity with *"REST APIs, SDKs, and
  CLIs"*, which AI-900 explicitly did not require. Roughly 55-60% of AI-901 is implementation work
  in Microsoft Foundry that has no counterpart in the AI-900 blueprint.

Consequence for this package: the AI-900 concept inventory is **not** a usable head start on
AI-901 beyond the ~40% concepts half, and even there the vocabulary has moved (Azure AI Foundry →
Microsoft Foundry). The three options at Gate 1 are (a) finish AI-900 as an archival mock and label
it retired in the intro block, (b) park AI-900 at Gate 1 and scaffold `ai-901` instead — the
blueprint work here is reusable as a vendor source map, not as content, or (c) build both, AI-901
first. This is Oliver's call, not the pipeline's.

## Blueprint facts recorded for the manifest

Source: `ms-ai900-blueprint` (plus the vendor-wide scoring and duration pages named in the source
map), read in full on 2026-08-16. Detail and citation live in
[`source-ms-ai900-blueprint.md`](source-ms-ai900-blueprint.md).

- `blueprint_version`: **skills measured as of 2025-05-02** (the study-guide page itself was last
  updated 2026-06-30, carrying the retirement notice)
- `source_checked_date`: **2026-08-16**
- Exam: **45 minutes** exam time, 65 minutes seat time (official, per exam type — Fundamentals);
  **question count is not published per exam**, only the vendor-wide statement that most exams
  "typically contain between 40-60 questions"
- Scoring: scaled **1–1,000**, passing score **700**, explicitly *"may not equal 70% of the
  points"*; multi-part items award **one point per correctly answered component** (partial credit —
  unlike AWS's all-or-nothing); no guessing penalty; some items are unscored pilot items and are
  not identified; the score report gives **no per-section pass bar** (compensatory)
- Skill areas (Microsoft publishes **ranges**, not point weights): D1 AI workloads and
  considerations **15–20%** · D2 Fundamental principles of ML on Azure **15–20%** · D3 Computer
  vision workloads **15–20%** · D4 NLP workloads **15–20%** · D5 Generative AI workloads **20–25%**
- Item types: Microsoft **refuses to publish per-exam formats** — *"To protect exam security and
  the value of our certifications, we don't identify specific exam formats or question types before
  the exam."* The sanctioned list of types a candidate may meet, from the exam-sandbox
  documentation, is **multiple choice, build list, drag and drop, hot area, active screen, case
  studies, labs** (labs and Microsoft Learn access are excluded from Fundamentals exams)

### Two arithmetic consequences Gate 1 must ratify

1. **The weights do not sum to 100 and cannot be made to without a judgment call.** The published
   minimums sum to **80**, the maximums to **105**. The manifest needs point weights. Proposed rule
   (recorded in `manifest.json`, PROPOSED not asserted): take each range's midpoint
   (17.5/17.5/17.5/17.5/22.5, sum 92.5) and normalise to 100 → **19/19/19/19/24**. This is the only
   tie-free integer allocation that preserves the published ordering and the 5-point GenAI premium.
   It is derived, not vendor-stated, and the Gate-1 line "weights sum to 100" must be read as
   "weights sum to 100 **after a documented normalisation of the vendor's ranges**".
2. **The exam item count is not a vendor fact for this exam.** `exam.item_count` must be chosen from
   the 40-60 band and disclosed as chosen. Recommended: 50 (band midpoint, and the count most
   commonly reported for Fundamentals sittings — but that reporting is candidate hearsay and is
   **not** cited here as fact). Left `TODO` in the manifest for S3/Gate 1 rather than invented.

## Format profile vs Mockka's supported formats

Mockka supports three formats: `single_choice`, `multiple_response`, `scenario_matching`. The
vendor's real profile is wider, and — unlike AWS — **partially scored**.

| Microsoft item type | Interaction | Mockka coverage |
|---|---|---|
| Multiple choice | one key among options | **exact** → `single_choice` |
| Multi-select / multi-part | more than one selection or sub-answer | `multiple_response` — but Mockka is all-or-nothing while Microsoft awards **one point per correct component**, so a Mockka score is stricter than the real one |
| Build list | order/sequence a set of steps | **not supported** — must be authored as `single_choice` over candidate sequences |
| Drag and drop | pair items across two lists | approximated by `scenario_matching` (option reuse across scenarios), which exercises the same discrimination but not the same interaction |
| Hot area | select regions/dropdowns inside an image or a rendered UI | **not supported** — no image or region affordance in the player |
| Active screen | operate a simulated settings screen | **not supported** |
| Case study | one long scenario, several dependent items | **not supported** — no shared-stem item group |
| Labs | perform tasks in a live environment | not applicable — Microsoft documents labs as **not present on Fundamentals exams** |
| Problem-solution sets | one scenario repeated with different proposed solutions, each judged yes/no | **not supported**; also note these blocks disallow breaks |

`format_coverage` disclosure must therefore state: three of the vendor's item types map cleanly or
approximately; **build list, hot area, active screen, case studies and problem-solution sets are
not rehearsed at all**, and Mockka's all-or-nothing scoring of multi-selection items is stricter
than Microsoft's partial credit. It must also state that the real exam mixes unscored pilot items
into the paper and reports a scaled 1–1,000 score, so no raw percentage from this mock converts to
a Microsoft score.

## Clean-room statement

This session (research-manager, S1–S2) read the registered sources. Everything in this directory is
analytical classification: concept statements in our own words, distractor-pattern labels, format
counts. No question text, option text or rationale prose from any source is reproduced, and nothing
here can be used to reconstruct a source item. The one deliberate exception is *canonical
vocabulary* in the Artefact B document — short technical terms lifted verbatim from the study
guide's objective bullets, permitted by `methodology/01-source-distillation.md#clean-room` because
terminology is what makes a rationale traceable back to study material. Authoring sessions (S3
onward) work from these artefacts alone and never open the sources.

## NDA statement

This package contains no live exam content. Nothing here is drawn from the AI-900 item bank, and no
question reproduces an item encountered in a real sitting. Actual exam content is confidential and
protected by the Microsoft Certification Exam Candidate Agreement; sources whose items trace back to
candidate recall of a live sitting were screened out at S1 and are listed with evidence in the
exclusions table above. This is an independent study tool: it is not affiliated with, endorsed by,
or connected to Microsoft Corporation or Pearson VUE. "Microsoft", "Azure" and "Microsoft Certified:
Azure AI Fundamentals" are trademarks of the Microsoft group of companies.
