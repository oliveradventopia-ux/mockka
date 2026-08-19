# Gate 2 checklist — az-900

Assembled by exam-examiner at S6 (`/exam-publish` step 3), 2026-08-18, on the S5
round-1 bank revision (`questions.json` @ `f649943`; eval artifacts @ `c14fd1a`;
`selection.json` built in this S6 commit). `manifest.status` is now **`in_review`** —
the flip to `published` is Oliver's alone, recorded first in `derivation/signoff.md`.
Verdict columns in the sign-off are left for Oliver; this checklist pre-fills the
evidence.

> **Re-pinned 2026-08-19 after the post-S6 cue-rework wave.** The bank under review is now
> `content/az-900/questions.json` @ **`9c1adb4`** (blob `6fe6673ef2`, sha256
> `65074281b8e48039…`) on `fix/cue-rework-wave` — **not** `f649943`/blob `4d5d227`, which this
> checklist originally pinned. `selection.json` is unchanged (item ids are stable). The eval
> artifacts in `eval/` still date from `c14fd1a` and were produced against the **pre-wave option
> text**; this exam also took a **key-letter permutation**, so `eval/blind-solve.json`'s letters
> no longer map to the shipping bank. `derivation/signoff.md` §Post-S5 cue-rework wave states
> what moved, what the prior judge scores still cover, the re-measured S5b numbers, and how the
> deep-read sample was extended (30 → **40 items**). Validator count also moved 30 → **34
> checks** (four cue checks landed after S6; all silent). `manifest.status` is still
> `in_review` — nothing was flipped.

## Exam form built at this stage

`selection.json` form-a — **50 items**: d1 14 (12 SC + 1 MR + 1 SM) · d2 19 (16+2+1) ·
d3 17 (14+2+1), exactly the manifest's per-domain counts and format mix. **46 of the 49
high-priority (convergent) concepts are seated**; the 4 normal-priority seats and the 3
reserved highs are argued item by item in the `selection.json` `$comment` (hand-adjustments
1–5). 15 reserve-only concepts = bank 65 − exam 50, as `selection-shape` requires.
Selection did **not** use the BO-1 echo flag as a criterion — see open decision 1.

## The 7 preflight checks (methodology/06 §preflight), with evidence

| # | Check | Examiner finding | Evidence |
|---|---|---|---|
| 1 | Source registry complete, with licence basis | **PASS (one residual risk, carried from Gate 1)** | `derivation/sources.md` §Registered sources: 5 entries, each with type, author, URL, `date_accessed` 2026-08-16, licence/permission basis and usage constraint; §Excluded records the ExamTopics corpus + nine mirrors, the Ditectrev dump, two MIT repos that re-host it, a paywalled bank — screened by content, method recorded. Machine checks `provenance-sources`, `concept-source-registry`, `source-derivation-link` green. **Residual:** `insidecloud-az900` carries no named individual author (`[UNVERIFIED]`) and no licence statement — basis is free public publication + classification-only use (Gate 1 check 5; open decision 6 below) |
| 2 | Every concept source-attributed (join chain resolves) | **PASS** | Validator `concept-source-registry` + `source-derivation-link` green on this exact tree. S6 spot-check, chains re-walked by hand: C-001→`az900-studyguide` b-1.1-1 + `ms-learn` 1.1; C-043 (2.25)→b-2.4-8 + `insidecloud` 2.22/2.48/2.49; C-054 (3.11 SM)→b-3.2-2/3 + `ms-learn` 3.4/3.5 + `insidecloud` 3.13/3.14/3.20; C-057 (3.14)→b-3.3-3 + `ms-learn` 3.6; C-062 (3.19)→b-3.4-3 + `tutorialsdojo` 3.1 + `insidecloud` 3.11. All resolve to registered ids with a derivation doc |
| 3 | Validator green | **PASS** | `pnpm validate az-900` → **34 checks, 0 errors, 5 warnings** on the re-pinned tree `9c1adb4` (*count corrected 2026-08-19 from "30 checks"; the four cue checks that landed after S6 are all silent*) (status `in_review`, selection built). The 5 warnings are `concept-convergence` on C-001, C-012, C-057, C-058, C-061 — the *exactly five intended* same-author WARNs ratified at Gate 1 (checklist check 7b: two Microsoft artefacts count as one author, so these concepts are hand-set `priority: normal` while the machine computes `high`). Any different WARN set would be a defect. Ratchet checks `key-position-distribution` + `answer-length-cue` (born from aif-c01 round 1) both green |
| 4 | Eval artifacts present, thresholds met | **PASS** | `eval/blind-solve.json` (65/65, 64 high / 1 medium confidence, **zero misses → zero open adjudications**), `eval/judge-scores.json` (65 items × 6 dimensions, 65 written distractor cases, **zero dimensions ≤2**, `bounces: []`), `eval/overlap-report.md` (process-control pass). Bounce cap untouched — no item has ever bounced. The Codex advisory record lives **inside** `blind-solve.json` → `codex_cross_solve` (aif-c01 used a separate `codex-solve.json`; both satisfy methodology/06 item 4, which asks for the matrix *or* the recorded unavailability note) |
| 5 | Per-exam README statements present | **OPEN — not written** | `content/az-900/README.md` does not exist. Required before the `published` flip (template: methodology/06 §readme-template — provenance, prior art, NDA, non-affiliation, licence). The manifest's machine-checked `nda_statement` and the intro `disclaimer` both exist and already carry the substance; what is missing is the human-facing package README that cites them. **Owner: exam-author** — the examiner does not author package content beyond its `eval/` + `selection.json` surface. Does not block `in_review`. **Model to copy: `content/aif-c01/README.md`**, which landed after that exam's S6 (commit `f5a877f`) and follows the §readme-template sections |
| 6 | Licences recorded, both directions | **PASS (outbound), PASS (inbound, vacuous)** | Outbound: repo `LICENSE` (MIT, code) + `LICENSE-CONTENT` (CC BY 4.0, content) exist at root; the per-package restatement folds into item 5. Inbound: **zero `licensed_import` items** — no occurrence anywhere in the package's JSON; `licensed-import-license` green with nothing to discharge. All five registered sources are read-only classification inputs, never imported text |
| 7 | Intro block complete + `format_coverage` disclosure where required | **PASS** | `intro-presence` green: all five fields present (`about`, `audience`, 3 × `materials`, 3 × https `official_resources`, `disclaimer`). `format_coverage` **is required** — the Artefact A format analysis shows the real exam exceeds the three supported formats — and is present and specific: MC→`single_choice`; multi-select→`multiple_response`; drag-and-drop→`scenario_matching`; hot area→all-or-nothing `multiple_response` (loses the per-statement No branch); build list→`single_choice` over orderings; **active screen, case studies and the problem-solution *series* explicitly not represented**. Two scoring divergences disclosed alongside: real partial credit vs this mock's all-or-nothing MR, and the scaled 1–1,000/min-700 score vs the 70% bar |

**Modelled-number disclosures confirmed at this gate** (they are the Gate-1 items that
survive into publication): `exam.item_count: 50` is the midpoint of Microsoft's
program-level 40–60 band, `pass_threshold_pct: 70` is a raw-score proxy for the scaled
700-of-1,000 mark Microsoft says "may not equal 70% of the points", and `weight_pct`
28/38/34 are published-band midpoints normalised ×100/97.5 (each still inside its band).
All three are stated in the manifest `$comment`, the intro page and `format_coverage`;
`time_limit_minutes: 45` is the vendor's real exam time kept against the modelled 50 items.

## Gate 2 deep-read sample — **40 items** (was 30; 39 on form-a)

Per methodology/05 §handoff (every auto-flagged item) ∪ `/exam-publish` step 3 (all
scenario-matching + 10 random) ∪ **every item touched by the 2026-08-19 cue-rework wave**
(added at the re-pin). The lists are disjoint.

**D · Wave extension (10 new items).** All 19 reworked items seated on form-a are now in the
sample, plus the 1 reserve-only reworked item not already flagged, because publication covers
the bank:

| Added | Seated? | Wave edit | What to judge |
|---|---|---|---|
| 2.17 | yes | **named entity** — Data Box distractor now ships "into Azure Files on a repeating schedule" | B echoes the stem's own target and survives only on "repeating schedule" vs "continuously" |
| 3.16 | yes | **named entity** — distractor C enumerates "the portal, Azure CLI and Azure PowerShell" | Check the enumeration is not doing the discriminating work |
| 2.08 | yes | **named entity** — "managed instances" → "managed Windows desktops" | Confirm the added word creates no give-away contrast |
| 3.03, 3.08 | yes | **key-side** justification riders seated | The rider must add argument, not surface — this is the stem-echo mechanism |
| 1.04, 1.08, 1.09, 2.01, 2.07, 2.20 | yes | distractor length parity | distractor argued up — check it did not become co-correct |
| 2.18 | **no** (reserve) | AzCopy named into a distractor | bank coverage; rejecting a reserve item is free |

Already both reworked and sampled: 1.15, 1.18, 2.08, 2.14, 2.17, 3.04, 3.06, 3.11, 3.18, 3.19,
3.22 (3.06 is also a key-side rider seat).

**The pairing that tells you which items need human reading.** All 20 distractor rewrites in this
wave left their `rationale.distractors` entry **byte-identical** — the refutation was written
against the pre-wave string. Every pair was re-read at this gate and all 20 still land, but no
validator check covers this surface.

**A · Auto-flagged (17 — every item carrying any dimension-3 score; a 3 ships only if this
deep-read accepts it).** 12 are seated on form-a; 5 are reserve-only and can be judged
last, since rejecting them costs nothing:

| Item | On form? | Flag | What to judge |
|---|---|---|---|
| 2.25 | seated | dim1 = 3, dim5 = 3, dim6 = 4 | **BO-2, the one genuine correctness question in the bank.** `Azure Security Center` is used as a retired-name distractor for the keyed `Microsoft Defender for Cloud` — it loses on vocabulary currency, not on the concept's own terms. Also the bank's only capability-list stem and only bare-product-name options. Substitutes if rejected: d2 SC reserves 2.02, 2.10, 2.19 |
| 3.12 | reserve | dim4 = 3 | Option B's rationale argues a self-review idea in vocabulary the AZ-900 syllabus does not carry — untraceable to study material. Already reserved off form-a |
| 3.13 | reserve | dim2 = 3, dim5 = 3 | Option D ("ask the platform team") is eliminable without engaging the scenario. Already reserved off form-a |
| 1.16 · 2.08 · 2.17 · 2.22 · 3.04 · 3.07 · 3.17 · 3.19 · 3.20 · 3.21 · 3.22 | seated (11) | dim5 = 3 | **All one question, asked eleven times: BO-1 functional echo** — the keyed option restates the stem's operative requirement in near-identical vocabulary and no distractor contests those words, so lexical matching can win without product knowledge. Rule on BO-1 once (open decision 1) rather than item by item |
| 2.21 · 3.05 · 3.18 | reserve (3) | dim5 = 3 | Same BO-1 pattern, off form-a |

Counter-measure models already in the bank, for calibration while reading the above:
**3.08** (option A) and **3.09** (option C) each make the *same claim as the key in the
stem's own words* and force real product knowledge — both scored dim5 = 4.

**B · All scenario-matching items (3, all seated):** **1.18** (IaaS/PaaS/SaaS placement),
**2.14** (Azure Files/SMB), **3.11** (governance control per requirement — the cross-bullet
synthesis concept C-054). None carries a flag; they are in the sample because
scenario-matching is the format with the most room for a defensible second reading.

**C · 10 random (deterministic rule, documented so it is reproducible):** seated form-a ids
sorted, every 5th starting at index 0; when a pick is already in list A or B, advance to the
next unsampled index (wrapping once) so the ten are genuinely unflagged spot-audits →
**1.01, 1.02, 1.06, 1.15, 2.03, 2.09, 2.15, 2.23, 3.06, 3.10**. (Raw picks 2.08, 3.04, 3.17
collided with list A; the tail of the form is BO-1-dense, hence the single wrap to 1.02.)

**Suggested reading order if time is short:** 2.25 → the three SM items → the ten random →
one representative BO-1 item (3.21 is the clearest instance) → the rest of list A only if
the BO-1 ruling is "unacceptable".

## Codex status (cross-model signal)

**Absent this round.** `eval/blind-solve.json` → `codex_cross_solve` records four probes:
`codex` not on PATH; the VS Code extension's bundled `codex-cli 0.148.0-alpha.9` found;
`codex login status` → "Not logged in"; `codex exec` → 401 Unauthorized. Authenticating is
an account action outside this session's authority (free-first). **Consequence, stated
plainly:** author and examiner share Claude weights, so 65/65 blind agreement does *not*
exclude a miskey both models prefer — this deep-read is the compensating control and
carries that extra load. Retry path: if Oliver runs `codex login` before signing, the same
keyless form is regenerable from `questions.json` and the matrix can be filled in without
re-running S5.

## Bounce ledger (cap = 2)

**Empty.** Round 1 produced zero bounces — no item scored ≤2 on any dimension, so nothing
was returned to exam-author and no item is at bounce 1, let alone the cap. **No waiver is
required by the eval.** The aif-c01 round-1 defect classes (key-position constancy,
answer-length cue) are absent here: SC keys A 15 / B 14 / C 14 / D 14, MR key pairs all
distinct, SM maps never in listed order, keyed-vs-longest-distractor median 0.99 with the
keyed option *shortest* in 9 of 57.

## Open decisions for Oliver

1. **BO-1 — functional echo (bank-wide, 16 items; 12 on form-a).** Accept at AZ-900
   "describe" altitude, or make the 3.08/3.09 counter-measure an authoring rule? Examiner
   position: not a defect (distractors are real, discrimination is genuine for a candidate
   reasoning from concepts, and `format_coverage` commits this exam to recognition items) —
   which is why it was *not* bounced and why selection deliberately did not dodge it.
   If ruled unacceptable, the ratchet proposal is an authoring-guide rule first (flag any SC
   item whose keyed option shares ≥N content-word bigrams with the stem while no distractor
   shares any), promoted to a validator check only if a second exam shows the class.
2. **BO-2 — item 2.25.** Keep `Azure Security Center` as a retired-name distractor (the
   2026-07-20 outline knows only the successor, and recognising retired names is legitimate
   exam content), or replace it with a genuine near-neighbour service. **Examiner leans
   accept-with-note.** If Gate 2 wants exactly one item reworked this round, it is this one.
3. **Codex cross-solve** — sign off without a cross-model column, or run `codex login` first
   and have the matrix filled in (no S5 re-run needed).
4. **README (preflight item 5)** — land `content/az-900/README.md` before the `published`
   flip, or record an explicit waiver line in the sign-off. A PUBLISH decision with item 5
   open and no waiver is not a sign-off (methodology/06 §signoff-template).
5. **Gate 1 decisions carried forward** — ratified 2026-08-17 by batch "Approve all", with
   that sign-off expressly allowing amendment at Gate 2: (a) **Microsoft Learn account** —
   still declined, so the vendor's own Tier-1 practice assessment remains unread; it is the
   only source that could corroborate the 11 blueprint-only concepts and calibrate format
   mix; (b) 50-item exam length, (c) 70% pass proxy, (d) bank 65 = 1.30×, (e) the format
   approximations now disclosed in `format_coverage`. Nothing found at S5/S6 argues against
   any of them; (a) is the one whose default keeps a documented evidence gap open.
6. **Residual source risk** — `insidecloud-az900` (no named author, no licence statement;
   free public page, classification-only use, screened clean against the dump corpus).
   Accept as registered, or drop it from the registry at the cost of the convergence
   evidence for the concepts it corroborates.
7. **Format-mix confidence (Gate 1 check 7c)** — every format-mix number is low-confidence:
   135 of 145 accessible practice items are single choice, and only the 10-item Tutorials
   Dojo sampler demonstrates Microsoft's non-MC shapes. Exit is decision 5(a).

Informational, no decision needed: **BO-3** (13 scenario verticals reused across two
domains). The one pair carrying a mild cross-item tension — county courthouse, 1.13
pre-adoption vs 3.10 running an Azure estate — does **not** co-occur on form-a: 1.13 is
reserved. The other eight co-seated verticals were re-read at S6 and are mutually
consistent.

**Repo-level item, unrelated to this exam and not part of this sign-off:** the ccar-p
latent-defect escalation raised in `content/aif-c01/derivation/gate2-checklist.md` is still
open (ccar-p remains `in_review` with 7 `key-position-distribution` + 55 `answer-length-cue`
warn findings on an unaudited legacy bank).

## What Oliver signs

`derivation/signoff.md` is pre-filled with the revision hashes, the checklist findings and
this sample list; **verdict columns, the adjudication decisions, waivers and the
PUBLISH / DO-NOT-PUBLISH decision are blank and his.** Preflight item 5 (README) must close
before the `published` flip.
