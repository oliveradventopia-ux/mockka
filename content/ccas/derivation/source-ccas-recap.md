# Artefact B · CCAO-F course recap concepts

**What this is.** The official *Claude Certified Associate – Foundations Prep Course* states **35
key-takeaway rules across 7 content modules** (plus a closing module). Most carry more than one
testable idea. This document splits each into its constituent concepts and records the **canonical
vocabulary** attached to each.

**Why it exists.** It is the second authoritative half of the master concept inventory. The exam
guide states *what* is measured; the course states *the decision frameworks a candidate is taught
to apply* — and supplies the exact terminology a candidate will recognise from study. Where the
guide says "adapt prompting strategies based on task type", the course names the five prompt
components and the strategy split. That is the difference between an objective and an answerable
item.

**Vocabulary is quoted verbatim** from the source; nothing else is. No lesson prose, no takeaway
sentences, no examples are reproduced — the rules below are restated in our own words and the
verbatim content is confined to short technical labels, as permitted by
`methodology/01-source-distillation.md#clean-room`.

> Source: `ccas-course-recap` in [`sources.md`](sources.md) — own notes from the legitimately
> accessed official course, proof-of-access basis on file. Credited in the exam README.

**Layer role.** These 35 rules are this exam's `syllabus_rules` layer (manifest
`layers.syllabus_rules: true`), playing exactly the part the 24 architectural rules play in
`ccar-p`: the weak-rule report a candidate gets after a sitting names the *rule* they missed, not
just the domain.

---

## Module → exam domain mapping

| Source module | Maps to exam domain |
|---|---|
| Module 1 · Product & Model Selection | D3 Product and Model Selection (12%) |
| Module 2 · Prompting | D1 Prompting and Task Execution (14%) |
| Module 3 · Output Evaluation | D2 Output Evaluation and Validation (21%) |
| Module 4 · Workflow Integration | D4 Workflow Integration and Solution Design (16%) |
| Module 5 · Configuration | D5 Configuration and Knowledge Management (12%) |
| Module 6 · Governance | D6 Governance, Risk, and Responsible Use (15%) |
| Module 7 · Troubleshooting | D7 Troubleshooting and Optimization (10%) |
| Module 8 · Course Closing | no domain — supplies the *AI Fluency* thread, the escalation boundary, and the exam-format statement |

Clean 1:1 in a permuted order. The course closing states the mapping itself ("the exam mirrors the
seven content modules"), which is why no fudge is needed.

## What the closing module attests about the exam

Recorded because it independently corroborates the blueprint and sets the difficulty pitch:

- **60 questions** — matches the guide's §5 item count exactly.
- **Scenario-style; apply a skill or make a judgment rather than recall a fact.** This is the
  authoring pitch for the whole bank: recall items are off-blueprint by the vendor's own
  description of its exam.
- The exam **mirrors the seven content modules**, so module-level weakness maps to domain-level
  weakness — the mechanism the `syllabus_rules` layer exists to serve.
- **Escalation is an Associate-level skill**: API integration, agent building and tool development
  belong to a *Claude Developer*; enterprise architecture, integration design and governance at
  scale belong to a *Claude Architect*. This mirrors guide §3 and confirms the scope-boundary
  register in [`source-ccas-blueprint.md`](source-ccas-blueprint.md).

**Two version discrepancies, recorded not resolved:**

1. The recap's own source note cites the *"Anthropic Claude Associate blueprint (v1.3)"*, while the
   published exam guide is **version 1.0, effective July 2026** (§16 Document Control: "1.0 ·
   Initial publication"). These are different numbering series — a course-internal blueprint
   revision versus the public guide's document version. `manifest.blueprint_version` follows the
   **published guide (1.0, July 2026)**, because that is the artefact the P1 vendor-watch engine
   can diff. Flagged for Gate 1.
2. The recap states its product descriptions are accurate **as of June 2026** and repeatedly tells
   the reader to verify feature behaviour against current documentation before relying on it —
   naming Memory import (experimental), Code Execution file outputs and sandbox egress, connector
   capability boundaries, Skills versioning, and tier availability as specifically volatile. **No
   item should turn on a volatile product detail from this source.** Items must test the *judgment*
   the rule teaches, not the feature's June-2026 configuration.

---

## Module 1 · Product & Model Selection → D3

### Rule 1.01 — Select the entry point before writing the prompt

| Concept | Vocabulary |
|---|---|
| The entry point is chosen first because it constrains every later decision in the session | *entry point* |
| Four surfaces answer four different problems: one-off work, recurring work with stable context, deliverable outputs, and tasks needing current multi-source information | *Chat*, *Projects*, *Artifacts*, *Research* |
| Choosing the surface by habit rather than by task shape is the failure this rule prevents | *entry-point decision* |

> **Blueprint: objective 3.1** (the guide's list is *Projects, research mode, chat, artifacts* — the
> same four, with "research mode" as the guide's name for *Research*).
> **beecham coverage: none** — no item names a surface.

### Rule 1.02 — Four capability layers, four distinct problems

| Concept | Vocabulary |
|---|---|
| Capability layers are selected by which problem the task actually has, and may be combined | *capability layers* |
| Each layer owns one job: carrying context, defining repeatable procedures, verifying computation, persisting continuity | *Projects*, *Skills*, *Code Execution*, *Memory* |
| Using the wrong layer produces a plausible-looking configuration that silently fails to solve the problem | *capability layers* |

> **Blueprint: objectives 3.1, 5.1, 5.2.** **beecham coverage: none.**

### Rule 1.03 — Model tiers reflect a speed-capability trade-off

| Concept | Vocabulary |
|---|---|
| Three tiers, three task shapes: structured high-volume work, most professional work, and complex high-stakes work where quality outranks speed | *Haiku*, *Sonnet*, *Opus* |
| The tier is matched to what the task demands; capability is not a free upgrade | *speed-capability trade-off* |

> **Blueprint: objectives 3.2, 3.3.** **beecham coverage: partial** — M1-Q03 gets the *rule* right
> without naming any tier. **This is the exam's single most cross-attested concept** (guide
> objective + vendor sample 2 + recap + community).

### Rule 1.04 — Context is a budget

| Concept | Vocabulary |
|---|---|
| Long conversations degrade as the budget fills; the degradation is gradual and reads as a model failure | *context is a budget* |
| Three remedies chosen by what must survive the transition | *restart*, *summarize*, *persist* |
| Managing context deliberately beats working around drift after it has accumulated — the decision is made before quality visibly drops | *context* |

> **Blueprint: objective 3.4.** **beecham coverage: off-register** — its context items are about API
> token limits and stop reasons, not conversational drift.

### Rule 1.05 — Variation is inherent; review is structural

| Concept | Vocabulary |
|---|---|
| Every feature, including a configured Skill, produces different output run to run — variation is a property, not a defect to eliminate | *variation* |
| Because output varies, evaluation must be a structural step in the workflow rather than a reaction to a bad result | *review* |

> **Blueprint: objectives 2.1, 7.2.** **beecham coverage: full** — M3-Q08 measures label agreement
> across repeated runs, which is this rule made quantitative.

---

## Module 2 · Prompting → D1

### Rule 2.01 — Structure drives quality, not cleverness

| Concept | Vocabulary |
|---|---|
| Five components carry almost every professional prompt, and running them is a checklist, not an art | *role*, *context*, *task*, *constraints*, *format* |
| Clever phrasing is not a substitute for a missing component | *structure* |

> **Blueprint: objective 1.1.** **beecham coverage: full** — M2-Q01 and M2-Q06 are both "the role is
> set but the specification is missing".

### Rule 2.02 — Context is the component you will forget

| Concept | Vocabulary |
|---|---|
| The model cannot see what exists only in the requester's head; unstated context is the default failure | *context gap* |
| Generic output is diagnosed as a context gap before it is diagnosed as a model limitation | *context gap*, *model limitation* |

> **Blueprint: objectives 1.1, 1.3.** **beecham coverage: partial** — M2-Q02's remedy (boundary
> examples) is the same diagnosis one step downstream. **Named risk — see the register below.**

### Rule 2.03 — Decompose complex work into ordered steps

| Concept | Vocabulary |
|---|---|
| Each step must produce a checkable result before the next consumes it | *checkable result* |
| The high-stakes foundation is built first, because later steps inherit its errors | *ordered steps* |

> **Blueprint: objective 1.2.** **beecham coverage: full** (M2-Q04).

### Rule 2.04 — Iterate on the component that failed

| Concept | Vocabulary |
|---|---|
| The output is read as a diagnostic that names which of the five components failed | *diagnostic* |
| Exactly one thing is changed per round, so the effect is attributable | *iterate* |
| Iteration stops when rounds stop improving the result — persistence past that point is wasted effort and a signal the problem is elsewhere | *rounds* |

> **Blueprint: objective 1.3.** **beecham coverage: partial** (M7-Q01's one-variable-at-a-time rule
> is the same discipline in the troubleshooting domain).

### Rule 2.05 — Match strategy to task type

| Concept | Vocabulary |
|---|---|
| Convergent tasks are constrained; divergent tasks are given latitude — and the choice is made deliberately per task | *analysis*, *brainstorming*, *constraints*, *latitude* |
| Control and range are traded against each other; a prompt cannot maximise both | *strategy* |

> **Blueprint: objective 1.4.** **beecham coverage: none.** Vendor-attested only.

---

## Module 3 · Output Evaluation → D2 (largest domain, 21%)

### Rule 3.01 — Accountability stays with you

| Concept | Vocabulary |
|---|---|
| The sender owns every claim in what they ship, regardless of who or what drafted it | *accountability* |
| Accountability is non-delegable, which is why this domain carries the most weight | *accountability* |

> The recap states plainly that this is **the exam's largest section** — an independent corroboration
> of D2 at 21% from a source that never quotes a weight. **Blueprint: objectives 2.1, 2.4.**

### Rule 3.02 — Evaluate against three references

| Concept | Vocabulary |
|---|---|
| The same three references are checked every time: the requirements, the source material, and professional standards | *requirements*, *source material*, *professional standards* |
| Depth of review is calibrated to what is at stake; the reference set is not | *depth of review* |

> **Blueprint: objectives 2.1, 2.5.** **beecham coverage: partial** (M3-Q03's mixed deterministic +
> rubric design).

### Rule 3.03 — Plausible is not verified

| Concept | Vocabulary |
|---|---|
| Three failure shapes all read as competent work: invented specifics, confidence expressed where uncertainty exists, and silently missing coverage | *fabricated specifics*, *confident uncertainty*, *completeness gaps* |
| Fluency and confidence are not accuracy signals, so the reviewer must look for the shapes rather than for a feeling of wrongness | *plausible* |

> **Blueprint: objective 2.2.** **Vendor sample 1 is a direct instance.** **beecham coverage: full**
> (M3-Q04). **Named risk — see the register below.**

### Rule 3.04 — Build verification into the prompt

| Concept | Vocabulary |
|---|---|
| Three prompt-level controls make verification cheap: permitting an explicit "don't know", restricting claims to supplied sources, and requiring citations that can be audited | *permit "I don't know"*, *restrict to sources*, *auditable citations* |
| Prevention at request time is cheaper than reconstruction at review time | *prevention*, *reconstruction* |

> **Blueprint: objective 2.3.** **beecham coverage: full** (M3-Q04 combines all three).

### Rule 3.05 — Know the thresholds in advance

| Concept | Vocabulary |
|---|---|
| Four factors decide when human review is mandatory | *stakes*, *reversibility*, *audience*, *regulatory exposure* |
| The line is set before the moment of decision, not negotiated under time pressure | *thresholds* |

> **Blueprint: objective 2.4.** **beecham coverage: full** (M3-Q07, M6-Q02).

### Rule 3.06 — Pick the format by reliability

| Concept | Vocabulary |
|---|---|
| When numbers must be right they are computed rather than generated as prose | *code execution* |
| Output format is a reliability decision before it is a presentation decision | *format* |

> **Blueprint: objectives 2.6, 4.3.** **beecham coverage: full** (M4-Q01 splits deterministic
> calculation from generated explanation).

---

## Module 4 · Workflow Integration → D4

### Rule 4.01 — Delegate deliberately, do not automate indiscriminately

| Concept | Vocabulary |
|---|---|
| Value comes from choosing which steps are delegated, not from delegating the whole workflow | *delegate deliberately* |
| A workflow that hands everything over loses the checkpoints that made it trustworthy | *workflow value* |

> **Blueprint: objectives 4.4, 4.3.** **beecham coverage: full** (M4-Q07, M4-Q08).

### Rule 4.02 — Claude is a requirements-analysis partner

| Concept | Vocabulary |
|---|---|
| Messy inputs are converted into structured, traceable, testable needs that others can act on | *requirements-analysis partner*, *traceable*, *testable* |
| The output's checkability is what makes this step safe to delegate | *structured* |

> **Blueprint: objective 4.1.** **beecham coverage: none.**

### Rule 4.03 — Build plans on verified numbers

| Concept | Vocabulary |
|---|---|
| Synthesis may be generated; the figures underneath a plan are computed | *verified numbers* |
| Pairing generation with computation is a design choice made when the plan is built, not a check added afterwards | *code execution* |

> **Blueprint: objective 4.2.** **beecham coverage: full** (M4-Q01).

### Rule 4.04 — Map every step against three criteria

| Concept | Vocabulary |
|---|---|
| Three criteria classify each step | *reversibility*, *stakes*, *accountability* |
| The classification is three-way, not binary | *AI-appropriate*, *human-retained*, *collaborative* |

> **Blueprint: objective 4.4.** **beecham coverage: full** (M4-Q02 places the approval gate before
> the irreversible action).

### Rule 4.05 — Communicate limits as clearly as value

| Concept | Vocabulary |
|---|---|
| Capability claims are stated together with the human review gates that make them safe | *human review gates* |
| Accurate limits are what earn and keep stakeholder trust; overstatement is the trust failure | *capability claims* |

> **Blueprint: objective 4.5.** **beecham coverage: none.** Vendor-attested only, and it carries the
> escalation boundary — high authoring value.

---

## Module 5 · Configuration → D5

### Rule 5.01 — Configuration is leverage

| Concept | Vocabulary |
|---|---|
| Set-up-once work pays out on every subsequent conversation, which is what separates operating the tool from using it | *configuration is leverage* |
| The investment decision is made against how often the work recurs | *configured environment* |

> **Blueprint: objective 5.1.** **beecham coverage: partial** (M5-Q02).

### Rule 5.02 — Match each need to the right mechanism

| Concept | Vocabulary |
|---|---|
| Four mechanisms, four jobs: behaviour, facts, procedures, continuity | *instructions*, *knowledge*, *Skills*, *scoped Memory* |
| Putting a need in the wrong mechanism produces a configuration that looks complete and does not hold | *mechanism* |

> **Blueprint: objectives 5.1, 5.3.** **beecham coverage: partial** (M5-Q02, M5-Q05 — both about
> where a durable requirement should live).

### Rule 5.03 — Know each connector's boundary

| Concept | Vocabulary |
|---|---|
| Every connector extends reach up to a capability edge; knowing the edge prevents misrouted fixes | *connectors*, *capability edge* |
| A request that fails at the boundary is a scope problem, not a prompt problem | *boundary* |

> **Blueprint: objective 5.2.** **beecham coverage: partial** (M5-Q04, M5-Q06 — retrieval scope and
> authorisation, at the developer layer).

### Rule 5.04 — Write instructions precisely

| Concept | Vocabulary |
|---|---|
| Standing instructions must be precise and testable; a vague one changes nothing and reports nothing | *standing instructions* |
| An instruction is written so that its effect on an output can be observed | *precise*, *testable* |

> **Blueprint: objective 5.3.** **beecham coverage: partial** (M5-Q02). **Named risk — silent
> failure.**

### Rule 5.05 — Maintain or watch quality decay

| Concept | Vocabulary |
|---|---|
| Configurations age against a changing world: instructions, knowledge, Skills versions and Memory all drift | *quality decay* |
| Reviews are scheduled, because decay produces no warning signal | *scheduled reviews*, *Skills versions* |

> **Blueprint: objective 5.4.** **beecham coverage: partial** (M5-Q07's stale-content risk).
> **Named risk — see the register below.**

---

## Module 6 · Governance → D6

### Rule 6.01 — Governance is a practitioner skill

| Concept | Vocabulary |
|---|---|
| Responsible use is exercised one decision at a time by the person doing the work | *practitioner skill* |
| The policy document does not make the call; it bounds it | *responsible use* |

> **Blueprint: objectives 6.1, 6.3.** **beecham coverage: partial** (M6-Q07 — the exception runs
> through a named authority).

### Rule 6.02 — Screen use cases with the Delegation criteria

| Concept | Vocabulary |
|---|---|
| Four criteria screen a use case | *reversibility*, *consequence*, *human element*, *accountability* |
| The verdict is three-way, and the middle verdict is the common one | *appropriate*, *appropriate-with-review*, *inappropriate* |

> **Blueprint: objective 6.1.** **beecham coverage: partial** (M6-Q06). Note this is the same
> criteria family as rule 4.04 with *human element* substituted for *stakes* — a merge candidate
> S3 must decide explicitly rather than silently.

### Rule 6.03 — A Skill is software

| Concept | Vocabulary |
|---|---|
| Source and permissions are evaluated before a Skill is enabled, exactly as for any installed software | *source and permissions* |
| Extending capability is a supply-chain decision, not a convenience toggle | *a Skill is software* |

> **Blueprint: objective 6.3.** **beecham coverage: none** in the Associate register (M6-Q03 covers
> untrusted content at the agent layer, which is the Developer analogue).

### Rule 6.04 — Know data sensitivity before it enters a feature

| Concept | Vocabulary |
|---|---|
| Classification happens first; handling is then matched to the classification | *data sensitivity*, *classify first* |
| Named handling controls: private sessions, memory controls, and removing identifiers before use | *Incognito*, *Memory controls*, *redaction* |

> **Blueprint: objective 6.2.** **Vendor sample 3 is a direct instance.** **beecham coverage: full**
> (M6-Q01).

### Rule 6.05 — Ethical risk hides in ordinary outputs

| Concept | Vocabulary |
|---|---|
| Bias, fairness and disclosure are evaluated as part of routine review, not reserved for obviously sensitive work | *bias*, *fairness*, *disclosure* |
| Ambiguous cases are reasoned through against the criteria rather than settled by instinct | *ambiguous cases* |

> **Blueprint: objective 6.4.** **beecham coverage: partial** (M6-Q02).

---

## Module 7 · Troubleshooting → D7

### Rule 7.01 — Underperformance has discoverable causes

| Concept | Vocabulary |
|---|---|
| A fixed diagnostic sequence is run in order before the tool is blamed | *specification*, *context*, *feature*, *configuration* |
| The sequence is ordered cheapest-and-most-likely first | *diagnostic sequence* |

> **Blueprint: objective 7.1.** **beecham coverage: full** (M7-Q06). This four-step sequence is the
> highest-value framework in the module: it converts a vague "it's not working" into a decidable item.

### Rule 7.02 — Isolate before you fix

| Concept | Vocabulary |
|---|---|
| Name whether the failure is the prompt, the context, the feature choice, or an expectation mismatch — the named cause selects the fix | *isolate*, *expectation mismatch* |
| Expectation mismatch is a real diagnosis: sometimes nothing is broken except the expectation | *expectation mismatch* |

> **Blueprint: objective 7.1.** **beecham coverage: full** (M7-Q01's one-variable-at-a-time
> reconstruction).

### Rule 7.03 — Every disappointing output is data

| Concept | Vocabulary |
|---|---|
| Critique is translated into one specific adjustment rather than a general resolve to do better | *specific adjustment* |
| The fix is then captured as an instruction or Skill so it persists beyond the session | *capture the fix* |

> **Blueprint: objective 7.2.** **beecham coverage: partial** (M7-Q08). The *persist-the-fix* half
> links D7 back to D5 — a documented cross-domain placement for S3.

### Rule 7.04 — Optimize deliberately

| Concept | Vocabulary |
|---|---|
| Four ordered moves: instrument the workflow, find the friction, promote the fix into configuration, measure the gain | *instrument*, *friction*, *promote*, *measure the gain* |
| Optimisation without a baseline produces a claim that cannot be checked | *measure the gain* |

> **Blueprint: objectives 7.3, 4.2.** **beecham coverage: full** (M7-Q05, M7-Q08).

---

## Module 8 · Course closing — the AI Fluency thread

Not a domain, but a vocabulary spine that runs through all seven modules and is worth carrying into
rationales because a candidate will recognise it:

| Competency | What it names | Primary domains |
|---|---|---|
| *Description* | telling Claude precisely what is wanted — the prompting discipline | D1 |
| *Discernment* | judging what comes back | D2 |
| *Diligence* | verifying and governing before it ships | D2, D6 |
| *Delegation* | deciding what to hand over and what to keep | D4, D6 |

The recap attributes this to the external *AI Fluency Framework*, cited in every module's source
list. Recorded as vocabulary only; no framework content beyond these four labels is used.

## The named-risk register

The course names failure modes and attaches each to a rule. The CCAR-P build found these the
highest-value question seeds in the whole source set, because each names a specific way competent
work fails. This exam's set:

| Named risk | Rule | Diagnostic question shape |
|---|---|---|
| *context gap* — generic output blamed on the model | 2.02 | Output is bland and on-topic; the candidate must diagnose the missing component rather than change the model or lengthen the prompt |
| *fabricated specifics* | 3.03 | A confident output contains a checkable specific bound for a consequential audience |
| *confident uncertainty* | 3.03 | The output signals certainty about something the supplied evidence does not settle |
| *completeness gaps* | 3.03 | Everything present is correct; the decision still cannot be made from it |
| Silent failure of vague standing instructions | 5.04 | A configuration is in place, behaviour is unchanged, and nothing has errored |
| Configuration decay | 5.05 | A previously reliable Project degrades with no change to the prompt |
| Context degradation in long sessions | 1.04 | Quality drops late in a long conversation; restart / summarize / persist must be chosen between |
| Run-to-run variation mistaken for a defect | 1.05 | Two runs of a configured Skill differ; the response is structural review, not a bug report |
| Ethical risk in ordinary outputs | 6.05 | An accurate, well-formatted output carries an unfair framing |
| Indiscriminate automation | 4.01 | A workflow is handed over whole and loses its checkpoints |

## Concepts this source tests that other sources do not spell out

- The five prompt components as a named checklist (2.01) — the guide says "create effective
  prompts" and stops.
- The three evaluation references (3.02) and the four review-threshold factors (3.05).
- The three verification-by-construction controls (3.04).
- The four delegation criteria and the **three-way** verdict (4.04, 6.02) — the guide implies a
  binary appropriate/inappropriate split; the course's middle verdict *appropriate-with-review* is
  what most real items turn on.
- The four-step diagnostic sequence (7.01) and *expectation mismatch* as a legitimate diagnosis
  (7.02).
- The mechanism-matching rule for configuration (5.02) and the *capability edge* framing for
  connectors (5.03).
- *A Skill is software* (6.03) — supply-chain judgment applied to platform extensions.
- The AI Fluency four-competency vocabulary.

## Concepts other sources hold that this source does not spell out

The recap is a takeaway layer, not a full curriculum: it names frameworks without enumerating the
product surfaces' individual behaviours (the guide's *artifacts / inline / structured data* triad
and the *Google Drive / Gmail* connector examples appear only in the guide), and it contains no
worked failure scenarios (the Beecham set supplies those). Reconciliation is deferred to
`master-inventory.md` at S3. A top-up pass over the course's lesson bodies — not extracted, see the
`anthropic-prep-course` registry entry — would close most of this gap.
