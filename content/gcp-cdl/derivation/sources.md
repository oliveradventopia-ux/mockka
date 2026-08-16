# Source registry · Google Cloud Digital Leader

Written at S1, before distillation. Format + tier rules:
`methodology/01-source-distillation.md` (§tiers, §registry). Every downstream artefact must
trace back to an entry here. Forums and exam-experience threads are always excluded.

## Registered sources

| id | type | author | url | date_accessed | license / permission basis | usage constraint |
|---|---|---|---|---|---|---|
| `gcp-cdl-guide` | public_blueprint | Google LLC | https://services.google.com/fh/files/misc/cloud_digital_leader_exam_guide_english.pdf | 2026-08-16 | public publication by the certification owner; facts only (sections, weights, objectives, canonical product and concept vocabulary) | blueprint data + vocabulary |
| `gcp-cdl-cert-page` | public_blueprint | Google LLC | https://cloud.google.com/learn/certification/cloud-digital-leader | 2026-08-16 | public publication by the certification owner; logistics facts only | blueprint data |
| `gcp-cdl-samples` | public_practice_set | Google LLC | https://docs.google.com/forms/d/e/1FAIpQLSedAmf77MGS7FGEaylFzY51KtBd7kkIZJIMDsV5zSRSmpKIOA/viewform | 2026-08-16 | free vendor-published sample-question set, linked from the official certification page; public Google Form, **no sign-in and no submission required to read it** | classification-only |
| `whizlabs-cdl-free` | public_practice_set | Aditi Malhotra (Whizlabs Software Pvt. Ltd.) | https://www.whizlabs.com/blog/google-cloud-certified-digital-leader-exam-free-questions/ | 2026-08-16 | freely published blog article, no paywall and no login; named author; per-option rationales cite `cloud.google.com` documentation | classification-only |
| `google-skills-cdl-path` | public_syllabus | Google LLC | https://www.skills.google/paths/9 (formerly `cloudskillsboost.google/paths/9`) | 2026-08-16 (metadata only — **content not accessed**) | free vendor learning path; **Google Skills account required** to open courses or graded assessments | vocabulary + classification — **PENDING ACCESS** (see below) |

Derivation docs: one `source-<id>.md` per entry above (Artefact A for practice sources,
Artefact B for syllabus-grade sources).

| id | artefact | file |
|---|---|---|
| `gcp-cdl-guide` | Artefact B — syllabus/blueprint distillation | [`source-gcp-cdl-guide.md`](source-gcp-cdl-guide.md) |
| `gcp-cdl-cert-page` | *(none — logistics only; facts recorded below under “Blueprint facts”)* | — |
| `gcp-cdl-samples` | Artefact A — practice distillation (29 items, full) | [`source-gcp-cdl-samples.md`](source-gcp-cdl-samples.md) |
| `whizlabs-cdl-free` | Artefact A — practice distillation (30 items, full) | [`source-whizlabs-cdl-free.md`](source-whizlabs-cdl-free.md) |
| `google-skills-cdl-path` | *(none yet — access pending)* | — |

### `google-skills-cdl-path` — pending access, deliberately not accessed

The vendor's own learning path is the Tier-1/Tier-3 source that would carry both the canonical
teaching order and the vendor's graded-assessment style. It is registered so the gap is visible
rather than silent. What is **publicly documented** (Google Skills path page and Google Cloud
certification page, accessed 2026-08-16): the Cloud Digital Leader path is a curated series of
on-demand courses that are **free to enrol in**, with practice and **graded assessments at the end
of each module**, and **a Google Skills account (or Google Skills for Partners account) is required
to access it**. No account was created (free-first / no-signup rule), so **no content from this
source has been read and no artefact exists for it**. It carries no weight in the concept
inventory. Gate 1 decision for Oliver: authorise (or decline) a Google Skills sign-in so a later
S2 top-up pass can distil the module assessments — this is the single highest-value unlock for
this exam, because it is the only accessible source that would post-date the 2026-08-12 blueprint.

## Excluded sources — screened and rejected

Exclusion is a Gate 1 legality matter, so the screening is recorded, not just the outcome. The
Google Cloud Digital Leader space is unusually dump-saturated: the recalled-item corpus for this
exam is large (ExamTopics carries `topic 1 question 246`+) and is mirrored under many brands.
**Screening method:** every candidate practice bank was checked *by content* against the dump
corpus, lowest ids first — a permissive licence file, or its absence, decides nothing.

| candidate | why excluded | evidence |
|---|---|---|
| ExamTopics `Cloud Digital Leader` pages, and the mirror/aggregator sites carrying the same corpus (itexams, validexamdumps, certshero, dumpsmate, actual4test, certification-questions, study4exam, scribd re-uploads) | braindump / “actual questions” collections built from candidate recall of a live sitting — the always-excluded class, and conflicted with Google's exam confidentiality terms | sites self-describe as “Actual Free Exam Questions” / “Dumps”; the corpus is numbered as `topic 1 question N` recall entries and runs past `question 246`; the same numbered items are re-uploaded to Scribd as “Cloud Digital Leader Exam Actual Q&as” |
| `AngelaCoghill/Google-Cloud-Digital-Leader-Exam-Practice-Test-Questions` (GitHub, no licence) | **not a practice set at all** — the repository contains a single `README.md` that is HTML marketing copy for a dumps vendor. Registering it would have imported a dump vendor's corpus by reference | repo tree is one file; README is styled ad copy (“Simple And Quick Way To Pass…”) linking to `certshero.com/google/cloud-digital-leader`; last push 2022-01-12; no questions present |
| `thecloudtechguy/clouddigitalleader` → *GCP Cloud Digital Leader Exam Practice Questions Ebook Rev2.pdf* (TechCommanders, LLC; 50 items) | **two independent grounds.** (1) Licence: the PDF's own copyright page reserves all rights and forbids reproduction/distribution — classification-only use would arguably still be fine, but nothing here needs it. (2) Fitness: the book is a **draft dated 2021-07-31**, its own internal section header reads “GCP PROFESSIONAL SECURITY ENGINEER PRACTICE EXAM”, and its content sits at Associate-Cloud-Engineer / Security-Engineer altitude — default networks-per-project quotas, Cloud Armor load-balancer type support, Container Registry, Cloud Source Repositories, Forseti Security, preemptible-VM pre-emption notice periods. None of that is examinable at Digital Leader altitude, and it is five blueprint generations stale | PDF read in full 2026-08-16; copyright page: “All rights reserved. No part of this publication may be reproduced, distributed, or transmitted in any form…”, © 2021 TechCommanders, LLC; internal header on the question section names a different certification |
| `atulguptag/Cloud-Digital-Leader-Learning-Path-Quiz-Answers` (GitHub, no licence) | answer keys harvested from Google's own Cloud Skills Boost **graded module assessments**. Publishing a vendor's assessment keys is the same class of harvested vendor content as a braindump, and it is exactly the source we declined to sign in for | repo advertises itself as the quiz answers for the no-cost learning path; no licence file; last push 2024-08-03 |
| Quizlet “Cert Prep: Cloud Digital Leader” flashcard decks | user-uploaded, provenance unverifiable, and decks in certification subjects are routinely seeded from recalled-item corpora. No named author, no licence, nothing to screen against | unverifiable provenance — excluded on that ground alone |
| Udemy CDL practice-test courses, SkillCertPro, certificationpractice.com, crucialexams, practicetestgeeks, Tutorials Dojo | payment and/or account signup required — free-first + no-signup rule; several additionally advertise “actual”/“real exam” framing, which would fail screening even if free | paywall or registration gate at first touch; not screened further |
| Reddit `r/googlecloud` / `r/GoogleCloudDigitalLeader` and equivalent exam-experience threads | always excluded by methodology (plan §Decisions 2) | — |

### Dump-screen results for the two accepted practice sources

Both accepted practice sources were screened by content against the dump corpus, lowest ids first.

| dump-corpus probe | `gcp-cdl-samples` item at same index | `whizlabs-cdl-free` item at same index | verdict |
|---|---|---|---|
| ExamTopics CDL topic 1 **q1** — data-residency scenario, key = choose a public cloud provider that guarantees data location | Q1 — sustainability credentials of a provider's data centres | Q1 — private-cloud deployment model for a sole-tenant, internally hosted requirement | no correspondence |
| ExamTopics CDL topic 1 **q9** — healthcare 10-year retention, key = Cloud Storage Nearline→Coldline with object lifecycle management | Q9 — hybrid-cloud environment for a compliance-pinned workload | Q9 — negative-stem disaster-recovery item (which strategy does *not* survive a region loss) | no correspondence |
| ExamTopics CDL topic 1 **q13** — service-model choice, key = SaaS minimises customer management | Q13 — public cloud as the source of near-unlimited capacity | Q13 — how many parents a resource can have | no correspondence |

Two further signals, recorded because absence of numbered correspondence is weak evidence on its own:

- **House style differs from the corpus.** The dump corpus for this exam is uniformly
  business-scenario shaped. `whizlabs-cdl-free` is console/operations shaped (persistent-disk
  types, Local SSD, Cloud Debugger, delete protection, support-case status strings) — it reads
  like the author's own Associate-Cloud-Engineer material re-badged, not like recalled Digital
  Leader items. `gcp-cdl-samples` is the vendor's own publication and needs no screening on
  lineage, only on version.
- **Per-option rationales with documentation references.** Every `whizlabs-cdl-free` item carries a
  rationale for all four options plus `cloud.google.com` reference links — the artefact of an
  authored bank, not of a recall corpus.

Screening is evidence of absence, not proof of originality. Recorded as such. **Total exclusions
recorded: 7 candidate classes** (three of them screened item-by-item against the dump corpus).

## Source map · Google Cloud (vendor notes)

Methodology asks for `methodology/source-maps/google-cloud.md`; that path is outside this
session's ownership (`content/gcp-cdl/**` only), so the vendor notes are recorded here for a later
lift into the shared map. Method: `methodology/01-source-distillation.md#source-maps`.

- **Vendor:** Google LLC · **Program:** Google Cloud Certification —
  https://cloud.google.com/learn/certification · **Last checked:** 2026-08-16

| Source class | Tier | URL pattern | Notes |
|---|---|---|---|
| Exam guide (blueprint) | 2 | `https://services.google.com/fh/files/misc/<exam_slug>_exam_guide_english.pdf` — for this exam `cloud_digital_leader_exam_guide_english.pdf`; always reached from the “View exam guide” link on the certification page | Plain PDF over HTTPS, no JS and no cookie gate; `pdftotext -layout` is faithful. **Versioning is weak**: there is no version number and no change-history table. The only revision marker is a page-footer string — currently “Cloud Digital Leader exam guide - launched on August 12, 2026”. Diff the footer string *and* the objective text; Google does not publish an objective-level diff the way AWS does |
| Exam detail page (logistics) | 2 | `https://cloud.google.com/learn/certification/<exam-name>` | Carries what the guide omits: question count, duration, price, languages, delivery modes, validity, renewal options. Also carries the banner announcing a new exam version (“As of August 12, the new version of the exam is now live”) — a cheap revision signal |
| Official free sample questions | 1 | A Google Forms `docs.google.com/forms/d/e/<formId>/viewform`, linked as “Review sample questions” from the certification page | **Free, no account, no submission needed to read the items.** The form is a quiz, but the answer key is graded server-side and is *not* present in the public payload, so no vendor key is available (or needed) for classification. Google attaches its own caveat on the certification page: the sample questions “do not represent the range of topics or level of difficulty of questions presented on the exam” |
| Official learning path / curriculum | 1/3 | `https://www.skills.google/paths/<n>` (partner variant `partner.cloudskillsboost.google/paths/<n>`) | Free to enrol, **account wall**. Graded module assessments behind it |
| Certification FAQ (scoring/policy) | 2 | `https://support.google.com/cloud-certification/answer/<id>` | Where the scoring policy lives. Note `cloud.google.com/learn/certification/faqs` is a 404 — do not cite it |
| Community prep worth registering | 4 | assess per exam | The Google Cloud certification space is heavily dump-saturated, and the 2026-08-12 rewrite means **almost all free community material predates the current blueprint**. Screen every candidate against the dump corpus by content, and then screen again for blueprint vintage — see the exclusions table |

**Licence posture.** Exam-guide PDFs, certification pages and the sample-questions form: public
Google publication, used for blueprint data, canonical vocabulary and analytical classification
only. Practice sets: classification-only regardless of source. Trademark line for the per-exam
README: *“Google Cloud”, “Google” and “Cloud Digital Leader” are trademarks of Google LLC. This
project is not affiliated with, endorsed by, or connected to Google LLC.* Known redistribution
restrictions: none for analytical classification.

**Crawl notes.** `services.google.com/fh/files/misc/*.pdf` fetches cleanly over plain HTTPS.
`cloud.google.com/learn/certification/*` renders server-side — the logistics block is present in
the raw HTML, so no browser is needed. The sample-questions Google Form is a JS app, **but** the
full item payload (stems, options, item types) is embedded in the page's `FB_PUBLIC_LOAD_DATA_`
literal and is readable from a plain `curl`; grading data is not in that payload.
`skills.google` / `cloudskillsboost.google` course bodies are behind Cognito-style auth —
firecrawl/playwright buy nothing without credentials.

**Watch notes (P1 vendor-watch seam).** Blueprint revision signal: the exam-guide PDF footer
string (currently `launched on August 12, 2026`) plus the “new version of the exam is now live”
banner on the certification page — diff against `manifest.blueprint_version`. New-certification
signal: `https://cloud.google.com/learn/certification`. Sample-set update signal: the form title
string inside `FB_PUBLIC_LOAD_DATA_` (currently `Cloud Digital Leader v4.0 - Sample Questions`) —
**this is the field that exposes the sample set's version lag** (see below).

## Blueprint facts recorded for the manifest

Sources: `gcp-cdl-guide`, read in full on 2026-08-16, and `gcp-cdl-cert-page`, read on 2026-08-16.
Concept detail and citation live in [`source-gcp-cdl-guide.md`](source-gcp-cdl-guide.md).

- `blueprint_version`: **2026-08-12** — the guide carries **no version number**; its page footer
  reads *“Cloud Digital Leader exam guide - launched on August 12, 2026”*, and the certification
  page banner reads *“As of August 12, the new version of the exam is now live.”* Those two
  strings are the only revision markers Google publishes for this exam
- `source_checked_date`: **2026-08-16**
- Exam (from `gcp-cdl-cert-page`): **50–60 questions**, **90 minutes**, **99 USD** plus tax,
  languages English/Japanese/Spanish/Portuguese/French, online-proctored or onsite-proctored,
  **no prerequisites**, validity **3 years**
- Item formats: **multiple choice and multiple select** — exactly two formats, both of which
  Mockka already supports. See the format-profile note below
- Renewal exam (out of scope for this package, recorded for completeness): **20 questions,
  45 minutes, 60 USD**, English and Japanese only, same exam guide
- Scoring: **Google publishes no passing score.** Google Cloud Certification FAQ (accessed
  2026-08-16): exams “are designed to determine only whether or not an individual meets a minimum
  passing standard”, so “only pass/fail results are provided”; the exam “is not designed to be
  used as a diagnostic tool, or to evaluate individuals on a scale of ability”. Candidates who do
  not pass get a section-level score report in the candidate portal, but no numeric threshold is
  disclosed anywhere. **There is therefore no vendor fact to put in
  `manifest.exam.pass_threshold_pct` — it is a Mockka authoring decision, flagged for Gate 1**
- Sections (percentages are stated by the guide as “~n% of the exam”):
  S1 Digital Transformation with Google Cloud ~18% · S2 Exploring Data Transformation with Google
  Cloud ~18% · S3 Innovating with Google Cloud Artificial Intelligence ~18% · S4 Modernize
  Infrastructure and Applications with Google Cloud ~18% · S5 Trust and Security with Google Cloud
  ~18% · S6 Scaling with Google Cloud Operations ~10% — **sums to 100**
- Structure: **6 sections · 14 objectives · 69 “considerations include” bullets**

### `exam.item_count` — why the manifest says 60

Google publishes a **range** (50–60), not a scalar; the schema needs an integer. The manifest is
set to **60**, the published upper bound, so a Mockka form is never shorter than a real sitting.
This is a reversible presentation choice, not a blueprint fact — **listed as a Gate 1 confirmation
item.**

### Format profile versus Mockka's supported formats

The real exam uses **two** item formats — multiple choice and multiple select — and Mockka
supports **three** (`single_choice`, `multiple_response`, `scenario_matching`). This exam's
profile is therefore a **subset**, not an excess: nothing about the real paper goes unrepresented.
The disclosure that `manifest.format_coverage` needs to carry is the inverse of the usual one —
`scenario_matching` has no counterpart on the real exam and must either be set to zero across all
sections or be presented explicitly as extra practice. Recommendation carried into S3: **zero
`scenario_matching` in the exam form**, because the two vendor formats are the whole paper.

Two further format facts, both from the accessible practice sources rather than the guide:

- Google's own sample set is **29 items, 100% single choice** — it contains **no multiple-select
  item at all**, despite the certification page naming multiple select as an exam format. The
  guide states no per-format count. **The real multiple-select share is unpublished and
  unobserved.** `[UNVERIFIED]` — S3 must pick a share by judgment and record it as such
- `whizlabs-cdl-free` runs 28 single choice + 2 “choose 2”, i.e. ~7% multiple response. One
  data point, from a stale source

### The version-lag problem — the biggest risk in this build

The blueprint is four days old (2026-08-12). Every accessible practice source predates it:

- `gcp-cdl-samples` is titled **“Cloud Digital Leader v4.0 - Sample Questions”** in the form
  payload and names products by their pre-2026 identities (Vertex AI for custom model building,
  Cloud Functions, Cloud Data Loss Prevention, Recommendations AI). The current guide names
  **Agent Studio on Agent Platform** and **AutoML on Agent Platform**, **Cloud Run functions**, and
  **Sensitive Data Protection**. Two of its 29 items have no home in the current guide at all
  (data-centre sustainability; Customer Care case escalation)
- `whizlabs-cdl-free` is dated **2021-11-24** and is organised under the *old three-area* CDL
  outline (“Introduction to Digital Transformation”, “Infrastructure and Application
  Modernization”). **14 of its 30 items are off-blueprint** against the current guide
- Everything genuinely 2026-vintage that surfaced in intake is paid, account-walled, or
  dump-lineage

**Consequence for S3.** The entire 2026 surface of this exam — agentic AI, Gemini Enterprise Agent
Platform, AI Hypercomputer, Model Armor, AI Protection, Google Threat Intelligence, the data
supply chain, Autoclass, AlloyDB Omni / BigQuery Omni, Dynamic Workload Scheduler, Managed Service
for Apache Spark, digital sovereignty — carries **zero practice-source attestation**. It is
blueprint-only, and it is roughly the same material that section weights push to the top of the
paper. This build is close to the
[single-source degradation path](../../../methodology/02-master-inventory.md#single-source) for
its most heavily weighted content and must be flagged lower-confidence at Gate 1.

## Open Gate 1 items raised by S1–S2

1. **Google Skills sign-in** — authorise or decline, so a top-up S2 pass can distil the only
   post-2026-08-12 assessment material that exists (see pending-access note above)
2. **`exam.item_count` = 60** — confirm the upper-bound choice against the published 50–60 range
3. **`exam.pass_threshold_pct`** — Google publishes none; Mockka must choose one and record it as
   a Mockka standard, not a vendor fact
4. **Multiple-select share** — unpublished by the vendor and unobserved in the official sample
   set; S3 sets it by judgment
5. **`scenario_matching` = 0** — confirm that the format the real exam does not use is excluded
   rather than disclosed
6. **Lower-confidence flag** — the heaviest, newest content is blueprint-only

## Clean-room statement

This session (research-manager, S1–S2) read the registered sources. Everything in this directory
is analytical classification: concept statements in our own words, distractor-pattern labels,
format counts and coverage judgments. No question text, option text or rationale prose from any
source is reproduced, and nothing here can be used to reconstruct a source item. The one
deliberate exception is *canonical vocabulary* in the Artefact B document — short technical terms
lifted verbatim from the exam guide, permitted by
`methodology/01-source-distillation.md#clean-room` because terminology is what makes a rationale
traceable back to study material. Authoring sessions (S3 onward) work from these artefacts alone
and never open the sources.

One additional protection applies to this exam specifically: **no answer key was taken from any
source.** Google's sample-question form grades server-side and exposes no key in its public
payload, so every “concept tested” claim in `source-gcp-cdl-samples.md` is this session's own
analytical inference from the option set, and is marked where uncertain.

## NDA statement

This package contains no live exam content. Nothing here is drawn from the Cloud Digital Leader
item bank, and no question reproduces an item encountered in a real sitting. Actual exam content
is confidential under the Google Cloud certification exam terms a candidate accepts before
testing. Sources whose items trace back to candidate recall of a live sitting were screened out at
S1 — see the exclusions table, which records the screening evidence item by item. This is an
independent study tool: it is not affiliated with, endorsed by, or connected to Google LLC or its
testing partners. “Google Cloud”, “Google” and “Cloud Digital Leader” are trademarks of Google LLC.
