# Gate 2 sign-off · ccao-f

> Pre-filled by exam-examiner at S6 (2026-08-18) per methodology/06 §signoff-template.
> **Verdict columns, adjudication decisions, waivers, and the final decision are
> Oliver's — left blank.** Working paper: `derivation/gate2-checklist.md`.

- **Date:** ____ · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision:** `questions.json` @ `d7cb9e4` (sha256 `17bb2e36bee9…`, unchanged since the round-1 rework) · `selection.json` @ the S6 commit on `feat/exam-factory` (see `git log -- content/ccao-f/selection.json`)
- **Eval artifacts:** blind-solve @ `301c065` (r2, 2026-08-18, sha256 `87eea8968d50…`) · judge-scores @ `301c065` (r2, sha256 `0c1707018243…`) · overlap-report @ `301c065` (r2, sha256 `faaa62547ead…`) · codex-solve @ `301c065` (`advisory_skipped`, 3 attempts across 2 rounds, sha256 `2c5e736932a8…`) · round-1 preserved at `eval/*-r1.json` / `eval/overlap-report-r1.md`

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | Examiner finding: PASS (checklist §1) — 4 registered sources, all with licence/permission basis; 5 dump vendors screened out; `anthropic-prep-course` registered pending extraction with nothing distilled |
| Provenance chain (spot-check: C-004/`d1-q04`, C-027/`d2-q27`, C-051/`d4-q51`, C-065/`d6-q65` + your own picks) | | Examiner finding: PASS (checklist §2) — machine chain green on this tree; 0 `licensed_import` items |
| Validator | | Examiner finding: PASS — **33 checks, 0 errors, 34 warnings** on this tree. All 34 warnings are the single `concept-convergence` family-convention class, enumerated and dispositioned in checklist §3 |
| Eval thresholds | | Examiner finding: PASS — 81/81 blind (r2), zero dimensions ≤2, `bounces: []`, zero open adjudications, bounce cap respected |
| Deep-read sample (0 SM + 10 random + all auto-flagged; 22 items on form-a) | | Flagged & seated: `d1-q01, d1-q02, d1-q03, d1-q04, d2-q15, d2-q25, d2-q27, d3-q29, d3-q32, d3-q34, d3-q35, d3-q36, d4-q50, d6-q65, d6-q73` · random: `d1-q09, d2-q18, d2-q26, d4-q42, d5-q56, d6-q67, d7-q74` (+ `d1-q01, d3-q34, d4-q50` already flagged). **No cross-model column — Codex unauthenticated in both rounds** |
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
