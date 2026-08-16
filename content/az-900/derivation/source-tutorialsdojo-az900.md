# Artefact A · Tutorials Dojo AZ-900 sampler distillation

**What this is.** Jon Bonso's freely published AZ-900 sample-question page on Tutorials Dojo
(last updated 2026-02-26) contains **10 questions** written against the public exam outline, each
with a published key and a full rationale. This document records, for each item, **the concept it
tests** and **how each wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory. It answers the question "what
does this author believe is tested, and in what *shape*?" — and it is the **only accessible source
that demonstrates Microsoft's non-multiple-choice item types**, which makes it the load-bearing
evidence behind the manifest's `format_coverage` disclosure.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `tutorialsdojo-az900` in [sources.md](sources.md). Credited in the exam README.
> Screened against the dump corpus: no numbered correspondence to any ExamTopics topic/question
> index; the house style (long scenario stems naming a fictional company, three-paragraph rationales
> with per-distractor refutation and Microsoft documentation citations) is absent from that corpus.
> The page is the free sampler for a paid product, which is the commercial reason the items are
> originally authored. Screening is evidence of absence, not proof of originality — recorded as such.

Theme set (Z1–Z7) and pattern extensions (E01–E05) are the ones proposed in
[`source-ms-learn-az900-modules.md`](source-ms-learn-az900-modules.md#proposed-theme-set-for-s3s-authoringjson).

## Format mix observed

| Domain | Single choice | Binary (problem-solution) | Matching / drop-down | Hot area (statement grid) | Total |
|---|---|---|---|---|---|
| d1 Describe cloud concepts | 2 | 1 | 1 | 0 | 4 |
| d2 Describe Azure architecture and services | 1 | 0 | 0 | 1 | 2 |
| d3 Describe Azure management and governance | 3 | 1 | 0 | 0 | 4 |
| **Total** | **6** | **2** | **1** | **1** | **10** |

This is the whole reason the source is worth ten items' worth of attention. Asymmetries and
findings, explicitly:

- **Four distinct item shapes in ten items.** Single choice with four options; the Microsoft
  **problem-solution set** (one scenario restated with a different proposed solution each time, keyed
  Yes/No); a **drop-down matching** item (two prompts, one shared option list, option reuse
  permitted); and a **hot-area statement grid** (four independent statements, each keyed Yes or No).
  Microsoft's own exam-duration page confirms problem-solution sets exist ("you are presented a
  problem and asked if the solution provided would solve the problem") and lists drag-and-drop and
  hot area among its sample types — this source is the only place a *worked AZ-900 example* of each
  is publicly visible without an account.
- **The problem-solution shape is a series, not an item.** The source flags both instances with the
  same preamble: the same scenario recurs with a different proposed solution, and each member has
  its own answer. Mockka can represent a *member* (a `single_choice` with two options) but not the
  *series*, because nothing in the schema links siblings or prevents a candidate seeing one member
  and inferring the others. Recorded in `format_coverage`.
- **The hot-area item is four items in a trench coat.** Four statements, each independently scored —
  which is exactly the partial-credit model Microsoft documents ("one point for each correctly
  answered component") and exactly what Mockka's all-or-nothing `multiple_response` cannot express.
  A faithful approximation costs either four separate single-choice items (loses the shared stem) or
  one all-or-nothing multi-select (loses partial credit). Neither is free; the disclosure has to say
  which was chosen.
- **Domain mix is 40/20/40 against the blueprint's 28/38/34** — d2 under-served by 18 points in a
  ten-item sample. Too small to be a real signal, but do not inherit it.
- **All four single-choice-with-four-options items use full-sentence parallel options.** No bare
  labels, no length tells. Worth copying as a craft standard.

## Domain 1 · Describe cloud concepts (4 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.1 | needing to control OS patching forces IaaS, whatever else the workload looks like (b-1.3-1/4, b-1.1-2) | Z1 | E03 ×3 service-model-swap (PaaS, SaaS, and FaaS — the last is a term this outline does not use) |
| 1.2 | *problem-solution, keyed Yes* — a managed app platform plus a managed database is an all-PaaS estate (b-1.3-2/4) | Z1 | E03 ×1 service-model-misclassification on the No branch. **Keyed to Azure SQL Database, which this outline does not name** — see below |
| 1.3 | *drop-down matching, 2 prompts* — a VM is IaaS, a managed app host is PaaS (b-1.3-1/2) | Z1 | E03 ×4 service-model-swap (two wrong models per prompt) |
| 1.4 | adding capacity *to* a resource is vertical; adding *more* resources is horizontal (b-1.2-1) | Z1 | E03 ×3 sibling-axis — but all three distractors encode the *same* error (more instances, more containers, more hosts), so the item has one distractor's worth of discrimination in three slots. Craft defect, see below |

**Domain 1 observation.** The strongest structural contribution in the package and the weakest
conceptual one: four items, three of them on the same IaaS/PaaS/SaaS spine that every source
over-serves. Item 1.2's key rests on **Azure SQL Database**, which the 2026-07-20 outline does not
name anywhere — the *concept* (a managed data service is PaaS) is sound and portable, the service is
not; the inventory should carry the concept and pick a named service, or none. Item 1.4 demonstrates
a defect worth naming as a rule: **three distractors built from one mechanism give a candidate one
decision, not three.** Every wrong option should come from a different pattern.

## Domain 2 · Describe Azure architecture and services (2 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.1 | an encrypted tunnel between an on-premises network and a virtual network, terminated on a gateway, is the site-to-site shape (b-2.2-5) | Z2 | E03 ×2 connectivity-sibling (point-to-site, private circuit), E01 ×1 service-role-swap (VNet peering offered for an on-premises problem) |
| 2.2 | *hot area, 4 statements* — built-in role scope: managing everything is not the same as being able to grant it, and viewing is not managing (b-2.4-5) | Z6 | D19 ×1 false-mechanism-claim (the statement asserting that full resource management includes granting access) |

**Domain 2 observation.** Two items for the heaviest domain, but both are well built. Item 2.1 is the
only item in any accessible source that discriminates *within* the outline's connectivity bullet
using only named services. Item 2.2 attacks the same RBAC concept as
`ms-learn-az900-modules` item 2.17 but from the opposite direction — that source tests how
assignments *combine*, this one tests what a single role *bounds*. Two independent sources on
b-2.4-5 from two different angles makes it the highest-confidence concept in d2. Nothing here
touches storage, compute, the resource hierarchy, or the six untested d2 bullets.

## Domain 3 · Describe Azure management and governance (4 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.1 | correlating telemetry from many resources into one place is the Azure Monitor platform (b-3.4-3) | Z2 | E01 ×3 service-role-swap — all three wrong options name services **outside this outline** (an eventing service, a source-control service, a push-notification service), so the item is eliminable without knowing Azure Monitor |
| 3.2 | analysing configuration and usage telemetry to recommend cost/performance/reliability/security improvements is Azure Advisor (b-3.4-1) | Z2 | E01 ×3 service-role-swap (a compliance workflow tool, an information-protection service, and the deployment control plane — two of the three are outside the outline) |
| 3.3 | a repeatable package of templates, role assignments and policies — **off-blueprint**, see below | Z7 | E01 ×3 service-role-swap (a compliance tool, the telemetry platform, the recommendation service) |
| 3.4 | *problem-solution, keyed Yes* — a long-lived steady workload is the case for a term commitment (b-3.1-1, b-1.1-6) | Z4 | E03 ×1 pricing-model-misjudgment on the No branch |

**Domain 3 observation.** Item 3.3 keys to **Azure Blueprints**, which is retired and which the
2026-07-20 outline does not name; the item must not enter the inventory in any form, and its
existence in a source last updated in February 2026 is the clearest single demonstration of why this
package screens concepts against the outline rather than against source agreement. Items 3.1 and 3.2
are conceptually right but mechanically weak for the same reason in reverse: their distractors are
drawn from outside the outline, so a candidate who has only read the skills-measured list can key
them by elimination. **A distractor outside the answer space is not a distractor.** Item 3.4 is the
package's second attestation of the term-commitment cost lever.

## Distractor-pattern frequency across the 10 items

Distractor slots ≈ **25** (6 single-choice × 3, plus 2 binary × 1, plus 4 across the two prompts of
the matching item, plus the 1 false statement in the hot-area grid).

| Pattern | Approx. count | Note |
|---|---|---|
| E03 `sibling-term-substitution` | 14 | 56% of slots, concentrated almost entirely in d1's service-model spine |
| E01 `service-role-swap` | 10 | 40% — and **8 of the 10 name services outside the current outline**, which is the source's dominant craft defect |
| D19 false-technical-claim | 1 | the hot-area false statement; the good sub-form (false-mechanism-claim), not the invented-term one |
| E02 `scope-level-slip` | 0 | absent again — two sources, 45 items, zero instances |
| E04 `estimate-versus-analyse` | 0 | absent as a *distractor*, though the source's own rationales lean on the distinction |
| E05 `retired-or-offblueprint-service` | 0 as a distractor | but present **as a key**, twice (items 1.2 and 3.3) — the inverse failure, and the more dangerous one |

**Consequences for authoring.**

1. **Every wrong option must name something inside the outline's answer space.** Eight of the ten
   `E01` instances here fail that test, and each one converts a judgment item into an elimination
   item. This should become a validator-visible authoring rule, not a habit.
2. **Never build two distractors from the same mechanism** (item 1.4). One pattern per wrong option
   is already the house rule in `methodology/03-authoring-guide.md`; this source shows the cost of
   breaking it.
3. **Adopt the problem-solution shape deliberately, or disclose that it is absent.** It is a real
   AZ-900 item type, it is cheap to author as a two-option `single_choice`, and it exercises a
   judgment ("does this proposal actually satisfy the stated constraint?") that four-option items
   do not. What cannot be reproduced is the *series*.
4. **Decide the hot-area approximation once, at S3, and put it in `format_coverage`** — four
   independent single-choice items, or one all-or-nothing multi-select. Do not let authoring make
   the choice item by item.
5. **Screen every candidate key against the named-service register**, not just every distractor. Two
   of ten items here are keyed to services the outline does not name.

## Concepts this source tests that other sources do not spell out

- the **problem-solution** item shape itself, and the judgment it exercises
- the **hot-area statement grid** and, with it, the partial-credit scoring model
- what a single RBAC role *bounds*, as distinct from how multiple roles combine (b-2.4-5)
- site-to-site versus point-to-site as a topology choice driven by who is connecting (b-2.2-5)
- term commitment as the cost lever for a steady long-lived workload (b-3.1-1)

## Concepts other sources hold that this source does not test

See the reconciliation in `master-inventory.md` (S3). In outline: the entire resource hierarchy
group (2.1), all of storage (2.3), all of compute beyond the service-model classification, the
governance-control triad beyond its off-blueprint item, cost estimation tooling, and every one of the
11 blueprint-only bullets listed in
[`source-az900-studyguide.md`](source-az900-studyguide.md#concepts-this-source-holds-that-no-practice-source-tests).
