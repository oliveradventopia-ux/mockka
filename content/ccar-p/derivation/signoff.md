# Gate 2 sign-off · ccar-p

> Pre-filled by exam-examiner at S6 on 2026-08-19. **Verdict cells are blank by design** — they
> are Oliver's to complete. This file is a log, not a certificate: post-publish content changes
> append a new entry rather than editing this one
> ([`06 §status`](../../../methodology/06-provenance-publishing.md#status)).
> Working paper: [`gate2-checklist.md`](gate2-checklist.md) · evidence:
> [`eval-report.md`](eval-report.md).

---

## Entry 1 — first full evaluation of the legacy import

- **Date:** 2026-08-19 · **Reviewer:** Oliver Lau (principal)
- **Bank revision:** `questions.json` blob `fd57cb80` (content commit `f0f52b7`) ·
  `selection.json` `form-a` (S6 rebuild, 2026-08-19)
- **Eval artifacts:** blind-solve `0bc1583` / 2026-08-19 · judge-scores `0bc1583` / 2026-08-19 ·
  overlap-report `0bc1583` / 2026-08-19

### Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | **PASS** | examiner: PASS with a partial — no per-source author/URL/date-accessed |
| Provenance chain (spot-check: 1.01, 3.09, 5.11, 7.05) | **PASS** | examiner: PASS — chain resolves for all 85 |
| Validator | **PASS** | examiner: PASS — 0 errors, 31 warnings dispositioned |
| Eval thresholds | **PASS** | examiner: PASS — 0 bounces, 0 open adjudications, S5b ceilings hold both scopes |
| Deep-read sample (all scenario-matching + 10 random + all auto-flagged: 1.01, 1.03, 1.09, 1.13, 1.14, 2.01, 2.09, 3.04, 3.08, 3.09, 3.16, 4.03, 5.02, 5.04, 5.06, 5.07, 5.11, 6.01, 6.05, 7.02, 7.03, 7.05) | | **PASS** | 22 items reviewed in the UAT of 2026-08-19 |
| README statements | **PASS** | examiner: **OPEN** — `content/ccar-p/README.md` does not exist; blocks the published flip |
| Licences in/out | **PASS** | examiner: PASS — CC BY 4.0 / MIT out; no licensed imports in |
| format_coverage disclosure | **n/a** | examiner: **n-a** — real format profile uses only the three supported formats |

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
| — | cross-model disagreements | **none recorded** | Codex advisory-skipped at S5 — unauthenticated CLI, no matrix built this round. **Re-run 2026-08-20 after this sign-off: 63/63 agreement, 0 disagreements, so still none to add** (§Addendum A) |
| — | bounce-cap survivors | **none** | 0 bounces; the cap was not touched |

### Decisions also requested at this gate

| question | decision | reason |
|---|---|---|
| Seating residual: 6 of 8 unseated high-priority concepts have a free swap; the examiner left the recap-only seats in place. Confirm or overturn? | | |
| Re-run the Codex cross-solve before publishing (requires `codex login`), or accept this round without a cross-model check? | accepted without the check | Published 2026-08-19 with no cross-model column. **The check was then run on 2026-08-20 — 63/63 agreement, 0 disagreements — which corroborates the decision rather than changing it.** §Addendum A |
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


---

## Verdict — Entry 1

**PUBLISH.** Signed off by Oliver Lau on 2026-08-19 following the content UAT of the six new
exams and the remediated CCAR-P (`UAT/HUMAN-UAT-2026-08-19-new-exams.md`).

Recorded at sign-off:
- The two examiner-flagged preflight items were closed before this verdict: `README.md` written
  and the source registry given per-source author/URL/access metadata (commit `97effb6`).
- **Item 5.11's narrowing is accepted as-is** — the key reads "every subprocessor in the data
  path" where the rationale argues the wider component claim. Reviewed in UAT section D3 and
  judged acceptable; logged so a future wave can reword it rather than rediscover it.
- The 31 remaining validator warnings (27 concept-convergence, 2 rider-balance, 2
  named-entity-parity) are documented next-wave scope, not defects blocking this gate.
- Form seating left as the examiner built it: 39 of 47 high-priority concepts seated; the six
  available swaps were not taken because they would displace recap-only concepts.

---

## Addendum A — cross-model column, recorded 2026-08-20 after the sign-off

**This addendum adds evidence to the decision above. It does not change it.** The verdict, the
checklist verdicts, the adjudications, the waivers and `manifest.status` are exactly as signed.

The `codex` CLI was authenticated on 2026-08-20 (ChatGPT auth, no per-request billing), so the S5
advisory cross-solve recorded as `advisory_skipped` throughout this package's history has now run.
`node tools/codex-crosssolve.mjs ccar-p` served form-a keyless to a different model family and diffed
the answers against the key: **63/63 agreement, 0 disagreements, 0 unparsed**
(`eval/codex-solve.json` @ `d9da399`; wave-wide 465/465 across the eight exams).
[Methodology/05 §codex](../../../methodology/05-eval-rubric.md#codex) makes a disagreement the only
thing that acts — it adds the item to the Gate 2 sample. There were none, so nothing was added and
nothing was re-opened.

**What it strengthens.** The decision above was taken with the cross-model column absent and the
human deep read named as the compensating control. An independent model family has now reached the
same key on every served item, so the **key-correctness** half of that control is corroborated
rather than resting on a same-family blind solve.

**What it does not touch.** It says nothing about co-correctness, distractor plausibility or pitch:
the cross-solver reports its best option and was never asked whether a second option also holds.
This exam was not in the cue-rework wave, so no distractor here was argued up; the standing dimension-5 flags and item 5.11's accepted narrowing are untouched by this run. The deep read remains the sole control there. And by the same argument
[§1b](../../../methodology/05-eval-rubric.md#cue-only-solve) makes about the blind solve, agreement
between two capable models could in principle mean both read the same surface rather than the
subject; it reads as evidence about the subject here only because the surface is measured
separately and is at chance (S5b form-a **23.81% ≤ 26.60%**). The 22 reserve-only items were
not solved at all.

Full reasoning: [`eval-report.md`](eval-report.md) §Cross-model column. The human-only questions
this leaves open across the wave: [`content/GATE2-HUMAN-ONLY.md`](../../GATE2-HUMAN-ONLY.md).
