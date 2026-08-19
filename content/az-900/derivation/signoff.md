# Gate 2 sign-off · az-900

> Pre-filled by exam-examiner at S6 (2026-08-18) per methodology/06 §signoff-template.
> **Verdict columns, adjudication decisions, waivers, and the final decision are
> Oliver's — left blank.** Working paper: `derivation/gate2-checklist.md`.

- **Date:** ____ · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision (re-pinned 2026-08-19, after the cue-rework wave):** `questions.json` @ **`9c1adb4`** — blob `6fe6673ef2`, sha256 `65074281b8e48039…`, committed 2026-08-19 on `fix/cue-rework-wave`. **Supersedes the S6 pin `f649943` (blob `4d5d227`)**, which is no longer what ships. `selection.json` @ the S6 commit on `feat/exam-factory` (blob `8336e65`) — untouched by the wave; item ids are stable, so form-a's composition is exactly as seated
- **Eval artifacts:** blind-solve @ `c14fd1a` (r1, 2026-08-18, blob `2f46266`) · judge-scores @ `c14fd1a` (r1, blob `d3fb86d`) · overlap-report @ `c14fd1a` (r1, blob `6cc559b`) · Codex advisory record inline in `blind-solve.json` → `codex_cross_solve` (advisory-skipped, unauthenticated CLI)
- **Provenance caveat — read before signing:** every artifact above was produced against the **pre-wave** option text (`f649943`) and has **not** been regenerated. This exam additionally took a **key-letter permutation** in the wave, so `eval/blind-solve.json`'s recorded letters no longer align with the bank even for items whose text never changed — see §Post-S5 cue-rework wave for exactly what moved, what the prior judge scores still cover, and how the deep-read sample was extended (30 → **40 items**)

## Post-S5 cue-rework wave (2026-08-19) — the proportional re-open

Branch `fix/cue-rework-wave`, five commits on this package (`f974171` → … → `9c1adb4`), every one
explicit-path to `content/az-900/questions.json`. Per
[methodology/06 §status](../../../methodology/06-provenance-publishing.md#status) rule 2, a change
to an option re-opens the gate **for the touched items**. This section makes that proportionality
auditable, so that a PUBLISH signature covers the revision that actually ships.

### Blast radius — measured, not taken on trust

Both revisions of `questions.json` were parsed, indexed by `id` and walked with a recursive
**field-level path diff** against the merge-base `1b33eb6`. The complete set of distinct path
shapes returned is:

| path shape | count | what it is |
|---|---|---|
| `options.<letter>` | 189 | 23 genuine option rewrites + the rest re-lettered by the permutation |
| `answer` | 49 | **key-letter permutation** (`9c1adb4`) — 45 single-choice + 4 multiple-response |
| `distractor_patterns.<letter>` | 181 | patterns moved with their options |
| `rationale.distractors.<letter>` | 181 | distractor rationales moved with their options |
| `matching_options` | 3 | the 3 scenario-matching items deranged |

**Read the `answer` row carefully — it is the one place this wave is not "option text only".** The
`answer` field moved on 49 of 65 items. What did **not** move is which option is *correct*: the
keyed option's **text** is unchanged on 62 of 65 items, and on the remaining 3 (3.03, 3.06, 3.08)
it was deliberately given a justification rider. Verified byte-identical bank-wide: every
`question` stem, every `rationale.correct`, the `rationale.distractors` multiset, the
`distractor_patterns` multiset, and the item-id set (65 in, 65 out). No key was re-decided; keys
were re-lettered.

**23 option strings on 21 items** (18 with text edits + the 3 deranged SM items) — 3 key-side and
20 distractor-side.

- **Seated on form-a (19):** 1.04, 1.08, 1.09, 1.15, 1.18, 2.01, 2.07, 2.08, 2.14, 2.17, 2.20,
  3.03, 3.04, 3.06, 3.08, 3.11, 3.16, 3.19, 3.22
- **Reserve-only (2):** 2.18, 3.18
- **Key-side edits (3):** 3.03, 3.06, 3.08

### What the prior S5 verdicts still cover, and what they do not

| Judge dimension | Standing after the wave |
|---|---|
| 1 · single defensible best answer | **Re-opened for the 21 touched items.** |
| 2 · distractor plausibility | **Re-opened for the 21** — the dimension the wave deliberately moved. |
| 3 · concept alignment | **Stands.** Stems, `primary_concept` and `rationale.correct` byte-identical. |
| 4 · rationale traceability | **Stands as text; flagged as pairing.** All 20 distractor rewrites left their `rationale.distractors` entry byte-identical, so each is refuted by an argument written against the *previous* string. All 20 re-read at this gate and still land; no validator check covers this surface. |
| 5 · difficulty pitch | **Stands; S5b below is the re-measured instrument.** |
| 6 · scenario realism | **Stands.** No scenario text moved. |

`eval/blind-solve.json` and `eval/judge-scores.json` were **not** regenerated — re-running the blind
solve is a fresh S5 round, which `methodology/00 §pipeline` triggers on *bounce rework*, and a
regenerated artifact would silently replace the round-1 record this sheet cites. **Consequence
specific to this exam:** because of the permutation, the recorded letters mismatch the current bank
on 45 of 57 single-choice items. The file remains a valid record of the round-1 *judgment* (65/65,
zero adjudications) against `f649943`; it is not a letter-by-letter map of the shipping bank.

### S5b cue-only solve, re-measured post-wave

Instrument: `node tools/exploit-scan.mjs az-900` (form scope) plus the same tool against a
selection-free copy of the package (bank scope). Full detail and per-cue rates are in
`derivation/eval-report.md` §S5b.

| scope | n | blind (pre-wave → post-wave) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 65 | 43.08% → **24.62%** (16/65) | ≤ 30.69% (random 22.73%) | **0.6020** | ≥ 0.5200 (k_req@random 0.6117) | **PASS** |
| form-a | 50 | 42.00% → **24.00%** (12/50) | ≤ 29.77% (random 22.05%) | **0.6053** | ≥ 0.5229 (k_req@random 0.6151) | **PASS** |

**The residual that needs your ruling — the fix moved the cue one rank inwards, it did not remove
it.** `key-length-rank-share` and `exploit-scan` bound only rank 1 and rank last. Lifting exactly
one distractor above each rank-1 key moved 13 items from rank 1 to rank 2, and the shortest-rank
counter-measure vacated rank 3 entirely:

| scope | key length-rank distribution | best single-rank strategy | rank-aware blind |
|---|---|---|---|
| bank | `{1:14, 2:26, 3:4, 4:13}` | rank 2 — 26/57 = **45.6%** | 27/65 = **41.54%** |
| form-a | `{1:10, 2:22, 3:0, 4:10}` | rank 2 — 22/42 = **52.4%** | 23/50 = **46.00%** |

"Rank by length, take the second-longest" scores 46.00% blind on form-a — **above** the 42% the
wave was fixing, and well above the 29.77% ceiling — while every instrumented check reads clean and
`exploit-scan` reports 24%. az-900 is the worst of the eight banks on this statistic (ai-901 37.5%,
gcp-cdl 33.8%, sy0-701 30.0%, ccao-f 29.2%). This is an **instrument gap**, not an item defect and
not a validator failure: no committed strategy tests interior ranks. It bounces nothing. The ask is
a methodology decision — add a rank-*distribution* statistic to `exploit-scan` — plus a ruling on
whether az-900 ships in the meantime. The uninstrumented stem-echo cue, by contrast, **fell** here
(40.0% → 33.3% bank, 45.5% → 36.4% form).

### Reworked items with a named entity — what to judge

| Item | Seated? | The edit | What to judge |
|---|---|---|---|
| 2.17 B | yes | "shipping the file server's contents to Azure on a schedule" → "…**into Azure Files** on a repeating schedule" | B now echoes the stem's own target (Azure Files). It survives only on "on a repeating schedule" vs the stem's "continuously". Is that margin enough? |
| 3.16 C | yes | "Each surface applies its own copy…" → "Each surface — **the portal, Azure CLI and Azure PowerShell** — applies its own copy…" | The enumeration makes C the most specific-looking option; check specificity is not now doing the discriminating work. |
| 2.08 C | yes | "delivers managed instances" → "delivers managed **Windows** desktops" | Minor; confirm the added word does not create a give-away contrast with the key. |
| 2.18, 3.18 | **no** (reserve) | AzCopy / Service Status named in | bank coverage only — rejecting a reserve item is free. |

Every entity introduced grep-hits `derivation/source-*.md`; no product was invented, and the 18
hand-read items produced no co-correct distractor.

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | Examiner finding: PASS with one residual (checklist §1) — `insidecloud-az900` has no named author and no licence statement; free public page, classification-only use, screened clean against the dump corpus |
| Provenance chain (spot-check: C-001/1.01, C-043/2.25, C-054/3.11, C-057/3.14, C-062/3.19 + your own picks) | | Examiner finding: PASS (checklist §2) — all five chains re-walked by hand to registry + derivation doc |
| Validator | | Examiner finding: PASS — `pnpm validate az-900` → **34 checks, 0 errors, 5 warnings** on the re-pinned tree (`9c1adb4`). *Count corrected 2026-08-19: this row read "30 checks"; four cue checks landed after S6 and all four are silent here.* The 5 warnings are still exactly the five intended `concept-convergence` same-author WARNs ratified at Gate 1 (C-001, C-012, C-057, C-058, C-061) — any other WARN set is a defect |
| Eval thresholds | | Examiner finding: PASS **on the pre-wave scores** — 65/65 blind, zero dimensions ≤2, zero bounces, zero open adjudications. No cross-model column (Codex unauthenticated). **S5b re-measured on the shipping revision: PASS on both ceilings, both scopes** (bank blind 24.62% ≤ 30.69%, k_req 0.6020 ≥ 0.5200; form-a 24.00% ≤ 29.77%, k_req 0.6053 ≥ 0.5229) — **but the largest interior-rank residual of the six reworked exams**: see §Post-S5 cue-rework wave |
| Deep-read sample — **extended 30 → 40 items** for the cue-rework wave (all SM + 10 random + all auto-flagged + **every reworked item**) | | **S6 core (30):** SM 1.18, 2.14, 3.11 · random 1.01, 1.02, 1.06, 1.15, 2.03, 2.09, 2.15, 2.23, 3.06, 3.10 · flagged 2.25, 3.12, 3.13, 1.16, 2.08, 2.17, 2.21, 2.22, 3.04, 3.05, 3.07, 3.17, 3.18, 3.19, 3.20, 3.21, 3.22. **Added by the wave (10):** seated 1.04, 1.08, 1.09, 2.01, 2.07, 2.20, 3.03, 3.08, 3.16 · reserve-only 2.18. (1.15, 1.18, 2.08, 2.14, 2.17, 3.04, 3.06, 3.11, 3.18, 3.19, 3.22 were reworked *and* already sampled.) **All 19 reworked items seated on form-a are now in the sample**; the named-entity fixes — 2.08, 3.16 (seated) and 2.18, 3.18 (reserve) — are called out with what to judge in §Post-S5 cue-rework wave. 6 auto-flagged/reworked items (2.18, 2.21, 3.05, 3.12, 3.13, 3.18) are reserve-only: rejecting one is free. 14 of the 17 original flags are one repeated question — BO-1 |
| README statements | | Examiner finding: **OPEN** — `content/az-900/README.md` does not exist (owner: exam-author). Requires close-out or an explicit waiver below before PUBLISH |
| Licences in/out | | Examiner finding: PASS — repo `LICENSE` (MIT) + `LICENSE-CONTENT` (CC BY 4.0); zero `licensed_import` items inbound, nothing to attribute |
| format_coverage disclosure | | Examiner finding: PASS — required (real exam exceeds the three supported formats) and present: hot-area, build-list and drag-and-drop approximations named, active screen / case studies / problem-solution series declared not represented, plus the partial-credit and scaled-score divergences. Intro block also complete (`intro-presence` green) |

## Adjudications closed at this gate

<!-- Each 3-flag, bank observation and cross-model disagreement: item id → decision
     (keep / rekey / waiver / replace) → one-line reason.
     Open queue from S5: EMPTY (zero blind-solve misses — 65/65).
     Bank-wide rulings first (BO-1, BO-2); per-item rows follow. -->

| Item / observation | Decision | Reason |
|---|---|---|
| BO-1 functional echo (bank rule: 1.16, 2.08, 2.17, 2.21, 2.22, 2.25, 3.04, 3.05, 3.07, 3.13, 3.17, 3.18, 3.19, 3.20, 3.21, 3.22) | | |
| BO-2 / 2.25 retired-name distractor (dim1 = 3) | | |
| 3.12 (dim4 = 3, untraceable rationale — reserve-only) | | |
| 3.13 (dim2 = 3, eliminable option D — reserve-only) | | |
| Scenario-matching read: 1.18 | | |
| Scenario-matching read: 2.14 | | |
| Scenario-matching read: 3.11 | | |
| Codex cross-solve absent (no cross-model signal this round) | | |
| **Interior key length-rank (whole form)** | | form-a is `{1:10, 2:22, 3:0, 4:10}` — "take the second-longest" scores 22/42 SC = 52.4% (46.00% combined), *above* the 42% the wave was fixing. Instrument gap, not an item defect: accept · re-balance ranks · waive |
| 2.17 (wave) | | Data Box distractor now names Azure Files, echoing the stem's target; survives on "on a repeating schedule" vs "continuously" |
| 3.16 (wave) | | Distractor C now enumerates "the portal, Azure CLI and Azure PowerShell" — check the enumeration does not make C the specific-looking option |
| 2.08 (wave) | | Azure Virtual Desktop distractor now says "managed Windows desktops" — check the added entity does not become a give-away contrast |
| Key-letter permutation (whole bank) | | `eval/blind-solve.json` letters no longer map to the shipping bank; accept the deep-read as the control, or authorise a re-solve |

## Waivers

<!-- Any item shipped below the normal bar, with the explicit reason — or "none".
     Examiner expectation: none required by the eval (zero bounces, zero dimensions ≤2).
     Preflight item 5 (README) needs either close-out or a waiver line here if PUBLISH
     is signed before it lands. -->

## Decision

**PUBLISH / DO NOT PUBLISH.** ____

Signed: ____, ____
