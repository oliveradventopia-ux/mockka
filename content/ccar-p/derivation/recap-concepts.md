# Artefact B · Recap concepts

**What this is.** The CCAR-P course recap states 24 numbered architectural rules across 5 modules.
Most rules carry more than one testable idea — rule 2.02 alone covers volume-based cost estimation,
resiliency primitives, *and* named failure modes. This document splits each rule into its
constituent concepts and records the **canonical vocabulary** attached to each.

**Why it exists.** It is the authoritative half of the master concept inventory. Where Purcell's
distillation records what one candidate *believed* was tested, this records what the course
*actually teaches* — and supplies the exact terminology a candidate will recognise from study.

**Vocabulary is quoted verbatim** from the recap. That is deliberate: a question that uses the
course's own words lets a candidate trace a missed item straight back to the rule.

---

## Module → exam domain mapping

The recap's five modules do not map 1:1 onto the exam's seven domains. Reconciliation:

| Recap module | Maps to exam domain(s) |
|---|---|
| 1 · Claude Platform & Solution Design | D1 (rules 1.01–1.03), D2 (1.04), D3 (1.05) |
| 2 · Enterprise Integration & Production | D3 (2.02 resiliency, 2.04, 2.05 observability), D4 (2.01, 2.02 sizing, 2.05 A/B), D6 (2.03) |
| 3 · Responsible AI, Safety & Risk | D5 (all) |
| 4 · Stakeholder Engagement, Lifecycle & GTM | D6 (all) |
| 5 · Team Enablement & Operational Productivity | D7 (all) |

---

## Module 1 · Claude Platform & Solution Design

### Rule 1.01 — Decomposition is the move that comes before architecture

| Concept | Vocabulary |
|---|---|
| Work splits into **three buckets** before any pattern is chosen | *three buckets*, *what Claude handles / what existing systems handle / what humans handle* |
| The split is driven by how the model behaves on each piece of work | *belongs with Claude at all, or somewhere else in the stack* |
| Skipping decomposition forces Claude into work another system does at lower cost, or leaves it without context a human colleague would have had | *forcing Claude into system logic* (named risk) |

> **Purcell coverage: none.** No item tests the three-bucket split, despite the recap positioning it
> as prior to pattern selection.

### Rule 1.02 — Choosing a pattern is choosing how much autonomy to grant

| Concept | Vocabulary |
|---|---|
| The autonomy **spectrum**: augmented LLM → workflow → agent, with **four workflow sub-patterns** | *"Claude assists one step" → "Claude plans the whole sequence"* |
| **Five factors** decide: predictability, error cost, observability, latency, cost | *five factors*, *the tightest constraint is the factor that decides* |
| When error cost is the binding constraint, **error cost picks the pattern** | *error cost as binding constraint*, *over-granting agentic autonomy* (named risk) |

### Rule 1.03 — Reach for the tested reference architectures before inventing your own

| Concept | Vocabulary |
|---|---|
| **Five reference architectures**: Agent, RAG, Document processing pipeline (Evaluator-optimizer), Routing, Coding agent | *reference architectures* |
| Combine them when different parts of the system break differently; pick one while still uncertain | *combine when parts break differently* |
| **Never use retrieval as a substitute for live state** | *RAG is built for static documents and stale snapshots*, *live state* |

### Rule 1.04 — Start with Sonnet and treat every swap as a release

| Concept | Vocabulary |
|---|---|
| **Sonnet is the default tier** — it balances intelligence, speed and cost for most production workloads | *Sonnet default* |
| Moving to Opus or Haiku needs the gate any release gets: an **eval set defining "better"** and a **rollback criterion set before the swap** | *treat every swap as a release*, *rollback criterion set before, not after* |
| **Progressive context** holds up better over a long-lived deployment than **monolithic context** | *progressive context*, *monolithic context that grows until it breaks* |

### Rule 1.05 — Pick the entry point by the work it has to do

| Concept | Vocabulary |
|---|---|
| **Five entry points** — Claude.ai, direct API, SDK, Claude Code, MCP — each carrying a different core trade-off | *speed of setup vs depth of control*, *prebuilt UI vs custom integration*, *breadth of tools vs focus* |
| The right recommendation is the one whose trade-off you can **name out loud at the time you make it** — that is what tells you later when to switch | *name the tradeoff out loud* |

> **Purcell coverage: partial.** Item 3.12 tests MCP vs direct API vs agent-to-agent, but not the
> five-entry-point spectrum or the name-the-tradeoff discipline.

---

## Module 2 · Enterprise Integration & Production

### Rule 2.01 — Evals as acceptance criteria

| Concept | Vocabulary |
|---|---|
| **Write the eval suite before the production code** | *evals as acceptance criteria* |
| Keep the **golden dataset** current with every system change | *golden dataset* |
| Use the eval as the **gate** for every model swap or prompt revision | *eval as gate*, *unevaluated prompt changes* (named risk) |

### Rule 2.02 — POC to production

| Concept | Vocabulary |
|---|---|
| **Estimate cost and latency at production volume** before committing to architecture | *cost and latency at production volume* |
| Build **retries, fallback chains and circuit breakers** into the initial design | *retries*, *fallback chains* (e.g. Sonnet→Haiku), *circuit breakers* |
| Name the **failure mode specific to your architecture type** and document its mitigation | *named failure mode*, *documented mitigation* |

> **Purcell coverage: none for resiliency.** No item tests retries, fallbacks or circuit breakers.

### Rule 2.03 — Use-case sizing and feasibility

| Concept | Vocabulary |
|---|---|
| Run every new use case through the **four AI properties** before issuing a verdict | *four AI properties* |
| State the verdict in one of **three forms** | *feasible as scoped*, *feasible with constraints*, *not feasible* |
| Document the **load-bearing boundary condition** for every constrained verdict | *load-bearing boundary condition*, *committing to unfeasible SLAs* (named risk) |

> **Purcell coverage: none.** The feasibility-verdict vocabulary is entirely absent.

### Rule 2.04 — Enterprise integration patterns

| Concept | Vocabulary |
|---|---|
| **Enforce identity at the server side** | *server-side identity*, *prompt-based auth bypass* (named risk) |
| Pass only the **minimum necessary data** into the context window | *minimum necessary data* |
| Build **observability instrumentation at design time**, not after the first incident | *observability at design time* |

### Rule 2.05 — A/B testing and observability

| Concept | Vocabulary |
|---|---|
| Identify the **primary metric and sample size before** running any experiment | *primary metric*, *sample size before* |
| At scale, separate **per-request observability** from **aggregate dashboards** | *per-request observability vs aggregate dashboards* |
| Build a **translation layer** mapping technical metrics to the business metrics the stakeholder cares about | *translation layer* |

---

## Module 3 · Responsible AI, Safety and Risk

### Rule 3.01 — Safety is a stack of layers, not a setting

| Concept | Vocabulary |
|---|---|
| Training reduces broad harm but **never saw your domain policy, data rules or authorization model** | *stack of layers, not a setting* |
| Draw the boundary explicitly and identify what each layer covers | *draw the boundary explicitly* |
| **The dangerous failure is silent** — assuming Claude enforces a rule that lives in no layer | *the dangerous failure is silent* |

### Rule 3.02 — A guarded path has three control points and a chosen failure direction

| Concept | Vocabulary |
|---|---|
| **Three control points** — input screening, output screening, tool-call authorization — answer different questions, so one filter at the end does not cover the other two | *three control points*, *input screening*, *output screening*, *tool-call authorization* |
| **Fail closed** where a wrong pass causes harm | *fail closed*, *silent guardrail bypass* (named risk) |
| A guardrail that silently passes traffic gives **the appearance of protection without the function** | *appearance of protection without any of the function* |

### Rule 3.03 — Fairness and transparency are instrumented, not assumed

| Concept | Vocabulary |
|---|---|
| Unequal outcomes arise at points **you control** — the corpus, prompt framing, examples, routing | *corpus, prompt framing, examples, routing* |
| **Log every decision** so users, regulators and your team can reconstruct it | *log every decision* |
| **If you cannot reconstruct an explanation, you cannot reliably provide one** | *reconstruct an explanation* |

### Rule 3.04 — Route review by stakes, not by volume

| Concept | Vocabulary |
|---|---|
| **Confidence, reversibility and cost of a wrong answer** set which decisions a person reviews | *route by stakes*, *confidence, reversibility, cost of a wrong answer* |
| Send high-stakes, low-confidence decisions to a human **with the inputs and the flag reason** | *inputs and the flag reason* |
| **Routing everything floods the queue** until reviewers click through without reading | *reviewer queue fatigue* (named risk) |

### Rule 3.05 — A compliant entry point is a prerequisite; an evidenced control set is the proof

| Concept | Vocabulary |
|---|---|
| A regulation **states an outcome and leaves you the control** | *states an outcome, leaves you the control* |
| Turn each obligation into **a specific control, a named owner, and a living evidence artifact** | *obligation → control → owner → evidence* |
| A control with **no owner and no evidence** goes non-operational and fails at audit; reviewers accept **proof the control is live**, not the control itself | *unowned compliance failure* (named risk), *living evidence artifact* |

---

## Module 4 · Stakeholder Engagement, Lifecycle & Go-to-Market

### Rule 4.01 — Structured discovery

| Concept | Vocabulary |
|---|---|
| Run discovery as a **four-category process** | *four-category discovery* |
| **Translate every preference into a constraint** | *preference → constraint* |
| Write each item as a **requirement row with its assumption labeled**, so the design traces to the business case | *requirement row*, *labeled assumption*, *scope creep / unstated constraints* (named risks) |

### Rule 4.02 — Communicating trade-offs

| Concept | Vocabulary |
|---|---|
| Present every trade-off in **three elements, including the reversal cost** | *three elements*, *reversal cost* |

> Partner-track go-to-market content in this rule is explicitly marked *"not tested by the Architect
> exam"* in the recap and is excluded from the inventory.

### Rule 4.03 — Feedback loops and SLA management

| Concept | Vocabulary |
|---|---|
| Build the decision layer that maps **signals → trigger actions → owners** | *signals to trigger actions to owners* |
| Set **SLA thresholds from their real sources** | *SLA thresholds from their real sources* |
| Wire **regulated checkpoints to run on a schedule** | *regulated checkpoints on a schedule* |

### Rule 4.04 — Documentation for handoff and audit

| Concept | Vocabulary |
|---|---|
| Write **the decision, the rejected alternatives, and the trade-off each resolved** while you still hold the reasoning | *ADR*, *rejected alternatives*, *runbook* |
| Carry the **control register** forward as evidence a reviewer will accept | *control register* |

### Rule 4.05 — Entry point selection and outcomes

| Concept | Vocabulary |
|---|---|
| Choose the route on **latency, compliance and cost** | *latency, compliance, cost* |
| Maintain an **entry-point-responsibility map** for multi-entry-point designs | *entry-point-responsibility map* |
| Capture the **before metric, the auditable control, and the reuse note** so the outcome document justifies expansion | *before metric*, *auditable control*, *reuse note* |

> **Purcell coverage: none.**

---

## Module 5 · Team Enablement and Operational Productivity

### Rule 5.01 — Team setup is shared configuration, distribution and spend posture decided up front

| Concept | Vocabulary |
|---|---|
| A team environment is a **shared baseline** plus a **Skills distribution approach**: org-provisioned, plugins (group/org targeting with versioned updates and rollback), project Skills, API Skills | *shared baseline*, *org-provisioned*, *plugins*, *project Skills*, *API Skills* |
| All of it bounded by **model and budget guardrails** | *model and budget guardrails* |

### Rule 5.02 — Adoption is engineered through champions and batches

| Concept | Vocabulary |
|---|---|
| A **champion per team** proves the workflow and seeds adoption | *champion per team* |
| **Access without enablement stalls at basic chat**; lumpy adoption never standardises the gain | *access without enablement*, *lumpy adoption* |

> **Purcell coverage: none.**

### Rule 5.03 — Diligence keeps AI-assisted work trustworthy

| Concept | Vocabulary |
|---|---|
| Hold AI-generated code to **correctness, security and maintainability** standards | *correctness, security, maintainability* |
| Require that **the author can explain what shipped** | *explain what shipped* |
| Capture it as a **verification checklist that gates before production** | *verification checklist* |

### Rule 5.04 — Operational support is translation plus self-sufficiency

| Concept | Vocabulary |
|---|---|
| **Connect symptoms to architecture causes** | *symptoms to architecture causes* |
| Leave behind **runbooks and escalation paths** so the team needs you for the new problem, not the familiar one | *runbooks*, *escalation paths* |

---

## The named-risk register

The Architecture Build Manual attaches a named risk to each lifecycle stage. These are the highest-
value diagnostic-question seeds in the whole source set, because each names a *specific way a
competent-looking design fails*.

| Named risk | Recap rule | Diagnostic question shape |
|---|---|---|
| Scope creep, unstated constraints | 4.01 | requirements traced to nothing |
| Committing to unfeasible SLAs | 2.03 | a promise made before sizing |
| Forcing Claude into system logic | 1.01 | model doing deterministic work |
| Over-granting agentic autonomy | 1.02 | agent where a workflow belonged |
| **Prompt-based auth bypass** | 2.04 | authorisation living in the prompt |
| **Silent guardrail bypass** | 3.02 | a control that observes the wrong channel |
| Unevaluated prompt changes | 2.01 | a revision that skipped the gate |
| Unmitigated outage failures | 2.02 | no retry, fallback or breaker |
| Reviewer queue fatigue | 3.04 | routing by volume instead of stakes |
| Unowned compliance failure | 3.05 | a control with no owner or evidence |
