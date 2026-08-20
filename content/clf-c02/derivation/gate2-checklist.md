# Gate 2 checklist — clf-c02

Assembled by exam-examiner at S6 (`/exam-publish` step 3), 2026-08-18, on the S5
round-2 bank revision (`questions.json` @ `168ae1f`; eval artifacts @ `10ccb89`).
`manifest.status` is now **`in_review`** — the flip to `published` is Oliver's alone,
recorded first in `derivation/signoff.md`. Verdict columns in the sign-off are left
for Oliver; this checklist pre-fills the evidence.

## The exam form (`selection.json`, form-a)

**50 items = d1 12 (10 SC + 2 MR) · d2 15 (12 + 3) · d3 17 (14 + 3) · d4 6 (5 + 1)** —
41 single_choice + 9 multiple_response + 0 scenario_matching, exactly the manifest mix.
**32 of 34 high-priority (convergent) concepts seated**, 18 normal-priority fills, 18
reserve-only concepts. Full method + every hand-adjustment is in `selection.json`
`$comment`; the four that need a human eye:

| # | Hand-adjustment | Why |
|---|---|---|
| 1 | d1: `1.05` (six WA pillars, MR) seated over `1.12` (on-prem hidden costs, MR) | Only 2 MR seats for 3 MR bank items. Coverage, not score: reserving `1.05` leaves blueprint task 1.2 with one seat, and seating `1.12` would put 6 of d1's 12 seats on cost concepts. Cost of the trade: `1.05` carries dimension-5 = 3 and is in the sample below |
| 2 | d3: `3.14` (storage models, MR high) reserved | 4 high-priority MR concepts for 3 MR seats. `3.14` is d3's lowest-scored item (26; dim2 = 3, dim4 = 4) and its concept is adjacent to seated `3.15` (S3 storage classes). `3.04`, `3.11`, `3.19` seated |
| 3 | d4: `4.06` (five support tiers, MR high) seated over `4.03` (charged data movements, MR high) | Only 1 MR seat. Without `4.06` the support cluster carries no plan-comparison item; `4.03`'s cost mechanics sit beside seated `4.02` (consolidated billing) and `4.04` (cost tools). `4.03` is the first-line substitute |
| 4 | Flagged items deliberately seated: `1.05`, `1.09`, `2.04`, `2.06`, `3.11` (3s), `1.10` (bounce survivor), `4.05` (dim1 = 4) | Their concepts are high-priority or coverage-load-bearing, so the deep read below happens on the form rather than on a reserve. Same-domain, same-format substitutes exist for every one |

## The 7 preflight checks (methodology/06 §preflight), with evidence

| # | Check | Examiner finding | Evidence |
|---|---|---|---|
| 1 | Source registry complete, with licence basis | **PASS** | `derivation/sources.md` §Registered sources: 5 sources (2 `public_blueprint`, 3 `public_practice_set`), each row carrying type, author, URL, `date_accessed` 2026-08-16, licence/permission basis and usage constraint; manifest `provenance.sources[]` matches. Machine checks `provenance-sources`, `concept-source-registry`, `source-derivation-link` green. Two registry facts a human should re-read: `aws-official-question-set` is registered **content-never-accessed** (account wall) and carries zero inventory weight; `tss-mckenzie` + `tss-declute` are recorded as **one voice, not two** (same item pool) and priority was computed on that basis |
| 2 | Every concept source-attributed (join chain resolves) | **PASS** | Validator `concept-source-registry` + `source-derivation-link` green on this exact tree (68 concepts, 68 items, 1:1). Spot-check for your own re-run: `1.03`→C-003→{clf-blueprint, tss-declute, tss-mckenzie}, `2.16`→C-032→{clf-blueprint, tss-mckenzie}, `3.15`→C-052→{clf-blueprint, tss-declute, tss-mckenzie}, `4.06`→C-066→{clf-blueprint, tss-mckenzie} — each resolves to a registry row and a `derivation/source-*.md` distillation |
| 3 | Validator green | **PASS** | `pnpm validate clf-c02` → **30 checks, 0 errors, 0 warnings**, run on this tree with `selection.json` built and `status: in_review`. The two selection failures the S5 report predicted (`selection-shape`, `selection-format-mix`) are closed by this form. No warn-level report to disposition |
| 4 | Eval artifacts present, thresholds met | **PASS** | `eval/blind-solve.json` (r2: **68/68**, 67 high-confidence + 1 medium (`1.04`), zero misses → zero adjudications open), `eval/judge-scores.json` (r2: **zero dimensions ≤2**, 10 items carrying a 3, `bounces_this_round: 0`, `bounce_resolution` records `1.10`), `eval/overlap-report.md` (r1 + r2 delta: 15 shared 8-gram shingles, all in rationales, none in a stem or option; `1.10` matches zero), `eval/codex-solve.json` (**advisory_skipped**, re-probed — see the cross-model note below). **SINCE RUN — 2026-08-20, after the sign-off: form-a 50/50 agreement with the key, 0 disagreements, 0 unparsed (`eval/codex-solve.json` @ `d9da399`). Advisory, so nothing on this row moves; see §Cross-model column for what the agreement licenses (keys) and what it does not (co-correctness, plausibility, pitch).** Round-1 artifacts preserved as `eval/*-r1.json`. Bounce cap (2) never approached: one item bounced once, cleared |
| 5 | Per-exam README statements present | **OPEN — not written** | `content/clf-c02/README.md` does not exist. Required before the `published` flip (template: methodology/06 §readme-template; worked reference now exists at `content/aif-c01/README.md`). The manifest's machine-checked `nda_statement` and the intro `disclaimer` are both present and complete, but the README's provenance / prior-art / non-affiliation / licence sections are human-facing and missing. **Owner: exam-author** — the examiner does not author package content beyond its eval/selection surface. Does not block `in_review` |
| 6 | Licences recorded, both directions | **PASS (outbound), PASS (inbound, vacuous)** | Outbound: repo `LICENSE` (MIT, code) + `LICENSE-CONTENT` (CC BY 4.0) exist at root; the package-level statement folds into item 5. Inbound: **zero `licensed_import` items** in this bank — every item is originally authored, all three practice sources were used classification-only under the clean-room rule, and `licensed-import-license` is green with nothing to discharge |
| 7 | `format_coverage` disclosure present where required | **PASS** | The Artefact A format analysis (`derivation/sources.md` §Format profile) finds CLF-C02 uses exactly two item types, both 1:1 on Mockka formats — the real exam's formats are a **strict subset**, so the manifest's `format_coverage` states 100% coverage rather than an approximation, plus the two fidelity caveats it must not hide: MR items wider than choose-2-of-5 are permitted by the blueprint but uncalibrated by the corpus (80/80 observed items are 2-of-5), and the 18% MR share is an authoring judgment inside a 14–30% source band, not a measurement. `scenario_matching` is set to 0 in every domain and must never be used for this exam |

**Pacing / scoring proxies restated for the gate** (both ratified at Gate 1 as recommended
defaults, both disclosed): `pass_threshold_pct: 70` is a **raw-score proxy** for the real
exam's scaled 100–1,000 / minimum-700 compensatory scoring, which is not publicly
convertible; `time_limit_minutes: 90` is the vendor's number for the 65-question sitting
kept for this 50-item mock (~28% generous). Both are visible in `manifest.$comment` and the
intro block, which the player renders on the exam intro page.

## Gate 2 deep-read sample — 22 items

Assembled per methodology/05 §handoff + `/exam-publish` step 3: **all scenario_matching
(none exist for this exam) + every auto-flagged item (12) + 10 random (10)**. The lists are
disjoint. "SEATED" = on form-a; "reserve" = in the bank but not on the form (still read it —
a reserve is a substitute, and Gate 2 decisions on the pitch line apply to both).

**Auto-flagged — dimension-5 / dimension-2 3s (10 items). Read these for PITCH, not
correctness.** The question for Oliver is whether recall-shaped and word-match items are
acceptable on a foundational certification whose real exam is itself substantially recall.

| Item | Flag | What to judge | Substitute if rejected |
|---|---|---|---|
| `1.05` SEATED | dim5 = 3 | Naming the six Well-Architected pillars — the concept *is* the list | d1 MR reserve `1.12` (see hand-adjustment 1) |
| `1.07` reserve | dim2 = 3, dim5 = 3 | Cloud adoption as a planned strategy; d1's lowest total (26) | already reserved |
| `1.09` SEATED | dim5 = 3 | CAF outcome list, MR, high-priority concept | d1 MR reserve `1.12` |
| `2.01` reserve | dim5 = 3 | "of the cloud / in the cloud" — canonical-phrase recall | already reserved |
| `2.04` SEATED | dim2 = 3 | Responsibility boundary moves with the service model; one weaker distractor | d2 SC reserves `2.05`, `2.14`, `2.17`, `2.19` |
| `2.05` reserve | dim5 = 3 | Platform security posture as a customer benefit | already reserved |
| `2.06` SEATED | dim5 = 3 (measured word-match), dim4 = 4 | At-rest vs in-transit encryption; the key reproduces a distinctive stem phrase. Examiner's own view: worth a rewrite in a later wave, not a bounce | d2 SC reserves as above |
| `2.19` reserve | dim5 = 3 (measured word-match), dim4 = 4 | Where security information is published | already reserved |
| `3.11` SEATED | dim5 = 3 (measured word-match) | VPC components, MR, high-priority — seated because nothing else covers what a VPC is made of | d3 MR reserve `3.14` |
| `3.14` reserve | dim2 = 3, dim4 = 4 | Storage models (object / block / file); d3's lowest total (26) | already reserved (hand-adjustment 2) |

**The line this eval drew, so Gate 2 can move it:** a *distinctive multi-word phrase*
reproduced uniquely in the key caps dimension 5 at 3 (`2.06`, `2.19`, `3.11`); *generic
shared vocabulary* at the same measured overlap margin does not (`1.08` and `3.19`, both
seated, scored 4 at +3 margin and are named in the eval report as the near-misses). If you
disagree with that line, `1.08` and `3.19` are the two items it changes.

**Bounce survivor (1 item):** `1.10` SEATED — the round-1 `answer-surface-cue` bounce.
Reworked (`168ae1f`), independently re-measured on this tree (stem/key content-word overlap
**9 → 1**, now the *lowest* of four options against a best distractor of 3 — the margin is
inverted), re-solved blind at high confidence from the constraints, re-scored 5/4/5/5/4/5.
Sampled so a human confirms the fix rather than taking the examiner's word for it.

**Dimension-1 4 referred by name (1 item):** `4.05` SEATED — is "one AWS account per brand"
close enough to co-correct to matter for a cost-allocation-tag item? It genuinely produces
per-brand bills and is real AWS guidance; it loses on proportionality, not on being wrong.
Substitute: d4 SC reserve `4.08`. `1.04` (Well-Architected Tool) carries the same shape more
weakly and is **reserve-only**; note it drew the bank's only medium-confidence blind answer,
so if you want a 23rd item it is that one.

**10 random (deterministic rule, documented: seated form-a ids sorted, every 5th starting at
index 0; when a pick is already in the flagged list, take the next unsampled seated id):**
`1.02`, `1.11`, `1.15`, `2.07`, `2.11`, `2.20`, `3.05`, `3.12`, `3.17`, `4.02`.

> **SUPERSEDED 2026-08-20 — the instrument ran.** The paragraph below is the accurate record of
> what was true at the time. The `codex` CLI was authenticated on 2026-08-20 and the cross-solve
> returned **50/50 agreement, 0 disagreements, 0 unparsed** on form-a. See §Cross-model column at
> the end of this sheet for the result and, more importantly, for what it does and does not license.

**Cross-model signal: ABSENT — the single largest residual risk in this eval.**
`eval/codex-solve.json` records `advisory_skipped` in **both** S5 rounds and re-probed in
round 2: `codex` is not on PATH, there is no `~/.codex/auth.json`, the binary bundled with
the VS Code ChatGPT extension reports `Not logged in`, and one `codex exec` probe returned
401. Establishing auth needs an interactive login outside the examiner's authority
(free-first: no signups without Oliver). Consequence, stated plainly: there is no three-way
disagreement matrix, author and examiner share Claude weights, and a **convergent blind
spot** — both preferring the same wrong reading — is invisible to this eval by construction.
68/68 blind on a foundational bank does not exclude it; it rules out gross miskeying and
little more. **The deep read above is the compensating control.** If you run `codex login`
before signing off, the cross-solve can be re-run on the same keyless form and this checklist
updated with the matrix first.

**Open adjudication queue:** empty (zero blind-solve misses in round 2).

## Bounce ledger (cap = 2)

Round 1: **1 item** bounced — `1.10`, defect class `answer-surface-cue` (stem-restatement
variant), dim5 = 2. Round 2: **0 bounces**, cap never approached, no item at bounce 2, **no
waiver required by the eval**. Round-1's `1.01` blind-independence process flag is cleared
(round 2 established the JSON schema from a key-free projection) and dropped from the sample.

## Open decisions carried into this gate

1. **Gate 1 defaults, ratified by batch approval** (`derivation/gate1-checklist.md`, Oliver
   2026-08-17: "Approve all", open decisions resolve per recommended defaults unless amended
   here). Amendable at Gate 2, all five: (a) Skill Builder top-up for the free official
   20-question set — approved in principle, **never run**, so the blueprint-only half of the
   inventory (50% of concepts) still ships uncorroborated; (b) 70% raw pass proxy; (c) 90-minute
   pacing kept and disclosed; (d) 18% MR share, all choose-2-of-5; (e) Tutorials Dojo sampler
   accepted at lower screening assurance (`[UNVERIFIED]` — no published originality statement;
   4 convergent concepts owe their signal to it alone).
2. **Preflight item 5 — README.** Must close before `published`, or the sign-off must carry an
   explicit waiver line (methodology/06: "a sign-off with any preflight verdict at fail and no
   covering waiver is not a sign-off"). Owner: exam-author.
3. **`stem-key-word-match` validator check — still unimplemented** (`packages/engine/src/validate/`,
   outside the examiner's ownership). It would have caught `1.10` mechanically and would have
   surfaced `2.06`/`2.19`/`3.11` at authoring time instead of at this gate. Routing note for
   tech-manager, not a blocker.
4. **Authoring-guide note, evidence now at 10 items in this bank** — `rationale.correct` often
   argues the principle without naming the keyed service (`2.06`, `2.19`, `3.14`, `3.17`,
   `3.19`, `3.20`, `3.21`, `3.22`, `3.23`, `4.08`; six of them seated). Every one scores dim4 = 4,
   which ships. A house-style habit worth a rule if the next exam repeats it.
5. **Form property, disclosed not fixed: 8 of the 50 seated items share a fictional company
   with another seated item across domains** (`campus shuttle service`, `actuarial consulting
   firm`, `dance studio chain`, `adventure tour operator`, `city zoning department`, `car wash
   franchise`, `cruise line reservations`, `eyewear retail chain`). This is a **bank** property,
   not a selection defect: the bank has 54 verticals for 68 items, and items `3.18`–`3.23` plus
   all of d4 deliberately reuse d1/d2 verticals. Three pairs are forced by high-priority seating.
   Of the rest, only two could be removed by a same-or-higher-scored substitute, and both cost
   coverage (`1.05`→`1.12` over-weights d1 economics to 6 of 12 seats; `2.20`→`2.14` drops the
   d2 "security services" cluster to 3 seats and duplicates the seated root-user concept). The
   examiner declined to trade measured item quality or blueprint coverage for a cosmetic repeat —
   say so if you want it re-shuffled, or ask the author for more verticals.

## What Oliver signs — **SUPERSEDED 2026-08-20**

> He signed it. `derivation/signoff.md` now records PASS on every preflight row,
> the adjudication decisions, the waiver block and a **PUBLISH** decision dated
> 2026-08-20. Preflight item 5 (README) is closed by the file, not waived. The
> paragraph below is the pre-signature statement, kept for the record.

`derivation/signoff.md` is pre-filled with the evidence hashes and this sample list; verdict
columns and the PUBLISH / DO-NOT-PUBLISH decision are blank and his. Preflight item 5 (README)
must close before the `published` flip. The flip itself is Oliver's — the examiner stops at
`in_review`.

---

## Gate 2 final pass — 2026-08-20 (re-pin · corrected S5b standard · README closed · sign-off)

**Re-pinned to the shipping revision.** `content/clf-c02/questions.json` @ **`793dde2`** — blob `cb76d1e9ae`, sha256 `8eb8213c81458f18…`, committed 2026-08-20 on `fix/cue-rework-wave`. `selection.json` is unchanged and item ids are stable, so form-a's composition is exactly as seated.

### Content pass landed after the 2026-08-19 re-pin

- `793dde2 even out clf-c02 key length ranks in both directions`

**12 distractor option strings on 12 items**, six seated and six reserve-only. Every edit is a length adjustment to the same proposition — some lengthened, some shortened — so no distractor's claim changed. Stems, keys, `answer` fields, `rationale.correct` and the `distractor_patterns` multiset are byte-identical; one item (`2.19`) had its distractor rationale rewritten to match.

**Items touched:** 2.03, 3.01, 3.08, 3.09, 3.16, 4.07 (seated) · 1.01, 1.07, 2.14, 2.17, 2.19, 3.10 (reserve).

Every rewritten option was re-read against the rationale that refutes it. Where a rationale was left unchanged, the distractor's proposition was unchanged too — the edits move length, not meaning — so each refutation still lands on the string it now faces. No distractor was argued into co-correctness; dimensions 1 and 2 stand for the touched items.

### Preflight rows restated on this revision

| # | Check | Verdict | Evidence at 2026-08-20 |
|---|---|---|---|
| 3 | Validator green | **PASS** | `pnpm validate clf-c02` → **35 checks, 0 errors, 2 warnings** on `793dde2` — both are `named-entity-parity` (bank 11/27 = 41%, form-a 9/21 = 43%, against a 40% warn bound and 25% chance) — untouched by the length work and carried below *(at `published`. The same tree reports 34 at `in_review`: `publication-preflight` is `when: status === 'published'` and runs only after the flip.)* |
| 4 | Eval thresholds, incl. the S5b ceiling | **PASS** | Re-stated below and in `derivation/eval-report.md` §s5b-final. Both scopes clear the corrected ceiling. |
| 5 | Per-exam README statements | **CLOSED — PASS** | `content/clf-c02/README.md` now exists and carries every section methodology/06 §readme-template requires: provenance and independence, prior art, NDA statement, non-affiliation with the named trademark holder, and the outbound licence pair (content CC BY 4.0 / code MIT). *This row read **OPEN — not written** in every previous version of this sheet; it is closed by the file, not waived.* No `licensed_import` items exist in this bank, so the template's Licensed-content section is correctly absent. |

### S5b re-stated against the corrected ceiling

| scope | n | blind (this revision) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 68 | **25.00%** (17/68) | ≤ 29.87% (random 22.13%) | **0.600** | ≥ 0.523 | **PASS** |
| form-a | 50 | **26.00%** (13/50) | ≤ 30.14% (random 22.32%) | **0.595** | ≥ 0.522 | **PASS** |

**No S5b ceiling verdict has ever been recorded for this package** — S5 and S6 both closed before the cue-only-solve instrument existed, and this exam was not part of the 2026-08-19 cue-rework wave, so the table above is the first one. **The previously pinned revision `168ae1f`, re-measured with the corrected instrument, does not clear the ceiling on the scope that ships:** bank 29.41% (a 0.46-point PASS, k_req 0.577) · **form-a 32.00% — FAIL** against a 30.14% ceiling, k_req 0.559. The served form was the breach, and the bank was half a point off it. That is the honest statement of why this exam needed a content pass, and it is stated here rather than left implicit.

The two corrections to the instrument — the ceiling now computed by the machine rather than by hand against a pass-mark `ok`, and interior length ranks now inside the committed strategy set — are written out in full in `derivation/eval-report.md` §s5b-final. The **bar is unchanged**; the machine now enforces it and the attacker is stronger.

### Deep-read sample

**Extended 22 → 32 items.** Added by the 2026-08-20 pass: 1.01, 2.03, 2.14, 2.17, 3.01, 3.08, 3.09, 3.10, 3.16, 4.07. Every item that pass touched is now in the sample; the remainder were already in it.

### Residuals a reader should see

- **2 `named-entity-parity` warnings** (bank 41%, form 43%) — **untouched by the length work and still open.** The option naming the most proper-noun AWS services is the key more often than chance. Closing this needs real sibling service names written into distractors, which is authoring work in a separate lane, not an examiner edit. It is a warn, not an error, and the combined S5b consequence is inside the ceiling on both scopes.
- **stem-echo**, uninstrumented: 36.1% bank / 35.7% form against 25% chance.
- **The cross-model eval column now exists** — `advisory_skipped` in every S5 round of this package, but the Codex CLI was authenticated on 2026-08-20 and the run landed: served form, **50/50 agreement, 0 disagreements, 0 unparsed** (`eval/codex-solve.json`). Advisory by design; it did not block then and does not license anything now. It discharges the **key-correctness** half of the convergent-blind-spot worry and leaves the **co-correctness** half fully open — the deep read is still the only control there, and 18 reserve-only items were not solved at all. §Cross-model column below has the reasoning.

## Cross-model column — arrived 2026-08-20, after the sign-off

The `codex` CLI was authenticated on 2026-08-20 and `node tools/codex-crosssolve.mjs clf-c02` ran the
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
| The **answer keys** are defensible to a solver that did not write them and never saw the key. The convergent author/examiner misreading §codex exists to catch did not fire on any served item | **Co-correctness** (dim 1) of 12 distractor strings on 12 items the wave argued *up*; **distractor plausibility** (dim 2); **difficulty pitch** (dim 5). The cross-solver reports its best option and was never asked whether a second one also works |
| | The 18 reserve-only bank items — out of scope of a form-scope run |

Agreement is not clearance. By the same argument
[§1b](../../../methodology/05-eval-rubric.md#cue-only-solve) uses to refuse a 100% blind solve as
proof of unexploitability, two capable models agreeing could mean both read the same surface. What
makes this agreement meaningful rather than circular is that the surface is measured separately and
is at chance — S5b blind **26.00% on form-a against a 30.14% ceiling**. The pair is the finding.

The item-level questions this leaves for Oliver are collected in
[`content/GATE2-HUMAN-ONLY.md`](../../GATE2-HUMAN-ONLY.md).
