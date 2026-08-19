# S5 overlap screen — az-900, round 1

Examiner: exam-examiner (fresh session; authored nothing in this bank) · Date: 2026-08-18 ·
Protocol: `methodology/05-eval-rubric.md` §overlap · Bank under screen: 65 items at
`questions.json` commit `f649943`.

## Source posture

Per `derivation/sources.md` §clean-room and the manifest provenance block, none of the four
registered sources is held locally as text:

| Source | Type | Held as text? |
|---|---|---|
| `az900-studyguide` (official study guide, skills measured as of 2026-07-20) | public_blueprint | No — distilled to `derivation/source-az900-studyguide.md` (skill areas, 12 skill groups, 57 objective bullets, canonical vocabulary; no verbatim body prose retained) |
| `ms-practice-assessment` (official Learn practice assessment, id 23) | public_practice_set | **Never accessed at all** — account-walled, and no account was created (free-first / no-signup rule). Zero weight in the concept inventory, no artefact exists |
| `ms-learn-az900-modules` (12 Learn modules, 35 knowledge checks) | public_syllabus | No — clean-room analytical classification only (`derivation/source-ms-learn-az900-modules.md`); keys were determined analytically, not read off the source |
| `tutorialsdojo-az900` (10 sample questions) | public_practice_set | No — clean-room analytical classification only (`derivation/source-tutorialsdojo-az900.md`) |
| `insidecloud-az900` (100-question free quiz) | public_practice_set | No — clean-room analytical classification only (`derivation/source-insidecloud-az900.md`); screened against the dump corpus at S1 with no correspondence found |

Because the source texts were never retained, **no direct bank-vs-source shingle comparison is
possible. The process control is therefore the evidence, and this report records it explicitly
rather than pretending a scan happened** (§overlap, "where sources were never held as text").

## Process control (the evidence)

1. The S1–S2 distillation session (research-manager) read the registered sources and wrote
   analytical classification only. Its own clean-room statement
   (`derivation/sources.md` §clean-room) records that no question text, option text or rationale
   prose from any source is reproduced, and that nothing in the directory can be used to
   reconstruct a source item.
2. The authoring session (S3, exam-author, 2026-08-17) worked exclusively from those derivation
   artefacts. The clean-room rule (`methodology/01-source-distillation.md` §clean-room) forbids
   authoring sessions from opening source texts.
3. The one deliberate shared-string exception is **canonical vocabulary** — short technical terms
   taken from the official study guide, permitted by
   [Artefact B's bounded exception](../../../methodology/01-source-distillation.md#artefact-b)
   because terminology is what makes a rationale traceable to study material. Canonical terms are
   excluded from overlap findings by protocol.
4. Artefact commits (the chain the control hangs on):
   - `efd66f5` — `sources.md`
   - `a54cc54` — `source-az900-studyguide.md`, `source-ms-learn-az900-modules.md`,
     `source-tutorialsdojo-az900.md`, `source-insidecloud-az900.md`
   - `ec02cd4` — `master-inventory.md`, `concepts.json` (S2)
   - `c45059e` — `gate1-checklist.md`
   - `f649943` — `questions.json`, the authored state under this screen
5. A dump-lineage screen was already performed upstream at S1 and is recorded in `sources.md`: the
   largest available AZ-900 corpus (`Ditectrev/...Practice-Tests...`) was **rejected** on dump
   lineage and absent licence, with per-item evidence (verbatim ExamTopics correspondence, OCR
   scars). That rejection is the strongest single piece of evidence that the clean-room posture was
   enforced rather than assumed.

## Supplementary check actually run: bank vs derivation artefacts

The derivation docs *are* held locally, so as a supplementary control the examiner ran an 8-gram
word-shingle comparison between the full bank text (stems, options, matching options, scenarios,
rationales — 65 items) and every file in `derivation/`:

| Doc | Shared 8-gram shingles | Reading |
|---|---|---|
| `source-az900-studyguide.md` | 9 (4 distinct phrases) | All from the distillation's own **objective-paraphrase rows** (Artefact B), e.g. row `b-2.1-5` "the billing and access boundary that owns resource groups" → item 2.05; `b-3.4-1` "recommendations across cost, security, reliability, performance and operational excellence" → 3.17; `b-3.1-4` "cost and ownership can be sliced after the fact" → 3.06; `b-1.2-4` "the platform's own tooling and automation" → 1.14. These are objective statements and canonical vocabulary, not source body prose |
| `source-ms-learn-az900-modules.md` | 5 (2 distinct phrases) | Both from the doc's own analytic concept rows — "cloud computing is the delivery of computing services…" and "a resource belongs to exactly one resource group at a time" (row 2.1). Derivation-chain wording that the bank legitimately echoes |
| `source-insidecloud-az900.md` | 2 | Both from the doc's own concept-mapping rows — "a region is a latency-bounded set of datacenters" (row 2.16) and "restricting the regions in which resources may be created" (row 3.15). Concept statements written by the distiller, not quiz text |
| `source-tutorialsdojo-az900.md` | 0 | clean |
| `master-inventory.md` | 0 | clean |
| `sources.md` | 0 | clean |
| `gate1-checklist.md` | 0 | clean |

Every match was inspected in its source line. **None is a quoted source string**; all 16 hits fall
in the two permitted classes — canonical vocabulary and the distillation's own analytic prose.
Notably, the two docs derived from actual practice *questions*
(`tutorialsdojo`, and the item-level rows of `insidecloud`) produce either zero matches or matches
only in the distiller's concept statements — which is where a clean-room breach would show up
first.

## Verdict

Overlap screen **passes on process control** for all 65 items. No clean-room breach found; **no
item bounces for re-expression.**

Residual risk is the one the methodology names: with no held source text, verbatim overlap with
the three practice sets cannot be *measured*, only prevented by construction. The Gate 2 deep-read
sample is the human backstop, and the S1 dump-corpus rejection is the strongest available evidence
that construction held.
