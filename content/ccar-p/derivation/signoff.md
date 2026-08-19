# Gate 2 sign-off · ccar-p

> Pre-filled by exam-examiner at S6 on 2026-08-19. **Verdict cells are blank by design** — they
> are Oliver's to complete. This file is a log, not a certificate: post-publish content changes
> append a new entry rather than editing this one
> ([`06 §status`](../../../methodology/06-provenance-publishing.md#status)).
> Working paper: [`gate2-checklist.md`](gate2-checklist.md) · evidence:
> [`eval-report.md`](eval-report.md).

---

## Entry 1 — first full evaluation of the legacy import

- **Date:** ________ · **Reviewer:** ________ (the human, not an agent)
- **Bank revision:** `questions.json` blob `fd57cb80` (content commit `f0f52b7`) ·
  `selection.json` `form-a` (S6 rebuild, 2026-08-19)
- **Eval artifacts:** blind-solve `0bc1583` / 2026-08-19 · judge-scores `0bc1583` / 2026-08-19 ·
  overlap-report `0bc1583` / 2026-08-19

### Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | examiner: PASS with a partial — no per-source author/URL/date-accessed |
| Provenance chain (spot-check: 1.01, 3.09, 5.11, 7.05) | | examiner: PASS — chain resolves for all 85 |
| Validator | | examiner: PASS — 0 errors, 31 warnings dispositioned |
| Eval thresholds | | examiner: PASS — 0 bounces, 0 open adjudications, S5b ceilings hold both scopes |
| Deep-read sample (all scenario-matching + 10 random + all auto-flagged: 1.01, 1.03, 1.09, 1.13, 1.14, 2.01, 2.09, 3.04, 3.08, 3.09, 3.16, 4.03, 5.02, 5.04, 5.06, 5.07, 5.11, 6.01, 6.05, 7.02, 7.03, 7.05) | | 22 items |
| README statements | | examiner: **OPEN** — `content/ccar-p/README.md` does not exist; blocks the published flip |
| Licences in/out | | examiner: PASS — CC BY 4.0 / MIT out; no licensed imports in |
| format_coverage disclosure | | examiner: **n-a** — real format profile uses only the three supported formats |

### Adjudications closed at this gate

*(Each open blind-solve adjudication, cross-model disagreement, 3-flag and bounce-cap survivor:
item id → decision (keep / rekey / waiver / replace) → one-line reason.)*

| item | why it is here | decision | reason |
|---|---|---|---|
| 1.01 | dim 5 = 3 — key is the only option naming a product ("Claude") | | |
| 1.14 | dim 5 = 3 — the one item fully determined by the rider-elimination cue (bank only) | | |
| 2.01 | dim 5 = 3 — key is the only option naming a tier ("Sonnet") and the longest | | |
| 5.11 | dim 4 = 3 — trim narrowed the key relative to its own rationale (bank only) | | |
| 6.05 | dim 5 = 3 — pitch reads right-vs-wrong | | |
| 7.03 | dim 5 = 3 — sharpest clipped-key/rider-bearing-distractor register gap | | |
| 7.05 | dim 5 = 3 — both keys recoverable by rider elimination alone (bank only) | | |
| — | blind-solve adjudications | **none** | blind solve was 85/85; the queue is empty |
| — | cross-model disagreements | **none recorded** | Codex advisory-skipped — unauthenticated CLI, no matrix built this round |
| — | bounce-cap survivors | **none** | 0 bounces; the cap was not touched |

### Decisions also requested at this gate

| question | decision | reason |
|---|---|---|
| Seating residual: 6 of 8 unseated high-priority concepts have a free swap; the examiner left the recap-only seats in place. Confirm or overturn? | | |
| Re-run the Codex cross-solve before publishing (requires `codex login`), or accept this round without a cross-model check? | | |
| README (preflight item 5) + source-registry fields (item 1) — route to exam-author now, or accept `in_review` and close them before the published flip? | | |

### Waivers

*(Any item shipped below the normal bar, with the explicit reason — or "none".)*

none proposed by the examiner — no dimension scored ≤2 anywhere in the bank.

## Decision

**PUBLISH / DO NOT PUBLISH.** ________________________________________________

Signed: ________________, ____-__-__

---

**Status note.** `manifest.status` remains `in_review` and was **not** modified at S6. Per
[`06 §status`](../../../methodology/06-provenance-publishing.md#status) the flip to `published`
happens only after a PUBLISH decision is recorded above, in its own commit referencing this
sign-off — and preflight item 5 (README) must be closed first.
