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
