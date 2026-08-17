# Overlap screen · sy0-701 · S5 round 1

Executed per [`methodology/05-eval-rubric.md#overlap`](../../../methodology/05-eval-rubric.md).
exam-examiner, fresh session, 2026-08-18. Bank under screen: `questions.json` @ `4090ed3`,
122 items.

**Verdict: no overlap finding. No item bounces for re-expression.** One legality item
(`jealarue-exam90` licence) remains open from Gate 1 and is carried forward to Gate 2 — it is a
permission question, not an originality one.

---

## 1 · What is lawfully held, and what that permits

The registry in [`manifest.json`](../manifest.json) `provenance.sources` lists three sources.
What this package actually holds as text differs by source, and the screen differs with it.

| Source | Type | Held as text? | Screen performed |
|---|---|---|---|
| `comptia-sy0701-objectives` | public blueprint (CompTIA's own Exam Objectives v5.0, © 2023) | **Yes, as a distillation** — `derivation/source-comptia-sy0701-objectives.md` @ `dfd0ce2` (Artefact B: the objectives' enumerated vocabulary is the [bounded exception](../../../methodology/01-source-distillation.md#artefact-b)) | Shingle comparison, below |
| `comptia-practice-v7` | vendor practice set, 10 items | **No** — `derivation/source-comptia-practice-v7.md` @ `e059ef2` is classification-only and states in its own header that no question, option or rationale text is reproduced | Process control, §3 — plus a shingle comparison against the distillation as a secondary check |
| `jealarue-exam90` | third-party practice set, 145 items | **No** — `derivation/source-jealarue-exam90.md` @ `e059ef2`, same classification-only construction | Process control, §3 — plus a shingle comparison against the distillation as a secondary check |

The blueprint is the only source whose *text* the package can compare against, and it is the one
source that may lawfully share strings with the bank: the objectives document supplies the
canonical vocabulary the exam is written in, and a Security+ item that avoided the phrase "next
generation firewall" would be testing something other than Security+.

## 2 · Shingle comparison (where text is held)

Method: the validator's own 3-word shingling (`packages/engine/src/validate/index.ts`,
`shingles()` — lowercased, punctuation stripped, words of 4+ characters, 3-grams), run over each
item's full surface (stem + every option or matching-option/scenario + correct rationale + every
distractor rationale) against each derivation artefact. 16,278 distinct bank 3-grams.

| Artefact compared | Worst item | Shared 3-grams | Coverage of that item's shingles |
|---|---|---|---|
| `source-comptia-sy0701-objectives.md` | `d3-q13` | 8 | **6.7%** |
| `master-inventory.md` (Mockka's own concept inventory) | `d2-q22` | 4 | 3.7% |
| `source-jealarue-exam90.md` | `d2-q09` | 2 | 1.8% |
| `source-comptia-practice-v7.md` | `d4-q29` | 2 | 1.4% |
| `sources.md` | `d5-q19` | 1 | 0.6% |
| `gate1-checklist.md` | `d4-q24` | 1 | 0.6% |

283 distinct 3-grams are shared with the three `source-*` artefacts in total. Every one inspected
is either a canonical vocabulary term or an unavoidable technical collocation. The most frequent:

> `data loss prevention` · `right audit clause` · `full disk encryption` · `watering hole attack` ·
> `ports default credentials` · `time check time` · `service level agreement` ·
> `single point failure` · `next generation firewall` · `real time operating` ·
> `intrusion prevention system` · `file integrity monitoring` · `incident response process`

These are exactly the [Artefact B bounded exception](../../../methodology/01-source-distillation.md#artefact-b)
— objective vocabulary that must appear verbatim for the item to test the objective — and are
excluded from overlap findings by the rubric. **No matched string is a sentence, a stem fragment,
an option, or a rationale phrase.** The longest match anywhere is three words.

The `master-inventory.md` matches are a different thing again and are expected: those are the
bank's own concept statements (`d2-q22` shares "segmentation isolation same containment judgment
severities" with concept C-038's statement), i.e. the authoring session working from its own
derivation artefact, which is the clean-room procedure operating as designed, not a source leak.

**Highest single-item exposure to the blueprint is 6.7%, in `d3-q13`, and consists of
`virtual private network` / `remote access` / `carrying private traffic across networks` — the
objective's own term list plus concept C-055's statement.** Nothing here approaches the
"beyond incidental technical phrases" bar.

## 3 · Process control (where no source text is held)

For the two practice sets, no comparison is possible, so per the rubric the control **is** the
evidence and is recorded rather than a scan being implied:

- **Artefacts the authoring session worked from.** S3 authored from
  `derivation/master-inventory.md` (@ `86923ae`) and `concepts.json` (@ `86923ae`) only — the
  122 family-level concept rows, their vocabulary, and the per-domain allocation. The two
  practice-set artefacts feed the *inventory*, not the authoring session.
- **Those artefacts contain zero source text.** Both Artefact A documents state it in their own
  opening: *"It is not a copy of the source material. No question text, option text or rationale
  prose is reproduced here — only the analytical classification. Nothing in this document can be
  used to reconstruct the original questions."* Their content is concept-per-item and
  wrong-option-mechanism-per-item classification plus frequency tables.
- **Clean-room rule.** [`01-source-distillation.md#clean-room`](../../../methodology/01-source-distillation.md#clean-room):
  distillation sessions may read sources, authoring sessions never open source texts. The five S3
  authoring commits are the per-domain batches `1c5e891` → `3d33a4a` → `faf33b8` → `5dfa7cd` →
  `4090ed3`, on top of the scaffold `a748cd9`.
- **Commit hashes of the evidence:** `master-inventory.md` `86923ae` · `sources.md` `69d1bce` ·
  `source-comptia-sy0701-objectives.md` `dfd0ce2` · `source-comptia-practice-v7.md` `e059ef2` ·
  `source-jealarue-exam90.md` `e059ef2` · `questions.json` `4090ed3`.
- **Corroborating signal (secondary, not proof).** The two practice-set distillations do contain
  *some* prose — the analyst's own — and the bank's maximum overlap against either is **2 three-word
  technical terms** (`supply chain attack`, `watering hole attack`; `incident response process`).
  A bank that had absorbed source phrasing through the distillation would show more.

## 4 · Independent originality signals

- **Verticals are authored fresh.** `authoring.json` declares 55 organisational settings (livestock
  auction house, motorway toll operator, hospice care provider…) authored at S3 as scenario
  wardrobe; none is copied from a source scenario. No source item could survive re-dressing into
  these settings and remain recognisable.
- **Intra-bank near-duplication.** The validator's `near-duplicate-stems` check passes at the
  manifest's `near_duplicate_jaccard` 0.4 — no two of the 122 stems are near-copies of each other.
- **Dump screening happened upstream.** `derivation/sources.md` records the intake screen that
  excluded recall-lineage corpora, and `derivation/gate1-checklist.md` carries the evidence.
  `manifest.provenance.nda_statement` states the position.

## 5 · Carried to Gate 2

1. **`jealarue-exam90` has no licence file** (Gate 1 decision 1, still open). The author retains
   copyright; the source was registered on a public-publication basis and flagged. This is a
   **permission** question and is orthogonal to this screen's originality finding — no text was
   reused either way, and the bank would survive the source being dropped as a *classification*
   input, though 68 of 82 high-priority concepts rest on it for their second source. Oliver's call.
2. **Blueprint revision string** — third-party sites reference a "Version 6.0" of the objectives
   document; the manifest carries `5.0 (© 2023)` and the Gate 1 note requires confirmation from
   CompTIA's own download before publication.
