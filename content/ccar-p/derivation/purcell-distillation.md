# Artefact A · Purcell distillation

**What this is.** Matthew Purcell's freely published CCAR-P practice set contains 63 questions
written against the public exam blueprint. This document records, for each item, **the concept it
tests** and **how each wrong option is constructed**.

**Why it exists.** It is one of two inputs to the master concept inventory. It answers the question
*"what does a candidate who sat the exam believe is tested?"* — an independent reading of the
blueprint, useful precisely because it was produced without reference to the course recap.

**What it is not.** It is not a copy of the source material. No question text, option text, or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Purcell's set: `linkedin.com/in/purcellmatthew`. Credited in the README.

---

## Format mix observed

Derived by counting item types per domain. This is the mix the exam selection must reproduce.

| Domain | Single choice | Multiple response | Scenario matching | Total |
|---|---|---|---|---|
| 1 | 8 | 2 | 1 | 11 |
| 2 | 6 | 2 | 0 | 8 |
| 3 | 8 | 3 | 1 | 12 |
| 4 | 7 | 2 | 1 | 10 |
| 5 | 6 | 2 | 1 | 9 |
| 6 | 6 | 2 | 1 | 9 |
| 7 | 3 | 1 | 0 | 4 |
| **Total** | **44** | **14** | **5** | **63** |

Note Domains 2 and 7 carry no scenario-matching item. That asymmetry is preserved.

---

## Domain 1 · Solution Design & Architecture (11 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.1 | Stable, fully-known, repeating steps → fixed workflow | T1 | D01 over-engineering ×2, D02 under-structuring |
| 1.2 | Path only knowable during execution → autonomous agent | T1 | D01 (enumerable-steps assumption) ×2, D03 brute-force-everything |
| 1.3 | Long multi-part task with skipped items and shallow reasoning → decompose into sequenced subtasks | T2 | D03 capacity-for-structure, D03 examples-for-structure, D04 knob-twiddling |
| 1.4 | Ordered audit trail + halt-on-exception → supervisor orchestration | T1 | D01 emergent-not-guaranteed, D01 parallel-violates-halt, D01 chance-not-guarantee |
| 1.5 | First use case chosen on measurable value × feasibility × risk | T4 | D11 spectacle, D11 politics, D11 speed |
| 1.6 | No production correctness signal → feedback loop into a labelled eval set | T4 | D05 change-without-measuring, D08 cost-not-correctness, D08 config-not-correctness |
| 1.7 | Daily-changing factual data → retrieval augmentation | T1 | D15 stale-by-design, D03 doesn't-scale, D09 disclosure-instead-of-fix |
| 1.8 | Tool-selection accuracy decaying as breadth grows → split into domain agents behind a router | T2 | D15 defer-and-compound, D03 double-the-prompt, D05 misdiagnosis |
| 1.9 | *(MR)* Prerequisites for a fixed workflow: known identical steps; per-step auditability | T1 | three agent-favouring conditions |
| 1.10 | *(MR)* Prerequisites for multi-agent: distinct specialisations; parallelisable independent subtasks | T1 | D11 volume, D11 budget, D11 prestige |
| 1.11 | *(Matching)* Pattern selection across five scenarios; options reused | T1 | — |

**Domain 1 observation.** Eight of eleven items are pattern-selection or pattern-diagnosis. Purcell
reads Domain 1 as overwhelmingly "choose the right autonomy level." Notably absent: the three-bucket
decomposition that the course recap says *precedes* pattern choice.

---

## Domain 2 · Claude Models, Prompting & Context Engineering (8 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.1 | High volume + comparable accuracy → smallest model meeting target, validated by ongoing eval | T4 | D12 assumption-over-measurement, D12 avoid-the-eval, D19 random-alternation |
| 2.2 | Cache miss caused by a dynamic prompt prefix | T2 | D19 false-claim ×2, D19 eviction-misattribution |
| 2.3 | Chain-of-thought applied selectively, not uniformly | T2 | D16 remove-platform-wide, D03 double-down, D19 false-claim |
| 2.4 | Critical rules belong at prompt boundaries, structurally separated from reference content | T2 | D03 repeat-and-bloat, D04 temperature, D04 casing |
| 2.5 | Precise format compliance → few-shot exemplars beat prose description | T2 | D03 length-not-fidelity, D04 raise-temperature, D01 split-per-section |
| 2.6 | Long-context mid-document recall decay + cost → retrieve only relevant sections | T2 | D05 barely-helps, D05 no-cost-reduction, D05 destroys-structure |
| 2.7 | *(MR)* Cost reduction: cacheable static prefix; on-demand instruction loading | T4 | D03 more-tokens, D03 more-examples, D05 relocate-same-tokens |
| 2.8 | *(MR)* Instruction adherence: delimited sections with conflict priority; examples of failing cases | T2 | D04 temperature, D19 middle-attention-claim, D02 remove-structure |

**Domain 2 observation.** Distractors cluster heavily on D03/D04 — "bigger" and "turn a knob." This
is the easy-distractor trap the authoring guide warns against.

---

## Domain 3 · Integration (12 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.1 | Many systems × many consuming applications × decentralised ownership × tool churn → MCP | T1 | D05 multiplies-maintenance, D01 bottleneck-SPOF, D13 bypasses-access-control |
| 3.2 | Tool-catalogue bloat → audit and remove, then progressive discovery | T2 | D03 longer-descriptions, D05 bigger-model, D03 list-and-justify |
| 3.3 | Authorisation must be enforced at the access-control layer, never by prompt instruction | T6 | D19 false-compliance-rule, D13 blast-radius, D06 credential-anti-pattern |
| 3.4 | Fixed-size chunks sever cross-references → structure-aware chunking with linkage metadata | T2 | D05 worse-fragmentation, D03 flood-and-hope, D02 discards-semantic |
| 3.5 | Exact identifiers need lexical matching → hybrid retrieval | T1 | D16 breaks-what-works, D05 marginal-gain, D18 push-to-users |
| 3.6 | Latency/accuracy trade-off quantified against the SLA budget | T4 | D14 dogma, D01 fragment-behaviour, D15 deferral |
| 3.7 | Observability at scale → structured traces + correlation IDs, payloads sampled and error-triggered | T4 | D16 disable-logging, D02 discard-intermediates, D08 user-complaints |
| 3.8 | Cross-organisation coordination without exposing internals → agent-to-agent | T6 | D13 exposes-internals ×2, D01 unasked-operating-model |
| 3.9 | *(MR)* Index freshness: validated re-index pipeline; version-aware retrieval filtering | T5 | D03 bigger-context, D07 weekly-spot-check, D04 temperature |
| 3.10 | *(MR)* Tool-selection errors: explicit non-overlapping descriptions; consolidate overlaps | T2 | D01 more-granular-tools, D19 prefer-first-heuristic, D02 generic-execute-tool |
| 3.11 | *(MR)* Progressive discovery favoured when: large catalogue, small relevant subset; constrained context | T1 | three monolithic-is-fine conditions |
| 3.12 | *(Matching)* MCP vs direct API vs agent-to-agent; options reused | T1 | — |

**Domain 3 observation.** The largest domain and the most mechanically varied — retrieval mechanics
(chunking, hybrid, freshness) are covered here in more depth than the recap's summary provides.

---

## Domain 4 · Evaluation, Testing & Optimization (10 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 4.1 | "Good enough to launch" requires task-specific metrics tied to business outcomes, with agreed thresholds | T4 | D12 model-not-solution, D12 anecdote, D08 cost-not-quality |
| 4.2 | Eval dataset = real production-like queries + deliberately constructed edge cases | T4 | D12 synthetic-inherits-blind-spots, D12 prompt-example-memorisation, D12 builders-assumptions |
| 4.3 | Subjective quality at volume → LLM-as-judge with periodic human calibration | T4 | D19 exact-match-cant-score-novel, D16 doesnt-scale, D16 abandons-requirement |
| 4.4 | Offline gain must be confirmed by a controlled production A/B before full rollout | T4 | D01 deploy-everywhere, D12 re-measure-same-distribution, D12 opinion-sampling |
| 4.5 | Cost reduction driven by trace-level analysis of the dominant driver, not a single blind lever | T2 | D05 one-lever-blindly, D16 refuse-mandate, D05 truncate-regardless |
| 4.6 | Model version change is a regression risk → full suite then canary with regression monitoring | T4 | D19 newer-is-better, D15 delay-six-months, D01 split-the-fleet |
| 4.7 | Leading indicators are pipeline-internal (retrieval relevance, grounding rate), not user-visible | T4 | D08 lagging ×3 |
| 4.8 | *(MR)* Regulated pre-production: expert-labelled golden dataset; adversarial boundary cases | T5 | D12 demo-theatre, D12 wrong-benchmark, D07 post-launch-survey |
| 4.9 | *(MR)* Unexplained degradation → end-to-end traces + input-distribution drift analysis | T2 | D08 volume, D08 spend, D08 availability |
| 4.10 | *(Matching)* Failure taxonomy: prompt failure / hallucination / model mismatch; options reused | T2 | — |

**Domain 4 observation.** Purcell's strongest domain — the eval-as-gate discipline is thoroughly
covered and maps cleanly onto recap rule 2.01.

---

## Domain 5 · Governance, Safety & Risk Management (9 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 5.1 | Human-in-the-loop gates placed at irreversible / high-impact actions only | T5 | D01 gate-everything, D07 review-after-the-fact, D07 sample-only |
| 5.2 | GDPR cross-border → data minimisation applied before the data leaves the boundary | T3 | D09 policy-notice, D06 protects-transit-not-destination, D05 shorten-not-reduce |
| 5.3 | Health-data compliance across the whole data path must be resolved at architecture stage | T8 | D11 cosmetic ×3 |
| 5.4 | Proxy variables encode protected characteristics → structured bias evaluation + ongoing monitoring | T3 | D19 formal-compliance-is-fairness, D16 nothing-can-be-done, D09 hide-the-output |
| 5.5 | Retrieved content is untrusted input and must never hold instruction-level authority | T6 | D16 internal-sources-only, D06 encrypt-secrets-not-behaviour, D18 block-imperatives |
| 5.6 | Transparency = disclose AI nature + limitations + a path to a human | T3 | D12 irrelevant-disclosure, D12 metadata-not-transparency, D17 deliberate-ambiguity |
| 5.7 | *(MR)* Layered controls on one risk: preventative output guardrail + mandatory human approval | T5 | D03 bigger-context, D12 prompt-training, D07 quarterly-review |
| 5.8 | *(MR)* Injection defence in depth: delimit untrusted content + least-privilege tooling | T6 | D19 capability-confers-immunity, D04 temperature, D07 log-for-later |
| 5.9 | *(Matching)* Control selection: preventative guardrail / human-in-the-loop / monitoring and audit | T5 | — |

**Domain 5 observation.** Prevention-vs-detection is the dominant axis. Recap rule 3.02's *three*
control points (input / output / tool-call) is implied across 5.5, 5.7 and 5.8 but never named as a
unit — a gap the master inventory closes.

---

## Domain 6 · Stakeholder Communication & Lifecycle Management (9 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 6.1 | "100% accurate" → explain probabilistic behaviour, convert to measurable acceptance criteria | T7 | D16 commit-to-impossible, D16 decline-engagement, D05 changes-rate-not-expectation |
| 6.2 | A stated solution is not a problem statement → structured discovery first | T8 | D12 price-the-unvalidated, D12 prototype-anchors, D12 copy-a-competitor |
| 6.3 | Trade-offs presented with evidence; the accountable owner decides informed | T7 | D17 comply-silently, D17 deceive, D15 premature-escalation |
| 6.4 | Expectation management grounded in the pipeline's real latency envelope | T7 | D16 accept-and-hope, D16 remove-capability, D17 demo-only-commitment |
| 6.5 | Handoff artefacts = decision records + runbooks + re-runnable eval baselines | T8 | D12 journey-artefact ×2, D12 documents-what-wasnt-built |
| 6.6 | Report against agreed business success criteria; technical metrics support, not lead | T7 | D03 more-of-the-wrong-content, D16 remove-the-loop, D05 deepen-the-mismatch |
| 6.7 | *(MR)* Discovery outputs before design: measurable success criteria; data landscape assessment | T8 | three design/build outputs premature at discovery |
| 6.8 | *(MR)* Change management: make impact visible against baseline; re-baseline with sign-off | T7 | D17 absorb-silently, D16 refuse-all, D17 quietly-reduce-testing |
| 6.9 | *(Matching)* Lifecycle phases: discovery / design / handoff / monitoring and iteration | T8 | — |

**Domain 6 observation.** Well covered on communication, thin on the recap's instrumentation
vocabulary — control registers, obligation→control→owner→evidence, and SLA threshold sourcing
appear only glancingly.

---

## Domain 7 · Developer Productivity & Operational Enablement (4 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 7.1 | Team-scale productivity = shared version-controlled configuration + a personal preference layer | T4 | D11 status-quo, D16 restrict-to-seniors, D16 discard-the-gain |
| 7.2 | Review must be independent of the authoring context; humans retain merge authority | T2 | D16 skip-review, D20 self-review-anchoring, D16 restrict-authoring |
| 7.3 | Diagnose from traces before changing anything | T2 | D12 guess, D05 unevidenced-intervention, D16 abandon-the-system |
| 7.4 | *(MR)* Safe scaling: shared standards in version control + constrained execution surface | T5 | D13 unrestricted-credentials, D16 prohibit-inspection, D12 adopt-everything |

**Domain 7 observation.** Only four items for a 7% domain, so coverage is necessarily shallow.
Adoption mechanics (champions, batched rollout) and the Skills distribution model are untested.

---

## Distractor-pattern frequency across the 63 items

Counted from the tables above. This is the calibration baseline — and the warning.

| Pattern | Approx. count | Note |
|---|---|---|
| D03 capacity-for-structure | ~14 | **over-used** |
| D12 anecdote-for-measurement | ~14 | concentrated in Domains 4 and 6 |
| D16 refuse-the-mandate | ~13 | concentrated in Domains 6 and 7 |
| D05 symptom treatment | ~13 | spread evenly |
| D01 over-engineering | ~12 | concentrated in Domain 1 |
| D19 false technical claim | ~10 | the easiest to spot; keep sparse |
| D08 lagging-for-leading | ~8 | Domain 4 signature |
| D04 knob-twiddling | ~7 | **easy tell** — temperature appears repeatedly |
| D07 detective-for-preventative | ~7 | Domain 5 signature |
| D11 non-architectural criteria | ~7 | Domain 1 and 5 |
| D17 deception / silent absorption | ~6 | Domain 6 signature |
| D13 blast-radius expansion | ~4 | |
| D02 under-structuring | ~5 | |
| D06 wrong layer | ~3 | **under-used relative to its teaching value** |
| D15 deferral | ~4 | |
| D18 push failure to users | ~2 | |
| D09 disclosure-instead-of-fix | ~3 | |
| D14 dogma | ~1 | |
| D20 self-review anchoring | ~1 | |
| D10 interval shrink | 0 | not present in the source set |

**Consequences for authoring.**

1. **Cap D03 and D04.** Together they account for roughly a third of Purcell's wrong options, and
   they are the two a prepared candidate learns to discard on sight. Our bank keeps each below 10%.
2. **Raise D06 (wrong layer).** It is the most instructive pattern in the set — it forces a
   candidate to reason about *where* a control sits, which is the core of recap rules 2.04 and 3.02 —
   yet it appears only three times.
3. **D10 (interval shrink) is unused** and is the natural distractor for live-state-vs-retrieval
   questions. Introduced in our bank.
4. **Keep D19 sparse.** A factually false option is quickly eliminated and lowers item difficulty.

---

## Concepts Purcell tests that the recap does not spell out

Carried into the master inventory as Purcell-only entries. The recap is a summary, not an
exhaustive syllabus, so these remain in scope:

- prompt-caching prefix mechanics
- chain-of-thought selectivity by task type
- positional attention in long prompts
- few-shot exemplars for format fidelity
- structure-aware chunking and cross-reference linkage
- hybrid lexical + semantic retrieval
- index freshness and version-aware retrieval
- tool-description quality and catalogue consolidation
- GDPR data minimisation at a boundary crossing
- transparency disclosure obligations
- the prompt-failure / hallucination / model-mismatch taxonomy
- leading vs lagging quality indicators

## Recap concepts Purcell does *not* test

Detailed in `recap-concepts.md` and reconciled in `master-inventory.md`. Summary: three-bucket
decomposition, resiliency primitives, feasibility sizing and verdict forms, entry-point selection
breadth, control registers, and adoption mechanics.
