# S5 overlap screen — gcp-cdl, round 2

Examiner: exam-examiner (fresh session, authored nothing in this bank) · Date: 2026-08-18 ·
Protocol: `methodology/05-eval-rubric.md` §overlap. Round 1 preserved at `overlap-report-r1.md`.

**Verdict: zero findings, zero bounces.** Round 1's single finding (O-1, `gcp-cdl-d4-10`) is
**discharged** — the reworked rationale no longer reproduces vendor sample-item phrasing, and no
new reproduction was found anywhere in the bank. One residual watch item is recorded for the
Gate 2 deep-read (§RW-1), and the round-1 root cause in an S1 artefact is **still open**
(§Root cause, unchanged) because fixing it is distillation work, outside the examiner's write
surface.

## Source posture (unchanged from round 1)

None of the four registered sources is held locally as text; the posture table in
`overlap-report-r1.md` §Source posture still applies verbatim and is not restated here. The
consequence is the same: no direct bank-vs-source shingle comparison is possible, so the screen
runs as a mechanical comparison against the only lawfully-held text in the package (the
derivation artefacts, including whatever source prose they retained) plus the recorded process
control.

## Part 1 — mechanical screen, re-run at round 2

Method identical to round 1. The five artefacts the authoring session worked from
(`sources.md`, `source-gcp-cdl-guide.md`, `source-gcp-cdl-samples.md`,
`source-whizlabs-cdl-free.md`, `master-inventory.md`; 1,498 lines) were normalized (lowercased,
punctuation stripped) and shingled at n = 5, 6, 7. Every item's stem + all options +
`rationale.correct` + every distractor rationale was shingled the same way and intersected.
`eval-report.md` and `gate1-checklist.md` are excluded from the corpus this round: they now quote
bank prose back at itself, so including them measures the eval's own citations rather than
originality.

| n | Items with ≥1 shared shingle | Total shared shingles |
|---|---|---|
| 5 | 39 / 83 | 153 |
| 6 | 26 / 83 | 82 |
| 7 | 14 / 83 | 47 |

Every one of the 47 seven-gram hits falls into the two categories round 1 established, and none
is a finding:

1. **Canonical vocabulary (Artefact B bounded exception,
   `01-source-distillation.md#artefact-b`).** The service-model triple (d1-15), the data-lake
   shape triple (d2-02), the Google Threat Intelligence three-source list (d5-10), the
   secure-by-design infrastructure list (d5-07), the network/security product family (d5-13),
   the guide's own objective strings ("implications and risks of not adopting cloud", d1-09;
   "exposing and monetizing public-facing APIs", d4-14).
2. **Mockka's own analytical prose reused between Mockka's own documents.** "on top of the
   warehouse rather than beside" (d2-13), "trust is evidenced rather than asserted" (d5-14),
   "the state of a system rather than a" (d5-06), "Agent Platform is for in business terms"
   (d3-10). Intra-package reuse of the package's own writing; nothing in the methodology
   restricts it.

### The targeted pass — the one that matters here

Because the artefacts are the only place source prose could be held, the decisive check is the
narrow one: **extract every quoted run of ≥3 words from the three source-distillation documents
(21 quoted runs found) and test the bank for each.** Result:

| Quoted run (artefact) | In the bank? |
|---|---|
| `"my own language and tools, minimal infrastructure management"` — `source-gcp-cdl-samples.md:151`, Google sample item 4.2 | **No.** This was round-1 Finding O-1. Cleared. |
| `"without making any changes to the code"` — `source-gcp-cdl-samples.md:157`, Google sample item 4.3 | No (cleared at round 1 too; d4-02 re-expresses it independently) |
| the other 19 quoted runs (whizlabs option-shape labels, stem-frame notes, publisher metadata) | No |

The only match the pass returns across all 83 items is the bare term `as-a-Service` (d1-15),
which is canonical vocabulary under the Artefact B exception and not a source phrase.

### Finding O-1 — DISCHARGED

```
was  (r1) : "Cloud Run is for teams that want their own language and tools with
             minimal infrastructure management: ..."
now  (r2) : "Cloud Run leaves the language and tooling choice with the developers and
             takes over everything below the container: ..."
```

Rework commit `42fbd3f` (`rework gcp-cdl bounce 1: gcp-cdl-d4-10`) changed exactly one string —
one insertion, one deletion, confined to `rationale.correct` — and left the stem, the options and
the key untouched, which is precisely what the round-1 `required_fix` specified. The bank now
contains neither the 4-gram (`own language and tools`) nor the 3-gram
(`minimal infrastructure management`), in any item, in any field. Re-scored fresh on all six
dimensions at round 2 (5/4/5/5/4/5, no failing dimension) and carried into the Gate 2 sample as a
bounce survivor per §handoff.

### RW-1 — residual watch item, not a finding

`gcp-cdl-d6-01` option D and its rationale carry "hardware investment, operational overhead and
opportunity cost", which also appears at `source-gcp-cdl-samples.md:189` in the concept column
describing Google's sample item 6.3. Three reasons it is recorded as a watch rather than a
finding: the artefact line is the distiller's **unquoted** classification statement, not retained
source prose (contrast line 151, which the distiller marked as a quotation); the three components
are standard TCO vocabulary rather than an authored turn of phrase; and the guide distillation's
own bullet b-6.1-1 carries the same concept in canonical terms (CapEx, OpEx, TCO). It is logged
here so the Gate 2 deep-read can look at it with the item in front of them rather than have it
surface later as a surprise.

## Part 2 — the process control (unchanged, and still imperfect)

Points 1–3 of `overlap-report-r1.md` §Part 2 stand unchanged: the S3 authoring session worked
exclusively from derivation artefacts under the clean-room rule; each Artefact-A document carries
a no-reproduction header assertion, and the samples distillation additionally records that **no
answer key existed in the public payload**, so no key was taken from any source; the dump screen
excluding candidate-recall sources is evidenced in `derivation/sources.md`.

Point 4 also stands, and is the reason this report cannot yet say the control held: the
no-reproduction assertion in `source-gcp-cdl-samples.md` is still contradicted by that document's
own lines 151 and 157.

### Root cause and ratchet — STILL OPEN

The round-1 root-cause finding is unresolved: the bank was fixed, the artefact was not.
`derivation/source-gcp-cdl-samples.md` still quotes vendor sample-item prose at lines 151 and 157.
That is S1 distillation work and outside the examiner's write surface, so it is re-raised here
for Gate 2 with both ratchet proposals from round 1 unchanged:

- **R-1 (methodology).** `01-source-distillation.md` should forbid quoted source-prose fragments
  in Artefact-A documents outright — classify the item, never quote it; paraphrase and mark the
  paraphrase where an inference needs pinning.
- **R-2 (validator).** A `derivation-quote-leak` check: extract every quoted run of ≥5 words from
  `derivation/*.md`, shingle it, and fail any bank item reproducing a ≥4-gram of it unless the run
  also appears in the blueprint distillation. `defect_class: source-phrase-reuse` has now been
  raised in two exams (ccao-f r1: 2 items; gcp-cdl r1: 1 item) and each instance was caught by a
  human-run examiner pass that a five-line mechanical check would have caught at S4. The targeted
  pass in this report is a working prototype of exactly that check.

## Commit evidence

| Artefact | Last commit |
|---|---|
| `derivation/sources.md` | `80525b0` (2026-08-16) |
| `derivation/source-gcp-cdl-guide.md` | `67a06b2` (2026-08-16) |
| `derivation/source-gcp-cdl-samples.md` | `44da329` (2026-08-16) — still carries the quotations at lines 151, 157 |
| `derivation/source-whizlabs-cdl-free.md` | `44da329` (2026-08-16) |
| `derivation/master-inventory.md` | `8d36fbc` (2026-08-16) |
| `questions.json` (bank under judgment) | `42fbd3f` (2026-08-18) — the round-1 rework |

`git status` reported `questions.json` clean throughout the screen: the bank judged here is the
committed revision `42fbd3f`, not a working-tree variant. The examiner made no edit to
`questions.json` at any point in this round.
