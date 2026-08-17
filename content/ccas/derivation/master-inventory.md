# Artefact C · Master concept inventory — CCAO-F (`ccas`)

**What this is.** The union of two Artefact B distillations — the
[exam-guide blueprint](source-ccas-blueprint.md) (30 objectives split into 70 concept rows plus the
scope-boundary and named-risk registers) and the [course recap](source-ccas-recap.md) (35 rules
split into 74 concept rows plus its named-risk register) — with the two Artefact A practice
distillations ([Beecham](source-beecham-ccao-f.md), 56 items; the
[vendor guide samples](source-ccas-guide-samples.md), 3 items). Built at S3 per
`methodology/02-master-inventory.md`, from these artefacts only (clean-room: no source was opened).
It is the authoring contract: **every concept here is the primary concept of exactly one bank
item**, enforced by the validator's `concept-coverage` and `concept-inventory` checks.

Machine-readable form: [`concepts.json`](../concepts.json). Traceability is carried in
`concepts.json` itself: blueprint refs are `<objective>-<row>` rows of the concept tables in
`source-ccas-blueprint.md` (e.g. `1.2-a` = first row under Objective 1.2), recap refs are rule ids
(matching `syllabus-rules.json`), Beecham refs are item ids (`M1-Q01`…), vendor-sample refs are
`G.1`–`G.3`.

---

## Result

**81 concepts** — one per bank item, exactly 1.35× the 60-item exam. Per-domain counts are the
blueprint weights applied to the bank size (largest-remainder rounding), and the merge was driven
to land on them exactly:

| Domain | Weight | Concepts = Bank items | Exam items | Convergent (high) |
|---|---|---|---|---|
| d1 · Prompting and Task Execution | 14% | 11 | 8 | 5 |
| d2 · Output Evaluation and Validation | 21% | 17 | 13 | 12 |
| d3 · Product and Model Selection | 12% | 10 | 7 | 2 |
| d4 · Workflow Integration and Solution Design | 16% | 13 | 10 | 7 |
| d5 · Configuration and Knowledge Management | 12% | 10 | 7 | 5 |
| d6 · Governance, Risk, and Responsible Use | 15% | 12 | 9 | 8 |
| d7 · Troubleshooting and Optimization | 10% | 8 | 6 | 3 |
| **Total** | **100%** | **81** | **60** | **42** |

**Bank-size selection (per LEARNING.md L-0008).** In the 1.3–1.4× band (78–84), 81 is the exact
1.35× point and its largest-remainder allocation is fully determined: exact products
11.34 / 17.01 / 9.72 / 12.96 / 9.72 / 12.15 / 8.10, floors sum 78, and the three remainder seats go
to d4 (.96) and to both d3 and d5 (.72 each — two tied domains, two remaining seats, so the tie
decides nothing). 80 is the one size in the band with a *decisive* tie (d3/d5 at .60 contest a
single seat) and is excluded; 81 additionally lands the equal-weight domains d3 and d5 on equal
counts. Note that because d3 and d5 share a weight, their remainders tie at *every* size — tie-free
here means no tie sits at the cut line forcing an arbitrary seat.

Candidate pool going in: 70 blueprint concept rows + 74 recap concept rows + 8 practice-sharpened
candidates + 3 vendor sample items (confirmatory only) ≈ **155 candidate rows → 81 concepts**, via
the documented merges below, 12 cross-domain placements, and 16 not-carried practice items (15
Beecham + 1 practice-only candidate rejected off-blueprint).

## Source composition

| Origin | Count | Share |
|---|---|---|
| **Convergent** — vendor family + Beecham (`priority: high`, computed over families) | 42 | 52% |
| **Vendor-family-only** (`priority: normal`) | 39 | 48% |
| — of which attested by ≥2 vendor artefacts (blueprint + recap and/or samples) | 34 | 42% |
| — of which single-artefact (blueprint-only ×3: C-006, C-023, C-024; recap-only ×2: C-014, C-076) | 5 | 6% |

Per-source attestation: `ccas-blueprint` 78/81 · `ccas-course-recap` 71/81 · `beecham-ccao-f`
42/81 · `ccas-guide-samples` 6/81. 41 of Beecham's 56 items inform the inventory; the vendor's 3
sample items add confirmatory weight on three objectives (2.2/2.4 → C-015/C-016, 3.3 → C-034/C-035,
6.2 → C-064/C-065) — each sampled objective is deliberately carried by **two** adjacent concepts,
per the guide-samples artefact's instruction to author those certain-to-appear objectives with more
than one bank item.

### The priority convention — read before interpreting `high`

Per the convergence note in [`sources.md`](sources.md): the blueprint, the guide samples and the
course recap are **one independent source family** (all Anthropic). Counting blueprint + recap as
two would manufacture convergence out of vendor self-agreement, and — with 73/81 concepts carrying
both — would make `priority: high` operationally meaningless for S6 seating. Priority is therefore
**computed over families**: `high` ⟺ the concept's sources include `beecham-ccao-f` (the only
independent family). This diverges from the validator's raw `sources.length >= 2` computation, so
the `concept-convergence` check emits **34 warn-level findings** of the form *"priority normal
despite N sources"* — one for every vendor-only concept with ≥2 vendor refs. Every one of those
warnings **is this documented convention**, not an oversight: the divergence set is exactly

> C-005, C-007, C-008, C-010, C-011, C-013, C-017, C-029, C-030, C-032, C-033, C-035, C-036,
> C-037, C-038, C-039, C-040, C-043, C-044, C-046, C-050, C-052, C-054, C-058, C-060, C-061,
> C-063, C-066, C-069, C-072, C-074, C-075, C-079, C-080

(the remaining 5 normals are single-ref and warn-free). No concept is `high` with fewer than two
source refs, so the opposite warning class is empty. This build is **near-single-source in the
methodology's sense** — see the degradation note below and the lower-confidence flag at Gate 1.

---

## Merge decisions

One row per consolidation that materially changed the count. The bulk of the 155 → 81 reduction is
mechanical: the recap restates every blueprint objective as a taught rule, so identical-idea
blueprint-row/recap-rule pairs were folded without individual log rows — each concept's
`sources[].items` in `concepts.json` is the complete absorption record. The rows below are the
consolidations (and two deliberate non-merges) that involved judgment:

| Merged into | From | Rationale |
|---|---|---|
| **C-001** prompt-as-specification | b-1.1-a + b-1.1-b | what a prompt must state and how its quality is judged are definition and criterion of the same idea |
| **C-012** three references + depth | b-2.1-a + b-2.1-c + r-3.02 | the recap's own rule pairs the fixed reference set with stakes-calibrated depth — one evaluation discipline |
| **C-015** fabricated specifics | b-2.2-a + b-2.2-b (fabrication half) + r-3.03-a | the hallucination definition and its high-risk shapes are one detection concept |
| **C-016** what counts as evidence | b-2.3-a (authoritative-source half) + r-3.03 (confident uncertainty) | "check against an authority" and "confidence is not accuracy" are the two faces of one evidence standard — also the E02 signature |
| **C-025** output-format triad | b-2.6-a + b-2.6-b + r-3.06-b | format-by-use and format-by-reliability are two statements of one choice |
| **C-027** inconsistency, both grains | b-2.2-b (inconsistency row) + r-1.05 + M3-Q08 | the blueprint's own risk register groups within-output and run-to-run disagreement in one diagnostic row; M3-Q08 makes it quantitative |
| **C-033** tiers by name | b-3.2-a + b-3.2-b + r-1.03-a | tier names, their task shapes and name-recognition are one identification concept |
| **C-037** three remedies + decide early | b-3.4-b + r-1.04-b + r-1.04-c | the remedy set and the decide-before-quality-drops discipline are one decision |
| **C-039** requirements analysis | b-4.1-a + r-4.02-a | conversion of messy input and its structured output are one delegation use case (its safety criterion split out as C-040 — see splits) |
| **C-046** criteria + verdict | b-4.4-b + r-4.04 both rows | the three criteria and the three-way classification are one mapping act |
| **C-051** escalation boundary | b-4.5-b + §3 scope-boundary register + r-closing + M7-Q06 (escalate half) | the guide's §3 boundary, the recap's closing and objective 4.5 all state the same competency — including its *both polarities* authoring note |
| **C-053** mechanism matching | b-5.1-b + r-5.02 + M5-Q02 | instructions-vs-knowledge is the core pair of the four-way mechanism match; one placement judgment |
| **C-055** knowledge provenance | b-5.2-b + r-5.05 (currency half) + M5-Q01 + M5-Q04 (scope half) | provenance metadata and retrieval-scope discipline are both "what may carry authority into the context" |
| **C-058** precise instructions | b-5.3-a + b-5.3-b + r-5.04 | precision and testability are one property stated twice |
| **C-059** untrusted content is data | M1-Q06 + M2-Q03 + M2-Q07 + b-5.1-b + r-5.02 | three Beecham items exercise one Associate judgment: durable rules live in configuration, content never acquires instruction authority |
| **C-060** configuration decay | b-5.4-a + b-5.4-b + r-5.05 | what decays and why maintenance is scheduled are one rule |
| **C-062** screening criteria + verdict | b-6.1-a + r-6.02 both rows | criteria and three-way verdict are one screening act (see non-merge with C-046 below) |
| **C-068** policy binds + exception authority | b-6.3-a + r-6.01-b + M6-Q07 | "policy binds anyway" and "who may grant exceptions" are the two ends of one rule |
| **C-070** change control | M6-Q05 + M1-Q05 + b-6.3-a + r-5.05 (adjacency) | two Beecham items (vendor update, model swap) are one change-governance judgment |
| **C-074** diagnostic sequence | b-7.1-a + b-7.1-b + r-7.01 | discoverable causes and the ordered four-step check are one method |
| **C-077** one variable + baseline | M7-Q01 + M7-Q08 (method half) + b-7.1-c (multi-change half) + r-2.04-b | the E01 home: attribution discipline is one concept wherever it is exercised |
| **C-081** deliberate optimisation | b-7.3-a + b-7.3-b + r-7.04 + M7-Q05 + M7-Q08 (loop half) | the four-move loop and the no-baseline failure are one discipline |

**Deliberate splits** (the inverse direction, recorded so Gate 1 sees they were decisions):

| Kept separate | Why |
|---|---|
| C-004 / C-005 / C-006 (decompose · order · why) | three distinct testable judgments: checkable intermediates, dependency-first ordering, monolith-undiagnosable; blueprint states all three rows separately |
| C-033 / C-034 / C-035 (tiers: identify · select · over-provision) | identification, constrained optimisation, and the over-provisioning anti-pattern support three distinct item pitches; G.2 confirms the middle one with the third as its D01 distractor |
| C-039 / C-040 (requirements · checkability) | checkability generalises beyond requirements into the delegation-safety principle — merging would bury the principle inside one use case |
| **Non-merge: C-046 (d4) vs C-062 (d6)** | the recap itself flags rule 4.04 vs 6.02 as "the same criteria family with *human element* substituted for *stakes*" and demands an explicit decision: kept separate because the blueprint tests them as different objects — workflow **steps** (4.4) vs **use cases** (6.1) — with different criterion sets and different verdict vocabularies. S4 must keep the two stems non-parallel |
| **Non-merge: C-007 (d1) vs C-044 (d4) · C-017 (d2) vs C-072/C-073 (d6) · C-042 (d4) vs C-081 (d7)** | same discipline exercised on different objects at different altitudes; the blueprint places each pair in two domains, and the blueprint wins placement. S4 pitch notes below |

## Cross-domain placements

Where a concept's `domain` disagrees with the module its source material sits under. The blueprint
wins placement; this table is what stops a later session "fixing" the disagreement:

| Concept | Source material (module) | Exam domain | Why |
|---|---|---|---|
| C-017 bias in routine review | r-6.05 (Module 6) + b-2.2-c | **d2** | the blueprint places bias detection in *both* 2.2 and 6.4; the detection-in-review half seats in d2, the ethics-judgment half in d6 (C-072/C-073). `syllabus_rule: 6.05` kept — the weak-rule report should name the governance rule |
| C-018 knowledge currency | M1-Q08 (Beecham M1 → D3) | **d2** | supplying and validating post-cutoff facts is a validation technique (objective 2.3), not a product-selection fact |
| C-026 / C-027 representativeness · consistency | r-1.05 (Module 1) + M3-Q05/Q08 | **d2** | the recap's own blueprint mapping ties rule 1.05 to objectives 2.1/7.2; evaluation-sample and variation discipline are evaluation content |
| C-025 output-format triad | M2-Q05 (Beecham M2 → D1) | **d2** | the Artefact A's own reskin note: output-contract discipline → objective 2.6 |
| C-042 instrument first | r-7.04 (Module 7) + M4-Q05 | **d4** | blueprint 4.2-b owns instrument-first for process optimisation; the promote-and-measure loop stays in d7 (C-081). S4: d4 pitch = *where instrumentation belongs*, d7 pitch = *running the loop* |
| C-044 design iteration | r-2.04 (Module 2) | **d4** | blueprint 4.3-b names design iteration; S4 keeps the pitch artefact-level vs C-007's prompt-level |
| C-051 escalation boundary | guide §3 register + r-closing (no module) | **d4** | objective 4.5 is where the exam tests the boundary; both polarities (escalate as key, D15-style over-escalation as distractor) live on this one concept |
| C-059 untrusted content is data | M1-Q06 + M2-Q03 + M2-Q07 (Beecham M1/M2 → D3/D1) | **d5** | durable-rule placement and content-authority separation are configuration judgments (objectives 5.1/5.3) at the Associate register |
| C-065 redaction as enabling control | M5-Q05 (Beecham M5 → D5) | **d6** | the Artefact A's own reskin note: credentials-never-visible → objective 6.2 data sensitivity |
| C-070 change control | M1-Q05 (Beecham M1 → D3) | **d6** | a model change as a governed release is objective 6.3 content, not model selection |
| C-073 disclosure + contest | M3-Q07 (Beecham M3 → D2) | **d6** | M3-Q07's review half attests C-022 (d2); its disclosure/appeal half is the d6 ethics obligation |
| C-077 one variable at a time | r-2.04-b (Module 2) | **d7** | the attribution discipline is exam-tested as troubleshooting; the prompt-side instance stays C-007 (d1) |

## The named-risk registers → concept map

Both Artefact B risk registers, resolved. Each entry is a diagnostic-item seed for S4:

| Named risk | Concept |
|---|---|
| hallucinations / fabricated specifics | C-015 |
| confident uncertainty · self-reported confidence as an accuracy signal | C-016 |
| completeness gaps | C-013 |
| context gap — generic output blamed on the model | C-003 |
| context degradation in long sessions | C-036 (diagnosis) / C-037 (remedy choice) |
| inconsistencies (within-output and run-to-run) · variation mistaken for a defect | C-027 |
| silent failure of vague standing instructions | C-058 |
| configuration decay | C-060 |
| data sensitivity | C-064 (classify-first) / C-065 (the enabling control) |
| ethical risk in ordinary outputs | C-017 (detection) / C-072, C-073 (judgment) |
| indiscriminate automation | C-045 |

---

## What the vendor teaches that no accessible practice source tests

The 39 vendor-only concepts (48%) are this build's **near-single-source degradation note** per
`methodology/02-master-inventory.md#single-source` — scoped, as in sources.md's outlook, to
"vendor-attested, community-unattested" rather than to the whole build:

- **Whole domains thin on independent attestation:** d3 has 2/10 convergent concepts — Beecham
  names no product surface, no model tier, no connector, and its context items are API-register.
  The exam's D3 rests almost entirely on blueprint + recap coherence. d1's task-type axis
  (C-010/C-011, objective 1.4) and d2's audience/comparison objectives (C-023/C-024, objective 2.5)
  have no practice item anywhere.
- **Named-set vocabulary with no community echo:** the four surfaces (C-030), the four capability
  layers (C-032), the tiers by name (C-033), *artifacts / inline / structured data* (C-025 — its
  Beecham ref is a reskin, not a surface naming), *Incognito / Memory controls* (C-066),
  *a Skill is software* (C-069), the AI Fluency labels (vocabulary only).
- **Consequences:** no convergence signal exists for these; S6 seating priority for them falls back
  to blueprint weight and authoring judgment, and Gate 1 carries the lower-confidence flag. They
  are also — as in AIF-C01's v1.1 slice — the concepts a candidate is least likely to have
  drilled, which makes them high-value bank items, not skippable ones.
- **Volatility guard (recap discrepancy 2):** the recap dates its product descriptions to June 2026
  and names Memory import, Code Execution outputs, connector boundaries, Skills versioning and tier
  availability as volatile. **No item may turn on a volatile product detail**; items on C-030,
  C-032, C-038, C-054, C-066 test the *judgment* the rule teaches, not a feature's June-2026
  configuration.
- **Exit recorded** (from sources.md): (1) a second independent Associate-register practice source
  — watch `claudecertificationguide.com`'s announced Associate track; (2) a returned vendor
  practice product (immediate Tier-1 recalibration); (3) the prep-course lesson bodies
  (`anthropic-prep-course`, pending extraction — deepens vocabulary, does not create convergence);
  (4) if a CCAO-F dump corpus ever appears, re-run the S1 content screen against Beecham before
  publication.

## What practice sources test that the vendor does not spell out — reconciliation

**Carried in** (each mapped onto a blueprint objective): evaluation-sample representativeness
(C-026 ← M3-Q05), consistency as a measured, bounded property (C-027 ← M3-Q08), severity classes
untradable against aggregates (C-028 ← M3-Q06), approval-gate placement and what makes a gate real
(C-047 ← M4-Q02), explicit-workflow-vs-autonomy (C-048 ← M4-Q07), simplest sufficient design
(C-049 ← M4-Q08), conflicting-authority precedence (C-056 ← M5-Q08), file-metadata-is-not-provenance
(C-057 ← M5-Q07), retention/logging minimisation (C-067 ← M6-Q04), change control for vendor
releases (C-070 ← M6-Q05/M1-Q05), refusing well (C-071 ← M6-Q06), exception authority (folded into
C-068 ← M6-Q07), worked-examples-for-boundary-cases (C-009 ← M2-Q02), knowledge currency
(C-018 ← M1-Q08), untrusted-content-is-data (C-059 ← M1-Q06/M2-Q03/M2-Q07).

**Not carried — off-blueprint or off-register.** Recorded so the reconciliation shows the decision
was made, not missed. Beecham's measured drift toward Developer/Architect material (12 hard
off-register items + systematic API-layer readings) was re-checked item by item against the guide's
§3 scope boundary as a standing S3 rule:

| Candidate | From | Why not carried |
|---|---|---|
| incident-response ordering (contain, preserve, assess, rotate, notify) | M6-Q08 | no CCAO-F objective covers incident response; the Associate-scope halves — escalate through policy, refuse well — live in C-068/C-071. The full IR sequence is security-operations content outside the credential |
| session/state continuity as an application responsibility | M1-Q02, M4-Q06 | Developer register; the Associate analogue (Memory vs context window) is C-038, authored from the recap's framing per the re-dress rule |
| token limits, stop reasons, truncation remedies | M1-Q04, M1-Q07, M7-Q07 | API mechanics below the Associate altitude; the in-scope halves live in C-036/C-037 (context budget) and C-004 (decompose) |
| tool/option differentiation, invented-parameter prevention, caching-prefix stability, reuse-mechanism debugging | M2-Q08, M7-Q02, M7-Q03, M7-Q04, M5-Q03 | Developer register; the Associate analogues (precise standing instructions C-058, verification-by-construction C-019, stable Project configuration C-052) are authored from recap framing, not translated from these items |
| typed capability contracts for agent tools | M4-Q04 | Developer register; the supply-chain judgment the Associate needs is C-069 |
| authorisation enforced before data enters context | M5-Q06 | Architect register; the Associate half (classify-before-entry) is C-064 |
| side-effect verification before retry | M4-Q03 | Developer register; the gate discipline the Associate needs is C-047 |
| untrusted-input hardening at the agent layer | M6-Q03 | Developer register; the Associate half is C-059 |

## Coverage contract

Enforced by the validator, not by review:

1. Every concept is the primary concept of **exactly one** bank item (`concept-coverage`).
2. Per-domain concept counts equal the manifest's `bank_items` exactly (`concept-inventory`) —
   11/17/10/13/10/12/8.
3. Every concept's `sources[]` resolves to a registered source (`concept-source-registry`); every
   registered practice source has a derivation doc (`source-derivation-link`).
4. Every concept carries a `syllabus_rule` resolving into `syllabus-rules.json`
   (`concept-syllabus-rules`), and all 35 rules are carried by at least one concept — so bank-level
   rule coverage (`syllabus-rule-bank-coverage`) follows from concept coverage at S4. Rule → domain
   is *not* 1:1 concept-side: five concepts deliberately carry cross-module rules (C-017 → 6.05,
   C-026/C-027 → 1.05, C-042 → 7.04, C-044 → 2.04, C-077 → 2.04-adjacent 7.02), and the
   knowledge-governance cluster shares 5.02/5.05 across four concepts — the weak-rule report stays
   honest because the rule named is the rule the miss evidences.
5. Priority/convergence divergences surface as warnings (`concept-convergence`) — this build ships
   with **exactly 34, all enumerated above** as the family-convention set. Any 35th warning, or any
   warning on a concept outside that list, means an undocumented hand-tune.

## Authoring-contract decisions fixed alongside (manifest + authoring.json)

- **Bank 81 = 1.35× the 60-item exam**, allocation 11/17/10/13/10/12/8 (L-0008 selection above).
- **Format mix (exam form): 51 single_choice + 9 multiple_response + 0 scenario_matching.**
  The real exam is MC + MR only (guide §5); scenario_matching is deliberately unused in every
  domain — authoring it would rehearse an interaction the real exam does not contain
  (`manifest.format_coverage` carries the disclosure). The MR share (15%) and shape
  (**5 options, choose 2**, select-count stated in the stem exactly as the guide describes) are
  **house decisions**: no source provides MR calibration (Beecham has zero MR items; the guide
  publishes no counts). MR items are seated where the artefacts show named-set concepts that
  genuinely have two independently-defensible correct facets (d2 ×2, d4 ×2, one elsewhere per
  domain).
- **Pass threshold 72%** — a raw-score translation of the scaled 720/1,000 cut (not a vendor
  percentage; the scale is not publicly convertible). Follows the aif-c01 700→70 precedent;
  disclosed in the manifest `$comment` and `format_coverage`; Gate-1 ratification item.
- **Time limit 120 minutes** — the vendor's own number for the same 60-item count; no
  scale-or-disclose question arises (unlike aif-c01, there is no unscored-item asymmetry).
- **Pattern caps** (from the Beecham frequency analysis + registry standards): `D19: 0.10`
  (observed 12.5% and its weakest pattern — invented mechanisms teach nothing), `D04: 0.08`
  (exhortation/adjective filler, tightened below the 0.10 registry default), `D06: 0.15` and
  `E02: 0.15` (the exam's two signature shapes — capped so they cannot take over the paper),
  `D03: 0.10` (registry standard). Near-duplicate threshold `0.4` (ccar-p/aif-c01 precedent).
  Length-cue knobs stay at validator defaults — the vendor writes options at a 1.11 median
  keyed/longest ratio, and Beecham's 2.24× is the measured cautionary tale, so the knobs must not
  be raised.
- **Authoring emphases inherited from the artefacts** (S4 must apply): author to the vendor style
  card (scenario stems, generic roles, the deciding constraint stated, superlative framing,
  equal-length options, keys that carry the why); one pattern per wrong option, three distinct
  patterns per item (34% of Beecham items violate this — the measured reason it matters);
  deliberately raise D07, D09, D01 and D15 (all under-used natural CCAO-F errors), including D15's
  exam-specific sub-form *escalate-the-whole-task-when-the-in-scope-part-was-yours*; both
  polarities of the escalation boundary must exist in the bank (C-051, C-031); no item may turn on
  a volatile product detail (recap June-2026 caveat).
- **`layers.syllabus_rules: true`** — the recap's 35 rules are the syllabus layer
  (`syllabus-rules.json`, already shipped at S2), exactly the ccar-p arrangement; every concept
  links a rule id, so the player's weak-rule report works from S4 onward.
- **Themes: the CCAO-F set T1–T8 declared in `authoring.json`** — derived at S2 from clustering
  the 59 available practice items (the architecture starter set does not transfer to a
  practitioner-productivity exam), ratified at S3 with definitions. These ids are the *CCAO-F*
  theme set, not methodology/03's architecture starter set of the same prefix. Theme-balance
  obligation for S4: Beecham runs T8+T6 at 48% while T1 carries a 12% domain the vendor itself
  samples — the bank must rebalance toward T1/T2/T4/T7, not inherit the source's docs-first skew.
- **Pattern extensions E01 (confounded-change) + E02 (fluency-as-evidence)** declared in
  `authoring.json` — definitions and frequency evidence in the Artefact A docs; E02 is the
  signature CCAO-F distractor (the vendor uses it twice in one sample item) and E01 is the D7
  attribution-killer, under-used by the source relative to its centrality.
