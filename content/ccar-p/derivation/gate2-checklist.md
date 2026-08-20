# Gate 2 checklist — ccar-p (assembled 2026-08-19)

Working paper for Gate 2, produced by `/exam-publish` (S6) per
[`methodology/06-provenance-publishing.md#preflight`](../../../methodology/06-provenance-publishing.md#preflight).
Owner: exam-examiner. **Decision authority is Oliver's** — nothing here flips
`manifest.status`.

- **Bank revision under review:** `questions.json` blob `fd57cb80` (content commit `f0f52b7`)
- **Form under review:** `selection.json` `form-a`, 63 items (S6 rebuild commit — this change)
- **Eval artifacts:** commit `0bc1583` — `eval/blind-solve.json`, `eval/judge-scores.json`,
  `eval/overlap-report.md`
- **Branch:** `fix/ccar-p-answer-cues`

---

## Preflight — all 8 items, in order

| # | Item | Verdict | Evidence |
|---|---|---|---|
| 1 | Source registry complete, with licence basis | **PASS** | `derivation/sources.md` registers all 3 sources with type + licence basis + derivation artefact. Machine: `provenance-sources`, `concept-source-registry`, `source-derivation-link` all `[pass]`. **Examiner note:** registry rows carry type/licence/artefact but **not** per-row author, URL and date-accessed — the registry-field completeness half of item 1 is partial. Non-blocking for `in_review`; see Residuals. |
| 2 | Every concept source-attributed | **PASS** | The join chain resolves for all 85 items: question → `primary_concept` → `concept.sources[]` → registry → derivation doc. `concept-source-registry` + `source-derivation-link` `[pass]` on this exact tree. 0 licensed imports in the bank. |
| 3 | Validator green | **PASS** | `pnpm validate ccar-p` — 37 checks, **0 errors**, 31 warnings, PASS. All 31 warnings read and dispositioned below. |
| 4 | Eval artifacts present, thresholds met, S5b ceilings hold | **PASS** | All three artifacts exist for this bank revision. No dimension ≤2 (bounces 0). Every confident miss adjudicated (there are none — 85/85). Bounce cap respected (0 of 2 used). Gate 2 sample assembled (22 items). S5b: bank blind 22.35% ≤ 26.78% and k_req 0.678 ≥ 0.585; form-a blind 23.81% ≤ 26.60% and k_req 0.672 ≥ 0.585. Codex matrix absent at S6 — recorded as advisory-skipped in `blind-solve.json` and `eval-report.md` §2. **SINCE RUN — 2026-08-20, after the sign-off: form-a 63/63 agreement with the key, 0 disagreements, 0 unparsed (`eval/codex-solve.json` @ `d9da399`). Advisory, so nothing on this row moves; see §Cross-model column for what the agreement licenses (keys) and what it does not (co-correctness, plausibility, pitch).** |
| 5 | Per-exam README statements | **OPEN** | `content/ccar-p/README.md` **does not exist**. The five required statements (provenance, independence, NDA, non-affiliation, licence) are present in substance across `manifest.intro.disclaimer`, `manifest.provenance.nda_statement` and `derivation/sources.md`, but not in the required per-exam README form. Owner: **exam-author** (L-0022; `content/aif-c01/README.md` is the worked example). **Blocks the `published` flip only** — not `in_review`. |
| 6 | Licences recorded both directions | **PASS** | Outbound: `LICENSE-CONTENT` (CC BY 4.0) + `LICENSE` (MIT) at repo root; the per-exam restatement rides with item 5. Inbound: **n/a** — 0 `licensed_import` items; `licensed-import-license` `[pass]`. |
| 7 | Intro page complete + `format_coverage` where required | **PASS** | `manifest.intro` present with all five fields; `intro-presence` `[pass]`. `format_coverage` **not required**: the Artefact A format analysis (`derivation/purcell-distillation.md` §Format mix observed) records only the three supported formats — 44 single_choice / 14 multiple_response / 5 scenario_matching — so the real profile does not exceed what the engine serves. |
| 8 | Gate 2 sign-off recorded | **PENDING OLIVER** | `derivation/signoff.md` pre-filled with blank verdicts. Last item by construction. |

**Preflight result: 7 PASS · 1 OPEN (item 5, README) · 1 PENDING (item 8, the human).**
Item 5 blocks `published`, not `in_review`. `manifest.status` stays `in_review` and is **not**
touched by this stage.

---

## The Gate 2 deep-read sample — 22 items

Composition per `/exam-publish` §3: all scenario-matching + 10 random + every auto-flagged item.

**All scenario-matching (5)** — graded all-or-nothing, so a single wrong pair fails the item:
`1.03` `3.09` `4.03` `5.06` `6.01`

**Auto-flagged — every item carrying a dimension score of 3 (7)** (`*` = bank item, not seated on
form-a):

| id | flag | what the human is deciding |
|---|---|---|
| `1.01` | dim 5 = 3 | The key is the only option naming a concrete product ("Claude"). Does the named-entity tell make the item cue-solvable in practice? |
| `1.14`* | dim 5 = 3 | The **only** item in the bank where "rule out every rider-carrying option" fully determines the answer. Not on form-a — decide whether it stays bank-eligible. |
| `2.01` | dim 5 = 3 | Key is both the only option naming a model tier ("Sonnet") **and** the longest — two channels at once. |
| `5.11`* | dim 4 = 3, dim 1 = 4 | The one genuine trim narrowing: key says "every subprocessor in the data path"; the rationale argues "every component in the data path" and never says *subprocessor*. Keep / re-key / return to author for a rationale-side fix? |
| `6.05` | dim 5 = 3, dim 2 = 4 | Reads right-vs-wrong: "decline the engagement" is not a real position. Is the pitch acceptable for a professional-level paper? |
| `7.03` | dim 5 = 3 | Sharpest register gap in the bank: 69-char clipped key against three 100–109-char rider-bearing distractors. |
| `7.05`* | dim 5 = 3 | Both keys are the two shortest options and rider-free while every distractor carries a rider — the pair falls out of elimination alone. |

**Random 10** (reproducible: mulberry32, seed `20260819`, drawn from the 73 items not already in
the sample, sorted): `1.09` `1.13` `2.09` `3.04` `3.08` `3.16` `5.02` `5.04` `5.07` `7.02`

**Open adjudication queue: empty.** The blind solve was 85/85, so there is no miskeyed /
co-correct / legitimately-hard decision waiting on a human.

---

## The 31 validator warnings — dispositioned

| warning class | count | disposition |
|---|---|---|
| `concept-convergence` | 27 | **Documented next-wave scope, not a defect blocking this gate.** These are computed-vs-authored priority divergences (`priority: normal` on a 2-source concept, or `high` on a 1-source one). `02-master-inventory.md#method` explicitly names ccar-p's 27 as the sanctioned example of hand-tuned exam seating being *visible, never silent*. Nothing to fix here; the warnings are the record. |
| `rider-balance` | 2 (bank + form) | **Documented next-wave scope.** A rider marks the key in 1/47 bank options (2%) against a 10% floor — the trim wave evacuated riders into distractors. Bounded exploitability, measured item by item at S5: exactly one item (1.14) is fully determined by the cue and it is not on form-a. Owner: exam-author, next authoring wave (surface-parity rule, `03-authoring-guide.md#surface-parity`). |
| `named-entity-parity` | 2 (bank + form) | **Documented next-wave scope.** The entity-max option is the key in 5/8 bank items (63%) and 4/6 form items (67%) against a 55% error-tier bound. Small-n and partly sentence-initial-capital noise: the genuine exposure is 2 items (`1.01`, `2.01`), both in the deep-read sample above. |

None of the 31 is error-tier; the validator is green at 0 errors.

---

## Residual risks Oliver should see before signing

> **SUPERSEDED 2026-08-20 — the instrument ran.** The paragraph below is the accurate record of
> what was true at the time. The `codex` CLI was authenticated on 2026-08-20 and the cross-solve
> returned **63/63 agreement, 0 disagreements, 0 unparsed** on form-a. See §Cross-model column at
> the end of this sheet for the result and, more importantly, for what it does and does not license.

1. **No cross-model check exists for this round.** `codex` is unauthenticated on this machine, so
   the convergent-miss detector — the protocol's strongest miskey signal — did not run. A 100%
   single-family blind solve is exactly the situation that signal exists to audit. If this matters
   to you, `codex login` then re-run the cross-solve against the same keyless form before signing.
   **Done 2026-08-20, after the sign-off: 63/63 agreement, 0 disagreements. See §Cross-model column.**
2. **S5b headroom is real but modest.** form-a blind 23.81% against a 26.60% ceiling — about 1.8
   items of slack. Any content or membership change to this bank should re-run
   `node tools/exploit-scan.mjs ccar-p` **before** it lands.
3. **Preflight item 1 is partially satisfied.** `derivation/sources.md` records type, licence
   basis and artefact per source but not author / URL / date-accessed. Examiner-checklist half of
   item 1; worth closing alongside the README (item 5) in the same exam-author pass.
4. **Seating residual on form-a.** 39 of 47 high-priority concepts are seated; 6 of the 8 unseated
   have a free same-domain, same-format swap available. The seats were deliberately not taken
   because the displaced concepts are the recap-only ones the form keeps. The trade is recorded in
   `selection.json` `notes.s6_rebuild_2026_08_19.seating_residual` and is **yours to confirm or
   overturn** — the examiner did not silently re-tune it.
5. **The trim wave is one round old and unreviewed by a human.** 69 keyed options were shortened
   by a machine-assisted pass. S5 found no damage beyond 5.11, but the deep-read sample is
   weighted toward the items that pass judged closest.

## Cross-model column — arrived 2026-08-20, after the sign-off

The `codex` CLI was authenticated on 2026-08-20 and `node tools/codex-crosssolve.mjs ccar-p` ran the
S5 [§codex](../../../methodology/05-eval-rubric.md#codex) advisory cross-solve that every round of
this package had recorded as `advisory_skipped`: **form-a, 63 items, 63/63 agreement with the
answer key, 0 disagreements, 0 unparsed** (`eval/codex-solve.json`). Wave-wide: 465/465 across the
eight exams.

**It arrived after the sign-off and changes nothing on this sheet.** Codex results are advisory and
never blocking; their only enforcement is that a disagreement joins the Gate 2 sample, and there
were none — so the sample, the verdicts and `manifest.status` all stand exactly as recorded.

**Read it precisely.**

| Now carried by evidence | Still carried only by the human deep read |
|---|---|
| The **answer keys** are defensible to a solver that did not write them and never saw the key. The convergent author/examiner misreading §codex exists to catch did not fire on any served item | **Co-correctness** (dim 1) of nothing (this exam was not in the wave) the wave argued *up*; **distractor plausibility** (dim 2); **difficulty pitch** (dim 5). The cross-solver reports its best option and was never asked whether a second one also works |
| | The 22 reserve-only bank items — out of scope of a form-scope run |

Agreement is not clearance. By the same argument
[§1b](../../../methodology/05-eval-rubric.md#cue-only-solve) uses to refuse a 100% blind solve as
proof of unexploitability, two capable models agreeing could mean both read the same surface. What
makes this agreement meaningful rather than circular is that the surface is measured separately and
is at chance — S5b blind **23.81% on form-a against a 26.60% ceiling**. The pair is the finding.

The item-level questions this leaves for Oliver are collected in
[`content/GATE2-HUMAN-ONLY.md`](../../GATE2-HUMAN-ONLY.md).
