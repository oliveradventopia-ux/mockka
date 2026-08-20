# Gate 2 checklist — ai-901

Assembled by exam-examiner at S6 (`/exam-publish` step 3), 2026-08-18, on the round-2
bank revision (author rework `e2434ad`; S5 round 2 closed at `2df3bb4`, artifacts in
`eval/`). `manifest.status` is now **`in_review`** — the flip to `published` is Oliver's
alone, recorded first in `derivation/signoff.md`. Verdict columns in the sign-off are
left for Oliver; this checklist pre-fills the evidence.

> **Re-pinned 2026-08-19 after the post-S6 cue-rework wave.** The bank under review is now
> `content/ai-901/questions.json` @ **`b3851b9`** (blob `717f441939`, sha256
> `d8f6d2ce0a891e27…`) on `fix/cue-rework-wave` — **not** `e2434ad`, which this checklist
> originally pinned. `selection.json` @ `12378b6` is unchanged (item ids are stable).
> The eval artifacts in `eval/` still date from `2df3bb4` and were produced against the
> **pre-wave option text**; §Post-S5 cue-rework wave below states what moved, what the prior
> judge scores still cover, and how the deep-read sample was extended (22 → **33 items**) so
> that every reworked item is read at this gate. Validator count also moved 30 → **34 checks**
> (four cue checks landed after S6). `manifest.status` is still `in_review` — nothing was
> flipped.

## The 7 preflight checks (methodology/06 §preflight), with evidence

| # | Check | Examiner finding | Evidence |
|---|---|---|---|
| 1 | Source registry complete, with licence basis | **PASS** | `derivation/sources.md` §Registered sources: 3 entries (`ms-ai901-blueprint` public_blueprint, `ms-ai901-curriculum` public_syllabus, `akashp-ai901-simulator` public_practice_set), each carrying type, author, URL, `date_accessed` 2026-08-17, licence/permission basis and usage constraint. Excluded sources screened with evidence recorded (§Excluded sources). Machine checks `provenance-sources`, `concept-source-registry`, `source-derivation-link` all green |
| 2 | Every concept source-attributed (join chain resolves) | **PASS** | Validator `concept-source-registry` + `source-derivation-link` green on this exact tree. Examiner spot-check, four chains re-walked by hand: `d1-q11`→`C-011`→{blueprint b-1.2-3, curriculum c-2.1-3/4}, `d2-q41`→`C-041`→{blueprint b-2.2-4}, `d2-q34`→`C-034`→{blueprint b-2.1-4/6, curriculum c-1.2-3, simulator Q33/104/109/195}, `d1-q13`→`C-013`→{blueprint b-1.3-1, curriculum c-1.1-1..6, simulator Q49/56/58/59} — every artefact id resolves to a registry entry and to a distillation doc in `derivation/` |
| 3 | Validator green | **PASS** | `pnpm validate ai-901` → **34 checks, 0 errors, 0 warnings** on the re-pinned tree `b3851b9` (selection built, status `in_review`). *Count corrected 2026-08-19: this row read "30 checks" against `e2434ad`; four cue checks — `key-length-rank-share`, `rider-balance`, `named-entity-parity`, `option-pair-similarity` — landed after S6 and all four are silent here.* Includes the two original ratchet checks `key-position-distribution` + `answer-length-cue`, both green, and the three selection checks (`selection-shape`, `selection-format-mix`, `selection-concept-uniqueness`) that were the 10 errors while `selection.json` was empty. No warn-level reports to disposition |
| 4 | Eval artifacts present, thresholds met | **PASS** | `eval/blind-solve.json` (r2: **56/56**, zero misses, zero adjudications open), `eval/judge-scores.json` (r2: **zero dimensions ≤2**, zero open bounces, every item at bounce ≤1 — cap is 2), `eval/overlap-report.md` (r1+r2 sections, pass), `eval/codex-solve.json` (`advisory_skipped` recorded for both rounds — see the cross-model note below). **SINCE RUN — 2026-08-20, after the sign-off: form-a 42/42 agreement with the key, 0 disagreements, 0 unparsed (`eval/codex-solve.json` @ `d9da399`). Advisory, so nothing on this row moves; see §Cross-model column for what the agreement licenses (keys) and what it does not (co-correctness, plausibility, pitch).** Round-1 artifacts preserved verbatim at `eval/blind-solve-r1.json` + `eval/judge-scores-r1.json`. **Post-wave standing (2026-08-19):** all four artifacts were produced against the pre-wave option text (`e2434ad`) and were not regenerated; §Post-S5 cue-rework wave records what moved and which dimensions are re-opened. **S5b re-measured on the shipping revision: bank PASSES both ceilings; form-a blind 30.95% exceeds the strict format-mix ceiling 28.97% and needs Oliver's ruling** (table in that section). **One S6 correction to `judge-scores.json`:** its top-level `round` field and `gate2_sample.count` were left at round-1 values (`1`, `9`) when the round-2 re-eval rewrote the rest of the file; corrected to `2` and `10` to match the authoritative handoff in `derivation/eval-report.md` §6 and the file's own round-2 `$comment`. Scores, bounces and defect records untouched; the correction is logged in-file at `gate2_sample.corrected_at_s6` |
| 5 | Per-exam README statements present | **OPEN — not written** | `content/ai-901/README.md` does not exist. Required before the `published` flip (template: methodology/06 §readme-template; the manifest's machine-checked `nda_statement` exists and the intro `disclaimer` carries the candidate-facing version, but the README's provenance / prior-art / NDA / non-affiliation / licence sections are the human-facing artifact and are missing). **Owner: exam-author** — the examiner does not author package content beyond its eval/selection surface. Precedent now exists: `content/aif-c01/README.md` landed at commit `f5a877f` and is the shape to copy. Does not block `in_review` |
| 6 | Licences recorded, both directions | **PASS (outbound), PASS (inbound, vacuous)** | Outbound: repo `LICENSE` (MIT, code) + `LICENSE-CONTENT` (CC BY 4.0, content) exist at root; must also be stated in the package README, which folds into item 5. Inbound: **zero `licensed_import` items** in this bank (grep on `questions.json` / `concepts.json` / `manifest.json` returns 0) — `licensed-import-license` green with nothing to discharge. The one third-party source (`akashp-ai901-simulator`, MIT) was used for analytical classification only under the clean-room rule; **no text was reused**, so MIT attribution is discharged by citation in `derivation/sources.md` and in the manifest provenance block rather than by an attribution notice on shipped content |
| 7 | `format_coverage` disclosure present where required | **PASS** | Required: the Artefact A format analysis (`derivation/sources.md` §Format profile) shows the real exam draws from 8 item types against Mockka's 3. The manifest `format_coverage` field discloses: multiple-choice → `single_choice` exact; multi-select → `multiple_response` but scored **all-or-nothing here, stricter than Microsoft's per-component partial credit**; drag-and-drop → approximated by `scenario_matching`; **build list, hot area, active screen, case studies and problem-solution sets not rehearsed at all** — called out as mattering more here because 55–60% of the exam's weight is on implementing in Foundry. Also discloses the three chosen-not-published numbers (42-item form, 70% proxy threshold, 45-minute vendor time kept). `intro-presence` green; the player renders the disclosure on the intro page |

**Pacing / proxy disclosures confirmation:** the manifest carries `format_coverage`
(above) **and** restates the Gate-1 ratifications in its `$comment` — `weight_pct`
42/58 chosen from published ranges 40–45 / 55–60, `exam.item_count` 42 chosen from the
vendor-wide 40–60 band, `pass_threshold_pct` 70 as a readability proxy for the real
scaled 1–1,000 / 700 pass mark that Microsoft states "may not equal 70% of the points",
and `time_limit_minutes` 45 as the vendor's actual published Fundamentals exam time
kept unchanged (so a 42-item sitting here is slightly more generous per item than a
60-item one). All four are visible to Oliver at sign-off.

## Post-S5 cue-rework wave (2026-08-19) — provenance and the proportional re-open

Three commits on `fix/cue-rework-wave` (`6341f38` → `31d0ad7` → `b3851b9`), all explicit-path to
`content/ai-901/questions.json`. Preflight item 4 requires the eval artifacts to exist **for this
bank revision**; they exist for `e2434ad`, so this section records the delta rather than pretending
freshness.

**Blast radius, from a field-level path diff against merge-base `1b33eb6`** (both revisions parsed,
indexed by `id`, walked recursively — not read as a text diff). The complete set of path shapes is
`{"options.<letter>": 22}`. Byte-identical bank-wide: every stem, every `answer` (no key letter
moved on this exam), every `rationale.correct`, the `rationale.distractors` multiset, the
`distractor_patterns` multiset, the id set (56 in, 56 out).

**22 option strings on 16 items** — 5 key-side, 17 distractor-side. Seated on form-a (12):
`d1-q16`, `d2-q26`, `d2-q30`, `d2-q31`, `d2-q33`, `d2-q36`, `d2-q40`, `d2-q48`, `d2-q51`,
`d2-q53`, `d2-q54`, `d2-q55`. Reserve-only (4): `d1-q09`, `d2-q37`, `d2-q38`, `d2-q42`.

**Therefore:** the prior judge scores stand untouched on dimensions **3, 4 (as text), 5 and 6** —
nothing those dimensions read has changed. Dimensions **1 and 2 are re-opened for the 16 touched
items**, which is exactly why all 16 are now in the deep-read sample. `eval/blind-solve.json`'s
letters remain valid (no permutation on this exam) but 22 of the strings under them are new.

### S5b cue-only solve, re-measured post-wave (replaces the pre-wave numbers)

`node tools/exploit-scan.mjs ai-901` for form scope; the same tool against a selection-free copy of
the package for bank scope (it scopes to the served form when one exists). `random` is the
format-mix expected guess score — stricter than the rubric's 25% worked-example simplification.

| scope | n | blind (pre → post) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 56 | 46.43% → **25.00%** (14/56) | ≤ 30.17% (random 22.35%) | **0.6000** | ≥ 0.5216 (k_req@random 0.6137) | **PASS** |
| form-a | 42 | 42.86% → **30.95%** (13/42) | ≤ 28.97% (random 21.46%) | **0.5655** | ≥ 0.5253 (k_req@random 0.6180) | **blind FAIL** · k_req PASS |

Per-cue rates post-wave (chance 25%): bank key-longest 11/43 (25.6%), key-shortest 7/45 (15.6%),
named-entity 3/9 (33.3%), rider-marks-key 4/16 (25.0%); form key-longest 7/30 (23.3%), key-shortest
6/31 (19.4%), named-entity 2/7 (28.6%), rider-marks-key 3/12 (25.0%). Best single strategies on
form-a: `always B` 12/34 · longest-option 7/34 (was 17/34) · fixed MR set 1/5 · listed-order
matching 0/3.

**Open for Oliver — preflight item 4 does not close on form scope.** The wave removed the length
cue and left the letter cue untouched: `always B` scores 12/34 = 35.3% on form-a, identical
pre- and post-wave, because ai-901's keys were never permuted (`aif-c01` and `az-900` took a
`permute-keys` pass in this same wave; ai-901 did not). `tools/exploit-scan.mjs` exits 0 — the
machine-enforced hard floor is the 70% pass mark, not this ceiling — and the ceiling arithmetic is
examiner-computed per methodology/05 §cue-only-solve, so this is a judgment call, not a red build.
Three ways to close it: accept on the bank-scope pass plus k_req headroom; permute form-a's SC key
letters and re-verify; or waive with the reason recorded in `signoff.md`.

## Selection — what form-a is, and what is forced

`selection.json` form-a = **42 items**, exactly the manifest mix: **d1 18** (14 SC + 2 MR
+ 2 SM) · **d2 24** (20 SC + 3 MR + 1 SM). 14 concepts are reserve-only. Verified against
`manifest.domains[].format_mix` by count and by item type; `selection-format-mix` green.

**Priority seating.** 49 of 56 concepts compute to `priority: high`, so the priority
signal cannot do the whole job (the manifest's own convergence-health warning discounts
that number: two of three attesting sources are Microsoft and the third is an
LLM-generated bank written against the same blueprint). Seating outcome: **6 of 7
normal-priority concepts are reserved** (all curriculum-only, carrying no blueprint
bullet, so reserving them costs zero bullet coverage) and the 7th (`C-041`) is seated by
format arithmetic. The documented secondary criterion is **blueprint-bullet coverage**;
result — d2 covers all 19 of its bullets, d1 covers 21 of 25 directly and 4 indirectly.
Every hand-adjustment is argued item by item in `selection.json` `$comment`.

**Three seats are structurally forced, not chosen.** The bank contains exactly 2 MR + 2 SM
in d1 and exactly 3 MR + 1 SM in d2 — precisely the seat counts — so all eight of those
items ship by arithmetic. Consequences Oliver should see:

- normal-priority `C-041` (`d2-q41`) is in the form as the only way to fill the third d2
  MR seat, and `d2-q41` is the package's **strongest standing flag**;
- three Gate-2-flagged items (`d1-q21`, `d1-q23`, `d2-q41`) ship with no same-domain
  substitute available — **if the deep-read rejects any of them the form must be rebuilt
  around a re-authored replacement, not re-seated.**

## Gate 2 deep-read sample

Per methodology/05 §handoff + `/exam-publish` step 3: **all scenario-matching + 10 random
+ every auto-flagged item** — **extended 2026-08-19 to + every item touched by the
cue-rework wave.** Total **33 items** (was 22) — lists below are disjoint (no
double-counting; `d1-q23` is both SM and auto-flagged and is listed once, under flags).

**Wave extension (11 new items).** All 12 reworked items seated on form-a are now in the
sample, plus the 2 reserve-only reworked items not already flagged, because publication
covers the bank:

| Added | Seated? | Wave edit | What to judge |
|---|---|---|---|
| `d2-q53` | yes | **named entity** — distractor A became "Azure Speech in Foundry Tools … then Content Understanding" | A is now a buildable pipeline producing what the stem asks for; the key survives on the stem's word *"directly"*. Is that enough for a single defensible best answer? |
| `d2-q54` | yes | **named entity** — distractor B enumerates Azure AI Vision / Azure Speech instead of asserting a false premise | B lost its overt falsity and is now wrong only on *"needed"*. Does the key still win on the concept, not on integration economy? |
| `d2-q51` | yes | **named entity** — Document Intelligence named into D; the key **lost** its entity ("Azure Content Understanding in Foundry Tools" → "Content Understanding") | D must fail on OCR-plus-per-layout-rules, not on knowing a product was renamed (`master-inventory.md:230`). Confirm the shortened key is still self-sufficient |
| `d2-q26` | yes | key-side rider | The appended rider must not become the item's own giveaway |
| `d2-q55` | yes | key-side rider | as above |
| `d2-q40` | yes | distractor, "Microsoft" introduced | specificity parity only — check it does not hand the key over by contrast |
| `d2-q30` | yes | distractor, "SDK" introduced | already in the random 10; re-read against the new string |
| `d1-q16`, `d2-q31`, `d2-q33`, `d2-q48` | yes | length parity | distractor argued up; check it did not become co-correct |
| `d1-q09`, `d2-q42` | **no** (reserve) | `d2-q42` is key-side + entities {Azure, Foundry, Tools} | bank coverage; rejecting a reserve item is free — no re-seat, no form rebuild |

Already both reworked and sampled: `d2-q30`, `d2-q36`, `d2-q37`, `d2-q38`, `d2-q48`.

**The pairing that tells you which items need human reading.** All 17 distractor rewrites in
this wave left their `rationale.distractors` entry **byte-identical** — the refutation was
written against the pre-wave string. Every pair was re-read at this gate and all 17 still land,
but no validator check covers this surface (`rationale-anti-drift` does not test it), so the
deep-read is the only control.

**Auto-flagged (10) — a 3 ships only if this deep-read accepts it:**

| Item | In form-a? | Flag | What to judge | Substitute if rejected |
|---|---|---|---|---|
| `d2-q41` | yes (MR, forced) | dim1 3, dim4 3 | **Strongest finding in the package.** Distractor B restates `C-040`'s own discriminator (the dedicated route is *configured and called*, not *prompted*); the item survives only because B is phrased as a preference and the stem asks for "requirements". Also the only item the round-2 blind solve answered below high confidence | **none** — no other d2 MR exists; rejection forces a re-authored MR |
| `d1-q11` | yes | dim5 3, dim3 4, dim4 4 | Three options are absolutes and the key is the only hedged one (answerable by test-wiseness); neither key nor rationale names an actual deployment option | **none** — sole owner of bullet b-1.2-3 (model deployment options), one of the two highest-risk concepts in the concepts half; rejection leaves b-1.2-3 uncovered until re-authored |
| `d1-q21` | yes (MR, forced) | dim2 3, dim5 3 | Two of three distractors eliminable without the scenario; the two-jobs/two-options structure narrows the pick early | **none** — no other d1 MR exists |
| `d1-q23` | yes (SM, forced) | dim5 3 | Four of five scenarios are near-free medium-naming; the judgment rests on s5 | **none** — d1's only other SM (`d1-q13`) is also seated |
| `d1-q12` | yes | **referred**, dim1 4 | D (cache) delivers the literal ask; lower temperature reduces variation without guaranteeing identical output, and the rationale overstates it | **none** — sole owner of b-1.2-4 |
| `d2-q36` | yes | dim2 3 | Distractor A is not choosable by anyone in a safety context | reserve `d2-q35`. Note: `d2-q36` is the form's **only** grounding item — 1 of 42 seats is the Gate-1 RAG/Foundry-IQ ruling (2 of 56 concepts) scaled to the form |
| `d2-q50` | yes (MR, forced) | **referred**, blind-solve contamination | Scores 4/5 across all six dimensions, but its round-2 blind-solve match is **contaminated**: the rework commit message (`e2434ad`) disclosed its keys during scope discovery before the item was solved. The key needs one independent human read; the reworked option set is the second reason to look | **none** — no other d2 MR exists |
| `d2-q37` | **no** (reserve) | dim5 3, dim1 4 | Key is the abstract, moderate option among three concrete over-commitments; A is a live real-world position rejected on doctrine | n/a — bank-only. If the deep-read wants a dedicated b-2.2-1 seat, `d2-q37` is the **substitute for** seated `d2-q44`, not an addition |
| `d2-q38` | **no** (reserve) | dim1 3, dim4 4 | Classifying in the mail gateway is a standard architecture that delivers what the district asked for; the key wins on `C-038`'s framing and the rationale's selectivity criterion is never stated in the stem | n/a — bank-only |
| `d2-q47` | **no** (reserve) | dim5 3 | The keyed option carries a self-justifying clause restating the stem's requirement | n/a — bank-only |

Three flagged items (`d2-q37`, `d2-q38`, `d2-q47`) are **not in form-a** but are still
published bank content — they are in the sample because publication covers the bank, not
just the form.

**Scenario-matching (all 3; `d1-q23` counted above under flags):** `d1-q13`, `d2-q34`.
Both scored clean (no 3s) — they are in the sample by the standing rule that every
matching item gets a human read, because option-reuse items fail in ways per-option
scoring does not surface.

**10 random** — deterministic rule, documented so it is reproducible and not
cherry-picked: seated form-a ids sorted ascending, take index `floor(i × 42 ÷ 10)` for
i = 0..9, advancing to the next unsampled id when an index lands on an item already in
the flagged or SM lists:

`d1-q01`, `d1-q07`, `d1-q14`, `d1-q17`, `d2-q25`, `d2-q30`, `d2-q39`, `d2-q44`,
`d2-q48`, `d2-q52`

Two of these carry history worth knowing while reading them: `d1-q07` is the seated MR
that absorbs the two reserved responsible-AI principles (privacy/security and
transparency — see `selection.json` hand-adjustment 1), and `d2-q44` is a round-1 bounce
that cleared (dim6 2→5) **and** whose rework resolved the `C-039` ↔ `C-044` cross-item
contradiction.

> **SUPERSEDED 2026-08-20 — the instrument ran.** The paragraph below is the accurate record of
> what was true at the time. The `codex` CLI was authenticated on 2026-08-20 and the cross-solve
> returned **42/42 agreement, 0 disagreements, 0 unparsed** on form-a. See §Cross-model column at
> the end of this sheet for the result and, more importantly, for what it does and does not license.

**Cross-model signal: ABSENT IN BOTH ROUNDS.** `eval/codex-solve.json` records
`advisory_skipped` for round 1 and round 2 — the Codex CLI on this machine is the bundled
VS Code binary and is not authenticated, and the free-first rule bars the examiner from
signing in. The sample therefore carries **no cross-model dissent column**, and because
author and examiner share Claude weights, a convergent-blind-spot miskey is *not* excluded
by the 56/56 blind agreement. **The deep-read is the compensating control.** If Oliver
runs `codex login` before signing off, the cross-solve can be re-run on the same keyless
form and this checklist updated with the matrix first.

**Open adjudication queue:** empty — the round-2 blind solve had zero misses, so there is
nothing outstanding under §blind-solve step 4.

## Bounce ledger (cap = 2)

Round 1: **5 items bounced** — `d1-q15`, `d1-q16`, `d1-q24` (dim5, stem pre-translates the
key's vocabulary), `d2-q44` (dim6, scenario contradicts the key), `d2-q50` (dim5,
answer-surface cue). Reworked in one wave at `e2434ad`.

Round 2: **zero bounces.** All five reworked items were re-scored fresh (full rubric, no
partial credit) and cleared on their indicted dimensions with no regression elsewhere; the
other 51 items were re-solved blind as well. Dimension-5 moved 9×5/38×4/5×3/**4×2** →
9×5/42×4/5×3/**0×2**; dimension-6 → 55×5/1×4/**0×2**. No item is at bounce 2; no cap
breakers; **nothing on this bank requires a waiver.**

Two of the five cleared bounces (`d1-q15`, `d1-q24`) are nonetheless **reserved** in
form-a. Stated plainly so it is not misread: they are benched on **coverage duplication,
not quality** — both re-scored 5/4/5/5/4/5, identical to their unbounced siblings, and
both are first-line substitutes.

## Open decisions carried into this gate

**From Gate 1** (`derivation/gate1-checklist.md` §Six decisions — that checklist was
written to be ratified retroactively *at this gate*, so all six land here):

- **D1 · 42/58 weight split** — in force in the manifest; ratify or move to 43/57.
- **D2 · `exam.item_count = 42`** — in force; a documented choice from the vendor's 40–60
  band, sized to the 56-concept pool. Ratify.
- **D3 · `pass_threshold_pct = 70` as a disclosed proxy** — in force; ratify.
- **D4 · the RAG / Foundry IQ ruling** — in force as exactly 2 of 56 concepts (`C-035`,
  `C-036`) in the curriculum's agent framing, RAG *mechanics* rejected. Ratify. Note the
  S6 consequence: that ruling is 1 of 42 seats in form-a (`d2-q36`), which is itself a
  flagged item in the sample above.
- **D5 · Microsoft sign-in for the official practice assessment — authorise or decline.**
  **Still open, and it is the one that would change the evidence.** The Tier-1 assessment
  is free, unlimited-retake, vendor-authored and per-question rationaled — the only source
  that would give this build's implementation half an independent reading — but it sits
  behind an AI Skills Navigator sign-in, so no account was created and nothing was read
  (free-first / no-signup rule). A single ruling also covers `aif-c01` and `ai-900`.
- **D6 · `kittoyeah-ai901-prep` — distil or hold the exclusion.** Registered,
  dump-screened, cleared, deliberately not distilled on a convergence-*honesty* argument
  (its own README says it is grounded in the two sources this package already holds
  directly). Research-manager's recommendation: hold the exclusion, spend the budget on
  D5. Examiner concurs.

**New at Gate 2:**

- **The cross-model gap** (above) — accept the deep-read as the compensating control, or
  authorise `codex login` and re-run the advisory cross-solve first. **CLOSED 2026-08-20 by the run itself** — the cross-solve was executed post-sign-off and returned 42/42 agreement. It corroborates the keys; the deep read remains the control for co-correctness. §Cross-model column.
- **`d2-q50`'s contaminated blind-solve evidence** — the one item in this package whose
  key has never had an uncontaminated independent read.
- **Preflight item 5 (README)** — must close before `published`, or carry an explicit
  waiver line in the sign-off.
- **Three ratchet proposals** from `derivation/eval-report.md` §7, none of which block
  this exam: build the `stem-key-word-match` validator check (two exams now indicted by a
  class no live check can see); write the F2-family authoring rule into
  `03-authoring-guide.md` (three one-line stem rewrites took dim5 2→4 with no distractor
  weakened); build the cross-item consistency check for constraining concept pairs
  (`C-040` ↔ `C-041` is still live and is exactly what makes `d2-q41` the standing flag).
  A fourth item is a **process lesson, not a content one**: L-0028 — derive re-eval scope
  from an item-id hash diff, never from the rework commit message — is not yet in
  `builder/learning/LEARNING.md`, because this dispatch and the S5 one were both scoped to
  `content/ai-901/**`. It needs a session that owns `builder/`.

## What Oliver signs — **SUPERSEDED 2026-08-20**

> He signed it. `derivation/signoff.md` now records PASS on every preflight row,
> the adjudication decisions, the waiver block and a **PUBLISH** decision dated
> 2026-08-20. Preflight item 5 (README) is closed by the file, not waived. The
> paragraph below is the pre-signature statement, kept for the record.

`derivation/signoff.md` is pre-filled with the evidence hashes and this sample list;
verdict columns, the adjudication decisions and the PUBLISH / DO-NOT-PUBLISH decision are
blank and his. Preflight item 5 (README) must close before the `published` flip — a
PUBLISH decision with item 5 open needs either the README landed first or an explicit
waiver line, per methodology/06 ("a sign-off with any preflight verdict at `fail` and no
covering waiver is not a sign-off").

---

## Gate 2 final pass — 2026-08-20 (re-pin · corrected S5b standard · README closed · sign-off)

**Re-pinned to the shipping revision.** `content/ai-901/questions.json` @ **`d1eb0e8`** — blob `85a0898bac`, sha256 `beb99f0c051ede9a…`, committed 2026-08-19 on `fix/cue-rework-wave`. `selection.json` is unchanged and item ids are stable, so form-a's composition is exactly as seated.

### Content pass landed after the 2026-08-19 re-pin

- `a8c7f4e test every length rank, not just the extremes; permute ai-901 keys`
- `d1eb0e8 argue ai-901 distractors to length parity across all four ranks`

**a key-letter permutation plus 11 distractor option strings on 7 items.** The `answer` field moved on 40 items (35 single-choice + 5 multiple-response) and the 3 scenario-matching items were deranged; **no key's text changed on any item**, so keys were re-lettered, not re-decided. Stems, `rationale.correct`, the `distractor_patterns` multiset and the item-id set (56 in / 56 out) are byte-identical; one item (`d1-q01`) had a distractor rationale rewritten to match its rewritten option, which is the correct pairing.

**Items touched:** `d1-q01`, `d1-q02`, `d1-q16`, `d1-q19`, `d2-q25` (seated) · `d2-q29`, `d2-q38` (reserve).

Every rewritten option was re-read against the rationale that refutes it. Where a rationale was left unchanged, the distractor's proposition was unchanged too — the edits move length, not meaning — so each refutation still lands on the string it now faces. No distractor was argued into co-correctness; dimensions 1 and 2 stand for the touched items.

### Preflight rows restated on this revision

| # | Check | Verdict | Evidence at 2026-08-20 |
|---|---|---|---|
| 3 | Validator green | **PASS** | `pnpm validate ai-901` → **35 checks, 0 errors, 0 warnings** on `d1eb0e8` — zero warnings *(at `published`. The same tree reports 34 at `in_review`: `publication-preflight` is `when: status === 'published'` and runs only after the flip.)* |
| 4 | Eval thresholds, incl. the S5b ceiling | **PASS** | Re-stated below and in `derivation/eval-report.md` §s5b-final. Both scopes clear the corrected ceiling. |
| 5 | Per-exam README statements | **CLOSED — PASS** | `content/ai-901/README.md` now exists and carries every section methodology/06 §readme-template requires: provenance and independence, prior art, NDA statement, non-affiliation with the named trademark holder, and the outbound licence pair (content CC BY 4.0 / code MIT). *This row read **OPEN — not written** in every previous version of this sheet; it is closed by the file, not waived.* No `licensed_import` items exist in this bank, so the template's Licensed-content section is correctly absent. |

### S5b re-stated against the corrected ceiling

| scope | n | blind (this revision) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 56 | **25.00%** (14/56) | ≤ 30.17% (random 22.35%) | **0.600** | ≥ 0.522 | **PASS** |
| form-a | 42 | **23.81%** (10/42) | ≤ 28.97% (random 21.46%) | **0.605** | ≥ 0.525 | **PASS** |

**The previously pinned revision `b3851b9`, re-measured with the corrected instrument, does not clear the ceiling:** bank 33.93% (FAIL, k_req 0.545) · form-a 33.33% (FAIL, k_req 0.552). That is the honest statement of why this exam needed another content pass, and it is stated here rather than left implicit — the earlier sheet's PASS was produced by an instrument that could not see interior length ranks.

The two corrections to the instrument — the ceiling now computed by the machine rather than by hand against a pass-mark `ok`, and interior length ranks now inside the committed strategy set — are written out in full in `derivation/eval-report.md` §s5b-final. The **bar is unchanged**; the machine now enforces it and the attacker is stronger.

### Deep-read sample

**Extended 33 → 36 items.** Added by the 2026-08-19 pass: `d1-q02`, `d1-q19`, `d2-q29`. Every item that pass touched is now in the sample; the remainder were already in it.

### Residuals a reader should see

- **the 2026-08-19 ceiling FAIL is CLEARED, by content work — not by a change of bar.** That sheet recorded form-a blind 30.95% against a ceiling of 28.97% and referred it to Oliver as the one exam of the six that did not clear. The bar is unchanged (28.97%); the bank was fixed. Measured on the shipping revision the form scores 23.81%.
- **key-letter permutation** (`a8c7f4e`, `tools/permute-keys.mjs`): `eval/blind-solve.json`'s recorded letters no longer map to the shipping bank, exactly as for `aif-c01`. The file remains a valid record of the round-2 judgment; the deep read is the control.
- **stem-echo**, uninstrumented: 32.4% bank / 38.5% form against 25% chance — the highest form figure of the seven.
- Gate-1 decisions **D5** (Microsoft sign-in for the official practice assessment) and **D6** (`kittoyeah-ai901-prep` distillation) remain open. Neither is a preflight item; both are source-coverage improvements for a future round.
- **The cross-model eval column now exists** — `advisory_skipped` in every S5 round of this package, but the Codex CLI was authenticated on 2026-08-20 and the run landed: served form, **42/42 agreement, 0 disagreements, 0 unparsed** (`eval/codex-solve.json`). Advisory by design; it did not block then and does not license anything now. It discharges the **key-correctness** half of the convergent-blind-spot worry and leaves the **co-correctness** half fully open — the deep read is still the only control there, and 14 reserve-only items were not solved at all. §Cross-model column below has the reasoning.

## Cross-model column — arrived 2026-08-20, after the sign-off

The `codex` CLI was authenticated on 2026-08-20 and `node tools/codex-crosssolve.mjs ai-901` ran the
S5 [§codex](../../../methodology/05-eval-rubric.md#codex) advisory cross-solve that every round of
this package had recorded as `advisory_skipped`: **form-a, 42 items, 42/42 agreement with the
answer key, 0 disagreements, 0 unparsed** (`eval/codex-solve.json`). Wave-wide: 465/465 across the
eight exams.

**It arrived after the sign-off and changes nothing on this sheet.** Codex results are advisory and
never blocking; their only enforcement is that a disagreement joins the Gate 2 sample, and there
were none — so the sample, the verdicts and `manifest.status` all stand exactly as recorded.

**Read it precisely.**

| Now carried by evidence | Still carried only by the human deep read |
|---|---|
| The **answer keys** are defensible to a solver that did not write them and never saw the key. The convergent author/examiner misreading §codex exists to catch did not fire on any served item | **Co-correctness** (dim 1) of 28 distractor strings on 21 items the wave argued *up*; **distractor plausibility** (dim 2); **difficulty pitch** (dim 5). The cross-solver reports its best option and was never asked whether a second one also works |
| | The 14 reserve-only bank items — out of scope of a form-scope run |

Agreement is not clearance. By the same argument
[§1b](../../../methodology/05-eval-rubric.md#cue-only-solve) uses to refuse a 100% blind solve as
proof of unexploitability, two capable models agreeing could mean both read the same surface. What
makes this agreement meaningful rather than circular is that the surface is measured separately and
is at chance — S5b blind **23.81% on form-a against a 28.97% ceiling**. The pair is the finding.

The item-level questions this leaves for Oliver are collected in
[`content/GATE2-HUMAN-ONLY.md`](../../GATE2-HUMAN-ONLY.md).
