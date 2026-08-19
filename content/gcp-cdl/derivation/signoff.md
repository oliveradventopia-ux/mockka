# Gate 2 sign-off · gcp-cdl

> Pre-filled by exam-examiner at S6 (2026-08-18) per methodology/06 §signoff-template.
> **Verdict columns, adjudication decisions, waivers, and the final decision are
> Oliver's — left blank.** Working paper: `derivation/gate2-checklist.md`.

- **Date:** ____ · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision:** `questions.json` @ `42fbd3f` (r1 bounce rework) · `selection.json` @ the S6 commit on `feat/exam-factory` (see `git log -- content/gcp-cdl/selection.json`)
- **Eval artifacts:** blind-solve @ `252c4fb` (r2, 2026-08-18) · judge-scores @ `252c4fb` (r2) · overlap-report @ `252c4fb` (r2) · codex-solve @ `252c4fb` (**advisory_skipped ×2 rounds**) · round-1 preserved at `eval/*-r1.*`

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | Examiner finding: PASS (checklist §1) — 5 registered sources, all fields present; `google-skills-cdl-path` registered metadata-only, content never accessed |
| Provenance chain (spot-check: `d1-04`, `d3-11`, `d5-09`, `d6-01` + your own picks) | | Examiner finding: PASS (checklist §2) — 83/83 concepts attributed; zero `licensed_import` items |
| Validator | | Examiner finding: PASS — 30 checks, **0 errors, 0 warnings** on this tree with `form-a` built |
| Eval thresholds | | Examiner finding: PASS — blind 83/83 (both rounds), zero dimensions ≤2, zero open bounces, zero open adjudications |
| Deep-read sample (all SM + 10 random + all auto-flagged — **SM contributes zero, the format is absent by design**: seated flags `d1-06`, `d1-14`, `d3-11`, `d4-10`, `d5-04`, `d5-09` · reserve-only flags `d1-01`, `d1-02`, `d1-05`, `d1-08`, `d1-12`, `d3-06`, `d5-05` · random `d1-03`, `d1-11`, `d2-05`, `d2-12`, `d3-05`, `d3-13`, `d4-07`, `d4-14`, `d5-08`, `d6-01` · notes `d3-01`, `d6-01`/RW-1) | | **No cross-model column — Codex unauthenticated in both rounds.** Author and both blind solves share a model family, so 83/83 twice does not exclude a convergent blind spot; this deep-read is the compensating control |
| README statements | | Examiner finding: **OPEN** — `content/gcp-cdl/README.md` does not exist (owner: exam-author). Requires close-out or explicit waiver before PUBLISH |
| Licences in/out | | Examiner finding: PASS — repo `LICENSE` (MIT) + `LICENSE-CONTENT` (CC BY 4.0) outbound; no `licensed_import` items inbound, so nothing to discharge |
| format_coverage disclosure | | Examiner finding: PASS — real exam uses 2 of Mockka's 3 formats (a subset, not an excess); `scenario_matching` zeroed and disclosed, MR share + 60-item/70% build disclosed as this mock's judgment |

## Adjudications closed at this gate

<!-- Each 3-flag, content note and bounce survivor: item id → decision (keep / rekey / waiver / replace) → one-line reason.
     Open queue from S5: EMPTY (zero blind-solve misses in either round).
     Seated 3-flags requiring a decision: d1-06 (dim2) · d1-14 (dim5) · d3-11 (dim5) · d5-04 (dim5) · d5-09 (dim5).
     Bounce survivor: d4-10 (r1 source-phrase-reuse, reworked and discharged at r2).
     Content notes: d3-01 (dim1 5->4, true-but-incomplete option D) · d6-01 (RW-1 TCO phrase watch).
     Form-composition call: d6-08, the one convergent concept left in reserve.
     Reserve-only 3-flags (bank health, not this form): d1-01, d1-02, d1-05, d1-08, d1-12, d3-06, d5-05. -->

| Item | Decision | Reason |
|---|---|---|
| `d1-06` (dim2=3, MR) | | |
| `d1-14` (dim5=3) | | |
| `d3-11` (dim5=3) | | |
| `d4-10` (bounce survivor) | | |
| `d5-04` (dim5=3) | | |
| `d5-09` (dim5=3) | | |
| `d3-01` (dim1 note) | | |
| `d6-01` (RW-1 watch) | | |
| `d6-08` (reserved high concept) | | |
| dim5 pitch class (8 bank / 4 seated) | | |

## Waivers

<!-- Any item shipped below the normal bar, with the explicit reason — or "none".
     Examiner expectation: none required by the eval (zero dimensions <=2, zero open bounces,
     no item at bounce 2). The README preflight item needs either close-out or a waiver line
     here if PUBLISH is signed before it lands. The open S1 artefact scrub
     (source-gcp-cdl-samples.md lines 151/157) does not put source text into the bank, but a
     PUBLISH decision that leaves it open should say so here explicitly. -->

## Decision

**PUBLISH / DO NOT PUBLISH.** ____

Signed: ____, ____
