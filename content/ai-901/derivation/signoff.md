# Gate 2 sign-off · ai-901

> Pre-filled by exam-examiner at S6 (2026-08-18) per methodology/06 §signoff-template.
> **Verdict columns, adjudication decisions, waivers, and the final decision are
> Oliver's — left blank.** Working paper: `derivation/gate2-checklist.md`.

- **Date:** ____ · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision:** `questions.json` @ `e2434ad` · `selection.json` @ the S6 commit on `feat/exam-factory` (see `git log -- content/ai-901/selection.json`)
- **Eval artifacts:** blind-solve @ `2df3bb4` (r2, 2026-08-18, 56/56) · judge-scores @ `2df3bb4` (r2; `round`/`gate2_sample.count` metadata corrected in the S6 commit, scores untouched) · overlap-report @ `2df3bb4` (r1+r2) · codex-solve @ `2df3bb4` (**`advisory_skipped` in BOTH rounds — this exam carries no cross-model signal**) · round-1 preserved at `eval/blind-solve-r1.json` + `eval/judge-scores-r1.json`

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | Examiner finding: PASS (checklist §1) — 3 registered sources, all fields present, exclusions screened with evidence |
| Provenance chain (spot-check: `d1-q11`, `d2-q41`, `d2-q34`, `d1-q13` + your own picks) | | Examiner finding: PASS (checklist §2) |
| Validator | | Examiner finding: PASS — `pnpm validate ai-901` → 30 checks, **0 errors, 0 warnings** on this tree |
| Eval thresholds | | Examiner finding: PASS — zero dimensions ≤2, zero open bounces (cap 2, max reached 1), zero open adjudications |
| Deep-read sample (all SM + 10 random + all auto-flagged — 22 items: SM `d1-q13`, `d2-q34` · random `d1-q01`, `d1-q07`, `d1-q14`, `d1-q17`, `d2-q25`, `d2-q30`, `d2-q39`, `d2-q44`, `d2-q48`, `d2-q52` · flagged `d1-q11`, `d1-q12`, `d1-q21`, `d1-q23`, `d2-q36`, `d2-q37`, `d2-q38`, `d2-q41`, `d2-q47`, `d2-q50`) | | **No cross-model column — Codex unauthenticated in both rounds.** `d2-q37`/`d2-q38`/`d2-q47` are bank-only (not in form-a). `d1-q21`, `d1-q23`, `d2-q41`, `d2-q50` have **no substitute** — rejecting any forces a re-authored replacement and a form rebuild |
| README statements | | Examiner finding: **OPEN** — `content/ai-901/README.md` does not exist (owner: exam-author; shape to copy: `content/aif-c01/README.md` @ `f5a877f`). Requires close-out or an explicit waiver below before PUBLISH |
| Licences in/out | | Examiner finding: PASS — repo `LICENSE` (MIT) + `LICENSE-CONTENT` (CC BY 4.0); zero `licensed_import` items inbound; the MIT community bank was classified only, no text reused |
| format_coverage disclosure | | Examiner finding: PASS (required and present) — 8 real item types vs 3 supported; build list / hot area / active screen / case studies / problem-solution **not rehearsed at all**; MR scoring stricter than the vendor's partial credit; 42-item count, 70% threshold and 45-minute limit disclosed as chosen-or-proxy |

## Gate-1 decisions ratified here

`derivation/gate1-checklist.md` was written to be ratified retroactively at this gate.

| Decision | Verdict | Note |
|---|---|---|
| D1 · weight split 42/58 (published ranges 40–45 / 55–60) | | In force in the manifest. Alternative: 43/57 |
| D2 · `exam.item_count = 42` (vendor band 40–60, no published count) | | In force; disclosed as chosen in `format_coverage` |
| D3 · `pass_threshold_pct = 70` as a disclosed proxy (real: scaled 1–1,000 / 700) | | In force; disclosed in `format_coverage` and the intro block |
| D4 · RAG / Foundry IQ admitted at 2 of 56 concepts, mechanics rejected | | In force; = 1 of 42 seats in form-a (`d2-q36`, itself a flagged item) |
| D5 · Microsoft sign-in for the official practice assessment — authorise / decline | | **OPEN.** The only source that would give the implementation half an independent reading; behind a sign-in, so nothing was read (free-first). One ruling also covers `aif-c01` and `ai-900` |
| D6 · `kittoyeah-ai901-prep` — distil / hold the exclusion | | **OPEN.** Registered, cleared, deliberately not distilled on a convergence-honesty argument. Research-manager recommends holding; examiner concurs |

## Adjudications closed at this gate

<!-- Each 3-flag and referral: item id → decision (keep / rekey / waiver / replace) → one-line reason.
     Open queue from S5: EMPTY (zero blind-solve misses in round 2).
     3-flags: d1-q11 · d1-q21 · d1-q23 · d2-q36 · d2-q37 · d2-q38 · d2-q41 · d2-q47.
     Referrals: d1-q12 (dim1 4) · d2-q50 (contaminated blind-solve evidence).
     NOTE: d1-q21, d1-q23, d2-q41 and d2-q50 occupy format-forced seats with no substitute —
     "replace" on any of them means re-author + rebuild form-a, not re-seat. -->

| Item | Decision | Reason |
|---|---|---|
| `d2-q41` | | |
| `d1-q11` | | |
| `d1-q21` | | |
| `d1-q23` | | |
| `d1-q12` | | |
| `d2-q36` | | |
| `d2-q50` | | |
| `d2-q37` | | |
| `d2-q38` | | |
| `d2-q47` | | |
| Cross-model gap (whole bank) | | Accept the deep-read as the compensating control, or authorise `codex login` and re-run the advisory cross-solve before signing |

## Waivers

<!-- Any item shipped below the normal bar, with the explicit reason — or "none".
     Examiner expectation: none required by the eval (zero ≤2, zero bounce-cap survivors).
     Preflight item 5 (README) needs either close-out or a waiver line here if PUBLISH is
     signed before it lands. -->

## Decision

**PUBLISH / DO NOT PUBLISH.** ____

Signed: ____, ____
