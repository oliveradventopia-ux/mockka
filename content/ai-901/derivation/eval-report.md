# S5 eval report — ai-901

Stage S5 of [`methodology/00-pipeline.md`](../../../methodology/00-pipeline.md), executed per
[`methodology/05-eval-rubric.md`](../../../methodology/05-eval-rubric.md) via `.claude/skills/exam-eval`.
Owner: exam-examiner. Artifacts: [`eval/blind-solve.json`](../eval/blind-solve.json),
[`eval/codex-solve.json`](../eval/codex-solve.json), [`eval/judge-scores.json`](../eval/judge-scores.json),
[`eval/overlap-report.md`](../eval/overlap-report.md).

---

# S5 eval report — ai-901, round 1

**Date:** 2026-08-18 · **Bank:** 56 items (48 single_choice, 5 multiple_response,
3 scenario_matching) · **Examiner session:** fresh context, never authored or edited
`content/ai-901/questions.json`.

## Headline

| | |
|---|---|
| Blind solve | **56/56 (100%)**, all high confidence, **0 misses, 0 open adjudications** |
| Codex cross-solve | **advisory_skipped** — CLI unauthenticated, fourth exam running |
| Judge rubric | 56 items × 6 dimensions, every distractor argued FOR before scoring |
| **Bounces** | **5 items** (round 1 of max 2): `d1-q15`, `d1-q16`, `d1-q24`, `d2-q44`, `d2-q50` |
| Gate 2 sample | **9 items** (8 carrying a 3, plus `d1-q12` referred on a dim1 4) |
| Overlap | no bounce — process control recorded, no source text held |
| Validator | all 18 bank-quality checks pass; the two `selection-*` failures are the expected pre-S6 state |

**Verdict: PASS WITH BOUNCES.** The bank is keyed correctly and pitched close to right. Five items
return to exam-author, four of them for one defect class that the last two exams already taught us
to look for.

## Precondition — independence and validator state

- **Independence:** this session performed no Write or Edit on `content/ai-901/questions.json` at
  any point. `questions.json` was opened read-only, and only *after* the blind answers were written
  to disk.
- **Validator:** `pnpm validate ai-901` reports 30 checks, 10 errors — **all ten errors are
  `selection-shape` and `selection-format-mix` against an empty `selection.json`**, which is S6's
  artifact and does not exist yet. Every bank-quality check passes: `bank-shape`, `item-metadata`,
  `keyword-presence`, the three format-shape checks, `rationale-anti-drift`,
  `rationale-letter-reference`, `distractor-patterns`, `pattern-frequency-caps`,
  `key-position-distribution`, `answer-length-cue`, `concept-coverage`, `near-duplicate-stems`,
  `style-policy`, `number-drift`, `mojibake`, and the four provenance checks. This is the same
  pre-S6 signature recorded for clf-c02 and is not a defect.

## 1 · Blind solve (`eval/blind-solve.json`)

**Order of operations, stated because it is the whole basis of the result.** The keyless form was
generated mechanically before anything else was read:

```
jq '{questions: [.questions[] | {id, type, question, options, matching_options, scenarios}
     | with_entries(select(.value != null))]}' content/ai-901/questions.json
```

That strips `answer`, `rationale`, `distractor_patterns`, `primary_concept`, `theme`, `vertical`
and `keywords`. All 56 items were answered with a confidence grade and a one-line reason, and those
answers were written to disk **before** the key, any rationale, `concepts.json`, `authoring.json` or
any prior eval artifact was opened.

**Result: 56/56, all high confidence.** No misses, therefore no adjudication queue and nothing
outstanding for a human on correctness grounds.

**Read that number with its discount.** The author and the examiner share Claude weights and the
cross-model instrument was unavailable, so 100% measures *internal consistency*, not independent
correctness. What the number does establish is that no item is miskeyed in a way a competent solver
would notice, and that no item is so ambiguous that a careful reading lands elsewhere. What it
cannot establish is the absence of a convergent blind spot. The evidence that this matters:
**the two most serious findings of this round (`d2-q41`, `d2-q38`) are both items the blind solve
answered correctly and confidently.** They were found by the argue-FOR step, not by solving.

## 2 · Codex advisory cross-solve (`eval/codex-solve.json`)

`advisory_skipped`. `codex` is not on PATH; the only binary on this machine is bundled inside the
VS Code ChatGPT extension (`openai.chatgpt-26.810.52044-darwin-arm64`, codex-cli 0.148.0-alpha.9),
`codex login status` reports *Not logged in*, and one `codex exec` probe returned 401 Unauthorized
against `api.openai.com/v1/responses` after five reconnect attempts. Unchanged since the aif-c01
round-1 probe on 2026-08-16 and identical to az-900 and clf-c02.

Per §codex a missing advisory instrument is **noted, not blocking**. Consequences, carried into
Gate 2: there is no three-way disagreement matrix for this round; the Gate 2 sample was assembled
without the cross-model signal; and the Gate 2 deep read is the sole compensating control for
convergent-blind-spot risk and should be run as adjudication rather than confirmation. Establishing
auth requires an interactive `codex login` by Oliver — outside the examiner's authority under the
project's free-first rule.

## 3 · Judge rubric (`eval/judge-scores.json`)

Every item scored 1–5 on all six dimensions, with the strongest honest case for each distractor
written before any score. Per-item cases are in the artifact.

### Distribution

| dim | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| 1 · single defensible best answer | 0 | 0 | **3** | 4 | 49 |
| 2 · distractor plausibility | 0 | 0 | **4** | 24 | 28 |
| 3 · concept alignment | 0 | 0 | 0 | 2 | 54 |
| 4 · rationale traceability | 0 | 0 | **2** | 3 | 51 |
| 5 · difficulty pitch | 0 | **4** | **5** | 38 | 9 |
| 6 · scenario realism | 0 | **1** | 0 | 1 | 54 |

### Calibration (stated so scores compare across exams and rounds)

Dimension 5 = `min(content pitch, surface-cue score)`. Two surface cues were measured mechanically
across the whole bank.

- **(a) Keyed-length ratio `r`** — keyed option length as a percentage of the longest distractor;
  the defect that bounced eleven items in aif-c01 round 1. Ladder carried over unchanged:
  `r ≥ 150 → 2`, `125–149 → 3`, `110–124 → 4`. **It never fires here.** Max `r` = 118 (`d2-q33`),
  median 100, **zero items at or above 125**, eight in the 110–124 band (capped at 4, which is
  where their content pitch sat anyway).
- **(b) Stem pre-translation** — the clf-c02 `1.10` defect in its AI-901 form. Measured as
  `e` = content words present in the stem AND the keyed option AND **no** distractor. Distribution
  across the 53 optioned items: `e=0` 15, `e=1` 19, `e=2` 8, `e=3` 7, `e=4` 1, `e=5` 1, `e=6` 2.
  `e` was used as a **flag, not a rule** — it over-counts unavoidable scenario nouns (`d1-q01`
  scores `e=3` on *"model ranks town"* and is a clean item). Every flagged item was then
  adjudicated by one question: **does the option with maximal lexical overlap win uncontested?**
  Four items fail that test and carry dim5 2.

Key-letter distribution across 56 items: **A 13 / B 14 / C 15 / D 14 / E 2** — no positional cue,
comfortably inside the 0.4 manifest cap.

### Reading

- **Dimension 3 is the bank's strongest result: 54 of 56 at 5.** Every item tests exactly its
  `primary_concept`, and the concept-to-item mapping is 1:1 across all 56 concepts. The two 4s
  (`d1-q11`, `d2-q44`) are both cases where the item tests the concept's *shape* without exercising
  its content.
- **Dimension 2 is the softest at 4 threes and 24 fours.** The recurring shape is one throwaway
  option in an otherwise strong set — most often a generation option planted in an analysis item,
  or a manual-effort option nobody would choose. Where all four options are real practitioner
  positions the items are excellent: `d1-q02`, `d1-q14`, `d2-q25`, `d2-q27`, `d2-q34`, `d2-q35`,
  `d2-q43`, `d2-q49`, `d2-q55`.
- **Nine items score dim5 5** — `d1-q14`, `d2-q25`, `d2-q26`, `d2-q27`, `d2-q34`, `d2-q35`,
  `d2-q43`, `d2-q49`, `d2-q55`. These are the bank's benchmark items: in each, the surface points
  *away* from the principle (bigger model, more training, a better prompt) and only the concept
  gets you there.
- **The implementation half (d2) is stronger than the concepts half (d1) on pitch** — the F5/F6/F8
  themes force route- and order-selection judgments that resist restatement, whereas d1's F2
  granularity family repeatedly states the answer in the stem.

## 4 · Bounces (5 items, round 1 of max 2)

Full records with `judge_case`, `defect_class` and `required_fix` in
[`eval/judge-scores.json`](../eval/judge-scores.json) → `bounces`.

| id | failing dim | defect_class | one-line indictment |
|---|---|---|---|
| `d1-q15` | 5 = 2 | `stem-pretranslates-key-vocabulary` | stem says *"the salient terms it is about"*; the key says *"the salient terms that the review is actually about"* — no distractor carries either word |
| `d1-q16` | 5 = 2 | `stem-pretranslates-key-vocabulary` | stem enumerates *"people, places, organizations and dates … as typed values"*; the key returns *"typed spans for the people, places, organizations and dates"* |
| `d1-q24` | 5 = 2 (dim2 3) | `stem-pretranslates-key-vocabulary` | stem lists the four fields *"as named values"*; the key returns the same four fields *"as named values"* — 6 key-exclusive echo words, the bank's highest |
| `d2-q44` | 6 = 2 (dim1 3, dim4 3) | `scenario-contradicts-key` | the scenario asks for a flag when the sampler *"sounds unsure"*, which is prosody the keyed transcribe-then-classify pipeline discards |
| `d2-q50` | 5 = 2, 2 = 3 | `answer-surface-cue` | only the two keyed options mention the docket, permit number, flatbed or pallets; the other three mention none of the stem's objects |

Note on `d2-q44`: this is the one bounce that is not a surface defect. Arguing FOR distractor C
produced a case the key cannot answer **using this bank's own concept** — `C-039`, tested at
`d2-q39`, states that a deployed multimodal model responds to audio directly with no recognition
step in front. The keyed strict ordering is true only if the classifier is a text technique, and
the stem never says it is; that premise appears for the first time in the rationale. The prosody
contradiction is what pushes it to a bounce rather than a Gate 2 flag. `C-044` is a good concept —
the scenario is the wrong vehicle for it.

Rework follows [`03-authoring-guide.md#procedure`](../../../methodology/03-authoring-guide.md#procedure):
the failing dimension names the step to redo. Re-authored items re-enter S5 and are re-scored
fresh — new blind solve on the reworked item, full rubric, no partial credit.

## 5 · Overlap screen (`eval/overlap-report.md`)

No overlap bounce. No source text is held anywhere in the repository, so no shingle comparison
against sources is possible; the report records the process control instead — which derivation
artefacts S4 worked from, their commit hashes (`55ddbd6`, `4900b12`), and each artefact's own
explicit statement that it contains no source text.

The one comparison that *could* be run was run: a 7-gram shingle comparison of every item's stem,
options, scenarios and full rationale against the four derivation artefacts. 14 of 56 items share
at least one shingle, and **every hit is either the item's own concept statement echoed in its
rationale** (which dimension 4 actively wants) **or a canonical vocabulary term** — Microsoft
objective titles such as *"Create new visual outputs by using generative models"*, which are
Artefact B's bounded exception and are excluded from overlap findings by the methodology.

## 6 · Gate 2 sample (assembled per §handoff) — 9 items

| id | why |
|---|---|
| `d2-q41` | **dim1 3, dim4 3 — the round's strongest finding.** Distractor B (*"would rather configure the route in a portal than write and maintain prompts"*) restates `C-040`'s own discriminator — the dedicated route is *configured and called* rather than *prompted*. A candidate applying the concept correctly has a real case for B; the item survives only because B is phrased as a preference and the stem asks for "requirements". That is a reading test standing in for a concept test, and the rationale does not engage it. |
| `d2-q38` | dim1 3 — classifying in the mail gateway is a standard architecture that delivers exactly what the district asked for; nothing in the scenario rules it out. The key wins on `C-038`'s framing, and the rationale's selectivity argument is a criterion the stem never states. |
| `d1-q11` | dim5 3 — three options are absolutes and the key is the only hedged one, so it is answerable by test-wiseness; neither key nor rationale names an actual deployment option (dim3/dim4 4). |
| `d1-q21` | dim2 3, dim5 3 — two of three distractors are eliminable without the scenario; the two-jobs/two-options structure narrows the pick early. |
| `d1-q23` | dim5 3 — four of five scenarios are near-free medium-naming; the whole judgment rests on s5 (photographs of labels → Images, not Text). |
| `d2-q36` | dim2 3 — distractor A is not choosable by anyone in a safety context, leaving two working distractors. |
| `d2-q37` | dim5 3, dim1 4 — the key is the abstract, moderate option among three concrete over-commitments (`r`=116); and the single-structured-call architecture in A is a live real-world position the exam rejects on doctrine. |
| `d2-q47` | dim5 3 — the keyed option carries a self-justifying clause that restates the stem's requirement back at the candidate. |
| `d1-q12` | **referred** on a dim1 4 — D (second deployment + cache) delivers the literal ask (identical foyer-card wording across twelve venues); and lower temperature reduces variation without guaranteeing that identical input yields identical output, which the rationale overstates (dim4 4). Worth a human read even though nothing scores 3. |

The five round-1 bounces are **not** in this sample: they return to the author and re-enter S5.
They join Gate 2 only if they survive a second bounce.

## 7 · Cross-exam note — the ratchet, third data point

`ai-901` is the third bank authored after the aif-c01 findings and the second after clf-c02's.

- **The aif-c01 length cue is gone.** aif-c01 round 1 bounced eleven items for a keyed option that
  was a 150–200%-length essay. Here: max `r` = 118, median 100, **zero items ≥ 125**. Key position
  is likewise clean (A13/B14/C15/D14/E2). Two mechanical defect classes, both extinguished, across
  two different exams and different authoring sessions.
- **The clf-c02 stem-restatement cue survived, and multiplied.** clf-c02 round 1 found one instance
  (`1.10`). ai-901 has four, concentrated in one family (d1's F2 output-granularity items) plus one
  vision analogue in d2. This is the class that **neither live validator check can see**:
  `answer-length-cue` cannot detect it (the four items sit at `r` 95, 96, 97 and 109) and `key-position-distribution`
  is irrelevant to it.
- **The same family proves the fix is cheap.** Five members of the F2 family pass cleanly at dim5 4
  — `d1-q17` says *"each thing they commented on"* and lets the option supply *aspect* and
  *polarity*; `d1-q18` says *"act on what employers said"* and lets the option supply *"preserves
  the substance"*. The rule the family already demonstrates: **the stem carries the business need,
  the option carries the technique's property, and the candidate supplies the mapping.**

## 8 · Ratchet proposals from this round

1. **Build the `stem-key-word-match` validator check** (proposed in clf-c02's eval report,
   unbuilt). AI-901 refinement: flag any item where the keyed option shares ≥4 content words with
   the stem that appear in **no** distractor. On this bank that fires on exactly `d1-q24`,
   `d2-q50`, `d1-q16` and `d2-q47` — three round-1 bounces and one Gate 2 flag, **no false
   positives**, one miss (`d1-q15`, whose shared phrase is only two words but is the entire output
   spec). A phrase-level variant comparing 2- and 3-grams would catch `d1-q15` too. Two exams have
   now been indicted by a class no automated check can see; that is the ratchet's own escalation
   criterion.
2. **Authoring-guide rule, F2-family form:** when an item asks *"which technique produces that?"*,
   the stem may not use the keyed technique's canonical output noun phrase. Name the business
   outcome; let the option name the output. This is a one-line rule that would have prevented three
   of this round's five bounces.
3. **Cross-item consistency check for concept pairs.** `d2-q44`'s defect is that it asserts a
   pipeline order that `d2-q39` — six items earlier, same package — teaches is avoidable. Nothing
   in S4 or the validator compares an item's claim against a sibling concept's claim. Worth a
   `concepts.json`-level note where two concepts constrain each other (`C-039` ↔ `C-044`,
   `C-040` ↔ `C-041`).

## 9 · Procedure note for the examiner role

The argue-FOR step earned its keep twice this round in a way blind solving could not. `d2-q41` and
`d2-q38` were both answered correctly at high confidence in the blind solve; both turned out to
have a distractor whose best case is built out of the exam's own vocabulary. A 100% blind solve is
therefore not evidence that dimension 1 is safe — it is evidence about the examiner, not about the
bank. Where the blind solve is clean, the argue-FOR pass *is* the eval.

## Verdict

**Round 1: PASS WITH BOUNCES.** 51 of 56 items ship as scored. Five return to exam-author with
score reports. Nine go to Gate 2 for a human deep read, led by `d2-q41`. No status flip may occur
until round 2 clears the bounces and Oliver signs off — and the sign-off record should note that
this round carries **no cross-model signal**.

**Next action:** exam-author reworks `d1-q15`, `d1-q16`, `d1-q24`, `d2-q44`, `d2-q50` per their
bounce records. Round 2 = fresh blind solve on the five reworked items + full re-score of the bank,
then S6 selection (manifest mix: 42 = d1 18 / d2 24; SC/MR/SM per domain 14+2+2 / 20+3+1; 14
reserve-only concepts).

---

# S5 eval report — ai-901, round 2 (post-bounce re-eval)

**Examiner:** exam-examiner, fresh session — authored nothing in this bank and opened no key,
rationale, distractor pattern, concept metadata or round-1 eval artifact until the round-2 blind
answers were written to disk · **Date:** 2026-08-18 · **Bank revision under eval:**
`questions.json` at `e2434ad` (rework of the five round-1 bounces) · **Scope confirmed
mechanically:** a per-item hash diff against the round-1 eval commit `29bc9ff` shows exactly
`d1-q15`, `d1-q16`, `d1-q24`, `d2-q44`, `d2-q50` changed and the other 51 items byte-identical.

**Artifact versioning note.** The shapes pinned in `methodology/05` §artifact-shapes carry no round
field and the preflight parses the canonical filenames, so round 2 lives in `eval/blind-solve.json`
and `eval/judge-scores.json` (the current bank revision) and round 1 is preserved unmodified at
`eval/blind-solve-r1.json` and `eval/judge-scores-r1.json`. `codex-solve.json` and
`overlap-report.md` carry both rounds in one file, marked by section — the aif-c01 convention.

## Headline

| | |
|---|---|
| Blind solve | **56/56 (100%)**, 55 high / 1 medium, **0 misses, 0 open adjudications** |
| Codex cross-solve | **advisory_skipped** (round 2) — CLI still unauthenticated |
| Judge rubric | 56 items × 6 dimensions; the 5 reworked items re-scored fresh with new argue-FOR cases |
| **Bounces** | **0** — every round-1 bounce resolved on its indicted dimension; no item reaches the cap of 2 |
| Gate 2 sample | **10 items** (8 carrying a 3 + `d1-q12` referred + `d2-q50` contamination referral) |
| Overlap | delta screen of all five reworked items: **zero shingles**, no bounce |
| Validator | `pnpm validate ai-901`: 30 checks, 10 errors — all ten the expected pre-S6 empty-`selection.json` failures |

**Verdict: S5 round 2 PASSED.** Zero dimensions ≤2 anywhere; zero bounces; zero open
adjudications; nothing escalates to Oliver as below-threshold. 56 of 56 items ship as scored,
subject to Gate 2.

## 1 · Round-1 indictment, re-measured

Every fix was checked against the dimension that indicted it, not against the author's description
of the fix. `e` = content words present in the stem AND the keyed option AND **no** distractor
(the round-1 stem-pretranslation measure).

| id | round-1 failing | measured now | round-2 score | verdict |
|---|---|---|---|---|
| `d1-q15` | dim5 = 2 (`stem-pretranslates-key-vocabulary`) | `e` 2 → **0**; key has the *lowest* stem overlap of the four options (key 1 vs A 4 / B 1 / C 3) | dim5 **4** | RESOLVED |
| `d1-q16` | dim5 = 2 (same class) | `e` 5 → **0**; stem overlap flat at 1 word across all four options | dim5 **4** | RESOLVED |
| `d1-q24` | dim5 = 2, dim2 = 3 | `e` 6 (bank's highest) → **0**, field names gone from the stem; summarization distractor replaced by a position-template-per-shipper-layout option (`D05`) | dim5 **4**, dim2 **4** | RESOLVED (both) |
| `d2-q44` | dim6 = 2 (`scenario-contradicts-key`), dim1 3, dim4 3 | prosodic "sounds unsure" replaced by an out-of-range reading a transcript carries; stem now names Azure Language text analysis as the chosen route | dim6 **5**, dim1 **5**, dim4 **4**, dim3 4 → **5** | RESOLVED |
| `d2-q50` | dim5 = 2, dim2 = 3 (`answer-surface-cue`) | all five options now reference the stem's objects; the *maximal*-overlap option (E, 5 words) is now wrong; duplicated one-holistic-call idea removed | dim5 **4**, dim2 **4** | RESOLVED (both) |

Two of these are worth calling out beyond the arithmetic:

- **`d2-q44` is the substantive fix of the round.** Round 1's finding was not a surface cue: the
  keyed strict ordering was true only if the classifier was a text technique, and the stem never
  said so — while the bank's own `C-039` (`d2-q39`) teaches that a multimodal model takes audio
  with no recognition step in front. Naming the route in the stem makes distractor C **false**
  instead of co-correct, and the prosody requirement that the keyed pipeline could not have met is
  gone. **Ratchet proposal 3 from round 1 (cross-item consistency for constraining concept pairs,
  `C-039` ↔ `C-044`) is resolved on this tree** — as a fixed item, not yet as a check.
- **`d1-q24`'s new distractor is the best kind of rework.** The template-per-layout option is a
  real practitioner alternative that loses on compounding cost (dozens of house layouts, new
  shippers monthly) rather than on a stem prohibition — the item gained a good-vs-best axis instead
  of merely losing a cue.

## 2 · Blind solve, round 2 (`eval/blind-solve.json`)

The keyless form was regenerated by `jq` from the reworked bank before anything else was read, and
**all 56 items were re-solved fresh** — not only the five reworked ones — with an answer,
confidence grade and one-line reason written to the session scratchpad before any key, rationale or
round-1 artifact was opened.

**Accuracy: 56/56. Confidence: 55 high, 1 medium (`d2-q41`, the dedicated-speech-versus-multimodal
requirement pair — the same item that carries the round's standing dim1/dim4 3s). Zero misses →
zero adjudications, empty queue.**

**Integrity disclosure — one item is contaminated.** To establish which items had changed, this
session read the `e2434ad` commit message during scope discovery; its `d2-q50` paragraph states
"keys B+D unchanged". `d2-q50` was therefore solved with knowledge of its key, and its match is not
independent evidence. The item is **referred to Gate 2** on that ground alone (it scores 4/5 across
the board). The other 55 items are uncontaminated. Lesson recorded for the examiner role: in a
re-eval round, establish rework scope from a **hash diff of item ids**, never from the rework
commit message, which routinely names keys and patterns.

**The standing discount still applies.** Author and examiner share Claude weights and the
cross-model instrument is unavailable, so 100% measures internal consistency, not independent
correctness. Round 1 demonstrated the point concretely: its two strongest findings (`d2-q41`,
`d2-q38`) were both answered correctly at high confidence and were caught only by the argue-FOR
pass. Both remain open as Gate 2 flags in this round.

## 3 · Codex advisory cross-solve (`eval/codex-solve.json`)

**`advisory_skipped` again.** `codex` is not on PATH; the only binary on this machine is bundled
inside the VS Code ChatGPT extension and `codex login status` reports *Not logged in* — unchanged
since the round-1 probe hours earlier and since the aif-c01 probe on 2026-08-16. No `exec` probe
was issued this round: an unauthenticated CLI cannot answer, and a second 401 adds no information.
Per §codex a missing advisory instrument is noted, not blocking. Consequence carried to Gate 2:
**no three-way disagreement matrix exists for either round, the sample carries no cross-model
column, and the human deep read is the sole compensating control for convergent-blind-spot risk.**
Retry path unchanged: `codex login` by Oliver, then re-run on the same keyless form.

## 4 · Judge rubric, round 2 (`eval/judge-scores.json`)

The five reworked items were re-read in full and re-scored fresh — full rubric, new argue-FOR cases
written before any score, no partial credit (§bounce). The 51 byte-identical items keep their
round-1 scores and argued cases, reproduced verbatim; the hash diff is the warrant for that.

| dim | 1 | 2 | 3 | 4 | 5 | (round 1: 3s / 2s) |
|---|---|---|---|---|---|---|
| 1 · single defensible best answer | 0 | 0 | **2** | 4 | 50 | (3 / 0) |
| 2 · distractor plausibility | 0 | 0 | **2** | 26 | 28 | (4 / 0) |
| 3 · concept alignment | 0 | 0 | 0 | 1 | 55 | (0 / 0) |
| 4 · rationale traceability | 0 | 0 | **1** | 4 | 51 | (2 / 0) |
| 5 · difficulty pitch | 0 | **0** | **5** | 42 | 9 | (5 / **4**) |
| 6 · scenario realism | 0 | **0** | 0 | 1 | 55 | (0 / **1**) |

- **Dimension 5 moved exactly as the bounce demanded**: 4×2 → **0×2**; the three
  `stem-pretranslates-key-vocabulary` items and `d2-q50` all re-scored 4. The five remaining 3s
  (`d1-q11`, `d1-q21`, `d1-q23`, `d2-q37`, `d2-q47`) are untouched round-1 content judgments, all
  already in the Gate 2 sample.
- **Dimension 6's single 2 is gone** (`d2-q44` 2 → 5).
- **Dimension 2 improved where the rework touched it**: `d1-q24` and `d2-q50` both cleared 3 → 4 on
  rebuilt distractors. The two remaining 3s (`d1-q21`, `d2-q36`) are unreworked and auto-flagged.
- **No regressions.** Every dimension of every reworked item scores at or above its round-1 value,
  and the 51 untouched items are unchanged by construction. Nothing the author fixed broke anything
  the rubric had already scored 4 or 5 — the commit's byte-identical-surfaces claim is confirmed by
  hash.
- **Nothing reworked reaches 5 on dimension 5**, and that is the honest ceiling here: each of the
  three F2-family items still eliminates one distractor on a stem fact (`d1-q15`'s "does not want
  to read the reviews", `d1-q16`'s already-transcribed premise). That is a fair design, not a
  defect — it is what keeps the OCR and summarization distractors honest.

## 5 · Overlap screen, round 2 (`eval/overlap-report.md`)

Delta-scoped. Every surface of the five reworked items — stem, all options, `rationale.correct`,
every `rationale.distractors` entry — 7-gram shingled against all five derivation artefacts:
**zero hits, not even concept-statement echoes.** Bank-wide the picture is unchanged (the same 14
items share a shingle, every one a rationale concept statement or a canonical Microsoft objective
title under Artefact B's bounded exception). The rework added no overlap surface. Process-control
chain extended to `e2434ad`. **No bounce, no clean-room breach.**

## 6 · Gate 2 sample (assembled per §handoff) — 10 items

| id | why |
|---|---|
| `d2-q41` | dim1 3, dim4 3 — **still the strongest finding in the package.** Distractor B restates `C-040`'s own discriminator (the dedicated route is *configured and called*, not *prompted*); the item survives only because B is phrased as a preference and the stem asks for "requirements". Unreworked — it was a Gate 2 flag, not a bounce. Also the only item the round-2 blind solve answered at less than high confidence. |
| `d2-q38` | dim1 3 — classifying in the mail gateway is a standard architecture that delivers what the district asked for; the key wins on `C-038`'s framing and the rationale's selectivity argument is a criterion the stem never states. |
| `d1-q11` | dim5 3, dim3 4, dim4 4 — three options are absolutes and the key is the only hedged one (answerable by test-wiseness); neither key nor rationale names an actual deployment option. |
| `d1-q21` | dim2 3, dim5 3 — two of three distractors eliminable without the scenario; the two-jobs/two-options structure narrows the pick early. |
| `d1-q23` | dim5 3 — four of five scenarios are near-free medium-naming; the judgment rests on s5. |
| `d2-q36` | dim2 3 — distractor A is not choosable by anyone in a safety context. |
| `d2-q37` | dim5 3, dim1 4 — the key is the abstract, moderate option among three concrete over-commitments; A is a live real-world position rejected on doctrine. |
| `d2-q47` | dim5 3 — the keyed option carries a self-justifying clause restating the stem's requirement. |
| `d1-q12` | **referred** on a dim1 4 (carried from round 1) — D delivers the literal ask; lower temperature reduces variation without guaranteeing identical output, which the rationale overstates. |
| `d2-q50` | **referred, new this round** — scores 4/5 across the board, but its round-2 blind-solve match is contaminated (the rework commit message disclosed its key before it was solved). The key needs one independent human read; the reworked options are the item's other reason to look. |

Nothing else is auto-flagged: no cross-model disagreements exist (instrument absent), no
adjudications are open, and no item survived a bounce.

## 7 · Ratchet — status of the round-1 proposals

1. **`stem-key-word-match` validator check — still unbuilt, and this round strengthens the case.**
   The three items it would have caught were fixed by hand, and the measure that proved the fix
   (`e` → 0, plus "does the key have the highest stem overlap?") was again computed ad hoc by the
   examiner. Two exams have now been indicted by a class no live check can see; this round shows
   the measure is cheap, deterministic and false-positive-free on a real bank. **Recommend
   promoting it to a validator warn check before the next authoring wave.**
2. **Authoring-guide rule (F2 family): "when an item asks *which technique produces that?*, the
   stem may not use the keyed technique's canonical output noun phrase."** The rework is a clean
   demonstration — three items, three stem rewrites, dim5 2 → 4 with no distractor weakened.
   Ready to write into `03-authoring-guide.md`.
3. **Cross-item consistency for constraining concept pairs** (`C-039` ↔ `C-044`, `C-040` ↔
   `C-041`) — resolved for `C-044` by the rework; the general check remains unbuilt. `C-040` ↔
   `C-041` is exactly what makes `d2-q41` the round's standing flag, so the pair is still live.

## Verdict

**S5 round 2 PASSED — 0 bounces, 0 dimensions ≤2, 0 open adjudications.** All five round-1 bounces
are resolved on their indicted dimensions with no regression elsewhere; the bank's weakest
remaining dimension is 5 (five 3s) and every one of those items is in the Gate 2 sample.

**Next action:** S6 — selection (`selection.json`, manifest mix 42 = d1 18 / d2 24; SC/MR/SM per
domain 14+2+2 / 20+3+1; 14 reserve-only concepts), publication preflight per `methodology/06`, and
the Gate 2 checklist. The sign-off record must note that this exam carries **no cross-model signal
in either round**, and that `d2-q50`'s blind-solve evidence is contaminated by disclosure.

---

## S5b · cue-only solve — re-measured after the cue-rework wave (2026-08-19) {#s5b}

Recorded per [methodology/05 §cue-only-solve](../../../methodology/05-eval-rubric.md#cue-only-solve),
which requires the blind score, `k_req` and the ceiling verdict for the **bank and each served
form**. The wave (`b3851b9` on `fix/cue-rework-wave`) changed option text only, so these
numbers **supersede** any cue figures earlier in this report; the S5 §1 blind solve and the judge
scores were produced against the pre-wave text and were not regenerated (see
`derivation/gate2-checklist.md` §Post-S5 cue-rework wave).

Instrument: `node tools/exploit-scan.mjs ai-901` for form scope, and the same tool run against a
selection-free copy of the package for bank scope — it scopes to the served form when a
`selection.json` form exists, so bank scope must be produced deliberately. `random` is the
format-mix expected guess score (single_choice 1/options, multiple_response 1/C(options, |key|),
scenario_matching 1/options^scenarios, all graded all-or-nothing), which is **stricter** than the
rubric's 25% worked-example simplification.

| scope | n | blind (pre-wave → post-wave) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 56 | 46.43% → **25%** (14/56) | ≤ 30.17% (random 22.35%) | **0.6000** | ≥ 0.5216 (k_req@random 0.6137) | **PASS** |
| form-a | 42 | 42.86% → **30.95%** (13/42) | ≤ 28.97% (random 21.46%) | **0.5655** | ≥ 0.5253 (k_req@random 0.6180) | **blind FAIL** · k_req PASS |

Per-cue rates on the shipping revision (chance 25% each):

- **bank** — key-longest-rank 11/43 (25.6%) · key-shortest-rank 7/45 (15.6%) · named-entity 3/9 (33.3%) · rider-marks-key 4/16 (25.0%)
- **form-a** — key-longest-rank 7/30 (23.3%) · key-shortest-rank 6/31 (19.4%) · named-entity 2/7 (28.6%) · rider-marks-key 3/12 (25.0%)

### Residual: the instrument does not test interior length ranks

`key-length-rank-share` and `exploit-scan`'s `key-longest-rank`/`key-shortest-rank` bound only
rank 1 and rank last, and the standard parity fix — lift one thin distractor above a rank-1 key —
lands the key deterministically on **rank 2**. Measuring all four ranks by hand on the shipping
revision:

| scope | key length-rank distribution | best single-rank strategy | rank-aware blind |
|---|---|---|---|
| bank | {1:11, 2:18, 3:11, 4:8} | rank 2: 18/48 (37.5%) | 19/56 = **33.93%** |
| form-a | {1:7, 2:13, 3:7, 4:7} | rank 2: 13/34 (38.2%) | 14/42 = **33.33%** |

"Rank-aware blind" substitutes the best interior rank for the tool's longest-option strategy. It is
**not** the S5b number — the committed strategy set is the instrument of record — but it is the
honest upper bound on what a rank-aware test-wise candidate scores, and Gate 2 should see it.

### Residual: the uninstrumented stem-echo cue

No validator check and no exploit-scan strategy measures option↔stem content-word overlap, and the
wave's own fix mechanism (appending a purpose clause written from the stem's words to lift a key
off the shortest rank) inflates it. Share of single-choice items where the key is the strict
maximum-overlap option, chance 25%: bank 33.3 → 34.3%, form-a 37.5 → 40.0% — it
**rose**.

### Verdict carried to Gate 2

**Bank PASS · form-a blind FAIL on the strict ceiling.** form-a's 30.95% exceeds 28.97% by roughly
0.8 items; it passes against the rubric's 25% simplification (≤ 33.75%) and `k_req` clears its
floor on both scopes, and `tools/exploit-scan.mjs` exits 0 because the machine-enforced hard floor
is the 70% pass mark. **The residual is not the wave's doing.** Longest-option fell 17/34 → 7/34 on
form; what remains is the *letter* cue — `always B` scores 12/34 = 35.3%, identical pre- and
post-wave, because ai-901's keys were never permuted while `aif-c01` and `az-900` took a
`permute-keys` pass in the same wave. Options for Oliver: accept · permute form-a's SC key letters
and re-verify · waive with the reason recorded in `signoff.md`.
