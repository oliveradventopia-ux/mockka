# Source registry · AWS Certified Cloud Practitioner (CLF-C02)

Written at S1, before distillation. Format + tier rules:
`methodology/01-source-distillation.md` (§tiers, §registry). Every downstream artefact must
trace back to an entry here. Forums and exam-experience threads are always excluded.

This exam is the most dump-contaminated AWS certification in the catalogue. The screening below is
therefore recorded at the same depth as the registration: **six candidate sources were rejected,
each with the evidence that rejected it.**

## Registered sources

| id | type | author | url | date_accessed | license / permission basis | usage constraint |
|---|---|---|---|---|---|---|
| `clf-blueprint` | public_blueprint | Amazon Web Services, Inc. | https://docs.aws.amazon.com/pdfs/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.pdf | 2026-08-16 | public publication by the certification owner; facts only (domains, weights, task statements, item types, scoring, in/out-of-scope service lists) | blueprint data + vocabulary |
| `aws-clf-exam-page` | public_blueprint | Amazon Web Services, Inc. | https://aws.amazon.com/certification/certified-cloud-practitioner/ | 2026-08-16 | public publication by the certification owner | blueprint data (logistics only: as-sat item count, duration, price, languages) |
| `aws-official-question-set` | public_practice_set | Amazon Web Services, Inc. | https://skillbuilder.aws/learn/E4W52ZKK6P/official-practice-question-set-aws-certified-cloud-practitioner-clfc02--english/RJSZKD3MG3 | 2026-08-16 (metadata only — **content not accessed**) | free vendor-published practice set; AWS documents it as free on the certification-prep page | classification-only — **PENDING ACCESS** (see below) |
| `tss-mckenzie` | public_practice_set | Cameron McKenzie, published by TheServerSide (Informa TechTarget) | https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/AWS-Certified-Cloud-Practitioner-Exam-Objectives | 2026-08-16 | freely published article, no paywall or login; named author; author publishes an explicit anti-braindump position for his item pool | classification-only |
| `tss-declute` | public_practice_set | Darcy DeClute (Scrumtuous Inc.), published by TheServerSide; items attributed in-article to Cameron McKenzie's course pool | https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/aws-practitioner-exam-cloud-certification-pass-architect-associate-ai | 2026-08-16 | freely published article, no paywall or login; named author; article states the items are *not* dumps or braindumps | classification-only |
| `tutorialsdojo-sampler` | public_practice_set | Tutorials Dojo (Jon Bonso) | https://tutorialsdojo.com/aws-certified-cloud-practitioner-clf-c02-sample-exam-questions/ | 2026-08-16 | freely published sample page, readable without login or payment; named commercial trainer, own-authored study material | classification-only |

Derivation docs: one `source-<id>.md` per entry above (Artefact A for practice sources,
Artefact B for syllabus-grade sources).

| id | artefact | file |
|---|---|---|
| `clf-blueprint` | Artefact B — syllabus distillation | [`source-clf-blueprint.md`](source-clf-blueprint.md) |
| `aws-clf-exam-page` | *(no artefact — supplies four manifest scalars, recorded below)* | — |
| `tss-mckenzie` | Artefact A — practice distillation (35 items, full) | [`source-tss-mckenzie.md`](source-tss-mckenzie.md) |
| `tss-declute` | Artefact A — practice distillation (35 items, full) | [`source-tss-declute.md`](source-tss-declute.md) |
| `tutorialsdojo-sampler` | Artefact A — practice distillation (10 items, full) | [`source-tutorialsdojo-sampler.md`](source-tutorialsdojo-sampler.md) |
| `aws-official-question-set` | *(none yet — access pending)* | — |

### Independence warning — `tss-mckenzie` and `tss-declute` are **one voice, not two**

Both TheServerSide articles draw their items from the same pool: Cameron McKenzie's Udemy course
and certificationexams.pro. The `tss-declute` article says so in its own words ("35 sample exam
questions from Cameron McKenzie's Udemy course"), and both articles carry the same in-body pointer
to that pool. They are registered separately because they are separately published, separately
authored articles with **disjoint item sets** (70 distinct items across the two), but for the
convergence computation at S3 they must be treated as **a single independent attestation**.

Consequence for Gate 1: the build has effectively **two independent practice voices**
(`tss-*` pool, `tutorialsdojo-sampler`) plus the blueprint. Concepts attested only by the
`tss-*` pool are single-source. See the convergence outlook in each Artefact A.

### `aws-official-question-set` — pending access, deliberately not accessed

The Tier-1 official set is the best available calibration for this exam and is registered so the
gap is visible rather than silent. What is **publicly documented** (AWS certification page +
catalogue listings, accessed 2026-08-16): Official Practice Question Sets are **free**,
**20 questions**, authored by AWS, aligned to the CLF-C02 exam guide, with per-question feedback
and recommended resources; **an AWS Skill Builder account is required to open them**. AWS also
sells a separate paid Official Practice *Exam* — out of scope under free-first.

`skillbuilder.aws` is a JavaScript application behind Cognito auth; an unauthenticated fetch of the
item URL returns the generic site shell. No account was created (free-first / no-signup rule), so
**no content from this source has been read and no artefact exists for it**. It carries no weight
in the concept inventory. Gate 1 decision for Oliver: authorise (or decline) a Skill Builder
sign-in so a later S2 top-up pass can distil the 20 items.

## Excluded sources — screened and rejected

Exclusion is a Gate 1 legality matter, so the screening is recorded, not just the outcome. The
governing rule, inherited from the AIF-C01 build: **a permissive licence does not launder recalled
exam content.** Screening is by *content*, lowest ids first, against the dump corpus.

| candidate | why excluded | evidence |
|---|---|---|
| ExamTopics CLF-C02 corpus (700+ numbered items) and its mirrors/aggregators (certyiq, awslagi, passnexam, clearcatnet, spoto, cliffsnotes reuploads) | braindump / "actual questions" collections built from candidate recall of live sittings — the always-excluded class, and NDA-conflicted | sites self-describe as exam dumps / "latest real exam questions"; corpus is numbered as `topic 1 question N` recall entries (verified to exist through at least question 682) |
| `nastaso/cloudcertprep` CLF-C02 bank (`src/data/clf-c02/domain*.json`, MIT) | **dump lineage in the low-id band, confirmed by two independent hits.** Bank id `q004` is the ExamTopics CLF-C02 topic-1 **question 4** item ("reliability of AWS", choose TWO) — same five options, same key pair, an explanation bolted on. Bank id `q010` is the ExamTopics "Japanese company / Tokyo Region latency" item — same scenario skeleton, same key, one distractor reworded (`Route 53` swapped in where the dump reads `Amazon Connect`). The sparse, non-contiguous ids (`q004`, `q010`, …) are positions in that numbered corpus | ExamTopics item content surfaced by two independent searches, 2026-08-16, compared against the raw JSON fetched from the repo. Same exclusion as the AIF-C01 build reached for this maintainer's other bank |
| `Ditectrev/…CLF-C02-Practice-Tests-Exams-Questions-Answers` (597 items) | **same numbered corpus, independently confirmed.** Its 4th question is the identical "reliability of AWS (Choose TWO)" item with the identical five options — i.e. two unrelated repos reproduce the ExamTopics ordering. Repo also has **no LICENSE file** at `main` (404) while the same material is sold on Etsy/eBay/Google Play/Patreon, so there is no permission basis even setting provenance aside | raw README fetched 2026-08-16; `LICENSE` returns 404; ExamTopics question-4 content as above |
| `kananinirav/AWS-Certified-Cloud-Practitioner-Notes` → `practice-exam/*.md` (and the kananinirav.com mirror) | dump lineage. Its practice-exam pages carry the same ExamTopics items (the "Japanese company / Tokyo Region" item appears in `practice-exam-1.md`), and the repo README describes the material as notes from the author's own sitting. Already excluded on identical grounds in the AIF-C01 build | search surfaced the dump item inside `practice-exam-1.md`, 2026-08-16 |
| `Dev0psKing/Cloud-Practioner-CLF_C02` ("570+ practice questions", repo self-described as "my summarised note on how I prepared for my Cloud practitioner exam and Passed") | recall-sourced by the author's own description — the always-excluded class. Not screened item-by-item because the description is dispositive | repo title/description, 2026-08-16 |
| Medium: "50 AWS Certified Cloud Practitioner Exam (CLF-C02) Practice Questions" (Elver Tobo) | surfaces in dump-corpus searches carrying the ExamTopics "Japanese company / Tokyo Region" item; republished dump content under a named byline | search hit alongside ExamTopics/certyiq/awslagi for the same item, 2026-08-16 |
| Tutorials Dojo **portal sampler** (30 questions, `portal.tutorialsdojo.com`), Udemy sets, skillcertpro, CertStud, iprep, examcert | account signup and/or payment required — free-first + no-signup rule; not screened further. Note this is a *different artefact* from the freely-readable 10-question page that **is** registered above | portals require registration |
| `simuladoclf.s3.amazonaws.com/english.html`, vmexam.com CLF-C02 sample page | unattributed / unclear provenance. The S3-hosted quiz has no named author, no licence and no provenance statement; the vmexam page publishes sample items with no authorship or origin statement. Registering a source whose provenance cannot be stated would break the chain the validator enforces | pages inspected 2026-08-16; no author, licence or provenance statement present |
| Reddit / r/AWSCertifications and equivalent exam-experience threads | always excluded by methodology (plan §Decisions 2) | — |

**Screening note on the three registered practice sources.** Screening is evidence of absence, not
proof of originality, and is recorded as such:

- `tss-mckenzie` / `tss-declute` — **no numbered correspondence** with the dump corpus at the two
  probe positions checked (their items 1 and 4 are unrelated to ExamTopics topic-1 questions 1 and
  4, which are the Snowball-Edge-cost item and the reliability item respectively). House style is
  distinct from the corpus in the same way the AIF-C01 build found for TheServerSide: invented
  company names plus specific operational quantities in the stem ("about 50 EC2 instances",
  "up to 25 GB each", "roughly 30 stages", "12 years"), a signature absent from recall-sourced
  corpora. The pool's author publishes an explicit anti-braindump position.
- `tutorialsdojo-sampler` — no numbered correspondence (items are topic-organised, not positions in
  a numbered corpus); house style is distinct (long option-by-option refutations closing with
  "Hence, the correct answer is…", plus AWS documentation references per item). **Lower assurance
  than the TheServerSide pair:** no published originality/anti-braindump statement was found for
  this vendor, so the screen rests on structure and style alone. `[UNVERIFIED]` — flagged for Gate 1.

## Source map · AWS (vendor notes)

Methodology asks for `methodology/source-maps/aws.md`; that path is outside this session's
ownership (`content/clf-c02/**` only), so the CLF-C02 deltas are recorded here for a later lift
into the shared map. The AIF-C01 build recorded the same notes for the same reason — **the two
should be merged into one vendor map when someone owns `methodology/`.** Method:
`methodology/01-source-distillation.md#source-maps`.

- **Vendor:** Amazon Web Services, Inc. · **Program:** AWS Certification —
  https://aws.amazon.com/certification/ · **Last checked:** 2026-08-16

| Source class | Tier | URL pattern | Notes |
|---|---|---|---|
| Exam guide (blueprint) | 2 | `https://docs.aws.amazon.com/pdfs/aws-certification/latest/<exam-slug>/<exam-slug>.pdf` | The AIF-C01 slug rule (exam code with the trailing digits split) **held for this exam**: `CLF-C02` → `cloud-practitioner-02`. Confirmed working first try |
| Exam guide (HTML twin) | 2 | `https://docs.aws.amazon.com/aws-certification/latest/examguides/<exam-slug>.html` | **JS-rendered, do not use** — an unauthenticated fetch returns a 1.3 KB shell. The `.md` twin some AWS docs expose 404s here. The PDF is the only fetchable form |
| Exam guides index | 2 | `https://docs.aws.amazon.com/aws-certification/latest/examguides/aws-certification-exam-guides.html` | fetches as static HTML; usable as the new-certification signal |
| Exam detail page (logistics) | 2 | `https://aws.amazon.com/certification/certified-<name>/` | carries what the guide omits: as-sat question count, duration, price, languages. For CLF-C02 the guide gives 50 scored + 15 unscored, and only this page gives 65 questions / 90 minutes / 100 USD |
| Official free practice question set | 1 | `https://skillbuilder.aws/learn/<courseId>/official-practice-question-set-aws-certified-<name>--<code>--english/<itemId>` | free, 20 questions, **account wall**. Note the CLF-C02 slug drops the hyphen inside the code (`clfc02`, not `clf-c02`) — the pattern is not perfectly stable across exams |
| Community prep worth registering | 4 | assess per exam | **CLF-C02 is the worst case in the AWS catalogue.** Two unrelated MIT/no-licence GitHub banks (1,000+ items combined) both reproduce the ExamTopics numbering. Screen by content, lowest ids first; never by licence file |

**Blueprint versioning — a real difference from AIF-C01.** The CLF-C02 exam guide **publishes no
version string and no Change History table.** The AIF-C01 guide's `Change History` /
`Changes to objectives` / `Changes to in- and out-of-scope services` tables have no counterpart
here; the document ends at the out-of-scope service list and a survey link. The only version-ish
signal available is PDF metadata (`CreationDate`, currently **2026-08-14**, Apache FOP producer),
which moves on every documentation rebuild and is therefore a **noisy** watch signal — it will
produce false positives for the P1 vendor-watch engine. Recommended watch signal for this exam:
hash the extracted text of the *content outline + service lists* sections, not the file.

**Licence posture.** Unchanged from the AIF-C01 notes. Exam-guide pages and PDFs: public AWS
publication, used for blueprint data and canonical vocabulary only. Practice sets:
classification-only regardless of source. Trademark line for the per-exam README: *"AWS", "Amazon
Web Services" and "AWS Certified Cloud Practitioner" are trademarks of Amazon.com, Inc. or its
affiliates. This project is not affiliated with, endorsed by, or connected to Amazon Web Services,
Inc.* Known redistribution restrictions: none for analytical classification.

**Crawl notes.** `docs.aws.amazon.com` PDFs fetch cleanly over plain HTTP; `pdftotext -layout`
gives faithful text including the full service lists. `aws.amazon.com/certification/*` fetches as
static HTML but needs a browser UA and heavy tag-stripping. TheServerSide article pages render the
question set **twice** in the HTML (question-only block, then answer block, then both again) —
de-duplicate before counting or the item count doubles. `skillbuilder.aws` remains a JS app behind
Cognito auth: firecrawl/playwright buy nothing without credentials.

## Blueprint facts recorded for the manifest

Source: `clf-blueprint`, read in full on 2026-08-16; logistics from `aws-clf-exam-page`, same date.
Detail lives in [`source-clf-blueprint.md`](source-clf-blueprint.md).

- `blueprint_version`: **CLF-C02 — no version string published by the vendor**; recorded in the
  manifest as `CLF-C02 (unversioned; guide PDF build 2026-08-14)`
- `source_checked_date`: **2026-08-16**
- Exam: **65 questions as sat** — 50 scored + 15 unscored, unidentified; **90 minutes**; **100 USD**;
  certification valid 3 years
- Scoring: scaled **100–1,000**, minimum passing score **700**, **compensatory** (no per-section
  bar); unanswered items scored incorrect, no guessing penalty
- Domains (percentages are *of scored content*): D1 Cloud Concepts 24% · D2 Security and Compliance
  30% · D3 Cloud Technology and Services 34% · D4 Billing, Pricing, and Support 12% — sums to 100
- Structure: **19 task statements**, **135 objective bullets** (Knowledge-of + Skills-in),
  distributed D1 18 · D2 31 · D3 58 · D4 28
- Item types: **exactly two** — *multiple choice* (1 key + 3 distractors) and *multiple response*
  (2+ keys of 5+ options). The guide names no others. See the format-profile note below
- Answer space: an **in-scope service list of 100 offerings across 19 categories** and an
  out-of-scope list of 46 offerings across 19 categories, both published verbatim in the guide

### Format profile vs Mockka's supported formats

CLF-C02's real item types are a **strict subset** of Mockka's three formats — the opposite of the
AIF-C01 situation, where the exam had two types (ordering, matching) that Mockka cannot express.

| Real CLF-C02 item type | Mockka format | Status |
|---|---|---|
| Multiple choice (1 of 4) | `single_choice` | supported, 1:1 |
| Multiple response (2+ of 5+) | `multiple_response` | supported, 1:1 |
| — | `scenario_matching` | **not an exam item type — must not be used for this exam** |

So `format_coverage` for this manifest is a *fidelity* disclosure, not a gap disclosure: the mock
can reproduce 100% of the exam's item types, and S3 must set every domain's
`scenario_matching` count to **0**. All three registered practice sources agree — 80 items, zero
ordering, zero matching, zero anything but the two blueprint types.

## Clean-room statement

This session (research-manager, S1–S2) read the registered sources. Everything in this directory is
analytical classification: concept statements in our own words, distractor-pattern labels, format
counts. No question text, option text or rationale prose from any source is reproduced, and nothing
here can be used to reconstruct a source item. The one deliberate exception is *canonical
vocabulary* in the Artefact B document — short technical terms lifted verbatim from the exam guide,
permitted by `methodology/01-source-distillation.md#clean-room` because terminology is what makes a
rationale traceable back to study material. Authoring sessions (S3 onward) work from these
artefacts alone and never open the sources.

## NDA statement

This package contains no live exam content. Nothing here is drawn from the CLF-C02 item bank, and
no question reproduces an item encountered in a real sitting. Actual exam content is confidential
and protected by the AWS Certification NDA. Sources whose items trace back to candidate recall of a
live sitting were screened out at S1 — see the exclusions table, which for this exam rejected six
candidate banks totalling well over 1,500 items. This is an independent study tool: it is not
affiliated with, endorsed by, or connected to Amazon Web Services, Inc. or Pearson VUE. "AWS",
"Amazon Web Services" and "AWS Certified Cloud Practitioner" are trademarks of Amazon.com, Inc. or
its affiliates.
