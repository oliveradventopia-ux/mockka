# Gate 2 sign-off · aif-c01

> Pre-filled by exam-examiner at S6 (2026-08-16) per methodology/06 §signoff-template.
> **Verdict columns, adjudication decisions, waivers, and the final decision are
> Oliver's — left blank.** Working paper: `derivation/gate2-checklist.md`.

- **Date:** ____ · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision (re-pinned 2026-08-19, after the cue-rework wave):** `questions.json` @ **`f0bf8bc`** — blob `31101a184a`, sha256 `d6f79f96c82359e9…`, committed 2026-08-19 on `fix/cue-rework-wave`. **Supersedes the S6 pin `1b1596c`**, which is no longer what ships. `selection.json` @ the S6 commit on `feat/scaffold` — untouched by the wave; item ids are stable, so form-a's composition is exactly as seated
- **Eval artifacts:** blind-solve @ `79026d8` (r2, 2026-08-16) · judge-scores @ `79026d8` (r2) · overlap-report @ `79026d8` (r1+r2) · codex-solve @ `79026d8` (advisory_skipped ×2 rounds) · round-1 preserved at `eval/*-r1.json`
- **Provenance caveat — read before signing:** every artifact above was produced against the **pre-wave** option text (`1b1596c`) and has **not** been regenerated. This exam additionally took a **key-letter permutation** in the wave, so `eval/blind-solve.json`'s recorded letters no longer align with the bank even for items whose text never changed — see §Post-S5 cue-rework wave for exactly what moved, what the prior judge scores still cover, and how the deep-read sample was extended (19 → **27 items**)

## Post-S5 cue-rework wave (2026-08-19) — the proportional re-open

Branch `fix/cue-rework-wave`, four commits on this package (`5009d28` → `412eea2` → `8057b2a` →
`f0bf8bc`), every one explicit-path to `content/aif-c01/questions.json`. Per
[methodology/06 §status](../../../methodology/06-provenance-publishing.md#status) rule 2, a change
to an option re-opens the gate **for the touched items**. This section makes that proportionality
auditable, so that a PUBLISH signature covers the revision that actually ships.

### Blast radius — measured, not taken on trust

Both revisions of `questions.json` were parsed, indexed by `id` and walked with a recursive
**field-level path diff** against the merge-base `1b33eb6`. The complete set of distinct path
shapes returned is:

| path shape | count | what it is |
|---|---|---|
| `options.<letter>` | 192 | 16 genuine option rewrites + the rest re-lettered by the permutation |
| `answer` | 46 | **key-letter permutation** (`f0bf8bc`, `tools/permute-keys.mjs` seed 1) — 40 single-choice + 6 multiple-response |
| `distractor_patterns.<letter>` | 185 | patterns moved with their options |
| `rationale.distractors.<letter>` | 185 | distractor rationales moved with their options |
| `matching_options` | 3 | the 3 scenario-matching items deranged |

**Read the `answer` row carefully — it is the one place this wave is not "option text only".** The
`answer` field moved on 46 of 67 items. What did **not** move is which option is *correct*: the
keyed option's **text** is unchanged on 59 of 67 items, and on the remaining 8 it was deliberately
elaborated (below). Verified byte-identical bank-wide: every `question` stem, every
`rationale.correct`, the `rationale.distractors` multiset, the `distractor_patterns` multiset, and
the item-id set (67 in, 67 out). So no key was re-decided; keys were re-lettered.

**16 option strings on 13 items** (10 with text edits + the 3 deranged SM items) — 8 key-side
(elaborated additively to lift keys off the shortest rank) and 8 distractor-side.

- **Seated on form-a (11):** 1.08, 2.04, 3.05, 3.07, 3.09, 4.02, 4.05, 4.06, 4.07, 4.08, 5.08
- **Reserve-only (2):** 3.11, 3.18
- **Key-side edits (8):** 3.05, 3.07, 3.11, 3.18, 4.02, 4.05, 4.06, 4.07

### What the prior S5 verdicts still cover, and what they do not

| Judge dimension | Standing after the wave |
|---|---|
| 1 · single defensible best answer | **Re-opened for the 13 touched items.** A distractor argued up is a plausibility upgrade and can become co-correct. |
| 2 · distractor plausibility | **Re-opened for the 13.** This is the dimension the wave deliberately moved. |
| 3 · concept alignment | **Stands.** Stems, `primary_concept` and `rationale.correct` are byte-identical. |
| 4 · rationale traceability | **Stands as text; flagged as pairing.** All 8 distractor rewrites left their `rationale.distractors` entry byte-identical, so each is refuted by an argument written against the *previous* string. All 8 were re-read at this gate and still land; no validator check covers this surface. |
| 5 · difficulty pitch | **Stands; S5b below is the re-measured instrument.** |
| 6 · scenario realism | **Stands.** No scenario text moved. |

`eval/blind-solve.json` and `eval/judge-scores.json` were **not** regenerated — re-running the blind
solve is a fresh S5 round, which `methodology/00 §pipeline` triggers on *bounce rework*, and a
regenerated artifact would silently replace the round-2 record this sheet cites. **Consequence
specific to this exam:** because of the permutation, the letters recorded in `eval/blind-solve.json`
mismatch the current bank on the large majority of single-choice items. The file remains a valid
record of the round-2 *judgment* (67/67, zero adjudications) against `1b1596c`; it is not a
letter-by-letter map of the shipping bank, and Gate 2 should not read it as one.

### S5b cue-only solve, re-measured post-wave

Instrument: `node tools/exploit-scan.mjs aif-c01` (form scope) plus the same tool against a
selection-free copy of the package (bank scope). `random` is the format-mix expected guess score,
stricter than the rubric's 25% worked-example simplification. Full detail, per-cue rates and the
interior-rank / stem-echo residuals are in `derivation/eval-report.md` §S5b.

| scope | n | blind (pre-wave → post-wave) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 67 | 23.88% → **23.88%** (16/67) | ≤ 30.14% (random 22.32%) | **0.6059** | ≥ 0.5217 (k_req@random 0.6138) | **PASS** |
| form-a | 50 | 24.00% → **22.00%** (11/50) | ≤ 28.91% (random 21.41%) | **0.6154** | ≥ 0.5255 (k_req@random 0.6183) | **PASS** |

Unlike `az-900`, the **full** key length-rank distribution improved rather than shifting one rank
inwards: best single-rank strategy fell 40.4% → 29.8% on bank and 40.0% → 30.0% on form. The one
statistic that moved the wrong way is the uninstrumented **stem-echo** cue (key is the strict
maximum stem-overlap option): 40.0% → **42.5%** bank, 32.1% → **35.7%** form, against 25% chance —
now the strongest surface cue in this bank. That is a direct consequence of the fix mechanism
(purpose clauses written from the stem's own words), and it is a residual for Oliver, not an item
bounce.

### Highest-risk reworked items — what to judge

Named-entity parity fixes are **plausibility upgrades**: naming a real product into a thin
distractor can convert a falsifiable option into a workable one.

| Item | Seated? | The edit | What to judge |
|---|---|---|---|
| 4.06 D | yes | "Enabling drift monitoring…" → "Enabling **Amazon SageMaker Model Monitor** on the production model, since a bias problem of this kind would register as distribution drift" | Real SageMaker Model Monitor + Clarify *does* do bias drift. D is saved only by its own "distribution drift" premise. Judge whether the named product makes D defensible enough to be co-correct. |
| 3.18 A | **no** (reserve) | "Re-index the document store…" → "Re-index the **Amazon OpenSearch Service** document store…" | The stem never establishes that an OpenSearch document store exists. This creates a scenario-fiction elimination route: a candidate can rule A out for naming a component the scenario does not have. Rejecting a reserve item is free. |
| 3.05 C | yes | "Whichever store the chosen embedding model dictates" → "…— **Amazon OpenSearch Service** for one model, **Amazon Aurora** for another — since…" | The key was elaborated in the same item ("selected from the AWS vector-store options on operational grounds so that the team keeps the database it already runs"). Check the key's appended purpose clause is not itself the giveaway — this is the stem-echo mechanism above. |

All new entities are grounded in `derivation/source-aif-blueprint.md`; the inventory's C-055 = A2I /
C-057 = Clarify no-cross rule is respected. Two standing content notes from the wave verification
remain open and are in the sample: 4.06 D (above) and 3.18 A (above).

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | Examiner finding: PASS (checklist §1) |
| Provenance chain (spot-check: 1.09, 2.11, 5.04 + your own picks) | | Examiner finding: PASS (checklist §2) |
| Validator | | Examiner finding: PASS — `pnpm validate aif-c01` → **34 checks, 0 errors, 0 warnings** on the re-pinned tree (`f0bf8bc`). *Count corrected 2026-08-19: this row read "29 checks"; five cue checks landed after S6 (`key-length-rank-share`, `rider-balance`, `named-entity-parity`, `option-pair-similarity`, `syllabus-rule-form-coverage` family) and every cue check is silent here* |
| Eval thresholds | | Examiner finding: PASS **on the pre-wave scores** — zero ≤2, zero open bounces, zero open adjudications. **S5b re-measured on the shipping revision: PASS on both ceilings, both scopes** (bank blind 23.88% ≤ 30.14%, k_req 0.6059 ≥ 0.5217; form-a 22.00% ≤ 28.91%, k_req 0.6154 ≥ 0.5255). Residual for your ruling: the uninstrumented **stem-echo** cue rose to 42.5% bank / 35.7% form (chance 25%) — see §Post-S5 cue-rework wave |
| Deep-read sample — **extended 19 → 27 items** for the cue-rework wave (all SM + 10 random + all auto-flagged + **every reworked item**) | | **S6 core (19):** SM 1.08, 2.04, 3.09 · random 1.01, 1.09, 2.01, 2.08, 2.15, 3.05, 3.12, 3.19, 4.06, 5.03 · flagged 2.05, 2.12, 4.04 · notes 2.03, 3.08, 4.09. **Added by the wave (8):** seated 3.07, 4.02, 4.05, 4.07, 4.08, 5.08 · reserve-only 3.11, 3.18. (1.08, 2.04, 3.05, 3.09, 4.06 were reworked *and* already sampled.) **All 11 reworked items seated on form-a are now in the sample**; the highest-risk named-entity fixes — 4.06, 3.18, 3.05 — are called out with what to judge in §Post-S5 cue-rework wave. No cross-model column — Codex unauthenticated both rounds |
| README statements | | Examiner finding: **CLOSED 2026-08-19** — `content/aif-c01/README.md` now exists (landed on `main` at `f5a877f`) and carries all five required statements per methodology/06 §readme-template. *This row previously read OPEN; the file landed after S6.* |
| Licences in/out | | Examiner finding: PASS — repo LICENSE (MIT) + LICENSE-CONTENT (CC BY 4.0); no licensed_import items inbound |
| format_coverage disclosure | | Examiner finding: PASS — ordering/matching approximations + 65-in-90 pacing note disclosed in manifest |

## Adjudications closed at this gate

<!-- Each 3-flag and content note: item id → decision (keep / rekey / waiver / replace) → one-line reason.
     Open queue from S5: EMPTY (zero blind-solve misses in round 2).
     3-flags requiring a decision: 2.05 (dim2=3) · 2.12 (dim2=3, dim5=3) · 4.04 (dim2=3).
     Content notes (dim1=4, keep/adjust): 2.03 · 3.08 · 4.09 (rationale wording) · 2.04 s5 · 3.09 s4. -->

| Item | Decision | Reason |
|---|---|---|
| 2.05 | | |
| 2.12 | | |
| 4.04 | | |
| 2.03 | | |
| 3.08 | | |
| 4.09 | | |
| 2.04 (s5 note) | | |
| 3.09 (s4 note) | | |
| 4.06 (wave) | | Named-entity upgrade — SageMaker Model Monitor really does bias drift; D survives on its own "distribution drift" premise |
| 3.18 (wave, reserve) | | Named-entity upgrade — A names an OpenSearch document store the stem never establishes (scenario-fiction elimination route) |
| 3.05 (wave) | | Key elaborated with a stem-derived purpose clause; check the clause is not the giveaway |
| Stem-echo cue (whole bank) | | Uninstrumented cue rose to 42.5% bank / 35.7% form (chance 25%) — accept as instrument gap, or hold for a countermeasure |
| Key-letter permutation (whole bank) | | `eval/blind-solve.json` letters no longer map to the shipping bank; accept the deep-read as the control, or authorise a re-solve |

## Waivers

<!-- Any item shipped below the normal bar, with the explicit reason — or "none".
     Examiner expectation: none required by the eval; the README preflight item needs
     either close-out or a waiver line here if PUBLISH is signed before it lands. -->

## Decision

**PUBLISH / DO NOT PUBLISH.** ____

Signed: ____, ____
