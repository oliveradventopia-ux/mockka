# S5 eval report — sy0-701, round 1

Examiner: exam-examiner (fresh session; authored nothing in this bank — the independence
precondition of [`methodology/05-eval-rubric.md`](../../../methodology/05-eval-rubric.md#independence)
was checked and met) · Date: 2026-08-18 · Bank: 122 items (110 SC · 9 MR select-2/3 · 3 SM) at
`questions.json` commit `4090ed3` · Validator state at eval start: **all 28 bank checks green**;
the only failures are the 20 expected `selection-shape` / `selection-format-mix` errors from an
empty `selection.json` (S6 not yet run).

## Headline

**The bank is clean. Zero items bounce, and no defect blocks S6.** All 122 items clear every
threshold: no dimension scored ≤2 anywhere, blind accuracy is 121/122 with the single miss
adjudicated as legitimately hard, and the overlap screen returns no finding. This is the first
Mockka bank to clear round 1 without a bounce, and the reason is visible in the artefacts — the
two bank-wide surface defects that indicted aif-c01 at round 1 (key-position-constant and
answer-length cue) were both engineered out here before authoring, and the S3 handoff's own
"authoring must/never" rules were carried into the items.

What the round does surface is a **13-item quality tail** and one **process gap**, neither of which
is a bounce:

1. **A named S3 rule did not fully survive S4.** Rule 1 of the L-0014 sweep in
   `master-inventory.md` — *"every distractor is a real term from the objectives body or acronym
   list; invented options are a tell"* — is breached in 7 items, each by exactly one option that is
   a prose assertion rather than a term (`d3-q08` D "wherever is convenient — a device this capable
   protects the network regardless of position"; `d3-q15` D "data in archive, the fourth state in
   the model"; `d3-q16` D "a gap solvable by notifying passengers…"; `d2-q12` D "a legacy system
   that **remains vendor-supported**"; `d2-q13` D "a hypervisor misconfiguration **must exist**";
   `d2-q14` C "side loading **alone**"; plus `d1-q10` B/C, whose option text announces its own
   defectiveness). These are the entire dimension-2 = 3 population — the examiner's independent
   scoring landed on the exact set the S3 rule predicted. Effect: the item runs on three real
   options instead of four. Ratchet proposal in §7.
2. **Codex is still unauthenticated**, so this exam's Gate 2 sample carries no cross-model signal.

## 1 · Blind solve (`eval/blind-solve.json`)

- Keyless form generated mechanically from `questions.json` — stems plus options only (for SM,
  matching options plus scenario texts); `answer`, `rationale`, `distractor_patterns`,
  `primary_concept`, `theme`, `vertical` and `keywords` all stripped. Every item answered with a
  confidence grade and a one-line reason, **written and frozen before any key, rationale, pattern
  tag or concept row was opened** (pre-key record preserved in the session scratchpad as
  `blind-answers-r1.json`).
- **Accuracy: 121/122 (99.2%). Confidence: 120 high, 2 medium (`d4-q18`, `d5-q16`). One miss
  (`d4-q02`, high confidence) → one adjudication open. Zero low-confidence misses.**
- **The score is not cue-confounded** — checked before it was trusted, because a 99% blind score is
  worthless if the surface is leaking:

  | Cue class (aif-c01 BD-1 / BD-2) | sy0-701 measurement | Reading |
  |---|---|---|
  | Key position | SC keys A28 / B26 / C29 / D27 | flat |
  | MR key sets | BE · BCE · AD · CE · AC · ACE · AC · CE · BCE — all distinct | no constant |
  | SM maps | 3/3 non-identity permutations with option reuse | no listed-order tell |
  | Keyed-option length | median **0.97×** the longest distractor; max 1.32× (`d2-q05`, `d1-q12`); zero items ≥1.35× | no length cue |
  | "Key is longest" rate | 49/110 SC (45%) — but by a **median margin of 1.038×**, i.e. a word | not exploitable; watch-noted |

  A "pick the longest, most hedged option" strategy scores at chance here. 121/122 therefore stands
  as an uncontaminated key-correctness signal across all five domains and all three formats.
- **The one miss, `d4-q02` (BYOD/COPE), is a defect candidate carrying a proposed verdict of
  `legitimately_hard`, not `miskeyed` and not `co_correct`.** The examiner chose C (enrol the
  personal handsets, confine the app to a managed container) — the standard resolution to "we
  cannot control hardware we do not own", and one that preserves the one-phone promise. It fails a
  stated requirement: the security team asked for **full-device** encryption and remote wipe
  enforced through MDM, which a work container does not deliver and which legal has said cannot be
  imposed on hardware the distributor does not own. Only COPE satisfies all three constraints, which
  is concept C-066's own claim. **Oliver confirms or overrides at Gate 2** — full argument in the
  artifact.

## 2 · Codex advisory cross-solve (`eval/codex-solve.json`)

**advisory-skipped.** `codex` is not on PATH; the binary bundled with the VS Code ChatGPT extension
(`codex-cli 0.148.0-alpha.9`) reports "Not logged in" and an exec probe fails `401 Unauthorized`
on both transports. Establishing auth needs an interactive `codex login` by Oliver, which is outside
this session's authority (free-first: no sign-ins or signups without him). Per
[§codex](../../../methodology/05-eval-rubric.md#codex) a missing advisory instrument is recorded,
never blocking.

**Consequence, stated plainly:** there is no three-way disagreement matrix this round. Author and
examiner share Claude weights, so a convergent blind spot — both preferring the same wrong reading —
is not excluded by 121/122. The Gate 2 deep read is the compensating control, and it should weight
the vocabulary-taxonomy items (§3, dimension 5) accordingly, since those are where a shared-family
misreading would be least visible. This is the fourth consecutive exam recording `advisory_skipped`
on this machine; unblocking it is one command.

## 3 · Judge rubric (`eval/judge-scores.json`)

All 122 items scored on all six dimensions, with the strongest honest case argued **for** each
distractor before scoring; the argued cases are recorded per item in `case`.

| Dim | 5 | 4 | 3 | ≤2 |
|---|---|---|---|---|
| 1 · single defensible best answer | 116 | 5 | 1 | **0** |
| 2 · distractor plausibility | 84 | 31 | 7 | **0** |
| 3 · concept alignment | 122 | — | — | **0** |
| 4 · rationale traceability | 122 | — | — | **0** |
| 5 · difficulty pitch | 52 | 64 | 6 | **0** |
| 6 · scenario realism | 114 | 8 | — | **0** |

Calibration (kept house-comparable with aif-c01 round 2, and stated in the artifact `$comment` so
Gate 2 can audit it): dim 2 → 3 means one option is a *throwaway* (self-marking rider,
self-contradicting against the stem, non-parallel, or an invented framework item), so the item
effectively runs on three options; dim 5 → 3 means the stem recites the key's definition or hands
over the discriminating keyword, making the item answerable by term-matching.

Notes on the three uniform dimensions, since uniformity deserves an explanation rather than a shrug:

- **Dim 3 (122×5).** Every item tests its declared `primary_concept`; no item drifts to a
  neighbour or is solvable without the concept. The concepts are *merged family-level* rows (237
  Artefact-B rows merged to 122, per `manifest.$comment`), so an item necessarily tests one facet
  of a family — that is the merge working as designed, not partial alignment, and in every case the
  facet tested is the concept statement's own headline claim.
- **Dim 4 (122×5).** Rationales are uniformly template-strong: the correct block opens by restating
  the concept in the objectives' canonical vocabulary and then argues from the scenario's facts,
  and every distractor gets its own argued refutation naming *why* the reading fails. The
  `rationale-anti-drift` and `rationale-letter-reference` validator checks are green, and nothing
  asserts where it should argue.
- **Dim 6 (114×5, 8×4).** The 4s are thin scenario wrappers rather than defects (`d1-q01`,
  `d1-q04`, `d1-q06`, `d2-q04`, `d2-q07`, `d2-q12`, `d2-q15`, `d4-q02`) — mostly the same items as
  the dim-5 3s, which is the expected correlation: a definition-recitation item has little scenario
  to be realistic about. `d4-q02` is a 4 for a different reason (modern handsets ship encrypted
  regardless of ownership, so the encryption half of its requirement is slightly stylised).

**Pattern discipline (checked against `authoring.json` and the S3 rules):** 354 tagged wrong
options — E01 23.4%, E02 17.5%, E05 17.2%, then D12 4.8%, D05 4.0%, E03/D03 3.1%, D07 2.8%,
D19 2.5%. E01 sits well under its 0.35 manifest cap; D03/D04 under 0.10; **D19
(false-technical-claim) is used in only 9 items, never more than once per item**, which is the
sparseness [`03-authoring-guide.md#d19`](../../../methodology/03-authoring-guide.md#d19) demands.
E04 acronym-decoy-expansion is absent, as the structural ban intends. S3 rules 5–7 (raise E05,
E03, D07) are visible in the mix; rule 9 (CompTIA's seven IR steps, not NIST's four) holds in
`d4-q29`; rule 8 (one artefact per category option) holds in `d1-q01`/`d1-q03`.

**One S3 rule deviates on purpose and is recorded rather than scored:** rule 3 says stems should be
short, six of ten vendor items being one sentence. This bank's stems are median 47 words / 3
sentences. The extra length is scenario wardrobe (vertical, incident history, stated constraints)
rather than a second discriminating attribute, and the dim-5 distribution shows it buys difficulty
rather than giving it away — but it is a visible divergence from the vendor's own shape, and Gate 2
should decide whether that is the house style or drift.

## 4 · Bounces

**None.** No item scored ≤2 on any dimension, so no bounce report was written and the bounce budget
(2 per item) is untouched. `eval/judge-scores.json` carries no `bounces[]` array.

## 5 · Overlap screen (`eval/overlap-report.md`)

**No finding; no item bounces for re-expression.** The blueprint distillation is the only source
held as text, and the worst single-item exposure to it is 6.7% of one item's 3-grams (`d3-q13`),
consisting entirely of canonical vocabulary (`virtual private network`, `remote access`). Maximum
overlap against either practice-set distillation is **two three-word technical terms**. For the two
practice sets no text is held at all, so the report records the process control — the artefacts the
authoring session worked from, their statement that they contain zero source text, and the commit
hashes — as the rubric requires. Both Gate 1 provenance items (`jealarue-exam90` unlicensed;
blueprint revision 5.0 vs a rumoured 6.0) are carried forward: they are permission questions, not
originality ones.

## 6 · Gate 2 sample (assembled per [§handoff](../../../methodology/05-eval-rubric.md#handoff))

**14 items (11.5% of the bank).** No bounce survivors and no cross-model disagreements exist to add.

| Item | Why it is in the sample | What Oliver decides |
|---|---|---|
| `d4-q02` | Confident blind miss; adjudication open | Confirm `legitimately_hard`, or rule `miskeyed`/`co_correct` |
| `d5-q16` | **dim 1 = 3** — option A (remediation cost) is a strong reading of "most likely to have missed"; the key wins only on the blueprint's consequences taxonomy | Accept as-is, or bounce for a stem that asks which consequence the plan is most *exposed* to |
| `d1-q10` | dim 2 = 3 — options B and C announce their own defectiveness | Accept, or rebuild one option as a straight practitioner answer |
| `d2-q12` | dim 2 = 3 (self-contradicting option D) **and** dim 5 = 3 (stem recites the EOL definition) | The weakest item in the bank on two axes — accept or bounce |
| `d2-q13` | dim 2 = 3 — option D is an assertion ("must exist"), not a candidate answer | Accept or rebuild |
| `d2-q14` | dim 2 = 3 — option C's "alone" rider marks it as partial | Accept or rebuild |
| `d3-q08` | dim 2 = 3 — option D is self-marking (D11 non-architectural-criteria written as prose) | Accept or rebuild |
| `d3-q15` | dim 2 = 3 — option D invents a fourth data state | Accept (sparse D19 is sanctioned) or rebuild |
| `d3-q16` | dim 2 = 3 — option D is a non-parallel "notify the passengers" remedy | Accept or rebuild |
| `d1-q04` | dim 5 = 3 — the stem's "nothing was copied out / stayed online" eliminates two options on the surface | Accept as a foundational CIA item, or re-pitch |
| `d1-q06` | dim 5 = 3 — stem recites the accounting definition | Same |
| `d2-q04` | dim 5 = 3 — "text messages" hands the channel over | Same |
| `d2-q07` | dim 5 = 3 — "plugs in a USB stick" hands the vector over | Same |
| `d2-q15` | dim 5 = 3 — stem states the zero-day definition term by term | Same |

The dim-5 cluster is one decision, not five: **how much pure vocabulary-recognition does a
Security+ mock owe its candidate?** The manifest's own `intro.audience` says the real exam "rewards
candidates who can separate near-neighbour terms… under a described situation", and CompTIA's own
sampler contains items of exactly this shape. The examiner's position is that these five ship — they
are correctly keyed, correctly pitched *for what they are*, and a 122-item bank that contained none
of them would misrepresent the paper — but the call is Oliver's, and it is the kind of call that
should be made once and recorded, not re-litigated per exam.

## 7 · Ratchet proposal (raw material for `00-pipeline.md#ratchet`)

One candidate, from the §Headline finding — `defect_class: distractor-not-a-term`:

> **Proposed validator check (`distractor-term-shape`, warning-level):** flag any option whose text
> contains a self-referential rider that marks it as non-answer — leading patterns observed:
> `… alone`, `… must exist`, `wherever is convenient`, `the Nth <thing> in the model`, `which
> <actor> must follow exactly` — or that is a full clause asserting a position rather than naming a
> thing. This is mechanical enough to lint and it caught 7/122 items here by hand.

Evidence that it is worth ratcheting rather than leaving as an authoring-guide sentence: the rule
already **exists** in prose (S3 rule 1, inherited from both Artefact A documents' own observation
that 9/10 vendor items draw every option from the objectives' term list) and it still leaked into
7 items. A rule that is written down and breached anyway is exactly the ratchet's input condition.
Second occurrence across exams should promote it from warning to error.

## Verdict

**PASS — clear for S6 with no rework.** 122/122 items ship. One adjudication and 13 quality-tail
flags travel to Gate 2 as decisions, not defects. The two standing provenance questions
(`jealarue-exam90` licence, blueprint revision string) and the missing cross-model signal are the
open items on the publication path, and none of them is an authoring defect.
