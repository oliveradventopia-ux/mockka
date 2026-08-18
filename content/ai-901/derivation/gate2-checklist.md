# Gate 2 checklist — ai-901

Assembled by exam-examiner at S6 (`/exam-publish` step 3), 2026-08-18, on the round-2
bank revision (author rework `e2434ad`; S5 round 2 closed at `2df3bb4`, artifacts in
`eval/`). `manifest.status` is now **`in_review`** — the flip to `published` is Oliver's
alone, recorded first in `derivation/signoff.md`. Verdict columns in the sign-off are
left for Oliver; this checklist pre-fills the evidence.

## The 7 preflight checks (methodology/06 §preflight), with evidence

| # | Check | Examiner finding | Evidence |
|---|---|---|---|
| 1 | Source registry complete, with licence basis | **PASS** | `derivation/sources.md` §Registered sources: 3 entries (`ms-ai901-blueprint` public_blueprint, `ms-ai901-curriculum` public_syllabus, `akashp-ai901-simulator` public_practice_set), each carrying type, author, URL, `date_accessed` 2026-08-17, licence/permission basis and usage constraint. Excluded sources screened with evidence recorded (§Excluded sources). Machine checks `provenance-sources`, `concept-source-registry`, `source-derivation-link` all green |
| 2 | Every concept source-attributed (join chain resolves) | **PASS** | Validator `concept-source-registry` + `source-derivation-link` green on this exact tree. Examiner spot-check, four chains re-walked by hand: `d1-q11`→`C-011`→{blueprint b-1.2-3, curriculum c-2.1-3/4}, `d2-q41`→`C-041`→{blueprint b-2.2-4}, `d2-q34`→`C-034`→{blueprint b-2.1-4/6, curriculum c-1.2-3, simulator Q33/104/109/195}, `d1-q13`→`C-013`→{blueprint b-1.3-1, curriculum c-1.1-1..6, simulator Q49/56/58/59} — every artefact id resolves to a registry entry and to a distillation doc in `derivation/` |
| 3 | Validator green | **PASS** | `pnpm validate ai-901` → **30 checks, 0 errors, 0 warnings** on this tree (selection built, status `in_review`). Includes the two ratchet checks `key-position-distribution` + `answer-length-cue`, both green, and the three selection checks (`selection-shape`, `selection-format-mix`, `selection-concept-uniqueness`) that were the 10 errors while `selection.json` was empty. No warn-level reports to disposition |
| 4 | Eval artifacts present, thresholds met | **PASS** | `eval/blind-solve.json` (r2: **56/56**, zero misses, zero adjudications open), `eval/judge-scores.json` (r2: **zero dimensions ≤2**, zero open bounces, every item at bounce ≤1 — cap is 2), `eval/overlap-report.md` (r1+r2 sections, pass), `eval/codex-solve.json` (`advisory_skipped` recorded for both rounds — see the cross-model note below). Round-1 artifacts preserved verbatim at `eval/blind-solve-r1.json` + `eval/judge-scores-r1.json`. **One S6 correction to `judge-scores.json`:** its top-level `round` field and `gate2_sample.count` were left at round-1 values (`1`, `9`) when the round-2 re-eval rewrote the rest of the file; corrected to `2` and `10` to match the authoritative handoff in `derivation/eval-report.md` §6 and the file's own round-2 `$comment`. Scores, bounces and defect records untouched; the correction is logged in-file at `gate2_sample.corrected_at_s6` |
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
+ every auto-flagged item.** Total **22 items** — lists below are disjoint (no
double-counting; `d1-q23` is both SM and auto-flagged and is listed once, under flags).

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
  authorise `codex login` and re-run the advisory cross-solve first.
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

## What Oliver signs

`derivation/signoff.md` is pre-filled with the evidence hashes and this sample list;
verdict columns, the adjudication decisions and the PUBLISH / DO-NOT-PUBLISH decision are
blank and his. Preflight item 5 (README) must close before the `published` flip — a
PUBLISH decision with item 5 open needs either the README landed first or an explicit
waiver line, per methodology/06 ("a sign-off with any preflight verdict at `fail` and no
covering waiver is not a sign-off").
