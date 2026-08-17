# Artefact B · CCAO-F exam guide concepts

**What this is.** The *Claude Certified Associate – Foundations* exam guide (version 1.0, effective
July 2026) states **30 objectives across 7 content domains**, plus the exam's format, scoring and
audience definitions. Most objectives carry more than one testable idea. This document splits each
into its constituent concepts and records the **canonical vocabulary** attached to each.

**Why it exists.** It is the authoritative half of the master concept inventory: where practice
sources record what an author *believed* is tested, this records what the vendor *says* is tested —
and supplies the exact terminology a candidate will recognise from the guide they were told to
"read in full before scheduling".

**Vocabulary is quoted verbatim** from the source. That is deliberate: a question that uses the
guide's own terms lets a candidate trace a missed item straight back to the objective. Vocabulary
terms are the only verbatim content permitted in any artefact. No sample-question text, option text
or rationale prose from the guide appears here — the guide's three sample items are distilled
separately in [`source-ccas-guide-samples.md`](source-ccas-guide-samples.md).

> Source: `ccas-blueprint` in [`sources.md`](sources.md). Credited in the exam README.

---

## Guide section → what it supplies

| Guide section | Supplies |
|---|---|
| §1 About / §2 Purpose | credential scope statement; the five "can do" claims — the exam's competency spine |
| §3 Intended Audience | **the scope boundary** — who this is *not* for, and what escalates to Architect/Developer. The single most useful section for distractor design |
| §4 Minimally Qualified Candidate | difficulty pitch: applied, not expert; "limited to moderate technical expertise" |
| §5 Exam Details at a Glance | manifest facts: 60 items, 120 minutes, 720/1,000, formats, delivery |
| §6 Content Outline | **the blueprint**: 7 domains, weights, 30 objectives → this artefact's body |
| §7 How to Prepare | the vendor's own named study surfaces: Projects, Artifacts, Memory, Skills, Code Execution |
| §8 Sample Questions | 3 vendor-authored items → [`source-ccas-guide-samples.md`](source-ccas-guide-samples.md) |
| §9 Scoring | criterion-referenced, scaled, no per-section bar |
| §10–§15 Policies | registration, conduct, NDA, recertification — README/intro material, not item material |

## Domain → course-module mapping

The blueprint's domain order is **not** the course's module order. The reconciliation matters
because the recap artefact is organised by module:

| Blueprint domain | Weight | Course module (see [`source-ccas-recap.md`](source-ccas-recap.md)) |
|---|---|---|
| D1 Prompting and Task Execution | 14% | Module 2 · Prompting |
| D2 Output Evaluation and Validation | 21% | Module 3 · Output Evaluation |
| D3 Product and Model Selection | 12% | Module 1 · Product & Model Selection |
| D4 Workflow Integration and Solution Design | 16% | Module 4 · Workflow Integration |
| D5 Configuration and Knowledge Management | 12% | Module 5 · Configuration |
| D6 Governance, Risk, and Responsible Use | 15% | Module 6 · Governance |
| D7 Troubleshooting and Optimization | 10% | Module 7 · Troubleshooting |

One-to-one, in a permuted order. That is unusually clean and it means the recap can act as the
`syllabus_rules` layer without a mapping fudge — the same arrangement `ccar-p` uses.

## Exam facts (for the manifest)

- 60 items · 120 minutes · $99 USD · 12-month validity · delivered by Pearson VUE, online-proctored
  or test centre
- **Item formats: multiple choice and multiple response only.** The guide's wording is that each
  item "states how many responses to select" — so multiple-response items are *n*-of-*m* with the
  count disclosed in the stem. No ordering, no matching, no drag-and-drop, no scenario-matching
- Scoring: criterion-referenced against a fixed standard, scaled 100–1,000, cut score 720 from a
  formal standard-setting study. Per-domain percent-correct is **reported but not used** for the
  pass decision — there is no per-section bar to clear
- Blueprint version 1.0, July 2026, initial publication (guide §16 Document Control)

---

## Domain 1 · Prompting and Task Execution (14%)

### Objective 1.1 — Create effective prompts for business and technical tasks

| Concept | Vocabulary |
|---|---|
| A prompt is a specification: the request must state the work, the inputs that govern it, and what a good result looks like, or the model fills the gap itself | *effective prompts*, *business and technical tasks* |
| Prompt quality is judged by the output's fitness for the business purpose, not by the prompt's length or its confidence-signalling language | *effective* |

> **beecham coverage: partial.** M2-Q01 and M2-Q06 both test "the request is under-specified", which
> is this objective's core. **recap coverage: full** — recap rule 2.01 names five components.

### Objective 1.2 — Apply task decomposition techniques to structure complex requests

| Concept | Vocabulary |
|---|---|
| Complex work is split into ordered steps, each producing a result that can be checked before the next step consumes it | *task decomposition techniques*, *complex requests* |
| Decomposition order is chosen by dependency: the step everything else rests on is built and verified first | *structure complex requests* |
| A single opaque prompt covering many stages cannot be diagnosed when it fails; the fix is structural, not more instructions | *decomposition* |

> **beecham coverage: full** (M2-Q04). **recap coverage: full** (rule 2.03).

### Objective 1.3 — Iterate prompts to improve output quality

| Concept | Vocabulary |
|---|---|
| The output is read as a diagnostic: it identifies which part of the request failed, and only that part is changed | *iterate prompts*, *improve output quality* |
| Iteration terminates — when successive rounds stop improving the result, the remaining gap is a task or evidence problem, not a wording problem | *iterate* |

> **beecham coverage: partial** (M2-Q02 adds boundary examples to a failing classifier — a targeted
> single-component change). **recap coverage: full** (rule 2.04).

### Objective 1.4 — Adapt prompting strategies based on task type (analysis, research, drafting, brainstorming)

| Concept | Vocabulary |
|---|---|
| Task type sets how much latitude the prompt should grant: convergent work is constrained, divergent work is deliberately left open | *adapt prompting strategies*, *task type* |
| The four named task types are the exam's working taxonomy and each has a different failure mode when the wrong strategy is applied | *analysis*, *research*, *drafting*, *brainstorming* |

> **beecham coverage: none** — no item distinguishes analysis from brainstorming strategy.
> **recap coverage: full** (rule 2.05). **This objective is vendor-attested and community-unattested;
> it is 14%-domain content and must not be dropped for lack of a second source.**

---

## Domain 2 · Output Evaluation and Validation (21% — the largest domain)

### Objective 2.1 — Evaluate Claude-generated outputs for accuracy and completeness

| Concept | Vocabulary |
|---|---|
| Evaluation is run against explicit references rather than impressions — the request, the supplied source material, and the standards of the field | *evaluate*, *accuracy and completeness* |
| Completeness is a separate check from accuracy: an output can be entirely true and still omit what the decision needs | *completeness* |
| Review depth is calibrated to what is at stake, not applied uniformly | *evaluate Claude-generated outputs* |

> **beecham coverage: partial** (M3-Q01, M3-Q03 — criteria before critique, mixed-method checks).
> **recap coverage: full** (rules 3.02, 3.05).

### Objective 2.2 — Identify hallucinations, inconsistencies, and biases in responses

| Concept | Vocabulary |
|---|---|
| A hallucination is fabricated specific content presented in the register of fact — the surface signal of confidence is uncorrelated with truth | *hallucinations* |
| The high-risk shapes are invented specifics (numbers, names, citations, dates), internally inconsistent claims, and silently missing coverage | *hallucinations, inconsistencies, and biases* |
| Bias detection is part of routine review of ordinary outputs, not a separate exercise reserved for sensitive topics | *biases* |

> **beecham coverage: partial** (M3-Q04 invented dates; M1-Q08 post-cutoff regulation).
> **recap coverage: full** (rules 3.03, 6.05). **Vendor sample 1 sits exactly here.**

### Objective 2.3 — Apply fact-checking and validation techniques

| Concept | Vocabulary |
|---|---|
| Claims are validated against an authoritative source, not against the model's own restatement or self-rating | *fact-checking and validation techniques* |
| Verification is cheaper when built into the request: permit an explicit "unknown", restrict claims to supplied sources, require citations that can be audited | *validation techniques* |
| Where numbers must be right, they are computed rather than generated as prose | *validation* |

> **beecham coverage: partial** (M3-Q04 grounding controls). **recap coverage: full** (rules 3.04,
> 3.06).

### Objective 2.4 — Determine when human review or additional verification is required

| Concept | Vocabulary |
|---|---|
| The review threshold is decided in advance from stakes, reversibility, audience and regulatory exposure — not negotiated at the moment of sending | *human review or additional verification*, *required* |
| Mandatory review means a qualified reviewer with access to the evidence; an unqualified or evidence-blind approval is not review | *human review* |

> **beecham coverage: full** (M3-Q07, M6-Q02). **recap coverage: full** (rule 3.05).
> **Vendor sample 1 is also an instance of this objective** — the strongest cross-attested concept
> in the whole blueprint.

### Objective 2.5 — Edit, adapt, refine, and compare outputs for the intended audience

| Concept | Vocabulary |
|---|---|
| Adaptation for an audience changes vocabulary, level of detail and framing while leaving the claims intact — reformatting is not a correctness fix | *edit, adapt, refine, and compare*, *intended audience* |
| Comparing candidate outputs requires a stated criterion, otherwise the fluent one wins by default | *compare outputs* |

> **beecham coverage: none.** **recap coverage: partial** (rule 3.02's "professional standards"
> reference). Vendor-attested, community-unattested.

### Objective 2.6 — Organize and curate information and select appropriate output formats (artifacts, inline, structured data)

| Concept | Vocabulary |
|---|---|
| The output format is chosen for how the result will be used and how reliably it must hold: a durable deliverable, a conversational answer, or machine-readable data | *artifacts*, *inline*, *structured data* |
| Format choice is also a reliability choice — the format that makes an error visible beats the format that reads well | *select appropriate output formats* |

> **beecham coverage: none.** **recap coverage: partial** (rule 3.06 "pick the format by
> reliability"). Vendor-attested; the *artifacts / inline / structured data* triad is exam-specific
> vocabulary that appears in no community source screened.

---

## Domain 3 · Product and Model Selection (12%)

### Objective 3.1 — Select appropriate Claude product features (Projects, research mode, chat, artifacts)

| Concept | Vocabulary |
|---|---|
| The entry point is selected before the prompt is written, because it determines what context is available and what the output can be | *Projects*, *research mode*, *chat*, *artifacts* |
| Each of the four named surfaces answers a different problem: recurring work with stable context, tasks needing current multi-source information, one-off work, and deliverable outputs | *Claude product features* |

> **beecham coverage: weak** (M1-Q01 selects "an approved interactive Claude experience" generically,
> without naming a surface). **recap coverage: full** (rule 1.01). Recap and guide agree on the
> four-way split; the community source does not reach it.

### Objective 3.2 — Differentiate between Claude model types (Haiku, Sonnet, Opus)

| Concept | Vocabulary |
|---|---|
| The three tiers trade speed and cost against capability, and each has a characteristic task shape it is the right answer for | *Haiku*, *Sonnet*, *Opus* |
| Tier names are exam vocabulary: an item may name the tier rather than describe it | *Claude model types* |

> **beecham coverage: none** — M1-Q03 tests a model-selection *rule* but never names a tier.
> **recap coverage: full** (rule 1.03, which additionally pins the default tier).

### Objective 3.3 — Align model selection with task requirements (cost, speed, quality)

| Concept | Vocabulary |
|---|---|
| Selection is a constrained optimisation: the cheapest and fastest option that still clears the quality bar the task actually requires | *cost, speed, quality*, *task requirements* |
| Defaulting to the most capable tier for everything is a cost and latency failure, not a safety margin | *align model selection* |

> **beecham coverage: full** (M1-Q03). **recap coverage: full** (rule 1.03). **Vendor sample 2 sits
> exactly here** — the only objective attested by all three source families.

### Objective 3.4 — Understand and manage context limitations and memory considerations (when to restart, summarize, or persist)

| Concept | Vocabulary |
|---|---|
| Context is a finite budget that degrades output quality as it fills; the degradation is gradual and easy to mistake for a model failure | *context limitations* |
| Three named remedies, chosen by what must survive: restart, summarize, or persist | *when to restart, summarize, or persist* |
| Memory persists continuity across sessions and is a distinct mechanism from the conversation's context window | *memory considerations* |

> **beecham coverage: partial and off-register** (M1-Q02/Q04/Q07 test API-level state and token
> limits — the right idea at the wrong layer for this audience; see the Artefact A scope note).
> **recap coverage: full** (rules 1.02, 1.04).

---

## Domain 4 · Workflow Integration and Solution Design (16%)

### Objective 4.1 — Apply Claude to analyze requirements and use cases

| Concept | Vocabulary |
|---|---|
| Messy stakeholder input is turned into structured, traceable, testable requirements others can act on | *analyze requirements and use cases* |
| Requirements analysis is a delegation candidate precisely because its output is checkable | *requirements* |

> **beecham coverage: none.** **recap coverage: full** (rule 4.02).

### Objective 4.2 — Leverage Claude for research, planning, and process optimization

| Concept | Vocabulary |
|---|---|
| Plans are built on verified numbers: synthesis is generated, but the figures underneath are computed | *research, planning, and process optimization* |
| Process optimisation starts from an instrumented workflow, so the friction being removed is the real one | *process optimization* |

> **beecham coverage: partial** (M7-Q05, M7-Q08 — measure then optimise). **recap coverage: full**
> (rules 4.03, 7.04).

### Objective 4.3 — Use Claude to support solution design, development, and iteration

| Concept | Vocabulary |
|---|---|
| Design work is delegated step by step with checkpoints, not handed over whole | *solution design, development, and iteration* |
| Iteration on a design follows the same diagnostic loop as prompt iteration: change the component the result points at | *iteration* |

> **beecham coverage: partial** (M4-Q08 simplest-sufficient-architecture). **recap coverage: partial**
> (rule 4.01).

### Objective 4.4 — Integrate Claude into existing workflows to augment or redesign them

| Concept | Vocabulary |
|---|---|
| Value comes from choosing *which* steps Claude performs; indiscriminate automation is the failure mode | *augment or redesign* |
| Each step is classified against reversibility, stakes and accountability into AI-appropriate, human-retained, or collaborative | *integrate Claude into existing workflows* |
| Approval gates are placed before an irreversible action, not after it | *integrate* |

> **beecham coverage: full** (M4-Q01, M4-Q02, M4-Q07). **recap coverage: full** (rules 4.01, 4.04).

### Objective 4.5 — Communicate Claude's value and limitations to stakeholders

| Concept | Vocabulary |
|---|---|
| Capability claims are stated with their limits and with the human review gates named; overstating value is what loses stakeholder trust | *Claude's value and limitations*, *stakeholders* |
| Recognising the edge of Associate scope and escalating is itself part of the competency | *escalate*, *Claude Architect and Claude Developer credentials* |

> **beecham coverage: none.** **recap coverage: full** (rules 4.05 and the closing "knowing your
> boundary" passage). Vendor-attested only — and it is the objective that carries the exam's own
> scope boundary, so it is high-value for authoring.

---

## Domain 5 · Configuration and Knowledge Management (12%)

### Objective 5.1 — Configure Claude Projects with instructions and knowledge sources

| Concept | Vocabulary |
|---|---|
| Configuration is set-up-once leverage: it changes every subsequent conversation rather than a single output | *configure Claude Projects*, *instructions and knowledge sources* |
| Instructions and knowledge are different mechanisms — one governs behaviour, the other supplies facts — and using one for the other's job is the common error | *instructions*, *knowledge sources* |

> **beecham coverage: partial and off-register** (M5-Q02 places a durable rule in "version-controlled
> application configuration" — the developer analogue of Project instructions). **recap coverage:
> full** (rules 5.01, 5.02).

### Objective 5.2 — Manage uploaded knowledge and connectors (e.g., Google Drive, Gmail)

| Concept | Vocabulary |
|---|---|
| Every connector has a capability boundary; knowing it prevents misrouted fixes when a request cannot be satisfied | *connectors*, *Google Drive*, *Gmail* |
| Uploaded knowledge needs provenance — authority, currency and scope — or stale content is treated as authoritative | *manage uploaded knowledge* |

> **beecham coverage: full** (M5-Q01, M5-Q04, M5-Q07 — source governance, minimal relevant retrieval,
> freshness). **recap coverage: full** (rule 5.03).

### Objective 5.3 — Create effective system-level instructions

| Concept | Vocabulary |
|---|---|
| Standing instructions must be precise and testable; vague ones fail silently, producing no visible error and no behaviour change | *system-level instructions*, *effective* |
| An instruction is written so that its effect on an output can be checked | *create effective system-level instructions* |

> **beecham coverage: partial** (M5-Q02). **recap coverage: full** (rule 5.04) — including the named
> risk "vague standing instructions silently fail".

### Objective 5.4 — Inform, maintain, and update Claude configurations, knowledge sources, and instructions

| Concept | Vocabulary |
|---|---|
| Configurations decay: instructions, knowledge, Skills versions and Memory all age against a changing world | *maintain, and update* |
| Maintenance is scheduled rather than triggered by a complaint, because the decay produces no warning | *Claude configurations, knowledge sources, and instructions* |
| Others must be informed of a configuration change that alters shared outputs | *inform* |

> **beecham coverage: none.** **recap coverage: full** (rule 5.05). Vendor-attested only.

---

## Domain 6 · Governance, Risk, and Responsible Use (15%)

### Objective 6.1 — Identify appropriate and inappropriate use cases

| Concept | Vocabulary |
|---|---|
| Use cases are screened against named criteria — reversibility, consequence, the human element, accountability — producing a three-way verdict, not a yes/no | *appropriate and inappropriate use cases* |
| Governance is exercised by the practitioner one decision at a time; the policy document does not make the call | *governance standards* |

> **beecham coverage: partial** (M6-Q06 prohibited-action handling). **recap coverage: full**
> (rules 6.01, 6.02).

### Objective 6.2 — Apply data sensitivity, regulatory, and privacy considerations

| Concept | Vocabulary |
|---|---|
| Data is classified **before** it enters a feature, and the handling is then matched to the classification | *data sensitivity*, *regulatory*, *privacy considerations* |
| Removing or anonymising regulated identifiers is the control that lets restricted work proceed; instructing the model not to retain data is not a control | *privacy* |
| Different entry points carry different retention and handling properties, so "where" the data goes is part of the decision | *data sensitivity* |

> **beecham coverage: partial** (M6-Q01 classification-first, M6-Q04 log minimisation).
> **recap coverage: full** (rule 6.04). **Vendor sample 3 sits exactly here.**

### Objective 6.3 — Follow organizational AI policies and governance standards

| Concept | Vocabulary |
|---|---|
| Organisational policy binds even when a use looks locally harmless; the exception path runs through a named human authority, not the practitioner | *organizational AI policies*, *governance standards* |
| A Skill (or any installed extension) is software: its source and permissions are evaluated before enabling | *Skills* |

> **beecham coverage: full** (M6-Q05 change governance, M6-Q07 exception authority).
> **recap coverage: full** (rule 6.03).

### Objective 6.4 — Understand the ethical implications of AI usage

| Concept | Vocabulary |
|---|---|
| Ethical risk hides in ordinary outputs — bias, fairness and disclosure are checked as part of routine review, not reserved for obviously sensitive work | *ethical implications* |
| Ambiguous cases are reasoned through against the stated criteria rather than resolved by instinct | *ethical implications of AI usage* |
| Where an output affects a person, disclosure of AI involvement and a route to contest it belong in the design | *ethical* |

> **beecham coverage: partial** (M3-Q07, M6-Q02 — both include disclosure and a contest path).
> **recap coverage: full** (rule 6.05).

---

## Domain 7 · Troubleshooting and Optimization (10%)

### Objective 7.1 — Identify, diagnose, and resolve issues with underperforming prompts or poor outputs

| Concept | Vocabulary |
|---|---|
| Underperformance has discoverable causes; a fixed diagnostic sequence is run before the tool is blamed | *underperforming prompts*, *poor outputs* |
| The four candidate causes are named and checked in order: specification, context, feature choice, configuration | *identify, diagnose, and resolve* |
| Naming the layer that failed is what selects the fix; changing several things at once destroys the diagnosis | *diagnose* |

> **beecham coverage: full** (M7-Q01 baseline comparison, M7-Q06 refusal diagnosis).
> **recap coverage: full** (rules 7.01, 7.02).

### Objective 7.2 — Adjust approach based on feedback and results

| Concept | Vocabulary |
|---|---|
| A disappointing output is evidence: the critique is translated into one specific adjustment | *adjust approach*, *feedback and results* |
| The adjustment is then captured as an instruction or Skill so the fix persists beyond the session | *adjust approach based on feedback* |

> **beecham coverage: partial** (M7-Q08 controlled change process). **recap coverage: full** (rule
> 7.03).

### Objective 7.3 — Optimize workflows for efficiency and effectiveness

| Concept | Vocabulary |
|---|---|
| Optimisation is deliberate and measured: instrument, find the friction, promote the fix into configuration, measure the gain | *optimize workflows*, *efficiency and effectiveness* |
| Optimising without a baseline produces an unfalsifiable claim of improvement | *optimize* |

> **beecham coverage: full** (M7-Q05, M7-Q08). **recap coverage: full** (rule 7.04).

---

## The scope-boundary register

Guide §3 is unusually explicit about what the credential is **not**, and every line of it is a
distractor seed — the plausible-but-out-of-scope option is the natural wrong answer for this
audience. Recorded here because no other source states it.

| Out of scope, per the guide | Belongs to | Diagnostic question shape |
|---|---|---|
| Building against APIs | Claude Developer | A task is framed so that the "real" fix looks like an API integration; the Associate answer is to achieve it with platform features, or to escalate |
| Designing agentic systems | Claude Developer | An option proposes an autonomous agent for work that is occasional and human-reviewed |
| Machine learning, software engineering, advanced AI system design | out of programme | An option offers fine-tuning or model training as the remedy for a prompt or evidence problem |
| Enterprise-scale AI architecture and integration design | Claude Architect | An option proposes an org-wide platform build when the scenario is one team's workflow |
| Everything above, as a *recognition* task | Associate | "Recognize limitations and escalate more complex or technical implementations" is itself an in-scope competency (guide §2) — so *escalate to an Architect/Developer* is sometimes the **keyed** answer, not a distractor. Both polarities must exist in the bank |

## The named-risk register

The guide names failure modes in three places (§4 recommended experience, §6 D2/D6 objectives,
§7 preparation advice). Each is a high-value diagnostic-item seed.

| Named risk | Objective | Diagnostic question shape |
|---|---|---|
| *hallucinations* | 2.2, and §4 "a practical understanding of AI limitations" | A confident output contains a checkable specific; the decision is what to do before it is used |
| *context constraints* | 3.4, §4 | Quality degrades late in a long session; the candidate must choose restart / summarize / persist rather than a wording change |
| *data sensitivity* | 6.2, §4 | Regulated data is about to enter a feature; the control is classify-then-match-handling |
| *inconsistencies* | 2.2 | Two parts of one output disagree, or repeated runs disagree |
| *biases* | 2.2, 6.4 | An output is accurate and still unfair; routine review must catch it |
| Self-reported confidence treated as an accuracy signal | 2.2, 2.3 | An option offers the model's own confidence as the validation step |

## Concepts this source tests that other sources do not spell out

- The four named product surfaces as a closed set — *Projects, research mode, chat, artifacts*
  (3.1). Only the guide and the recap name them; the community source never does.
- The model tiers by name — *Haiku, Sonnet, Opus* (3.2).
- The output-format triad *artifacts / inline / structured data* (2.6).
- Audience adaptation and output comparison (2.5) — absent from every practice source screened.
- Configuration maintenance and informing others of changes (5.4).
- Communicating value **and limitations** to stakeholders (4.5), and the escalation boundary to the
  Developer and Architect credentials (§3) — the exam's own definition of its edges.
- The scoring model itself (scaled 720/1,000, no per-section bar) — intro-page material, not item
  material, but it constrains what the mock may claim.

## Concepts other sources hold that this source does not spell out

The guide states objectives, not mechanisms. The recap supplies the decision frameworks that make
each objective answerable (five prompt components; three evaluation references; four delegation
criteria; the four-step diagnostic sequence), and the Beecham set supplies concrete failure
scenarios. Reconciliation is deferred to `master-inventory.md` at S3.
