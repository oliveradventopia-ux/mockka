# Gate 2 sign-off · ccao-f

> Pre-filled by exam-examiner at S6 (2026-08-18) per methodology/06 §signoff-template.
> **Verdict columns, adjudication decisions, waivers, and the final decision are
> Oliver's — left blank.** Working paper: `derivation/gate2-checklist.md`.

- **Date:** ____ · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision (re-pinned 2026-08-19, after the cue-rework wave):** `questions.json` @ **`dd5f1f6`** — blob `6d8581ecca`, sha256 `ee0230b0454c22a3…`, committed 2026-08-19 on `fix/cue-rework-wave`. **Supersedes the S6 pin `d7cb9e4` / sha256 `17bb2e36bee9…`**, which is no longer what ships. `selection.json` @ the S6 commit on `feat/exam-factory` — untouched by the wave; item ids are stable, so form-a's composition is exactly as seated
- **Provenance caveat — read before signing:** the eval artifacts below were produced against the **pre-wave** option text (`d7cb9e4`) and have **not** been regenerated. See §Post-S5 cue-rework wave for exactly what moved, what the prior judge scores still cover, the re-measured S5b numbers, and how the deep-read sample was extended (22 → **37 items**)
- **Eval artifacts:** blind-solve @ `301c065` (r2, 2026-08-18, sha256 `87eea8968d50…`) · judge-scores @ `301c065` (r2, sha256 `0c1707018243…`) · overlap-report @ `301c065` (r2, sha256 `faaa62547ead…`) · codex-solve @ `301c065` (`advisory_skipped`, 3 attempts across 2 rounds, sha256 `2c5e736932a8…`) · round-1 preserved at `eval/*-r1.json` / `eval/overlap-report-r1.md`

## Post-S5 cue-rework wave (2026-08-19) — the proportional re-open

Branch `fix/cue-rework-wave`, nine commits on this package (`a4ec76a` → … → `dd5f1f6`), every one
explicit-path to `content/ccao-f/questions.json`. Per
[methodology/06 §status](../../../methodology/06-provenance-publishing.md#status) rule 2, a change
to an option re-opens the gate **for the touched items**. This section makes that proportionality
auditable, so that a PUBLISH signature covers the revision that actually ships.

### Blast radius — measured, not taken on trust

Both revisions of `questions.json` were parsed, indexed by `id` and walked with a recursive
**field-level path diff** against the merge-base `1b33eb6`. The complete set of distinct path
shapes returned is:

| path shape | count |
|---|---|
| `options.<letter>` | 40 |

Nothing else — this is the cleanest wave of the six. Verified byte-identical bank-wide across all
81 items: every `question` stem, every `answer` (**no key letter moved**), every
`rationale.correct`, the `rationale.distractors` multiset, the `distractor_patterns` multiset, and
the item-id set (81 in, 81 out). The top-level non-`questions` object is byte-identical too.

**40 option strings on 23 items** — 4 key-side (`d1-q01` A, `d2-q27` A, `d4-q48` C, `d7-q80` D;
all four still reach every noun in their `rationale.correct`) and 36 distractor-side.

- **Seated on form-a (22):** `d1-q01`, `d1-q07`, `d1-q10`, `d2-q12`, `d2-q18`, `d2-q25`, `d2-q26`,
  `d2-q27`, `d3-q31`, `d3-q35`, `d3-q36`, `d4-q42`, `d4-q45`, `d4-q48`, `d4-q49`, `d4-q51`,
  `d5-q53`, `d5-q57`, `d5-q58`, `d6-q62`, `d7-q77`, `d7-q80`
- **Reserve-only (1):** `d6-q66`

**Zero new capitalised tokens were introduced by any edit** — the "invented product" risk is
structurally absent here, not merely unobserved, and there is no named-entity risk tier to judge.

### What the prior S5 verdicts still cover, and what they do not

| Judge dimension | Standing after the wave |
|---|---|
| 1 · single defensible best answer | **Re-opened for the 23 touched items.** |
| 2 · distractor plausibility | **Re-opened for the 23** — the dimension the wave deliberately moved. |
| 3 · concept alignment | **Stands.** Stems, `primary_concept` and `rationale.correct` byte-identical. |
| 4 · rationale traceability | **Stands as text; flagged as pairing.** All 36 distractor rewrites left their `rationale.distractors` entry byte-identical — every one is refuted by an argument written against the *previous* string. All 36 pairs were re-read at this gate and still land; no validator check covers this surface. |
| 5 · difficulty pitch | **Stands; S5b below is the re-measured instrument.** |
| 6 · scenario realism | **Stands.** No scenario text moved. |

`eval/blind-solve.json` and `eval/judge-scores.json` were **not** regenerated — re-running the blind
solve is a fresh S5 round, which `methodology/00 §pipeline` triggers on *bounce rework*, and a
regenerated artifact would silently replace the round-2 record this sheet cites. Because no key
letter moved, the recorded `chosen`/`keyed` letters remain valid; what changed underneath 40 of
those letters is the wording. The extended deep-read is the compensating control.

### S5b cue-only solve, re-measured post-wave

Instrument: `node tools/exploit-scan.mjs ccao-f` (form scope) plus the same tool against a
selection-free copy of the package (bank scope). Full detail and per-cue rates are in
`derivation/eval-report.md` §S5b.

| scope | n | blind (pre-wave → post-wave) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 81 | 40.74% → **24.69%** (20/81) | ≤ 31.50% (random 23.33%) | **0.6282** | ≥ 0.5396 (k_req@random 0.6348) | **PASS** |
| form-a | 60 | 43.33% → **25.00%** (15/60) | ≤ 30.71% (random 22.75%) | **0.6267** | ≥ 0.5419 (k_req@random 0.6375) | **PASS** |

**The best-behaved of the six on the mirror cues.** The full key length-rank distribution is close
to uniform (form-a `{1:12, 2:15, 3:12, 4:12}`, best single-rank strategy 29.4%), so no interior-rank
cue was manufactured — this is the failure mode `az-900` hit and `ccao-f` avoided. The
uninstrumented stem-echo cue **fell** (33.3% → 29.1% bank, 38.5% → 32.4% form), and the
absolute-quantifier inverse cue held flat (27.5% form / 27.4% bank vs 28.2/28.3 pre-wave), so the
parity edits did not evacuate absolutes into distractors.

### What to judge in the reworked items

There are no named entities to audit. The residual risk class is **overclaim by intensifier** —
three parity edits bought length by strengthening an already-wrong claim, which nudges a
D12/D14/E02 distractor toward surface-eliminable (dimension-5 criterion (a)):

| Item | The edit | What to judge |
|---|---|---|
| `d1-q10` A | "…accepted best practice **everywhere**" | Does the intensifier make A eliminable without engaging the scenario? |
| `d7-q77` C | "…**by far** the largest lever" | as above |
| `d4-q48` B | "…**clearly**…" | as above; this item's key was also retexted |
| `d2-q12` B | "save the **full reference check** for the funding reports" | **Closest co-correctness call in the wave.** B borrows the key's depth-varying framing. It still fails because B passes routine drafts on how they *read* (no reference check at all) — confirm that holds. |
| `d2-q27` A (key) | rider is a tautology ("Treat variation as inherent, since it is by design"); the rewrite dropped "the letters must meet" from the bound | Defensibility is intact but this is the weakest prose of the four key rewrites. |

Max intra-item option-pair Jaccard on the shipping revision is 36.8% at `d4-q51` B/D — a
**pre-existing and deliberate** parallel-polarity pair, untouched by the wave, comfortably under
the 60% warn bound.

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | Examiner finding: PASS (checklist §1) — 4 registered sources, all with licence/permission basis; 5 dump vendors screened out; `anthropic-prep-course` registered pending extraction with nothing distilled |
| Provenance chain (spot-check: C-004/`d1-q04`, C-027/`d2-q27`, C-051/`d4-q51`, C-065/`d6-q65` + your own picks) | | Examiner finding: PASS (checklist §2) — machine chain green on this tree; 0 `licensed_import` items |
| Validator | | Examiner finding: PASS — `pnpm validate ccao-f` → **37 checks, 0 errors, 34 warnings** on the re-pinned tree (`dd5f1f6`). *Count corrected 2026-08-19: this row read "33 checks"; four cue checks landed after S6 and all four are silent here.* All 34 warnings are still the single `concept-convergence` family-convention class, enumerated and dispositioned in checklist §3 |
| Eval thresholds | | Examiner finding: PASS **on the pre-wave scores** — 81/81 blind (r2), zero dimensions ≤2, `bounces: []`, zero open adjudications, bounce cap respected. **S5b re-measured on the shipping revision: PASS on both ceilings, both scopes** (bank blind 24.69% ≤ 31.50%, k_req 0.6282 ≥ 0.5396; form-a 25.00% ≤ 30.71%, k_req 0.6267 ≥ 0.5419), with the cleanest key length-rank distribution of the six reworked exams |
| Deep-read sample — **extended 22 → 37 items** for the cue-rework wave (0 SM + 10 random + all auto-flagged + **every reworked item**) | | **S6 core (22).** Flagged & seated: `d1-q01, d1-q02, d1-q03, d1-q04, d2-q15, d2-q25, d2-q27, d3-q29, d3-q32, d3-q34, d3-q35, d3-q36, d4-q50, d6-q65, d6-q73` · random: `d1-q09, d2-q18, d2-q26, d4-q42, d5-q56, d6-q67, d7-q74`. **Added by the wave (15):** seated `d1-q07, d1-q10, d2-q12, d3-q31, d4-q45, d4-q48, d4-q49, d4-q51, d5-q53, d5-q57, d5-q58, d6-q62, d7-q77, d7-q80` · reserve-only `d6-q66`. (`d1-q01, d2-q18, d2-q25, d2-q26, d2-q27, d3-q35, d3-q36, d4-q42` were reworked *and* already sampled.) **All 22 reworked items seated on form-a are now in the sample.** This wave introduced **zero new capitalised tokens**, so there is no named-entity risk tier here; the risk to judge is the overclaim-intensifier class — `d1-q10` A, `d4-q48` B, `d7-q77` C — and the closest co-correctness call, `d2-q12` B. **No cross-model column — Codex unauthenticated in both rounds** |
| README statements | | Examiner finding: **OPEN** — `content/ccao-f/README.md` does not exist (owner: exam-author). Requires close-out or an explicit waiver below before PUBLISH |
| Licences in/out | | Examiner finding: PASS — repo `LICENSE` (MIT) + `LICENSE-CONTENT` (CC BY 4.0) outbound; no `licensed_import` items inbound. Beecham MIT repo is classification-only, no text reused |
| format_coverage disclosure | | Examiner finding: PASS — real exam is MC+MR only, so this is a **subset** disclosure (scenario_matching deliberately 0); MR shape/share and the 72% threshold both disclosed as house decisions / translation |

## Adjudications closed at this gate

<!-- Each 3-flag, content note, and open decision: item id → decision (keep / rekey / waiver / replace) → one-line reason.
     Open queue from S5: EMPTY (zero blind-solve misses in either round).
     Round-2 dim5=3 flags seated on form-a: d1-q01 · d1-q02 · d1-q03 · d2-q15 · d2-q25 · d3-q32 · d3-q34 · d4-q50 · d6-q65 · d6-q73.
     Round-1 flags on text round 2 did not change, seated: d1-q04 · d2-q27 · d3-q29 · d3-q35 · d3-q36.
     Substitutes are named per item in derivation/gate2-checklist.md; the four MR flags have none (MR stock = quota). -->

| Item | Decision | Reason |
|---|---|---|
| d1-q01 | | |
| d1-q02 (MR — no substitute) | | |
| d1-q03 (rule 2.02 singleton) | | |
| d1-q04 (vs reserved d1-q06) | | |
| d2-q15 (vs reserved d2-q16) | | |
| d2-q25 | | |
| d2-q27 | | |
| d3-q29 | | |
| d3-q32 (MR — no substitute) | | |
| d3-q34 (reworked at r1) | | |
| d3-q35 | | |
| d3-q36 | | |
| d4-q50 (MR — no substitute) | | |
| d6-q65 (reworked at r1) | | |
| d6-q73 | | |
| `d2-q12` (wave) | | Closest co-correctness call in the wave — B now borrows the key's depth-varying framing ("save the full reference check for the funding reports") |
| `d1-q10` (wave) | | Parity edit bought length with an intensifier on an already-wrong claim ("accepted best practice **everywhere**") — nudges D12/D14/E02 toward surface-eliminable |
| `d4-q48` (wave) | | Same class ("**clearly**"); this item's key was also retexted |
| `d7-q77` (wave) | | Same class ("**by far** the largest lever") |
| `d2-q27` (wave) | | Key retexted; its seated rider is a tautology ("Treat variation as inherent, since it is by design") and the rewrite dropped "the letters must meet" from the bound |
| Rider inversion (form scope) | | `rider-marks-key` is 3/9 rider-carrying options = 33.3% on form (ceiling 45%, n = 9): direction has inverted from "rider never marks the key". Accept as noise, or re-balance |
| `named-entity-parity` blind spot | | The check is one-sided (warns only above 40%); ccao-f sits at 16.7% form / 25.0% bank — an *inverted* cue the check cannot see. Record as instrument blind spot, not a clean pass |

## Open decisions carried to this gate

<!-- Gate 1 left four decisions resolved-by-default "unless amended at Gate 2"; S5/S6 add six.
     Full statements in derivation/gate2-checklist.md §"Open decisions for Oliver at this gate". -->

| # | Decision | Ruling | Note |
|---|---|---|---|
| 1 | Package slug renamed `ccas` → `ccao-f` (against the Gate 1 recommendation) | | |
| 2 | Ratify `pass_threshold_pct: 72` so the manifest `$comment` can drop "PENDING" | | |
| 3 | Authorize a prep-course top-up distillation (S2b)? | | |
| 4 | Ratify the MR house shape (9/60, 5 options, choose 2) | | |
| 5 | README (preflight item 5) — land before PUBLISH, or waive | | |
| 6 | Clean-room finding F-3 + the unbuilt ≥5-word quoted-span validator ratchet | | |
| 7 | Adopt round 2's published dimension-5 scoring rule into `methodology/05`? | | |
| 8 | `d7-q75` rebuild (dim2 = 3, out-of-scope temperature knob) — reserved off form-a | | |
| 9 | Key-is-longest lean 49% vs 25% chance, magnitude nil — watch item only | | |
| 10 | `ccar-p` latent-defect escalation (separate from this sign-off) | | |

## Waivers

<!-- Any item shipped below the normal bar, with the explicit reason — or "none".
     Examiner expectation: none required by the eval (zero dimensions ≤2, zero open bounces).
     The README preflight item needs either close-out or a waiver line here if PUBLISH is
     signed before it lands — methodology/06: "a sign-off with any preflight verdict at fail
     and no covering waiver is not a sign-off." -->

## Decision

**PUBLISH / DO NOT PUBLISH.** ____

Signed: ____, ____
