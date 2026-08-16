# S5 overlap screen — aif-c01, round 1

Examiner: exam-examiner (fresh session) · Date: 2026-08-16 · Protocol:
`methodology/05-eval-rubric.md` §overlap.

## Source posture

Per `derivation/sources.md` and the manifest provenance block, none of the three
sources is held locally as text:

| Source | Type | Held as text? |
|---|---|---|
| `aif-blueprint` (AWS exam guide v1.1) | public_blueprint | No — distilled to `derivation/source-aif-blueprint.md` (structure, task statements, canonical vocabulary; no verbatim body text retained) |
| `declute-serverside` (35 practice Qs) | public_practice_set | No — clean-room analytical classification only (`derivation/source-declute-serverside.md`); its own header asserts no stem/option/rationale prose is reproduced |
| `jwalsh-aif` (MIT-licensed repo, 40 items) | public_practice_set | No — clean-room analytical classification only (`derivation/source-jwalsh-aif.md`) |

Because the source texts were never retained, **no direct bank-vs-source shingle
comparison is possible. The process control is therefore the evidence, and this
report records it explicitly rather than pretending a scan happened** (§overlap,
"where sources were never held as text").

## Process control (the evidence)

1. The authoring session (S3, exam-author, 2026-08-16) worked exclusively from the
   derivation artefacts below — the clean-room rule
   (`methodology/01-source-distillation.md` §clean-room) forbids authoring sessions
   from opening source texts, and the S3 handoff records compliance.
2. Those artefacts contain zero reproduced source text: each classification doc
   carries per-item *concept mappings and pattern frequencies only*; the blueprint
   distillation carries structure, objectives, and canonical vocabulary (Artefact B),
   which is the bounded shared-string exception.
3. Artefact commits (the chain the control hangs on):
   - `d61e623` — `sources.md`, `source-aif-blueprint.md`, `source-declute-serverside.md`, `source-jwalsh-aif.md` (S1/S2)
   - `66fea25` — `master-inventory.md` (S2)
   - `8a35a70` — `questions.json` final authored state (S3)

## Supplementary check actually run: bank vs derivation artefacts

The derivation docs *are* held locally, so as a supplementary control the examiner
ran an 8-gram word-shingle comparison between the full bank text (stems, options,
scenarios, rationales) and every derivation doc:

| Doc | Shared 8-gram shingles | Reading |
|---|---|---|
| `source-aif-blueprint.md` | 11 | All are canonical vocabulary sequences (FM lifecycle stage list, business-metric list) or the distillation's own objective paraphrases — Artefact B bounded exception; no source body text |
| `source-declute-serverside.md` | 0 | clean |
| `source-jwalsh-aif.md` | 3 | All from the doc's own analytic concept-row prose (e.g., "a pre-trained model saves the time, data and compute", line 58), which the bank legitimately echoes — derivation-chain wording, not source text |
| `master-inventory.md` | 0 | clean |
| `sources.md` | 0 | clean |

Every match inspected in context; none is a quoted source string. **No clean-room
breach found; no item bounces for re-expression.**

## Verdict

Overlap screen **passes on process control** for all 67 items. Residual risk is the
inherent one the methodology names: with no held source text, verbatim overlap with
the two practice sets cannot be *measured*, only prevented by construction — the
Gate 2 deep-read sample is the human backstop.

---

# S5 overlap screen — aif-c01, round 2 (post-rework re-run)

Examiner: exam-examiner (fresh session, round 2) · Date: 2026-08-16 · Protocol:
`methodology/05-eval-rubric.md` §overlap.

## What changed since round 1

The bank content changed in two rework commits, so the screen is re-run for the
delta; the source posture is unchanged (sources still never held as text — the
round-1 process control above remains the evidence for the bank at large):

- `ea967ce` — keyed-option rider **trims** on 44 items (deletion-only: no new
  prose entered the bank) plus **two newly authored distractors with rationales**:
  3.07 option A (agent-as-retrieval) and 3.15 option D (best-of-n serve-time
  filter).
- `1b1596c` — bank-wide key-letter **permutation** (reordering only; no new text).

## Delta check actually run

Only the two newly authored distractor/rationale texts are new prose. Both were
checked against every held derivation doc (distinctive-phrase grep + re-read of the
relevant doc sections): **zero shared strings beyond single canonical vocabulary
terms** (Artefact B bounded exception). The new text is scenario wardrobe
("work-order records", "candidate replies") plus concept argument in the bank's own
voice — original expression.

## Process control (round-2 chain)

The rework session (bounce round 1 → rework, exam-author) worked from the round-1
bounce records in `eval/judge-scores-r1.json` (which contain only the examiner's
own judge cases and fix instructions — no source text) and the bank itself. No
source text was opened; the clean-room posture is unchanged. Artefact chain for
this revision: `8a35a70` (S3 authored state) → `ea967ce` → `1b1596c` (bank under
round-2 eval).

## Verdict

Round-2 overlap screen **passes**: deletion-only trims and a letter permutation
introduce no overlap surface; the two new distractors are original expression.
No clean-room breach; no re-expression bounces.
