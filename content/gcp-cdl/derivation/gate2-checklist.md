# Gate 2 checklist — gcp-cdl

Assembled by exam-examiner at S6 (`/exam-publish` step 3), 2026-08-18, on the round-2
bank revision (rework commit `42fbd3f`; S5 round-2 artifacts in `eval/`, committed
`252c4fb`). `manifest.status` is now **`in_review`** — the flip to `published` is
Oliver's alone, recorded first in `derivation/signoff.md`. Verdict columns in the
sign-off are left for Oliver; this checklist pre-fills the evidence.

## The 7 preflight checks (methodology/06 §preflight), with evidence

| # | Check | Examiner finding | Evidence |
|---|---|---|---|
| 1 | Source registry complete, with licence basis | **PASS** | `derivation/sources.md` §Registered sources: 5 entries (2× `public_blueprint`, 2× `public_practice_set`, 1× `public_syllabus`), each carrying type, named author, URL, `date_accessed` 2026-08-16, licence/permission basis and usage constraint. The 5th (`google-skills-cdl-path`) is registered **metadata-only, content never accessed** — registered so the gap is visible, contributing nothing to the inventory (Gate-1 decision 1, still open below). Excluded-source screening is recorded with evidence, not just its outcome (dump corpus checked by content, ids 1/9/13 for whizlabs). Machine: `provenance-sources`, `concept-source-registry`, `source-derivation-link` all green |
| 2 | Every concept source-attributed (join chain resolves) | **PASS** | Validator `concept-source-registry` + `source-derivation-link` green on this exact tree (83/83 concepts attributed). Spot-checked by hand at S6: `d1-04`→C-004→{guide, samples}, `d3-11`→C-041→{guide, whizlabs}, `d5-09`→C-069→{guide, samples, whizlabs}, `d6-01`→C-076→{guide, samples} — every artefact id resolves to a registry entry **and** to an existing `derivation/source-*.md`. Zero `licensed_import` items in the bank: all 83 are originally authored |
| 3 | Validator green | **PASS** | `pnpm validate gcp-cdl` → **30 checks, 0 errors, 0 warnings** on this tree with `form-a` built. Before S6 the only failures were `selection-shape` (8) + `selection-format-mix` (12) on the empty placeholder form; both now pass, as do `selection-concept-uniqueness`, `key-position-distribution` and `answer-length-cue`. Nothing was dispositioned as an accepted warning — there are none |
| 4 | Eval artifacts present, thresholds met | **PASS** | `eval/blind-solve.json` (r2: **83/83**, high confidence on all 83, zero misses ⇒ empty adjudication queue), `eval/judge-scores.json` (r2: 498 dimension scores — 404 fives / 81 fours / **13 threes across 12 items**, **zero ≤2**, zero open bounces), `eval/overlap-report.md` (r2: zero findings; r1 finding O-1 discharged), `eval/codex-solve.json` (`advisory_skipped` — see the cross-model note below). Round-1 artifacts preserved as `*-r1.*`. Bounce ledger: r1 = 1 bounce (`d4-10`), r2 = 0; no item above bounce 1, cap (2) respected, **no waiver required**. Machine dry-run of `publication-preflight` (it only runs at `status: published`) returns clean on every clause except the sign-off file itself, which is Oliver's half |
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
design). Total sample: **24 items** — 13 auto-flagged (6 seated, 7 reserve-only), 10 random
from the seated form, 1 standing content note. The lists are disjoint.

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

## What Oliver signs

`derivation/signoff.md` is pre-filled with the evidence hashes and this sample list; verdict
columns and the PUBLISH / DO-NOT-PUBLISH decision are blank and his. The sign-off must record
the absent cross-model signal explicitly (`eval/blind-solve.json` → `codex_matrix.effect` says
so), and preflight item 5 must close — README landed or waiver written — before the
`published` flip.
