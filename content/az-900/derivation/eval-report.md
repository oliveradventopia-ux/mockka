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

> **SUPERSEDED 2026-08-20 — the instrument ran.** Everything in this section is the accurate
> record of what was true at the time: the `codex` CLI was unauthenticated and the advisory
> cross-solve did not run. It was authenticated on 2026-08-20 and
> `node tools/codex-crosssolve.mjs az-900` returned **50/50 agreement, 0 disagreements,
> 0 unparsed** on the served form. The result and its limits are in §Cross-model column at the end
> of this report; the paragraphs below are kept as history, not as current status.

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
no cross-model signal. *(Closed 2026-08-20, after the sign-off: the CLI was authenticated and the
cross-solve returned form-a 50/50 agreement, 0 disagreements — so the sample gains nothing and
changes nothing. §Cross-model column.)*

---

## S5b · cue-only solve — re-measured after the cue-rework wave (2026-08-19) {#s5b}

Recorded per [methodology/05 §cue-only-solve](../../../methodology/05-eval-rubric.md#cue-only-solve),
which requires the blind score, `k_req` and the ceiling verdict for the **bank and each served
form**. The wave (`9c1adb4` on `fix/cue-rework-wave`) changed option text only, so these
numbers **supersede** any cue figures earlier in this report; the S5 §1 blind solve and the judge
scores were produced against the pre-wave text and were not regenerated (see
`derivation/gate2-checklist.md` §Post-S5 cue-rework wave).

Instrument: `node tools/exploit-scan.mjs az-900` for form scope, and the same tool run against a
selection-free copy of the package for bank scope — it scopes to the served form when a
`selection.json` form exists, so bank scope must be produced deliberately. `random` is the
format-mix expected guess score (single_choice 1/options, multiple_response 1/C(options, |key|),
scenario_matching 1/options^scenarios, all graded all-or-nothing), which is **stricter** than the
rubric's 25% worked-example simplification.

| scope | n | blind (pre-wave → post-wave) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 65 | 43.08% → **24.62%** (16/65) | ≤ 30.69% (random 22.73%) | **0.6020** | ≥ 0.5200 (k_req@random 0.6117) | **PASS** |
| form-a | 50 | 42% → **24%** (12/50) | ≤ 29.77% (random 22.05%) | **0.6053** | ≥ 0.5229 (k_req@random 0.6151) | **PASS** |

Per-cue rates on the shipping revision (chance 25% each):

- **bank** — key-longest-rank 13/53 (24.5%) · key-shortest-rank 12/50 (24.0%) · named-entity 5/17 (29.4%) · rider-marks-key 3/21 (14.3%)
- **form-a** — key-longest-rank 9/39 (23.1%) · key-shortest-rank 9/38 (23.7%) · named-entity 3/12 (25.0%) · rider-marks-key 3/15 (20.0%)

### Residual: the instrument does not test interior length ranks

`key-length-rank-share` and `exploit-scan`'s `key-longest-rank`/`key-shortest-rank` bound only
rank 1 and rank last, and the standard parity fix — lift one thin distractor above a rank-1 key —
lands the key deterministically on **rank 2**. Measuring all four ranks by hand on the shipping
revision:

| scope | key length-rank distribution | best single-rank strategy | rank-aware blind |
|---|---|---|---|
| bank | {1:14, 2:26, 3:4, 4:13} | rank 2: 26/57 (45.6%) | 27/65 = **41.54%** |
| form-a | {1:10, 2:22, 3:0, 4:10} | rank 2: 22/42 (52.4%) | 23/50 = **46.00%** |

"Rank-aware blind" substitutes the best interior rank for the tool's longest-option strategy. It is
**not** the S5b number — the committed strategy set is the instrument of record — but it is the
honest upper bound on what a rank-aware test-wise candidate scores, and Gate 2 should see it.

### Residual: the uninstrumented stem-echo cue

No validator check and no exploit-scan strategy measures option↔stem content-word overlap, and the
wave's own fix mechanism (appending a purpose clause written from the stem's words to lift a key
off the shortest rank) inflates it. Share of single-choice items where the key is the strict
maximum-overlap option, chance 25%: bank 40.0 → 33.3%, form-a 45.5 → 36.4% — it
**fell**.

### Verdict carried to Gate 2

**PASS on the instrument of record, with the largest interior-rank residual of the six reworked
exams.** The wave did what it claimed on the measured cues (blind 42% → 24% on form, 43% → 25% on
bank; all five cue checks silent). But the fix method has a deterministic signature: lifting one
distractor above each rank-1 key moved 13 items from rank 1 to rank 2, and the shortest-rank
counter-measure vacated rank 3 entirely — form-a's distribution is `{1:10, 2:22, 3:0, 4:10}`.
"Rank by length, take the second-longest" therefore scores **22/42 = 52.4%** on form-a SC and
**46.00%** combined, which is *above* the 42% the wave was fixing and well above the 29.77%
ceiling. This is an instrument gap, not an item defect and not a validator failure: no check and no
committed strategy bounds interior ranks. The ask for Oliver is a methodology decision — add a
rank-*distribution* statistic (all four ranks vs uniform) to `exploit-scan`, and rule on whether
az-900 ships in the meantime. Nothing here bounces an item.

---

## S5b · re-measured at the Gate 2 final pass (2026-08-20) {#s5b-final}

Instrument: `node tools/exploit-scan.mjs az-900 --json` for form-a scope, and the same tool run against a selection-free copy of the package for bank scope (the tool scopes to the served form whenever a `selection.json` form exists, so bank scope has to be produced deliberately). Bank revision under measurement: `questions.json` @ **`d8632ef`** (blob `7ff8e81027`, sha256 `9bab1e6c6890e2a4…`).

**These numbers supersede the S5b table above.**

### What was corrected in the standard, and what that does to this exam

Two corrections landed on the instrument between the 2026-08-19 re-pin and this pass. Both are
changes to **how the number is produced and judged**, and they are recorded here rather than
silently folded into the table, so the audit trail shows the standard was corrected — not that
the number moved on its own.

1. **`tools/exploit-scan.mjs` was reporting `ok` against the pass-mark floor, not the publication
   ceiling** (`cda74c8`). The tool's exit status only ever asked "can a zero-knowledge attacker
   reach the pass mark?" — the [1.35 × random / 0.85 × k_req@random ceiling](../../../methodology/05-eval-rubric.md#cue-only-solve) was computed by hand at S5b and never by
   the machine. It now computes `random`, `blindCeiling`, `kReq`, `kReqFloor` and `ceilingOk`
   itself and exits non-zero on a breach.
2. **The committed strategy set now tests every option length rank, not just the extremes**
   (`a8c7f4e`). The previous set scored "pick the longest" and "pick the shortest"; the standard
   parity fix — lift one thin distractor above a rank-1 key — parks keys on rank 2, which reads
   clean on an argmax check and hands the attacker the same free win one rank in. Every package's
   S5b section already carried that gap as an explicit *"Residual: the instrument does not test
   interior length ranks"* table. **That residual is no longer a residual: it is the measured
   number.** This is why the blind figures below are higher than the ones the 2026-08-19 sheets
   recorded even where the bank did not change.

The **bar itself is unchanged.** The hand-computed ceilings in the earlier sheets were already
against the correct 1.35×/0.85× standard, with the strict format-mix `random` rather than the
rubric's 25% worked-example simplification. What changed is that the machine now enforces it and
the attacker is stronger.

### The re-stated verdict

| scope | n | blind (this revision) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 65 | **24.62%** (16/65) | ≤ 30.69% (random 22.73%) | **0.600** | ≥ 0.520 | **PASS** |
| form-a | 50 | **24.00%** (12/50) | ≤ 29.77% (random 22.05%) | **0.605** | ≥ 0.523 | **PASS** |

**The previously pinned revision `9c1adb4`, re-measured with the corrected instrument, does not clear the ceiling:** bank 41.54% (FAIL, k_req 0.483) · form-a 46.00% (FAIL, k_req 0.444). That is the honest statement of why this exam needed another content pass, and it is stated here rather than left implicit — the earlier sheet's PASS was produced by an instrument that could not see interior length ranks.

### Residuals carried to Gate 2

- **rank-2 pile-up: CLOSED.** The 2026-08-19 sheet recorded a rank-aware residual of 45.6% bank / 52.4% form (key length-rank distribution `{1:14, 2:26, 3:4, 4:13}`) and flagged it as the widest of the six. This pass is what closed it: the best single-rank strategy is now 15/57 (26.3%) bank / 11/42 (26.2%) form, and interior ranks are inside the instrument.
- **stem-echo**, uninstrumented: re-checked on the shipping revision with an equivalent content-word-overlap measure at 31.4% bank / 32.1% form against 25% chance — same order as before, no new breach. The exact tokenization used for the 2026-08-19 figure is not committed anywhere, which is itself the instrument gap.
- **The cross-model eval column now exists — run 2026-08-20, after the sign-off.** Every S5 round of this bank recorded `advisory_skipped`, and that history stands; the Codex CLI was authenticated on 2026-08-20 and the advisory cross-solve finally ran on the served form: **50/50 agreement with the answer key, 0 disagreements, 0 unparsed** (`eval/codex-solve.json`). Read it exactly as far as it goes — §Cross-model column below states what it licenses and what it does not. It is evidence that the **keys** hold up to a solver from another model family that did not write them; it is **not** evidence about co-correctness, distractor plausibility or pitch, and the deep-read sample remains the control for those. 15 reserve-only items were not solved and carry no cross-model column.

## Cross-model column — the advisory cross-solve, run 2026-08-20

> Added **after** the Gate 2 sign-off and the publication flip. It changes no verdict, no score, no
> threshold and no `manifest.status`. It is evidence appended to a decision already recorded.

### What ran

The `codex` CLI was authenticated on 2026-08-20 (ChatGPT auth — no per-request billing, so nothing
about this run required cost approval), and the [§codex](../../../methodology/05-eval-rubric.md#codex)
instrument that every round of this package recorded as `advisory_skipped` was finally executed:
`node tools/codex-crosssolve.mjs az-900`. The tool renders each item of the **served form**
stem-and-options only — no answer, no rationale, no `distractor_patterns`, no concept metadata —
batches them through `codex exec` to a different model family, normalises single-choice,
multiple-response and scenario-matching replies, and diffs against the key.

| | |
|---|---|
| Scope | `form-a` — **50 of 65 bank items** (15 reserve-only items not solved) |
| Answered | 50 |
| Agreed with the key | **50/50 — 100%** |
| Disagreed | **0** |
| Unparsed | 0 |
| Artifact | `eval/codex-solve.json` @ `d9da399` |

The same run covered **465/465 items across all eight exams with zero disagreements**.

### What this licenses

A solver from a different model family — one that did not author these items and never saw the key —
chose the keyed option on every item of the served form. That is real evidence for one specific
claim: **the answer keys are defensible to an outsider.** The failure mode §codex exists to catch,
our author and our examiner sharing Claude weights *and* sharing a confident misreading, which no
Claude-side blind score can exclude, did not fire on a single served item.

Per §codex the only enforcement attached to this instrument is that a disagreement adds the item to
the Gate 2 human sample. There were none, so **the sample is unchanged**.

### What this does not license

- **Not dimension 1 (co-correctness).** The solver reports its *best* option. It was never asked
  whether a second option is also defensible — a bank in which every item had two right answers
  would return exactly this result.
- **Not dimension 2 (distractor plausibility) or dimension 5 (pitch).** A transparently weak
  distractor and a quietly co-correct one both produce agreement.
- **Not proof against a shared surface read.** This is the argument
  [§1b](../../../methodology/05-eval-rubric.md#cue-only-solve) already makes about the blind solve:
  100% is evidence for key correctness exactly as much as it is evidence the surface leaks (L-0020).
  Two capable models agreeing may mean both read the subject — or that both read the same
  regularity. What stops that from being circular **here** is that the surface is measured
  independently and sits at chance: `tools/exploit-scan.mjs` puts the zero-knowledge attacker at
  **24.00% on form-a against a 29.77% ceiling**, inside the publication ceiling on both scopes.
  Surface at chance *and* cross-family agreement on the key is a meaningful pair; neither number
  carries the finding alone.
- **Not bank-wide.** The run was form-scope: 15 reserve-only items were never shown to the
  cross-solver and carry no cross-model column.
- **Not fully reproducible as recorded.** `eval/codex-solve.json` names the solver
  `codex-cli (ChatGPT auth)` but records no resolved model id, no run timestamp and no bank
  revision; items were answered in batches of ten rather than independently; and unlike §1 the
  solver returns an answer with **no confidence grade and no reasoning line**, so no cross-solve
  answer could have been adjudicated even if it had disagreed. Logged as a requirement for the next
  run in [methodology/05 §codex-interpretation](../../../methodology/05-eval-rubric.md#codex-interpretation).

### The compensating control, restated

Every sheet in this package named the Gate 2 human deep read as the compensating control against a
convergent author/examiner blind spot. That statement now splits in two, and the split is the point:

- **Partly discharged — key correctness.** An independent model family reached the same key on
  every served item. The deep read no longer carries that load by itself.
- **Fully intact — co-correctness.** The cue-rework wave rewrote 44 distractor strings across 22 items specifically to make them
  *more* plausible (4 of them gained a product name the item did not previously carry — 2.08, 2.18, 3.16, 3.18). A cross-solve that agrees with the key cannot tell you whether one of
  those upgraded distractors has become defensible too, because agreeing with the key is what it
  does either way. Judge dimensions 1 and 2 stay re-opened on exactly the items the wave touched,
  the deep-read sample is still the only instrument pointed at them, and the questions are itemised
  in [`content/GATE2-HUMAN-ONLY.md`](../../GATE2-HUMAN-ONLY.md).
