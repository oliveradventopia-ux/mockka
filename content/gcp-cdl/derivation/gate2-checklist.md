# Gate 2 checklist — gcp-cdl

Assembled by exam-examiner at S6 (`/exam-publish` step 3), 2026-08-18, on the round-2
bank revision (rework commit `42fbd3f`; S5 round-2 artifacts in `eval/`, committed
`252c4fb`). `manifest.status` is now **`in_review`** — the flip to `published` is
Oliver's alone, recorded first in `derivation/signoff.md`. Verdict columns in the
sign-off are left for Oliver; this checklist pre-fills the evidence.

> **Re-pinned 2026-08-19 after the post-S6 cue-rework wave.** The bank under review is now
> `content/gcp-cdl/questions.json` @ **`56c9db4`** (blob `5aaa81d3f1`, sha256
> `ea3b5980d44f9243…`) on `fix/cue-rework-wave` — **not** `42fbd3f`, which this checklist
> originally pinned. `selection.json` is unchanged (item ids are stable). The eval artifacts in
> `eval/` still date from `252c4fb` and were produced against the **pre-wave option text**;
> `derivation/signoff.md` §Post-S5 cue-rework wave states what moved, what the prior judge
> scores still cover, the re-measured S5b numbers, and how the deep-read sample was extended
> (24 → **38 items**). Validator count also moved 30 → **34 checks** (four cue checks landed
> after S6; all silent). `manifest.status` is still `in_review` — nothing was flipped.

## The 7 preflight checks (methodology/06 §preflight), with evidence

| # | Check | Examiner finding | Evidence |
|---|---|---|---|
| 1 | Source registry complete, with licence basis | **PASS** | `derivation/sources.md` §Registered sources: 5 entries (2× `public_blueprint`, 2× `public_practice_set`, 1× `public_syllabus`), each carrying type, named author, URL, `date_accessed` 2026-08-16, licence/permission basis and usage constraint. The 5th (`google-skills-cdl-path`) is registered **metadata-only, content never accessed** — registered so the gap is visible, contributing nothing to the inventory (Gate-1 decision 1, still open below). Excluded-source screening is recorded with evidence, not just its outcome (dump corpus checked by content, ids 1/9/13 for whizlabs). Machine: `provenance-sources`, `concept-source-registry`, `source-derivation-link` all green |
| 2 | Every concept source-attributed (join chain resolves) | **PASS** | Validator `concept-source-registry` + `source-derivation-link` green on this exact tree (83/83 concepts attributed). Spot-checked by hand at S6: `d1-04`→C-004→{guide, samples}, `d3-11`→C-041→{guide, whizlabs}, `d5-09`→C-069→{guide, samples, whizlabs}, `d6-01`→C-076→{guide, samples} — every artefact id resolves to a registry entry **and** to an existing `derivation/source-*.md`. Zero `licensed_import` items in the bank: all 83 are originally authored |
| 3 | Validator green | **PASS** | `pnpm validate gcp-cdl` → **34 checks, 0 errors, 0 warnings** on the re-pinned tree `56c9db4` with `form-a` built (*count corrected 2026-08-19 from "30 checks"; the four cue checks that landed after S6 are all silent*). Before S6 the only failures were `selection-shape` (8) + `selection-format-mix` (12) on the empty placeholder form; both now pass, as do `selection-concept-uniqueness`, `key-position-distribution` and `answer-length-cue`. Nothing was dispositioned as an accepted warning — there are none |
| 4 | Eval artifacts present, thresholds met | **PASS** | `eval/blind-solve.json` (r2: **83/83**, high confidence on all 83, zero misses ⇒ empty adjudication queue), `eval/judge-scores.json` (r2: 498 dimension scores — 404 fives / 81 fours / **13 threes across 12 items**, **zero ≤2**, zero open bounces), `eval/overlap-report.md` (r2: zero findings; r1 finding O-1 discharged), `eval/codex-solve.json` (`advisory_skipped` — see the cross-model note below). **SINCE RUN — 2026-08-20, after the sign-off: form-a 60/60 agreement with the key, 0 disagreements, 0 unparsed (`eval/codex-solve.json` @ `d9da399`). Advisory, so nothing on this row moves; see §Cross-model column for what the agreement licenses (keys) and what it does not (co-correctness, plausibility, pitch).** Round-1 artifacts preserved as `*-r1.*`. Bounce ledger: r1 = 1 bounce (`d4-10`), r2 = 0; no item above bounce 1, cap (2) respected, **no waiver required**. Machine dry-run of `publication-preflight` (it only runs at `status: published`) returns clean on every clause except the sign-off file itself, which is Oliver's half |
| 5 | Per-exam README statements present | **OPEN — not written** | `content/gcp-cdl/README.md` does not exist (`content/aif-c01/README.md` is the worked precedent). Required before the `published` flip: provenance/independence, licensed-content (n/a here), prior-art credit (Google's own sample set + Whizlabs, both classification-only), NDA, non-affiliation with Google LLC, licence. The manifest's machine-checked `nda_statement` **is** present and complete, and the `intro.disclaimer` carries the candidate-facing version — the missing artefact is the repo-facing README. **Owner: exam-author** (the examiner does not author package content beyond its eval/selection surface). Does not block `in_review` |
| 6 | Licences recorded, both directions | **PASS (outbound), PASS (inbound, vacuous)** | Outbound: repo `LICENSE` (MIT, code) + `LICENSE-CONTENT` (CC BY 4.0, content) exist at root; the per-package statement folds into item 5. Inbound: **zero `licensed_import` items** — every item is originally authored, so `licensed-import-license` is green with nothing to discharge, and no attribution obligation exists to satisfy. Both practice sources are `classification-only` under the clean-room rule and are credited as prior art, not licensed in |
| 7 | `format_coverage` disclosure present where required | **PASS** | The Artefact A/B format analysis says the real exam uses exactly **two** formats (multiple choice, multiple select) — a *subset* of Mockka's three, so nothing on the real paper goes unrepresented. The manifest's `format_coverage` says exactly that, and additionally discloses the two soft spots: the ~10% multiple-select share is Mockka's judgment (vendor publishes no split; the official 29-item sample set is 100% single choice), and the 60-item/70% build is the published 50–60 upper bound plus a Mockka pass standard (Google publishes pass/fail only). `manifest.intro` is complete (all five fields); `intro-presence` green |

## The exam form — `form-a`

60 items: **d1 10 · d2 11 · d3 11 · d4 11 · d5 11 · d6 6**, each domain 1 multiple_response
and the rest single_choice, `scenario_matching` 0 throughout (no real-exam counterpart).
**29 of 30 convergent (`priority: high`) concepts are seated**; 23 concepts are reserve-only,
which is the bank/exam delta exactly. All 14 blueprint objectives are represented. The full
seating rationale and six documented hand-adjustments are in `selection.json`
(`forms[0].notes`); the three Oliver may want to weigh are:

- **`d6-08` (four golden signals) is the one convergent concept left in reserve** — d6 holds 7
  high-priority concepts for 6 seats, so a high-vs-high drop was unavoidable. Chosen because it
  is the most engineer-pitched of d6's three reliability items in a describe-and-explain
  certification, and because a 4/2 split across objectives 6.1/6.2 is bullet-proportional.
- **d1's five fill seats all went to judge-clean normals**, so the five d1 normal-priority items
  carrying a round-2 3 sit in reserve. Cost, stated plainly: form-a has no item on b-1.1-1
  (foundational term discrimination), b-1.1-2 (agentic AI *as a definition* — seated `d3-03`
  tests agentic AI by business function), b-1.1-5, b-1.1-8 or b-1.2-2.
- **Five 3-flagged items are still seated**, all by the high-priority rule (`d1-06`, `d1-14`,
  `d3-11`, `d5-04`, `d5-09`). Every one is in the deep-read below with a named substitute.

## Gate 2 deep-read sample

Per methodology/05 §handoff + `/exam-publish` step 3: **all scenario-matching + 10 random +
every auto-flagged item.** Scenario-matching contributes **zero** (the format is absent by
design). **Extended 2026-08-19 to 38 items** — the S6 core of 24 (13 auto-flagged: 6 seated,
7 reserve-only; 10 random from the seated form; 1 standing content note) **plus every item
touched by the cue-rework wave** (14 new). The lists are disjoint.

**Wave extension (14 new items).** All 11 reworked items seated on form-a are now in the
sample, plus the 4 reserve-only reworked items, because publication covers the bank:

| Added | Seated? | Wave edit | What to judge |
|---|---|---|---|
| `d5-12` | yes | **named entity** — C now says "Google Security Command Center" | Not a canonical Google brand, and inconsistent with `d5-14` C in the same bank. One word — the only string the examiner would send back |
| `d3-10` | yes | **named entity** — C's E08 fiction became "Agent Registry, the Google Cloud Console catalog" | Now asserts a specific false fact about the Console; freshness risk if Google ships an agent registry |
| `d5-14` | yes | **named entity** — "Security Command Center" named in | Canonical here; judge the pair with `d5-12` for candidate-facing consistency |
| `d2-08` | yes | similarity fix — C/D Jaccard 1.000 → 0.000 | **Substantive, not tokenizer evasion**: the old collision came from `shingles()` dropping tokens ≤3 chars, collapsing "Non-relational" onto "Relational". Confirm the semantics still oppose |
| `d2-15` | yes | **named entity** — "Cloud Storage" named in | specificity parity only |
| `d2-12` | yes | **named entity** — "BigQuery" named in | already in the random 10; re-read against the new string |
| `d1-09`, `d2-13`, `d5-15`, `d6-03`, `d6-07` | yes | length parity (`d6-03` A also lost a rider) | distractor argued up — check it did not become co-correct; `d6-03`'s rider deletion is why form `rider-marks-key` moved 28.6% → 33.3% |
| `d3-14`, `d4-12`, `d4-15`, `d6-04` | **no** (reserve) | entities BigQuery / Kubernetes / Google / Compute Engine named in | bank coverage; rejecting a reserve item is free |

Not one of the 22 edited strings is a keyed option — the key text a candidate sees is exactly
what S5 round 2 judged. **The pairing that tells you which items need human reading:** all 22
distractor rewrites left their `rationale.distractors` entry **byte-identical**, so each is
refuted by an argument written against the pre-wave string. All 22 pairs were re-read at this
gate and still land, but `rationale-anti-drift` does not test this surface.

**Auto-flagged and SEATED on form-a** (a 3 ships only if this deep-read accepts it):

| Item | Flag | What to judge | Substitute if rejected |
|---|---|---|---|
| `d1-06` (MR) | dim2 = 3 | Multi-select on non-cost cloud benefits; one wrong option is disarmed by the stem's own wording rather than by the concept | **None same-format** — d1 has exactly one MR item in the bank. Rejection means an MR gap in d1, i.e. an S4 authoring request |
| `d1-14` | dim5 = 3 | Regions/zones/edge tiers — right-vs-wrong pitch: the surface hands the geography answer over | d1 SC reserves: `d1-01`, `d1-02`, `d1-05`, `d1-08`, `d1-12` (all carry their own 3) |
| `d3-11` | dim5 = 3 | Modality→API matching (Vision/Translation/Speech); recall pitch rather than good-vs-best | d3 SC reserves: `d3-04`, `d3-06`, `d3-12`, `d3-14` |
| `d4-10` | **bounce survivor** (r1 O-1, discharged) | Cloud Run item whose `rationale.correct` was re-expressed to drop vendor sample-item phrasing. Read the rationale as reworked; r2 re-score was 5/4/5/5/4/5 | d4 SC reserves: `d4-04`, `d4-05`, `d4-12`, `d4-15` |
| `d5-04` | dim5 = 3 | Confidentiality/integrity/availability told apart — the stem negates each wrong option in turn, so the key is reachable by matching negations | d5 SC reserves: `d5-05` (itself flagged), `d5-06`, `d5-10`, `d5-11` |
| `d5-09` | dim5 = 3 | The three A's (authentication/authorization/accounting); same negation-matching shape as `d5-04` | d5 SC reserves as above |

**Auto-flagged and RESERVE-ONLY** (not on the served paper; judge them for bank health, not
for this form): `d1-01` (dim2 + dim5), `d1-02` (dim5), `d1-05` (dim2), `d1-08` (dim2),
`d1-12` (dim5), `d3-06` (dim2 — the construction behind ratchet R-3), `d5-05` (dim5).

**10 random (deterministic rule, documented: seated `form-a` ids sorted, every 6th starting at
index 0):** `d1-03`, `d1-11`, `d2-05`, `d2-12`, `d3-05`, `d3-13`, `d4-07`, `d4-14`, `d5-08`,
`d6-01`.

**Standing content note (round-2 scoring, not an auto-flag):**

- **`d3-01`** — dim1 lowered 5→4 at round 2. Option D ("both are machine learning") is
  *true-but-incomplete* against the AI/ML/generative-AI nesting, so the key wins on best-answer
  convention rather than on D collapsing. Seated; worth a human read on whether that convention
  is fair at Digital Leader altitude.
- **`d6-01`** — carries **RW-1** from `eval/overlap-report.md`: option D and its rationale use
  "hardware investment, operational overhead and opportunity cost", which also appears in
  `derivation/source-gcp-cdl-samples.md:189` as the distiller's *unquoted classification* of a
  Google sample item. Recorded as a watch, not a finding (standard TCO vocabulary; the guide's
  own b-6.1-1 carries the same concept in canonical terms). It landed in the random 10 by the
  rule above, so it is in the sample twice over — read it with the artefact line side by side.

> **SUPERSEDED 2026-08-20 — the instrument ran.** The paragraph below is the accurate record of
> what was true at the time. The `codex` CLI was authenticated on 2026-08-20 and the cross-solve
> returned **60/60 agreement, 0 disagreements, 0 unparsed** on form-a. See §Cross-model column at
> the end of this sheet for the result and, more importantly, for what it does and does not license.

**Cross-model signal — ABSENT, and this is the one gap Gate 2 cannot close from the artifacts.**
`eval/codex-solve.json` records `advisory_skipped` for **both rounds**: `codex` is not on PATH,
the bundled VS Code binary reports "Not logged in", and the free-first rule bars the examiner
from signing in. Consequence, stated for the record: the author and both blind solves are the
same model family, so **83/83 twice is not evidence against a convergent blind spot** — two
sessions that share weights can share a wrong idea. The deep-read above is the compensating
control. If Oliver runs `codex login` before signing, the retry path in `eval/codex-solve.json`
re-runs the cross-solve on the same keyless form and this checklist should be updated with the
matrix before sign-off.

**Open adjudication queue:** empty (round-2 blind solve had zero misses; round 1 also 83/83).

## Bounce ledger (cap = 2)

| Round | Bounces | Disposition |
|---|---|---|
| r1 | 1 — `gcp-cdl-d4-10`, `defect_class: source-phrase-reuse` | Reworked in commit `42fbd3f` (one string changed, confined to `rationale.correct`; stem/options/key untouched). Discharged at r2: neither the 4-gram nor the 3-gram survives anywhere in the bank |
| r2 | **0** | 83 items re-scored fresh; 13 threes, zero ≤2, no item at bounce 2, **no cap breakers, no waiver needed** |

## Open decisions for Oliver

**A · Carried from Gate 1** (approved 2026-08-17 as "Approve all — open decisions resolve per
their recommended defaults unless amended at Gate 2"; all six therefore stand *resolved by
default* and are re-surfaced here only because Gate 2 is the amendment point):

1. **Google Skills sign-in — still declined.** No account was created, so the vendor learning
   path remains unread and the 64% blueprint-only slice of the inventory is still single-source
   by construction. Authorising a sign-in would enable an S2 top-up + S3 delta that recomputes
   convergence for exactly the weakest slice. Declining ships as flagged.
2. **Exam length 60.** Now expensive to change: the bank (83), the per-domain mix and `form-a`
   are all built to it. Switching to the tie-free 50 or 55 is a re-selection at minimum and a
   bank resize at worst.
3. **Pass threshold 70%** — a Mockka study standard, not a vendor fact; disclosed as such in
   `format_coverage` and `intro`.
4. **Multiple-select share ~10%** (6 of 60, one per domain, choose-2-of-5) — `[UNVERIFIED]`,
   and disclosed as this mock's judgment.
5. **`scenario_matching` = 0** — confirmed by the format analysis and disclosed.
6. **Lower-confidence flag** — the newest, heaviest content is single-source by construction; no
   free, legal, accessible source post-dates the 2026-08-12 blueprint.

**B · Opened at S5/S6:**

7. **README (preflight item 5) must land before `published`.** A PUBLISH decision with item 5
   open needs either the README written first or an explicit waiver line — methodology/06: "a
   sign-off with any preflight verdict at fail and no covering waiver is not a sign-off".
8. **The S1 artefact scrub is STILL OPEN, and it is the round-1 root cause.** The bank was
   fixed; the artefact was not. `derivation/source-gcp-cdl-samples.md` still quotes vendor
   sample-item prose at **lines 151 and 157**, contradicting that document's own
   no-reproduction header. Distillation work, outside the examiner's write surface. It does not
   put source text into the bank (the targeted pass proves the bank is clean), but it leaves a
   package whose own artefact contradicts its clean-room assertion.
9. **Three ratchets proposed, none adopted** (`eval/overlap-report.md` §Root cause): **R-1**
   forbid quoted source prose in Artefact-A docs; **R-2** a `derivation-quote-leak` validator
   check at S4 (the overlap report contains a working prototype — extract every quoted run of
   ≥3 words from the distillation docs and test the bank for each; 21 runs here, and that pass,
   not the n-gram sweep, is what produces findings when the source text is never held);
   **R-3** an option-parallelism rule from `d3-06`. `source-phrase-reuse` has now been raised in
   two exams (ccao-f r1, gcp-cdl r1) and both were caught by a human pass a five-line mechanical
   check would have caught first.
10. **The difficulty-pitch question is a Gate 2 judgment, not an examiner one.** 8 of 83 bank
    items (4 of 60 seated) score dim5 = 3 — recall pitch, mostly in the definitional domains.
    For a describe-and-explain certification with no hands-on objectives this may be correct
    altitude rather than defect. If Oliver rules it a defect, it is an S4 rework wave on those
    items, not a selection change.
11. **`d6-08` reserved** — confirm the high-vs-high drop above, or swap it in for `d6-06`/`d6-07`.
12. *(Repo-level, not this exam, not blocking)* the ccar-p latent-defect escalation raised at
    aif-c01's Gate 2 (`key-position-distribution` 7 + `answer-length-cue` 55 findings on a
    servable legacy `in_review` package) is still open and still wants a decision.

## What Oliver signs — **SUPERSEDED 2026-08-20**

> He signed it. `derivation/signoff.md` now records PASS on every preflight row,
> the adjudication decisions, the waiver block and a **PUBLISH** decision dated
> 2026-08-20. Preflight item 5 (README) is closed by the file, not waived. The
> paragraph below is the pre-signature statement, kept for the record.

`derivation/signoff.md` is pre-filled with the evidence hashes and this sample list; verdict
columns and the PUBLISH / DO-NOT-PUBLISH decision are blank and his. The sign-off must record
the absent cross-model signal explicitly (`eval/blind-solve.json` → `codex_matrix.effect` says
so), and preflight item 5 must close — README landed or waiver written — before the
`published` flip.

---

## Gate 2 final pass — 2026-08-20 (re-pin · corrected S5b standard · README closed · sign-off)

**Re-pinned to the shipping revision.** `content/gcp-cdl/questions.json` @ **`42ef8a9`** — blob `e2a57075e7`, sha256 `4fc6ede9b2f9222c…`, committed 2026-08-20 on `fix/cue-rework-wave`. `selection.json` is unchanged and item ids are stable, so form-a's composition is exactly as seated.

### Content pass landed after the 2026-08-19 re-pin

- `42ef8a9 argue gcp-cdl distractors up out of the second-longest habit`

**14 distractor option strings on 14 items**, ten seated and four reserve-only. Every edit is a same-proposition elaboration. Stems, keys, `answer` fields, `rationale.correct` and the `distractor_patterns` multiset are byte-identical (83 in / 83 out); one item (`d2-04`) had its distractor rationale rewritten to match.

**Items touched:** `d1-03`, `d2-04`, `d2-09`, `d2-11`, `d3-03`, `d3-09`, `d3-13`, `d4-01`, `d5-07`, `d5-12` (seated) · `d3-12`, `d4-12`, `d5-10`, `d6-08` (reserve).

Every rewritten option was re-read against the rationale that refutes it. Where a rationale was left unchanged, the distractor's proposition was unchanged too — the edits move length, not meaning — so each refutation still lands on the string it now faces. No distractor was argued into co-correctness; dimensions 1 and 2 stand for the touched items.

### Preflight rows restated on this revision

| # | Check | Verdict | Evidence at 2026-08-20 |
|---|---|---|---|
| 3 | Validator green | **PASS** | `pnpm validate gcp-cdl` → **35 checks, 0 errors, 0 warnings** on `42ef8a9` — zero warnings *(at `published`. The same tree reports 34 at `in_review`: `publication-preflight` is `when: status === 'published'` and runs only after the flip.)* |
| 4 | Eval thresholds, incl. the S5b ceiling | **PASS** | Re-stated below and in `derivation/eval-report.md` §s5b-final. Both scopes clear the corrected ceiling. |
| 5 | Per-exam README statements | **CLOSED — PASS** | `content/gcp-cdl/README.md` now exists and carries every section methodology/06 §readme-template requires: provenance and independence, prior art, NDA statement, non-affiliation with the named trademark holder, and the outbound licence pair (content CC BY 4.0 / code MIT). *This row read **OPEN — not written** in every previous version of this sheet; it is closed by the file, not waived.* No `licensed_import` items exist in this bank, so the template's Licensed-content section is correctly absent. |

### S5b re-stated against the corrected ceiling

| scope | n | blind (this revision) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 83 | **26.51%** (22/83) | ≤ 32.29% (random 23.92%) | **0.589** | ≥ 0.515 | **PASS** |
| form-a | 60 | **25.00%** (15/60) | ≤ 31.72% (random 23.50%) | **0.600** | ≥ 0.517 | **PASS** |

**The previously pinned revision `56c9db4`, re-measured with the corrected instrument, does not clear the ceiling:** bank 32.53% (FAIL, k_req 0.552) · form-a 31.67% (FAIL, k_req 0.559). That is the honest statement of why this exam needed another content pass, and it is stated here rather than left implicit — the earlier sheet's PASS was produced by an instrument that could not see interior length ranks.

The two corrections to the instrument — the ceiling now computed by the machine rather than by hand against a pass-mark `ok`, and interior length ranks now inside the committed strategy set — are written out in full in `derivation/eval-report.md` §s5b-final. The **bar is unchanged**; the machine now enforces it and the attacker is stronger.

### Deep-read sample

**Extended 38 → 48 items.** Added by the 2026-08-20 pass: `d2-04`, `d2-09`, `d2-11`, `d3-03`, `d3-09`, `d3-12`, `d4-01`, `d5-07`, `d5-10`, `d6-08`. Every item that pass touched is now in the sample; the remainder were already in it.

### Residuals a reader should see

- **the thinnest headroom of the seven is now comfortable.** The 2026-08-19 sheet recorded a rank-aware residual of 32.53% bank against a 32.29% ceiling — a latent breach of 0.24 pt that this pass closed; the shipping bank measures 26.51%.
- **stem-echo**, uninstrumented: 23.4% bank / 30.3% form against 25% chance — the only exam of the seven where the bank figure sits below chance.
- the `d5-12` C product-name note ("Google Security Command Center" vs the canonical name) and the `d3-10` C E08-fiction note both stand as recorded — low-severity, non-gating, and both items are in the deep-read sample.
- the **S1 artefact scrub** remains open — recorded as this exam's round-1 root cause, and a process item rather than a bank defect.
- **The cross-model eval column now exists** — `advisory_skipped` in every S5 round of this package, but the Codex CLI was authenticated on 2026-08-20 and the run landed: served form, **60/60 agreement, 0 disagreements, 0 unparsed** (`eval/codex-solve.json`). Advisory by design; it did not block then and does not license anything now. It discharges the **key-correctness** half of the convergent-blind-spot worry and leaves the **co-correctness** half fully open — the deep read is still the only control there, and 23 reserve-only items were not solved at all. §Cross-model column below has the reasoning.

## Cross-model column — arrived 2026-08-20, after the sign-off

The `codex` CLI was authenticated on 2026-08-20 and `node tools/codex-crosssolve.mjs gcp-cdl` ran the
S5 [§codex](../../../methodology/05-eval-rubric.md#codex) advisory cross-solve that every round of
this package had recorded as `advisory_skipped`: **form-a, 60 items, 60/60 agreement with the
answer key, 0 disagreements, 0 unparsed** (`eval/codex-solve.json`). Wave-wide: 465/465 across the
eight exams.

**It arrived after the sign-off and changes nothing on this sheet.** Codex results are advisory and
never blocking; their only enforcement is that a disagreement joins the Gate 2 sample, and there
were none — so the sample, the verdicts and `manifest.status` all stand exactly as recorded.

**Read it precisely.**

| Now carried by evidence | Still carried only by the human deep read |
|---|---|
| The **answer keys** are defensible to a solver that did not write them and never saw the key. The convergent author/examiner misreading §codex exists to catch did not fire on any served item | **Co-correctness** (dim 1) of 36 distractor strings on 27 items the wave argued *up*; **distractor plausibility** (dim 2); **difficulty pitch** (dim 5). The cross-solver reports its best option and was never asked whether a second one also works |
| | The 23 reserve-only bank items — out of scope of a form-scope run |

Agreement is not clearance. By the same argument
[§1b](../../../methodology/05-eval-rubric.md#cue-only-solve) uses to refuse a 100% blind solve as
proof of unexploitability, two capable models agreeing could mean both read the same surface. What
makes this agreement meaningful rather than circular is that the surface is measured separately and
is at chance — S5b blind **25.00% on form-a against a 31.72% ceiling**. The pair is the finding.

The item-level questions this leaves for Oliver are collected in
[`content/GATE2-HUMAN-ONLY.md`](../../GATE2-HUMAN-ONLY.md).
