# Artefact A · CompTIA official Security+ (V7) practice-question set distillation

**What this is.** CompTIA's own free "Security+ Practice Test (V7)" page publishes **10 practice
questions with the answer key printed on the same page**. This document records, for each item,
**the concept it tests** and **how each wrong option is constructed**.

**Why it exists.** It is the highest-authority calibration input in this build: the vendor wrote
these items, so they are the only accessible evidence of how SY0-701 items are actually *shaped* —
stem length, scenario altitude, option parallelism, how much of the answer lives in the stem. It
answers "what does the exam's author think a question looks like?", which no third-party set can.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `comptia-practice-v7` in [sources.md](sources.md). Free, no login, no form; the answer key
> is printed under the questions. Credited in the exam README.

## Proposed theme set (for S3's `authoring.json`)

The T1–T8 starter themes in `methodology/03-authoring-guide.md#themes` were derived from an
architecture-professional exam and fit this operations exam poorly (no autonomy-level or
trust-boundary judgments exist at this altitude). Both Artefact-A documents in this package use the
proposed set below; **declaring it is S3's call**, not this session's.

| id | Theme | Judgment exercised |
|---|---|---|
| S1 | Concept identification | name the concept, category, control type or actor behind a described situation |
| S2 | Control selection | pick the control that meets a stated requirement, against near neighbours that meet adjacent requirements |
| S3 | Indicator diagnosis | reason from observed symptoms back to the attack or mechanism that produces them |
| S4 | Architecture trade-off | choose the architecture, deployment or protection option under a stated constraint (availability, cost, patchability, responsibility) |
| S5 | Process-stage placement | place an activity in the right stage of a defined process — incident response, change management, vulnerability management, forensics |
| S6 | Governance & risk judgment | risk treatment, quantitative risk arithmetic, agreement selection, compliance obligation |
| S7 | Evidence selection | pick the log, data source or artefact that can answer the investigative question asked |

## Proposed distractor-pattern extensions (for S3's `authoring.json`)

The shared D01–D20 registry names failures of *professional judgment*. Security+ distractors are
mostly failures of *technical discrimination*, so five extensions are proposed. Counts below are
from **both** Artefact-A sources combined (10 + 145 items) so the frequency evidence is visible in
one place; the per-source breakdowns are in the frequency tables.

| id | Name | Definition | Count (this source / `jealarue-exam90`) |
|---|---|---|---|
| E01 | `sibling-term-substitution` | a neighbouring term from the same named family offered in place of the key (smishing for vishing, IDS for IPS, RTO for RPO, detective for preventive) | 12 / 168 |
| E02 | `adjacent-control-swap` | a real, in-scope control that solves an adjacent but different problem (DLP offered against a monitoring question, encryption against an availability question) | 11 / 92 |
| E03 | `lifecycle-stage-slip` | a legitimate activity taken from a different stage of the same defined process (eradication offered when the scenario is containment) | 2 / 31 |
| E04 | `acronym-decoy-expansion` | a fabricated but plausible expansion of a real acronym | 0 / 72 |
| E05 | `attribute-inversion` | the correct pair of properties presented the wrong way round (RTO and RPO swapped; "VMs share a kernel, containers do not") | 3 / 14 |

D-patterns that transfer unchanged and are used below: D01 over-engineering, D05
symptom-treatment, D06 wrong-layer, D07 detective-for-preventative, D11 non-architectural-criteria,
D13 blast-radius-expansion, D14 dogma, D15 deferral, D19 false-technical-claim.

## Format mix observed

| Domain | Single choice | Multiple response | Scenario matching | Total |
|---|---|---|---|---|
| d1 General Security Concepts | 2 | 0 | 0 | 2 |
| d2 Threats, Vulnerabilities, and Mitigations | 2 | 0 | 0 | 2 |
| d3 Security Architecture | 2 | 0 | 0 | 2 |
| d4 Security Operations | 3 | 0 | 0 | 3 |
| d5 Security Program Management and Oversight | 1 | 0 | 0 | 1 |
| **Total** | **10** | **0** | **0** | **10** |

Asymmetries worth preserving or correcting, explicitly:

- **Every item is four-option single choice with exactly one key.** The real exam also uses
  select-two/select-three multiple choice and performance-based questions; the sample set shows
  neither. **`[UNVERIFIED]` as an estimate of the exam's true format mix** — a ten-item marketing
  sampler is chosen for approachability, not representativeness, and should not be read as evidence
  that PBQs are rare.
- **Domain spread is 2/2/2/3/1 against blueprint weights of 12/22/18/28/20.** Directionally right
  for d4 (the heaviest domain gets the most items) and wrong for d5 and d2. Ten items cannot carry a
  weighting; do not inherit this shape.
- **Six of ten items are one sentence long.** The vendor's own sampler leans hard on
  recall-with-a-twist rather than scenario: a short stem naming one property, four options from the
  same objective's bullet list. That is a real calibration signal about *pitch* — SY0-701 items are
  not long consulting scenarios — but it under-represents the "Given a scenario" objectives.
- **Options are drawn from the objective's own bullet list, not invented.** In nine of ten items,
  every distractor is a real term from the same or an adjacent objective. This is the single
  strongest craft lesson in the set: **the blueprint supplies the distractors**. It also means a
  candidate cannot eliminate by implausibility, only by knowing the difference.
- **One item is a genuine operational task rendered as multiple choice** (item 4.1 below — reading
  four candidate access-list lines and picking the one whose direction is right). That is the exact
  approximation Mockka's `format_coverage` disclosure has to describe for performance-based
  questions, demonstrated by the vendor itself. **Useful precedent, worth copying deliberately.**

## Domain 1 · General Security Concepts (2 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.1 | a mechanism that makes an action undeniable is non-repudiation (b-1.2-2) | S1 | E02 ×3 adjacent-control-swap (an identity concept, a network-architecture concept, and a deception concept, each drawn from a different bullet of the same objective) |
| 1.2 | the control *type* that reduces the likelihood of an event is preventive (b-1.1-2) | S1 | E01 ×2 sibling-term-substitution (two other control types from the same six-item list), D11 ×1 wrong-criterion (a *risk treatment* offered where a *control type* was asked for) |

**Domain 1 observation.** Both items test naming, and both build their distractors by reaching into
neighbouring bullets of the same objective — one within the list (control types) and one across
lists (control type versus risk treatment). The second is the more instructive: mixing taxonomies
that live in *different domains* (1.1 controls versus 5.2 risk treatments) is a fair, hard distractor
because both are four-to-six-item lists a candidate memorises separately and confuses under time.
Nothing here tests the category/type two-axis judgment (b-1.1-3) or Zero Trust internals (b-1.2-8/9).

## Domain 2 · Threats, Vulnerabilities, and Mitigations (2 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.1 | encryption of files plus an extortion demand identifies ransomware from behaviour, not from the word (b-2.4-1) | S3 | E01 ×3 sibling-term-substitution (three other malware families from the same objective bullet, each separated from the key by one behaviour) |
| 2.2 | an actor using commodity tooling from the internet is the unskilled attacker — capability is the evidence, not intent (b-2.1-1, b-2.1-2) | S3 | E01 ×3 sibling-term-substitution (three other actors from the same list, each of which *would* be plausible if the tooling attribute were removed) |

**Domain 2 observation.** The strongest craft in the sample set. Neither item names its answer in the
stem; both make the candidate read one attribute (what the malware *did*; what the tooling *was*)
and infer the label. The distractors are not weak — every one is a real member of the same list, and
each is eliminated only by the single attribute the stem supplies. **This is the item shape to
imitate for d2**, and it is precisely what the excluded dump corpus does not do (recalled items
reproduce the answer's vocabulary in the stem). Nothing here touches attack surfaces (b-2.2-2/7),
the indicator families (b-2.4-10/11/12), or mitigations (2.5).

## Domain 3 · Security Architecture (2 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.1 | a VPN between two sites protects data *in transit* — the state, not the location or the law (b-3.3-4) | S1 | E01 ×1 sibling-term-substitution (another data state), E02 ×2 adjacent-control-swap (a data-protection *method* and a *sovereignty* concept offered where a *state* was asked for) |
| 3.2 | recovery from a ransomware infection depends on backups, not on controls that would have prevented or contained it (b-3.4-7) | S4 | D07 ×1 detective-for-preventative-family (a confidentiality control offered against a recovery requirement), E02 ×2 adjacent-control-swap (an availability technique and a dispersion technique, both real resilience concepts that do not restore data) |

**Domain 3 observation.** Item 3.2 is the best-designed item in the set and the template for the
whole `d3`/`d4` boundary: three of four options are genuine, correct-sounding security controls, and
only one answers the requirement *as stated*. A candidate who pattern-matches "ransomware →
encryption" fails it. The lesson for authoring: **make every distractor a control the candidate has
just studied, and let the requirement verb do the discrimination** — restore versus prevent versus
contain versus distribute.

## Domain 4 · Security Operations (3 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 4.1 | an inbound block must match on the *source* being the hostile address, not the destination — direction is the whole answer (b-4.5-1) | S2 | E05-adjacent ×3 direction/action inversion (the same rule with source and destination swapped; the same rule permitting instead of denying; both inversions combined) — the only item in the set whose distractors are *transformations of the key* rather than sibling terms |
| 4.2 | a programme that pays external researchers for discovered vulnerabilities is a bug bounty (b-4.3-5) | S1 | E02 ×3 adjacent-control-swap (three other vulnerability-identification methods from the same objective — an intelligence source, an internal exercise, and a contracted engagement) |
| 4.3 | the *final* step of the incident-response process is lessons learned (b-4.8-1) | S5 | E03 ×2 lifecycle-stage-slip (two earlier phases from the same seven-step list), E01 ×1 sibling-term-substitution (a phase from the wrong end of the process) |

**Domain 4 observation.** Item 4.1 is the one to study hardest: it is a **performance-based question
compressed into single choice**. The real exam would present a rule editor; the sampler presents
four candidate lines and asks which one is correct. The distractor construction is systematic — take
the key and apply each single transformation that a careless candidate would not notice
(swap source/destination, flip deny/permit, do both). That is a reproducible recipe, and it is how
this build should approximate PBQs for objectives 4.5, 4.9 and 3.2. Note also that item 4.2's
distractors deliberately include *penetration testing*, which is a real and adjacent answer — the
discriminator is "compensated external researchers, unbounded" versus "contracted engagement,
scoped".

## Domain 5 · Security Program Management and Oversight (1 item)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 5.1 | the document that defines the terms and boundaries of a third-party test is the rules of engagement (b-5.3-5) | S6 | E02 ×3 adjacent-control-swap (three other genuine third-party-risk artefacts from the same objective — a supply-chain activity, a contractual clause, and a selection process) |

**Domain 5 observation.** One item for 20% of the exam, and it is the hardest item in the set:
all four options are real objective-5.3 artefacts, and three of them plausibly appear in the same
vendor engagement. This is the strongest evidence in the sample that **CompTIA's d5 items
discriminate between co-occurring governance artefacts rather than testing definitions** — and it
is the argument for building d5 items around a single scenario with several near-neighbour
artefacts, or as `scenario_matching` over the seven agreement types (b-5.3-3).

## Distractor-pattern frequency across the 10 items

Total distractor slots = 30 (10 single-choice items × 3 wrong options).

| Pattern | Count | Note |
|---|---|---|
| E01 `sibling-term-substitution` | 12 | 40% of all wrong options — the vendor's default. Always drawn from the same objective's own bullet list |
| E02 `adjacent-control-swap` | 11 | 37% — the second default, reaching one objective sideways rather than one list-item sideways |
| direction/action inversion (item 4.1) | 3 | proposed as **E05 `attribute-inversion`**; the only systematic transformation-of-the-key construction in the set |
| E03 `lifecycle-stage-slip` | 2 | both in the incident-response item |
| D11 non-architectural-criteria | 1 | a risk treatment offered where a control type was asked |
| D07 detective-for-preventative | 1 | in the recovery item |
| E04 `acronym-decoy-expansion` | 0 | **absent — the vendor never tests an acronym expansion as an item.** Recorded because the community source does it 24 times |
| D01, D14, D15, D19 | 0 | no over-engineering, dogma, deferral or false-technical-claim distractors anywhere |

**Consequences for authoring.**

1. **Every distractor should be a real term from the blueprint.** Ten out of ten vendor items do
   this; 23 of 30 wrong options are terms from the same or an adjacent objective. Invented options
   are a tell, and the blueprint's own enumerated lists remove any need for them.
2. **Cap `E01 sibling-term-substitution`.** It is the natural and correct distractor for a
   vocabulary exam, but at 40% of vendor wrong options and 47% in the community source it produces
   flashcards. A cap of ≈0.35 of items forces scenario reasoning into the middle of the paper. The
   exact figure is S3's to set from the combined evidence.
3. **Ban `E04 acronym-decoy-expansion` outright.** The vendor never does it; it tests the acronym
   table rather than an objective, and a fabricated expansion is trivially eliminable by anyone who
   has read the list once. `authoring.json` should register E04 as a *named anti-pattern* so the
   validator can flag it, not as a permitted pattern.
4. **Raise `E05 attribute-inversion`.** Item 4.1 shows it is the vendor's device for the one
   operational item in the set, and it is the only construction that cannot be defeated by
   recognising vocabulary. It is also the natural PBQ approximation.
5. **Keep stems short and put exactly one discriminating attribute in them.** Six of ten vendor
   items are a single sentence. Long scenarios are not what this exam feels like; a long stem with
   two discriminating attributes makes an item easier, not harder.
6. **Do not inherit the domain mix** — ten items cannot represent 12/22/18/28/20.

## Concepts this source tests that other sources do not spell out

- **firewall rule direction as the entire answer** (b-4.5-1) — the only accessible item anywhere
  that asks a candidate to *read a configuration* rather than name a concept, and the only proven
  PBQ-to-multiple-choice pattern
- **rules of engagement discriminated from right-to-audit, due diligence and supply-chain analysis**
  (b-5.3-5) — `jealarue-exam90` tests the other three but never contrasts them with this one
- **backups as the *recovery* answer against three plausible non-recovery controls** (b-3.4-7) —
  the requirement-verb discrimination the community source never builds
- **control type asked against a risk-treatment distractor** (b-1.1-2 versus b-5.2-9) — a
  cross-domain taxonomy collision no other source attempts

## Concepts other sources hold that this source does not test

See the reconciliation in `master-inventory.md` (S3). Given only ten items, almost everything: the
whole of Domains 1.3, 1.4, 2.2, 2.3, 2.5, 3.1, 3.2, 4.1, 4.2, 4.4, 4.6, 4.7, 4.9, 5.1, 5.2, 5.4,
5.5 and 5.6 is untouched here. This source's value is calibration of *shape*, not coverage of
content — it should set the format and craft rules, and contribute almost nothing to the convergence
count.
