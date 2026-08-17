# S5 overlap screen — clf-c02, round 1

Examiner: exam-examiner (fresh session, never authored this bank) · Date: 2026-08-18 ·
Protocol: `methodology/05-eval-rubric.md` §overlap.

## Source posture

Per `derivation/sources.md` and the manifest provenance block, **no registered source is
held locally as text**:

| Source | Type | Held as text? |
|---|---|---|
| `clf-blueprint` (CLF-C02 exam guide, PDF build 2026-08-14) | public_blueprint | No — distilled to `derivation/source-clf-blueprint.md` (domains, task statements, objective bullets, canonical vocabulary, service lists; no body prose retained) |
| `aws-clf-exam-page` | public_blueprint | No — four logistics scalars only, recorded in `derivation/sources.md`; no artefact |
| `tss-mckenzie` (35 practice items) | public_practice_set | No — clean-room analytical classification only (`derivation/source-tss-mckenzie.md`) |
| `tss-declute` (35 practice items) | public_practice_set | No — clean-room analytical classification only (`derivation/source-tss-declute.md`) |
| `tutorialsdojo-sampler` (10 practice items) | public_practice_set | No — clean-room analytical classification only (`derivation/source-tutorialsdojo-sampler.md`) |
| `aws-official-question-set` | public_practice_set | **Never accessed at all** — registered from public metadata; account wall; zero weight in the inventory |

Because the source texts were never retained, **no direct bank-vs-source shingle comparison
is possible. The process control is therefore the evidence, and this report records it
explicitly rather than pretending a scan happened** (§overlap, "where sources were never
held as text").

## Process control (the evidence)

1. The authoring sessions (S3, exam-author, domain batches `b2f36f5`, `a56b041`, `e9b1d3a`
   and the domain-1 batch preceding them) worked exclusively from the derivation artefacts
   below. The clean-room rule (`methodology/01-source-distillation.md` §clean-room) forbids
   authoring sessions from opening source texts; `derivation/sources.md` §clean-room
   carries the S1/S2 session's own statement that everything in that directory is
   analytical classification and that "authoring sessions (S3 onward) work from these
   artefacts alone and never open the sources".
2. Those artefacts contain zero reproduced source text: each Artefact A carries per-item
   concept mappings, distractor-pattern labels and format counts only; the Artefact B
   blueprint distillation carries structure, objectives and canonical vocabulary, which is
   the bounded shared-string exception.
3. Artefact commits (the chain the control hangs on):
   - `5adb0ff` — package scaffold + S1 source registry (`derivation/sources.md`)
   - `015571c` — `source-clf-blueprint.md` (Artefact B)
   - `cac9dde` — the three Artefact A distillations (`tss-mckenzie`, `tss-declute`,
     `tutorialsdojo-sampler`)
   - `c720ecc` — `master-inventory.md` (136 guide rows → 68 concepts) and `concepts.json`
   - `b2f36f5` / `a56b041` / `e9b1d3a` — the authored bank batches under this eval

**Exclusion screening is part of this control, not separate from it.** This exam is the
most dump-contaminated in the AWS catalogue, and `derivation/sources.md` records six
rejected candidate banks (>1,500 items) with the evidence that rejected each — including
two GitHub banks whose low-id items were matched, item by item, to the ExamTopics numbered
corpus. Nothing from those corpora entered the derivation chain, so nothing from them can
have reached the bank.

## Supplementary check actually run: bank vs derivation artefacts

The derivation docs *are* held locally, so as a supplementary control the examiner ran an
8-gram word-shingle comparison between the full bank text (stems, all options, correct and
distractor rationales — 10,718 distinct shingles) and every derivation doc:

| Doc | Shared 8-gram shingles | Reading |
|---|---|---|
| `source-clf-blueprint.md` | 14 | All are canonical vocabulary sequences lifted from the exam guide's own objective bullets — the six-pillar list (1.05), the four CAF business outcomes (1.09), "costs that are associated with on-premises environments" (1.12), "importance of protecting the AWS root user account" (2.13), "tasks that only the account root user can perform" (2.14), "Availability Zones do not share single points of failure" (3.04). Every hit is in a **rationale**, which is where traceable vocabulary belongs. Artefact B bounded exception; no source body text |
| `source-tutorialsdojo-sampler.md` | 1 | "the account-wide event history of API activity" (bank 2.07 rationale) matches the distillation's own **concept-row prose** at line 76 — the distiller's classification statement, not reproduced item text; the phrase is itself AWS's documented term for CloudTrail |
| `source-tss-mckenzie.md` | 0 | clean |
| `source-tss-declute.md` | 0 | clean |
| `master-inventory.md` | 0 | clean |
| `sources.md` | 0 | clean |
| `gate1-checklist.md` | 0 | clean |

Every match was inspected in context; none is a quoted source string, and none appears in
a stem or an option. **No clean-room breach found; no item bounces for re-expression.**

## Verdict

Overlap screen **passes on process control** for all 68 items. Residual risk is the one the
methodology names: with no held source text, verbatim overlap with the three practice sets
cannot be *measured*, only prevented by construction. Two clf-c02-specific notes for the
Gate 2 deep-read:

- `tutorialsdojo-sampler` carries **lower originality assurance** than the TheServerSide
  pair (no published anti-braindump statement; the S1 screen rests on structure and style
  alone, and is marked `[UNVERIFIED]` in `derivation/sources.md`). It is also the build's
  only practice voice independent of the `tss-*` pool.
- The dump-corpus screening for this exam was unusually deep and is the strongest single
  piece of provenance evidence in the package; it should be read at Gate 2 rather than
  taken on trust.

The single round-1 bounce (`1.10`, answer-surface-cue) is a difficulty-pitch defect, **not**
an originality defect, and does not affect this verdict.

---

# Round 2 delta — 2026-08-18

Examiner: exam-examiner (fresh session, never authored this bank) · Protocol unchanged
(`methodology/05-eval-rubric.md` §overlap).

**Source posture: unchanged.** No registered source became available as text between rounds;
`derivation/sources.md` is unmodified. The process control recorded above is therefore still
the evidence, and it still holds — the round-2 examiner re-read the clean-room statement and
the artefact commit chain rather than taking round 1 on trust.

**Bank delta under screen:** one commit, `168ae1f`, touching one item (`1.10` — stem, keyed
option C, and the `correct` / `A` rationales). No new item, no new source, no new derivation
artefact. The rework was directed by the round-1 bounce report and authored from that report,
not from any source text.

**Supplementary check re-run on the current tree** (8-gram word shingles, full bank text —
stems, all options, correct and distractor rationales — against every derivation doc):

| Doc | Shared 8-gram shingles | Items | Change vs round 1 |
|---|---|---|---|
| `source-clf-blueprint.md` | 14 | `1.05`, `1.09`, `1.12`, `2.13`, `2.14`, `3.04` | none — same count, same items (Artefact B canonical-vocabulary exception, all in rationales) |
| `source-tutorialsdojo-sampler.md` | 1 | `2.07` | none — the same distiller's-prose match, in a rationale |
| `source-tss-mckenzie.md` · `source-tss-declute.md` · `master-inventory.md` · `sources.md` · `gate1-checklist.md` | 0 | — | none |

**The reworked item `1.10` matches zero shingles in any derivation doc**, so the rework
introduced no new shared text of any kind. Every match in the table is in a rationale; none is
in a stem or an option; none is a quoted source string.

**Round-2 verdict: overlap screen passes on process control for all 68 items, unchanged.** The
two clf-c02-specific notes for the Gate 2 deep-read stand as written above (tutorialsdojo
assurance level; the unusually deep dump-corpus exclusion record). The residual risk is the
same one the methodology names and cannot be retired by another round: with no held source
text, verbatim overlap with the three practice sets is prevented by construction, not measured.
