# Source registry · CompTIA Security+ (SY0-701)

Written at S1, before distillation. Format + tier rules:
`methodology/01-source-distillation.md` (§tiers, §registry). Every downstream artefact must
trace back to an entry here. Forums and exam-experience threads are always excluded.

Security+ is a **dump-heavy** exam: the free-practice space around it is dominated by recalled-item
corpora wearing prep-site branding. Screening was therefore run before, not after, distillation, and
every rejection is recorded with its evidence below.

## Registered sources

| id | type | author | url | date_accessed | license / permission basis | usage constraint |
|---|---|---|---|---|---|---|
| `comptia-sy0701-objectives` | public_blueprint | CompTIA, Inc. | https://assets.ctfassets.net/82ripq7fjls2/6TYWUym0Nudqa8nGEnegjG/0f9b974d3b1837fe85ab8e6553f4d623/CompTIA-Security-Plus-SY0-701-Exam-Objectives.pdf (CompTIA's own Contentful CDN; canonical landing page https://www.comptia.org/en-us/certifications/security/) | 2026-08-16 | published by the certification owner for candidate use; "Copyright © 2023 CompTIA, Inc. All rights reserved." Facts only (domains, weights, objectives, test details, acronym list) | blueprint data + vocabulary |
| `comptia-practice-v7` | public_practice_set | CompTIA, Inc. | https://www.comptia.org/en-us/certifications/security/practice-questions/ | 2026-08-16 | free vendor-published sample set, no paywall and no login; answer key printed on the same page | classification-only |
| `jealarue-exam90` | public_practice_set | `jealarue`, GitHub repository `jealarue/exam90` | https://github.com/jealarue/exam90 (data at `assets/quiz-data.js`) | 2026-08-16 | public GitHub publication, **no licence file — author retains copyright**. Used classification-only under the clean-room rule; no text reproduced. **Gate 1 legality item — see below** | classification-only |

Derivation docs: one `source-<id>.md` per entry above (Artefact A for practice sources,
Artefact B for syllabus-grade sources).

| id | artefact | file |
|---|---|---|
| `comptia-sy0701-objectives` | Artefact B — syllabus distillation (28 objectives, full) | [`source-comptia-sy0701-objectives.md`](source-comptia-sy0701-objectives.md) |
| `comptia-practice-v7` | Artefact A — practice distillation (10 items, full) | [`source-comptia-practice-v7.md`](source-comptia-practice-v7.md) |
| `jealarue-exam90` | Artefact A — practice distillation (145 items, full) | [`source-jealarue-exam90.md`](source-jealarue-exam90.md) |

### Blueprint authenticity — how the PDF was verified

CompTIA does not link the objectives PDF from the certification page's HTML; the download on
comptia.org runs through a lead-capture form (`forms.comptia.org` appears in the page's own CSP
`frame-src`). No form was filled and no account was created. Instead the document was taken from
**CompTIA's own Contentful CDN** and independently cross-checked:

- `assets.ctfassets.net/82ripq7fjls2/…/CompTIA-Security-Plus-SY0-701-Exam-Objectives.pdf` and
  `www.infosecinstitute.com/globalassets/documents/comptia-security-sy0-701-exam-objectives-5-0-1.pdf`
  (InfoSec Institute, a CompTIA partner) return **byte-identical files** —
  sha256 `64e5a75df0e6105c724990476b678cf63533d241261538f53d99d2cc73690eba`, 191,074 bytes, 21 pages,
  produced by Adobe InDesign 18.3 on 2023-08-01.
- Running footer on every page: *"CompTIA Security+ SY0-701 Certification Exam: Exam Objectives
  Version 5.0 — Copyright © 2023 CompTIA, Inc."*
- Its TEST DETAILS table and domain weights match the live comptia.org certification page
  (read the same day), which is the independent confirmation Gate 1 asks for.

**`[UNVERIFIED]` — a later revision of the same document may exist.** Third-party document-sharing
sites (Scribd, Studocu, studylib) list a *"CompTIA Security+ SY0-701 Exam Objectives Version 6.0"*.
No authoritative copy of a 6.0 was obtainable without submitting CompTIA's download form, and every
secondary description of it reports the **same five domains, same weights and same test details** as
5.0 — so the blueprint data below is not at risk, only the document revision string is. Recorded as
a Gate 1 item: confirm the current revision from CompTIA's own download before publication.

### `jealarue-exam90` — Gate 1 legality item

The repository carries **no `LICENSE` file**, so the author retains all rights. Mockka's use is
classification-only (concept and distractor-pattern annotation; nothing reproduced), which is the
same basis on which the AIF-C01 build registered a freely published, unlicensed article. It is
flagged here rather than assumed: Oliver should confirm at Gate 1 that classification-only use of an
unlicensed public repository is acceptable, or the source is dropped and the build falls back to
blueprint + 10 official items (see the convergence consequence in the Artefact A document).

### Registered but **not distilled** — accessible, keys not derivable from a read

Neither of these is excluded on legality or provenance grounds. Both withhold the answer key behind
an interaction, and a practice source whose keys cannot be read cannot be classified per item
(you cannot name the distractor pattern of an option you cannot prove is wrong). Recorded so the gap
is visible rather than silent, and as the natural S2 top-up if Gate 1 wants more convergence.

| candidate | status | evidence |
|---|---|---|
| Professor Messer SY0-701 Pop Quiz archive — https://www.professormesser.com/category/security-plus/sy0-701/sy0-701-pop-quiz/ | pending-access (mechanical, not legal) | free, named author, no login; each post is a five-option poll widget whose key is revealed only after Submit. Page HTML carries stem and options, no key. Distilling N items costs N interactions |
| ExamCompass free SY0-701 practice tests — https://www.examcompass.com/comptia-security-plus-practice-test-1-exam-sy0-701 (24 tests × 25 items, plus topic quizzes) | pending-access (mechanical, not legal) | free, no login, named publisher; engine serves **one item per page** ("Page: 1 of 25") and scores server-side, so keys are not present in the delivered HTML. ~600 items behind ~600 requests with no key is out of budget for this pass |

## Excluded sources — screened and rejected

Exclusion is a Gate 1 legality matter, so the screening is recorded, not just the outcome. The
method is the one proven on AIF-C01: **screen by content, not by licence file**, and check the
lowest-numbered items first, because dump-seeded banks are seeded in id order.

| candidate | why excluded | evidence |
|---|---|---|
| ExamTopics SY0-701 and the mirror/aggregator corpus carrying the same items (itexams.com, pass4success.com, certpreps.com, open-exam-prep.com, gcppcatest.com, certempire, examsnap and equivalents) | braindump / "actual questions" collections built from candidate recall of live sittings — the always-excluded class, and in direct conflict with the CompTIA Candidate Agreement | the sites self-describe: ExamTopics SY0-701 is titled *"Free Actual Q&As"*, ITExams offers *"Free CompTIA Questions and Answers … updated every hour"*, others advertise *"real questions"*. Corpus is numbered as `topic 1 question N` recall entries |
| `Kylie7788/comptia-security-sy0-701-exam-dumps`, `Updated25/newly-sy0-701-2024-45`, `dhvskb46/Updated-sy0-701-Exam-`, `jameshut0/sy0-701-practice-test`, `williamseaborn/CompTIA-Security-Plus-SY0-701-Dump-Questions-Study-Material` | self-declared dumps and prep-vendor spam repositories | surfaced by sweeping the GitHub topic `sy0-701-practice-test` (2026-08-16); repo names and descriptions literally say *"exam dumps"*, *"100% real questions"*, *"Dump Question"*, or advertise a paid dump site |
| `Hamada-khairi/Hamada-Security-Plus-Exam-Prep` — MIT licence, ~1.7 MB of question banks | **third-party commercial content re-hosted.** The MIT licence covers the application, not the provenance of the banks inside it; a permissive licence cannot launder someone else's paid course material any more than it can launder recalled exam content | the bank filenames name their own sources: `Banks/Udemy Bank.json`, `Banks/SY0-701-premium - converted.pdf` (3.7 MB), `Banks/PMS ABC .json`, `Banks/security_plus_question_bank_PMS.json`, plus `pdf_import.py` — i.e. exports of a paid Udemy course and a "premium" PDF |
| `SatenderKumar3024/CompTIA-Security-SY0-701-Exam-Repository-with-Exam-notes-and-Test-based-real` | recall lineage by self-description | repo advertises *"real-world practice test papers"* alongside a re-hosted copy of the objectives PDF; the framing is the AIF-C01 `kananinirav` pattern (notes from the author's own sitting) |
| Quizlet / Anki SY0-701 decks | uncontrolled provenance — community decks routinely transcribe ExamTopics items; no identifiable author, no licence, no way to screen at scale | not individually screened; excluded as a class |
| CompTIA CertMaster Practice, CertMaster Labs, official practice tests | paid products — free-first rule; no purchase made | linked from the certification page as "Learn and Practice products" |
| Reddit r/CompTIA and equivalent exam-experience threads | always excluded by methodology (plan §Decisions 2) | — |

**Note on what the vendor itself says.** The objectives PDF carries a *CompTIA AUTHORIZED MATERIALS
USE POLICY* stating that CompTIA does not endorse content from unauthorised third-party training
sites ("brain dumps") and that candidates who use such material **have their certifications revoked
and are suspended from future testing** under the Candidate Agreement. That is unusually strong
external corroboration of Mockka's anti-dumps posture and should be cited in the exam README: for
this certification, using a dump is not merely dubious, it is disqualifying for the learner.

## Source map · CompTIA (vendor notes)

Methodology asks for `methodology/source-maps/comptia.md`; that path is outside this session's
ownership (`content/sy0-701/**` only), so the vendor notes are recorded here for a later lift into
the shared map. Method: `methodology/01-source-distillation.md#source-maps`.

- **Vendor:** CompTIA, Inc. · **Program:** CompTIA Certifications —
  https://www.comptia.org/en-us/certifications/ · **Last checked:** 2026-08-16

| Source class | Tier | URL pattern | Notes |
|---|---|---|---|
| Exam objectives (blueprint) | 2 | PDF served from `https://assets.ctfassets.net/82ripq7fjls2/<assetId>/<hash>/<Filename>.pdf`; landing page `https://www.comptia.org/en-us/certifications/<cert-slug>/` | **Not linked from the certification page's HTML.** CompTIA's own download runs through a lead-capture form (`forms.comptia.org`). Versioning is a footer string — *"Exam Objectives Version X.Y"* + copyright year — with **no change-history or diff table** (unlike AWS). Authenticate any copy by byte-comparing two independent hosts before trusting it |
| Certification detail page (logistics) | 2 | `https://www.comptia.org/en-us/certifications/<cert-slug>/` | carries what the PDF omits: **passing score and scale**, launch date, retirement guidance, languages, price entry point. Server-rendered — plain `curl` works |
| Official free practice questions | 1 | `https://www.comptia.org/en-us/certifications/<cert-slug>/practice-questions/` | **free, no login, no form**; small (10 items for Security+), answer key printed inline on the same page. Best zero-risk calibration available for CompTIA exams and the first thing to fetch when onboarding the next one |
| Official practice product | 1 | CertMaster Practice, sold from the certification page | **paid** — out of scope under free-first |
| Community prep worth registering | 4 | assess per exam | the CompTIA space is saturated with recalled-item corpora. **Screen every candidate against the dump corpus by content, not by licence file** — see the exclusions table |

**Licence posture.** Objectives PDF and certification pages: public CompTIA publication, "all rights
reserved"; used for blueprint data and canonical vocabulary only, no prose reproduced. Practice
sets: classification-only regardless of source. Trademark line for the per-exam README:
*"CompTIA", "Security+" and "CompTIA Security+" are trademarks of CompTIA, Inc. This project is not
affiliated with, endorsed by, or connected to CompTIA, Inc. or Pearson VUE.* Known redistribution
restrictions: none for analytical classification; the objectives document may not be redistributed
as a document, which is why only classifications and short vocabulary terms leave this session.

**Crawl notes.** `www.comptia.org` is server-rendered — `curl` with a browser UA returns the full
text of both the certification page and the practice-questions page (the practice page's answer key
is in the static HTML). No `.pdf` URLs appear anywhere in that HTML, and `www.comptia.org/content/dam/…`
and `/docs/default-source/…` guesses both 404; find objectives PDFs through the Contentful CDN or an
authorised partner mirror. `www.comptia.jp` redirects PDF guesses to an HTML shell.
`pdftotext -layout` renders the objectives PDF faithfully, including the multi-column bullet lists
and the acronym table (it emits benign `Invalid Font Weight` warnings).

**Watch notes (P1 vendor-watch seam).** Blueprint revision signal: the *"Exam Objectives Version
X.Y"* footer string plus the copyright year — diff against `manifest.blueprint_version`; there is no
vendor-published diff table, so a revision bump means a full re-read. New-certification signal: the
certifications index page. Practice-set update signal: the `/practice-questions/` page content.
**Retirement signal is load-bearing for this exam** — see below.

## Blueprint facts recorded for the manifest

Source: `comptia-sy0701-objectives`, read in full on 2026-08-16, corroborated by the CompTIA
certification page read the same day. Detail and citation live in
[`source-comptia-sy0701-objectives.md`](source-comptia-sy0701-objectives.md).

- `blueprint_version`: **5.0 (© 2023)** — footer string of the objectives PDF; see the `[UNVERIFIED]`
  note above about a possible 6.0 revision
- `source_checked_date`: **2026-08-16**
- Exam: **maximum of 90 questions**; **90 minutes**; item types **multiple-choice and
  performance-based**; recommended experience "a minimum of 2 years of experience in IT
  administration with a focus on security"
- Scoring: scaled **100–900**, passing score **750** (from the certification page; the objectives PDF
  does not state a pass mark). CompTIA does not publish the raw-to-scaled conversion, so **there is
  no defensible raw `pass_threshold_pct`** — `manifest.exam.pass_threshold_pct` is deliberately left
  `TODO` for an S3/Gate-1 decision rather than guessed at
- Domains: 1.0 General Security Concepts 12% · 2.0 Threats, Vulnerabilities, and Mitigations 22% ·
  3.0 Security Architecture 18% · 4.0 Security Operations 28% · 5.0 Security Program Management and
  Oversight 20% — **sums to 100** (the PDF prints its own "Total 100%" row)
- Objective count: **28** — 4 + 5 + 4 + 9 + 6 across the five domains
- Per-domain exam item counts at the 90-item maximum (largest-remainder rounding of the weights):
  **11 / 20 / 16 / 25 / 18 = 90**. Recorded in the manifest; bank sizing is S3's call
- Lifecycle: launched **2023-11-07**; CompTIA's page states retirement is "usually three years after
  launch (estimated 2026)". Third-party training providers report an **SY0-801 preview around
  October 2026 with general availability in November 2026**, and SY0-701 retiring roughly six months
  later. **`[UNVERIFIED]` — CompTIA has published no firm SY0-801 date or SY0-701 retirement date.**
  This is a Gate 1 business input, not a blueprint fact: a bank authored against SY0-701 has a
  shorter useful life than one authored against a freshly published blueprint

## Format profile versus Mockka's supported formats

The real exam is **multiple-choice plus performance-based questions (PBQs)**. The objectives PDF
states the types and nothing more — no per-type count, no PBQ count, no indication of how PBQs are
weighted. Mockka supports three formats (`single_choice`, `multiple_response`, `scenario_matching`),
so the mapping is:

| Real SY0-701 item form | Mockka mapping | Fidelity |
|---|---|---|
| Multiple choice, one correct response | `single_choice` | exact |
| Multiple choice, "select two/three" | `multiple_response` | exact mechanics; CompTIA states the count in the stem, as Mockka does |
| Performance-based question (simulation: configure a firewall ruleset, drag controls onto a topology, classify log lines, complete a matrix) | **not supported** — approximated as `scenario_matching` where the task is a mapping, and as scenario-led `single_choice` where the task has one defensible outcome | **approximation, disclosed** |

`manifest.format_coverage` carries the disclosure. The honest statement is that PBQ *reasoning* can
be rehearsed and PBQ *interaction* cannot: a candidate meets the drag-and-drop simulation interface
for the first time in the real exam.

## Clean-room statement

This session (research-manager, S1–S2) read the registered sources. Everything in this directory is
analytical classification: concept statements in our own words, distractor-pattern labels, format
counts. No question text, option text or rationale prose from any source is reproduced, and nothing
here can be used to reconstruct a source item. The one deliberate exception is *canonical
vocabulary* in the Artefact B document — short technical terms lifted verbatim from the objectives
document, permitted by `methodology/01-source-distillation.md#clean-room` because terminology is what
makes a rationale traceable back to study material. Authoring sessions (S3 onward) work from these
artefacts alone and never open the sources.

## NDA statement

This package contains no live exam content. Nothing here is drawn from the SY0-701 item bank, and no
question reproduces an item encountered in a real sitting. Actual exam content is confidential and
protected by the CompTIA Candidate Agreement. Sources whose items trace back to candidate recall of
a live sitting were screened out at S1 — see the exclusions table, which also records CompTIA's own
Authorized Materials Use Policy: using brain-dump material is grounds for revoking a candidate's
certification. This is an independent study tool: it is not affiliated with, endorsed by, or
connected to CompTIA, Inc. or Pearson VUE. "CompTIA", "Security+" and "CompTIA Security+" are
trademarks of CompTIA, Inc.
