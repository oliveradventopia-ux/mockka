# S5 overlap screen — gcp-cdl, round 1

Examiner: exam-examiner (fresh session) · Date: 2026-08-18 · Protocol:
`methodology/05-eval-rubric.md` §overlap.

**Verdict: one finding, one bounce.** `gcp-cdl-d4-10` reproduces vendor sample-question
phrasing in its rationale (§Finding O-1). The other 82 items clear the screen. A process-control
gap in an S1 artefact is recorded as the root cause (§Root cause).

## Source posture

Per `derivation/sources.md` and the manifest provenance block, none of the four registered
sources is held locally as text:

| Source | Type | Held as text? |
|---|---|---|
| `gcp-cdl-guide` (exam guide, footer "launched on August 12, 2026") | public_blueprint | No — distilled to `derivation/source-gcp-cdl-guide.md` (sections, 14 objectives, 69 consideration bullets, canonical vocabulary, named-risk register; no body prose retained) |
| `gcp-cdl-cert-page` (certification page) | public_blueprint | No — logistics only; no derivation document |
| `gcp-cdl-samples` (Google's own 29 free sample questions) | public_practice_set | No — clean-room analytical classification only (`derivation/source-gcp-cdl-samples.md`). **Two direct quotations survived in that document — see §Root cause.** |
| `whizlabs-cdl-free` (30 free practice questions, 2021) | public_practice_set | No — clean-room analytical classification only (`derivation/source-whizlabs-cdl-free.md`) |

Because the source texts were never retained, **no direct bank-vs-source shingle comparison is
possible.** The screen therefore runs in two parts, as §overlap requires: a mechanical comparison
against the only lawfully-held text in the package (the derivation artefacts, including whatever
source prose they retained), plus the recorded process control.

## Part 1 — mechanical screen (what was actually run)

Method: all of `derivation/*.md` (1,599 lines) was normalized (lowercased, punctuation stripped)
and shingled at n = 5, 6 and 7. Each bank item's stem + all options + rationale.correct + every
distractor rationale was shingled the same way and intersected.

| n | Items with ≥1 shared shingle | Total shared shingles |
|---|---|---|
| 5 | 39 / 83 | 128 |
| 6 | 26 / 83 | 71 |
| 7 | 14 / 83 | 41 |

**Classification of the 41 seven-gram hits.** Two categories, both expected:

1. **Canonical vocabulary (Artefact B bounded exception,
   `01-source-distillation.md#artefact-b`) — excluded from findings.** e.g.
   "infrastructure as a service iaas platform as a service paas software as a service saas"
   (d1-15), "structured semi structured and unstructured data in native form" (d2-02),
   "googles vast global visibility mandiants frontline incident response expertise" (d5-10),
   "proprietary data centers purpose built servers and networking" (d5-07),
   "cloud vpc cloud vpn cloud interconnect firewalls cloud armor cloud logging iam" (d5-13),
   "hardware investment operational overhead and opportunity cost" (d6-01),
   "implications and risks of not adopting cloud" (d1-09),
   "exposing and monetizing public facing apis" (d4-14). These are the blueprint's own objective
   and vocabulary strings, which the exception exists for.
2. **Mockka's own analytical prose reused between its own documents — not a finding.** e.g.
   "on top of the warehouse rather than beside" (d2-13), "trust is evidenced rather than asserted"
   (d5-14), "the state of a system rather than a" (d5-06). This is intra-package reuse of the
   package's own writing; nothing in the methodology restricts it.

A supporting check confirms the vocabulary posture from the other direction: **all 208 distinct
`keywords` terms across the 83 items resolve to `derivation/source-gcp-cdl-guide.md` or
`derivation/master-inventory.md`** — zero orphan vocabulary. That is the dimension-4 traceability
claim made mechanical.

A second, targeted pass then searched the bank for the *specific fragments the derivation
documents retain as quotations of source prose*, since those are the only source strings the
package holds. That pass produced the one finding below.

### Finding O-1 — `gcp-cdl-d4-10`, rationale.correct — BOUNCE

```
bank    : "Cloud Run is for teams that want their own language and tools with
           minimal infrastructure management: ..."
artefact: derivation/source-gcp-cdl-samples.md:151
          | 4.2 | "my own language and tools, minimal infrastructure management"
                  is the serverless-container answer (b-4.2-4) | ...
```

The quoted string is recorded in the artefact as the phrasing of **Google's own published sample
item 4.2**. The bank reproduces it as a contiguous 4-gram (`own language and tools`) plus a
contiguous 3-gram (`minimal infrastructure management`), in the same order and doing the same
argumentative job.

Exception test — **fails**: neither phrase appears anywhere in
`derivation/source-gcp-cdl-guide.md`, so it is not Artefact B canonical vocabulary. The master
inventory itself re-expresses the same idea independently, as "own-tools containers" (C-055),
which demonstrates the phrase was never required. This is vendor item prose, outside "incidental
technical phrases", and inside the repo hard rule (`CLAUDE.md`, anti-dumps): *never reproduce
source or live-exam text.* Public availability of the sample form does not license reproducing
its item wording.

Bounce record and required fix: `eval/judge-scores.json` → `bounces[0]`. The fix is confined to
the rationale's opening clause; the stem, options and key are independently expressed and stay.

### Checked and cleared

- **`"without making any changes to the code"`** — the other quotation the samples artefact
  retains (line 157, from vendor item 4.3). The bank's counterpart item `gcp-cdl-d4-02` states
  the same constraint in its own words ("the retailer can make no change to it" / "moving the
  system as it is so that no code changes"). No reproduction. Cleared.
- **`derivation/source-whizlabs-cdl-free.md`** — its quoted fragments are option-shape labels
  used for classification ("any of the above", "depends on the resource type", an invented
  "Cloud Serverless"), not stem or rationale prose. None appears in the bank. Cleared.
- **`derivation/sources.md`** quoted runs are publisher metadata (the guide footer, a copyright
  notice, Google's published caveat about the sample set) held as intake evidence, not item
  content. None appears in the bank. Cleared.
- **Concept-level correspondence with the vendor sample set** (d4 items map onto sample items
  4.1–4.5 one for one) is **not** an overlap finding. Both derive from the same public objective
  bullets (b-4.1-2, b-4.2-1/4, b-4.3-1) via the master inventory; the scenarios, verticals,
  option sets and keys are original. §overlap screens expressed text, not shared syllabus.

## Part 2 — the process control (the evidence where no comparison is possible)

For the four sources' unheld text, the control *is* the evidence:

1. The authoring session (S3, exam-author, 2026-08-16) worked exclusively from the derivation
   artefacts — the clean-room rule (`01-source-distillation.md#clean-room`) forbids authoring
   sessions from opening source texts.
2. Each Artefact-A document carries an explicit no-reproduction assertion in its header, and the
   `gcp-cdl-samples` distillation additionally records that **no answer key existed in the public
   payload** (the form grades server-side), so every concept mapping in it is Mockka's own
   analytical inference and **no key was taken from any source**. That is a stronger claim than
   the usual clean-room statement and it is load-bearing for this exam.
3. Two of the four sources are vendor-published (guide, samples) and two are third-party
   (cert page, Whizlabs); `derivation/sources.md` records the dump screen that excluded
   candidate-recall sources, with the ExamTopics non-correspondence checks at ids 1, 9 and 13.
4. **The control is not perfect, and this report says so rather than asserting it held**: the
   header assertion in `source-gcp-cdl-samples.md` is contradicted by that document's own lines
   151 and 157, which is exactly how Finding O-1 reached the bank.

### Root cause and ratchet proposal

Finding O-1 is an **S1 distillation control gap, not an S3 authoring failure.** The authoring
session behaved correctly — it worked from the artefact — and the artefact is what carried the
vendor's words forward. Scrubbing `derivation/source-gcp-cdl-samples.md` is distillation work
and is outside the examiner's write surface; it is raised here for Gate 2.

Two items for the ratchet (`00-pipeline.md#ratchet`), both raised by
`defect_class: source-phrase-reuse` now appearing in **two exams** (ccao-f r1: 2 items; gcp-cdl
r1: 1 item) — a class climbing the enforcement ladder:

- **R-1 (methodology).** `01-source-distillation.md` should forbid quoted source-prose fragments
  in Artefact-A documents outright: classification documents may name a concept and a pattern,
  never quote the item. Where a quotation feels necessary to pin an inference, paraphrase and
  mark it as a paraphrase.
- **R-2 (validator, cheap and mechanical).** A `derivation-quote-leak` check: extract every
  quoted run of ≥5 words from `derivation/*.md`, shingle it, and fail any bank item that
  reproduces a ≥4-gram of it unless the run also appears in the blueprint distillation (the
  Artefact B exception). Both this finding and both ccao-f findings would have been caught at S4,
  before the examiner ever saw them.

## Commit evidence

Derivation artefacts under judgment, as committed on `feat/exam-factory`:

| Artefact | Last commit |
|---|---|
| `derivation/sources.md` | `80525b0` (2026-08-16) |
| `derivation/source-gcp-cdl-guide.md` | `67a06b2` (2026-08-16) |
| `derivation/source-gcp-cdl-samples.md` | `44da329` (2026-08-16) — the document carrying Finding O-1's quotation |
| `derivation/source-whizlabs-cdl-free.md` | `44da329` (2026-08-16) |
| `derivation/master-inventory.md` | `8d36fbc` (2026-08-16) |
| `questions.json` (bank under judgment) | `6c9a673` (2026-08-18) |

`git status` was clean for `questions.json` throughout the screen: the bank judged here is the
committed revision `6c9a673`, not a working-tree variant.
