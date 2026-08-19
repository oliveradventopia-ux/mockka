# S5 eval report — az-900, round 1

Examiner: exam-examiner (fresh session; authored nothing in this bank — the independence
precondition of `methodology/05-eval-rubric.md` §independence was checked and met) ·
Date: 2026-08-18 (SGT) · Bank: 65 items (57 SC · 5 MR 2-of-5 · 3 SM) at `questions.json`
commit `f649943` · Validator state at eval start: **green on all 27 content checks**, failing only
`selection-shape` and `selection-format-mix` because `selection.json` is still the empty S6
skeleton (S6 not yet run — expected at this stage).

## Headline

**The bank passes S5 round 1 with zero bounces.** No dimension scored ≤2 on any of the 65 items;
blind accuracy was 65/65; the two mechanical surface defects that dominated the aif-c01 round-1
eval (key-position constancy, answer-length cue) are **absent here** — the ratchet checks that came
out of that round are live in the validator and the examiner's independent numbers agree.

What the round does surface is one bank-wide **observation**, not a defect: 16 items carry a
**functional-echo cue** (BO-1), where the keyed option restates the stem's operative requirement in
near-identical vocabulary and no distractor contests those words. Those 16, plus one item with a
retired-name distractor (BO-2, item 2.25) and one with an untraceable distractor rationale (3.12),
make up a **17-item Gate 2 sample**. Full records: `eval/judge-scores.json` → `bank_observations`
and `gate2_sample`.

## 1 · Blind solve (`eval/blind-solve.json`)

- Keyless form generated from `questions.json` by stripping `answer`, `rationale`,
  `distractor_patterns`, `primary_concept`, `secondary_concepts`, `keywords`, `theme` and
  `vertical`, keeping only id, domain, type, stem, options / matching options / scenarios and
  `select_count`. All 65 items were answered with a confidence grade and a one-line reasoning
  **before** any key, rationale or metadata was read.
- **Accuracy: 65/65 (100%). Confidence: 64 high, 1 medium (2.25 — see BO-2). Zero misses → zero
  adjudications open, so nothing from this stage is queued for a human verdict.**
- Unlike aif-c01 round 1, the examiner does **not** discount its own score for surface cues: the
  key-position and answer-length screens (below) are clean, so 65/65 is evidence about the keys,
  not about a cue-readable bank. The honest caveat is the missing cross-model check, not the
  surface.

### Surface-cue screen (run on the keyless form, before judging)

| Screen | Result | Reading |
|---|---|---|
| SC key letter | A 15 · B 14 · C 14 · D 14 | Clean — near-uniform across four letters |
| MR key pairs | `B,D` `A,C` `C,E` `A,D` `B,E` — all distinct | Clean — no repeating pair to learn |
| SM answer maps | `C,A,B,C` · `C,A,D,B,C` · `C,A,B,C` | Clean — none follows listed option order |
| Keyed vs longest distractor (SC) | median 0.99 · max 1.33 · min 0.65 | Clean — keyed option is the longest in 28/57 and the **shortest in 9/57**; the one item ≥1.25 (2.25) is bare product names, where length carries no information |

## 2 · Codex advisory cross-solve

**advisory-skipped.** The `codex` CLI is not on PATH; the VS Code extension's bundled
`codex-cli 0.148.0-alpha.9` was located and probed once — `codex login status` → "Not logged in",
and an `exec` probe returned `401 Unauthorized: Missing bearer or basic authentication in header`.
Establishing auth requires an interactive login outside this session's authority (free-first: no
signups or account actions without Oliver). Per §codex a missing advisory instrument is **noted,
not blocking**.

**Consequence, stated plainly:** there is no three-way disagreement matrix this round. Author and
examiner share Claude weights, so the 65/65 agreement does **not** exclude a convergent blind spot
— a miskey both models prefer would be invisible to this protocol. The Gate 2 human deep read is
the compensating control, and it should be read as carrying that extra load. Retry path is recorded
in `eval/blind-solve.json` → `codex_cross_solve.retry_path`: if Oliver runs `codex login` before
sign-off, the same keyless form is regenerable and the matrix can be filled in without re-running
S5.

## 3 · Judge rubric (`eval/judge-scores.json`)

All 65 items scored on six dimensions, **every distractor argued FOR first** (recorded per item in
the `case` field — 65 written arguments, each naming the strongest honest case for the wrong
options and why it loses).

Score distribution (items × score):

| Dimension | 5 | 4 | 3 | ≤2 |
|---|---|---|---|---|
| 1 single defensible best answer | 64 | — | 1 | — |
| 2 distractor plausibility | 39 | 25 | 1 | — |
| 3 concept alignment | 65 | — | — | — |
| 4 rationale traceability | 63 | 1 | 1 | — |
| 5 difficulty pitch | 20 | 29 | 16 | — |
| 6 scenario realism | 64 | 1 | — | — |

**Dimension-5 policy for this bank** (declared in the artifact `$comment`, analogous to aif-c01's
keyed-length rule): score = min(content pitch, echo score), where the echo score grades BO-1 — 3
when the keyed option restates the stem's operative requirement in near-identical vocabulary *and*
no distractor contests that vocabulary; 4 when the overlap is partial or a distractor makes a
competing claim on the same words; 5 when the surface points away from the key.

Reading: keys are defensible (65 argued cases produced exactly one dimension-1 flag, 2.25);
concept alignment is perfect — every item maps 1:1 to its `concepts.json` statement and tests it
directly; rationales argue rather than assert, in the study guide's own vocabulary; scenarios are
concrete and professionally plausible. The entire quality question in this bank is **dimension 5**,
and it is a pitch question, not a correctness question.

Shape models to copy in any future authoring wave: **2.23, 2.24, 3.01, 3.02, 3.15, 3.16** (all-5
items — planted false claims, near-miss models, and diagnostic reasoning rather than lookup); and
for the echo counter-measure specifically, **3.08 and 3.09**, where a distractor deliberately makes
the same claim as the key in the stem's own words, forcing real product knowledge (both scored
dimension-5 = 4 as a result).

## 4 · Bounce reports

**None. Zero items scored ≤2 on any dimension, so no bounce report was written and nothing returns
to exam-author this round.** Bounce budget untouched (cap 2 per item, per §bounce).

The three bank observations (BO-1 functional echo, BO-2 retired-name distractor at 2.25, BO-3
vertical reuse) are recorded in `eval/judge-scores.json` → `bank_observations` **as Gate 2
questions, not as rework instructions**. BO-1 in particular is deliberately not a bounce: bouncing
16 items would rewrite the bank's pitch rather than fix a defect, and this exam's own
`format_coverage` note commits it to "describe"-altitude recognition items. If Gate 2 rules that
functional echo is unacceptable, BO-1 carries a ratchet proposal (an authoring-guide rule first,
with a mechanical check named for later — not a validator check until a second exam shows the same
class).

## 5 · Overlap screen (`eval/overlap-report.md`)

**Passes on process control** for all 65 items. No source is held as text, so the report records
the control and the artefact commit chain rather than pretending a scan happened. The supplementary
bank-vs-derivation 8-gram comparison actually run found 16 shared shingles, every one of them
either canonical vocabulary or the distillation's own analytic prose (objective-paraphrase rows and
concept statements) — no quoted source string, no re-expression bounce. The S1 rejection of the
largest available AZ-900 corpus on dump lineage and absent licence, with per-item evidence, is
recorded there as the strongest available evidence that the clean-room posture was enforced rather
than assumed.

## 6 · What S5 hands to S6 / Gate 2

- `eval/blind-solve.json` — 65/65, zero adjudications, Codex matrix empty with the reason recorded.
- `eval/judge-scores.json` — all 65 items × 6 dimensions, 65 argued distractor cases, three bank
  observations, empty `bounces`.
- `eval/overlap-report.md` — process-control pass.
- **Gate 2 sample: 17 items** — `1.16 · 2.08 · 2.17 · 2.21 · 2.22 · 2.25 · 3.04 · 3.05 · 3.07 ·
  3.12 · 3.13 · 3.17 · 3.18 · 3.19 · 3.20 · 3.21 · 3.22` (every item carrying any dimension-3
  score; per-item reason in `gate2_sample.items[].why`).

Two decisions are genuinely Oliver's, not the examiner's:

1. **BO-1** — is functional echo acceptable at AZ-900 altitude, or does the 3.08/3.09
   counter-measure become an authoring rule?
2. **BO-2** — keep `Azure Security Center` as a retired-name distractor at 2.25 (the 2026-07-20
   outline knows only the successor, and recognising retired names is legitimate exam content), or
   replace it with a genuine near-neighbour service. Examiner leans accept-with-note. 2.25 is the
   one item to rework if Gate 2 wants exactly one.

Open, carried forward: the Codex cross-solve remains unauthenticated, so the Gate 2 sample carries
no cross-model signal.
