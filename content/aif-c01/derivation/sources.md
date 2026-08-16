# Source registry · AWS Certified AI Practitioner (AIF-C01)

Written at S1, before distillation. Format + tier rules:
`methodology/01-source-distillation.md` (§tiers, §registry). Every downstream artefact must
trace back to an entry here. Forums and exam-experience threads are always excluded.

## Registered sources

| id | type | author | url | date_accessed | license / permission basis | usage constraint |
|---|---|---|---|---|---|---|
| `aif-blueprint` | public_blueprint | Amazon Web Services, Inc. | https://docs.aws.amazon.com/pdfs/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.pdf | 2026-08-16 | public publication by the certification owner; facts only (domains, weights, item types, scoring, in/out-of-scope service lists) | blueprint data + vocabulary |
| `aws-official-question-set` | public_practice_set | Amazon Web Services, Inc. | https://skillbuilder.aws/learn/4URFGY63KV/official-practice-question-set-aws-certified-ai-practitioner--aifc01--english/FVG43Y1PAX | 2026-08-16 (metadata only — **content not accessed**) | free vendor-published practice set; AWS documents it as free on the certification-prep page | classification-only — **PENDING ACCESS** (see below) |
| `declute-serverside` | public_practice_set | Darcy DeClute (Scrumtuous Inc.), published by TheServerSide | https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/20-Tough-AWS-AI-Practitioner-Certification-Exam-Questions-and-Answers | 2026-08-16 | freely published article, no paywall or login; named author; author states the items are original and explicitly not braindumps | classification-only |
| `jwalsh-aif` | public_practice_set | Jason Walsh (`jwalsh`), GitHub repository `jwalsh/aif-c01` | https://github.com/jwalsh/aif-c01/tree/main/practice-tests | 2026-08-16 | MIT licence on the repository (explicit, commercial-compatible); used classification-only regardless | classification-only |

Derivation docs: one `source-<id>.md` per entry above (Artefact A for practice sources,
Artefact B for syllabus-grade sources).

| id | artefact | file |
|---|---|---|
| `aif-blueprint` | Artefact B — syllabus distillation | [`source-aif-blueprint.md`](source-aif-blueprint.md) |
| `declute-serverside` | Artefact A — practice distillation (35 items, full) | [`source-declute-serverside.md`](source-declute-serverside.md) |
| `jwalsh-aif` | Artefact A — practice distillation (40 items, full) | [`source-jwalsh-aif.md`](source-jwalsh-aif.md) |
| `aws-official-question-set` | *(none yet — access pending)* | — |

### `aws-official-question-set` — pending access, deliberately not accessed

The Tier-1 official set is the best available calibration for this exam and is registered so the
gap is visible rather than silent. What is **publicly documented** (AWS certification-prep page,
accessed 2026-08-16): Official Practice Question Sets are **free**, **20 questions**, authored by
AWS, described as demonstrating the style of the certification exams, with per-question feedback
and recommended resources; **an AWS Skill Builder account is required to open them**. The Skill
Builder catalogue is a JavaScript application behind that account wall — an unauthenticated fetch
of the item URL returns only the generic site shell, and the legacy `explore.skillbuilder.aws`
path redirects to a search page. No account was created (free-first / no-signup rule), so **no
content from this source has been read and no artefact exists for it**. It carries no weight in
the current concept inventory. Gate 1 decision for Oliver: authorise (or decline) a Skill Builder
sign-in so a later S2 top-up pass can distil the 20 items.

## Excluded sources — screened and rejected

Exclusion is a Gate 1 legality matter, so the screening is recorded, not just the outcome.

| candidate | why excluded | evidence |
|---|---|---|
| ExamTopics AIF-C01 pages, and the mirror/aggregator sites carrying the same corpus (examsnap, pass4itsure, examcollection, certlibrary, examprepper, certempire, actual4test) | braindump / "actual questions" collections built from candidate recall of a live sitting — the always-excluded class, and NDA-conflicted | sites self-describe as exam dumps / "latest real exam questions"; corpus is numbered as `topic 1 question N` recall entries |
| `kananinirav/aws-certified-ai-practitioner-study-notes` → `practice-test/*.md` (MIT licence on repo) | dump lineage. The MIT licence covers the repository, not the provenance of the items inside it; a permissive licence cannot launder recalled exam content | its practice-test item 1 is word-for-word the ExamTopics AIF-C01 topic-1 question-1 item (same stem, same four options, same key); repo README describes the material as notes from the author's own sitting |
| `nastaso/cloudcertprep` AIF-C01 bank — 419 items, MIT, `src/data/aif-c01/domain*.json` | **paraphrased dump lineage in the low-id band.** Three spot-checks all landed: bank ids `aif-q001`, `aif-q009`, `aif-q066` correspond 1:1 by number to ExamTopics AIF-C01 topic-1 questions 1, 9 and 66 — same scenario skeleton, same key, same distractor set, reworded and with options reordered. Rewording changes the expression, not the lineage; the concept-level calibration would still be calibration on recalled live-exam content | verified against the ExamTopics item content surfaced by three independent searches, 2026-08-16 |
| Tutorials Dojo free AIF-C01 sampler, Udemy/skillcertpro/CertStud sets | account signup and/or payment required — free-first + no-signup rule; not screened further | portal requires registration |
| Reddit / r/AWSCertifications and equivalent exam-experience threads | always excluded by methodology (plan §Decisions 2) | — |

**Note on the `cloudcertprep` exclusion.** Its high-id band (roughly `aif-q300`+) shows no external
match and covers objectives that only exist in exam-guide v1.1 (context engineering, prompt
caching, Strands Agents, Amazon Bedrock AgentCore) — i.e. that band post-dates the dump corpus and
looks genuinely authored. Splitting a source by id band is not a defensible provenance boundary at
Gate 1, so the whole source is out. If Oliver ever wants it back, the honest route is asking the
maintainer directly about the seeding of the low-id band, not a heuristic split.

## Source map · AWS (vendor notes)

Methodology asks for `methodology/source-maps/aws.md`; that path is outside this session's
ownership (`content/aif-c01/**` only), so the vendor notes are recorded here for a later lift into
the shared map. Method: `methodology/01-source-distillation.md#source-maps`.

- **Vendor:** Amazon Web Services, Inc. · **Program:** AWS Certification —
  https://aws.amazon.com/certification/ · **Last checked:** 2026-08-16

| Source class | Tier | URL pattern | Notes |
|---|---|---|---|
| Exam guide (blueprint) | 2 | `https://docs.aws.amazon.com/pdfs/aws-certification/latest/<exam-slug>/<exam-slug>.pdf` — HTML twin at `https://docs.aws.amazon.com/aws-certification/latest/examguides/<exam-slug>.html`; index at `.../examguides/aws-certification-exam-guides.html` | slug is the exam code with the trailing digits split (`AIF-C01` → `ai-practitioner-01`). Versioning is explicit: a **Change History** table (version + publication date) plus **Changes to objectives** and **Changes to in- and out-of-scope services** diff tables at the end of the guide. A second copy lives at `https://d1.awsstatic.com/training-and-certification/docs-<slug>/AWS-Certified-<Name>_Exam-Guide.pdf` — the `docs.aws.amazon.com` PDF is the one to treat as canonical |
| Exam detail page (logistics) | 2 | `https://aws.amazon.com/certification/certified-<name>/` | carries what the guide omits: question count as sat, duration, price, languages. For AIF-C01 the guide gives 50 scored + 15 unscored, and only this page gives 65 questions / 90 minutes |
| Official free practice question set | 1 | `https://skillbuilder.aws/learn/<courseId>/official-practice-question-set-aws-certified-<name>--<code>--english/<itemId>` · learning-plan hub `https://skillbuilder.aws/category/exam-prep/<name>-<CODE>` | free, 20 questions, **account wall** |
| Official practice exam | 1 | `https://skillbuilder.aws/learn/<courseId>/official-practice-exam-aws-certified-<name>--<code>--english/<itemId>` | **paid** — Individual subscription (from 29 USD/month per the AWS prep page). Out of scope under free-first |
| Community prep worth registering | 4 | assess per exam | the AWS certification space is saturated with dump-lineage material wearing permissive licences. **Screen every candidate against the dump corpus by content, not by licence file** — see the exclusions table above |

**Licence posture.** Exam-guide pages and PDFs: public AWS publication, used for blueprint data and
canonical vocabulary only. Practice sets: classification-only regardless of source. Trademark line
for the per-exam README: *"AWS", "Amazon Web Services" and "AWS Certified AI Practitioner" are
trademarks of Amazon.com, Inc. or its affiliates. This project is not affiliated with, endorsed by,
or connected to Amazon Web Services, Inc.* Known redistribution restrictions: none for analytical
classification.

**Crawl notes.** `docs.aws.amazon.com` PDFs fetch cleanly over plain HTTP (no JS, no cookie gate);
`pdftotext -layout` gives faithful text including the diff tables. `d1.awsstatic.com` returns 403
for guessed paths — only use URLs discovered from an AWS page. `skillbuilder.aws` is a JS app
behind Cognito auth: unauthenticated fetches return the site shell with generic meta tags, so
firecrawl/playwright buy nothing without credentials.

**Watch notes (P1 vendor-watch seam).** Blueprint revision signal: the Change History version +
publication date inside the guide PDF (currently 1.1 / 2026-04-30) — diff against
`manifest.blueprint_version`. New-certification signal: the exam-guides index page. Practice-set
update signal: not observable without an account.

## Blueprint facts recorded for the manifest

Source: `aif-blueprint`, read in full on 2026-08-16. Detail and citation live in
[`source-aif-blueprint.md`](source-aif-blueprint.md).

- `blueprint_version`: **1.1** (published 2026-04-30; v1.0 was 2026-03-26)
- `source_checked_date`: **2026-08-16**
- Exam: **65 questions as sat** — 50 scored + 15 unscored, unidentified; **90 minutes**; 100 USD
- Scoring: scaled **100–1,000**, minimum passing score **700**, **compensatory** (no per-section
  bar); unanswered items scored incorrect, no guessing penalty
- Domains (percentages are *of scored content*): D1 Fundamentals of AI and ML 20% · D2
  Fundamentals of GenAI 24% · D3 Applications of Foundation Models 28% · D4 Guidelines for
  Responsible AI 14% · D5 Security, Compliance, and Governance for AI Solutions 14% — sums to 100
- Item types: **multiple choice** (1 key + 3 distractors), **multiple response** (2+ keys of 5+
  options, all-or-nothing), **ordering** (3–5 responses placed in order, all-or-nothing),
  **matching** (responses matched to 3–7 prompts, all-or-nothing). The guide says the exam
  contains *one or more of* these types — it does not commit to a per-type count

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

This package contains no live exam content. Nothing here is drawn from the AIF-C01 item bank, and
no question reproduces an item encountered in a real sitting. Actual exam content is confidential
and protected by the AWS Certification NDA. Sources whose items trace back to candidate recall of a
live sitting were screened out at S1 — see the exclusions table. This is an independent study tool:
it is not affiliated with, endorsed by, or connected to Amazon Web Services, Inc. or Pearson VUE.
"AWS", "Amazon Web Services" and "AWS Certified AI Practitioner" are trademarks of Amazon.com, Inc.
or its affiliates.
