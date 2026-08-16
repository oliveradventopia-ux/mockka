# 06 · Provenance + publishing (S6) {#provenance-publishing}

Stage manual for S6 in [`00-pipeline.md`](00-pipeline.md). Owner: exam-examiner, executing
`/exam-publish`. This is where the anti-dumps posture gets *proven* rather than promised: an exam
ships only when its provenance chain resolves end-to-end and a human has signed off on the
evidence. The validator enforces the preflight; the sign-off is the recorded human half.

---

## The publication preflight {#preflight}

All of it, in order, before `status` may flip. `/exam-publish` produces this checklist with
evidence attached — it is the working paper for [Gate 2](00-pipeline.md#pipeline).

1. **Source registry complete, with licence basis.** Every entry in `derivation/sources.md`
   carries type, author, URL, date accessed, and its licence/permission basis
   ([registry format](01-source-distillation.md#registry)). No unregistered source is referenced
   anywhere downstream; no excluded source type appears at all.
2. **Every concept source-attributed.** The join chain resolves for the whole bank:
   question → `primary_concept` → `concept.sources[]` → registry entry → derivation doc — or,
   for imported items, question → registered `licensed_import` source. This is the
   validator's provenance check ([`04-validation.md`](04-validation.md#invariants)); the
   preflight re-runs it on the exact tree being published.
3. **Validator green.** `pnpm validate <slug>` clean — errors zero, reports read and dispositioned.
4. **Eval artifacts present and thresholds met.** `eval/blind-solve.json` (with the Codex
   advisory matrix or the recorded note that Codex was unavailable), `eval/judge-scores.json`,
   `eval/overlap-report.md` all exist for this bank revision; no dimension ≤2 anywhere; every
   confident miss adjudicated; bounce cap respected; the Gate 2 sample list assembled
   ([`05-eval-rubric.md`](05-eval-rubric.md#handoff)).
5. **Per-exam README statements present** — see the [template](#readme-template) below: provenance,
   independence, NDA, non-affiliation, licence.
6. **Licences recorded, both directions.**
   - **Outbound:** content ships under **CC BY 4.0** (code under MIT), stated in the README and
     the repo's `LICENSE-CONTENT`.
   - **Inbound:** every `licensed_import` source's licence is on the commercial-compatible
     allowlist (CC BY / MIT / Apache-2.0 / author agreement), and its **attribution obligations
     are discharged** exactly as the licence demands — attribution text present where required,
     recorded in the registry entry ([the lane](01-source-distillation.md#licensed-import)).
7. **`format_coverage` disclosure present when required** — see [below](#format-coverage).
8. **Gate 2 sign-off recorded** in `derivation/signoff.md` ([template](#signoff-template)) —
   last, after Oliver's review, never before.

---

## The per-exam README statements {#readme-template}

Every content package carries a README whose trust section is generalized from the CCAR-P
README's "Provenance and independence" section. Template — every bracketed field filled, no
section dropped:

```markdown
## Provenance and independence

These questions are **originally authored** <and/or: **licensed imports**, per item — see below>.
They were written against:

- <the syllabus-grade source(s): what they are and what they supplied — concepts + canonical vocabulary>
- the **publicly published exam blueprint** — the <N> domains and their percentage weights
- <the general knowledge base the authors brought>

The full concept derivation is in [`derivation/`](derivation/), including which concepts each
source contributes and where they converge.

<If any items are licensed imports:>
### Licensed content
<Per import source: what was imported, from whom, under which licence, with the attribution the
licence requires.>

### Prior art
<Credit each Tier 1/Tier 4 source whose practice set informed the derivation, by name, with what
it demonstrated. State plainly:> The questions, concepts and reasoning in this exam are its own.
Every scenario, option, distractor and rationale is originally written <or licensed and attributed
above>.

### NDA statement

**This repository contains no live exam content.** Nothing here is drawn from the <exam name>
item bank, and no question reproduces an item encountered in a real sitting. Actual exam content
is confidential and protected by NDA.

If you sit the certification, you are bound by that NDA too. Please do not open issues or pull
requests containing real exam questions — they will be closed without merging.

### Not affiliated

This is an independent study tool. It is **not affiliated with, endorsed by, or connected to
<vendor legal name(s)>**. <"Mark"> is a trademark of <vendor> — use the exact trademark line from
the vendor's [source map](../../methodology/source-maps/TEMPLATE.md).

No practice set guarantees a pass. Use this alongside hands-on experience and the official
documentation.

### Licence
Content: CC BY 4.0 · Code: MIT.
```

Contribution rules (never submit real exam content; corrections welcome) live once, in the
repo-level `CONTRIBUTING.md` — the README links there rather than restating.

---

## format_coverage disclosure {#format-coverage}

Decision 7: exams whose real format profile exceeds the three supported formats
(`single_choice`, `multiple_response`, `scenario_matching`) are onboarded anyway — concepts
behind unsupported formats are authored into supported formats — **and the approximation is
disclosed, not hidden**. The manifest's `format_coverage` field carries the disclosure and the
player renders it on the exam intro page: which real-exam formats exist (labs, drag-and-drop
ordering, case studies…), which are approximated here and how, so a candidate walks into the real
exam knowing what this mock did not rehearse. When the real exam uses only the supported three,
the disclosure states full coverage. Preflight fails if the Artefact A format analysis shows
unsupported formats and the manifest carries no disclosure.

---

## Gate 2 sign-off — `derivation/signoff.md` {#signoff-template}

The recorded human half. Template:

```markdown
# Gate 2 sign-off · <exam slug>

- **Date:** <YYYY-MM-DD> · **Reviewer:** <name — the human, not an agent>
- **Bank revision:** <git commit hash of questions.json + selection.json under review>
- **Eval artifacts:** blind-solve <hash/date> · judge-scores <hash/date> · overlap-report <hash/date>

## Checklist verdicts
| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | pass/fail | |
| Provenance chain (spot-check: <ids checked>) | pass/fail | |
| Validator | pass/fail | |
| Eval thresholds | pass/fail | |
| Deep-read sample (all scenario-matching + 10 random + all auto-flagged: <ids>) | pass/fail | |
| README statements | pass/fail | |
| Licences in/out | pass/fail | |
| format_coverage disclosure | pass / n-a | |

## Adjudications closed at this gate
<Each open blind-solve adjudication, cross-model disagreement, 3-flag, and bounce-cap survivor:
item id → decision (keep / rekey / waiver / replace) → one-line reason.>

## Waivers
<Any item shipped below the normal bar, with the explicit reason — or "none".>

## Decision

**PUBLISH / DO NOT PUBLISH.** <one line>

Signed: <name>, <date>
```

A sign-off with any preflight verdict at `fail` and no covering waiver is not a sign-off.

---

## manifest.status flip rules {#status}

`manifest.status` has three values (the enum in `methodology/schema/manifest.schema.json`):

- **`draft`** — the scaffolder's default and the state through S1–S5. The player may serve draft
  exams locally; deployed catalogs exclude them.
- **`in_review`** — the preflight has passed and the Gate 2 package is assembled, awaiting
  Oliver's sign-off. Served exactly like `draft`; the state exists so "waiting on the human" is
  visible in the tree.
- **`published`** — publicly served.

The flip rules:

1. `draft → in_review` when `/exam-publish` completes the preflight and hands Oliver the Gate 2
   package. `in_review → published` **only after** `derivation/signoff.md` records a PUBLISH
   decision — the validator's preflight refuses the status otherwise, and the flip commit
   references the sign-off (`publish <slug>: gate 2 signed off <date>`). The sign-off lands in
   the same or an earlier commit — never after the flip.
2. **Content changes after publish re-open the gate proportionally.** Typo-class fixes (no
   meaning change) ship on a green validator. Anything that changes an answer key, an option, a
   rationale's argument, or the selection re-enters S5 for the touched items and needs a fresh
   sign-off entry (append to `signoff.md` — the file is a log, not a certificate).
3. **Blueprint revisions** (vendor watch, P1) drop the exam to `draft` if the manifest no longer
   matches the official blueprint — an exam that misstates the real exam's shape must not be
   served as published; the re-validation wave restores it.
4. The flip is always **its own commit** touching the manifest (and, per rule 1, referencing the
   sign-off) — never buried in a content batch, so `git log` on the manifest is the publication
   history.
