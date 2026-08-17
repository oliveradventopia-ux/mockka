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
