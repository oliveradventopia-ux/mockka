# Source registry · Claude Certified Associate – Foundations (CCAO-F)

Written at S1, before distillation. Format + tier rules:
`methodology/01-source-distillation.md` (§tiers, §registry). Every downstream artefact must
trace back to an entry here. Forums and exam-experience threads are always excluded.

> **Naming note — read this first.** The package slug is `ccas` (assigned at intake). The
> **vendor's official exam code is `CCAO-F`**, per the official exam guide, version 1.0, effective
> July 2026, section 5 ("Exam code: CCAO-F"). The intake brief carried "(CCAS)", which matches no
> vendor artefact. The slug is left as `ccas` (it is the package key and is already in use by the
> pipeline run); the manifest `title` uses the vendor's own credential name and code. **Gate 1
> decision for Oliver:** accept `slug=ccas` with `title=…(CCAO-F)`, or rename the package to
> `ccao-f` before S3 fills the inventory.

## Registered sources

| id | type | author | url | date_accessed | license / permission basis | usage constraint |
|---|---|---|---|---|---|---|
| `ccas-blueprint` | public_blueprint | Anthropic, PBC (Claude Certification Program) | https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F6nizmqk8tpzpfjvt6qmmav7rh%2Fpublic%2F1783542847%2FClaude+Certified+Associate+%E2%80%93+Foundations+Exam+Guide.pdf (linked from https://anthropic-partners.skilljar.com/page/partner-certifications) | 2026-08-16 | published free by the certification owner on the public certifications page; no login, no paywall; facts only (domains, weights, objectives, item formats, scoring, policies) | blueprint data + vocabulary |
| `ccas-guide-samples` | public_practice_set | Anthropic, PBC (Claude Certification Program) | same PDF as `ccas-blueprint`, section 8 "Sample Questions" | 2026-08-16 | same public publication; the guide states these items "are not drawn from the live item bank" and are published to illustrate item style | classification-only |
| `ccas-course-recap` | own_course_notes | Oliver Lau, from the official *Claude Certified Associate – Foundations Prep Course* (Anthropic Partner Academy) | offline — proof of access on file (own enrolment in the official prep course); extracted recap at `Mock Exam Library/Claude Certified Associate – Foundations/recap.txt` | 2026-08-16 | own notes from a legitimately accessed official course (Tier 3, `own_course_notes` proof-of-access basis per methodology §tiers) | vocabulary + classification |
| `beecham-ccao-f` | public_practice_set | Ray Beecham (`@raybeecham`), GitHub repository `raybeecham/claude-certified-associate-foundations` | https://github.com/raybeecham/claude-certified-associate-foundations (`data/questions.json`, 56 items) | 2026-08-16 | MIT licence on the repository (explicit, commercial-compatible); repo `DISCLAIMER.md` states the material is original and contains no dumps or recalled exam questions; used classification-only regardless of licence | classification-only |
| `anthropic-prep-course` | own_course_notes | Anthropic, PBC (Anthropic Partner Academy) | https://anthropic-partners.skilljar.com/path/claude-certified-associate-foundations | 2026-08-16 (catalogue metadata only — **lesson content not extracted**) | Oliver holds legitimate access (the course produced `ccas-course-recap`); the platform is account-walled to third parties | **PENDING EXTRACTION** — see below |

Derivation docs: one `source-<id>.md` per entry above (Artefact A for practice sources,
Artefact B for syllabus-grade sources).

| id | artefact | file |
|---|---|---|
| `ccas-blueprint` | Artefact B — syllabus distillation (7 domains, 30 objectives) | [`source-ccas-blueprint.md`](source-ccas-blueprint.md) |
| `ccas-course-recap` | Artefact B — syllabus distillation (7 modules, 35 rules) | [`source-ccas-recap.md`](source-ccas-recap.md) |
| `ccas-guide-samples` | Artefact A — practice distillation (3 items, full) | [`source-ccas-guide-samples.md`](source-ccas-guide-samples.md) |
| `beecham-ccao-f` | Artefact A — practice distillation (56 items, full) | [`source-beecham-ccao-f.md`](source-beecham-ccao-f.md) |
| `anthropic-prep-course` | *(none — extraction pending)* | — |

### `anthropic-prep-course` — pending extraction, deliberately not opened

The prep course is the Tier-3 curriculum behind `ccas-course-recap`: **8 courses** (7 content
modules + a closing module) on the Anthropic Partner Academy. What has been extracted is the
**Module Key-Takeaways / course-closing recap layer only** (35 takeaway rules, ~2,200 words) —
that is `ccas-course-recap`. The per-lesson body content of each module has **not** been extracted
and was not read in this session, so no concept in this package derives from it.

Publicly documented (Anthropic Partner Academy, accessed 2026-08-16): the Associate – Foundations
Prep Course is listed on the prep-courses page as "8 courses included"; the platform requires a
Skilljar account, and the certifications FAQ states **"Certification is available to people at
Claude Partner Network organizations. Registration requires a partner email address on a
recognized company domain — personal email addresses will not work."** No account was created for
this session. Gate 1 decision for Oliver: authorise a top-up S2 pass over the lesson bodies he
already has access to (would deepen D1/D3/D5 vocabulary materially), or accept the recap layer as
sufficient.

## Excluded sources — screened and rejected

Exclusion is a Gate 1 legality matter, so the screening is recorded, not just the outcome. Two
bases are used and kept distinct: **legality** (excluded, non-negotiable) and **validity**
(screened out because the material would mis-calibrate the bank).

| candidate | basis | why excluded | evidence |
|---|---|---|---|
| DumpsBase `ccao-f` free-dumps page, DumpsCafe `Braindumps-CCAO-F`, ExamsLeader "Claude Certified Associate" pack, PassQuestion `ccao-f`, ExamsEmpire `ccao-f` | legality | braindump / "actual exam questions" class — the always-excluded category, and in direct conflict with the exam's NDA (guide §13: all exam content "is the confidential and proprietary property of Anthropic") | sites self-brand as dumps: DumpsCafe URL path is literally `Braindumps-CCAO-F.html`; DumpsBase page is served under `/freedumps/` and the site tagline is "Valid IT Exam Dumps Questions"; ExamsLeader sells "braindumps with an exam simulator" |
| ExamTopics — Anthropic vendor index | legality (pre-emptive) | dump class by construction ("Ace … with Actual Questions"); registered here as a **screen result**: the index carries **only `anthropic/cca-f`** (Architect – Foundations). **No CCAO-F corpus exists on ExamTopics as of 2026-08-16** | fetched `https://www.examtopics.com/exams/anthropic/` 2026-08-16 (HTTP 200); the only Anthropic exam slug in the page body is `cca-f`; zero occurrences of `ccao-f` |
| Cronometer community-forum thread "Anthropic CCAO-F Exam Questions – 2026 Edition" | legality | forum / exam-experience thread — always excluded by methodology (plan §Decisions 2); the thread is also off-topic spam on an unrelated product forum, a standard dump-seeding pattern | surfaced in search 2026-08-16; not opened |
| CertSafari CCAO-F practice bank (664 items; 35 free samples, no sign-up, named maintainer Maarten van Hooft) | **validity** | **off-blueprint bank, mechanically re-tagged onto CCAO-F subdomains.** The free sample is Developer/Architect material — the exam guide explicitly places API and agentic work *outside* the Associate scope (§3: "not intended for software developers who build against APIs or design agentic systems") | fetched the free-sample page 2026-08-16 and counted term frequencies across the 35 items: `claude code` 14, `agent` 24, `api` 19, `mcp` 4, `messages api` 4, `xml tag` 6 — against `hallucin` **1**, `haiku` 2, `sonnet` 1, `skill` 0. Items cover `/clear` in Claude Code, an `InstructionsLoaded` hook, alphabetical settings-file precedence (`20-security.json`), the `inference_geo` request parameter, Console Developer/Admin role scopes and Activity Feed retention — none of which appear anywhere in the CCAO-F blueprint. Tagging is mechanical: an item about Anthropic's transparency reporting is filed under "Subdomain 7.2 Adjust approach based on feedback and results", and one about Activity Feed retention under "Subdomain 6.4 Understand the ethical implications of AI usage". Provenance is unstated on the site; copyright is "All rights reserved" |
| certificationpractice.com CCAO-F pages | validity / not accessible | could not be read for screening: the site is behind a bot challenge, so no provenance or calibration assessment was possible; registering an unscreened bank would breach the registry's evidence standard | two fetches 2026-08-16 returned **HTTP 429** with a "Vercel Security Checkpoint / We're verifying your browser" interstitial |
| claudecertificationguide.com Associate track | n/a — nothing to screen | no Associate practice material exists yet | page states "Coming soon · Prep track planned"; only the Architect track is live |
| findskill.ai CCAO-F prep (34 lessons, 120+ questions) | free-first / no-signup | only the first 2 lessons are free; the rest is behind an account and payment | site copy: "First 2 Free … no card required" for lessons 1–2 only |
| Udemy `claude-associate` (360 questions), Udemy `claude-certified-associate-foundations-practice-exam-pack`, Tutorials Dojo CCAO-F practice exams, SkillCertPro, Manifold AI Learning prep | free-first | paid products; purchase and account required. Not screened further | vendor storefronts require checkout |
| Datrick, Cloud Authority, aiarch.dev CCAO-F overview articles | not a source class | secondary summaries of the official guide; they carry no practice items. **Used once, off-registry, as an independent corroboration of the blueprint numbers** (Datrick states 60 items / 120 minutes / 720 scaled / the same seven weights, "reviewed July 11, 2026") — corroboration only; every blueprint fact in this package is taken from the official PDF | — |
| Reddit / r/ClaudeAI and equivalent exam-experience threads | legality | always excluded by methodology (plan §Decisions 2) | — |

**Note on the dump-screen baseline.** For AIF-C01 the screen worked by matching candidate banks
against a large public dump corpus (ExamTopics), lowest ids first. **CCAO-F has no such corpus** —
the exam was published July 2026, and the vendor index that would carry it holds only the
Architect exam (evidence above). The screen therefore ran on the signals that *are* available:

1. **Class screen.** Every self-branded dump vendor is excluded outright (table above).
2. **Content screen against the dump material that is publicly exposed.** DumpsBase publishes 5
   free "exam-style" samples. Their two lead items (a "what is a hallucination" definition item, and
   a generic-industry-report prompt-repair item) were checked against all 56 `beecham-ccao-f`
   items by keyword: `hallucin*` → **0** matches, `industry report|generic` → **0** matches. No
   overlap.
3. **Content screen against the only known vendor items.** The 3 official sample items
   (`ccas-guide-samples`) were checked against all 56 `beecham-ccao-f` items: the regulation /
   subsection / compliance probe returns 1 item (M1-Q08) and the spreadsheet / PII / anonymise
   probe returns 1 item (M6-Q04). Both were then read in full and are **different items testing
   the same public objective** — M1-Q08 is about supplying an authoritative current source for a
   regulation issued after the model's knowledge cutoff (blueprint 2.3), where the vendor sample is
   about verifying a fabricated citation before sending (blueprint 2.2/2.4); M6-Q04 is about log
   minimisation and never logging secrets, where the vendor sample is about anonymising identifiers
   before upload (blueprint 6.2). No shared scenario, key or option set. Not lineage.
4. **Repository-provenance screen.** `raybeecham/…` created 2026-07-14 (after the exam's July 2026
   publication), MIT, named author with a CITATION.cff, an explicit `DISCLAIMER.md` ("does not
   contain exam dumps, recalled live-exam questions, or proprietary course material"), and a
   `docs/question-writing-guide.md` whose "Avoiding accidental exam dumps" section instructs
   contributors to reject recalled items. Every item carries a `source` field pointing at official
   Anthropic documentation (13 distinct `platform.claude.com` URLs plus `anthropic.com/legal/aup`).

**Residual risk, stated plainly.** A brand-new exam cannot be screened against a corpus that does
not exist yet. `beecham-ccao-f` passes every available check and its stated method is
docs-first authoring, but "no corpus to match against" is weaker assurance than AIF-C01 had. It is
used **classification-only**, as Tier 4 convergence signal, and no text from it enters this
package. If a CCAO-F dump corpus appears later, re-run screen step 2 against it.

## Source map · Anthropic (vendor notes)

Methodology asks for `methodology/source-maps/anthropic.md`; that path is outside this session's
ownership (`content/ccas/**` only), so the vendor notes are recorded here for a later lift into
the shared map. Method: `methodology/01-source-distillation.md#source-maps`. This is the **second**
Anthropic exam in Mockka (after `ccar-p`), so the map is worth creating at the next opportunity.

- **Vendor:** Anthropic, PBC · **Program:** Claude Certification Program, delivered through the
  Anthropic Partner Academy (Skilljar) and **Pearson VUE** · **Last checked:** 2026-08-16

| Source class | Tier | URL pattern | Notes |
|---|---|---|---|
| Certifications index | 2 | `https://anthropic-partners.skilljar.com/page/partner-certifications` | public, no login. The one page that lists every credential, its fee, and a direct exam-guide PDF link. Start every Anthropic S1 here |
| Exam guide (blueprint) PDF | 2 | `https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F6nizmqk8tpzpfjvt6qmmav7rh%2Fpublic%2F<numericId>%2FClaude+Certified+<Role>+%E2%80%93+<Level>+Exam+Guide.pdf` | public S3 objects, no auth. The `<numericId>` path segment is **not derivable** — it must be scraped from the certifications index (the guide links are rendered server-side into the page HTML; a plain `curl` of the index exposes all four). Present set: Associate–Foundations `1783542847`, Developer–Foundations `1783542875`, Architect–Foundations `1783542810`… (Architect–Professional `1783542810`/`…2750`; re-scrape rather than reuse) |
| Certification detail page | 2 | `https://anthropic-partners.skilljar.com/claude-certified-<role>-<level>-certification` | carries fee and marketing copy only; **the numbers live in the PDF, not the page** — unlike AWS, nothing exam-critical is page-only |
| Certifications FAQ | 2 | `https://anthropic-partners.skilljar.com/page/faq-certifications` | policy layer: eligibility, retired practice exam, renewal. Public |
| Prep courses | 3 | `https://anthropic-partners.skilljar.com/page/claude-certification-exam-prep-courses` · path `https://anthropic-partners.skilljar.com/path/claude-certified-<role>-<level>` | catalogue is public; **course content is account-walled** (Skilljar sign-in), and exam registration additionally requires a Claude Partner Network company-domain email |
| Official free practice set | 1 | **none** | the FAQ states: *"The practice exam available on the previous platform was retired in the move to Pearson."* The only vendor-authored practice items now published are the **sample questions inside each exam guide** (3 items in the Associate guide). This is the binding constraint on calibration for every Anthropic exam |
| Community prep worth registering | 4 | assess per exam | the Anthropic cert space is very young and already saturated with (a) self-branded dump vendors and (b) generic cross-exam banks re-tagged onto whichever blueprint is being sold. **Screen by content against the blueprint's scope statement, not by licence file** — see the CertSafari exclusion above |

**Licence posture.** Exam-guide PDFs: public Anthropic publication, used for blueprint data and
canonical vocabulary; the in-guide sample items are used classification-only. Prep-course notes:
own-access basis, vocabulary + classification. Community practice sets: classification-only
regardless of licence. Trademark line for the per-exam README: *"Anthropic", "Claude", and "Claude
Certified Associate – Foundations" are trademarks of Anthropic, PBC. This project is not affiliated
with, endorsed by, or connected to Anthropic, PBC or Pearson VUE.* Known redistribution
restrictions: none for analytical classification; the exam guide is a copyrighted document and is
**not** reproduced here.

**Crawl notes.** The Skilljar pages render the certification cards server-side, so
`curl -sL <index>` is enough — no JS execution needed — but the page is ~1.2 MB and the guide URLs
only appear inside `href` attributes, so grep for `everpath-course-content`. The
`everpath-course-content.s3-accelerate.amazonaws.com` PDFs fetch cleanly over plain HTTPS and
`pdftotext -layout` renders the blueprint table faithfully. Course content on
`anthropic-partners.skilljar.com/path/...` is behind Skilljar auth; an unauthenticated fetch
returns the marketing shell only.

**Watch notes (P1 vendor-watch seam).** Blueprint revision signal: the **Document Control** table
in section 16 of the guide PDF (version + date; currently **1.0 / July 2026**) plus the version
line under the title — diff against `manifest.blueprint_version`. New-certification signal: the
certifications index page (four credentials as of 2026-08-16; "Professional" tiers are being added
role by role — Architect – Professional already exists, Associate – Professional does not).
Practice-set update signal: the sample-question section of the guide; there is no separate practice
product to watch.

## Blueprint facts recorded for the manifest

Source: `ccas-blueprint`, read in full on 2026-08-16. Detail and citation live in
[`source-ccas-blueprint.md`](source-ccas-blueprint.md).

- `blueprint_version`: **1.0 (July 2026)** — guide §16 Document Control: "1.0 · Initial
  publication · July 2026"; title line reads "Version 1.0 · Effective July 2026 · Exam code:
  CCAO-F · This guide is subject to change without notice."
- `source_checked_date`: **2026-08-16**
- Exam: **60 items**; **120 minutes**; **$99 USD**; credential valid **12 months**; delivered by
  **Pearson VUE**, online-proctored or test-centre. The guide states no unscored/pretest split —
  unlike AWS it gives a single item count, and the domain percentages are described as "the
  approximate proportion of **scored items**"
- Scoring: **criterion-referenced**; scaled **100–1,000**; cut score **720**, set by a formal
  standard-setting study; result is pass/fail plus per-domain percent-correct, which is
  **reported but not used** for the pass decision (no per-section bar)
- Item formats: **multiple choice** and **multiple response**; "each item states how many responses
  to select". **No ordering and no matching items** — see the format-profile note below
- Domains (percentages are of scored content): D1 Prompting and Task Execution 14% · D2 Output
  Evaluation and Validation 21% · D3 Product and Model Selection 12% · D4 Workflow Integration and
  Solution Design 16% · D5 Configuration and Knowledge Management 12% · D6 Governance, Risk, and
  Responsible Use 15% · D7 Troubleshooting and Optimization 10% — **sums to 100**

### `pass_threshold_pct` — the one field that is a translation, not a fact

720 on a 100–1,000 scale is **not** 72% correct. A scaled cut score is the output of a
standard-setting study and equates across forms; the raw percentage needed to reach it is not
published. `pass_threshold_pct: 72` is recorded as the **closest honest translation for a
practice-exam pass line**, following the `aif-c01` precedent (700/1,000 → `70`). Flagged so the
intro copy never claims "the real exam needs 72% correct".

### Recommended per-domain exam allocation (arithmetic for S3, not yet in the manifest)

60 items × the published weights, allocated by largest remainder (exact products are
8.4 / 12.6 / 7.2 / 9.6 / 7.2 / 9.0 / 6.0; D2 and D4 carry the two largest remainders):

| Domain | Weight | Exact | Allocated |
|---|---|---|---|
| D1 Prompting and Task Execution | 14% | 8.4 | 8 |
| D2 Output Evaluation and Validation | 21% | 12.6 | **13** |
| D3 Product and Model Selection | 12% | 7.2 | 7 |
| D4 Workflow Integration and Solution Design | 16% | 9.6 | **10** |
| D5 Configuration and Knowledge Management | 12% | 7.2 | 7 |
| D6 Governance, Risk, and Responsible Use | 15% | 9.0 | 9 |
| D7 Troubleshooting and Optimization | 10% | 6.0 | 6 |
| **Total** | **100%** | **60.0** | **60** |

Bank at ≈1.35× → **81 items** (60 × 1.35 = 81.0, exact). S3 owns both numbers; they are recorded
here so Gate 1 can check the arithmetic against a stated method rather than re-deriving it.

### Format profile vs Mockka's three formats

The real exam's profile is a **subset** of what Mockka supports, which is the opposite of the
AIF-C01 case:

| Real CCAO-F format | Mockka format | Disposition |
|---|---|---|
| Multiple choice (one response) | `single_choice` | exact match |
| Multiple response ("each item states how many responses to select") | `multiple_response` | exact match; the guide does not fix the number of options or the select-count, so S3 should adopt the house default and say so |
| — (no ordering items) | — | n/a |
| — (no matching items) | `scenario_matching` | **unused — author zero.** Nothing in the guide describes a matching or drag-and-drop item form. Authoring scenario-matching items would train an interaction the candidate will never meet and would distort the format mix |

Recommendation carried into the manifest's `format_coverage`: `scenario_matching: 0` in every
domain, and a disclosure that the mock's format mix is MC + MR only because that is the whole of
the real exam's profile.

## Convergence outlook

Four accessible sources, but only **two independent readings of what is tested**:

- `ccas-blueprint` and `ccas-guide-samples` are the same document by the same author — the samples
  are an illustration of the blueprint, not an independent attestation.
- `ccas-course-recap` is Anthropic's own course for this exam. It is authoritative on *vocabulary*
  and on the decision frameworks a candidate studies, and it independently corroborates the
  blueprint's shape (its Module 3 recap says output evaluation "is the exam's largest section",
  which matches D2 at 21% — a fact the recap states without quoting a weight). But it is the same
  vendor: agreement between guide and course is coherence, not convergence.
- `beecham-ccao-f` is the **only genuinely independent** reading — a third party's answer to "what
  does the blueprint mean in practice" — and it is Tier 4, 56 items, with a documented scope drift
  toward developer material (see its Artefact A).

So concepts attested by "≥2 sources" will mostly mean *blueprint + recap*, i.e. vendor + vendor.
**S3 must not read that as convergence.** The honest position for Gate 1 is that this is close to
a **single-source build** in the methodology's sense
(`methodology/02-master-inventory.md#single-source`) and should be flagged lower-confidence, with
the degradation path taken: `layers.syllabus_rules: true`, recap rules acting as the syllabus
layer exactly as in `ccar-p`. Recommended convention for S3: compute convergence over
**independent source families** (`vendor` = blueprint + samples + recap; `community` = beecham),
not over raw source ids.

The syllabus layer itself is already built: the recap's 35 rules are transcribed into
`content/ccas/syllabus-rules.json` (original wording, module numbering 1–7 matching the course),
so the player's weak-rule report works from S4 onward. S3 links each concept to its rule id.

**Calibration is the weaker half, not coverage.** Concept coverage is genuinely good — the
blueprint gives 30 objectives, the recap gives 35 rules with the decision frameworks behind them.
What has no independent baseline is *calibration*: format mix beyond "MC and MR exist", difficulty
pitch, and distractor-pattern frequency. Nine vendor-authored wrong options and one Tier-4 bank with
a measured 2.24× answer-length cue is a thin baseline, so the manifest's pattern caps and format
shares are house decisions and must be labelled as such.

**Exit condition (methodology §single-source point 5) — what would lift this build to convergent:**

1. **A second independent practice source in the Associate register.** The specific gap is items
   that name the product surfaces and model tiers; `claudecertificationguide.com` has announced an
   Associate track ("Coming soon") and already runs a free Architect one, so it is the most likely
   candidate to re-screen. Watch it.
2. **A vendor practice product.** Anthropic retired its practice exam in the move to Pearson; if one
   returns it is an immediate Tier-1 re-calibration and the guide's sample-question section is where
   the change would first show.
3. **The prep-course lesson bodies** (`anthropic-prep-course`, pending extraction). This does not
   create convergence — same vendor — but it would substantially deepen D1/D3/D5 vocabulary and is
   the cheapest available improvement.
4. **A CCAO-F dump corpus appearing publicly.** Not a source, an obligation: if one appears, re-run
   screen step 2 against `beecham-ccao-f` before this package publishes.

## Clean-room statement

This session (research-manager, S1–S2) read the registered sources. Everything in this directory is
analytical classification: concept statements in our own words, distractor-pattern labels, format
counts, frequency tables. No question text, option text or rationale prose from any source is
reproduced, and nothing here can be used to reconstruct a source item. The one deliberate exception
is *canonical vocabulary* in the Artefact B documents — short technical terms lifted verbatim from
the exam guide and the course recap, permitted by
`methodology/01-source-distillation.md#clean-room` because terminology is what makes a rationale
traceable back to study material. Authoring sessions (S3 onward) work from these artefacts alone
and never open the sources.

## NDA statement

This package contains no live exam content. Nothing here is drawn from the CCAO-F item bank, and no
question reproduces an item encountered in a real sitting. Actual exam content is confidential and
proprietary to Anthropic and is protected by the confidentiality and non-disclosure agreement every
candidate accepts before the exam begins (exam guide §13). Sources whose items trace back to
candidate recall of a live sitting were screened out at S1 — see the exclusions table. This is an
independent study tool: it is not affiliated with, endorsed by, or connected to Anthropic, PBC or
Pearson VUE. "Anthropic", "Claude" and "Claude Certified Associate – Foundations" are trademarks of
Anthropic, PBC.
