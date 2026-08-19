# Artefact A · Beecham CCAO-F study-repository distillation

**What this is.** Ray Beecham's freely published, MIT-licensed CCAO-F study repository contains a
**56-question practice bank** (`data/questions.json`, 8 items per course module) written against the
public exam blueprint and cited item-by-item to official Anthropic documentation. This document
records, for each item, **the concept it tests** and **how each wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory, and the **only independent
one**: the blueprint, the guide samples and the course recap are all Anthropic's own artefacts, so
this is the single source that answers "what does someone *other than the vendor* believe this
blueprint means in practice?" That independence is exactly what makes it worth distilling — and
exactly why its systematic drift away from the Associate register (below) has to be measured rather
than assumed away.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `beecham-ccao-f` in [`sources.md`](sources.md), screened for dump lineage there (four
> screens, all clear). MIT licence; used classification-only regardless. Credited in the exam README.

---

## Theme set used in the tables

Derived at S2 from clustering the judgments these 56 items and the 3 vendor samples exercise, per
`methodology/03-authoring-guide.md#themes` ("other exam shapes re-derive"). **Proposed for S3 to
declare in `authoring.json`:**

| id | Theme | Judgment exercised | Items here |
|---|---|---|---|
| T1 | Entry-point & capability selection | Pick the surface, model tier or capability layer that fits the task's shape | 2 |
| T2 | Request specification | Turn a vague ask into a complete, decomposable request; name the missing component | 5 |
| T3 | Verification before release | Decide what must be checked, against which reference, with what evidence, before it ships | 7 |
| T4 | Review-threshold judgment | Decide whether human review is mandatory and who is qualified to give it | 4 |
| T5 | Delegation boundary | Split a workflow into AI-appropriate / human-retained / collaborative; place the gate; escalate beyond Associate scope | 7 |
| T6 | Configuration placement & trust boundaries | Put a durable requirement in the right mechanism; decide what may carry authority | 13 |
| T7 | Permitted-use & data-sensitivity screening | Classify the data and the use case against policy before acting | 4 |
| T8 | Diagnosis & controlled change | Isolate the actual cause; change one variable; measure against a baseline | 14 |

**Theme balance is the first asymmetry to correct.** T8 (14) and T6 (13) carry 48% of this source
between them, while T1 — the judgment behind a 12%-weighted domain the vendor illustrates with its
own sample — carries 2. That imbalance is an artefact of the author's docs-first method (platform
documentation is written about mechanisms and configuration), not a reading of the blueprint.

## Pattern extensions proposed for this exam

Two failure shapes recur across this source *and* the vendor samples and have no clean home in the
shared D01–D20 registry. **Proposed for S3 to declare in `authoring.json.pattern_extensions`:**

- **E01 · confounded-change** — changes several variables at once, or changes one with no baseline,
  so no outcome can be attributed to anything. Reads as decisiveness; destroys the diagnosis. The
  natural wrong answer everywhere D7 and change-governance meet.
- **E02 · fluency-as-evidence** — treats confident, well-formed output, or the model's own
  confidence report or self-assessment, as evidence that it is correct. This is the signature CCAO-F
  distractor: the exam's largest domain (D2, 21%) exists because plausible is not verified, and the
  vendor's own sample 1 uses this shape twice out of three distractors.

`E02` is deliberately distinct from `D20 self-review-anchoring` (review inside the producing
context, which is about *who reviews*) and from `D12 anecdote-for-measurement` (an unrepresentative
proxy for a measurement). E02 is about *what counts as evidence of correctness* — and it needs its
own cap, because it is tempting enough to over-use.

## Format mix observed

| Blueprint domain | Single choice | Multiple response | Scenario matching | Total |
|---|---|---|---|---|
| D1 Prompting and Task Execution | 8 | 0 | 0 | 8 |
| D2 Output Evaluation and Validation | 8 | 0 | 0 | 8 |
| D3 Product and Model Selection | 8 | 0 | 0 | 8 |
| D4 Workflow Integration and Solution Design | 8 | 0 | 0 | 8 |
| D5 Configuration and Knowledge Management | 8 | 0 | 0 | 8 |
| D6 Governance, Risk, and Responsible Use | 8 | 0 | 0 | 8 |
| D7 Troubleshooting and Optimization | 8 | 0 | 0 | 8 |
| **Total** | **56** | **0** | **0** | **56** |

Three asymmetries, all to be **corrected rather than preserved**:

1. **Flat 8-per-domain distribution.** The real blueprint runs from 10% to 21%. This source gives
   D7 (10%) and D2 (21%) identical weight. Its per-domain coverage depth is therefore *inversely*
   useful — D2, the domain that matters most, is the one it under-serves relative to the exam.
2. **Zero multiple-response items.** The real exam uses multiple-response items and states the
   select-count in the stem (guide §5). This source provides **no MR calibration at all**; the only
   MR guidance available to this build is the guide's format row. S3 should set the MR share from
   the house default and record that it is a house decision, not a measured one.
3. **Uniform 4-option single choice**, which does at least match the vendor samples.

The source's own numbering is by **course module** (M1…M7), which maps to blueprint domains in a
permuted order — the tables below are headed by both.

---

## M1 → Domain 3 · Product and Model Selection (8 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| M1-Q01 | For occasional, human-accountable analysis with no integration requirement, the interactive surface is the fit; building automation is a cost with no payer | T1 | D01 *agent-for-occasional-work*, D01 *build-before-validate*, D13 *publish-to-solve-access* |
| M1-Q02 | Session continuity is the calling application's responsibility, not an implicit property of the model **(off-register — Developer)** | T8 | D19 *temperature-causes-forgetting*, D04 *magic-word-prompting*, D19 *invented-state-rule* |
| M1-Q03 | Once several candidates clear the quality bar, selection is a constrained optimisation on cost, speed, throughput and reliability | T1 | D11 *spec-sheet-maximisation*, D12 *recency-over-measurement*, D11 *verbosity-as-quality* |
| M1-Q04 | Input capacity and generated-output budget are different limits, and the stop reason distinguishes them **(off-register — Developer)** | T8 | D06 *prompt-role-confusion*, D04 *cache-as-cause*, D19 *training-data-as-cause* |
| M1-Q05 | A model change is a release: approval rests on a like-for-like comparison against a baseline, staged rollout and a rollback path | T8 | D12 *single-opinion-as-evaluation*, E01 *simultaneous-multi-change*, D11 *release-date-as-evidence* |
| M1-Q06 | A behaviour that must always hold lives in trusted, versioned configuration — never in per-request text and never inside the data it governs | T6 | D02 *per-request-restatement*, D06 *rule-inside-untrusted-data*, D06 *authority-from-untrusted-source* |
| M1-Q07 | Truncation is an output-budget fact with a named remedy set: raise the budget, cut scope, or decompose **(off-register — Developer)** | T8 | D19 *invented-inference*, D19 *unrelated-cause-identity*, D19 *unrelated-cause-tool* |
| M1-Q08 | Facts postdating the model's knowledge must be supplied or retrieved and then validated; pretrained knowledge carries no currency guarantee | T3 | D19 *knowledge-cutoff-denial*, E02 *ask-for-confidence*, D03 *capacity-for-currency* |

**Domain 3 observation.** The source reads D3 as an *engineering* selection problem and never
reaches the exam's actual D3 content: it names no product surface (Projects, research mode, chat,
artifacts) and no model tier (Haiku, Sonnet, Opus), although objectives 3.1 and 3.2 name both
explicitly. Three of its eight items are off-register API mechanics. **D3 is the weakest domain in
this source and must be carried almost entirely by the blueprint and recap artefacts.** M1-Q07 is
also the worst-constructed item in the set: all three distractors are the same pattern (D19).

---

## M2 → Domain 1 · Prompting and Task Execution (8 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| M2-Q01 | A vague ask is answered by specifying the request — work, audience, governing inputs, constraints, output shape, success criteria — before any tuning | T2 | D04 *exhortation-as-instruction*, D03 *length-for-specification*, D02 *role-without-specification* |
| M2-Q02 | When definitions are already adequate and boundary cases still fail, the missing component is worked examples, not more definition | T2 | D04 *repetition-as-emphasis*, D04 *creativity-knob*, D02 *remove-the-constraint* |
| M2-Q03 | Trusted instruction and untrusted source data are separated structurally, so content cannot acquire the authority of an instruction | T6 | D04 *adjective-tuning*, D02 *collapse-the-structure*, D16 *remove-the-safeguard* |
| M2-Q04 | Multi-stage work is decomposed into stages with checkable intermediate results, and the side effect is isolated as its own controlled step | T2 | D03 *length-for-structure*, D16 *drop-the-check*, D12 *cherry-pick-the-run* |
| M2-Q05 | An output contract is specified and validated on receipt; asking informally for a format is not specifying one **(transferable — reskin to objective 2.6 structured data)** | T2 | D04 *cosmetic-request*, D18 *push-parsing-downstream*, D02 *remove-the-contract* |
| M2-Q06 | A role is one component of five; on its own it changes register, not correctness | T2 | D14 *inverted-dogma*, D19 *invented-requirement*, D19 *invented-limitation* |
| M2-Q07 | Retrieved content is data. A defence that depends on the model choosing to ignore an instruction is not a control | T6 | D19 *recency-confers-authority*, D13 *partial-exfiltration*, D06 *authenticate-the-attacker* |
| M2-Q08 | Ambiguous selection between near-identical options is fixed by differentiating the options and their when-to-use rules **(off-register — Developer)** | T8 | D02 *increase-the-ambiguity*, D13 *widen-access-to-fix-selection*, D02 *remove-the-contract* |

**Domain 1 observation.** The strongest domain in the source. M2-Q01/Q02/Q04/Q06 map cleanly onto
recap rules 2.01–2.04 and give real independent attestation for the specification-and-decomposition
cluster. What is missing is objective **1.4** — nothing here distinguishes analysis from
brainstorming strategy, so the exam's task-type axis has exactly one attesting source (the recap).

---

## M3 → Domain 2 · Output Evaluation and Validation (8 items — the 21% domain)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| M3-Q01 | Criteria and representative tests precede remediation; without them "better" is unfalsifiable | T3 | D04 *adjective-tuning*, D03 *capacity-for-criteria*, D18 *push-failure-to-users* |
| M3-Q02 | Mechanically checkable properties get a mechanical check; judgment graders are reserved for what cannot be checked mechanically | T3 | D12 *opinion-for-check*, E02 *model-vibe-check*, D20 *self-confidence-as-grade* |
| M3-Q03 | An output with mixed property types needs a mixed evaluation design, matched property by property | T3 | D06 *mechanical-check-for-judgment*, D12 *impression-for-rubric*, D08 *length-as-proxy-metric* |
| M3-Q04 | Grounding is enforced by a control set at request time — restrict to sources, permit "unknown", require auditable citations — plus validation before release | T3 | D05 *amplify-the-defect*, D04 *tune-toward-the-defect*, D16 *remove-the-evidence* |
| M3-Q05 | An evaluation set must represent production conditions, including missing, conflicting, stale and adversarial inputs | T3 | D12 *more-of-the-same-sample*, D03 *capacity-for-coverage*, D20 *selective-review* |
| M3-Q06 | A severity-class failure is not tradable against an aggregate quality score | T4 | D12 *aggregate-over-severity*, D06 *wrong-scale-for-the-property*, D09 *warning-instead-of-fix* |
| M3-Q07 | Output that affects a person's decision needs qualified review with access to the evidence, disclosure of AI involvement, and a route to contest | T4 | E02 *confidence-as-approval*, E02 *fluency-as-approval*, D12 *rubber-stamp-review* |
| M3-Q08 | Run-to-run variation is measured and bounded with a consistency threshold, not accepted as inherent nor ignored | T3 | D12 *single-run-sample*, D14 *probabilistic-therefore-unfixable*, D08 *irrelevant-metric* |

**Domain 2 observation.** The best-matched domain in the source: seven of eight items are in
register and land on real objectives (2.1, 2.3, 2.4, 6.4). But it reads D2 as *evaluation-system
design* — building graders, test sets, thresholds — where the exam's D2 is *this output, in my
hands, right now*: spotting a fabricated citation, judging completeness, adapting for an audience,
choosing an output format. Objectives **2.5** (edit/adapt/compare for the audience) and **2.6**
(artifacts / inline / structured data) get **zero** items. For the exam's largest domain, that is the
most consequential gap in this source.

---

## M4 → Domain 4 · Workflow Integration and Solution Design (8 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| M4-Q01 | The workflow is split by reliability requirement: computed where numbers must be right, generated where language must be good | T5 | D13 *authority-with-generation*, D05 *manual-recheck-instead-of-compute*, D06 *retrieval-for-computation* |
| M4-Q02 | The approval gate sits after validation and before the irreversible action, with a real reviewer interface | T5 | D07 *gate-after-the-action*, D08 *lagging-signal-as-gate*, D06 *gate-without-a-gatekeeper* |
| M4-Q03 | When a side effect's outcome is unknown, the safe move is to establish what actually happened before retrying **(off-register — Developer)** | T5 | D13 *duplicate-side-effect*, E02 *ask-the-model-for-facts*, D17 *silent-absorption-of-failure* |
| M4-Q04 | A capability handed to a model must be narrow, typed, authorisation-bearing and non-executing **(off-register — Developer)** | T6 | D02 *vague-contract*, D02 *unbounded-contract*, D13 *privilege-for-convenience* |
| M4-Q05 | You cannot optimise what is not instrumented at the level where the cause lives | T8 | D04 *prompt-length-as-observability*, D12 *irrelevant-data-collection*, E02 *self-explanation-as-telemetry* |
| M4-Q06 | Continuity across time and restarts is a storage responsibility, not a model property **(off-register — Developer)** | T5 | D19 *model-as-durable-store*, D06 *state-at-the-wrong-layer*, D13 *replay-side-effects* |
| M4-Q07 | A process with fixed steps and fixed validation argues for an explicit workflow; autonomy is granted only where the process actually needs it | T5 | D01 *agent-by-default*, D02 *collapse-to-one-step*, D06 *wrong-surface* |
| M4-Q08 | Architectural complexity is justified by requirements, never by ambition or by the appearance of rigour | T5 | D14 *more-is-better-dogma*, D14 *blanket-rule*, D19 *false-auditability-claim* |

**Domain 4 observation.** The source reads D4 as *system architecture*; the exam reads it as
*workflow redesign by a business practitioner* — analysing requirements, planning on verified
numbers, communicating value and limits to stakeholders. Objectives **4.1** (requirements analysis)
and **4.5** (communicating value and limitations) get **zero** items, and 4.5 is where the exam's
own escalation boundary lives. M4-Q01, M4-Q02, M4-Q07 and M4-Q08 do transfer cleanly and are the
best independent attestation available for the delegation-and-gate cluster (recap rules 4.01, 4.04).

---

## M5 → Domain 5 · Configuration and Knowledge Management (8 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| M5-Q01 | Knowledge sources carry governance metadata — owner, authority, effective date, classification, scope, review cadence — or their currency cannot be established | T6 | D11 *irrelevant-attribute*, D12 *popularity-for-authority*, D12 *keyword-for-authority* |
| M5-Q02 | A rule that must always hold belongs in versioned configuration with enforcement, not in one user's scope and not inside the source data | T6 | D06 *per-user-scope-for-org-rule*, D06 *rule-inside-the-data*, D02 *ephemeral-rule* |
| M5-Q03 | Reuse economics depend on a stable prefix; anything that varies at the front destroys the reuse **(off-register — Developer)** | T8 | D19 *breaks-the-mechanism*, D13 *secret-in-shared-context*, D19 *anti-mechanism-randomisation* |
| M5-Q04 | Retrieval scope is a quality control, not a recall maximiser; version conflicts are surfaced with provenance, never blended | T6 | D03 *capacity-for-selection*, D17 *silent-absorption-of-conflict*, D13 *drop-authz-for-latency* |
| M5-Q05 | Credentials are held by the system, never placed anywhere the model or the output can see them **(transferable — reskin to objective 6.2 data sensitivity)** | T6 | D13 *secret-in-prompt*, D13 *secret-in-source*, D09 *warning-instead-of-control* |
| M5-Q06 | Authorisation is enforced before data enters the context; an instruction not to disclose is not an access control **(off-register — Architect)** | T6 | D06 *instruction-as-access-control*, D06 *policy-by-promise*, D07 *post-hoc-filtering* |
| M5-Q07 | File-level metadata is not content provenance: a fresh upload timestamp says nothing about whether the content is current | T6 | D19 *invented-consequence*, D19 *invented-behaviour*, D14 *overcorrection-dogma* |
| M5-Q08 | Conflicting authorities are resolved by documented scope and precedence, and the resolution is stated rather than averaged away | T6 | D11 *arbitrary-criterion*, D17 *blend-and-omit*, D11 *publicness-as-authority* |

**Domain 5 observation.** Every item is T6, which is the clearest evidence that this source reads
D5 through a retrieval-governance lens. It is genuinely strong on *knowledge* governance (M5-Q01,
Q04, Q07, Q08 are the best independent attestation in the whole source, and they land squarely on
objective 5.2) and silent on *configuration* as the Associate meets it: no Project instructions, no
connectors by name, no maintenance cadence. Objective **5.4** (inform, maintain, update) gets zero
items — the recap's rule 5.05 is its only attestation.

---

## M6 → Domain 6 · Governance, Risk, and Responsible Use (8 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| M6-Q01 | Classification and control verification precede the upload — the check happens before the data moves, not after an incident | T7 | D07 *upload-then-check*, D19 *de-identification-fallacy*, E02 *ask-the-model-for-policy* |
| M6-Q02 | Decisions with adverse consequences for a person require qualified authorised review against the evidence, disclosure, and an appeal route | T4 | D03 *capacity-for-oversight*, E02 *confidence-threshold-as-oversight*, D12 *rubber-stamp-review* |
| M6-Q03 | Untrusted input is contained by layered technical controls and tested adversarially, not by instructing the model to be careful | T6 | D06 *instruction-as-control*, D19 *obscurity-as-security*, D17 *work-around-the-control* |
| M6-Q04 | Retention and logging scope are governed decisions; debugging convenience is not a basis for keeping sensitive content | T7 | D14 *more-is-safer-dogma*, D13 *expose-to-accelerate*, D05 *encrypt-instead-of-omit* |
| M6-Q05 | A vendor model change enters the organisation's change-control path like any other release | T4 | D14 *newer-is-safer-dogma*, E01 *confounded-change*, D16 *freeze-instead-of-govern* |
| M6-Q06 | Refusing well means naming the boundary, offering the permitted alternative, and following escalation and logging policy | T7 | D17 *urgency-overrides-policy*, D17 *decompose-to-evade*, D06 *authority-from-a-model* |
| M6-Q07 | Exception authority belongs to a named human role through a documented process with compensating controls | T7 | E02 *confidence-as-authority*, D13 *self-authorisation*, D06 *authority-from-a-system* |
| M6-Q08 | Incident response has an order: contain, preserve evidence, assess scope, rotate what was exposed, notify, remediate, revalidate | T5 | D17 *destroy-the-evidence*, E02 *ask-the-suspect*, D05 *symptom-treatment-prompt-edit* |

**Domain 6 observation.** The most exam-aligned domain in the source after D2, and the one where
its independence pays: M6-Q01, Q02, Q05, Q06 and Q07 all land on real objectives and supply
plausible, non-obvious wrong answers. Objective **6.4** (ethical implications — bias, fairness,
disclosure) is thin: only M6-Q02 touches it, and only through the disclosure clause. Nothing here
covers the recap's *a Skill is software* rule.

---

## M7 → Domain 7 · Troubleshooting and Optimization (8 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| M7-Q01 | Attribution requires a reconstructed baseline and one changed variable at a time | T8 | E01 *pile-on-changes*, D12 *cherry-pick-the-run*, D19 *premature-attribution* |
| M7-Q02 | A selection failure between near-identical options is a specification problem, fixed by differentiating them and narrowing what is eligible **(off-register — Developer)** | T8 | D03 *capacity-for-selection*, D13 *widen-access-to-fix-selection*, D02 *remove-the-contract* |
| M7-Q03 | Invented parameters are prevented structurally — a contract that forbids extras plus validation — not by asking for more care **(off-register — Developer)** | T6 | E02 *plausible-therefore-accepted*, D04 *exhortation-as-fix*, D13 *test-in-production-side-effect* |
| M7-Q04 | When a reuse mechanism stops working, inspect what changed in the thing it depends on **(off-register — Developer)** | T8 | D11 *irrelevant-attribute*, D12 *opinion-for-diagnosis*, D19 *impossible-cause* |
| M7-Q05 | Optimisation targets the measured bottleneck, under the quality and risk thresholds that already applied | T8 | D16 *remove-the-control-for-speed*, D12 *change-without-measurement*, D05 *retry-count-as-remedy* |
| M7-Q06 | A refusal is diagnosed against the task, current policy and permissions, and recent changes — then the permitted portion is redesigned or the work is escalated | T8 | D17 *evade-the-control*, D16 *remove-the-control*, D19 *misattribution-outage* |
| M7-Q07 | Repeated truncation at the same point is a budget-and-scope problem with a named remedy set, and partial output is validated rather than assumed benign | T8 | D17 *silent-absorption-of-truncation*, D05 *retry-instead-of-fix*, D16 *remove-the-contract* |
| M7-Q08 | A trustworthy optimisation result requires a baseline, a single change, a rerun of representative tests, a recorded outcome and a rollback path | T8 | E01 *confounded-change*, D11 *single-criterion*, D13 *full-blast-deploy* |

**Domain 7 observation.** Conceptually the closest match of any domain — M7-Q01, Q05, Q06 and Q08
are the same discipline as recap rules 7.01–7.04 — but four of eight items are off-register
platform mechanics. The exam's D7 asks about *underperforming prompts and poor outputs*; this
source asks about cache hit rates and tool schemas. Nothing here covers the recap's
*expectation mismatch* diagnosis or the *capture the fix into configuration* half of rule 7.03.

---

## Distractor-pattern frequency across the 56 items (168 wrong options)

| Pattern | Count | Share | Note |
|---|---|---|---|
| D19 false-technical-claim | 21 | 12.5% | **over-used.** Many are the easy kind — an option resting on a mechanism that plainly does not exist, which a candidate eliminates without engaging the concept |
| D06 wrong-layer | 17 | 10.1% | the source's best pattern; *instruction standing in for a control* is its recurring, genuinely tempting sub-form |
| D13 blast-radius-expansion | 16 | 9.5% | concentrated in D5/D6 — secrets, over-broad access, exposure to go faster |
| D12 anecdote-for-measurement | 16 | 9.5% | the D2/D7 workhorse: opinion, single run, unrepresentative sample |
| D02 under-structuring | 12 | 7.1% | mostly "remove the contract/constraint" |
| D04 knob-twiddling | 11 | 6.5% | adjectives, repetition, exhortation — the weakest distractors in the set |
| **E02 fluency-as-evidence** | 11 | 6.5% | proposed extension; the signature CCAO-F failure |
| D17 deception-silent-absorption | 9 | 5.4% | evade, blend, hide, absorb |
| D11 non-architectural-criteria | 8 | 4.8% | choose by newest, shortest, most public, longest |
| D03 capacity-for-structure | 8 | 4.8% | longer prompt / bigger budget for a structural problem |
| D16 refuse-the-mandate | 7 | 4.2% | remove the control, freeze updates, drop the check |
| D14 dogma | 7 | 4.2% | "more is safer", "newer is better", "it's probabilistic, accept it" |
| D05 symptom-treatment | 6 | 3.6% | |
| **E01 confounded-change** | 4 | 2.4% | proposed extension; under-used relative to how central it is to D7 |
| D01 over-engineering | 3 | 1.8% | **under-used** — and it is the natural distractor for D3/D4 in a productivity exam |
| D08 lagging-for-leading | 3 | 1.8% | |
| D07 detective-for-preventative | 3 | 1.8% | **under-used** — "check afterwards" is the natural wrong answer across D2 and D6 |
| D18 push-failure-to-users | 2 | 1.2% | |
| D20 self-review-anchoring | 2 | 1.2% | |
| D09 disclosure-instead-of-fix | 2 | 1.2% | **under-used** — "add a warning and ship" is a very live CCAO-F wrong answer |
| D10 interval-shrink | 0 | 0% | unused; genuinely not a CCAO-F failure shape |
| D15 deferral | 0 | 0% | unused, but *escalate-instead-of-doing-the-in-scope-part* is a real CCAO-F error — expect it in authoring even though this source never uses it |

## Consequences for authoring

1. **Cap D19 at 0.10.** At 12.5% it is the source's most-used pattern and its weakest: an option
   built on an invented mechanism is eliminated on sight and teaches nothing. Where a false claim is
   used it must be one a competent practitioner might actually believe.
2. **Cap D04 at 0.08.** "Add adjectives", "say be accurate", "repeat it three times" are filler
   distractors. One per paper is plenty.
3. **Cap E02 at 0.15 and D06 at 0.15.** Both are strong, both are the exam's signature shapes, and
   both would take over the paper if uncapped — E02 appears in three separate D2 items in this
   source alone.
4. **Raise D07, D09, D01 and D15 deliberately.** Detect-instead-of-prevent, warn-instead-of-fix,
   over-engineer, and defer/escalate-when-you-should-act are all natural CCAO-F errors that this
   source barely uses. D15 in particular has a CCAO-F-specific sub-form the sources never show:
   *escalate the whole task to a Developer or Architect when the in-scope part was yours to do* —
   the mirror of the exam's own escalation competency.
5. **One pattern per wrong option, three distinct patterns per item.** **19 of 56 source items
   (34%) reuse a pattern within a single item**, and M1-Q07 uses D19 three times. The authoring
   guide already requires distinct patterns; this is the measured reason it matters.
6. **Author to the vendor's length profile, not this source's.** Keyed-option length against the
   longest distractor: this source's median is **2.24×** (mean 2.25, key is the longest option in
   **55 of 56** items, 49 items above 1.5×); the vendor samples sit at median **1.11×**. Mockka's
   `answer-length-cue` check warns at 1.25 and errors at 1.50 — **keep those defaults and do not
   raise the knobs.** The keyed option in this source is recognisable from its length alone, which
   would make the whole bank solvable without reading the stem.
7. **Do not inherit the flat domain distribution.** Bank counts follow the blueprint weights (see
   the allocation table in [`sources.md`](sources.md)), which means D2 gets roughly twice this
   source's coverage and D7 rather less.
8. **Multiple-response items have no calibration here.** S3 sets the MR share and select-count from
   the house default and records that as a documented house decision, since neither the guide nor
   any source gives a measured value.
9. **Re-dress before reuse.** Twelve items are hard off-register (Developer/Architect content):
   M1-Q02, M1-Q04, M1-Q07, M2-Q08, M4-Q03, M4-Q04, M4-Q06, M5-Q03, M5-Q06, M7-Q02, M7-Q03, M7-Q04.
   Their *concepts* mostly have a legitimate Associate analogue — statelessness → context
   restart/summarize/persist; tool-description ambiguity → vague standing instructions; caching
   prefix → stable Project instructions — but the analogue must be authored from the recap's
   framing, not translated from the source's. A further five (M2-Q05, M4-Q05, M5-Q05, M6-Q03,
   M7-Q05) are in-scope concepts in developer dress and need reskinning only.

## Concepts this source tests that other sources do not spell out

Carried into the master inventory as this-source-only entries:

- Evaluation-set representativeness — that a set of clean, author-written examples proves nothing
  about production (M3-Q05). The recap says review is structural; only this source says the
  *sample* must be representative.
- Consistency as a measurable property with a threshold, rather than variation simply accepted
  (M3-Q08). It operationalises recap rule 1.05.
- Severity classes that cannot be traded against an aggregate score (M3-Q06).
- Conflicting-authority resolution by documented scope and precedence, with the conflict stated
  rather than blended (M5-Q08) — the sharpest single item in the source.
- File metadata is not content provenance (M5-Q07).
- Incident-response ordering, with containment before investigation and evidence preserved
  (M6-Q08).
- Exception authority as a named human role with compensating controls (M6-Q07) — the recap has
  the criteria, not the authority question.
- Approval-gate *placement* relative to the irreversible action, and what makes a gate real
  (M4-Q02).

## Concepts other sources hold that this source does not test

Substantial. Nothing here names a Claude product surface, a model tier, a connector, Skills,
Memory, Artifacts, or the output-format triad; nothing covers objectives 1.4, 2.5, 2.6, 4.1, 4.5 or
5.4; and nothing covers the recap's task-type strategy split, the five prompt components as a named
set, the three evaluation references, the four review-threshold factors, the three-way delegation
verdict, *a Skill is software*, *expectation mismatch*, or configuration decay. Full reconciliation
is in `master-inventory.md` at S3 — where, per the convergence note in [`sources.md`](sources.md),
"attested by the blueprint and the recap" must not be counted as two independent sources.
