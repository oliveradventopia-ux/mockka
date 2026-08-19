# Artefact A · Tutorials Dojo CLF-C02 sample-question page distillation

**What this is.** Tutorials Dojo's freely readable CLF-C02 sample-question page contains 10
questions with full per-option refutations and AWS documentation references. This document records,
for each item, **the concept it tests** and **how each wrong option is constructed**.

**Why it exists.** It is the build's **only practice voice independent of the TheServerSide item
pool**, and it reads the blueprint from a different angle: four of its ten items sit in Domain 4
(support plans, partners, professional services), a task statement the other 70 practice items
barely touch.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `tutorialsdojo-sampler` in [sources.md](sources.md). Credited in the exam README.
> Screened against the excluded dump corpora: no numbered correspondence (items are
> topic-organised, not positions in a numbered corpus) and a distinct house style — long
> option-by-option refutations closing with a "hence, the correct answer is" formula, plus vendor
> documentation links per item. **Lower assurance than the TheServerSide pair:** no published
> originality or anti-braindump statement was found for this vendor, so the screen rests on
> structure and style alone. `[UNVERIFIED]` — flagged for Gate 1.
>
> Registered here is the **free public page (10 items)**. The vendor's 30-question portal sampler
> is behind account registration and is excluded under the no-signup rule — see
> [sources.md](sources.md#excluded-sources--screened-and-rejected).

Theme set (C1–C6) and pattern extensions (E01–E06) as proposed in
[`source-tss-mckenzie.md`](source-tss-mckenzie.md).

## Format mix observed

| Domain | Single choice | Multiple response | Ordering | Matching | Total |
|---|---|---|---|---|---|
| d1 Cloud Concepts | 2 | 0 | 0 | 0 | 2 |
| d2 Security and Compliance | 1 | 0 | 0 | 0 | 1 |
| d3 Cloud Technology and Services | 0 | 3 | 0 | 0 | 3 |
| d4 Billing, Pricing, and Support | 4 | 0 | 0 | 0 | 4 |
| **Total** | **7** | **3** | **0** | **0** | **10** |

Asymmetries worth preserving or correcting, explicitly:

- **A ten-item sampler is not a domain-mix sample.** Observed 20 / 10 / 30 / 40 % against the
  blueprint's 24 / 30 / 34 / 12 %; at n=10 the deviation carries no calibration weight and should
  not be averaged into the other two sources' shape. What it *does* carry is coverage signal — see
  below.
- **Every multiple-response item is again choose 2 of 5.** Across all three registered sources and
  all 80 items, the corpus contains zero choose-3 items and zero 6-option items, though the
  blueprint permits both. This is now a consistent, corpus-wide silence rather than one author's
  habit, and S3 must treat the MR shape as an unattested decision.
- **Zero ordering and zero matching** — correct for this exam.
- Item stems here are **shorter and less fictionalised** than TheServerSide's: several are bare
  "which of the following…" recall questions with no scenario at all. At this exam's altitude that
  is defensible, and it is a useful counterweight to the sibling sources' habit of wrapping pure
  recall in an invented company.

## Domain 1 · Cloud Concepts (2 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.3 | Which adoption-framework perspective owns business-outcome alignment | C1 | E04 `sibling-perspective-substitution` ×3 — **finer than the blueprint, see note** |
| 1.10 | The financial benefit of migration stated as a direction: up-front capital spend becomes variable operating spend | C1 | E05 `permutation-of-capex-opex-and-upfront-variable` ×3 |

**Domain 1 observation.** Item 1.10's construction is worth copying: all four options use the *same
four words* (capital, operating, upfront, variable) in different arrangements, so the item cannot be
answered by keyword-matching — the candidate must actually know the direction of travel. It is the
same permutation construction as `tss-declute` item 3.8, applied to economics instead of storage,
and it is the strongest way to test blueprint bullet b-1.4-3 without adding another CAPEX/OPEX
restatement. Item 1.3 tests CAF *perspectives*, which the exam guide does not enumerate (it names
CAF and its four business outcomes) — carry the concept, not the granularity.

## Domain 2 · Security and Compliance (1 item)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.7 | Which service supplies the account-wide event history of API activity for governance and audit | C5 | E01 `metrics-service-for-event-history`, E01 `config-recorder-for-event-history`, E04 `event-management-name-lure` |

**Domain 2 observation.** One item, but it lands on blueprint bullet b-2.2-8 (monitoring vs auditing
vs configuration vs reporting) with a **name-lure** distractor: an option whose name shares a word
with the stem's requirement while naming an unrelated support offering. That sub-form —
`name-lure` — is worth naming in the authoring guide; it is how this exam punishes keyword matching,
and it appears again in item 4.5 below.

## Domain 3 · Cloud Technology and Services (3 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.4 | Two ways to run a specific commercial relational engine — the managed service and the self-administered instance — as distinct from engine-incompatible alternatives (choose 2) | C2 | E01 `incompatible-engine-for-required-engine`, E01 `warehouse-for-oltp`, E01 `feature-name-as-service` |
| 3.8 | Which two characteristics correctly describe object storage, against the other two storage models (choose 2) | C1 | E04 `file-model-for-object-model`, E04 `block-model-for-object-model`, E01 `hybrid-gateway-for-object-store` |
| 3.9 | Which components terminate a network tunnel between an on-premises network and a virtual network (choose 2) | C2 | E01 `address-translation-gateway-for-tunnel-endpoint`, E01 `egress-only-gateway-for-tunnel-endpoint`, E01 `network-peering-for-tunnel-endpoint` |

**Domain 3 observation.** Item 3.4 is the only item in the whole corpus testing **choice between a
managed database and the same engine self-hosted on an instance** (blueprint bullet b-3.4-3) as a
*both-are-valid* multiple response — a construction the other sources never use and one that fits
this exam well, because the practitioner-level judgment really is "either works; know why".

> **Unresolved:** item 3.9's published option list did not parse unambiguously from the page, so the
> key pair could not be confirmed. The concept classification above is safe (tunnel-endpoint
> components), but **do not treat this item as attesting a specific key**. `[UNVERIFIED]` — one
> item, does not change any conclusion in this document.

## Domain 4 · Billing, Pricing, and Support (4 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 4.1 | Which channel supplies paid, outcome-oriented engagement work for cloud adoption, as distinct from support tiers and named contacts | C6 | E03 `support-tier-for-engagement-practice`, E03 `billing-team-for-engagement-practice`, E03 `named-contact-for-engagement-practice` |
| 4.2 | Which partner category designs, architects and migrates on a customer's behalf, as distinct from the category that supplies software | C6 | E04 `technology-partner-for-consulting-partner`, E01 `software-marketplace-for-partner-category`, E01 `named-contact-for-partner-category` |
| 4.5 | Which service inspects an environment against best practice and returns recommendations | C6 | E01 `spend-analysis-for-best-practice-check`, E01 `threshold-alerting-for-best-practice-check`, E04 `inspection-name-lure` |
| 4.6 | The purchasing option that satisfies server-bound licence terms by giving visibility of the physical host | C4 | E03 `on-demand-for-dedicated-host`, E04 `dedicated-instance-for-dedicated-host`, E03 `reservation-for-dedicated-host` |

**Domain 4 observation.** Four items, and **three of them (4.1, 4.2, 4.5) are the corpus's only
coverage of Task Statement 4.3's partner/professional-services/resource cluster** — 13 blueprint
bullets that the 70 TheServerSide items address exactly once (a support-plan item). This is the
single strongest argument for keeping this source despite its size and its lower screening
assurance. Item 4.6 is also the corpus's only coverage of BYOL (blueprint bullet b-1.4-5), reached
from the purchasing-option side, and its `dedicated-instance-for-dedicated-host` distractor is the
classic discrimination in that family.

## Distractor-pattern frequency across the 10 items

Counted from the tables above; 30 wrong options (7 single-choice × 3 + 3 multiple-response × 3).

| Pattern | Approx. count | Note |
|---|---|---|
| E01 `service-role-swap` | 13 | 43% — the lowest share of the three sources, because half the items are category or plan discriminations rather than service selections |
| E04 `sibling-term-substitution` | 8 | includes two `name-lure` sub-forms, a construction the other sources never use |
| E03 `tier-or-option-slip` | 6 | support tiers and purchasing options |
| E05 `cost-model-inversion` | 3 | all three in one permutation item |
| E02 `responsibility-side-flip` | 0 | this source tests no shared-responsibility item |
| E06 `out-of-scope-service-lure` | 0 | **the only source in the corpus with none** — every option names an in-scope offering |
| D-series | 0 | no judgment-shaped distractors at all |

**Consequences for authoring.**

1. **`E06` at zero is achievable** — this source proves a full item set can be built without ever
   reaching for an out-of-scope service as a distractor. Confirms the proposed manifest cap of 0.
2. **Name the `name-lure` sub-form of `E04`** in the authoring guide: an option whose *name* shares
   a salient word with the stem while naming an unrelated offering. Two instances here (items 2.7,
   4.5), zero in the other 70 items, and it is the cheapest defence against keyword-matching
   candidates.
3. **Name the `permutation` sub-form** (already argued from `tss-declute` 3.8; item 1.10 here is the
   economics version). Same-vocabulary options in different arrangements.
4. **Use "both are valid" multiple-response items sparingly but deliberately** (item 3.4). At this
   exam's altitude a two-key item where both keys are legitimate approaches is more faithful than a
   two-key item where the second key is an afterthought.
5. **Domain 4 authoring should lean on this source's shape**, not on the TheServerSide items'.

## Concepts this source tests that other sources do not spell out

- The adoption framework's internal structure and who owns business-outcome alignment (item 1.3).
- Paid professional-engagement work as a distinct channel from support plans (item 1/4.1).
- The partner-category distinction: consulting versus technology partners (item 4.2).
- Licence-bound purchasing options and host visibility — the corpus's only BYOL coverage (item 4.6).
- Managed-versus-self-hosted database as a both-are-valid choice (item 3.4).
- The account-wide API event history as the audit answer (item 2.7).

## Concepts other sources hold that this source does not test

The reconciliation belongs to `derivation/master-inventory.md` at S3. Pointing forward: this source
tests no shared-responsibility item, no identity/credential item, no elasticity-versus-scalability
item, no storage-class-by-retention item and no content-delivery item — the entire body of the
other two sources' coverage. The complement across all three registered sources is close to
disjoint, which is the finding S3 should carry into the convergence computation: **the corpus is
broad but thin, and very few concepts will earn `priority: high` by the ≥2-independent-sources
rule.**
