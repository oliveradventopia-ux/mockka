# Gate 2 sign-off · aif-c01

> Pre-filled by exam-examiner at S6 (2026-08-16) per methodology/06 §signoff-template.
> **Verdict columns, adjudication decisions, waivers, and the final decision are
> Oliver's — left blank.** Working paper: `derivation/gate2-checklist.md`.

- **Date:** ____ · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision:** `questions.json` @ `1b1596c` · `selection.json` @ the S6 commit on `feat/scaffold` (see `git log -- content/aif-c01/selection.json`)
- **Eval artifacts:** blind-solve @ `79026d8` (r2, 2026-08-16) · judge-scores @ `79026d8` (r2) · overlap-report @ `79026d8` (r1+r2) · codex-solve @ `79026d8` (advisory_skipped ×2 rounds) · round-1 preserved at `eval/*-r1.json`

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | Examiner finding: PASS (checklist §1) |
| Provenance chain (spot-check: 1.09, 2.11, 5.04 + your own picks) | | Examiner finding: PASS (checklist §2) |
| Validator | | Examiner finding: PASS — 29 checks, 0 errors, 0 warnings on this tree |
| Eval thresholds | | Examiner finding: PASS — zero ≤2, zero open bounces, zero open adjudications |
| Deep-read sample (all SM + 10 random + all auto-flagged: 1.08, 2.04, 3.09 · 1.01, 1.09, 2.01, 2.08, 2.15, 3.05, 3.12, 3.19, 4.06, 5.03 · 2.05, 2.12, 4.04 · notes: 2.03, 3.08, 4.09) | | No cross-model column — Codex unauthenticated both rounds |
| README statements | | Examiner finding: **OPEN** — `content/aif-c01/README.md` does not exist (owner: exam-author). Requires close-out or explicit waiver before PUBLISH |
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

## Waivers

<!-- Any item shipped below the normal bar, with the explicit reason — or "none".
     Examiner expectation: none required by the eval; the README preflight item needs
     either close-out or a waiver line here if PUBLISH is signed before it lands. -->

## Decision

**PUBLISH / DO NOT PUBLISH.** ____

Signed: ____, ____
