# 01 · Source acquisition + distillation (S1–S2) {#source-distillation}

Stage manual for S1 (intake + source registry) and S2 (distillation) in
[`00-pipeline.md`](00-pipeline.md). Owner: research-manager, executing `/exam-new`.

This is where Mockka's anti-dumps posture is *made* structural: sources are registered with a
legality basis before anything is read, and what leaves the distillation session is analytical
classification only — never text.

---

## The source-tier hierarchy {#tiers}

S1 intake walks the tiers top-down. Higher tiers are better calibration and lower risk; the
blueprint tier is the one that is never optional.

### Tier 1 — official free practice sets

Vendor-authored practice questions published free by the certification owner:

- **Microsoft Learn Practice Assessments** — free, official, per-certification
- **AWS Skill Builder Official Practice Question Sets** — free 20-question sets, ~10 certifications
- **Google, CompTIA, Cisco sample questions** — official sample sets on the exam pages

Because the vendor wrote them, they are the best available calibration for format mix, difficulty
pitch, and wording style — and they carry zero legality risk. Usage is **classification-only**
like every Artefact-A source: they inform *what is tested and how items are built*, never what any
item says.

### Tier 2 — blueprints / exam guides (mandatory backbone)

The official exam blueprint or exam guide: domains, weights, objectives, item counts, time limit,
pass mark. Stable per-vendor URLs (recorded in the vendor's [source map](source-maps/TEMPLATE.md)).
**Every exam build requires its Tier 2 source.** No blueprint, no exam — there is nothing to weight
the paper against.

### Tier 3 — official curricula + own course notes

Official curricula/learning paths, and **notes Oliver (or a future contributor) took from a
legitimately purchased or accessed official course** — source type `own_course_notes`, with the
**proof-of-access basis recorded** in the registry (e.g. "purchased seat, order ref", "employer
enrollment"). These are the Artefact-B vocabulary sources: they supply the canonical terms a
candidate will recognise from study.

### Tier 4 — freely-published community prep

Blog posts, licensed GitHub study repositories (e.g. freeCodeCamp-style guides), freely published
practice sets by named authors. Used as **convergence signal** and Artefact-A input under the same
clean-room discipline. Attribution recorded; authors credited in the per-exam README where their
work informed the derivation (the CCAR-P README's prior-art section is the pattern).

### Always excluded

**Forums and exam-experience threads are excluded** (Oliver decision, plan §Decisions 2), along
with anything NDA'd, any braindump, and any "actual questions" collection. Not as a nicety — an
excluded source type in the registry is a Gate 1 legality failure, and harvested text cannot pass
the validator's provenance chain anyway.

---

## The source registry {#registry}

`content/<slug>/derivation/sources.md` — written in S1, before distillation begins. One entry per
source:

| Field | Meaning |
|---|---|
| `id` | short stable key, e.g. `src-blueprint`, `src-purcell` — derivation docs are named `source-<id>.md` |
| `type` | `public_blueprint` \| `public_syllabus` \| `own_course_notes` \| `own_distillation` \| `licensed_import` |
| `author` | person or organisation |
| `url` | canonical URL (or "offline — proof of access on file" for course notes) |
| `date_accessed` | ISO date the source was read/checked |
| `license / permission basis` | what makes use legal: public publication, explicit licence (name it), purchase/enrollment proof, or author agreement |
| `usage constraint` | what this source may be used for: `classification-only` (Tiers 1, 4), `vocabulary + classification` (Tier 3), `blueprint data` (Tier 2), or `import` (licensed-import lane) |

The registry is the root of the provenance chain the validator enforces (question → concept →
derivation doc → **registry entry**). An unregistered source cannot legitimately appear anywhere
downstream.

The manifest carries `blueprint_version` and `source_checked_date` from P0 — the P1 vendor-watch
engine diffs against exactly these fields.

---

## THE CLEAN-ROOM RULE {#clean-room}

This is the procedural half of the anti-dumps design, and it is absolute:

1. **Distillation sessions may read sources.** S1–S2 sessions (research-manager) open the
   registered source texts — that is their job.
2. **Authoring sessions never open source texts.** S3 onwards (exam-author, exam-examiner) work
   **only** from the derivation artefacts. Not "avoid quoting" — *never open*. `/exam-author`
   refuses to run in a session that has had source texts open.
3. **Distillation artefacts contain zero source text.** No question text, no option text, no
   rationale prose, no paraphrase close enough to reconstruct any of them. What an artefact holds
   is **analytical classification only**: the concept each item tests, the distractor pattern
   behind each wrong option, the format mix, the frequency table. (Artefact B's verbatim
   *vocabulary terms* — two-to-five-word technical labels from a syllabus — are the deliberate,
   bounded exception: terminology is not expression, and it is what makes rationales traceable to
   study material.)

The consequence: even a hostile reading of Mockka's repo history can never find a moment where
source expression could have flowed into a question, because the session that saw the sources
never wrote questions, and the files that bridge the two contain classifications, not text.

---

## Artefact A — practice-source distillation {#artefact-a}

One per practice-question source (Tier 1 or Tier 4). Written to
`content/<slug>/derivation/source-<id>.md`. Mirrors the structure proven by the CCAR-P Purcell
distillation. Template:

```markdown
# Artefact A · <source name> distillation

**What this is.** <Author>'s <free/official> <exam> practice set contains N questions written
against the public exam blueprint. This document records, for each item, **the concept it tests**
and **how each wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory. It answers the question
"what does <this source's author> believe is tested?" — an independent reading of the blueprint.

**What it is not.** It is not a copy of the source material. No question text, option text, or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: <registry id> in sources.md. Credited in the exam README.

## Format mix observed

| Domain | Single choice | Multiple response | Scenario matching | Total |
|---|---|---|---|---|
| ...one row per domain, plus totals... |

<Asymmetries worth preserving or correcting, noted explicitly.>

## Domain <n> · <title> (<k> items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| n.1 | <one-line concept statement in YOUR words> | T? | D?? <sub-form label>, D?? ... |

**Domain <n> observation.** <What this source's reading of the domain emphasises or misses.>

<...repeat per domain...>

## Distractor-pattern frequency across the N items

| Pattern | Approx. count | Note |
|---|---|---|
| ...counted from the tables above; flag over-used and under-used patterns... |

**Consequences for authoring.** <Numbered list: caps to set, patterns to raise, patterns to keep
sparse — these become the manifest's pattern caps.>

## Concepts this source tests that other sources do not spell out
<Bullet list — carried into the master inventory as this-source-only entries.>

## Concepts other sources hold that this source does not test
<Pointer to the reconciliation in master-inventory.md.>
```

The **per-item annotations matter**: each wrong option gets its D-pattern *plus a short sub-form
label* (e.g. `D01 gate-everything`, `D03 flood-and-hope`, `D19 eviction-misattribution`). The
labels are original analytical shorthand — they are what makes the frequency table auditable and
what later enriches the [authoring guide](03-authoring-guide.md)'s pattern craft. The frequency
table is the **calibration baseline**: it is where per-exam pattern caps come from.

---

## Artefact B — syllabus distillation {#artefact-b}

One per syllabus-grade source (Tier 2/3: official syllabus, curriculum, own course notes). Written
to `content/<slug>/derivation/source-<id>.md`. Mirrors the CCAR-P recap-concepts structure.
Template:

```markdown
# Artefact B · <source name> concepts

**What this is.** The <exam> <syllabus/course> states N rules/objectives across M modules. Most
carry more than one testable idea. This document splits each into its constituent concepts and
records the **canonical vocabulary** attached to each.

**Why it exists.** It is the authoritative half of the master concept inventory: where practice
sources record what an author *believed* is tested, this records what the syllabus *actually
teaches* — and supplies the exact terminology a candidate will recognise from study.

**Vocabulary is quoted verbatim** from the source. That is deliberate: a question that uses the
syllabus's own terms lets a candidate trace a missed item straight back to the rule. Vocabulary
terms are the only verbatim content permitted in any artefact.

## Module → exam domain mapping

| Source module | Maps to exam domain(s) |
|---|---|
| ...reconciliation table — modules rarely map 1:1 onto blueprint domains... |

## Module <m> · <title>

### Rule <m.nn> — <rule title as the source names it>

| Concept | Vocabulary |
|---|---|
| <constituent concept, stated in YOUR words> | *<verbatim term>*, *<verbatim term>* |

> **<Practice-source> coverage: none/partial.** <Cross-annotation against the Artefact A sources —
> this is where the convergence signal is first visible.>

<...repeat per rule...>

## The named-risk register  <!-- if the source names failure modes -->

| Named risk | Rule | Diagnostic question shape |
|---|---|---|
| ...each named risk is a high-value diagnostic-item seed... |
```

If the source attaches **named risks** to its rules, capture them — the CCAR-P build found these
the highest-value question seeds in the whole source set, because each names a specific way a
competent-looking design fails.

If an exam has a blueprint but no syllabus-grade source, the build degrades gracefully — see the
[single-source path](02-master-inventory.md#single-source) and the optional `syllabus_rules`
layer.

---

## The licensed-import lane {#licensed-import}

The one lane where item *text* legitimately enters from outside (plan Decision 12):

- **Commercial-compatible allowlist only:** CC BY, MIT, Apache-2.0, or an explicit author
  agreement. The allowlist is enforced by the validator, not by discipline. NC/SA-licensed content
  stays **classification-only** (Artefact-A input), so future paid tiers stay clean.
- **Registry entry required:** source type `licensed_import`, licence named, attribution
  requirements recorded exactly as the licence demands; attribution renders wherever the licence
  requires (per-exam README at minimum).
- **No eval bypass:** imported items pass the **full eval gauntlet** — validator, blind solve,
  Codex advisory, judge rubric, bounce loop — before publication, same as originally-authored
  items. A licence makes an item legal, not good.
- Imports seed a bank fast; original authoring then fills the concept-inventory gaps the import
  does not cover.

---

## Per-vendor source maps {#source-maps}

`methodology/source-maps/<vendor>.md`, one per certification vendor, created the first time an
exam from that vendor is onboarded (template: [`source-maps/TEMPLATE.md`](source-maps/TEMPLATE.md)).
A source map records the vendor's stable URL patterns for blueprints and official practice sets,
its licence posture, and a last-checked date — which turns S1 for the vendor's *next* exam into a
repeatable crawl (firecrawl/playwright, free, in stack) instead of a fresh research project. At
P1 the vendor-watch engine (plan Decision 13) runs off these same maps: blueprint revisions →
re-validation flags, new certifications → onboarding queue, practice-set updates → recalibration
flags.
