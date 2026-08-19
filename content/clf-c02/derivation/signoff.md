# Gate 2 sign-off · clf-c02

> Pre-filled by exam-examiner at S6 (2026-08-18) per methodology/06 §signoff-template.
> **Verdict columns, adjudication decisions, waivers, and the final decision are
> Oliver's — left blank.** Working paper: `derivation/gate2-checklist.md`.

- **Date:** ____ · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision:** `questions.json` @ `168ae1f` · `selection.json` @ the S6 commit on `feat/exam-factory` (see `git log -- content/clf-c02/selection.json`)
- **Eval artifacts:** blind-solve @ `10ccb89` (r2, 2026-08-18) · judge-scores @ `10ccb89` (r2) · overlap-report @ `10ccb89` (r1 + r2 delta) · codex-solve @ `10ccb89` (**advisory_skipped ×2 rounds**) · round-1 preserved at `eval/*-r1.json`
- **Exam form under review:** `form-a`, 50 items — d1 12 (10 SC + 2 MR) · d2 15 (12 + 3) · d3 17 (14 + 3) · d4 6 (5 + 1); 41 single_choice + 9 multiple_response + 0 scenario_matching

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | Examiner finding: PASS (checklist §1) — note `aws-official-question-set` registered but never accessed; the two TheServerSide sources count as one voice |
| Provenance chain (spot-check: 1.03, 2.16, 3.15, 4.06 + your own picks) | | Examiner finding: PASS (checklist §2) |
| Validator | | Examiner finding: PASS — 30 checks, 0 errors, 0 warnings on this tree at `in_review` |
| Eval thresholds | | Examiner finding: PASS — 68/68 blind, zero dimensions ≤2, zero open bounces, zero open adjudications |
| Deep-read sample (22 items; no scenario_matching exists for this exam) — 3s: 1.05, 1.07, 1.09, 2.01, 2.04, 2.05, 2.06, 2.19, 3.11, 3.14 · bounce survivor: 1.10 · dim1-4 referred: 4.05 · 10 random: 1.02, 1.11, 1.15, 2.07, 2.11, 2.20, 3.05, 3.12, 3.17, 4.02 | | **No cross-model column — Codex unauthenticated in both rounds.** A convergent author/examiner blind spot is not excluded by 68/68; this deep read is the compensating control |
| README statements | | Examiner finding: **OPEN** — `content/clf-c02/README.md` does not exist (owner: exam-author; worked reference at `content/aif-c01/README.md`). Requires close-out or an explicit waiver below before PUBLISH |
| Licences in/out | | Examiner finding: PASS — repo `LICENSE` (MIT) + `LICENSE-CONTENT` (CC BY 4.0); zero `licensed_import` items inbound |
| format_coverage disclosure | | Examiner finding: PASS — real exam's two item types are a strict subset of Mockka's three (100% coverage), with the two uncalibrated-MR-width and MR-share caveats disclosed |

## Adjudications closed at this gate

<!-- Each 3-flag, bounce survivor and referred item: id → decision (keep / rekey / waiver / replace) → one-line reason.
     Open queue from S5: EMPTY (zero blind-solve misses in round 2).
     "seated" = on form-a; "reserve" = in the bank only. Substitutes are listed in the checklist table. -->

| Item | On form? | Decision | Reason |
|---|---|---|---|
| 1.05 | seated | | |
| 1.07 | reserve | | |
| 1.09 | seated | | |
| 2.01 | reserve | | |
| 2.04 | seated | | |
| 2.05 | reserve | | |
| 2.06 | seated | | |
| 2.19 | reserve | | |
| 3.11 | seated | | |
| 3.14 | reserve | | |
| 1.10 (bounce survivor) | seated | | |
| 4.05 (dim1 = 4) | seated | | |
| Pitch line (1.08 / 3.19 near-misses — keep at 4, or move the line?) | both seated | | |

## Selection decisions to confirm or overturn

<!-- The three hand-adjustments where the examiner exercised judgment (selection.json $comment,
     checklist §"The exam form"). Confirm, or name the substitute. -->

| Decision | Confirm / change |
|---|---|
| d1 second MR seat: `1.05` (WA pillars) seated, `1.12` (on-prem hidden costs) reserved | |
| d3 MR seats: `3.04`, `3.11`, `3.19` seated, `3.14` reserved | |
| d4 MR seat: `4.06` (support tiers) seated, `4.03` (charged data movements) reserved | |
| Repeated verticals across domains (8 of 50 items) — accept, or re-shuffle / ask the author for more verticals | |

## Gate 1 defaults carried forward (amendable here)

<!-- Ratified by batch approval 2026-08-17; amend any of them at this gate or leave as-is. -->

| Gate 1 decision | Standing default | Amend? |
|---|---|---|
| Skill Builder top-up (free official 20-question set) | Approved in principle, **never run** — 50% of concepts remain blueprint-only | |
| Pass threshold | 70% raw proxy for scaled 700/1,000 | |
| Pacing | 90 minutes kept for 50 items, disclosed (~28% generous) | |
| MR share | 18%, all choose-2-of-5 | |
| Tutorials Dojo sampler | Accepted, classification-only, `[UNVERIFIED]` originality statement | |

## Waivers

<!-- Any item shipped below the normal bar, with the explicit reason — or "none".
     Examiner expectation: none required by the eval (zero dimensions ≤2, zero open bounces).
     Preflight item 5 (README) needs either close-out or a waiver line HERE if PUBLISH is
     signed before it lands. -->

## Decision

**PUBLISH / DO NOT PUBLISH.** ____

Signed: ____, ____
