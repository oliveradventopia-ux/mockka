# Gate 2 checklist — aif-c01

Assembled by exam-examiner at S6 (`/exam-publish` step 3), 2026-08-16, on the round-2
bank revision (rework commits `ea967ce` + `1b1596c`; S5 round 2 artifacts in `eval/`).
`manifest.status` is now **`in_review`** — the flip to `published` is Oliver's alone,
recorded first in `derivation/signoff.md`. Verdict columns in the sign-off are left
for Oliver; this checklist pre-fills the evidence.

## The 7 preflight checks (methodology/06 §preflight), with evidence

| # | Check | Examiner finding | Evidence |
|---|---|---|---|
| 1 | Source registry complete, with licence basis | **PASS** | `derivation/sources.md` + manifest provenance block: 3 sources (public_blueprint, 2× public_practice_set), each with author, URL basis, access date 2026-08-16, licence/permission basis; machine checks `provenance-sources`, `concept-source-registry`, `source-derivation-link` green |
| 2 | Every concept source-attributed (join chain resolves) | **PASS** | Validator `concept-source-registry` + `source-derivation-link` green on this exact tree; spot-checked at eval: 1.09→C-009, 2.11→C-025, 5.04→C-062 chains resolve to registry + derivation docs |
| 3 | Validator green | **PASS** | `pnpm validate aif-c01` → 29 checks, **0 errors, 0 warnings** (run on this tree with selection built and status in_review; output in eval-report round 2). Includes the two new ratchet checks `key-position-distribution` + `answer-length-cue`, both green |
| 4 | Eval artifacts present, thresholds met | **PASS** | `eval/blind-solve.json` (r2: 67/67, zero adjudications open), `eval/judge-scores.json` (r2: zero dimensions ≤2, zero open bounces; bounce cap respected — every item at bounce ≤1), `eval/overlap-report.md` (r2 section: pass), `eval/codex-solve.json` (advisory_skipped recorded — see sample note below). Round-1 artifacts preserved as `*-r1.json` |
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
random + every auto-flagged item.** Total sample: **19 items** (3 SM + 10 random +
3 auto-flags + 3 standing content notes; no double-counting — the lists below are
disjoint).

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

## What Oliver signs

`derivation/signoff.md` is pre-filled with the evidence hashes and this sample
list; verdict columns and the PUBLISH/DO-NOT-PUBLISH decision are blank and his.
Preflight item 5 (README) must close before the `published` flip — a PUBLISH
decision with item 5 open needs either the README landed first or an explicit
waiver line, per methodology/06 ("a sign-off with any preflight verdict at fail
and no covering waiver is not a sign-off").
