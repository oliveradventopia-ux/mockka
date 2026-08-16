# 03 · The authoring guide (S4) {#authoring-guide}

Stage manual for S4 in [`00-pipeline.md`](00-pipeline.md). Owner: exam-author, executing
`/exam-author`, clean-room (works from `concepts.json` + the derivation artefacts; never opens
source texts — [rule](01-source-distillation.md#clean-room)).

**Provenance note.** The CCAR-P repo referenced a `docs/authoring-guide.md` four times but never
contained one — the craft lived in the bank itself. This document reconstructs that guide for
real, generalized: the 20 distractor patterns are recovered from the CCAR-P distillation's
frequency table and per-item annotations, and the 8 themes are re-derived from their usage across
the CCAR-P bank (evidence per theme [below](#themes)). It is a Mockka deliverable, not a CCAR-P
backfill.

Two ideas carry everything else:

1. **A wrong option is engineered, not written.** Every distractor instantiates a *named failure
   pattern of professional judgment* — a way a competent-looking practitioner actually goes wrong.
   That is what makes a distractor defensible-but-inferior instead of obviously wrong.
2. **A question exercises a judgment type, not just a topic.** The theme is the kind of judgment
   the item demands (select a pattern, diagnose a mechanism, hold a professional line…). Concept ×
   theme is the item's real identity; the scenario is wardrobe.

---

# Part 1 · The distractor taxonomy: D01–D20 {#patterns}

The patterns are **exam-agnostic**: they describe failures of professional judgment, not facts
about any one syllabus. The machine-readable registry (ids, names, one-line definitions the
validator checks tags against) is `methodology/distractor-patterns.json`; this document is the
craft manual behind it. Per-exam calibration — which patterns are capped, which are encouraged —
comes from each exam's Artefact A frequency table and lands in the manifest's pattern caps.
Per-exam *extensions* (patterns a domain needs that the shared twenty don't cover) are declared in
`authoring.json` as `E01…` and documented in the exam's derivation docs.

Conventions used below: each pattern gets **what it is**, **when it's the right pattern** (the
scenario shapes it belongs to), and **a generic sketch**. "Observed sub-forms" are the analytical
shorthand labels from the CCAR-P reference distillation — reuse the idiom: every tagged distractor
in an Artefact A or a bank item should carry a sub-form label (`D03 flood-and-hope`), because the
labels are what make frequency tables auditable.

### D01 · over-engineering {#d01}

**What it is.** The option adds structure, machinery, or autonomy the problem does not warrant:
more components, more gates, more granularity, more parallelism — sophistication as a reflex.
Observed sub-forms: gate-everything, deploy-everywhere, more-granular-tools, split-the-fleet,
bottleneck-SPOF, parallel-violates-halt, emergent-not-guaranteed, unasked-operating-model.

**When it's the right pattern.** Scenarios where the correct answer is the *modest* design and the
scenario's scale or stakes make the elaborate option feel prudent. It is the natural foil for any
"choose the simplest structure that meets the constraint" concept.

**Sketch.** The scenario needs a fixed, auditable four-step document flow; the distractor proposes
a coordinator with parallel specialist workers — which sounds more capable and quietly violates
the audit-order requirement the stem stated.

### D02 · under-structuring {#d02}

**What it is.** The mirror image of D01: the option removes or refuses structure the task
demonstrably needs — one undifferentiated prompt, a single generic tool, discarded intermediate
state, structure flattened "for simplicity". Observed sub-forms: remove-structure,
discards-semantic, discard-intermediates, generic-execute-tool.

**When it's the right pattern.** Scenarios where the failure evidence points *at* missing
structure (skipped sub-tasks, conflicting instructions, unauditable steps) and "simplify" is the
seductive wrong direction.

**Sketch.** A long compliance checklist is being skipped item-by-item; the distractor merges
everything into one shorter mega-prompt "to reduce confusion" — removing exactly the sequencing
that would have forced each item to be addressed.

### D03 · capacity-for-structure {#d03}

**What it is.** Answers a *structural* problem with *more capacity*: a bigger model, a longer
context, more tokens, more examples, more repetition — throwing resources where a design change is
needed. Observed sub-forms: double-the-prompt, repeat-and-bloat, length-not-fidelity, more-tokens,
more-examples, bigger-context, flood-and-hope, longer-descriptions, doesn't-scale,
more-of-the-wrong-content.

**When it's the right pattern.** Almost everywhere — which is the problem. It was the most
over-used pattern in the CCAR-P reference set (~14 of 63 items) and is the first distractor a
prepared candidate learns to discard on sight. **Cap it** (CCAR-P caps it below 10% of wrong
options; re-derive the cap per exam from Artefact A).

**Sketch.** Retrieval returns fragments that sever cross-references; the distractor retrieves *ten
times more* fragments so the answer is "probably in there somewhere".

### D04 · knob-twiddling {#d04}

**What it is.** A superficial parameter or setting change dressed as an intervention — plausible
activity whose mechanism has nothing to do with the failure. Observed sub-forms: temperature
(repeatedly — it is the classic tell), casing, raise-temperature, config-not-correctness.

**When it's the right pattern.** Diagnosis scenarios, as the "do *something* cheap" option. Like
D03 it is an easy tell; **cap it** and never let the same knob appear twice in one exam's
distractor set.

**Sketch.** Output format violations are breaking a downstream parser; the distractor adjusts the
sampling temperature — a lever entirely unrelated to format compliance.

### D05 · symptom-treatment {#d05}

**What it is.** Intervenes downstream of the cause: the visible number may move, but the broken
mechanism stays broken and usually resurfaces elsewhere. Observed sub-forms:
change-without-measuring, misdiagnosis, one-lever-blindly, truncate-regardless, shorten-not-reduce,
relocate-same-tokens, marginal-gain, barely-helps, worse-fragmentation, multiplies-maintenance,
unevidenced-intervention, deepen-the-mismatch, changes-rate-not-expectation.

**When it's the right pattern.** Any diagnosis item. It is the strongest all-purpose distractor
because symptom-treatments *genuinely help a little*, which makes them defensible — the candidate
must see that the mechanism is untouched. Spread evenly; it survives capping.

**Sketch.** Costs are dominated by one workload's enormous prompts; the distractor truncates *all*
outputs across every workload — spend drops slightly, the dominant driver is untouched.

### D06 · wrong-layer {#d06}

**What it is.** The right *kind* of control placed at the wrong *architectural layer* — protection
that exists but cannot function where the risk lives. Observed sub-forms: credential-anti-pattern
(authorisation living in instructions rather than the access-control layer),
protects-transit-not-destination, encrypt-secrets-not-behaviour.

**When it's the right pattern.** Security, compliance, and enforcement scenarios — anywhere the
concept is "*where* does this control belong". It was the most under-used pattern in the CCAR-P
reference set relative to its teaching value (3 of 63): it forces the candidate to reason about
placement, which is the core of most governance concepts. **Raise it.**

**Sketch.** Per-user data access must be enforced; the distractor writes the restriction into the
system instructions ("only show the user their own records") — a real control, at a layer any
crafted input can walk past, instead of at the data-access layer.

### D07 · detective-for-preventative {#d07}

**What it is.** Substitutes after-the-fact detection where prevention is required: review the
damage instead of blocking it. Observed sub-forms: review-after-the-fact, weekly-spot-check,
sample-only, post-launch-survey, quarterly-review, log-for-later.

**When it's the right pattern.** Scenarios where an action is irreversible or high-stakes and the
concept is "the control must sit *before* the action". The detective option is defensible because
detection *is* a legitimate control — just not for this stakes profile.

**Sketch.** An assistant can execute payments above a threshold; the distractor proposes a daily
audit report of executed payments — excellent for trends, useless for the one wire transfer that
should never have left.

### D08 · lagging-for-leading {#d08}

**What it is.** Watches a lagging, downstream, or outcome-adjacent signal where a leading,
mechanism-internal indicator is needed — you learn about the failure from its victims. Observed
sub-forms: user-complaints, cost-not-correctness, cost-not-quality, volume, spend, availability
(all moving while quality silently degrades).

**When it's the right pattern.** Monitoring and measurement scenarios: "which indicator warns you
*first*?" The distractor set is naturally three lagging signals that all sound like diligent
monitoring.

**Sketch.** Answer quality depends on retrieval relevance; the distractor monitors user
satisfaction scores — which will indeed fall, weeks after the index went stale.

### D09 · disclosure-instead-of-fix {#d09}

**What it is.** Discloses, labels, or documents the defect instead of fixing it — a warning
sticker on a broken control. Observed sub-forms: policy-notice, hide-the-output,
disclosure-instead-of-fix.

**When it's the right pattern.** Scenarios where transparency is *also* a real obligation, so the
disclosure option sounds responsible. The candidate must separate "users were told" from "the harm
was prevented". Pairs naturally with compliance and accuracy concepts.

**Sketch.** An assistant answers from data it should minimise before processing; the distractor
adds a privacy notice explaining that data is processed — informative, and the data still flows.

### D10 · interval-shrink {#d10}

**What it is.** Shortens a batch or refresh interval when the requirement is a *different
mechanism entirely* — nightly becomes hourly, weekly becomes daily, and the design is still wrong
by construction between refreshes.

**When it's the right pattern.** Freshness and live-state scenarios: anywhere the concept is
"snapshot-based approaches cannot meet this requirement at any frequency". Absent from the CCAR-P
reference source set (count 0) and deliberately introduced in the CCAR-P bank as the natural
distractor for live-state-vs-retrieval items — the strongest example of a pattern the taxonomy
predicts even when no source uses it.

**Sketch.** Users ask about their *current* account state; the distractor re-indexes the nightly
export every hour. Fresher, and still a stale snapshot the moment anything changes.

### D11 · non-architectural-criteria {#d11}

**What it is.** Decides on criteria outside the engineering decision framework: spectacle,
politics, prestige, speed-to-demo, budget optics, status-quo comfort. The option describes a real
organisational force — just not a valid basis for the decision. Observed sub-forms: spectacle,
politics, speed, volume, budget, prestige, cosmetic, status-quo.

**When it's the right pattern.** Selection and prioritisation scenarios ("which use case first?",
"which project ships?"), where the concept is the *decision framework itself* (value ×
feasibility × risk, or the exam's equivalent).

**Sketch.** Choosing a first deployment, the distractor picks the project the executive sponsor
demoed at the town hall — maximum visibility, unmeasured value, unassessed risk.

### D12 · anecdote-for-measurement {#d12}

**What it is.** Substitutes anecdote, assumption, opinion, or an unrepresentative proxy for
controlled measurement. The largest family in the taxonomy. Observed sub-forms:
assumption-over-measurement, avoid-the-eval, guess, opinion-sampling, demo-theatre,
wrong-benchmark, re-measure-same-distribution, synthetic-inherits-blind-spots,
prompt-example-memorisation, builders-assumptions, price-the-unvalidated, prototype-anchors,
copy-a-competitor, journey-artefact, documents-what-wasnt-built, adopt-everything.

**When it's the right pattern.** Every measurement-discipline concept (theme T4 territory). The
craft is picking the sub-form that *most resembles* evidence: a benchmark (wrong distribution), a
demo (unrepresentative), a re-test (same data), an expert opinion (uncontrolled).

**Sketch.** Deciding whether a revision is better, the distractor re-runs the original examples it
was tuned on and reports the improvement.

### D13 · blast-radius-expansion {#d13}

**What it is.** The option achieves the stated goal while widening exposure: broader credentials,
internals exposed across a boundary, controls bypassed for convenience. It works — that's the
trap. Observed sub-forms: unrestricted-credentials, exposes-internals, bypasses-access-control,
blast-radius.

**When it's the right pattern.** Integration and access scenarios where the stem's goal is
functional ("make it work across teams") and the concept is the containment constraint the
solution must also respect.

**Sketch.** Several teams need a capability; the distractor ships one shared service account with
admin scope to all of them — everything works on day one.

### D14 · dogma {#d14}

**What it is.** Applies a best practice as a slogan, ignoring that its precondition does not hold
here. The rule is real; the context is wrong. Observed sub-form: dogma ("always do X"), applied
where the scenario's binding constraint points the other way.

**When it's the right pattern.** Trade-off scenarios with a quantified constraint (a latency
budget, a cost envelope): the dogmatic option recites the usually-right practice the constraint
overrides. Use sparingly — it needs a nameable dogma to ring true (CCAR-P reference count: 1).

**Sketch.** The latency budget is exhausted; the distractor insists on adding the
usually-recommended verification pass anyway, because it is best practice.

### D15 · deferral {#d15}

**What it is.** Postpones the decision or hands it away: wait for the next release, revisit next
quarter, escalate to a committee, accept staleness "for now". Cost compounds while the option
sounds prudent. Observed sub-forms: delay-six-months, defer-and-compound, stale-by-design,
premature-escalation.

**When it's the right pattern.** Scenarios where the concept says *this must be resolved at design
time* (or before the current milestone), and deferral silently converts a cheap fix into an
expensive one. Note the premature-escalation sub-form: passing a decision up *is* deferral when
the scenario says the deciding evidence is already in hand.

**Sketch.** A known failure mode needs a mitigation in the initial design; the distractor ships
without it and schedules a resilience review after the first incident.

### D16 · refuse-the-mandate {#d16}

**What it is.** Refuses, removes, or restricts instead of solving within the mandate: decline the
engagement, disable the capability, restrict it to a trusted few, abandon the approach. The
professional was asked to make it work safely and answered by making it not work. Observed
sub-forms: skip-review, remove-capability, remove-platform-wide, restrict-to-seniors,
restrict-authoring, decline-engagement, commit-to-impossible's mirror accept-and-hope,
internal-sources-only, nothing-can-be-done, refuse-all, discard-the-gain, prohibit-inspection,
abandon-the-system, breaks-what-works, disable-logging.

**When it's the right pattern.** Stakeholder-pressure and enablement scenarios (themes T7, and
Domain-6/7-style content generally), where the correct answer is the harder middle path:
constrain, evidence, renegotiate. Heavily used in the CCAR-P reference set (~13) — it stays
credible because refusal *is* occasionally right, so the stem must make the mandate legitimate.

**Sketch.** AI-assisted work shows quality issues; the distractor bans the tooling — the quality
issue is gone, along with the productivity the organisation was mandated to capture.

### D17 · deception-silent-absorption {#d17}

**What it is.** Handles pressure by hiding the truth: comply silently with a harmful instruction,
absorb a scope change without surfacing impact, quietly reduce testing, keep a commitment
deliberately ambiguous, demo the happy path as if it were the product. The professional-ethics
pattern. Observed sub-forms: comply-silently, absorb-silently, quietly-reduce-testing,
deliberate-ambiguity, demo-only-commitment, deceive.

**When it's the right pattern.** Stakeholder scenarios where D16 (refuse) is one wrong pole and
D17 (silently comply / deceive) is the other — the keyed answer is the transparent middle. The
signature pairing of theme T7.

**Sketch.** Told to halve the timeline, the distractor agrees and quietly cuts the testing phase
nobody asked about.

### D18 · push-failure-to-users {#d18}

**What it is.** Makes the failure the user's problem: ask users to rephrase, expose raw errors,
add friction that "trains" users around the defect, block the inputs the system handles badly.
Observed sub-forms: push-to-users, block-imperatives.

**When it's the right pattern.** Product-quality and robustness scenarios where the system-side
fix exists and the user-side workaround is cheaper to ship. Rare in the reference set (~2) but
instantly recognisable to practitioners; a strong realism pattern in moderation.

**Sketch.** Retrieval fails on exact identifiers; the distractor adds help text telling users to
describe their problem in natural language instead of quoting the identifier.

### D19 · false-technical-claim {#d19}

**What it is.** The option rests on a factually wrong mechanism claim — the stated cause is not
how the system works. Observed sub-forms: eviction-misattribution, newer-is-better,
capability-confers-immunity, formal-compliance-is-fairness, exact-match-cant-score-novel's mirror
claims, prefer-first-heuristic, middle-attention-claim, random-alternation, false-compliance-rule.

**When it's the right pattern.** Diagnosis items, as at most one option — a plausible-sounding
mechanism a shallow candidate half-remembers. **Keep sparse** (CCAR-P consequence #4): a factually
false option is the easiest to eliminate and lowers item difficulty. Never build an item whose
wrong options are mostly D19 — that item tests trivia recall, not judgment.

**Sketch.** Cache hit rate is zero because a dynamic value sits at the top of the prompt; the
distractor blames aggressive cache eviction under load — a real phenomenon, not the mechanism
here.

### D20 · self-review-anchoring {#d20}

**What it is.** Review performed inside the context that produced the work: the author checks the
author, anchored to the assumptions that caused the defect. The review happens; it just cannot
see what it needs to see. Observed sub-form: self-review-anchoring.

**When it's the right pattern.** Quality-process and independence scenarios — anywhere the
concept is "verification must be independent of the authoring context". Niche but crisp (CCAR-P
count: 1). It is also the failure mode Mockka's own pipeline is built to avoid: the S5
independence rule ([`05-eval-rubric.md`](05-eval-rubric.md#independence)) exists so the exam
itself is never a D20.

**Sketch.** Asked how generated changes should be verified, the distractor has the same session
that produced the changes re-inspect them for correctness.

---

## Calibration: using the frequency table {#calibration}

Every Artefact A ends with a pattern-frequency table. The consequences generalize from the CCAR-P
analysis:

1. **Cap the easy tells** — the patterns a prepared candidate discards on sight (D03 and D04 in
   architecture-style exams, together roughly a third of the reference set's wrong options). Caps
   are manifest data, enforced by the validator.
2. **Raise the placement patterns** — the ones that force reasoning about *where* something
   belongs (D06 above all). They teach the most per appearance.
3. **Use taxonomy gaps deliberately** — a pattern at count 0 in the sources (D10 in the
   reference set) is often exactly the distractor the untested concepts need.
4. **Keep factual falsehood sparse** (D19) — it buys realism in diagnosis items and destroys
   difficulty everywhere else.
5. **One pattern, one appearance per item** — every wrong option in an item comes from a
   *different* pattern (validator-enforced), so no item can be solved by spotting a single
   family.

---

# Part 2 · Themes: the judgment types {#themes}

A **theme** classifies the judgment an item exercises, orthogonally to domain and concept. Themes
are **per-exam**: each exam declares its theme set in `authoring.json`. The set below — T1–T8 —
is the **starter set for architecture-style exams**, reconstructed from usage across the 85-item
CCAR-P bank (the themes were tagged on every item but defined nowhere; these definitions are
re-derived from the data). For each theme: the judgment it exercises, the stem signature, and the
reconstruction evidence.

Theme balance matters because a paper that is all T1 tests pattern-matching, and a paper that is
all T4 tests scepticism — a real architect exam mixes judgment types, and the selection at S6
should preserve the mix the bank establishes.

### T1 · Pattern & autonomy selection {#t1}

**Judgment exercised.** Map a green-field scenario's constraints onto the right architectural
pattern, integration shape, or autonomy level. The candidate is choosing *what to build* — and
implicitly *how much independence to grant* the automated part.

**Stem signature.** A situation described in constraint terms (predictability, auditability,
error cost, data freshness, breadth of systems), then "which approach/pattern fits?" — or a
matching item mapping several scenarios onto a reused option set of patterns.

**Reconstruction evidence.** 12 bank items, exclusively Domains 1 (8) and 3 (4) — the two
architecture domains. The concepts are the pattern-decision cluster: autonomy spectrum (1.03),
five deciding factors (1.04), fixed workflow prerequisites (1.06), live state vs retrieval (1.07),
reference architectures (1.09), multi-agent prerequisites (1.10), supervisor orchestration (1.11),
plus the integration-shape picks: MCP (3.06), entry points (3.07), direct API vs MCP (3.09),
progressive discovery (3.10). Both of the bank's pattern-mapping scenario items (1.03, 3.09) are
T1. Distractors skew D01/D02/D03 — the wrong *amount* of structure.

### T2 · Mechanism diagnosis & targeted remedy {#t2}

**Judgment exercised.** Reason backwards from observed misbehaviour to the responsible mechanism,
then forward to the intervention that fixes the mechanism rather than the symptom. The system
already exists; the candidate is debugging it.

**Stem signature.** A concrete failure presented with evidence ("output quality is uneven…",
"…hit rate is effectively zero", "tool selection degrades as the catalogue grows"), then "what is
the most likely cause?" or "what is the most effective next step?"

**Reconstruction evidence.** 19 bank items — the second-largest theme — spread across five domains
(D1 ×4, D2 ×7, D3 ×3, D4 ×3, D7 ×2), which shows theme is genuinely orthogonal to domain. The
concepts are all mechanism-level: caching prefix mechanics (2.05), positional attention (2.07),
mid-context recall (2.09), chunking structure (3.12), tool-description overlap (3.11), dominant
cost driver via traces (4.08), the failure taxonomy (4.12), symptoms-to-causes (7.06). Exemplar
stems 1.12 (uneven tender-assessment output → decompose), 2.05 (zero cache hits → dynamic
prefix), 4.08 (cost mandate → trace analysis before accepting a fix). Distractors skew
D03/D04/D05/D19 — capacity, knobs, symptom-treatment, and false mechanism claims: the four ways
people fix without diagnosing.

### T3 · Obligation-to-control reasoning {#t3}

**Judgment exercised.** Read an incident, audit finding, or regulatory obligation and identify
the missing layer, control, or instrument — and who owns the evidence that it operates.
Responsible-AI made operational: what the harm reveals, which layer should have covered it, what
instrumentation makes the answer provable.

**Stem signature.** An incident or finding already happened ("reviewed after it disclosed…",
"found to score candidates from certain postcodes lower…"), then "what does this reveal?" or
"what must follow?"

**Reconstruction evidence.** 6 bank items, all Domain 5: safety-as-layers exposed by an incident
(5.01), the three control points (5.02), instrumented fairness (5.08), proxy-variable bias
(5.09), data minimisation at a boundary (5.10), obligation → control → owner → evidence (5.12).
Every stem is incident- or obligation-driven rather than green-field. Distractors skew
D06/D07/D09/D19 — wrong layer, detection-for-prevention, disclosure-instead-of-fix, and
compliance-theatre claims.

### T4 · Measurement & value discipline {#t4}

**Judgment exercised.** Refuse to act on assumption: define the measure, criterion, or baseline
*first*, and treat value as something engineered and verified rather than assumed. This covers
eval-as-gate discipline, controlled experiments, observability design, honest feasibility
verdicts — and the enablement variant where the "measure" is standardising a productivity gain
instead of hoping access alone delivers it.

**Stem signature.** A proposal or claim on the table ("the team proposes…", "leadership asks…"),
then "what is missing?", "what should happen before accepting this?", or "which strategy is most
defensible?"

**Reconstruction evidence.** 23 bank items — the largest theme — anchored in Domain 4 (9 of its
13 concepts) and radiating into D1 (value×feasibility×risk 1.14, feedback loops 1.15), D2 (model
choice validated by ongoing eval 2.01–2.03), D3 (observability at design time 3.03–3.05, SLA
headroom 3.16), D6 (feasibility verdict forms 6.04), and D7 (shared baseline 7.01, Skills
distribution 7.02, champions-and-batches adoption 7.03). Exemplars: 2.03 (smallest model meeting
target, validated by eval), 4.06 (offline gain ≠ production proof — primary metric and sample
size first), 6.04 ("feasible with constraints" with the load-bearing boundary condition named).
Distractor signature: D12 (anecdote-for-measurement) and D08 (lagging-for-leading) dominate.

### T5 · Layered controls & resilience by design {#t5}

**Judgment exercised.** Compose the *set* of complementary, preventative controls and place them
up front, positioned by stakes and reversibility — resilience and protection as initial-design
properties, not post-incident patches. Where T3 reads a failure backwards, T5 builds the defence
forwards.

**Stem signature.** Designing before the storm ("before the winter season…", "before that server
is made available…"), asking *which measures belong in the initial design* or *where the gate
sits*. Distinctively multiple-response: choose the two controls that operate at different points.

**Reconstruction evidence.** 8 bank items across five domains (D3 ×2, D4 ×1, D5 ×3, D6 ×1, D7 ×1),
6 of the 8 multiple-response — the strongest format signature of any theme. Concepts:
retries/fallbacks/circuit breakers (3.15), validated re-index freshness (3.14), adversarial suite
+ golden dataset for regulated pre-production (4.11), layered guardrail + human approval (5.05),
stakes-based gate placement (5.06, 5.07), signals→triggers→owners (6.08), constrained execution
surface (7.05). Distractors skew D07 (detective-for-preventative) and D15 (deferral) — the two
ways a control arrives too late.

### T6 · Trust boundaries & authority placement {#t6}

**Judgment exercised.** Decide where authority and data may legitimately flow, and enforce it at
the structural layer: identity server-side, minimum-necessary data across each boundary, least
privilege on every capability, and *no instruction-level authority for untrusted content* —
whatever crosses the boundary is data, never command.

**Stem signature.** Something crossing a boundary — a system exposed to multiple consumers, a
corpus containing third-party content, two organisations' agents cooperating — then "which
controls must be in place?" or "which principle does this violate?"

**Reconstruction evidence.** 5 bank items in Domains 3 (×3) and 5 (×2) — integration meets
governance, which is exactly where trust boundaries live: server-side identity enforcement
(3.01), minimum necessary data (3.02), agent-to-agent across an organisational trust boundary
(3.08), retrieved content as untrusted input (5.03), least-privilege tooling that fails closed
(5.04). Distractors skew D06 (wrong-layer — the prompt-based control) and D13
(blast-radius-expansion — the shared credential), the two canonical boundary sins.

### T7 · Professional stance under stakeholder pressure {#t7}

**Judgment exercised.** Hold the professional line when a stakeholder demands the impossible, the
unwise, or the cheap-but-harmful: neither comply silently nor refuse outright, but convert the
demand into evidence-based, decidable terms — and leave the informed decision with its
accountable owner.

**Stem signature.** A named stakeholder applies pressure in direct speech or instruction ("must
be 100% accurate", "use the cheapest model", "make it feel fast"), then "what is the most
effective response?" or "the most professional course of action?"

**Reconstruction evidence.** 5 bank items, all Domain 6: probabilistic behaviour converted to
acceptance criteria (6.05), trade-offs presented in three elements incl. reversal cost (6.06),
latency expectations grounded in the real envelope (6.07), translation layer to business metrics
(6.09), re-baselining scope with sign-off (6.12). The distractor architecture is the theme's
fingerprint: D16 (refuse) on one pole, D17 (comply silently / deceive) on the other, with the
keyed answer as the transparent, evidenced middle — plus D15 premature-escalation as the "make
it someone else's problem" corner.

### T8 · Lifecycle sequencing & required artefacts {#t8}

**Judgment exercised.** Know what must happen *before* what, and what each lifecycle stage owes
the next: discovery before design, decomposition before pattern choice, compliance resolved at
architecture stage, and the artefact set (decision records, runbooks, baselines, control
registers) each handoff owes its successor. The judgment is about process order, not technical
content.

**Stem signature.** A step being skipped or done out of order ("the team has moved straight
to…", "the architect notes it down and moves on"), then "what has to happen first?", "what
should have happened instead?", or "which artefact set matters most?"

**Reconstruction evidence.** 7 bank items concentrated in Domain 6 (×5) with two structurally
identical outliers proving the theme travels: 1.01 (three-bucket decomposition *precedes* the
pattern debate — Domain 1) and 5.11 (whole-data-path compliance resolved at architecture stage —
Domain 5). Core: four-category discovery (6.01), preference → constraint → requirement row
(6.02), success criteria before design (6.03), handoff artefact set (6.10), before-metric +
control register + reuse note (6.11). Distractors skew D12 journey-artefact/documents-what-wasnt-built
sub-forms and D11 — plausible artefacts and criteria that belong to a different stage.

### Declaring a theme set for a new exam

Architecture-style exams (solution design + operations + governance + stakeholder domains) can
adopt T1–T8 as-is. Other exam shapes re-derive: during S2, classify what judgment each source
item exercises (the Artefact A theme column), cluster, and name 5–10 judgment types in the same
style — each theme must name a *judgment*, not a topic (topics are what domains and concepts are
for). Declare the set in `authoring.json`; the validator checks every item's theme tag against
the declared set.

---

# Part 3 · The authoring procedure {#procedure}

Per item, in order. Batches run per-domain, with `pnpm validate <slug>` after every batch
([`04-validation.md`](04-validation.md) is the loop, not the afterthought).

1. **Pick an uncovered concept** from `concepts.json` — one whose `id` is not yet any item's
   `primary_concept`. The inventory is the queue; when it is empty, S4 is done.
2. **Pick the theme and a vertical.** Theme: the judgment type this concept most naturally
   exercises (a control-placement concept wants T5/T6, a measurement concept wants T4…), balanced
   against the bank's running theme mix. Vertical: a concrete industry setting from
   `authoring.json`'s list, *underused so far* — verticals spread realism and stop the bank
   smelling like one company's war stories. Do not reuse a vertical within a domain if you can
   avoid it.
3. **Write a scenario whose surface features point AWAY from the right principle.** This is the
   difficulty mechanism. The stem's dressing should make a wrong option attractive: scale words
   tempt D03, an irate executive tempts D16/D17, a security incident tempts D07. A candidate who
   reasons from the principle gets it right; a candidate who pattern-matches the surface gets the
   distractor. Concrete numbers, named constraints, no fluff.
4. **Build each wrong option from a DIFFERENT distractor pattern** (Part 1). Choose patterns the
   scenario makes *defensible* — each wrong option should be the answer a real, competent-ish
   practitioner might give. Tag them in `distractor_patterns` (one entry per non-answer option,
   each a registry id or declared `E`-extension). Respect the manifest's caps and the
   one-pattern-per-item rule.
5. **Write the rationale in canonical vocabulary** — the concept's `vocabulary[]` terms, so a
   candidate can trace the explanation straight back to their study material and the dashboard's
   weak-area report has an address to point at. `rationale.correct` argues the principle;
   `rationale.distractors` names *why each specific option falls short*, in that option's own
   terms.

### The option-keyed rationale invariant

The rule that matters most, inherited from the failure that motivated the whole design:

- `rationale.correct` must **never reference an option letter**, and
- `rationale.distractors` must have **exactly one entry per non-answer option**, keyed by option.

Rationales keyed to options — never to hardcoded letters — make it structurally impossible to
ship an explanation that argues against its own answer key. Reorder options, re-letter them,
swap the key: the rationale follows. The validator enforces both halves (the anti-drift check).

### Difficulty pitch: good-vs-best, never right-vs-wrong

Every option should be *defensible but inferior* — a candidate should have to choose between a
good answer and the best answer, which is how professional certifications are pitched. If a
distractor can be eliminated without engaging the scenario (factually absurd, obviously hostile,
comically lazy), rebuild it from a better pattern. The blind-solve confidence data at S5 is the
empirical check: items every solver dispatches with high confidence in seconds are pitched too
low.

### Style rules

- **Locale from the manifest.** Spelling and phrasing follow the manifest's declared locale
  (CCAR-P: `en-GB`); the validator's spelling policy runs off that field. Never mix locales
  within a bank.
- **No emoji** in question, option, or rationale text (validator-enforced).
- **Number consistency.** Every numeric figure cited in a rationale must match the question stem
  exactly — no drift between "40 ms" in the stem and "40ms" or "50 ms" in the explanation
  (validator-enforced). When a stem's numbers change in rework, the rationale's numbers change in
  the same edit.
- **Multiple-response items state their count** ("Select TWO") and the key matches
  `select_count`.
- **Scenario-matching items** reuse a small option set across sub-scenarios and say so ("options
  may be used more than once") — they exist to test discrimination between adjacent patterns,
  so the options must be genuinely adjacent.

### Bounce rework

When an item returns from S5 with a score report ([`05-eval-rubric.md`](05-eval-rubric.md#bounce)),
rework **only what the report indicts** — the failing dimension tells you which part of this
procedure to redo (dimension 1 or 2 → rebuild distractors from better patterns; 3 → re-read the
concept, the item drifted; 4 → rewrite rationale in vocabulary; 5 → re-pitch; 6 → re-dress the
scenario). Re-run the validator, then hand back for fresh S5 scoring. Two bounces is the cap;
after that the item goes to Gate 2 as a human decision.
