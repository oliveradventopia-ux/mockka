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

> **SUPERSEDED 2026-08-20 — the instrument ran.** Everything in this section is the accurate
> record of what was true at the time: the `codex` CLI was unauthenticated and the advisory
> cross-solve did not run. It was authenticated on 2026-08-20 and
> `node tools/codex-crosssolve.mjs ccao-f` returned **60/60 agreement, 0 disagreements,
> 0 unparsed** on the served form. The result and its limits are in §Cross-model column at the end
> of this report; the paragraphs below are kept as history, not as current status.

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
are open. *(Still true after the 2026-08-20 cross-solve, and now for a stronger reason: the
instrument ran and returned 60/60 agreement rather than not running at all. §Cross-model column.)*

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

---

# S5 eval report — ccao-f, round 2

Examiner: exam-examiner (fresh session; authored nothing in this bank, and opened no round-1
eval artifact, key, rationale or concept metadata until the 81 round-2 blind answers were
written to disk — `methodology/05-eval-rubric.md` §independence) · Date: 2026-08-18 ·
Bank: 81 items at `questions.json` commit `d7cb9e4` (the round-1 bounce rework) ·
Validator state at eval start: every bank-level check green; the 24 errors remain entirely
selection-derived because `selection.json` is still empty — S6 has not run.

## Headline

**Both bounces are discharged, nothing new bounces, and the bank is eligible for S6 — but a
fresh examiner flags 60% more items to Gate 2 than round 1 did, and one of the two fixes cost
the item its difficulty pitch.**

- Keys are right: **81/81 blind, zero misses, zero adjudications open** — matching round 1
  independently.
- Rubric: **no dimension scored ≤2 on any item. Zero bounces.** Dimension 1 scored 5 on all 81.
- **Both round-1 overlap bounces are closed** (`d3-q34`, `d6-q65`): the borrowed vendor clauses
  are gone, the quoted-span screen is clean, and neither item reaches the 2-bounce cap.
- **The `d6-q65` fix traded pitch for clarity.** Making the restriction's object explicit closed
  option B (dim 1: 4 → 5) and, in the same sentence, told the candidate the claim narrative is
  unrestricted (dim 5: 5 → 3). Correct fix, real cost, routed to Gate 2 — not a bounce.
- **Full re-solve and re-score, not a delta pass.** A fresh examiner's independence covers the
  whole bank, so all 81 items were blind-solved and scored again rather than only the two
  reworked ones.

## 1 · Blind solve (`eval/blind-solve.json`, round 1 preserved at `blind-solve-r1.json`)

81/81 match, 0 misses, so no adjudication queue and no defect candidates. 78 answers were
recorded at `high` confidence and 3 at `medium` (`d2-q19`, `d6-q64` — both MR items where a
genuinely good option is excluded by a stated constraint rather than by being wrong).

**Independence incident, disclosed.** While inspecting the shape of `questions.json` before
building the keyless form, a truncated record dump printed the `answer` field for
`ccao-f-d1-q01`. The examiner's answer for that item matches the key, but it is **not an
independent blind result**; it is recorded as `integrity_note: key_exposed_pre_solve` in
`blind-solve.json` and the item is auto-added to the Gate 2 sample for a human solve. The other
80 items were solved from stems and options only. Process lesson for the next round: build the
keyless form with a projection that never materializes `answer` or `rationale`, and never print
a raw item record during shape inspection.

**Cue screens (all 81 items, mechanical).**

| Screen | Result | Reading |
|---|---|---|
| SC answer-key balance | 18 / 18 / 18 / 18 across A–D (72 SC items) | Perfect; unchanged by the rework |
| MR key pairs | All 9 distinct | No learnable pair |
| Keyed-option length, magnitude | Median keyed/longest ratio **0.990** | No exploitable magnitude cue |
| Keyed-option length, frequency | Key is the longest option in **35/72 SC items (49%, chance 25%)** | New round-2 observation. Not exploitable — when the key is longest it is longest by ~1% — but the frequency lean is real and belongs on the watch list for the next exam |
| Stem→key lexical echo | 9 items where the key shares notably more content words with the stem than any distractor | Fed directly into dimension 5; see §3 |

## 2 · Codex advisory cross-solve (`eval/codex-solve.json`)

> **SUPERSEDED 2026-08-20 — the instrument ran.** Everything in this section is the accurate
> record of what was true at the time: the `codex` CLI was unauthenticated and the advisory
> cross-solve did not run. It was authenticated on 2026-08-20 and
> `node tools/codex-crosssolve.mjs ccao-f` returned **60/60 agreement, 0 disagreements,
> 0 unparsed** on the served form. The result and its limits are in §Cross-model column at the end
> of this report; the paragraphs below are kept as history, not as current status.

**`advisory_skipped` again.** `codex` is not on PATH; the binary bundled with the VS Code ChatGPT
extension reports `Not logged in` and a single `codex exec` probe returns 401 Unauthorized.
Advisory instruments that are missing are noted, never blocking (§codex).

Consequence, restated because it compounds across rounds: **no cross-model signal has ever been
collected for this bank.** Claude authored it and Claude solved it, twice. A convergent
author/examiner blind spot would be invisible to both rounds. That residual transfers to the
Gate 2 human deep-read and must be restated in `signoff.md`. One interactive `codex login` by
Oliver unblocks every future round.

## 3 · Judge rubric (`eval/judge-scores.json`, round 1 preserved at `judge-scores-r1.json`)

All 81 items scored fresh on all six dimensions, arguing FOR each distractor before scoring.

| Dim | 5 | 4 | 3 | ≤2 |
|---|---|---|---|---|
| 1 · single defensible best answer | 81 | 0 | 0 | **0** |
| 2 · distractor plausibility | 65 | 15 | 1 | **0** |
| 3 · concept alignment | 76 | 5 | 0 | **0** |
| 4 · rationale traceability | 80 | 1 | 0 | **0** |
| 5 · difficulty pitch | 16 | 50 | 15 | **0** |
| 6 · scenario realism | 79 | 2 | 0 | **0** |

**Round-1 → round-2 delta.** Round 1: dim1 80×5 + 1×4 · dim2 61/19/1 · dim3 75/6 · dim4 81×5 ·
dim5 32/42/7 · dim6 81×5. The material differences:

- **dim 1 rises to a clean sweep** — the one 4 (`d6-q65`) was fixed exactly as the bounce report
  instructed.
- **dim 5 tightens sharply: 7 threes → 15.** This is an independent-examiner difference, not a
  regression in the bank; 79 items are byte-identical. Two examiners applying the same rubric to
  the same text disagreed on how many items are right-vs-wrong rather than good-vs-best, and they
  flagged *different* items (only `d2-q16`, `d2-q15` and `d7-q75` appear in both samples). That
  spread is itself the finding: **dimension 5 is the least reproducible dimension in this rubric**,
  and it is the one carrying every Gate 2 flag. Recommend Gate 2 calibrate on it explicitly.
- **dim 4 loses one 5** (`d2-q14`: the rationale argues from exam structure — "why output
  evaluation carries the largest weight in this credential" — rather than from practitioner
  vocabulary a candidate can find in study material).

**The dimension-5 rule applied this round**, stated so it can be audited and reproduced: an item
scores 3 when either (a) all three distractors are drawn from surface-eliminable pattern families
(D12 anecdote, D14 dogma, D15 deferral, D16 refuse-the-mandate, D17 deception, D18 push-to-users,
D19 false-technical-claim, D20 self-review, E02 fluency-as-evidence), so a test-wise candidate can
clear the item without the concept; or (b) the stem hands over the key's operative phrase and no
distractor requires the concept to eliminate. The 15: `d1-q01`, `d1-q02`, `d1-q03`, `d1-q08`,
`d2-q15`, `d2-q16`, `d2-q25`, `d3-q32`, `d3-q33`, `d3-q34`, `d4-q40`, `d4-q50`, `d5-q61`,
`d6-q65`, `d6-q73`.

**The weakest item in the bank is `d7-q75`** (dim2 = 3, dim6 = 4): option B offers to raise the
temperature setting, a control the Associate-scope surfaces do not expose to a packaging-studio
coordinator. It is the only distractor in 243 drawn from outside the audience's actual toolkit,
so it can be discarded without engaging the diagnosis. No dimension ≤2, so it ships — but it
should be rebuilt from an in-scope layer at the next authoring pass.

## 4 · Bounce reports

**None. `eval/judge-scores.json` → `bounces` is empty.** No item scored ≤2 on any dimension and
the overlap screen is clean, so nothing returns to exam-author. The two round-1 bounces are
recorded as resolved in `bank_defects_resolution`; neither reaches the 2-bounce cap.

## 5 · Overlap screen (`eval/overlap-report.md`, round 1 preserved at `overlap-report-r1.md`)

**PASS, 81/81.** Quoted-span screen: 2 substantive hits in round 1, **0 in round 2** — the
`source-ccas-guide-samples.md` doc that carried both defects now shares zero residual shingles
with the bank. 8-gram screen: 231 of 251 hits are the exam's own concept statements (the intended
derivation chain); all 20 residuals inspected and accounted for by the Artefact B vocabulary
exception.

**Carried forward unresolved:** round-1 finding F-3 — an Artefact A derivation doc that declares
itself free of source prose and then quotes two vendor stem fragments as craft evidence.
Re-authoring the items removed the symptom, not the seam. The ratchet recommendation stands and
is restated at strength: promote the quoted-span screen to a validator check (*no bank stem,
option or rationale may contain a quoted span of ≥5 words appearing in any
`derivation/source-*.md`*). This round's screen is a working reference implementation, and it
would have caught both items at S4.

## 6 · Gate 2 sample (16 items, round-2 canonical)

Assembled per §handoff: every item carrying any 3, plus the integrity-flagged item. No
cross-model disagreements exist to add (§2) and no adjudications are open.

| Item | Why it is in the sample |
|---|---|
| `d1-q01` | dim5 = 3, dim3 = 4, dim2 = 4 — **and** key exposed pre-solve: needs a human blind solve |
| `d1-q02` | dim5 = 3 — stem names both failures in the keys' own vocabulary |
| `d1-q03` | dim5 = 3 — stem lists the missing context verbatim (echo screen) |
| `d1-q08` | dim5 = 3 — highest stem→key echo in the bank (7 vs 2) |
| `d2-q15` | dim5 = 3 — stem marks the self-confidence trap rather than concealing it |
| `d2-q16` | dim5 = 3, dim2 = 4 — all three distractors surface-eliminable |
| `d2-q25` | dim5 = 3 — three distractors are all "keep the prose" variants |
| `d3-q32` | dim5 = 3 — two stated needs, two named layers, mechanical mapping |
| `d3-q33` | dim5 = 3, dim3 = 4 — resolves to recall of the tier mapping |
| `d3-q34` | dim5 = 3 — **reworked item**; the fix raised the echo. Rule on whether the pitch cost is acceptable |
| `d4-q40` | dim5 = 3, dim2 = 4 — all three distractors surface-eliminable |
| `d4-q50` | dim5 = 3, dim3 = 4 — three of five options transparently self-defeating |
| `d5-q61` | dim5 = 3 — stem states the dependency outright |
| `d6-q65` | dim5 = 3 — **reworked item**; the fix closed dim 1 and cost dim 5. The key delta of this round |
| `d6-q73` | dim5 = 3 — "what does this workflow still owe" presupposes the obligation |
| `d7-q75` | dim2 = 3, dim6 = 4 — weakest item in the bank; out-of-scope distractor |

**Recommended union read (22 items).** Round 1 flagged six items this round scored 4–5
(`d1-q04`, `d1-q06`, `d2-q27`, `d3-q29`, `d3-q35`, `d3-q36`). Their text is unchanged, so a
round-1 3 on them is live independent evidence, not a superseded score. Given the dimension-5
reproducibility spread above, Gate 2 should read the **22-item union**, not the 16.

Also for Gate 2, not item-level:

1. **No cross-model signal, two rounds running** (§2) — the largest residual on this bank. *(Downgraded 2026-08-20: the cross-solve ran post-sign-off, form-a 60/60, 0 disagreements. It settles key correctness only; the 36 argued-up distractors are still deep-read work. §Cross-model column.)*
2. **The clean-room seam F-3** (§5) and the validator-check ratchet proposal.
3. **`d1-q04` / `d1-q06` are near-twins** — both turn on "one opaque multi-stage prompt cannot be
   diagnosed → decompose", under neighbouring concepts C-004 and C-006. Not a defect (the
   near-duplicate check passes at jaccard 0.4), but **S6 must not place both on the same form.**
   Same note for `d2-q15` / `d2-q16` (self-reported confidence is not verification).
4. **The key-is-longest frequency lean** (49% vs 25% chance, §1) — watch item for the next exam.
5. **Dimension-5 calibration** — two independent examiners produced 7 and 15 threes on the same
   text. Gate 2's deep-read is the tie-breaker and should record which reading it endorses so the
   next round has a calibration anchor.

## 7 · State at end of round 2

- `eval/blind-solve.json`, `eval/codex-solve.json`, `eval/judge-scores.json`,
  `eval/overlap-report.md` rewritten for round 2; round-1 artifacts preserved at
  `blind-solve-r1.json`, `judge-scores-r1.json`, `overlap-report-r1.md`.
- **0 items bounced. 81 of 81 pass.** Nothing returns to exam-author.
- **The bank is eligible for S6 selection.** `selection.json` is still empty and the 24 validator
  errors are entirely selection-derived; they clear when S6 builds form A.
- `manifest.status` stays `draft`. The examiner flips status only after Oliver's recorded Gate 2
  sign-off (`methodology/06-provenance-publishing.md`).

---

## S5b · cue-only solve — re-measured after the cue-rework wave (2026-08-19) {#s5b}

Recorded per [methodology/05 §cue-only-solve](../../../methodology/05-eval-rubric.md#cue-only-solve),
which requires the blind score, `k_req` and the ceiling verdict for the **bank and each served
form**. The wave (`dd5f1f6` on `fix/cue-rework-wave`) changed option text only, so these
numbers **supersede** any cue figures earlier in this report; the S5 §1 blind solve and the judge
scores were produced against the pre-wave text and were not regenerated (see
`derivation/gate2-checklist.md` §Post-S5 cue-rework wave).

Instrument: `node tools/exploit-scan.mjs ccao-f` for form scope, and the same tool run against a
selection-free copy of the package for bank scope — it scopes to the served form when a
`selection.json` form exists, so bank scope must be produced deliberately. `random` is the
format-mix expected guess score (single_choice 1/options, multiple_response 1/C(options, |key|),
scenario_matching 1/options^scenarios, all graded all-or-nothing), which is **stricter** than the
rubric's 25% worked-example simplification.

| scope | n | blind (pre-wave → post-wave) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 81 | 40.74% → **24.69%** (20/81) | ≤ 31.5% (random 23.33%) | **0.6282** | ≥ 0.5396 (k_req@random 0.6348) | **PASS** |
| form-a | 60 | 43.33% → **25%** (15/60) | ≤ 30.71% (random 22.75%) | **0.6267** | ≥ 0.5419 (k_req@random 0.6375) | **PASS** |

Per-cue rates on the shipping revision (chance 25% each):

- **bank** — key-longest-rank 19/68 (27.9%) · key-shortest-rank 17/70 (24.3%) · named-entity 6/24 (25.0%) · rider-marks-key 3/11 (27.3%)
- **form-a** — key-longest-rank 12/48 (25.0%) · key-shortest-rank 12/49 (24.5%) · named-entity 3/18 (16.7%) · rider-marks-key 3/9 (33.3%)

### Residual: the instrument does not test interior length ranks

`key-length-rank-share` and `exploit-scan`'s `key-longest-rank`/`key-shortest-rank` bound only
rank 1 and rank last, and the standard parity fix — lift one thin distractor above a rank-1 key —
lands the key deterministically on **rank 2**. Measuring all four ranks by hand on the shipping
revision:

| scope | key length-rank distribution | best single-rank strategy | rank-aware blind |
|---|---|---|---|
| bank | {1:19, 2:21, 3:15, 4:17} | rank 2: 21/72 (29.2%) | 22/81 = **27.16%** |
| form-a | {1:12, 2:15, 3:12, 4:12} | rank 2: 15/51 (29.4%) | 16/60 = **26.67%** |

"Rank-aware blind" substitutes the best interior rank for the tool's longest-option strategy. It is
**not** the S5b number — the committed strategy set is the instrument of record — but it is the
honest upper bound on what a rank-aware test-wise candidate scores, and Gate 2 should see it.

### Residual: the uninstrumented stem-echo cue

No validator check and no exploit-scan strategy measures option↔stem content-word overlap, and the
wave's own fix mechanism (appending a purpose clause written from the stem's words to lift a key
off the shortest rank) inflates it. Share of single-choice items where the key is the strict
maximum-overlap option, chance 25%: bank 33.3 → 29.1%, form-a 38.5 → 32.4% — it
**fell**.

### Verdict carried to Gate 2

**PASS on both ceilings, both scopes, with the cleanest rank distribution of the six** — form-a
`{1:12, 2:15, 3:12, 4:12}` is close to uniform, so no interior-rank strategy was manufactured (the
failure mode `az-900` hit). Stem echo fell on both scopes. Two one-sided residuals stand, neither
gating: `rider-marks-key` on form is 3/9 rider-carrying options = 33.3% against a 45% ceiling
(n = 9, noise — but the direction has inverted from "rider never marks the key"), and
`named-entity-parity` is a one-sided check that warns only above 40%, so ccao-f's 16.7% form /
25.0% bank is an *inverted* cue the check cannot see. Record both as instrument blind spots rather
than clean passes.

---

## S5b · re-measured at the Gate 2 final pass (2026-08-20) {#s5b-final}

Instrument: `node tools/exploit-scan.mjs ccao-f --json` for form-a scope, and the same tool run against a selection-free copy of the package for bank scope (the tool scopes to the served form whenever a `selection.json` form exists, so bank scope has to be produced deliberately). Bank revision under measurement: `questions.json` @ **`dd5f1f6`** (blob `6d8581ecca`, sha256 `ee0230b0454c22a3…`).

**These numbers supersede the S5b table above.**

### What was corrected in the standard, and what that does to this exam

Two corrections landed on the instrument between the 2026-08-19 re-pin and this pass. Both are
changes to **how the number is produced and judged**, and they are recorded here rather than
silently folded into the table, so the audit trail shows the standard was corrected — not that
the number moved on its own.

1. **`tools/exploit-scan.mjs` was reporting `ok` against the pass-mark floor, not the publication
   ceiling** (`cda74c8`). The tool's exit status only ever asked "can a zero-knowledge attacker
   reach the pass mark?" — the [1.35 × random / 0.85 × k_req@random ceiling](../../../methodology/05-eval-rubric.md#cue-only-solve) was computed by hand at S5b and never by
   the machine. It now computes `random`, `blindCeiling`, `kReq`, `kReqFloor` and `ceilingOk`
   itself and exits non-zero on a breach.
2. **The committed strategy set now tests every option length rank, not just the extremes**
   (`a8c7f4e`). The previous set scored "pick the longest" and "pick the shortest"; the standard
   parity fix — lift one thin distractor above a rank-1 key — parks keys on rank 2, which reads
   clean on an argmax check and hands the attacker the same free win one rank in. Every package's
   S5b section already carried that gap as an explicit *"Residual: the instrument does not test
   interior length ranks"* table. **That residual is no longer a residual: it is the measured
   number.** This is why the blind figures below are higher than the ones the 2026-08-19 sheets
   recorded even where the bank did not change.

The **bar itself is unchanged.** The hand-computed ceilings in the earlier sheets were already
against the correct 1.35×/0.85× standard, with the strict format-mix `random` rather than the
rubric's 25% worked-example simplification. What changed is that the machine now enforces it and
the attacker is stronger.

### The re-stated verdict

| scope | n | blind (recorded 2026-08-19 → now) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 81 | 24.69% → **27.16%** (22/81) | ≤ 31.50% (random 23.33%) | **0.616** | ≥ 0.540 | **PASS** |
| form-a | 60 | 25.00% → **26.67%** (16/60) | ≤ 30.71% (random 22.75%) | **0.616** | ≥ 0.542 | **PASS** |

The bank is byte-identical to the revision pinned on 2026-08-19, so there is no content delta to attribute: the whole of the movement above is the stronger strategy set. The recorded figure was not wrong for the instrument that produced it; it is superseded because the instrument was.

### Residuals carried to Gate 2

- **34 `concept-convergence` warnings** (Gate-1 ratified) — priority is hand-set `normal` on concepts the machine computes as `high`; the ratification and its reasoning are above, and the warn set is expected to be exactly these 34.
- **stem-echo**, uninstrumented: 32.7% bank / 35.3% form against 25% chance on the shipping revision. No check and no strategy measures it.
- clean-room finding **F-3** and the `d7-q75` weakest-item note both stand as recorded; neither is a threshold breach.
- **The cross-model eval column now exists — run 2026-08-20, after the sign-off.** Every S5 round of this bank recorded `advisory_skipped`, and that history stands; the Codex CLI was authenticated on 2026-08-20 and the advisory cross-solve finally ran on the served form: **60/60 agreement with the answer key, 0 disagreements, 0 unparsed** (`eval/codex-solve.json`). Read it exactly as far as it goes — §Cross-model column below states what it licenses and what it does not. It is evidence that the **keys** hold up to a solver from another model family that did not write them; it is **not** evidence about co-correctness, distractor plausibility or pitch, and the deep-read sample remains the control for those. 21 reserve-only items were not solved and carry no cross-model column.

## Cross-model column — the advisory cross-solve, run 2026-08-20

> Added **after** the Gate 2 sign-off and the publication flip. It changes no verdict, no score, no
> threshold and no `manifest.status`. It is evidence appended to a decision already recorded.

### What ran

The `codex` CLI was authenticated on 2026-08-20 (ChatGPT auth — no per-request billing, so nothing
about this run required cost approval), and the [§codex](../../../methodology/05-eval-rubric.md#codex)
instrument that every round of this package recorded as `advisory_skipped` was finally executed:
`node tools/codex-crosssolve.mjs ccao-f`. The tool renders each item of the **served form**
stem-and-options only — no answer, no rationale, no `distractor_patterns`, no concept metadata —
batches them through `codex exec` to a different model family, normalises single-choice,
multiple-response and scenario-matching replies, and diffs against the key.

| | |
|---|---|
| Scope | `form-a` — **60 of 81 bank items** (21 reserve-only items not solved) |
| Answered | 60 |
| Agreed with the key | **60/60 — 100%** |
| Disagreed | **0** |
| Unparsed | 0 |
| Artifact | `eval/codex-solve.json` @ `d9da399` |

The same run covered **465/465 items across all eight exams with zero disagreements**.

### What this licenses

A solver from a different model family — one that did not author these items and never saw the key —
chose the keyed option on every item of the served form. That is real evidence for one specific
claim: **the answer keys are defensible to an outsider.** The failure mode §codex exists to catch,
our author and our examiner sharing Claude weights *and* sharing a confident misreading, which no
Claude-side blind score can exclude, did not fire on a single served item.

Per §codex the only enforcement attached to this instrument is that a disagreement adds the item to
the Gate 2 human sample. There were none, so **the sample is unchanged**.

### What this does not license

- **Not dimension 1 (co-correctness).** The solver reports its *best* option. It was never asked
  whether a second option is also defensible — a bank in which every item had two right answers
  would return exactly this result.
- **Not dimension 2 (distractor plausibility) or dimension 5 (pitch).** A transparently weak
  distractor and a quietly co-correct one both produce agreement.
- **Not proof against a shared surface read.** This is the argument
  [§1b](../../../methodology/05-eval-rubric.md#cue-only-solve) already makes about the blind solve:
  100% is evidence for key correctness exactly as much as it is evidence the surface leaks (L-0020).
  Two capable models agreeing may mean both read the subject — or that both read the same
  regularity. What stops that from being circular **here** is that the surface is measured
  independently and sits at chance: `tools/exploit-scan.mjs` puts the zero-knowledge attacker at
  **26.67% on form-a against a 30.71% ceiling**, inside the publication ceiling on both scopes.
  Surface at chance *and* cross-family agreement on the key is a meaningful pair; neither number
  carries the finding alone.
- **Not bank-wide.** The run was form-scope: 21 reserve-only items were never shown to the
  cross-solver and carry no cross-model column.
- **Not fully reproducible as recorded.** `eval/codex-solve.json` names the solver
  `codex-cli (ChatGPT auth)` but records no resolved model id, no run timestamp and no bank
  revision; items were answered in batches of ten rather than independently; and unlike §1 the
  solver returns an answer with **no confidence grade and no reasoning line**, so no cross-solve
  answer could have been adjudicated even if it had disagreed. Logged as a requirement for the next
  run in [methodology/05 §codex-interpretation](../../../methodology/05-eval-rubric.md#codex-interpretation).

### The compensating control, restated

Every sheet in this package named the Gate 2 human deep read as the compensating control against a
convergent author/examiner blind spot. That statement now splits in two, and the split is the point:

- **Partly discharged — key correctness.** An independent model family reached the same key on
  every served item. The deep read no longer carries that load by itself.
- **Fully intact — co-correctness.** The cue-rework wave rewrote 36 distractor strings across 22 items specifically to make them
  *more* plausible (not one introduced a new capitalised token, so this bank has no named-entity tier; the plausibility upgrades here are the overclaim-intensifier class (`d1-q10` A, `d4-q48` B, `d7-q77` C) and the closest co-correctness call, `d2-q12` B). A cross-solve that agrees with the key cannot tell you whether one of
  those upgraded distractors has become defensible too, because agreeing with the key is what it
  does either way. Judge dimensions 1 and 2 stay re-opened on exactly the items the wave touched,
  the deep-read sample is still the only instrument pointed at them, and the questions are itemised
  in [`content/GATE2-HUMAN-ONLY.md`](../../GATE2-HUMAN-ONLY.md).
