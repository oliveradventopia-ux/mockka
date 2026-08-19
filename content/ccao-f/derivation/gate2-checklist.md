# Gate 2 checklist — ccao-f

Assembled by exam-examiner at S6 (`/exam-publish` step 3), 2026-08-18, on the S5 round-2
bank revision (`questions.json` last changed at `d7cb9e4`; S5 round 2 at `301c065`;
round-2 artifacts in `eval/`, round-1 preserved as `eval/*-r1.*`). `manifest.status` is now
**`in_review`** — the flip to `published` is Oliver's alone, recorded first in
`derivation/signoff.md`. Verdict columns in the sign-off are left for Oliver; this
checklist pre-fills the evidence.

Independence: the examiner authored nothing in this bank (`methodology/05` §independence);
this session ran S6 only and made no edit to `questions.json`.

> **Re-pinned 2026-08-19 after the post-S6 cue-rework wave.** The bank under review is now
> `content/ccao-f/questions.json` @ **`dd5f1f6`** (blob `6d8581ecca`, sha256
> `ee0230b0454c22a3…`) on `fix/cue-rework-wave` — **not** `d7cb9e4` / sha256 `17bb2e36bee9…`,
> which this checklist originally pinned. `selection.json` is unchanged (item ids are stable).
> The eval artifacts in `eval/` still date from `301c065` and were produced against the
> **pre-wave option text**; `derivation/signoff.md` §Post-S5 cue-rework wave states what moved,
> what the prior judge scores still cover, the re-measured S5b numbers, and how the deep-read
> sample was extended (22 → **37 items**). Validator count also moved 33 → **37 checks** (four
> cue checks landed after S6; all silent). `manifest.status` is still `in_review` — nothing was
> flipped.

## The 7 preflight checks (methodology/06 §preflight), with evidence

| # | Check | Examiner finding | Evidence |
|---|---|---|---|
| 1 | Source registry complete, with licence basis | **PASS** | `derivation/sources.md` §Registered sources: 4 sources (`ccas-blueprint` public_blueprint, `ccas-guide-samples` public_practice_set, `ccas-course-recap` own_course_notes, `beecham-ccao-f` public_practice_set), each row carrying type, author, url (or offline proof-of-access basis), `date_accessed` 2026-08-16, licence/permission basis, and usage constraint. Excluded-source table records the five dump vendors screened out on legality. Machine checks `provenance-sources`, `concept-source-registry`, `source-derivation-link` all green. One registry entry — `anthropic-prep-course` — is registered *pending extraction* with nothing distilled from it (Gate 1 decision 3, see open decisions below) |
| 2 | Every concept source-attributed (join chain resolves) | **PASS** | Validator `concept-source-registry` + `source-derivation-link` green on this exact tree. All 81 concepts carry ≥1 registered source; 0 items are `licensed_import` (no item-level provenance override anywhere in the bank). Gate 1 spot-traced 5 chains (C-004, C-027, C-030, C-051, C-065); S6 re-confirms the machine half on the published tree |
| 3 | Validator green | **PASS** | `pnpm validate ccao-f` → **37 checks, 0 errors, 34 warnings — PASS** on the re-pinned tree `dd5f1f6` (selection built, status `in_review`). *Count corrected 2026-08-19 from "33 checks"; the four cue checks that landed after S6 are all silent.* All 24 pre-S6 errors were selection-derived and cleared when form-a was built. Warnings enumerated and dispositioned below |
| 4 | Eval artifacts present, thresholds met | **PASS** | `eval/blind-solve.json` (r2: **81/81**, zero misses, zero adjudications open), `eval/judge-scores.json` (r2: **zero dimensions ≤2**, `bounces: []`, bounce cap respected — no item is at bounce 2), `eval/overlap-report.md` (r2: 81/81 pass; both round-1 bounces `d3-q34`, `d6-q65` discharged), `eval/codex-solve.json` (`advisory_skipped` — see cross-model note). Round-1 artifacts preserved as `*-r1.json` / `*-r1.md`. S5 narrative: `derivation/eval-report.md` |
| 5 | Per-exam README statements present | **OPEN — not written** | `content/ccao-f/README.md` does not exist. Required before the `published` flip (template: methodology/06 §readme-template — provenance, prior art, NDA, non-affiliation, licence). The machine-checked `manifest.provenance.nda_statement` **is** present and complete, and `manifest.intro.disclaimer` carries the candidate-facing version; what is missing is the human-facing package README. **Owner: exam-author** (the examiner does not author package content beyond its `eval/`, `selection.json` and `derivation/` surface). Does not block `in_review`. Same open item as `aif-c01` |
| 6 | Licences recorded, both directions | **PASS (outbound), PASS (inbound, vacuous)** | Outbound: repo `LICENSE` (MIT, code) + `LICENSE-CONTENT` (CC BY 4.0) exist at root; must also be restated in the package README (folds into item 5). Inbound: **zero `licensed_import` items** — `licensed-import-license` green with nothing to discharge. The MIT-licensed Beecham repo is registered *classification-only*, not as an import: no text was reused, so no attribution obligation is triggered by the licence (the credit still belongs in the README's prior-art section, item 5) |
| 7 | Intro block + `format_coverage` disclosure | **PASS** | `intro-presence` green: all five fields present (`about`, `audience`, 3× `materials`, 2× https `official_resources`, `disclaimer`). `format_coverage` present and, unusually, discloses a **subset** rather than an approximation: the real CCAO-F uses MC + MR only (guide §5), so `scenario_matching` is deliberately 0 in every domain and form-a contains no matching items. The disclosure also carries the two calibration caveats — the MR shape/share (5 options, choose 2, 9 of 60) is a **house decision** no source measures, and `pass_threshold_pct: 72` is a **translation** of the real scaled-720-of-1,000 cut, not a vendor percent. Confirmed against the Artefact A format analysis in `derivation/sources.md` §"Format profile vs Mockka's three formats" |

**Validator warnings, dispositioned** (item 3): all 34 are the single class
`concept-convergence` — *"priority normal despite ≥2 independent sources"*. Zero of the
opposite class (`priority high with a single source`) anywhere. These are the **documented
family-convention** from S2/S3: priority is computed over source *families*, and the four
registered sources form only **two** families (Anthropic ×3 + one Tier-4 community bank),
so a concept backed by blueprint + recap alone is `normal` by convention even though the
raw `sources.length ≥ 2` rule fires. Enumerated in `master-inventory.md`
§priority-convention; 34 expected, 34 observed, ids verified at Gate 1 (check 7) and
re-verified here. **Not selection-derived and unchanged by S6** — the same 34 fired at the
S3 exit run. Consequence worth stating: 18 of the 20 normal-priority fills seated on form-a
are convergence-warned, i.e. the fills are *better* attested than their `normal` label
suggests, not worse.

## Selection composition (form-a, 60 items)

| Domain | Exam items | SC | MR | High-priority seated | Fills | Reserve-only |
|---|---|---|---|---|---|---|
| d1 Prompting and Task Execution | 8 | 7 | 1 | 5/5 | 3 | C-006, C-008, C-011 |
| d2 Output Evaluation and Validation | 13 | 11 | 2 | 11/12 | 2 | C-016, C-017, C-023, C-024 |
| d3 Product and Model Selection | 7 | 6 | 1 | 2/2 | 5 | C-030, C-033, C-038 |
| d4 Workflow Integration and Solution Design | 10 | 8 | 2 | 7/7 | 3 | C-040, C-043, C-046 |
| d5 Configuration and Knowledge Management | 7 | 6 | 1 | 4/5 | 3 | C-059, C-060, C-061 |
| d6 Governance, Risk, and Responsible Use | 9 | 8 | 1 | 8/8 | 1 | C-063, C-066, C-069 |
| d7 Troubleshooting and Optimization | 6 | 5 | 1 | 3/3 | 3 | C-075, C-079 |
| **Total** | **60** | **51** | **9** | **40/42** | **20** | **21** |

All 9 bank MR items are seated — every domain's MR quota equals its MR stock, so the MR
half of the form is **forced, not chosen**. All **35 syllabus rules** are covered by the
form (`syllabus-rule-form-coverage` is error-level: a rule tested only by reserves can never
reach the weak-rule report). Rule seat counts run 1–3; the 13 singletons are 1.02 (`d3-q32`),
2.02, 2.05, 3.01, 3.02, 4.02, 4.03, 5.01, 5.03, 5.04, 6.02, 6.03, 7.03 — note 1.02's only
seat is the forced MR item `d3-q32`, which is also a deep-read flag.

**The two high-priority concepts NOT seated are reserved for overlap, not for quality** —
both are first-line substitutes:

- **C-016 / `d2-q16`** duplicates seated **C-015 / `d2-q15`**: both stage a polished draft
  whose model self-reports high confidence, and both key to "verify against an authoritative
  external source". Byte-different verticals, one discrimination. `q15` kept (sum 28 vs 27).
- **C-059 / `d5-q59`** duplicates seated **C-053 / `d5-q53`** on "durable rules belong in
  Project instructions, uploaded material in knowledge", with a second partial overlap onto
  seated **C-056 / `d5-q56`** on knowledge scoping. `q53` kept for the cleaner single
  mechanism.

Same reasoning reserves the normal-priority **C-006 / `d1-q06`** against seated
**C-004 / `d1-q04`** (identical shape: one long multi-function prompt, errors not
attributable, decompose) — this was the explicit S5→S6 instruction. **`d7-q75` is reserved
deliberately**: it is the bank's weakest item and the only 3 outside dimension 5 (dim2 = 3 —
option B offers a temperature control the Associate-scope surfaces do not expose). It should
be rebuilt at the next authoring pass, not seated. Full hand-adjustment log:
`selection.json` `$comment`.

## Gate 2 deep-read sample

Per methodology/05 §handoff + `/exam-publish` step 3: **all scenario-matching + 10 random +
every auto-flagged item.** Scenario-matching contributes **zero** items — this exam has none
by design (see preflight item 7). The auto-flag set is the **22-item union** S5 round 2
recommended: the 16 round-2 flags **plus** the six items round 1 flagged on text that round 2
did not change (a prior round's 3 on unchanged text is live evidence, and dimension 5 was the
least reproducible dimension across the two rounds — 7 threes vs 15 threes, overlapping on
only 3 items).

**Extended 2026-08-19 to 37 items** — the S6 core of 22 plus every item touched by the
cue-rework wave. All 22 reworked items seated on form-a are now in the sample, plus the one
reserve-only reworked item, because publication covers the bank:

| Added by the wave | Seated? | What to judge |
|---|---|---|
| `d2-q12` | yes | **Closest co-correctness call in the wave** — B now borrows the key's depth-varying framing ("save the full reference check for the funding reports"); it still fails because B passes routine drafts on how they *read*. Confirm |
| `d1-q10`, `d4-q48`, `d7-q77` | yes | **Overclaim-by-intensifier** class — parity bought length by strengthening an already-wrong claim ("everywhere" / "clearly" / "by far"). Does the intensifier make the option eliminable without the scenario? |
| `d7-q80` | yes | key retexted; check it still reaches every noun in `rationale.correct` |
| `d1-q07`, `d3-q31`, `d4-q45`, `d4-q49`, `d4-q51`, `d5-q53`, `d5-q57`, `d5-q58`, `d6-q62` | yes | distractor length parity — check the argued-up option did not become co-correct |
| `d6-q66` | **no** (reserve) | bank coverage; rejecting a reserve item is free |

Already both reworked and sampled: `d1-q01`, `d2-q18`, `d2-q25`, `d2-q26`, `d2-q27`, `d3-q35`,
`d3-q36`, `d4-q42`. **This wave introduced zero new capitalised tokens**, so there is no
named-entity risk tier here.

**The pairing that tells you which items need human reading.** All 36 distractor rewrites in this
wave left their `rationale.distractors` entry **byte-identical** — the refutation was written
against the pre-wave string. Every pair was re-read at this gate and all 36 still land, but no
validator check covers this surface.

**On form-a — the original 22 items to read** (15 flagged + 7 further random; three random draws,
`d1-q01`, `d3-q34`, `d4-q50`, are already flagged and are not double-counted):

| Item | Flag | What to judge | Substitute if rejected |
|---|---|---|---|
| d1-q01 | r2 dim5 = 3 | "Judge a prompt by output fitness" — B/C/D are all surface-eliminable pieties; is the discrimination real for a candidate? | d1 SC reserves: q06, q08, q11 |
| d1-q02 (MR) | r2 dim5 = 3 | The only MR item in d1 — its quota is forced, so there is **no substitute**. Judge whether the two keys are separable from the three distractors without the concept | none (MR stock = quota) |
| d1-q03 | r2 dim5 = 3 | Context-gap vs model-limitation attribution; rule 2.02's only item, so seating is forced | none (rule 2.02 singleton) |
| d1-q04 | r1 dim-flag, r2 clean | The decompose item. Judge it **against reserved d1-q06**, which is the same shape in another vertical — if you prefer q06's framing they are interchangeable | d1-q06 (direct swap) |
| d2-q15 | r2 dim5 = 3 | Self-reported confidence → verify externally. Judge **with reserved d2-q16**: they test one discrimination twice; confirm the right one is seated | d2-q16 (direct swap), q23, q24 |
| d2-q25 | r2 dim5 = 3 | Structured output format by reliability — is the format choice forced by the scenario or by the stem's wording? | d2 SC reserves: q17, q23, q24 |
| d2-q27 | r1 dim-flag, r2 clean | Inconsistency at both grains (within one output / across runs); rule 1.05's second seat | d2-q17, q23, q24 |
| d3-q29 | r1 dim-flag, r2 clean | Entry-point choice for recurring work — d3 is the thinnest-attested domain (2/10 convergent; Beecham never names a surface) | d3-q30, q33, q38 |
| d3-q32 (MR) | r2 dim5 = 3 | Capability layers (Skills / Code Execution). Only MR in d3 — **no substitute** | none (MR stock = quota) |
| d3-q34 | r2 dim5 = 3 | **Reworked at round 1** (borrowed clause re-expressed). The rework closed the overlap and raised the stem→key lexical echo — judge the current wording on its own | d3-q30, q33, q38 |
| d3-q35 | r1 dim-flag, r2 clean | Speed–capability trade-off; seated so rule 1.03 keeps two seats | d3-q33 (same rule, but carries r2 dim3 4 + dim5 3) |
| d3-q36 | r1 dim-flag, r2 clean | "Context is a budget" — judge whether the failure mode is inferable without the concept | d3-q30, q33, q38 |
| d4-q50 (MR) | r2 dim3 = 4, dim5 = 3 | Communicating capability claims + review gates. One of two MR items in d4 and the other (q47) is high-priority — **no substitute** | none (MR stock = quota) |
| d6-q65 | r2 dim5 = 3 | **Reworked at round 1** (redaction item; the fix closed the source-clause overlap and made the restriction object explicit, at a documented cost to difficulty pitch — dim5 5→3). The single most important read on this form | d6-q63, q66, q69 |
| d6-q73 | r2 dim5 = 3 | Disclosure / fairness in ordinary outputs — right-vs-wrong pitch risk | d6-q63, q66, q69 |
| d1-q09 | random | worked examples for borderline classification | — |
| d2-q18 | random | build verification into the prompt | — |
| d2-q26 | random | evaluate under production conditions | — |
| d4-q42 | random | instrument before optimizing (rule 7.04 in d4) | — |
| d5-q56 | random | conflicting knowledge documents → precedence + scope | — |
| d6-q67 | random | retention / privacy | — |
| d7-q74 | random | diagnostic sequence starts from the specification | — |

**Random-10 rule (deterministic, documented):** seated form-a ids sorted, every 6th
starting at index 0 (60 ÷ 10) → `d1-q01, d1-q09, d2-q18, d2-q26, d3-q34, d4-q42, d4-q50,
d5-q56, d6-q67, d7-q74`.

**Flagged but NOT on form-a — read only if a substitution is needed** (7 items):
`d1-q06` (r1), `d1-q08` (r2 dim5 3), `d2-q16` (r2 dim5 3), `d3-q33` (r2 dim3 4 + dim5 3),
`d4-q40` (r2 dim2 4 + dim5 3), `d5-q61` (r2 dim5 3), `d7-q75` (r2 **dim2 3** — the bank's
weakest item, reserved deliberately).

**Cross-model signal: absent, in both rounds.** `eval/codex-solve.json` records
`advisory_skipped` for a third time — no `codex` binary on PATH, the bundled VS Code binary
reports "Not logged in", and the free-first rule bars the examiner from signing in. The
sample above therefore carries **no cross-model dissent column**, and because author and
examiner share Claude weights, a convergent-blind-spot miskey is not excluded by the 81/81
blind agreement. This is the **largest residual risk on this package** and the deep-read is
the compensating control. If Oliver runs `codex login` before signing off, the retry path in
`eval/codex-solve.json` re-runs the cross-solve on the same keyless form and this checklist
should be updated with the matrix before sign-off.

**Open adjudication queue:** empty — round-2 blind solve had zero misses and zero open
adjudications.

## Bounce ledger (cap = 2)

Round 1: **2 bounces**, both on the overlap screen, neither on the rubric —
`d3-q34` and `d6-q65` each reproduced a short clause that
`derivation/source-ccas-guide-samples.md` records as a direct quotation from a vendor sample
stem. Reworked in one wave (`d7cb9e4`).
Round 2: **zero bounces** — 81 items re-scored fresh on all six dimensions by an examiner who
did not see round-1 scores until the pass was complete; both reworked items cleared the
quoted-span screen (2 hits → 0). No item is at bounce 2; no cap breakers; **nothing on this
bank requires a waiver.**

Cost of the fixes, recorded because it is the transferable lesson: `d6-q65`'s rework closed
option B (dim1 4→5) and in the same sentence told the candidate the claim narrative is
unrestricted (dim5 5→3); `d3-q34`'s re-expression raised the stem→key lexical echo. Both
correct fixes, both with a real difficulty-pitch cost — which is why both sit in the deep-read
sample above.

## Open decisions for Oliver at this gate

**Carried from Gate 1** (approved 2026-08-17 as "Approve all — open decisions resolve per
their recommended defaults unless amended at Gate 2"):

1. **Package naming — resolved *against* the Gate 1 recommendation.** Gate 1 recommended
   keeping `slug: ccas`; the package was renamed to `ccao-f` at `c45059e`. Recorded here so
   the divergence is visible, not to re-open it. **No action unless Oliver disagrees.**
2. **`pass_threshold_pct: 72` — ratified by default at Gate 1, but the manifest `$comment`
   still reads "ONE GATE-1 RATIFICATION PENDING".** The number is a translation of the real
   scaled 100–1,000 / cut-720 score, not a vendor percent, and is disclosed in
   `format_coverage` and the intro. **Action: confirm 72% at sign-off so the manifest
   `$comment` can drop the "pending" wording** (a `$comment` edit is not a content change).
3. **Prep-course lesson bodies — declined by default; still available.** Only the recap layer
   was distilled; the 8 module bodies remain unextracted (`anthropic-prep-course` is
   registered *pending extraction*). A top-up S2b would deepen d1/d3/d5 vocabulary but
   **cannot create convergence** (same vendor family). No new account needed.
4. **MR calibration — ratified by default.** 9 of 60 MR, 5 options, choose 2, select-count
   always stated in the stem. No source measures the real share; disclosed as a house
   decision in `format_coverage`. Ratify or amend.

**New at Gate 2, from S5/S6:**

5. **README (preflight item 5) must close before `published`.** Owner exam-author. A PUBLISH
   decision with item 5 open needs either the README landed first or an explicit waiver line
   — methodology/06: *"a sign-off with any preflight verdict at fail and no covering waiver is
   not a sign-off."*
6. **Clean-room finding F-3 is still open** (`eval/overlap-report.md` §findings,
   `derivation/eval-report.md` §5): `derivation/source-ccas-guide-samples.md` quotes vendor
   sample stems verbatim as craft evidence, inside a derivation layer that authoring sessions
   *are* allowed to read. That is how both round-1 bounces got in. Owner: S1/S2
   research-manager. **The ratchet candidate remains unbuilt** — a validator check that no
   stem/option/rationale contains a ≥5-word quoted span from any `derivation/source-*.md`.
   Round 2 shipped a working reference implementation of that screen in
   `eval/overlap-report.md`; it needs promoting into `packages/engine/src/validate/`.
7. **Dimension 5 is the rubric's least reproducible dimension** — 79 byte-identical items,
   two independent examiner passes, 7 threes vs 15 threes, overlapping on only 3. Every Gate 2
   flag on this bank rides on dim 5. Round 2 published its scoring rule so it can be audited
   (score 3 when all three distractors come from surface-eliminable families, or when the stem
   hands over the key's operative phrase). **Decision for Oliver: adopt that rule into
   `methodology/05` §rubric, or leave dim 5 examiner-judgment.**
8. **`d7-q75` should be rebuilt** (dim2 = 3, out-of-scope temperature knob). Reserved off
   form-a, so it does not block publication, but it is a standing authoring task.
9. **Key-is-longest frequency lean: 49% vs 25% chance on SC items** — magnitude nil (median
   keyed/longest 0.990, `answer-length-cue` green). Watch item, not exploitable, no action.
10. **`ccar-p` latent-defect escalation is still open** (raised at the aif-c01 gate, unrelated
    to this package): the legacy `in_review` import shows 7 `key-position-distribution` +
    55 `answer-length-cue` findings. Recorded here only so it is not lost; decide it
    separately from this sign-off.

## What Oliver signs — **SUPERSEDED 2026-08-20**

> He signed it. `derivation/signoff.md` now records PASS on every preflight row,
> the adjudication decisions, the waiver block and a **PUBLISH** decision dated
> 2026-08-20. Preflight item 5 (README) is closed by the file, not waived. The
> paragraph below is the pre-signature statement, kept for the record.

`derivation/signoff.md` is pre-filled with the artifact hashes and this sample list; verdict
columns and the PUBLISH / DO-NOT-PUBLISH decision are blank and his. Preflight item 5 (README)
must close before the `published` flip.

---

## Gate 2 final pass — 2026-08-20 (re-pin · corrected S5b standard · README closed · sign-off)

**Re-pinned to the shipping revision.** `content/ccao-f/questions.json` @ **`dd5f1f6`** — blob `6d8581ecca`, sha256 `ee0230b0454c22a3…`, committed 2026-08-19 on `fix/cue-rework-wave`. `selection.json` is unchanged and item ids are stable, so form-a's composition is exactly as seated.

### Content passes landed after the 2026-08-19 re-pin

**None.** `git log` on `content/ccao-f/questions.json` returns nothing after `dd5f1f6`, and a field-level path diff against that revision returns an empty change set. The re-pin below is a re-statement of the standard, not of the bank.

### Preflight rows restated on this revision

| # | Check | Verdict | Evidence at 2026-08-20 |
|---|---|---|---|
| 3 | Validator green | **PASS** | `pnpm validate ccao-f` → **38 checks, 0 errors, 34 warnings** on `dd5f1f6` — all 34 are `concept-convergence` (priority hand-set `normal` where the machine computes `high`) — the Gate-1-ratified set, enumerated and dispositioned above *(at `published`. The same tree reports 37 at `in_review`: `publication-preflight` is `when: status === 'published'` and runs only after the flip.)* |
| 4 | Eval thresholds, incl. the S5b ceiling | **PASS** | Re-stated below and in `derivation/eval-report.md` §s5b-final. Both scopes clear the corrected ceiling. |
| 5 | Per-exam README statements | **CLOSED — PASS** | `content/ccao-f/README.md` now exists and carries every section methodology/06 §readme-template requires: provenance and independence, prior art, NDA statement, non-affiliation with the named trademark holder, and the outbound licence pair (content CC BY 4.0 / code MIT). *This row read **OPEN — not written** in every previous version of this sheet; it is closed by the file, not waived.* No `licensed_import` items exist in this bank, so the template's Licensed-content section is correctly absent. |

### S5b re-stated against the corrected ceiling

| scope | n | blind (recorded 2026-08-19 → now) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 81 | 24.69% → **27.16%** (22/81) | ≤ 31.50% (random 23.33%) | **0.616** | ≥ 0.540 | **PASS** |
| form-a | 60 | 25.00% → **26.67%** (16/60) | ≤ 30.71% (random 22.75%) | **0.616** | ≥ 0.542 | **PASS** |

The bank is byte-identical to the revision pinned on 2026-08-19, so there is no content delta to attribute: the whole of the movement above is the stronger strategy set. The recorded figure was not wrong for the instrument that produced it; it is superseded because the instrument was.

The two corrections to the instrument — the ceiling now computed by the machine rather than by hand against a pass-mark `ok`, and interior length ranks now inside the committed strategy set — are written out in full in `derivation/eval-report.md` §s5b-final. The **bar is unchanged**; the machine now enforces it and the attacker is stronger.

### Deep-read sample

**Unchanged at 37 items.** No content pass landed after the 2026-08-19 re-pin, so there is nothing new to seat in the sample.

### Residuals a reader should see

- **34 `concept-convergence` warnings** (Gate-1 ratified) — priority is hand-set `normal` on concepts the machine computes as `high`; the ratification and its reasoning are above, and the warn set is expected to be exactly these 34.
- **stem-echo**, uninstrumented: 32.7% bank / 35.3% form against 25% chance on the shipping revision. No check and no strategy measures it.
- clean-room finding **F-3** and the `d7-q75` weakest-item note both stand as recorded; neither is a threshold breach.
- **No cross-model eval column, in any round** — the Codex CLI on this machine is bundled in the VS Code extension and unauthenticated, so the advisory cross-solve was `advisory_skipped` throughout. Advisory by design; it never blocks. The consequence to hold onto is that author and examiner share a model family, so a convergent blind spot is not excluded by any blind score — the deep read is the compensating control.
