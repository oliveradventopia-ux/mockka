# S5 eval report — ccar-p, round 1 (2026-08-19)

Owner: exam-examiner (fresh session, never authored or edited this bank).
Protocol: [`methodology/05-eval-rubric.md`](../../../methodology/05-eval-rubric.md) executed in
order via `.claude/skills/exam-eval`.
Bank revision: `questions.json` blob `fd57cb80` (content commit `f0f52b7`), branch
`fix/ccar-p-answer-cues`, HEAD `69fbf6e`.

**Why round 1 on an `in_review` bank.** CCAR-P was imported as legacy content and never went
through S5; its `in_review` status means "imported legacy content, servable, unaudited"
([`06 §status`](../../../methodology/06-provenance-publishing.md#status)). This is a full
evaluation of the bank as if it were new, run after the answer-cue remediation.

## 0 · Independence and preconditions

| Precondition | Evidence |
|---|---|
| Examiner never authored this bank | Fresh session; no Write/Edit to `content/ccar-p/questions.json` at any point. `questions.json` was read-only throughout — every defect route is a bounce report, never an edit. |
| Keyless-first discipline | The keyless form (id · domain · type · stem · options) was built by projection; no raw item record, key, rationale, pattern tag or concept field was materialised before the solve. All 85 answers + confidence + reasoning were written to a slug-scoped scratch file **before** the key was opened. |
| Rework metadata not read | Trim scope was established by an item-id content diff across `e6c06d8..f0f52b7`, after the solve. Only `--oneline` subjects were seen (no keys, letters or patterns in them); no commit body or diff was read pre-solve. |
| `pnpm validate ccar-p` green | 37 checks, **0 errors**, 31 warnings — PASS. |
| No prior eval artifacts to quarantine | `eval/` was empty; this is round 1. |

## 1 · Blind solve

**85 / 85 — 100.0%.** Zero misses, so the confident-miss adjudication queue is **empty** and no
item enters Gate 2 on an open adjudication. 84 answers were high-confidence; one (5.11) was
medium-confidence and matched.

Read this number the way [§1b](../../../methodology/05-eval-rubric.md#cue-only-solve) instructs:
a knowledgeable examiner at 100% is evidence for correct keying *or* for cueing, and cannot
distinguish them by itself (L-0020, aif-c01 round 1). The S5b instrument below is what separates
the two channels — and it says the surface is not carrying the answers, so the 100% is the
knowledge channel.

Artifact: [`eval/blind-solve.json`](../eval/blind-solve.json).

## 2 · Codex advisory cross-solve — **advisory-skipped**

> **SUPERSEDED 2026-08-20 — the instrument ran.** Everything in this section is the accurate
> record of what was true at the time: the `codex` CLI was unauthenticated and the advisory
> cross-solve did not run. It was authenticated on 2026-08-20 and
> `node tools/codex-crosssolve.mjs ccar-p` returned **63/63 agreement, 0 disagreements,
> 0 unparsed** on the served form. The result and its limits are in §Cross-model column at the end
> of this report; the paragraphs below are kept as history, not as current status.

The `codex` CLI exists on this machine only inside the VS Code extension bundle
(`openai.chatgpt-26.5810.52044`) and is **unauthenticated**: `401 Unauthorized`, no
`~/.codex/auth.json`. No API spend was attempted (free-first rule; no Oliver approval to spend).
Recorded and proceeding per §codex: *an advisory instrument that is missing is noted, not
blocking.*

**Consequence carried to Gate 2:** the three-way disagreement matrix does not exist for this
round, so the convergent-miss signal — the protocol's strongest miskey detector — is unavailable.
Gate 2 samples without the cross-model signal, and this report says so. If Oliver runs
`codex login`, the cross-solve should be re-run against the same keyless form before sign-off.

## 3 · S5b cue-only solve — **PASS on both ceilings, both scopes**

Instrument: `node tools/exploit-scan.mjs ccar-p` (form scope) plus the same tool run against a
selection-free copy of the package (bank scope — the tool scopes to the served form when one
exists).

| scope | n | blind | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 85 | **22.35%** (19/85) | ≤ 26.78% (random 19.84%) | **0.6780** | ≥ 0.5849 (k_req@random 0.6881) | **PASS** |
| form-a | 63 | **23.81%** (15/63) | ≤ 26.60% (random 19.70%) | **0.6719** | ≥ 0.5854 (k_req@random 0.6887) | **PASS** |

`random` is the format-mix expected guess score (single_choice ¼, multiple_response 1/C(5,2),
scenario_matching 1/options^scenarios, all three graded all-or-nothing), which is **stricter**
than the 25% simplification in the rubric's worked example. Both ceilings also pass against 25%
(blind ≤ 33.75%, k_req ≥ 0.5667).

Best individual strategies on form-a: always-A 11/44 · longest-option 13/44 · always-A+C 2/14 ·
listed-order matching 0/5. Per-cue rates: key-longest 29.5% (chance 25%), key-shortest 20.9%
(chance 25% — **no inverted length cue was created by the trim**), named-entity 66.7%,
rider-marks-key 2.9%.

**Verified independently rather than assumed.** The pre-fix bank measured blind 86% → k_req
−0.79; the remediation moved it to 23.81% → k_req 0.672. Headroom on the binding constraint is
2.8 points of blind score (about 1.8 items), which is real but not generous — see the watch item
below.

## 4 · Judge rubric — 85 items × 6 dimensions, **0 bounces**

Every item was scored after writing the strongest honest case FOR each distractor.

| dim | 5 | 4 | 3 | 2 | 1 |
|---|---|---|---|---|---|
| 1 · single defensible best answer | 82 | 3 | 0 | 0 | 0 |
| 2 · distractor plausibility | 81 | 4 | 0 | 0 | 0 |
| 3 · concept alignment | 85 | 0 | 0 | 0 | 0 |
| 4 · rationale traceability | 84 | 0 | 1 | 0 | 0 |
| 5 · difficulty pitch | 12 | 67 | 6 | 0 | 0 |
| 6 · scenario realism | 85 | 0 | 0 | 0 | 0 |

**No dimension scored ≤2 anywhere → bounce count 0.** Seven items carry a 3 and are auto-added to
the Gate 2 sample: **1.01, 1.14, 2.01, 5.11, 6.05, 7.03, 7.05**.

Artifact: [`eval/judge-scores.json`](../eval/judge-scores.json) (per-item scores + the judge note
on every flagged item).

### Did the trim wave damage anything?

This was the question the round existed to answer. Scope, established by content-matched diff
across the whole trim chain: **63 items changed, 70 option-text edits, 69 of them on a keyed
option and exactly 1 on a distractor. Zero trims removed a canonical concept term.** Every trim
removed a justification or elaboration rider ("…, because …", "…, so that …", "…, which is …").

Every one of the 85 keys was re-read against its own stem and option set. Findings:

- **All 85 keys still read as complete, defensible answers.** The most aggressive trims (5.01
  −161, 7.03 −151, 7.02 −148, 5.08 −142, 6.06 −141) each left a self-contained claim carrying the
  concept's canonical term.
- **No option set lost parallelism to the point of eliminability.** Dimension 2 never fell below
  4, and the four 4s are pre-existing weak distractors (1.08 B, 2.03 A, 3.11 D, 6.05 D), not trim
  damage.
- **One item was narrowed in meaning: 5.11** — key trimmed from "every component in the data path
  — the model, retrieval, logging and any subprocessor" to "every subprocessor in the data path",
  while `rationale.correct` still argues the wider claim and never uses the word *subprocessor*.
  Scored dim 4 = 3 (traceability), dim 1 = 4. This is the single item where a candidate reading
  the key term cannot find it in the rationale. It is also the one item the blind solve answered
  at medium confidence — two independent instruments landing on the same item.
- **The trim moved the cue, it did not remove it.** Stripping riders from keys and leaving them
  on distractors converted a length cue into a one-sided *rider* cue: only 1 of 47
  rider-carrying options bank-wide is a key (2%, chance 25%). Its exploitability is bounded and
  was measured item by item: in **exactly one item (1.14)** does "rule out every rider option"
  fully determine the answer, and **1.14 is not seated on form-a**. Sixteen further items are one
  distractor short of that. Flagged as dim 5 = 3 where the asymmetry is sharpest (1.14, 7.03,
  7.05).
- **Named-entity parity, in practice:** 8 items qualify; 5 have the key as the entity-max option,
  but 3 of those (4.04, 4.10, 6.07) are sentence-initial-capital noise. The genuine exposure is
  **two items — 1.01 ("Claude") and 2.01 ("Sonnet")** — where the key is the only option naming a
  concrete product. Both flagged dim 5 = 3 and both are seated on form-a.

### The 6 dimension-5 threes, and why they are 3s not 2s

1.01 and 2.01 (named-entity key cue) · 1.14, 7.03, 7.05 (rider/length asymmetry that hands the
answer to a cue-aware candidate) · 6.05 (reads right-vs-wrong: "decline the engagement" is not a
real position). None of these is conceptually unsound; each is a *surface* exposure on an item
whose concept, key and rationale hold. A 2 would mean the item cannot ship; a 3 means a human
decides, which is the correct instrument for a systemic surface property that the validator
already tracks with an owner and a next-wave scope.

## 5 · Overlap screen

Sources were never held as text, so the process control is recorded instead of a scan that did
not happen. No overlap finding, no clean-room breach indicated.
Artifact: [`eval/overlap-report.md`](../eval/overlap-report.md).

## 6 · What S5 hands to S6 / Gate 2

- **Bounces:** 0 (cap 2 per item; nothing consumed, nothing escalated).
- **Open adjudications:** 0 (blind solve 85/85).
- **Gate 2 sample:** 22 items — all 5 scenario-matching + 7 auto-flagged + 10 seeded-random.
- **Missing instrument at S5:** the Codex cross-solve (see §2). **Supplied 2026-08-20, after the sign-off — 63/63 agreement on form-a, 0 disagreements** (§Cross-model column). It corroborates the keys; it says nothing about the dimension-5 flags or item 5.11.
- **Watch item for the next authoring wave:** rider balance (2% vs a 10% floor) and named-entity
  parity (63%/67% vs a 55% error-tier bound) are open warnings, documented next-wave scope, not
  defects blocking this gate. The S5b headroom above means the next content change to this bank
  should re-run the exploit scan before it lands, not after.

## Cross-model column — the advisory cross-solve, run 2026-08-20

> Added **after** the Gate 2 sign-off and the publication flip. It changes no verdict, no score, no
> threshold and no `manifest.status`. It is evidence appended to a decision already recorded.

### What ran

The `codex` CLI was authenticated on 2026-08-20 (ChatGPT auth — no per-request billing, so nothing
about this run required cost approval), and the [§codex](../../../methodology/05-eval-rubric.md#codex)
instrument that every round of this package recorded as `advisory_skipped` was finally executed:
`node tools/codex-crosssolve.mjs ccar-p`. The tool renders each item of the **served form**
stem-and-options only — no answer, no rationale, no `distractor_patterns`, no concept metadata —
batches them through `codex exec` to a different model family, normalises single-choice,
multiple-response and scenario-matching replies, and diffs against the key.

| | |
|---|---|
| Scope | `form-a` — **63 of 85 bank items** (22 reserve-only items not solved) |
| Answered | 63 |
| Agreed with the key | **63/63 — 100%** |
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
  **23.81% on form-a against a 26.60% ceiling**, inside the publication ceiling on both scopes.
  Surface at chance *and* cross-family agreement on the key is a meaningful pair; neither number
  carries the finding alone.
- **Not bank-wide.** The run was form-scope: 22 reserve-only items were never shown to the
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
- **Fully intact — co-correctness.** The cue-rework wave rewrote no option string at all — this exam was not in the cue-rework wave specifically to make them
  *more* plausible (no distractor was argued up on this exam). A cross-solve that agrees with the key cannot tell you whether one of
  those upgraded distractors has become defensible too, because agreeing with the key is what it
  does either way. Judge dimensions 1 and 2 stay re-opened on exactly the items the wave touched,
  the deep-read sample is still the only instrument pointed at them, and the questions are itemised
  in [`content/GATE2-HUMAN-ONLY.md`](../../GATE2-HUMAN-ONLY.md).
