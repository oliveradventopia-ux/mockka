# Artefact C · Master concept inventory

**What this is.** The union of [artefact A](purcell-distillation.md) — the concept backbone distilled
from the public practice set — and [artefact B](recap-concepts.md) — the 24 rules of the CCAR-P
course recap. It is the authoring contract: **every concept here is the primary concept of exactly
one bank item**, enforced by `tools/validate.mjs`.

The machine-readable form is [`data/concepts.json`](../../data/concepts.json).

---

## Result

**85 concepts.** One per bank item. Per-domain counts fall out of the merge and match the bank
allocation without adjustment:

| Domain | Concepts | Bank items | Exam items |
|---|---|---|---|
| 1 · Solution Design & Architecture | 15 | 15 | 11 |
| 2 · Claude Models, Prompting & Context | 11 | 11 | 8 |
| 3 · Integration | 16 | 16 | 12 |
| 4 · Evaluation, Testing & Optimization | 13 | 13 | 10 |
| 5 · Governance, Safety & Risk | 12 | 12 | 9 |
| 6 · Stakeholder Communication & Lifecycle | 12 | 12 | 9 |
| 7 · Developer Productivity & Enablement | 6 | 6 | 4 |
| **Total** | **85** | **85** | **63** |

## Source composition

| Origin | Count | Share |
|---|---|---|
| **Convergent** — both sources test it | 38 | 45% |
| **Recap-only** — the course teaches it, the practice set does not test it | 21 | 25% |
| **Purcell-only** — tested in the practice set, not spelled out in the recap summary | 26 | 30% |

**45% convergence is the headline.** Nearly half the inventory is corroborated by two independent
readings of the same blueprint — one written by a candidate who sat the exam, one taken from the
course itself. Those 38 concepts carry `priority: high` and are selected into the 63-item exam
before anything else, because agreement across independent sources is the best available proxy for
exam weight.

**And 55% is not corroborated**, which is the argument for doing this merge at all. Either source
used alone would have shipped a materially incomplete exam.

---

## What the recap adds that the practice set misses

21 concepts. These are the gaps that would have been invisible without artefact B.

| Concept | Rule | Why its absence matters |
|---|---|---|
| **C-001** Three-bucket decomposition | 1.01 | The recap positions decomposition as *prior to* pattern selection. The practice set opens straight into pattern choice — the step before it is never tested. |
| **C-002** Split driven by model behaviour; forcing Claude into system logic | 1.01 | A named failure mode with no corresponding item. |
| **C-004** Five factors; the tightest constraint decides | 1.02 | Pattern-selection items are tested extensively, but the *decision framework* behind them never is. |
| **C-007** Never retrieval as a substitute for live state | 1.03 | The recap calls this "the most common mistake." The practice set tests RAG's correct use and never its misuse. |
| **C-009** Combining reference architectures | 1.03 | — |
| **C-016** Sonnet as the default tier | 1.04 | — |
| **C-019** Progressive vs monolithic context | 1.04 | Core recap vocabulary, entirely untested. |
| **C-028** Minimum necessary data into context | 2.04 | — |
| **C-031** Per-request observability vs aggregate dashboards | 2.05 | — |
| **C-033** Five entry points and their trade-offs | 1.05 | The practice set tests MCP vs direct API vs agent-to-agent — three of five, and not the name-the-trade-off discipline. |
| **C-041** Retries, fallback chains, circuit breakers | 2.02 | **Production resiliency is untested in the entire 63-item practice set.** |
| **C-043** Eval suite written before production code | 2.01 | Evals are well covered, but the ordering rule is not. |
| **C-051** Cost and latency estimated at production volume | 2.02 | — |
| **C-056** Safety as layers; the dangerous failure is silent | 3.01 | — |
| **C-067** Obligation → control → owner → evidence | 3.05 | Control registers appear only as a handoff artefact, never as the compliance mechanism. |
| **C-069** Preference into constraint; requirement rows | 4.01 | Discovery is tested; its method is not. |
| **C-071** Four AI properties; three verdict forms; load-bearing boundary condition | 2.03 | **The whole feasibility-sizing vocabulary is absent.** |
| **C-075** Signals → triggers → owners; SLA thresholds from real sources | 4.03 | — |
| **C-078** Control register; before metric, auditable control, reuse note | 4.05 | — |
| **C-081** Skills distribution model | 5.01 | — |
| **C-082** Adoption via champions and batches | 5.02 | Domain 7 carries only 4 practice items; adoption is not one. |

## What the practice set adds that the recap does not spell out

26 concepts, concentrated in retrieval and prompting mechanics. The recap is a summary of
architectural rules, not an exhaustive syllabus, so these are legitimate scope rather than noise:

- **Prompting and context** — caching prefix mechanics (C-020), chain-of-thought selectivity
  (C-021), positional attention (C-022), few-shot for format fidelity (C-023), delimited sections
  with conflict priority (C-026)
- **Retrieval mechanics** — structure-aware chunking (C-038), hybrid lexical/semantic retrieval
  (C-039), index freshness and version-aware filtering (C-040)
- **Tooling** — catalogue bloat and progressive discovery (C-036), tool-description quality (C-037)
- **Integration shapes** — agent-to-agent across a trust boundary (C-034), direct API for scoped
  calls (C-035)
- **Evaluation** — LLM-as-judge with calibration (C-047), leading vs lagging indicators (C-052),
  the prompt-failure/hallucination/model-mismatch taxonomy (C-054), trace-level cost analysis
  (C-050)
- **Governance** — proxy-variable bias (C-064), data minimisation at a boundary (C-065)
- **Architecture** — multi-agent prerequisites (C-010), supervisor orchestration (C-011), agent
  overload and routing (C-013), use-case selection criteria (C-014)
- **Lifecycle** — latency expectation management (C-074), change management and re-baselining
  (C-079)
- **Productivity** — constrained execution surface (C-084)

---

## Merge decisions

Where the two artefacts described the same idea at different granularities, entries were merged
rather than duplicated. The consolidations that materially reduced the count:

| Merged into | From | Rationale |
|---|---|---|
| **C-044** golden dataset | recap "keep the golden dataset current" + practice-set "real queries plus edge cases" | One concept — what a trustworthy eval dataset *is* |
| **C-048** controlled production experiment | recap "primary metric and sample size before" + practice-set "controlled A/B before rollout" | The metric discipline is inseparable from the experiment |
| **C-057** three control points | recap 3.02's control points *and* its fail-closed direction | Rule 3.02 is one idea: a guarded path has three points **and** a chosen failure direction |
| **C-063** fairness instrumented | recap "controlled points" + "log every decision" | Instrumentation and reconstructability are one rule |
| **C-069** discovery method | recap "preference into constraint" + "requirement rows with labelled assumptions" | Both are the mechanics of the same four-category process |
| **C-077 / C-078** handoff and audit | recap 4.04 documentation + 4.05 outcome document | The outcome document is a handoff artefact |
| **C-083** AI-code diligence | recap 5.03 standards + practice-set independent review | Independent review is *how* the standard is enforced |
| **C-085** operational support | recap "symptoms to causes" + "runbooks and escalation paths" | Rule 5.04 is translation **plus** self-sufficiency — one rule, two halves |

## Cross-domain placements

Several recap rules teach a concept that the exam blueprint tests under a different domain. Recorded
so `recap_rule` and `domain` can legitimately disagree:

| Concept | Recap rule (module) | Exam domain | Why |
|---|---|---|---|
| C-014 use-case selection | 2.03 (Integration & Production) | Domain 1 | Blueprint puts use-case selection under Solution Design |
| C-032 MCP | 1.05 (Platform & Solution Design) | Domain 3 | Blueprint puts MCP under Integration |
| C-033 entry points | 1.05 | Domain 3 | as above |
| C-041 resiliency | 2.02 | Domain 3 | Retries and breakers are integration concerns |
| C-053 adversarial tests | 3.02 (Responsible AI) | Domain 4 | Blueprint puts pre-production testing under Evaluation |
| C-054 / C-055 diagnosis | 5.04 (Team Enablement) | Domain 4 | Blueprint puts failure diagnosis under Evaluation |
| C-071 feasibility sizing | 2.03 | Domain 6 | Sizing is a discovery-phase, stakeholder-facing activity |
| C-076 translation layer | 2.05 | Domain 6 | Reporting to stakeholders, not measuring |

---

## Coverage contract

`tools/validate.mjs` enforces:

1. every concept id in `data/concepts.json` is the `primary_concept` of **at least one** bank item
2. every one of the 24 recap rules is referenced by at least one bank item
3. concepts covered **only by reserve items** are reported — these are the exam's blind spots, and
   the report is what makes revising the selection an informed decision

A build with an uncovered concept fails. Coverage is not a review step.
