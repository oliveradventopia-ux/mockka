# Gate 2 sign-off · az-900

> Pre-filled by exam-examiner at S6 (2026-08-18) per methodology/06 §signoff-template.
> **Verdict columns, adjudication decisions, waivers, and the final decision are
> Oliver's — left blank.** Working paper: `derivation/gate2-checklist.md`.

- **Date:** ____ · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision:** `questions.json` @ `f649943` (blob `4d5d227`) · `selection.json` @ the S6 commit on `feat/exam-factory` (blob `8336e65`; see `git log -- content/az-900/selection.json`)
- **Eval artifacts:** blind-solve @ `c14fd1a` (r1, 2026-08-18, blob `2f46266`) · judge-scores @ `c14fd1a` (r1, blob `d3fb86d`) · overlap-report @ `c14fd1a` (r1, blob `6cc559b`) · Codex advisory record inline in `blind-solve.json` → `codex_cross_solve` (advisory-skipped, unauthenticated CLI)

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | Examiner finding: PASS with one residual (checklist §1) — `insidecloud-az900` has no named author and no licence statement; free public page, classification-only use, screened clean against the dump corpus |
| Provenance chain (spot-check: C-001/1.01, C-043/2.25, C-054/3.11, C-057/3.14, C-062/3.19 + your own picks) | | Examiner finding: PASS (checklist §2) — all five chains re-walked by hand to registry + derivation doc |
| Validator | | Examiner finding: PASS — 30 checks, 0 errors, 5 warnings on this tree; the 5 are the exactly-five intended `concept-convergence` same-author WARNs ratified at Gate 1 (C-001, C-012, C-057, C-058, C-061) |
| Eval thresholds | | Examiner finding: PASS — 65/65 blind, zero dimensions ≤2, zero bounces, zero open adjudications. No cross-model column (Codex unauthenticated) |
| Deep-read sample (all SM + 10 random + all auto-flagged: 1.18, 2.14, 3.11 · 1.01, 1.02, 1.06, 1.15, 2.03, 2.09, 2.15, 2.23, 3.06, 3.10 · 2.25, 3.12, 3.13, 1.16, 2.08, 2.17, 2.21, 2.22, 3.04, 3.05, 3.07, 3.17, 3.18, 3.19, 3.20, 3.21, 3.22) | | 30 items, 25 of them on form-a; 5 auto-flagged items (2.21, 3.05, 3.12, 3.13, 3.18) are reserve-only. 14 of the 17 flags are one repeated question — BO-1 |
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

## Waivers

<!-- Any item shipped below the normal bar, with the explicit reason — or "none".
     Examiner expectation: none required by the eval (zero bounces, zero dimensions ≤2).
     Preflight item 5 (README) needs either close-out or a waiver line here if PUBLISH
     is signed before it lands. -->

## Decision

**PUBLISH / DO NOT PUBLISH.** ____

Signed: ____, ____
