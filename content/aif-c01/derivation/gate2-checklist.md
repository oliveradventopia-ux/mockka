# Gate 2 checklist — aif-c01

Assembled by exam-examiner at S6 (`/exam-publish` step 3), 2026-08-16, on the round-2
bank revision (rework commits `ea967ce` + `1b1596c`; S5 round 2 artifacts in `eval/`).
`manifest.status` is now **`in_review`** — the flip to `published` is Oliver's alone,
recorded first in `derivation/signoff.md`. Verdict columns in the sign-off are left
for Oliver; this checklist pre-fills the evidence.

> **Re-pinned 2026-08-19 after the post-S6 cue-rework wave.** The bank under review is now
> `content/aif-c01/questions.json` @ **`f0bf8bc`** (blob `31101a184a`, sha256
> `d6f79f96c82359e9…`) on `fix/cue-rework-wave` — **not** `1b1596c`, which this checklist
> originally pinned. `selection.json` is unchanged (item ids are stable). The eval artifacts
> in `eval/` still date from `79026d8` and were produced against the **pre-wave option text**;
> this exam also took a **key-letter permutation**, so `eval/blind-solve.json`'s letters no
> longer map to the shipping bank. `derivation/signoff.md` §Post-S5 cue-rework wave states what
> moved, what the prior judge scores still cover, and how the deep-read sample was extended
> (19 → **27 items**). Validator count also moved 29 → **34 checks** (cue checks landed after
> S6; all silent). `manifest.status` is still `in_review` — nothing was flipped.

## The 7 preflight checks (methodology/06 §preflight), with evidence

| # | Check | Examiner finding | Evidence |
|---|---|---|---|
| 1 | Source registry complete, with licence basis | **PASS** | `derivation/sources.md` + manifest provenance block: 3 sources (public_blueprint, 2× public_practice_set), each with author, URL basis, access date 2026-08-16, licence/permission basis; machine checks `provenance-sources`, `concept-source-registry`, `source-derivation-link` green |
| 2 | Every concept source-attributed (join chain resolves) | **PASS** | Validator `concept-source-registry` + `source-derivation-link` green on this exact tree; spot-checked at eval: 1.09→C-009, 2.11→C-025, 5.04→C-062 chains resolve to registry + derivation docs |
| 3 | Validator green | **PASS** | `pnpm validate aif-c01` → **34 checks, 0 errors, 0 warnings** on the re-pinned tree `f0bf8bc` (selection built, status in_review). *Count corrected 2026-08-19: this row read "29 checks" against `1b1596c`; the cue-check ratchet landed after S6 and every cue check is silent here.* Includes the original ratchet checks `key-position-distribution` + `answer-length-cue`, both green |
| 4 | Eval artifacts present, thresholds met | **PASS** | `eval/blind-solve.json` (r2: 67/67, zero adjudications open), `eval/judge-scores.json` (r2: zero dimensions ≤2, zero open bounces; bounce cap respected — every item at bounce ≤1), `eval/overlap-report.md` (r2 section: pass), `eval/codex-solve.json` (advisory_skipped recorded — see sample note below). **SINCE RUN — 2026-08-20, after the sign-off: form-a 50/50 agreement with the key, 0 disagreements, 0 unparsed (`eval/codex-solve.json` @ `d9da399`). Advisory, so nothing on this row moves; see §Cross-model column for what the agreement licenses (keys) and what it does not (co-correctness, plausibility, pitch).** Round-1 artifacts preserved as `*-r1.json` |
| 5 | Per-exam README statements present | **OPEN — not written** | `content/aif-c01/README.md` does not exist. Required before the `published` flip (template: methodology/06 §readme-template; the manifest's machine-checked `nda_statement` exists, but the README's provenance/independence/prior-art/non-affiliation/licence sections are human-facing and missing). **Owner: exam-author** (examiner does not author package content beyond its eval/selection surface). Does not block `in_review` |
| 6 | Licences recorded, both directions | **PASS (outbound), PASS (inbound, vacuous)** | Outbound: repo `LICENSE` (MIT, code) + `LICENSE-CONTENT` (CC BY 4.0) exist at root; must also be stated in the package README (folds into item 5). Inbound: zero `licensed_import` items in this bank — `licensed-import-license` green with nothing to discharge |
| 7 | `format_coverage` disclosure present where required | **PASS** | Real exam has 4 item types (MC, MR, ordering, matching); manifest `format_coverage` discloses the ordering gap (authored as single_choice over candidate sequences), the matching approximation (scenario_matching), all-or-nothing scoring, and the 65-in-90 pacing note (15 unscored pretest items not modelled). Confirmed against the Artefact A format analysis |

**Pacing/format disclosures confirmation** (asked for explicitly at this gate): the
manifest carries both — `format_coverage` (above) **and** the two Gate-1-ratified
proxies restated in the manifest `$comment`: `pass_threshold_pct: 70` is a raw-score
proxy for the real scaled 100–1,000/min-700 scoring, and `time_limit_minutes: 90` is
the vendor's 65-question sitting time kept for this 50-item mock (~28% generous).
Both are visible to Oliver at sign-off; the player renders `format_coverage` on the
exam intro page.

## Gate 2 deep-read sample

Per methodology/05 §handoff + /exam-publish step 3: **all scenario-matching + 10
random + every auto-flagged item** — **extended 2026-08-19 to + every item touched by the
cue-rework wave.** Total sample: **27 items** (was 19: 3 SM + 10 random + 3 auto-flags +
3 standing content notes; no double-counting — the lists below are disjoint).

**Wave extension (8 new items).** All 11 reworked items seated on form-a are now in the
sample, plus the 2 reserve-only reworked items, because publication covers the bank:

| Added | Seated? | Wave edit | What to judge |
|---|---|---|---|
| 4.06 | yes | **named entity** — D became "Enabling Amazon SageMaker Model Monitor…" | Real Model Monitor + Clarify does bias drift; D is saved only by its own "distribution drift" premise. Co-correct or not? |
| 3.18 | **no** (reserve) | **named entity** — A became "Re-index the Amazon OpenSearch Service document store…" | The stem never establishes an OpenSearch store; A is now eliminable as scenario-fiction. Rejecting a reserve item is free |
| 3.05 | yes | **named entity** in C + key elaborated with a stem-derived purpose clause | Check the key's appended clause is not the giveaway (this is the stem-echo mechanism) |
| 3.07, 4.02, 4.05, 4.07 | yes | key-side elaboration (lift the key off the shortest rank) | The elaboration must add argument, not surface |
| 4.08, 5.08 | yes | distractor length/entity parity | distractor argued up — check it did not become co-correct |
| 3.11 | **no** (reserve) | key-side elaboration + entities | bank coverage only |

Already both reworked and sampled: 1.08, 2.04, 3.05, 3.09, 4.06.

**The pairing that tells you which items need human reading.** All 8 distractor rewrites in
this wave left their `rationale.distractors` entry **byte-identical** — the refutation was
written against the pre-wave string. Every pair was re-read at this gate and all 8 still land,
but no validator check covers this surface.

**Auto-flagged (round-2 3s — a 3 ships only if this deep-read accepts it):**

| Item | Flag | What to judge | Substitute if rejected |
|---|---|---|---|
| 2.05 | dim2 = 3 | Distractor D ("impress the board") is eliminable without the scenario — is one throwaway option acceptable in an otherwise instructive item? | d2 SC reserves: 2.02, 2.06, 2.10, 2.14 |
| 2.12 | dim2 = 3, dim5 = 3 | Two eliminable options (B disclose, C users-verify) and a right-vs-wrong pitch — the weakest seated item; seated because C-026 (hallucination) is high-priority | d2 SC reserves as above |
| 4.04 | dim2 = 3 | Distractor B (concealment) eliminable without the scenario | d4 SC reserves: 4.03, 4.09 (note 4.09 carries its own content note) |

**Scenario-matching (all three, per the standard sample):** 1.08, 2.04, 3.09.
Standing content notes on two of them: 2.04 s5 (style variants of an existing
image) has a defensible multi-modal second reading the rationale does not address —
examiner's own blind confidence was medium on exactly this cell in both rounds;
3.09 s4 (stored placeholder prompt) has a defensible zero-shot reading against the
keyed "prompt template".

**Round-1 deep-read notes that stand (round-2 dim1 = 4, not auto-flags):**

- **2.03** — the context-vs-prompt-engineering line: D is near-co-correct in
  colloquial usage; the key holds because the team edited instruction text itself.
- **3.08** — B (post-generation moderation) is nearly co-best under a different
  question framing; the stem's "how a working prompt is built" framing is what
  defeats it. Framing-dependent items deserve a human read.
- **4.09** — the rationale's "defending fiction" over-dismisses post-hoc XAI
  (surrogate/attribution methods are used in regulated practice); key C stands on
  the stem's defend-every-decision strictness, but Oliver may want the rationale
  softened post-sign-off (typo-class edit path per §status rule 2, or an author
  pass now).

**10 random (deterministic rule, documented: seated form-a ids sorted, every 5th
starting at index 0):** 1.01, 1.09, 2.01, 2.08, 2.15, 3.05, 3.12, 3.19, 4.06, 5.03.

> **SUPERSEDED 2026-08-20 — the instrument ran.** The paragraph below is the accurate record of
> what was true at the time. The `codex` CLI was authenticated on 2026-08-20 and the cross-solve
> returned **50/50 agreement, 0 disagreements, 0 unparsed** on form-a. See §Cross-model column at
> the end of this sheet for the result and, more importantly, for what it does and does not license.

**Codex status (cross-model signal):** **absent in both rounds** —
`eval/codex-solve.json` records three attempts, all 401 (bundled VS Code binary,
CLI not authenticated; free-first rule bars the examiner from signing in). The
sample above therefore carries **no cross-model dissent column**, and because
author and examiner share Claude weights, a convergent-blind-spot miskey is not
excluded by the 67/67 blind agreement. The deep-read is the compensating control;
if Oliver runs `codex login` before signing off, the retry path in
`eval/codex-solve.json` re-runs the cross-solve on the same keyless form and this
checklist should be updated with the matrix before sign-off.

**Open adjudication queue:** empty (round-2 blind solve had zero misses).

## Bounce ledger (cap = 2)

Round 1: 15 items bounced (`answer-surface-cue`), all reworked in one wave.
Round 2: **zero bounces** — all 15 reworked items re-scored fresh and cleared (dim5
2→4/5); the two items that also carried thin distractor sets (3.07, 3.15) had one
distractor each rebuilt and cleared dim2 3→4. No item is at bounce 2; no cap
breakers; **nothing on this bank requires a waiver.**

## ccar-p latent-defect escalation NOTE (separate decision — does NOT block aif-c01)

The two ratchet checks that came out of this bank's round 1 now run repo-wide. On
the legacy-import package `content/ccar-p` (status `in_review`, "imported legacy
content, servable, unaudited — S5 never ran"), they surface at warn level:
**`key-position-distribution`: 7 findings · `answer-length-cue`: 55 findings** —
the same defect class as aif-c01's BD-2, at scale, in a bank that is currently
servable. Options for Oliver (pick one, separately from this sign-off): (a) run a
ccar-p rework wave + first-ever S5 on that bank; (b) demote ccar-p to `draft` until
audited; (c) accept-and-document (legacy caveat in the ccar-p `$comment` already
covers "unaudited", but it does not name a known test-wiseness solvability defect —
the caveat understates what is now measured). The examiner's recommendation: (b) or
(a); (c) leaves a bank we now *know* is cue-solvable being served.

## What Oliver signs — **SUPERSEDED 2026-08-20**

> He signed it. `derivation/signoff.md` now records PASS on every preflight row,
> the adjudication decisions, the waiver block and a **PUBLISH** decision dated
> 2026-08-20. Preflight item 5 (README) is closed by the file, not waived. The
> paragraph below is the pre-signature statement, kept for the record.

`derivation/signoff.md` is pre-filled with the evidence hashes and this sample
list; verdict columns and the PUBLISH/DO-NOT-PUBLISH decision are blank and his.
Preflight item 5 (README) must close before the `published` flip — a PUBLISH
decision with item 5 open needs either the README landed first or an explicit
waiver line, per methodology/06 ("a sign-off with any preflight verdict at fail
and no covering waiver is not a sign-off").

---

## Gate 2 final pass — 2026-08-20 (re-pin · corrected S5b standard · README closed · sign-off)

**Re-pinned to the shipping revision.** `content/aif-c01/questions.json` @ **`f0bf8bc`** — blob `31101a184a`, sha256 `d6f79f96c82359e9…`, committed 2026-08-19 on `fix/cue-rework-wave`. `selection.json` is unchanged and item ids are stable, so form-a's composition is exactly as seated.

### Content passes landed after the 2026-08-19 re-pin

**None.** `git log` on `content/aif-c01/questions.json` returns nothing after `f0bf8bc`, and a field-level path diff against that revision returns an empty change set. The re-pin below is a re-statement of the standard, not of the bank.

### Preflight rows restated on this revision

| # | Check | Verdict | Evidence at 2026-08-20 |
|---|---|---|---|
| 3 | Validator green | **PASS** | `pnpm validate aif-c01` → **35 checks, 0 errors, 0 warnings** on `f0bf8bc` — zero warnings *(at `published`. The same tree reports 34 at `in_review`: `publication-preflight` is `when: status === 'published'` and runs only after the flip.)* |
| 4 | Eval thresholds, incl. the S5b ceiling | **PASS** | Re-stated below and in `derivation/eval-report.md` §s5b-final. Both scopes clear the corrected ceiling. |
| 5 | Per-exam README statements | **CLOSED — PASS** | `content/aif-c01/README.md` now exists and carries every section methodology/06 §readme-template requires: provenance and independence, prior art, NDA statement, non-affiliation with the named trademark holder, and the outbound licence pair (content CC BY 4.0 / code MIT). *This row read **OPEN — not written** in every previous version of this sheet; it is closed by the file, not waived.* No `licensed_import` items exist in this bank, so the template's Licensed-content section is correctly absent. |

### S5b re-stated against the corrected ceiling

| scope | n | blind (recorded 2026-08-19 → now) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 67 | 23.88% → **26.87%** (18/67) | ≤ 30.14% (random 22.32%) | **0.589** | ≥ 0.522 | **PASS** |
| form-a | 50 | 22.00% → **26.00%** (13/50) | ≤ 28.91% (random 21.41%) | **0.595** | ≥ 0.526 | **PASS** |

The bank is byte-identical to the revision pinned on 2026-08-19, so there is no content delta to attribute: the whole of the movement above is the stronger strategy set. The recorded figure was not wrong for the instrument that produced it; it is superseded because the instrument was.

The two corrections to the instrument — the ceiling now computed by the machine rather than by hand against a pass-mark `ok`, and interior length ranks now inside the committed strategy set — are written out in full in `derivation/eval-report.md` §s5b-final. The **bar is unchanged**; the machine now enforces it and the attacker is stronger.

### Deep-read sample

**Unchanged at 27 items.** No content pass landed after the 2026-08-19 re-pin, so there is nothing new to seat in the sample.

### Residuals a reader should see

- **stem-echo**, uninstrumented: recorded at 42.5% bank / 35.7% form (chance 25%) at the 2026-08-19 re-pin and unchanged, because this bank was not touched again. It remains the strongest surface statistic here and there is still no check or strategy that measures it.
- **key-letter permutation** (`f0bf8bc`): `eval/blind-solve.json`'s recorded letters do not map to the shipping bank. The file is a valid record of the round-2 judgment, not a letter-by-letter map; the deep read is the control.
- **The cross-model eval column now exists** — `advisory_skipped` in every S5 round of this package, but the Codex CLI was authenticated on 2026-08-20 and the run landed: served form, **50/50 agreement, 0 disagreements, 0 unparsed** (`eval/codex-solve.json`). Advisory by design; it did not block then and does not license anything now. It discharges the **key-correctness** half of the convergent-blind-spot worry and leaves the **co-correctness** half fully open — the deep read is still the only control there, and 17 reserve-only items were not solved at all. §Cross-model column below has the reasoning.

## Cross-model column — arrived 2026-08-20, after the sign-off

The `codex` CLI was authenticated on 2026-08-20 and `node tools/codex-crosssolve.mjs aif-c01` ran the
S5 [§codex](../../../methodology/05-eval-rubric.md#codex) advisory cross-solve that every round of
this package had recorded as `advisory_skipped`: **form-a, 50 items, 50/50 agreement with the
answer key, 0 disagreements, 0 unparsed** (`eval/codex-solve.json`). Wave-wide: 465/465 across the
eight exams.

**It arrived after the sign-off and changes nothing on this sheet.** Codex results are advisory and
never blocking; their only enforcement is that a disagreement joins the Gate 2 sample, and there
were none — so the sample, the verdicts and `manifest.status` all stand exactly as recorded.

**Read it precisely.**

| Now carried by evidence | Still carried only by the human deep read |
|---|---|
| The **answer keys** are defensible to a solver that did not write them and never saw the key. The convergent author/examiner misreading §codex exists to catch did not fire on any served item | **Co-correctness** (dim 1) of 8 distractor strings on 8 items the wave argued *up*; **distractor plausibility** (dim 2); **difficulty pitch** (dim 5). The cross-solver reports its best option and was never asked whether a second one also works |
| | The 17 reserve-only bank items — out of scope of a form-scope run |

Agreement is not clearance. By the same argument
[§1b](../../../methodology/05-eval-rubric.md#cue-only-solve) uses to refuse a 100% blind solve as
proof of unexploitability, two capable models agreeing could mean both read the same surface. What
makes this agreement meaningful rather than circular is that the surface is measured separately and
is at chance — S5b blind **26.00% on form-a against a 28.91% ceiling**. The pair is the finding.

The item-level questions this leaves for Oliver are collected in
[`content/GATE2-HUMAN-ONLY.md`](../../GATE2-HUMAN-ONLY.md).
