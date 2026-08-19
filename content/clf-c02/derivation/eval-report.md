# S5 eval report — clf-c02

Rounds are appended in order. Round 1 begins immediately below; **round 2 (the current
state of the bank) is at the end of this file.**

---

# S5 eval report — clf-c02, round 1

Examiner: exam-examiner (fresh session; authored nothing in this bank — independence
precondition of `methodology/05-eval-rubric.md` §independence checked and met) ·
Date: 2026-08-18 · Bank: 68 items (55 single_choice · 13 multiple_response, zero
scenario_matching as the source posture requires) at `questions.json` commit `e9b1d3a` ·
Validator at eval start: **all 28 bank checks green**; the only two failures are
`selection-shape` and `selection-format-mix` against an empty `selection.json`, which is
the expected pre-S6 state.

## Headline

**S5 round 1: 67 of 68 items pass. One item bounces (`1.10`, `answer-surface-cue`), and
there are no bank-level defects.** Keys are right everywhere the blind solve could test
them, alignment is exact, rationales are traceable, and the surface-cue class that
dominated the aif-c01 round-1 eval (key-position constant, keyed option longest) is
**absent here** — the two ratchet checks born from that eval are live and green on this
bank, and independent re-measurement agrees with them:

| Cue | aif-c01 round 1 | clf-c02 round 1 |
|---|---|---|
| Key letter distribution | 67/67 keys first option | A 19 · B 18 · C 20 · D 19 · E 5 — flat |
| Keyed length vs longest distractor | median 134%, max 214%, 15 items ≥150% | median 97%, max 129% (one 2-word MR option), zero items ≥150% |
| Key is the longest option | 51/57 SC | 26/68 (~38%, near the ~25–40% expected band) |

The single bounce is a **third** variant of the answer-surface-cue class that neither live
validator check can see: the *stem* states the answer's mechanism and the keyed option
repeats the stem's sentence, so the item is solvable by string match at ordinary option
length. See §4 and the ratchet proposal in §8.

## 1 · Blind solve (`eval/blind-solve.json`)

- Keyless form generated from `questions.json` with `id`, `domain`, `type`, `question`,
  `options`, `select_count` only — `answer`, `rationale`, `distractor_patterns`,
  `primary_concept`, `theme`, `vertical` and `keywords` all stripped. Reproducible:

  ```bash
  node -e "const q=require('./content/clf-c02/questions.json');
  console.log(JSON.stringify(q.questions.map(i=>({id:i.id,domain:i.domain,type:i.type,
  question:i.question,options:i.options,...(i.select_count?{select_count:i.select_count}:{})})),null,1))"
  ```

- All 68 items answered with a confidence grade and a one-line reasoning, recorded before
  any key, rationale or prior eval artifact was opened.
- **Accuracy: 68/68 (100%). Confidence: 68 high, 0 medium, 0 low. Zero misses → zero
  adjudications open.**
- **The examiner flags its own score honestly.** Unlike aif-c01 round 1, this 100% is *not*
  explained by a bank-wide surface cue — the cue measurements above rule that out, and the
  keyless form carried no key-position or length signal. The likelier reading is the
  simplest one: CLF-C02 is a foundational exam whose content sits well inside a
  general-purpose model's competence, so a blind solve has very little discriminating power
  here and should not be read as strong evidence of key correctness. What it *does* rule out
  is gross miskeying. The compensating control is the judge rubric plus the Gate 2 deep
  read, not the solve score.
- **One independence caveat, recorded rather than hidden:** item `1.01` was printed in full
  (including its key and rationale) during the pre-solve inspection needed to establish the
  JSON schema, before the keyless form was built. Its stated answer and reasoning are the
  examiner's own, but that single item's blind result is not independent evidence. `1.01` is
  added to the Gate 2 sample as a process flag. Procedure lesson recorded in §9.

## 2 · Codex advisory cross-solve (`eval/codex-solve.json`)

**advisory-skipped.** `codex` is not on PATH; the binary bundled with the VS Code ChatGPT
extension (`openai.chatgpt-26.810.52044`) reports `Not logged in`, unchanged from both
aif-c01 rounds. Establishing auth requires an interactive login outside this session's
authority (free-first: no signups without Oliver). Per §codex a missing advisory instrument
is noted, not blocking.

**Consequence:** no three-way disagreement matrix this round; the Gate 2 sample carries no
cross-model signal. Because author and examiner share Claude weights, the 68/68 blind
agreement **cannot** exclude a convergent blind spot — and given §1's reading (a foundational
bank where the solve has low discriminating power), that limitation matters more here than it
did for aif-c01. Gate 2 must sample without the signal and say so in `signoff.md`. Retry path
recorded in the artifact.

## 3 · Judge rubric (`eval/judge-scores.json`)

All 68 items scored on six dimensions, every distractor argued FOR at full strength before
scoring (per-item `case` field names the distractor that came closest and why it loses).

Score distribution (items × score):

| Dimension | 5 | 4 | 3 | 2 |
|---|---|---|---|---|
| 1 single defensible best answer | 66 | 2 | — | — |
| 2 distractor plausibility | 38 | 26 | 4 | — |
| 3 concept alignment | 68 | — | — | — |
| 4 rationale traceability | 59 | 9 | — | — |
| 5 difficulty pitch | 20 | 39 | 8 | 1 |
| 6 scenario realism | 65 | 3 | — | — |

### Calibration (stated so scores are comparable across exams and rounds)

- **Dim 1.** 5 = every argued distractor loses on the concept's own terms. 4 = one
  distractor's best case survives on proportionality or framing rather than on being wrong
  (`1.04` Well-Architected Tool; `4.05` account-per-brand) — both referred to Gate 2 by name
  even though a 4 does not auto-flag.
- **Dim 2.** 5 = every wrong option is a real practitioner's answer from a distinct pattern.
  4 = all real, one weaker or pattern-adjacent. 3 = one option is *self-defeating on its
  face* (no candidate of any knowledge level would choose it) so it can be eliminated without
  engaging the scenario. Four items sit at 3: `1.07` (three absolutist riders let the
  moderate-option heuristic win), `2.04` ("no party patches the engine"), `3.14` (S3 as a boot
  volume; Glacier as scratch space), `1.10` (see §4).
- **Dim 4.** 4 rather than 5 on nine items where the correct rationale argues the principle
  but never names the keyed service (`2.06` CloudHSM, `2.19` Security Blog, `3.14` EFS, `3.17`
  Textract, `3.19` SQS/SNS, `3.20` SES, `3.21` X-Ray, `3.22` WorkSpaces, `3.23` IoT Core). The
  rationales are good arguments; the gap is that a candidate revising from the rationale alone
  cannot carry the service name back to their study material. House-style observation, not a
  bounce — see §8.
- **Dim 5.** 5 = good-vs-best with the surface pointing away from the principle. 4 = the stem
  carries a misdirection or a near-neighbour rival, resolved once the concept is recalled.
  3 = recall reachable by a surface route (measured stem/key word-match, or a distractor set
  eliminable by test-wiseness rather than content). 2 = the surface hands the answer over.
  This is the same content-vs-cue minimum used in aif-c01, with the cue graded from measured
  stem/key overlap here rather than from keyed length.
- **Dim 6.** 5 = the setting is concrete and its details bear on the answer. 4 = plausible and
  internally consistent but decorative wardrobe (`1.05`, `1.09`, `2.01`).

### Reading

- **Dimension 3 is uniformly 5, and that is a structural fact, not a lazy judge.** The bank is
  exactly one item per concept (68 items ↔ 68 concepts, no duplicates, no uncovered concepts),
  and the S2 concept statements are written at item-spec grain, so drift and
  neighbour-testing — the failure modes this dimension exists to catch — are suppressed by
  construction. Flagged here so Gate 2 reads the zero variance as evidence of the pipeline
  working rather than of the dimension being skipped.
- The quality tail is **dimension 5**, and it is small (8 threes + 1 two vs aif-c01 round 1's
  22 + 15). Five of the eight threes are recall-shaped items where the concept is a list or a
  canonical phrase (`1.05` pillars, `1.09` CAF outcomes, `2.01` "of the cloud / in the cloud",
  `2.05` moderate-option heuristic, `1.07` absolutist riders); three are measured stem/key
  word-match (`2.06`, `2.19`, `3.11`).
- **Shape models to copy** if a later wave needs exemplars: `4.02` (two true facts held at
  once — org-wide RI sharing *and* zonal scope), `4.03` (a genuine charge offered in the wrong
  category), `1.14` (Reserved Instances as a real cost action that loses on being the wrong
  one), `2.13` (a read-only policy on root — wrong for a structural reason), `3.15`,
  `2.03`, `2.07`, `3.05`.

## 4 · Bounces (1 item, round 1 of max 2)

`1.10` — `defect_class: answer-surface-cue`, dimension 5 = 2 (dimension 2 = 3 noted).

The stem states the migration approach in full ("keeping the on-premises database and a cloud
copy synchronized until the moment of switchover") and asks only for its name; keyed option C
repeats that sentence and appends the label ("Database replication, keeping the on-premises
source and the cloud copy synchronized until the moment of cutover"). Measured: **9 shared
content words between stem and key, against a maximum of 4 for any distractor — the widest
stem/key margin in the bank.** A candidate with no AWS knowledge string-matches the answer, so
the item cannot test concept C-010. The distractors are individually sound but none can
compete once the stem has pre-committed to the answer, which is why dimension 2 also drops.

Keyed length is 92% of the longest distractor, so `answer-length-cue` does not fire — this is
the stem-restatement variant of the class, invisible to both live cue checks.

Full record with the judge case and the two-part required fix (rewrite the stem to state the
*constraint* rather than the mechanism; re-gloss option C with a mechanism detail absent from
the stem; keep A, B, D) is in `eval/judge-scores.json` → `bounces`. Per §bounce the reworked
item re-enters S5 for a fresh blind solve and a full re-score.

## 5 · Overlap screen (`eval/overlap-report.md`)

Sources are not held as text (clean-room, classification-only; the official AWS practice set
was never accessed at all) → process control recorded per §overlap with the derivation-artefact
commit chain. Supplementary bank-vs-derivation 8-gram shingle check run since those docs *are*
held: 15 shared shingles total, all canonical vocabulary from the blueprint distillation or the
sampler distillation's own analytic prose, and **all of them in rationales — none in a stem or
an option**. **No clean-room breach; no re-expression bounces.** Two clf-c02-specific notes
routed to Gate 2 (tutorialsdojo assurance level; the unusually deep dump-corpus exclusion
record, which is the strongest provenance evidence in the package).

## 6 · Gate 2 sample (assembled per §handoff) — 12 items

- **From dimension 3s (10 items):** `1.05`, `1.07`, `1.09`, `2.01`, `2.04`, `2.05`, `2.06`,
  `2.19`, `3.11`, `3.14`. Read these for *pitch*, not correctness: the question for Oliver is
  whether recall-shaped items and measured word-match items are acceptable on a foundational
  certification whose real exam is itself substantially recall. A defensible Gate 2 outcome is
  "accept all ten as correctly pitched for CLF-C02"; the examiner's own view is that
  `2.06`, `2.19` and `3.11` (word-match) are worth a rewrite in a later wave and the five
  list/heuristic items are fair for this exam.
- **From dimension-1 4s, referred by name (1 item):** `4.05` — is "one AWS account per brand"
  close enough to co-correct to matter? It genuinely produces per-brand bills and is real AWS
  guidance; it loses on proportionality, not on being wrong. `1.04` (Well-Architected Tool)
  carries the same shape more weakly and is noted but not sampled.
- **From process flags (1 item):** `1.01` — blind result not independent (§1).
- **From cross-model disagreements:** none — instrument skipped (§2). Gate 2 samples without
  the signal and must say so in `signoff.md`.
- **From open adjudications:** none (zero blind-solve misses).
- **Bounce survivors:** n/a in round 1 (`1.10` is bounce 1 of 2 and returns to the author).

## 7 · Cross-exam note — the ratchet worked

The two validator checks proposed by the aif-c01 round-1 eval (`key-position-distribution`,
`answer-length-cue`) are green on this bank on their first exposure to it, and independent
re-measurement confirms the underlying properties rather than just the check outcomes. This
is the first evidence that the ratchet transfers across exams: a defect class found once in
aif-c01 did not recur in a bank authored afterwards by the same pipeline.

## 8 · Ratchet proposals from this round

1. **`stem-key-word-match` (new validator check candidate).** Compute content-word overlap
   between stem and each option; flag any item where the keyed option's overlap exceeds the
   best distractor's by a wide margin (the `1.10` signature: 9 vs 4). This catches the
   stem-restatement variant that `answer-length-cue` structurally cannot. Round-1 evidence:
   1 bounce + 3 dimension-5 threes (`2.06`, `2.19`, `3.11`) would all have been surfaced
   mechanically. Owner: whoever owns `packages/engine/src/validate/` — outside this session's
   ownership, so recorded here for routing, not implemented.
2. **Authoring-guide note (not yet a rule).** On service-identification items, name the keyed
   service in `rationale.correct`. Nine items in this bank argue the principle without ever
   naming it, which weakens the study-material traceability dimension 4 is measuring. One
   exam's worth of evidence is not enough to climb the ladder; recorded so the next exam can
   confirm or drop it.

## 9 · Procedure lesson for the examiner role

Establish an unfamiliar bank's JSON schema **from a keyed-free projection** (print field
*names* and types, or one item with `answer`/`rationale` stripped) rather than by printing a
whole item. Printing item `1.01` in full to learn the shape cost this round one item's blind
independence. Cheap fix, no downside.

## Verdict

**S5 round 1: 1 bounce, 0 bank-level defects, 0 open adjudications, 0 dimensions ≤2 outside
the bounced item.** The bank does not pass as a whole this round (a bounced item cannot ship),
but the gap is a single mechanically fixable stem/key restatement. Once `1.10` is reworked per
its bounce record, the bank re-enters S5 for a fresh blind solve and full re-score of the
reworked item, with a strong prognosis; S6 selection and the Gate 2 checklist follow the
round-2 pass.

---

# S5 eval report — clf-c02, round 2 {#round-2}

Examiner: exam-examiner (fresh session; authored nothing in this bank, and had never seen it —
independence precondition of `methodology/05-eval-rubric.md` §independence checked and met) ·
Date: 2026-08-18 · Bank: 68 items (55 single_choice · 13 multiple_response) at `questions.json`
commit `168ae1f` · Round-1 artifacts preserved at `eval/blind-solve-r1.json` and
`eval/judge-scores-r1.json`; the unsuffixed files carry the current revision, per the preflight
contract and the aif-c01 precedent.

Validator at eval start: **all 28 bank checks green**; the only two failures remain
`selection-shape` and `selection-format-mix` against an empty `selection.json` — the expected
pre-S6 state, and S6's own surface, not a bank defect.

## Headline

**S5 round 2: 68 of 68 items pass. Zero bounces. The round-1 bounce is verified fixed.** Blind
accuracy 68/68 with no adjudications open, no dimension ≤2 anywhere, and — unlike round 1 — no
independence caveat on any item. The bank is S5-clear and ready for S6 selection and Gate 2.

| | Round 1 | Round 2 |
|---|---|---|
| Blind solve | 68/68 (1 item's independence caveated) | **68/68, all independent** |
| Bounces | 1 (`1.10`) | **0** |
| Dimensions ≤2 | 1 (`1.10` dim 5 = 2) | **0** |
| Items carrying a 3 | 11 | **10** |
| Gate 2 sample | 12 | **12** |
| Codex cross-solve | advisory-skipped | advisory-skipped (re-probed) |

## 1 · Blind solve (`eval/blind-solve.json`)

- Keyless form regenerated from `questions.json` (`id`, `domain`, `type`, `question`, `options`
  only) and **all 68 items solved with a confidence grade and a one-line reasoning recorded
  before any key, rationale or round-1 eval artifact was opened.** The pre-key record is
  preserved in the session scratchpad (`blind-answers.json`) and was written to disk before the
  first diff was run.
- **Accuracy: 68/68 (100%). Confidence: 67 high, 1 medium (`1.04`). Zero misses → zero
  adjudications open.**
- **The round-1 independence caveat is cleared.** Round 1 lost item `1.01`'s blind independence
  by printing a whole item to establish the JSON schema, and recorded the procedure lesson in
  its §9. That lesson was applied here: the schema was established from a keyed-free projection
  (field *names* first, then one item printed with `answer`, `rationale`, `distractor_patterns`,
  `primary_concept`, `theme`, `vertical` and `keywords` stripped). No key or rationale was
  visible to this session before the solve was recorded, so **`1.01` is independent this round
  and is removed from the Gate 2 sample.** This is the first documented case of a Mockka
  procedure lesson being carried into the next round and paying off.
- **The 100% carries the same caveat as round 1 and it has not weakened.** CLF-C02 is a
  foundational exam whose content sits well inside a general-purpose model's competence, so a
  blind solve has low discriminating power here; it rules out gross miskeying and little more.
  The single medium-confidence item (`1.04`, Well-Architected Framework vs Tool) is the one place
  the bank made the examiner hesitate, and it is independent evidence for that item's dimension-1
  4. The compensating controls remain the judge rubric and the Gate 2 deep read.

## 2 · Codex advisory cross-solve (`eval/codex-solve.json`)

**advisory-skipped, re-probed — a fresh session must not inherit an unavailability finding.**
`codex` is still not on PATH; there is no `~/.codex/auth.json`; the binary bundled with the VS
Code ChatGPT extension (`openai.chatgpt-26.810.52044`) reports `Not logged in`, and one `codex
exec` probe returned **401 Unauthorized** after five reconnect attempts. Establishing auth
requires an interactive login outside this session's authority (free-first: no signups without
Oliver). Per §codex a missing advisory instrument is noted, not blocking.

**Consequence, restated because it is the single largest residual risk in this eval:** there is
no three-way disagreement matrix, so the Gate 2 sample carries **no cross-model signal**. Author
and examiner share Claude weights; a convergent blind spot — both preferring the same wrong
reading — is invisible to this eval by construction, and 68/68 cannot exclude it. `signoff.md`
must say so.

## 3 · Judge rubric (`eval/judge-scores.json`)

All 68 items re-read in full and re-scored on six dimensions, every distractor argued FOR at
full strength before scoring.

Score distribution (items × score):

| Dimension | 5 | 4 | 3 | 2 | Δ vs round 1 |
|---|---|---|---|---|---|
| 1 single defensible best answer | 66 | 2 | — | — | — |
| 2 distractor plausibility | 38 | 27 | 3 | — | `1.10` 3 → 4 |
| 3 concept alignment | 68 | — | — | — | — |
| 4 rationale traceability | 58 | 10 | — | — | `4.08` 5 → 4 (new finding) |
| 5 difficulty pitch | 20 | 40 | 8 | **0** | `1.10` 2 → 4 |
| 6 scenario realism | 65 | 3 | — | — | — |

### Method — independence from round 1, and what the comparison showed

The round-2 grid was formed **before** round 1's per-item scores were opened: every item
re-read against the current option text, every distractor argued FOR, and an independent
bank-wide re-measurement of stem/option content-word overlap run to grade dimension 5 on
evidence rather than impression. Only then was the round-1 grid compared.

- **373 of 408 dimension scores were identical.** For a rubric applied by two fresh sessions
  weeks apart, that is the calibration holding.
- **32 single-point differences across 26 items were reconciled to round 1's published
  calibration statement** (§calibration, round 1), which covers each case; every one is recorded
  in that item's `case` field with the first-pass value and the reason it moved. Three touched
  the 3/4 boundary — `1.07` dim 2, `2.04` dim 2 and dim 5 — and **none changed Gate 2 sample
  membership**, because both items carry a 3 either way.
- **3 differences were HELD as round-2 deltas** (below). Reconciling toward a published
  calibration is not deference: where round 2 had an argument round 1 lacked, round 2 kept it.

One first-pass judgment worth recording because it was *withdrawn on measurement*: `1.06` looked
like a stem/key echo ("recover from disruption"), which would have capped dimension 5 at 3. The
measurement killed it — the keyed option shares 4 content words with the stem while distractor A
shares 5, so the echo is not a key-selecting cue. Dimension 5 stays 5. The lesson is that the
cue class round 1 discovered has to be *measured* per item, not pattern-matched.

### Delta 1 — `1.10`, the round-1 bounce: verified fixed

Rework commit `168ae1f` made exactly the two edits the bounce report required and nothing else.
Independent verification on this tree:

| | Round 1 | Round 2 |
|---|---|---|
| Stem states | the mechanism ("keeping the on-premises database and a cloud copy synchronized until the moment of switchover") | the constraints only (round-the-clock writes, cutover window of minutes, no write lost) |
| Keyed option C | repeats the stem's sentence | names replication + an **off-stem** mechanism ("ongoing change capture applied to the cloud target") |
| Stem/key content-word overlap | **9**, the highest of the four options (max distractor 4) | **1**, the *lowest* of the four options (max distractor 3, option D) |
| Scores | 5 / 3 / 5 / 5 / **2** / 5 | 5 / **4** / 5 / 5 / **4** / 5 |

The string-match route is gone and the margin is inverted, so the item now requires the
constraint-to-strategy mapping concept C-010 names. The fresh blind solve answered it from the
constraints ("minutes of cutover with zero lost writes requires ongoing replication/change
capture, not a bulk export") at high confidence. Dimension 2 recovers to 4 because options B and
D compete properly once the stem no longer pre-commits. **Bounce cleared** — recorded in
`judge-scores.json` → `bounce_resolution`. `1.10` is carried into the Gate 2 sample as a bounce
survivor so a human confirms the fix rather than taking the examiner's word for it.

### Delta 2 — `4.08`, dimension 4 lowered 5 → 4 (round-1 miss)

`4.08`'s `rationale.correct` argues the principle as "what the community question-and-answer
service is for" and **never names AWS re:Post**. That is exactly the house-style gap round 1
recorded on nine items (`2.06`, `2.19`, `3.14`, `3.17`, `3.19`, `3.20`, `3.21`, `3.22`, `3.23`);
`4.08` belongs on the list and was missed. Not a bounce — a 4 ships — but it moves the evidence
for ratchet proposal 2 from nine items to **ten**, and it is a small, honest correction of the
round-1 record rather than a new defect in the bank.

### Reading

- **Dimension 5 now has no 2s and the tail is eight 3s**, all carried over from round 1 and all
  re-derived independently this round: five are recall-shaped items where the concept *is* a list
  or a canonical phrase (`1.05` pillars, `1.09` CAF outcomes, `2.01` "of the cloud / in the
  cloud", `2.05`, `1.07`), and three are measured stem/key word-match (`2.06`, `2.19`, `3.11`).
- **A near-miss recorded so Gate 2 can see the line being drawn.** `1.08` (Migration Evaluator)
  sits in the same measured overlap band as the flagged trio — keyed overlap 5 against a best
  distractor of 2 — but was scored 4, not 3, because the shared words are the requirement's own
  generic vocabulary ("business case", "current", "projected", "migration") rather than a
  distinctive reproduced phrase, and because the actual discriminator ("analyzes the current
  environment") is the concept's own term. `3.19` (+3 margin) was scored 4 on the same test. The
  rule this round applied: **a distinctive multi-word phrase reproduced uniquely in the key caps
  dimension 5 at 3; generic shared vocabulary does not.** If Gate 2 disagrees with that line,
  `1.08` and `3.19` are the two items it changes.
- **Dimension 3 is uniformly 5 again**, for the structural reason round 1 gave (one item per
  concept, concept statements written at item-spec grain). Read the zero variance as the pipeline
  working, not as a skipped dimension.

## 4 · Bounces (0 items)

**None.** No dimension scored ≤2 on any item. The round-1 bounce is resolved (§3, Delta 1); the
bounce cap of 2 was never approached, and nothing returns to the author from this round.

## 5 · Overlap screen (`eval/overlap-report.md` → "Round 2 delta")

Source posture unchanged; no source became available as text, so the process control remains the
evidence and was re-verified rather than assumed. The supplementary bank-vs-derivation 8-gram
shingle check was re-run on the current tree: **15 shared shingles, identical to round 1 in count
and in items** (14 canonical-vocabulary sequences from the blueprint distillation across `1.05`,
`1.09`, `1.12`, `2.13`, `2.14`, `3.04`; one distiller's-prose phrase in `2.07`), **all in
rationales, none in a stem or an option**. The reworked item `1.10` matches **zero** shingles in
any derivation doc. No clean-room breach; no re-expression bounces.

## 6 · Gate 2 sample (assembled per §handoff) — 12 items

- **From dimension 3s (10 items):** `1.05`, `1.07`, `1.09`, `2.01`, `2.04`, `2.05`, `2.06`,
  `2.19`, `3.11`, `3.14`. Read these for **pitch, not correctness**. The question for Oliver is
  whether recall-shaped items and measured word-match items are acceptable on a foundational
  certification whose real exam is itself substantially recall. A defensible outcome is "accept
  all ten as correctly pitched for CLF-C02"; the examiner's own view is unchanged from round 1 —
  `2.06`, `2.19` and `3.11` (word-match) are worth a rewrite in a later wave, and the
  list/heuristic items are fair for this exam.
- **From bounce survivors (1 item):** `1.10` — reworked and re-scored clean, sampled so a human
  confirms the fix.
- **From dimension-1 4s, referred by name (1 item):** `4.05` — is "one AWS account per brand"
  close enough to co-correct to matter? It genuinely produces per-brand bills and is real AWS
  guidance; it loses on proportionality, not on being wrong. `1.04` (Well-Architected Tool)
  carries the same shape more weakly; it is **not** sampled, but note that it is the one item
  that drew a medium-confidence blind answer, so if Oliver wants a thirteenth item it is that one.
- **From process flags: none.** Round 1's `1.01` flag is cleared (§1) and drops out of the sample.
- **From cross-model disagreements: none** — instrument skipped (§2). Gate 2 samples without the
  signal and must say so in `signoff.md`.
- **From open adjudications: none** (zero blind-solve misses).

## 7 · Cross-exam note — the ratchet, second data point

The two validator checks born from the aif-c01 round-1 eval (`key-position-distribution`,
`answer-length-cue`) are green on this bank in both rounds, and the round-1 cue measurements were
independently reproduced this round. The clf-c02-specific proposal — `stem-key-word-match` — is
still **unimplemented** and outside this session's ownership (`packages/engine/src/validate/`).
Round 2 is fresh evidence for it: the one defect it would have caught mechanically (`1.10`) cost
a full bounce round to find and fix by hand, and the three surviving dimension-5 word-match 3s
(`2.06`, `2.19`, `3.11`) would have been surfaced at authoring time instead of at Gate 2.

## 8 · Ratchet proposals carried forward

1. **`stem-key-word-match` (validator check candidate)** — unchanged from round 1 §8.1, now with
   round-2 evidence: the check's own signature (keyed overlap far above the best distractor's) was
   the measurement that both diagnosed `1.10` and verified its fix (9→1, margin inverted). Routing
   note, not an implementation request from this session.
2. **Authoring-guide note (not yet a rule): name the keyed service in `rationale.correct`.**
   Evidence is now **10 items in this bank** (round 1's nine plus `4.08`), consistent with a
   house-style habit rather than isolated slips. Still one exam's worth of evidence; the next exam
   confirms or drops it.

## Verdict

**S5 round 2: PASS. 68/68 blind, 0 bounces, 0 open adjudications, 0 dimensions ≤2, overlap screen
clean on process control.** The bank clears S5. Two things a Gate 2 reader must weigh and neither
is a bank defect: the eval carries **no cross-model signal** (Codex unauthenticated in both
rounds), and a 100% blind score on a foundational bank is weak evidence of key correctness — the
12-item sample and the human deep read are the real controls. Next: S6 selection against the
manifest mix (`selection.json` is still empty, which is why `pnpm validate clf-c02` reports two
selection failures), then the Gate 2 checklist, then Oliver's sign-off before any `manifest.status`
flip.

---

## S5b · re-measured at the Gate 2 final pass (2026-08-20) {#s5b-final}

Instrument: `node tools/exploit-scan.mjs clf-c02 --json` for form-a scope, and the same tool run against a selection-free copy of the package for bank scope (the tool scopes to the served form whenever a `selection.json` form exists, so bank scope has to be produced deliberately). Bank revision under measurement: `questions.json` @ **`793dde2`** (blob `cb76d1e9ae`, sha256 `8eb8213c81458f18…`).

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

| scope | n | blind (this revision) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 68 | **25.00%** (17/68) | ≤ 29.87% (random 22.13%) | **0.600** | ≥ 0.523 | **PASS** |
| form-a | 50 | **26.00%** (13/50) | ≤ 30.14% (random 22.32%) | **0.595** | ≥ 0.522 | **PASS** |

**No S5b ceiling verdict has ever been recorded for this package** — S5 and S6 both closed before the cue-only-solve instrument existed, and this exam was not part of the 2026-08-19 cue-rework wave, so the table above is the first one. **The previously pinned revision `168ae1f`, re-measured with the corrected instrument, does not clear the ceiling on the scope that ships:** bank 29.41% (a 0.46-point PASS, k_req 0.577) · **form-a 32.00% — FAIL** against a 30.14% ceiling, k_req 0.559. The served form was the breach, and the bank was half a point off it. That is the honest statement of why this exam needed a content pass, and it is stated here rather than left implicit.

### Residuals carried to Gate 2

- **2 `named-entity-parity` warnings** (bank 41%, form 43%) — **untouched by the length work and still open.** The option naming the most proper-noun AWS services is the key more often than chance. Closing this needs real sibling service names written into distractors, which is authoring work in a separate lane, not an examiner edit. It is a warn, not an error, and the combined S5b consequence is inside the ceiling on both scopes.
- **stem-echo**, uninstrumented: 36.1% bank / 35.7% form against 25% chance.
- **No cross-model eval column exists for this bank**, in any round. The Codex CLI on this machine is bundled inside the VS Code extension and is not logged in, so the advisory cross-solve was `advisory_skipped` throughout. Author and examiner share a model family, so no blind-solve score — however clean — excludes a convergent blind spot. The deep-read sample is the compensating control, and this is a standing gap, not a finding against the bank.
