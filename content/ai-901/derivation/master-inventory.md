# Artefact C · Master concept inventory — AI-901

**What this is.** The union of the three S2 artefacts — [Artefact B · blueprint](source-ms-ai901-blueprint.md)
(29 objective bullets split into 44 concept rows, plus the vocabulary-drift register),
[Artefact B · curriculum](source-ms-ai901-curriculum.md) (14 modules / 103 units split into 53
concept rows, plus a 3-entry named-risk register) and
[Artefact A · `akashp18/ai901-exam-simulator`](source-akashp-ai901-simulator.md) (196 items with
per-item concept and distractor-pattern classification). Built at S3 per
`methodology/02-master-inventory.md`, from these artefacts only — clean-room: no source was opened,
and no concept, vocabulary term or distractor annotation was carried over from `content/ai-900/`
(see [`sources.md`](sources.md) §Discontinuity).

It is the authoring contract: **every concept here is the primary concept of exactly one bank
item**, enforced by the validator's `concept-coverage` and `concept-inventory` checks.

Machine-readable form: [`concepts.json`](../concepts.json). Concept ↔ objective traceability is
carried there: each concept's `sources[].items` lists the `b-…` blueprint rows, `c-…` curriculum
rows and `Qn` practice items it absorbs, so Gate-1 spot-tracing needs no side table.

---

## Result

**56 concepts** — one per bank item, **1.333×** the 42-item exam. Per-domain counts are the
blueprint weights applied to the bank size by largest-remainder rounding, and the merge was driven
to land on them exactly:

| Domain | Weight | Concepts = Bank items | Exam items | Reserve | Computed `high` |
|---|---|---|---|---|---|
| d1 · Identify AI concepts and capabilities | 42% | 24 | 18 | 6 | 24 |
| d2 · Implement AI solutions by using Microsoft Foundry | 58% | 32 | 24 | 8 | 25 |
| **Total** | **100%** | **56** | **42** | **14** | **49** |

Rounding is tie-free in both directions: bank 0.42×56 = 23.94 / 0.58×56 = 32.48 → 24/32; exam
0.42×42 = 17.64 / 0.58×42 = 24.36 → 18/24. With only two domains and a 42/58 split, ties are
arithmetically impossible anywhere in the vendor's 40–60 band (they would need N = 25 or 75), so —
exactly as [`sources.md`](sources.md) §"Three arithmetic consequences" directed — **the item count
was driven by the concept pool, not by rounding**. See §"Why 42 and 56" below.

Candidate pool going in: 44 blueprint rows + 53 curriculum rows + ~5 practice-only candidates ≈
**102 candidates → 56 concepts**, via 19 documented merges, 4 documented splits, 5 mechanism-unit
exclusions, and 13 off-blueprint rejection classes (all below).

## Source composition — and the discount that has to be read with it

| Statistic | Count | Share |
|---|---|---|
| Computed `priority: high` (`sources.length >= 2`) | 49 | 87.5% |
| Computed `priority: normal` (single source) | 7 | 12.5% |
| Attested by all three artefacts | 17 | 30% |
| Traces to a stated blueprint bullet | 49 | 87.5% |
| **Vendor-external attestation** (the practice source also attests) | **37** | **66%** |
| — of which in d1 | 22 of 24 | 92% |
| — of which in d2 | 15 of 32 | 47% |

Per-source attestation: `ms-ai901-blueprint` 49/56 · `akashp-ai901-simulator` 37/56 ·
`ms-ai901-curriculum` 36/56.

**Priority is computed, with zero hand-tuned divergences** — `priority: high` ⟺
`sources.length >= 2` for all 56 concepts, so `concept-convergence` emits no warnings. Any future
warning on this package means someone edited a priority without documenting it here.

**Now the discount, and it is large.** The methodology's convergence signal assumes independently
authored sources ("two pages by the same author are one source"). AI-901 does not supply three:

1. **Two of the three artefacts are Microsoft.** The study guide and the AI-901T00 curriculum are
   different teams and demonstrably divergent documents — the curriculum runs three and a half
   months ahead of the blueprint and teaches 72 minutes of material no bullet names, while the
   blueprint states things (b-1.1 as *considerations*, b-2.2-4's two speech routes) the curriculum
   never poses. That divergence is real evidence, and it is why they are registered separately. It
   is **not** the independence the methodology means. A concept attested by blueprint + curriculum
   and nothing else is **one vendor voice, read twice**.
2. **The third artefact is a correlated reading, not an independent one.** `akashp` is almost
   certainly LLM-generated in a single pass against the same public blueprint
   ([Artefact A](source-akashp-ai901-simulator.md) §Provenance and confidence). Where it agrees
   with the blueprint it carries close to zero new information; its value is concentrated where it
   *disagrees*, and 25% of its items are off the blueprint entirely.
3. **The Tier-1 official assessment is unread** (sign-in wall, no account created), and the second
   community bank was registered but deliberately **not** distilled precisely because its own stated
   provenance is the two sources already held directly — distilling it would have inflated this
   table with a derived reading ([`sources.md`](sources.md) §kittoyeah).

**How to read the numbers, then:** 87.5% `high` means "attested twice", not "corroborated". The
**66% vendor-external** row is the honest headline, and its shape is the finding: the concepts half
is 92% vendor-externally attested, the implementation half only 47%. **The 55–60% of this exam that
matters most is the half no independent source has read.** Gate-1 check 7 carries this as a
build-wide lower-confidence flag, not a slice-level one.

## Why 42 and 56

`exam.item_count` is not a vendor fact for this exam — Microsoft publishes only the vendor-wide
"typically 40–60 questions". S2 ruled that the S3 choice be driven by the concept pool and the
bank-size rule. It was:

1. The artefacts honestly support **24 d1 concepts and 32 d2 concepts** without padding (the merge
   and rejection logs below are the working). That fixes the bank at **56**.
2. 56 ÷ 1.35 = 41.5. The two integer neighbours are 42 (bank 1.333×) and 41 (1.366×). **42** wins:
   it is the even number, its 18/24 split keeps both domains inside their published weight bands
   (42.86% / 57.14% against 40–45 / 55–60), and 41's split lands d1 at 41.5% — inside the band, but
   with no margin if the blueprint's first revision moves.
3. Both 1.333 and 1.366 sit in the methodology's band; 1.333 is the aif-c01 precedent's
   neighbourhood (1.34) and buys 14 reserve items, which is enough substitution freedom for a
   two-domain form.

The counterfactual is recorded because it is the honest one: had the pool supported 65 concepts,
the exam would have been 48. **The bank did not grow to fit a round exam number, and the exam was
not inflated to justify a bigger bank.**

### Sizing pressure ran in both directions, and the blueprint won

The blueprint's own row distribution is the **inverse of its own weights**: 25 of its 44 concept
rows (57%) sit in skill area 1, which carries 40–45% of the paper. Applying the weights therefore
required merging d1 down (25 rows → 24 concepts, with the four extraction-modality bullets
collapsing into one) *and* deepening d2 up (19 rows → 32 concepts).

The deepening is legitimate distillation, not padding: every added d2 concept comes from a
curriculum unit (`c-2.x`) that expands a blueprint bullet the study guide states in four words —
*"lightweight client application for an agent"* is one bullet and one concept; *Foundry endpoints*,
*composing a capability into an agent* and *video generation models* are units Microsoft teaches
under those same bullets. The methodology's own instruction for a too-small pool ("split multi-idea
rules, deepen the distillation") is exactly what the curriculum artefact was distilled for.

---

## The RAG / Foundry IQ ruling — the open Gate-1 question, answered

Both S2 artefacts flagged this as the reconciliation S3 had to make: the official course spends
**12.7% of its time** (LP1 module 7 + LP2 module 7, 72 of 568 minutes) on retrieval-augmented
generation and Foundry IQ, **no blueprint bullet names either**, and the community bank tests RAG in
18 of 196 items — as many as its entire information-extraction group.

**Ruling: option (b), the curriculum's own framing.** Grounding is admitted as exactly **two of 56
concepts (3.6%)**, both in d2, both written as something an *agent* does:

- **C-035** — connecting an agent to a knowledge base so its answers are drawn from approved content
  and carry citations (`c-2.7-1/2/3`).
- **C-036** — grounded is not the same as fluent: an answer that reads well but cannot be traced back
  to the content it drew on is the failure grounding prevents (`c-1.7-1/4`, `c-2.7-4`, and the one
  place `akashp`'s craft is above its own average).

**Rejected with it:** RAG mechanics as a subject — chunk size and overlap, re-embedding on model
change, vector vs hybrid retrieval, re-ranking, embedding-model matching (`akashp` Q23, Q105, Q110,
Q115, Q134, Q145, Q152, Q155). Well-made items, and off-blueprint.

**Why (b) and not (a) exclude or (c) include fully.** (a) would leave a candidate who studied the
official course meeting two whole modules' worth of vocabulary for the first time in the exam room.
(c) would reproduce the exact failure the artefacts warn about — a mock whose shape diverges from
the paper's because a fashionable topic is over-tested; 18/196 would have been 5 concepts here. 3.6%
is low enough that a candidate who never meets a grounding item on the real paper has lost almost
nothing, and high enough that the word *grounded* is not a surprise. Ratification is Gate-1
decision D4.

---

## Merge decisions

One row per consolidation that materially changed the count.

| Merged into | From | Rationale |
|---|---|---|
| **C-008** how a generative model produces output | b-1.2-1 + c-1.2-1 + c-1.3-1 | "what an LLM is", "how it produces output" and "text is tokenized first" are one mechanism described at three grains; one item tests all three |
| **C-011** model deployment options | b-1.2-3 + c-2.1-3 + c-2.1-4 | the objective is generic ("deployment options"); Foundry-as-the-platform is where those options live. `akashp`'s PTU/Standard attestation deliberately NOT counted — a pricing tier is not a deployment option |
| **C-013** workload recognition | b-1.3-1 + c-1.1-1…c-1.1-6 | the curriculum's six sibling units *are* b-1.3-1's answer space; six concepts would produce six near-duplicate "which workload?" items. One concept, one scenario_matching item, the six classes as the reused option set |
| **C-019** speech recognition | b-1.3-7 + c-1.4-1 + c-1.4-2 | *speech-enabled solutions* is the solution shape recognition already implies; it is not a second testable idea |
| **C-021** vision capabilities | b-1.3-9 + c-1.5-1 | "what a vision model can report" and "the task taxonomy" are the same question; the granularity axis is what makes it testable |
| **C-023** extraction across content types | b-1.3-11 + b-1.3-12 + b-1.3-13 + b-1.3-14 + c-1.1-6 + c-1.6-1 | **the largest merge.** Four parallel bullets state one discrimination — *which content type is this?* — and four concepts would have shipped four items whose stems differ only in the noun. One concept, one scenario_matching item routing scenarios across text / images / audio / video |
| **C-024** reading vs field extraction | b-1.3-11 + b-1.3-12 + c-1.6-2 + c-1.6-3 | OCR and field mapping only mean anything against each other; the curriculum teaches them as consecutive units and `akashp` Q80 uses one as the load-bearing distractor for the other |
| **C-025** system vs user prompt | b-2.1-1 + c-1.2-2 | "what a system prompt does" and "which turn an instruction belongs in" are the same idea; `akashp` proves it by shipping Q131 and Q191 as near-duplicates |
| **C-028** deploy before interact | b-2.1-2 + c-2.1-3 + c-2.2-2 | deploying, and then being able to invoke, are one prerequisite |
| **C-032** create *and test* an agent | b-2.1-4 + c-2.2-3 | the bullet names testing as part of the task; splitting it would test the same portal workflow twice |
| **C-034** model or agent, and which rung | b-2.1-4 + b-2.1-6 + c-1.2-3 | the model/agent distinction and the autonomy ladder are one judgment with four positions, which is what makes it the d2 scenario_matching seat |
| **C-035** grounding an agent | c-2.7-1 + c-2.7-2 + c-2.7-3 | a whole curriculum module compressed to the one thing it asks a candidate to do; see the RAG ruling |
| **C-036** grounded vs fluent | c-1.7-1 + c-1.7-4 + c-2.7-4 | the RAG module's problem statement and its evaluation unit are the same idea stated forward and backward |
| **C-037** text-analysis application | b-2.2-1 + c-2.3-1 + c-2.3-2 | "text analysis is a Foundry capability" and "build a client that analyses text" are the same build |
| **C-040** speech via Foundry Tools | b-2.2-3 + c-2.4-1 + c-2.4-2 | the bullet names one route; recognition and synthesis are the two things that route does. The recognition/synthesis **discrimination** lives at d1 (C-019/C-020), so keeping it here too would duplicate it |
| **C-046** image generation | b-2.3-2 + c-2.5-2 | one capability, stated as an objective and as a unit |
| **C-051** document extraction | b-2.4-1 + c-2.6-1 | identical scope; the curriculum unit is the objective's own wording |
| **C-052** image extraction | b-2.4-2 + c-2.6-1 + c-2.6-3 | same tool, second content type |
| **C-054** one tool, four content types | b-2.4-5 + c-2.6-3 | the unifying claim the four parallel bullets and the six-unit module both make |

### Splits — the other direction, recorded for the same reason

| Split into | From | Rationale |
|---|---|---|
| **C-008** + **C-009** | b-1.2-1 | one bullet, two testable ideas: the mechanism, and the two limits that follow from it (unsupported output, a fixed context window). `akashp` tests them as separate item families (Q24/Q35/Q194 vs Q4/Q192/Q196) |
| **C-025** + **C-026** + **C-027** | b-2.1-1 | *"effective system and user prompts"* is one bullet covering three distinct corrections: where an instruction belongs, when worked examples fix the output shape, when step-by-step reasoning fixes a multi-step failure. Merging them would leave one item standing for the exam's most-used skill |
| **C-045** + **C-050** | b-2.3-1 | *"interpret visual input in prompts"* carries both "what a multimodal prompt returns" and "one visual requirement often needs several distinct visual tasks" — the second is `akashp`'s best vision craft (Q86, Q144, Q183) and would be lost inside the first |
| **C-044** (new) | b-2.2-1 + b-2.2-3 | neither bullet states the ordering constraint, but a voice workload has one: recognise first, then analyse the text. `akashp` Q99/Q137 attest it; it is the E12 seat for d2 |

d2's b-2.1 group absorbed the heaviest **deepening** (6 blueprint rows → 12 concepts) because the
blueprint states each build task in four or five words and the curriculum's LP2 modules 1, 2 and 7
are the vendor's own expansion of them.

## Cross-domain placements

Where a concept's `domain` disagrees with the module its source rows sit under. **The blueprint wins
placement**; this table is what stops a later session "fixing" the disagreement.

| Concept | Source rows (module) | Exam domain | Why |
|---|---|---|---|
| C-011 model deployment options | b-1.2-3 (skill area 1) but taught in **LP2 module 1**, an implementation-path module | **d1** | the blueprint assigns the objective to area 1; the curriculum's module order is the course's convenience, not the paper's weighting. This is friction 3 in the curriculum artefact's mapping table |
| C-029 Foundry endpoints | c-2.1-4, the *same* LP2 module 1 | **d2** | an endpoint is what an application outside the portal talks to — implementation work serving b-2.1-2, not a component of the b-1.2-3 deployment choice. The two concepts split the module between the domains deliberately |
| C-019 / C-020 speech recognition and synthesis | b-1.3-7/8 (area 1) vs b-2.2-3 + c-2.4-1/2 (area 2) | **d1** (capability pair) and **d2** (C-040, the route) | the same two words name a workload in area 1 and an implementation task in area 2. Splitting them across domains is what stops one item doing both jobs badly |
| C-024 reading vs field extraction | c-1.6-2/3 (LP1 module 6, concepts path) | **d1** | the discrimination is conceptual; the tool that performs it is C-051…C-055 in d2 |
| C-036 grounded vs fluent | c-1.7-1/4 (LP1 module 7, **concepts** path) | **d2** | admitted only in its agent framing per the RAG ruling, and agents are d2. Seating it in d1 would give it standing as a concepts-area topic that no objective grants it |
| C-043 build-vs-buy inside a capability | `akashp` Q97/Q136 only — no module anywhere | **d2** | it is a decision made while implementing an application (b-2.2-1), not a workload-recognition judgment |

## The named-risk registers → concept map

The curriculum's 3-entry register and the blueprint's 8-row vocabulary-drift register are the
highest-value diagnostic seeds in this package. Where each lands:

| Named risk / drift row | Lands as |
|---|---|
| A statistical or lexical approach cannot infer meaning (c-1.3-2 vs c-1.3-3) | **distractor craft only** for C-015/C-016/C-037 — a mechanism unit, deliberately not minted as a concept |
| Reading characters ≠ extracting fields (c-1.6-2 vs c-1.6-3) | **C-024** (d1 concept) and **C-051/C-055** (d2 implementation) |
| A generated response can be fluent and ungrounded (c-1.7-1, c-1.7-4) | **C-036**, with **C-009** carrying the mechanism that makes it possible |
| Azure AI Foundry → **Microsoft Foundry** / the Foundry portal | C-028, C-030 — as the key's vocabulary, never as the thing being tested |
| hub + project + Prompt Flow → *(named nowhere)* | rejected outright (below) |
| Azure OpenAI PTU/Standard → *deployment options and configuration parameters* | C-011, C-012 — at the objective's level, never at the pricing tier's |
| Azure AI Document Intelligence → **Azure Content Understanding in Foundry Tools** | C-051…C-056; the superseded model catalogue is available as E01 distractor material |
| Azure AI Speech standalone → **Azure Speech in Foundry Tools** *or* a multimodal model | C-040, C-041 — and C-041 is the choice the rename created |
| Azure AI Vision (Image Analysis, OCR, Spatial Analysis, Face) → *multimodal model* | C-045, C-046, C-049; Spatial Analysis and Face rejected |
| Azure AI Language service features → *text analysis* and its four techniques | C-015…C-018, C-037, C-038 |
| Azure ML / AutoML / regression / metrics → **absent from AI-901** | rejected outright (below) |

**The standing rule this register creates, and it is a hard one for S4:** the drift is the *exam's*
trap and must never become the *mock's*. A superseded name may appear as a distractor; **no item may
be answerable only by knowing that a product was renamed.** Recorded in `authoring.json`.

---

## Reconciliation — what each source holds that the others do not

### What the blueprint states that no other source spells out

Carried as concepts, all of them with weak or no external attestation:

- **b-1.1 as *considerations* rather than principle definitions** → C-001…C-007. `akashp` reaches
  the considerations form in only 3 of its 24 responsible-AI items; the other 21 ask the AI-900
  question ("which principle is violated?"). The concepts are written to the AI-901 form.
- **b-1.2-3 / b-1.2-4 as generic deployment-and-parameter concepts** → C-011, C-012. The only
  practice attestation available is a pricing tier, which is why C-011 is blueprint + curriculum
  only.
- **b-1.3-2 agentic AI as a workload class inside the *concepts* area** → C-014. `akashp` tests the
  distinction only inside its implementation section.
- **b-2.2-4, that speech has two supported implementation routes** → **C-041, single-source, the
  only blueprint-only concept in the inventory**. No source poses it as a choice; the blueprint puts
  both routes on the page one bullet apart.
- **b-2.4-5, that one tool spans all four content types** → C-054. The concept a candidate arriving
  from AI-900 will get wrong, because they will reach for a service per modality.

### What the curriculum teaches that the blueprint does not state

Seven concepts (12.5%) trace to no blueprint bullet. Six are the curriculum's, listed here; the
seventh is C-043, the practice-only concept in the next section. None is padding — each expands a
bullet the study guide states in four words, or is the platform capability that bullet implies:

| Concept | Curriculum rows | Standing |
|---|---|---|
| C-029 Foundry endpoints | c-2.1-4 | the access mechanism b-2.1-2 and b-2.1-3 both presuppose |
| C-038 text analysis composed into an agent | c-2.3-3 | the curriculum's recurring implementation shape; materially different from "pick the right service" |
| C-042 speech-capable agent | c-2.4-3 | same shape, speech side; supports b-2.2-2 |
| C-047 video generation | c-2.5-3 | b-2.3-2 says *"visual outputs"*, which arguably covers video — an inference, so it stands on the curriculum alone |
| C-035 grounding an agent in a knowledge base | c-2.7-1/2/3 | RAG ruling, option (b) |
| C-036 grounded vs fluent | c-1.7-1/4 + `akashp` | RAG ruling, option (b) |

### What the practice source tests that neither vendor document spells out

- **The agent autonomy ladder** — bot / model with a prompt / agent with tools / orchestrated agent
  (Q33, Q50, Q104, Q109, Q195). Folded into **C-034** and promoted to a first-class distractor
  pattern (`E11 agentic-tier-slip`), which the source itself uses in only 6 of 196 items.
- **Build-vs-buy inside a capability** — a purpose-built capability versus prompting a general model,
  judged on cost and latency (Q97, Q136) → **C-043**, the inventory's one practice-only concept.
- **Classify before extract** as an ordering constraint (Q90) → **C-056**.
- **Consequence-of-mechanism reasoning** (Q110, Q134, Q152) → the *craft* is carried into C-009 and
  C-036; the RAG mechanics those items turn on are rejected.
- **Principles in conflict** (Q141, Q45) → **C-007**, the best-constructed idea in the source's
  weakest-shaped group.

### Rejected — off-blueprint

Recorded so the reconciliation shows the decision was made, not missed. `akashp` measured **25% of
its own items off the AI-901 blueprint** ([Artefact A](source-akashp-ai901-simulator.md) §blueprint
census), so every lifted candidate was re-checked against the objective list *and* the curriculum —
and the fact that **both vendor documents are silent** on the classical-ML material is what lets
these be rejected with confidence rather than by assertion.

| Candidate | From | Why rejected |
|---|---|---|
| Classification / regression / clustering, supervised vs unsupervised, features, overfitting | `akashp` Q6, Q126, Q165, Q166, Q169, Q172, Q174, Q177 | classical ML — no counterpart in the blueprint **or** the curriculum. AI-900's machine-learning area was dropped wholesale |
| Accuracy on imbalanced data, recall, R², MAE | `akashp` Q168, Q170, Q171, Q175 | ML evaluation metrics — same, and the exam has no modelling objective for them to attach to |
| Ordering an AutoML pipeline | `akashp` Q167 | AutoML — same |
| Bearer tokens against a scoring endpoint; real-time vs batch inference | `akashp` Q173, Q176 | Azure ML managed-endpoint framing. The *deployment-option idea* is carried by C-011 in the blueprint's generic terms; the Azure ML surface is not. The closest call in the census |
| Spatial Analysis: zone intrusion, dwell time, line crossing, anonymity | `akashp` Q34, Q82, Q179, Q182 | named nowhere in the blueprint or curriculum, despite 34 mentions in the source |
| Foundry hub vs project; where network policy and shared connections belong | `akashp` Q66, Q67, Q75, Q139 | a resource model absent from the objective list and from the current curriculum |
| Prompt Flow as a visual multi-step orchestrator | `akashp` Q106, Q146 | named nowhere in the blueprint, despite 20 mentions in the source |
| Provisioned Throughput vs Standard pay-as-you-go | `akashp` Q72, Q147 | pricing SKUs; b-1.2-3 says *deployment options*. Below the objective's level |
| Content-filter severity thresholds; filter-disable approval policy | `akashp` Q74, Q149 | configuration spec-trivia and vendor policy trivia — `E08` territory, capped at 0.05 |
| Face API bounding-box shape; HTTP 403 diagnosis; SDK property and parameter recall | `akashp` Q89, Q103, Q107, Q140, Q154, Q156, Q164, Q188 | API-shape and SDK-symbol recall, below a fundamentals exam whose objectives are stated as capabilities — `E10` capped at 0.05. Note the disclosed tension: the audience profile assumes Python, so an item may **show** code, but it must turn on what the code does |
| Custom-model training: custom classifiers, custom extractors, Custom Neural Voice | `akashp` Q48, Q84, Q96, Q128 | no AI-901 objective covers training your own model. **Q128 is the worked example of the source being a generation behind** — it marks prompting a general multimodal model as *wrong*, which under `c-2.5-1` is now the right answer. Carried as negative calibration into C-045/C-046, never as a concept |
| RAG mechanics: chunking, re-embedding, vector vs hybrid, re-ranking, embedding-model matching | `akashp` Q23, Q105, Q110, Q115, Q134, Q145, Q152, Q155 | admitted only in the curriculum's agent framing — 2 concepts, not 5. See the RAG ruling |
| Convolutional neural networks, vision transformers as architecture, statistical vs semantic text models, tokenization internals, image processing | `curric` c-1.3-1/2/3, c-1.5-2, c-1.5-3 | the curriculum's own **explanatory** units for `Describe`-level objectives; the artefact flags them explicitly so S3 does not mint concepts from them. Tokenization survives *inside* C-008; the statistical-vs-semantic contrast survives as distractor craft |

---

## Coverage contract

Enforced by the validator, not by review:

1. Every concept is the primary concept of **exactly one** bank item (`concept-coverage`).
2. Per-domain concept counts equal the manifest's `bank_items` exactly (`concept-inventory`) —
   24 / 32.
3. Every concept's `sources[]` resolves to a registered source (`concept-source-registry`), and
   every registered source that carries weight has a derivation doc (`source-derivation-link`).
4. Priority/convergence divergences surface as warnings (`concept-convergence`) — this build ships
   with zero.

## Authoring-contract decisions fixed alongside (manifest + authoring.json)

- **Bank 56 = 1.333× the 42-item exam.** Both numbers derived above; per-domain 24/32 and 18/24.
- **Format mix (exam form): 34 single_choice + 5 multiple_response + 3 scenario_matching** —
  d1 14/2/2, d2 20/3/1. That is 81% / 12% / 7%, a documented default *informed by* rather than
  inherited from the observed profile (the accessible source is 160 of 163 option-bearing items at
  four options, 81% single choice, 2.6% multi-select). `single_choice` at 4 options matches the
  observed norm exactly; `multiple_response` at 5 options choosing 2 is a deliberate, disclosed
  stretch; `scenario_matching` approximates the vendor's drag-and-drop.
- **The three scenario_matching seats are structural, not S4's choice**, because each needs a
  vendor-stated, mutually exclusive, reusable option set:
  **C-013** (the six workload classes — the curriculum artefact names this "the single most reusable
  option set in the exam"), **C-023** (the four extraction content types — the blueprint-explicit
  four-way discrimination no practice source tests), and **C-034** (the autonomy ladder, d2).
- **multiple_response candidates for S4** — d1 ×2 from {C-007 principles engaged by one decision,
  C-010 capabilities a requirement needs, C-021 vision tasks}; d2 ×3 from {C-050 several visual
  tasks in one pipeline, C-032 what creating *and testing* an agent involves, C-041 the two speech
  routes, C-044 pipeline stages}.
- **Pass threshold 70%** — a disclosed raw-score proxy; the real exam is scaled 1–1,000 with a 700
  pass mark Microsoft states *"may not equal 70% of the points"*, awards per-component partial
  credit and mixes in unidentified unscored items. Gate-1 ratification D3, disclosed in
  `format_coverage`.
- **Time limit 45 minutes** — the vendor's own published Fundamentals exam time, kept unchanged
  against a 42-item form. No scaling decision is needed here (unlike aif-c01): the limit is a
  vendor fact and only the item count is chosen.
- **Pattern caps carried from Artefact A unchanged:** `E01: 0.25`, `E04: 0.20`, `D04: 0.05`,
  `E08: 0.05`, `E10: 0.05`; `near_duplicate_jaccard: 0.4` — and it is *expected to bite*, because
  the source contains at least six near-duplicate pairs and this bank has six responsible-AI items
  and four text-technique items in the same shape. **BD-1/BD-2 knobs are set explicitly at their
  defaults** (`key_letter_max_share: 0.4`, `mr_key_set_max_share: 0.5`,
  `answer_length_ratio_warn: 1.25`, `answer_length_ratio_error: 1.5`) so S4 authors to them instead
  of discovering them in a rework wave.
- **Pattern extensions E01–E12 declared** in `authoring.json` — E01–E08 reused unchanged from the
  AI-900 build so caps stay comparable across the vendor's exams; **E09 platform-surface-swap, E10
  sdk-symbol-swap, E11 agentic-tier-slip, E12 pipeline-stage-swap** are new for this exam's
  implementation half.
- **Authoring emphases the artefacts oblige S4 to apply:** raise `E05 granularity-slip` (the best
  craft in the source and the pattern that maps onto C-015…C-018, C-021 and C-024); adopt
  `E11 agentic-tier-slip` as first-class (C-014, C-034); use `E12` wherever a build order exists
  (C-044, C-056, C-028); never key an item on a rename.
- **Themes F1–F8 declared fresh** in `authoring.json`. The T1–T8 architecture starter set assumes a
  design-decision exam; AI-901's judgment types had to be re-derived from the objective verbs —
  `Describe`/`Identify` on one side, `Create`/`Deploy`/`Build`/`Implement`/`Respond to`/`Extract`/
  `Interpret` on the other. F5 (route selection), F6 (build order) and F7 (autonomy tier) are the
  three that exist because this exam's majority area is implementation.
- **`layers.syllabus_rules: false`** — the study guide maps 1:1 onto the manifest domains (two skill
  areas, two domains, no reconciliation to do), so a rules layer would duplicate the concept
  inventory it was built from. Weak-concept reporting is the honest grain.

## Degradation note — `methodology/02-master-inventory.md#single-source`

This build does **not** qualify for the strict single-source path (the blueprint is not alone), but
it degrades toward it, and the honest scope of the flag is **build-wide, weighted onto d2**:

- **7 concepts rest on one artefact:** C-029, C-035, C-038, C-041, C-042, C-047 (curriculum-only,
  except C-041 which is blueprint-only) and C-043 (practice-only). All are `priority: normal` by
  computation; six of the seven are in d2.
- **13 further concepts are vendor-only** — blueprint + curriculum, no external reading — and 11 of
  those are d2 implementation concepts: C-031, C-033, C-039, C-045, C-048, C-049, C-051, C-052,
  C-053, C-054, C-055 (plus C-011 and C-023 in d1). Their computed `high` is one vendor voice read
  twice.
- **19 of 56 concepts (34%) therefore have no reading from outside Microsoft at all, and 17 of those
  19 are in d2.**
- **Net: only 47% of the implementation half has any vendor-external attestation, against 92% of the
  concepts half** — and even that 92% rests on a bank generated against the same blueprint.
- **Consequences.** S6 seating priority for the vendor-only and single-source concepts falls back to
  blueprint weight and authoring judgment, not to the convergence signal. S5 should expect its
  toughest adjudications in d2, where the author had no external reading to check a pitch against.
  These are also the concepts a candidate is least likely to have drilled, since every community
  bank is calibrated on the superseded service catalogue — which is the artefacts' argument that
  they are the highest-value items in the package, not a reason to soften them.
- **Exits recorded, in order of value:**
  1. **`ms-practice-assessment`** (Tier 1, free, unlimited retakes, written by the exam team, gives
     rationales) — behind an AI Skills Navigator sign-in; no account created under the
     free-first / no-signup rule. This is the only source that would give the implementation half a
     genuinely independent reading. Gate-1 decision D5; a single ruling also covers `aif-c01` and
     `ai-900`.
  2. **`kittoyeah-ai901-prep`** (210 items, registered, dump-screened, deliberately not distilled) —
     a one-file S2 top-up that buys convergence *breadth* at the cost of convergence *honesty*,
     since its stated provenance is the two sources already held directly. Gate-1 decision D6.
  3. **The blueprint's first revision.** AI-901 has no change log yet; when one appears it will
     settle whether RAG / Foundry IQ enter the objectives, which is the one ruling above that a
     vendor fact could overturn rather than confirm.
