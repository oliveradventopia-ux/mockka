# Gate 2 sign-off · sy0-701

> Pre-filled by exam-examiner at S6 (2026-08-18) per methodology/06 §signoff-template.
> **Verdict columns, adjudication decisions, waivers, and the final decision are
> Oliver's — left blank.** Working paper: `derivation/gate2-checklist.md`.

- **Date:** ____ · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision:** `questions.json` @ `4090ed3` · `selection.json` @ the S6 commit on `feat/exam-factory` (see `git log -- content/sy0-701/selection.json`)
- **Eval artifacts:** blind-solve @ `eacb373` (r1, 2026-08-18) · judge-scores @ `eacb373` (r1) · overlap-report @ `eacb373` (r1) · codex-solve @ `eacb373` (`advisory_skipped`)

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | Examiner finding: PASS with one residual — `jealarue-exam90` has no licence file (checklist §1 + open decision 6a) |
| Provenance chain (spot-check: C-001/`d1-q01`, C-041/`d2-q26`, C-064/`d3-q22`, C-097/`d4-q33`, C-112/`d5-q14`, C-088/`d4-q24`, C-115/`d5-q17` + your own picks) | | Examiner finding: PASS (checklist §2) |
| Validator | | Examiner finding: PASS — 30 checks, 0 errors, 0 warnings on this tree |
| Eval thresholds | | Examiner finding: PASS — 121/122 blind, zero dimensions ≤2, zero bounces, one open adjudication (`d4-q02`) |
| Deep-read sample (all SM + 10 random + all auto-flagged, 27 items: SM `d2-q25`, `d4-q33`, `d5-q14` · random `d1-q01`, `d1-q14`, `d2-q16`, `d2-q24`, `d3-q07`, `d3-q21`, `d4-q10`, `d4-q23`, `d5-q01`, `d5-q15` · flagged `d1-q04`, `d1-q06`, `d1-q10`, `d2-q04`, `d2-q07`, `d2-q12`, `d2-q13`, `d2-q14`, `d2-q15`, `d3-q08`, `d3-q15`, `d3-q16`, `d4-q02`, `d5-q16`) | | No cross-model column — Codex unauthenticated (fourth consecutive exam) |
| README statements | | Examiner finding: **OPEN** — `content/sy0-701/README.md` does not exist (owner: exam-author). Requires close-out or explicit waiver before PUBLISH |
| Licences in/out | | Examiner finding: PASS — repo LICENSE (MIT) + LICENSE-CONTENT (CC BY 4.0) outbound; zero `licensed_import` items inbound |
| format_coverage disclosure | | Examiner finding: PASS — PBQs declared unsupported and approximated two ways, plus the "maximum of 90" and scaled-score divergences (manifest `format_coverage`) |

## Adjudications closed at this gate

<!-- Each open adjudication and flagged item: id → decision (keep / rekey / waiver / replace) → one-line reason.
     Open queue from S5: d4-q02 only (confident blind miss, proposed verdict legitimately_hard).
     Policy classes: dim-5 vocabulary recognition (d1-q04, d1-q06, d2-q04, d2-q07, d2-q15) and
     dim-2 throwaway option (d1-q10, d2-q12, d2-q13, d2-q14, d3-q08, d3-q15, d3-q16) —
     each is ONE ruling, recorded once, not re-litigated per exam. d5-q16 is the lone dim-1 three. -->

| Item | Decision | Reason |
|---|---|---|
| `d4-q02` (adjudication) | | |
| `d5-q16` (dim1=3) | | |
| dim-5 class ruling — `d1-q04`, `d1-q06`, `d2-q04`, `d2-q07`, `d2-q15` | | |
| dim-2 class ruling — `d1-q10`, `d2-q12`, `d2-q13`, `d2-q14`, `d3-q08`, `d3-q15`, `d3-q16` | | |
| `distractor-term-shape` ratchet proposal (eval-report §7) | | |
| Gate-1 6a — keep or drop `jealarue-exam90` (drop ⇒ form-a rebuild) | | |
| Gate-1 6c — blueprint revision 5.0 re-check before flip | | |
| Stem-length house style vs vendor shape (open decision 8) | | |

## Waivers

<!-- Any item shipped below the normal bar, with the explicit reason — or "none".
     Examiner expectation: none required by the eval. Two non-eval items need either
     close-out or a waiver line here if PUBLISH is signed before they land:
     (1) preflight item 5, the package README; (2) open decision 6c, the blueprint
     revision re-check from CompTIA's own download. -->

## Decision

**PUBLISH / DO NOT PUBLISH.** ____

Signed: ____, ____
