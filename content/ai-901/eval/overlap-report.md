# Overlap screen · AI-901 · S5 round 1

Executed per [`methodology/05-eval-rubric.md#overlap`](../../../methodology/05-eval-rubric.md#overlap).
exam-examiner, 2026-08-18. Round 1.

## Verdict

**No shingle comparison against source texts is possible for this package, because no source text
is held.** This report therefore records the process control that stands in its place, plus one
comparison that *could* be run mechanically and was — bank text against the derivation artefacts
themselves.

## 1 · Why no source-text comparison exists

Three sources are registered and distilled
([`derivation/sources.md`](../derivation/sources.md)):

| source | type | what was retained | text held? |
|---|---|---|---|
| `ms-ai901-blueprint` | public_blueprint (Microsoft study guide) | skill areas, weight ranges, the 29 objective bullets as vocabulary, audience profile | **no** — distilled to [`source-ms-ai901-blueprint.md`](../derivation/source-ms-ai901-blueprint.md) |
| `ms-ai901-curriculum` | public_syllabus (AI-901T00 + two Learn paths, 14 modules / 103 units) | module and unit structure, current implementation vocabulary | **no** — distilled to [`source-ms-ai901-curriculum.md`](../derivation/source-ms-ai901-curriculum.md) |
| `akashp-ai901-simulator` | public_practice_set (MIT, 196 items) | per-item concept mapping and distractor-pattern frequencies only | **no** — distilled to [`source-akashp-ai901-simulator.md`](../derivation/source-akashp-ai901-simulator.md) |

Two further sources are registered but were never distilled: `kittoyeah-ai901-prep` (screened, not
used) and `ms-practice-assessment` (deliberately not accessed — behind a sign-in wall).

The `akashp` source is the only one whose text is lawfully holdable in full (MIT licence, so a
shingle comparison would have been permissible). It was nonetheless used classification-only under
the [clean-room rule](../../../methodology/01-source-distillation.md#clean-room), and its
distillation states in its own words: *"It is not a copy of the source material. No question text,
option text, or rationale prose is reproduced here — only the analytical classification. Nothing in
this document can be used to reconstruct the original questions."* Nothing in this repository holds
that text, so there is nothing to compare against. This is a real limitation of the screen and is
stated rather than papered over: **the control is the evidence, and the control is procedural.**

## 2 · The process control

The authoring session (S4) worked from derivation artefacts only. Those artefacts, and the commits
they were fixed in, are:

| artefact | commit | contains source text? |
|---|---|---|
| `derivation/sources.md` | `55ddbd6` | no — registry, licences, screening decisions |
| `derivation/source-ms-ai901-blueprint.md` | `55ddbd6` | no — Artefact B: blueprint facts + canonical vocabulary |
| `derivation/source-ms-ai901-curriculum.md` | `55ddbd6` | no — Artefact B: structure + vocabulary |
| `derivation/source-akashp-ai901-simulator.md` | `55ddbd6` | no — Artefact A: classification only, explicit no-reproduction statement |
| `derivation/master-inventory.md` | `4900b12` | no — Artefact C reasoning and merge log |
| `concepts.json` | `4900b12` | no — 56 concept statements, originally expressed |
| `questions.json` (d1 batch) | `f071972` | the bank under test |
| `questions.json` (d2 batch) | `197da1c` | the bank under test |

The clean-room chain is therefore: public sources → distillation artefacts containing zero source
text → concept inventory → bank. No authoring commit follows a commit that introduced source text,
because no commit in this package ever introduced source text.

## 3 · The comparison that could be run: bank vs derivation artefacts

Where a source-text comparison is impossible, the next-best mechanical evidence is whether the bank
lifts phrasing from the only documents the authoring session *did* read. A 7-gram shingle
comparison was run between every item's stem, options, matching options, scenarios and full
rationale, and the four derivation artefacts.

- **14 of 56 items** share at least one 7-gram with a derivation artefact.
- Highest counts: `d1-q21` (6 shingles), `d2-q36` (6), `d2-q35` (5), `d1-q05` (4), `d1-q03` (3).
- **Every hit falls into one of two expected classes:**
  1. **Concept-statement echo in the rationale.** E.g. `d2-q36`'s rationale shares *"reads well but
     cannot be traced back"* with C-036's statement in `master-inventory.md`; `d1-q21`'s shares
     *"what a vision model can be asked to"* with C-021. Rationale traceability (dimension 4)
     actively *wants* the rationale to argue in the concept's canonical framing, so this is the
     screen confirming the chain rather than finding a breach.
  2. **Canonical vocabulary terms** — Microsoft's own objective titles, which are
     [Artefact B's bounded exception](../../../methodology/01-source-distillation.md#artefact-b)
     and are excluded from overlap findings by the methodology: *"Create new visual outputs by using
     generative models"* (`d2-q46/q47/q48`), *"Extract information from images by using Content
     Understanding"* (`d2-q52`), *"a prompt to a deployed multimodal model"* (`d2-q45`).

**No item shares a shingle with anything that is not either its own concept statement or a
canonical vocabulary term. No overlap bounce is raised.**

## 4 · Originality spot-checks beyond shingling

- **Verticals.** All 56 items use settings from `authoring.json`'s declared vertical list; the
  responsible-AI block (d1-q01…q07) uses rural broadband, ferry, dental, hearing-aid retail,
  charity, port authority and maritime insurance — none of them the hiring or loan-approval
  settings that saturate both the accessible community source and Microsoft's own public material,
  which is the standing negative rule the authoring contract sets.
- **No rename-keyed items.** Spot-checked against the authoring contract's standing rule: no item
  in the bank is answerable only by knowing that a product was renamed. Superseded names do not
  appear as keys; where the current vocabulary is used (Microsoft Foundry, Foundry portal, Foundry
  SDK, Foundry Tools, Azure Content Understanding, Azure Speech, Azure Language) the item turns on
  what the thing does.
- **Validator near-duplicate check** (`near-duplicate-stems`, Jaccard 0.4) passes on the bank, so
  there is no internal self-overlap either.

## 5 · What Gate 2 should note

The originality claim for this package rests on a procedural control, not on a measurement. The
strongest available corroboration is negative — no source text exists in the repository to have
been copied — plus the derivation artefacts' own explicit no-reproduction statements. If the
`ms-practice-assessment` is ever accessed, or if the `akashp` repository is ever cloned into the
workspace for any reason, this screen should be re-run as a real shingle comparison before the next
status flip.

---

# Round 2 — delta screen (post-bounce re-eval, 2026-08-18)

Scope: rework commit `e2434ad` changed exactly five items — `d1-q15`, `d1-q16`, `d1-q24`,
`d2-q44`, `d2-q50` — confirmed by a per-item hash diff of `questions.json` against the round-1
eval commit `29bc9ff`; the other 51 items are byte-identical, so round 1's screen stands for them
unchanged.

**Method (identical to round 1).** Every surface of each reworked item — stem, all options,
`rationale.correct` and every `rationale.distractors` entry — 7-gram shingled and compared against
all five derivation artefacts held in the repository: `sources.md`,
`source-ms-ai901-blueprint.md`, `source-ms-ai901-curriculum.md`,
`source-akashp-ai901-simulator.md`, `master-inventory.md`.

**Result: zero shared 7-gram shingles across all five reworked items — no hits of any kind, not
even concept-statement echoes.** The rework is originally expressed. Bank-wide the shingle picture
is unchanged from round 1: the same 14 items share at least one shingle (`d1-q03`, `d1-q05`,
`d1-q21`, `d2-q32`, `d2-q35`, `d2-q36`, `d2-q40`, `d2-q45`, `d2-q46`, `d2-q47`, `d2-q48`,
`d2-q51`, `d2-q52`, `d2-q54`), every one of them a concept statement echoed in the item's own
rationale — which dimension 4 actively wants — or a canonical vocabulary term under Artefact B's
bounded exception. **No reworked item is among them; the rework added no overlap surface.**

**Process control, extended.** The clean-room chain recorded in round 1 now runs
`55ddbd6` (sources + distillation) → `4900b12` (master inventory / authoring contract) →
`f071972`, `197da1c` (authoring) → `e2434ad` (bounce-1 rework). The rework session worked from
the bounce records in `eval/judge-scores.json`, not from any source text, and the derivation
artefacts it could read carry their own explicit no-source-text statements. Nothing changed the
standing caveat: no live-exam or third-party source text is held anywhere in this repository, so
the originality claim rests on the process control plus this negative shingle result.

**No overlap bounce in round 2. No clean-room breach.**
