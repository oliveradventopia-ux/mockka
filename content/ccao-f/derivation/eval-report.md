# S5 eval report — ccao-f, round 1

Examiner: exam-examiner (fresh session; authored nothing in this bank — independence
precondition of `methodology/05-eval-rubric.md` §independence checked and met) ·
Date: 2026-08-18 · Bank: 81 items (72 SC · 9 MR 2-of-5 · 0 SM, matching the manifest's
MC+MR-only format profile) at `questions.json` commit `f8c8112` · Validator state at eval
start: every bank-level check green; the 24 errors are entirely selection-derived
(`selection-shape`, `selection-format-mix`, `syllabus-rule-form-coverage`) because
`selection.json` is still empty — S6 has not run.

## Headline

**The bank is the strongest first-round content the pipeline has produced, and it bounces
twice — not on the rubric, on originality.**

- Keys are right: **81/81 blind, zero misses, zero adjudications open.**
- Rubric: **no dimension scored ≤2 on any item** — zero rubric bounces. Dimension 4
  (rationale traceability) and dimension 6 (scenario realism) scored 5 on all 81 items.
- The two bank-wide surface defects that dominated `aif-c01` round 1 **do not recur**: SC
  keys are a perfect 18/18/18/18 across A–D, all nine MR key pairs are distinct, and the
  keyed-option length cue sits at a 0.99 median ratio with a ~7-character median margin.
  The ratchet worked.
- **Two items bounce on the overlap screen** (`ccao-f-d3-q34`, `ccao-f-d6-q65`): each
  reproduces, verbatim, a clause that `derivation/source-ccas-guide-samples.md` records as
  a direct quotation from the vendor's published sample-question stems. Short clauses in
  otherwise original items — but the repo's anti-dumps rule is "never reproduce source or
  live-exam text", and a documented quotation is source text. Full records:
  `eval/overlap-report.md` §findings and `eval/judge-scores.json` → `bounces`.

## 1 · Blind solve (`eval/blind-solve.json`)

Keyless form generated from `questions.json` by projecting **only** `id`, `type`,
`question` and `options` (nothing shuffled, ids preserved) into
`scratchpad/keyless.{json,txt}`; the projection drops `answer`, `rationale`,
`distractor_patterns`, `primary_concept`, `syllabus_rule`, `theme` and `keywords`. All 81
answers, confidence grades and one-line reasonings were written and frozen to disk before
the key, any rationale or any pattern tag was read.

- **Accuracy: 81/81 (100%). Confidence: 76 high, 5 medium (d2-q19, d4-q47, d6-q63,
  d6-q65, d6-q72 — all four-criteria or request-time-vs-review-time discriminations).
  Zero misses → zero adjudications open.**
- **One documented independence exception:** `ccao-f-d1-q01`'s full record, including its
  key and rationale, was visible during schema discovery before the keyless form was
  built. Its "match" carries no evidential weight and the item is in the Gate 2 sample.
- **The examiner flags its own score.** A 100% blind pass is only as strong as the
  solver's independence, and with the cross-model instrument unavailable (§2) this is a
  single-family result. The cue analysis in `blind-solve.json` records what could produce
  a perfect score without concept knowledge; the largest is **E02 fluency-as-evidence on
  20 distractors (8.2%)** — a candidate who learns "the option praising polish or stated
  confidence is never the key" gets those eliminations free. That is a legitimate,
  blueprint-central theme (the vendor's own samples use it) and it is well inside its 0.15
  cap, so it is recorded as a Gate 2 note rather than a defect. Watch item for the next
  authoring wave: the key is the longest option in 34/72 SC items (47% vs 25% by chance),
  at a ~7-character median margin — a statistical lean, not yet a readable cue, and the
  mirror image of `aif-c01`'s L-0021 key-shortest lean.

## 2 · Codex advisory cross-solve (`eval/codex-solve.json`)

**advisory-skipped.** Two attempts: no `codex` on PATH; the VS Code extension's bundled
`codex-cli 0.148.0-alpha.9` reports `Not logged in` and an exec probe returns
`401 Unauthorized` against `api.openai.com/v1/responses`. Authenticating requires an
interactive `codex login` by Oliver, which is outside the examiner's authority under the
free-first rule. Per §codex this is noted, not blocking.

Consequence, stated plainly for Gate 2: **there is no three-way disagreement matrix for
this round.** Author and examiner share Claude weights, so a convergent miskey — both
sessions preferring the same wrong reading — is precisely what this round cannot exclude,
and an 81/81 blind score is evidence of clean keys *only* under an independence assumption
that does not hold. The Gate 2 deep-read is the compensating control. If Oliver
authenticates the CLI, re-run the cross-solve on the same keyless form before sign-off.

## 3 · Judge rubric (`eval/judge-scores.json`)

All 81 items × 6 dimensions, each scored only after writing the strongest honest case FOR
every distractor; that argued-FOR pass is retained per item in the `case` field rather than
discarded.

| Dim | 5 | 4 | 3 | ≤2 |
|---|---|---|---|---|
| 1 · single defensible best answer | 80 | 1 | 0 | 0 |
| 2 · distractor plausibility | 61 | 19 | 1 | 0 |
| 3 · concept alignment | 75 | 6 | 0 | 0 |
| 4 · rationale traceability | 81 | 0 | 0 | 0 |
| 5 · difficulty pitch | 32 | 42 | 7 | 0 |
| 6 · scenario realism | 81 | 0 | 0 | 0 |

**Zero dimensions ≤2 → zero rubric bounces.** Seven items carry a 3 and are auto-flagged
to Gate 2.

What earned the 5s: distractors are drawn from distinct registry patterns and are, item
after item, answers a real practitioner would give — `d2-q28`'s "96% beats our 95% target",
`d2-q22`'s "a human in the loop is what mandatory review means", `d4-q49`'s five-drafts
middle path, `d5-q57`'s monthly re-upload, `d7-q81`'s "have Claude estimate the time
saved". Rationales argue in the concept's own canonical vocabulary and name why each
distractor fails, which is what made dimension 4 unanimous. Scenarios are concrete,
internally consistent and drawn across 60+ verticals with no toy setups — dimension 6
unanimous.

Where it thins out — the seven **dimension-5 = 3** items (`d1-q06`, `d2-q16`, `d2-q27`,
`d3-q29`, `d3-q35`, `d3-q36`, `d7-q75`). Two failure shapes, both worth the author's
attention even though neither bounces:

1. **Rule-restatement keys.** In `d3-q29` and `d7-q75` the keyed option is a near-verbatim
   restatement of the syllabus rule's own title ("choose the entry point before you write
   the prompt"; "name the layer that failed") while every distractor is a concrete tactic.
   The rule-shaped option is identifiable by register alone, and the item ends up testing
   recognition of the rule rather than its application.
2. **Elimination-solvable sets.** In `d1-q06`, `d2-q27`, `d3-q35` and `d3-q36` the key is
   the only constructive or mechanism-bearing option left standing. `d3-q35` is the
   weakest item in the bank and the only dimension-2 = 3: option B ("the top tier also
   completes bulk work faster") contradicts the stem's own "turnaround on bulk jobs is
   slow", and option C answers a different question.

**Three redundancy pairs/trios** were found (dimension-3 = 4, six items): `d1-q04`/`d1-q06`
both run rule 2.03's decompose-the-opaque-prompt move; `d2-q15`/`d2-q16` both run rule
3.03's stated-confidence move with mirrored distractors; `d1-q07`/`d4-q44`/`d7-q79` all run
the single-named-change move in different domains. Each item is sound alone. They are
recorded as **S6 selection constraints** in `judge-scores.json` → `selection_constraints_for_s6`,
because seating a pair on one form gives a candidate the second item free.

## 4 · Bounces (2) — both from the overlap screen

Cap is 2 per item; each of these is bounce 1 of 2.

| Item | defect_class | What must change |
|---|---|---|
| `ccao-f-d3-q34` | `source-phrase-reuse` | Stem reproduces the vendor sample-stem clause *"speed and cost matter more than deep reasoning"* verbatim (quoted as such in `source-ccas-guide-samples.md`). Re-express the constraint in the bank's own words; keep the constraint itself — the item's good-vs-best pitch depends on it. Rubric-clean otherwise (5 on all six). |
| `ccao-f-d6-q65` | `source-phrase-reuse` | Stem reproduces *"organizational policy restricts sharing regulated personal data"* verbatim from the same passage. Re-express — and in the same pass make the restriction's object explicit (identifiers, not the file), which also closes the bank's only dimension-1 = 4 margin: option B's abstain-and-do-it-by-hand reading survives on the borrowed clause's ambiguity. |

Both return to exam-author with the score reports in `eval/judge-scores.json` → `bounces`.
Re-authored items re-enter S5 and are re-scored fresh — full rubric, new blind solve on the
reworked items, no partial credit.

## 5 · Overlap screen (`eval/overlap-report.md`)

No source is held as text, so the process control is the evidence — plus two screens that
were actually runnable against the held derivation layer:

- **8-gram shingle, whole bank vs all seven derivation docs:** 249 shared shingles, of
  which 228 are verbatim `concepts.json` statements (the intended
  concept → rationale derivation chain) and all 21 residuals are light rewordings of the
  same concept rows or canonical vocabulary sequences. No source body text.
- **Quoted-span screen** (new this round; the shingle screen cannot tell the distiller's
  prose from prose the distiller quoted): every quoted span of ≥5 words in
  `derivation/` searched against the bank. Two hits, both from
  `source-ccas-guide-samples.md`'s item-craft section → the two bounces above.

**Process finding for Gate 2 (F-3).** That Artefact A doc asserts in its own header that no
question text is reproduced, then quotes two vendor stem fragments as craft evidence. The
artefact is therefore a carrier of source expression while presenting itself as clean, and
the authoring session lifted both. Owner: S1/S2 research-manager — craft observations must
be paraphrased or fenced do-not-reuse. **Ratchet candidate:** a validator check that no bank
stem/option/rationale may contain a ≥5-word quoted span appearing in any
`derivation/source-*.md` would have caught both items at S4. Cheap, mechanical, and aimed
at the exact failure the anti-dumps rule exists to prevent — recommend raising it.

## 6 · Gate 2 sample (10 items)

Assembled per §handoff. No cross-model disagreements exist to add (§2), and no adjudications
are open.

| Item | Why it is in the sample |
|---|---|
| `d1-q01` | Independence: key seen before the blind form was built — needs a human solve |
| `d1-q04` | Redundancy pair with `d1-q06` — rule on the pair |
| `d1-q06` | dim5 = 3, dim3 = 4 |
| `d2-q15` | Redundancy pair with `d2-q16` — rule on the pair |
| `d2-q16` | dim5 = 3, dim3 = 4, dim2 = 4 |
| `d2-q27` | dim5 = 3 |
| `d3-q29` | dim5 = 3, dim3 = 4 (rule-restatement key) |
| `d3-q35` | dim2 = 3 and dim5 = 3 — weakest item in the bank |
| `d3-q36` | dim5 = 3 |
| `d7-q75` | dim5 = 3, dim3 = 4, dim2 = 4 (rule-restatement key) |

Also for Gate 2, not item-level: the missing cross-model signal (§2), the E02 learnable-cue
note (§1), the key-longest lean watch item (§1), and the clean-room process finding F-3 (§5).

## 7 · State at end of round 1

- `eval/blind-solve.json`, `eval/codex-solve.json`, `eval/judge-scores.json`,
  `eval/overlap-report.md` written and committed.
- **2 items bounced to exam-author** (`d3-q34`, `d6-q65`); the bank is not eligible for S6
  selection or a status flip until they are reworked and re-scored in round 2.
- 79 items pass. `manifest.status` unchanged — the examiner flips status only after
  Oliver's recorded Gate 2 sign-off (`methodology/06-provenance-publishing.md`).
