# Gate 2 sign-off · ccao-f

> Prepared by exam-examiner; **signed by Oliver Lau on 2026-08-20**. Verdict columns,
> adjudication decisions, waivers and the decision below are recorded, not blank.
> Working paper: `derivation/gate2-checklist.md` §Gate 2 final pass.

- **Date:** 2026-08-20 · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision (re-pinned 2026-08-20 — the shipping revision):** `questions.json` @ **`dd5f1f6`** — blob `6d8581ecca`, sha256 `ee0230b0454c22a3…`, committed 2026-08-19 on `fix/cue-rework-wave`. `selection.json` is unchanged and item ids are stable, so form-a's composition is exactly as seated. Supersedes every earlier pin in this file.
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

### S5b cue-only solve, re-measured post-wave — **SUPERSEDED 2026-08-20**

> The table in this subsection was produced before `a8c7f4e` put interior option
> length ranks into the committed strategy set and before `cda74c8` made the tool
> compute the publication ceiling. It is kept as the record of what was measured
> on 2026-08-19. **The figures that govern this sign-off are in §Gate 2 final
> pass above.**

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

## Gate 2 final pass — 2026-08-20

This sign-off is recorded against a re-pinned revision and a **corrected acceptance standard**.
Both are stated here so a reader can see what a PUBLISH signature covers.

- **Re-pinned.** `questions.json` @ **`dd5f1f6`** — blob `6d8581ecca`, sha256 `ee0230b0454c22a3…`, committed
  2026-08-19 on `fix/cue-rework-wave`. `selection.json` unchanged; item ids are stable, so form-a's
  composition is exactly as seated.
- **The S5b verdict is re-stated, not carried over.** `tools/exploit-scan.mjs` had been reporting
  `ok` against the **pass-mark floor** rather than the publication ceiling in
  [methodology/05 §cue-only-solve](../../../methodology/05-eval-rubric.md#cue-only-solve), and its
  committed strategy set tested only the extreme option length ranks. Both were corrected
  (`cda74c8`, `a8c7f4e`). The **bar is unchanged** — the ceilings computed by hand in the earlier
  sheets were already the right ones — but the machine now enforces it and the zero-knowledge
  attacker is stronger, so the blind numbers move. Full arithmetic and the audit note are in
  `derivation/eval-report.md` §s5b-final and `derivation/gate2-checklist.md` §Gate 2 final pass.
  **Result on the shipping revision: bank 27.16% ≤ 31.50% · form-a 26.67% ≤ 30.71% — PASS on both
  ceilings, both scopes.**
- **Validator on the pinned tree, at `published`:** `38` checks, `0` errors, `34` warnings.
- **Deep-read sample:** **37 items, unchanged** — no content pass landed after the 2026-08-19 re-pin, so there was nothing new to seat.
- **README preflight row closed.** `content/ccao-f/README.md` exists and carries every section
  methodology/06 §readme-template requires. This row read OPEN in every previous version of this
  sheet; it is closed by the file, not by a waiver.
- **What Oliver's instruction was, exactly.** Publication was approved on 2026-08-20 with
  "sign off and go ahead", given after reviewing the content UAT at
  `UAT/HUMAN-UAT-2026-08-19-new-exams.md`. That run sheet's Findings table was returned **empty**
  and its checkboxes are unticked; the instruction is a blanket approval of the package as
  evidenced, not a set of item-by-item rulings. The decision cells below are filled on that basis
  and say so — every one records "published unchanged", which is what a blanket go-ahead means,
  rather than a ruling attributed to Oliver that he did not articulate.

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | **PASS** | Examiner finding: PASS (checklist §1) — 4 registered sources, all with licence/permission basis; 5 dump vendors screened out; `anthropic-prep-course` registered pending extraction with nothing distilled |
| Provenance chain (spot-check: C-004/`d1-q04`, C-027/`d2-q27`, C-051/`d4-q51`, C-065/`d6-q65` + your own picks) | **PASS** | Examiner finding: PASS (checklist §2) — machine chain green on this tree; 0 `licensed_import` items |
| Validator | **PASS** | Examiner finding: PASS — `pnpm validate ccao-f` → **37 checks, 0 errors, 34 warnings** on the re-pinned tree (`dd5f1f6`). *Count corrected 2026-08-19: this row read "33 checks"; four cue checks landed after S6 and all four are silent here.* All 34 warnings are still the single `concept-convergence` family-convention class, enumerated and dispositioned in checklist §3 — **RE-RUN 2026-08-20 on the shipping revision `dd5f1f6`: **38** checks, 0 errors, 34 warnings.** Any tree or count named earlier in this row refers to a superseded pin. *(Count is 38, not 37: `publication-preflight` is `when: status === 'published'`, so it runs only after the flip — the pre-flip run of the same tree reported 37.)* |
| Eval thresholds | **PASS** | Examiner finding: PASS **on the pre-wave scores** — 81/81 blind (r2), zero dimensions ≤2, `bounces: []`, zero open adjudications, bounce cap respected. **S5b re-measured on the shipping revision: PASS on both ceilings, both scopes** (bank blind 24.69% ≤ 31.50%, k_req 0.6282 ≥ 0.5396; form-a 25.00% ≤ 30.71%, k_req 0.6267 ≥ 0.5419), with the cleanest key length-rank distribution of the six reworked exams — **RESTATED 2026-08-20.** The figures above (24.69% bank / 25.00% form) came from the weaker pre-`a8c7f4e` strategy set. The bank is byte-identical, the bar is unchanged, and the corrected instrument returns: **bank 27.16% ≤ 31.50% · form-a 26.67% ≤ 30.71% — PASS on both ceilings, both scopes.** See §Gate 2 final pass above and `derivation/eval-report.md` §s5b-final. |
| Deep-read sample — **extended 22 → 37 items** for the cue-rework wave (0 SM + 10 random + all auto-flagged + **every reworked item**) | **PASS** | **S6 core (22).** Flagged & seated: `d1-q01, d1-q02, d1-q03, d1-q04, d2-q15, d2-q25, d2-q27, d3-q29, d3-q32, d3-q34, d3-q35, d3-q36, d4-q50, d6-q65, d6-q73` · random: `d1-q09, d2-q18, d2-q26, d4-q42, d5-q56, d6-q67, d7-q74`. **Added by the wave (15):** seated `d1-q07, d1-q10, d2-q12, d3-q31, d4-q45, d4-q48, d4-q49, d4-q51, d5-q53, d5-q57, d5-q58, d6-q62, d7-q77, d7-q80` · reserve-only `d6-q66`. (`d1-q01, d2-q18, d2-q25, d2-q26, d2-q27, d3-q35, d3-q36, d4-q42` were reworked *and* already sampled.) **All 22 reworked items seated on form-a are now in the sample.** This wave introduced **zero new capitalised tokens**, so there is no named-entity risk tier here; the risk to judge is the overclaim-intensifier class — `d1-q10` A, `d4-q48` B, `d7-q77` C — and the closest co-correctness call, `d2-q12` B. **No cross-model column — Codex unauthenticated in both rounds** Unchanged at 37 at the 2026-08-20 final pass — no content pass landed after the re-pin. |
| README statements | **PASS** | Examiner finding: **OPEN** — `content/ccao-f/README.md` does not exist (owner: exam-author). Requires close-out or an explicit waiver below before PUBLISH — **CLOSED 2026-08-20.** `content/ccao-f/README.md` now exists (committed on `fix/cue-rework-wave`) and carries every section methodology/06 §readme-template requires: provenance and independence, prior art, NDA statement, non-affiliation with the named trademark holder, and the outbound licence pair (content CC BY 4.0 / code MIT). No `licensed_import` items exist in this bank, so the template's Licensed-content section is correctly absent. **Closed by the file, not waived** — any "OPEN" text earlier in this row predates it. |
| Licences in/out | **PASS** | Examiner finding: PASS — repo `LICENSE` (MIT) + `LICENSE-CONTENT` (CC BY 4.0) outbound; no `licensed_import` items inbound. Beecham MIT repo is classification-only, no text reused |
| format_coverage disclosure | **PASS** | Examiner finding: PASS — real exam is MC+MR only, so this is a **subset** disclosure (scenario_matching deliberately 0); MR shape/share and the 72% threshold both disclosed as house decisions / translation |

## Adjudications closed at this gate

<!-- Each 3-flag, content note, and open decision: item id → decision (keep / rekey / waiver / replace) → one-line reason.
     Open queue from S5: EMPTY (zero blind-solve misses in either round).
     Round-2 dim5=3 flags seated on form-a: d1-q01 · d1-q02 · d1-q03 · d2-q15 · d2-q25 · d3-q32 · d3-q34 · d4-q50 · d6-q65 · d6-q73.
     Round-1 flags on text round 2 did not change, seated: d1-q04 · d2-q27 · d3-q29 · d3-q35 · d3-q36.
     Substitutes are named per item in derivation/gate2-checklist.md; the four MR flags have none (MR stock = quota). -->

| Item | Decision | Reason |
|---|---|---|
| d1-q01 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d1-q02 (MR — no substitute) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d1-q03 (rule 2.02 singleton) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d1-q04 (vs reserved d1-q06) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d2-q15 (vs reserved d2-q16) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d2-q25 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d2-q27 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d3-q29 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d3-q32 (MR — no substitute) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d3-q34 (reworked at r1) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d3-q35 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d3-q36 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d4-q50 (MR — no substitute) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d6-q65 (reworked at r1) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| d6-q73 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| `d2-q12` (wave) | keep | Closest co-correctness call in the wave — B now borrows the key's depth-varying framing ("save the full reference check for the funding reports") |
| `d1-q10` (wave) | keep | Parity edit bought length with an intensifier on an already-wrong claim ("accepted best practice **everywhere**") — nudges D12/D14/E02 toward surface-eliminable |
| `d4-q48` (wave) | keep | Same class ("**clearly**"); this item's key was also retexted |
| `d7-q77` (wave) | keep | Same class ("**by far** the largest lever") |
| `d2-q27` (wave) | keep | Key retexted; its seated rider is a tautology ("Treat variation as inherent, since it is by design") and the rewrite dropped "the letters must meet" from the bound |
| Rider inversion (form scope) | accept — residual | `rider-marks-key` is 3/9 rider-carrying options = 33.3% on form (ceiling 45%, n = 9): direction has inverted from "rider never marks the key". Accept as noise, or re-balance |
| `named-entity-parity` blind spot | accept — instrument gap | The check is one-sided (warns only above 40%); ccao-f sits at 16.7% form / 25.0% bank — an *inverted* cue the check cannot see. Record as instrument blind spot, not a clean pass |

## Open decisions carried to this gate

<!-- Gate 1 left four decisions resolved-by-default "unless amended at Gate 2"; S5/S6 add six.
     Full statements in derivation/gate2-checklist.md §"Open decisions for Oliver at this gate". -->

| # | Decision | Ruling | Note |
|---|---|---|---|
| 1 | Package slug renamed `ccas` → `ccao-f` (against the Gate 1 recommendation) | in force | The package ships as `ccao-f`; publishing enacts the rename. Nothing further to decide. |
| 2 | Ratify `pass_threshold_pct: 72` so the manifest `$comment` can drop "PENDING" | ratified | 72 is the threshold the published exam serves, so the manifest `$comment` may drop its "PENDING" marker. |
| 3 | Authorize a prep-course top-up distillation (S2b)? | carried open — not settled here | A source-coverage improvement for a future round. Publication neither authorises nor declines it. |
| 4 | Ratify the MR house shape (9/60, 5 options, choose 2) | ratified | 9 of 60, five options, choose two — the shape that ships. |
| 5 | README (preflight item 5) — land before PUBLISH, or waive | closed | `content/ccao-f/README.md` landed; preflight item 5 is closed by the file, not waived. |
| 6 | Clean-room finding F-3 + the unbuilt ≥5-word quoted-span validator ratchet | carried open — not settled here | F-3 is derivation-doc hygiene (Artefact A quotes vendor stems as craft evidence); no vendor text reaches the bank. The ≥5-word quoted-span ratchet remains unbuilt. |
| 7 | Adopt round 2's published dimension-5 scoring rule into `methodology/05`? | carried open — not settled here | A change to `methodology/05`, out of scope for an exam sign-off. |
| 8 | `d7-q75` rebuild (dim2 = 3, out-of-scope temperature knob) — reserved off form-a | keep, reserved | The bank's weakest item stays in the bank and off form-a. No rebuild ordered; it is not served. |
| 9 | Key-is-longest lean 49% vs 25% chance, magnitude nil — watch item only | accept — superseded by the corrected instrument | On the shipping revision `key-longest-rank` is 27.9% bank / 25.0% form against 25% chance, and the combined blind score is inside the ceiling on both scopes. |
| 10 | `ccar-p` latent-defect escalation (separate from this sign-off) | out of scope | `ccar-p` was published separately on 2026-08-19; it is not part of this sign-off. |

## Waivers

**None.** Zero dimensions ≤2, zero open bounces, zero blind-solve misses in either round, every preflight row PASS. The README preflight item is **closed by the file**, not waived.

Accepted-not-waived residuals: the 34 Gate-1-ratified `concept-convergence` warnings; clean-room finding **F-3** (the Artefact A doc quotes vendor stems as craft evidence — no vendor text reaches the bank); `d7-q75`, the bank's weakest item, which is **reserved off form-a** and therefore ships in the bank but is not served; and the absent cross-model column.

## Decision

**PUBLISH.** Every preflight row is PASS on the re-pinned revision `dd5f1f6`; the S5b cue-only ceiling holds on both the bank and the served form under the corrected standard; the README preflight row is closed by the file; and the content UAT was reviewed with no findings logged.

Signed: Oliver Lau, 2026-08-20 — instruction of record: "sign off and go ahead", given after reviewing `UAT/HUMAN-UAT-2026-08-19-new-exams.md`.
