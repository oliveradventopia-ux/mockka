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

---

## S5b · cue-only solve — re-measured after the cue-rework wave (2026-08-19) {#s5b}

Recorded per [methodology/05 §cue-only-solve](../../../methodology/05-eval-rubric.md#cue-only-solve),
which requires the blind score, `k_req` and the ceiling verdict for the **bank and each served
form**. The wave (`d92c587` on `fix/cue-rework-wave`) changed option text only, so these
numbers **supersede** any cue figures earlier in this report; the S5 §1 blind solve and the judge
scores were produced against the pre-wave text and were not regenerated (see
`derivation/gate2-checklist.md` §Post-S5 cue-rework wave).

Instrument: `node tools/exploit-scan.mjs sy0-701` for form scope, and the same tool run against a
selection-free copy of the package for bank scope — it scopes to the served form when a
`selection.json` form exists, so bank scope must be produced deliberately. `random` is the
format-mix expected guess score (single_choice 1/options, multiple_response 1/C(options, |key|),
scenario_matching 1/options^scenarios, all graded all-or-nothing), which is **stricter** than the
rubric's 25% worked-example simplification.

| scope | n | blind (pre-wave → post-wave) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 122 | 38.52% → **27.05%** (33/122) | ≤ 31.43% (random 23.28%) | **0.7396** | ≥ 0.6395 (k_req@random 0.7523) | **PASS** |
| form-a | 90 | 35.56% → **26.67%** (24/90) | ≤ 30.61% (random 22.67%) | **0.7409** | ≥ 0.6411 (k_req@random 0.7543) | **PASS** |

Per-cue rates on the shipping revision (chance 25% each):

- **bank** — key-longest-rank 29/99 (29.3%) · key-shortest-rank 18/98 (18.4%) · named-entity 9/26 (34.6%) · rider-marks-key 0/6 (0.0%)
- **form-a** — key-longest-rank 20/71 (28.2%) · key-shortest-rank 14/70 (20.0%) · named-entity 7/21 (33.3%) · rider-marks-key 0/4 (0.0%)

### Residual: the instrument does not test interior length ranks

`key-length-rank-share` and `exploit-scan`'s `key-longest-rank`/`key-shortest-rank` bound only
rank 1 and rank last, and the standard parity fix — lift one thin distractor above a rank-1 key —
lands the key deterministically on **rank 2**. Measuring all four ranks by hand on the shipping
revision:

| scope | key length-rank distribution | best single-rank strategy | rank-aware blind |
|---|---|---|---|
| bank | {1:31, 2:33, 3:26, 4:20} | rank 2: 33/110 (30.0%) | 35/122 = **28.69%** |
| form-a | {1:22, 2:22, 3:19, 4:15} | rank 1: 22/78 (28.2%) | 24/90 = **26.67%** |

"Rank-aware blind" substitutes the best interior rank for the tool's longest-option strategy. It is
**not** the S5b number — the committed strategy set is the instrument of record — but it is the
honest upper bound on what a rank-aware test-wise candidate scores, and Gate 2 should see it.

### Residual: the uninstrumented stem-echo cue

No validator check and no exploit-scan strategy measures option↔stem content-word overlap, and the
wave's own fix mechanism (appending a purpose clause written from the stem's words to lift a key
off the shortest rank) inflates it. Share of single-choice items where the key is the strict
maximum-overlap option, chance 25%: bank 29.6 → 28.2%, form-a 25.5 → 25.0% — it
**fell**.

### Verdict carried to Gate 2

**PASS on both ceilings, both scopes, with the widest headroom of the six** (threshold 81%, so
`k_req` 0.74 against a 0.64 floor). Two residuals, neither gating. (1) The **rider channel is fully
inverted and was left untouched**: `rider-marks-key` is 0/6 on bank and 0/4 on form — 0% against
25% chance, i.e. every rider in the bank sits on a distractor, which is the E2 elimination cue
`exploit-scan` exists to warn about. Sibling lanes seated a key-side rider in this same wave
(`ccao-f`, `ai-901`); sy0-701 did not. (2) `named-entity` reads 34.6% bank / 33.3% form, the
highest of the six — driven in part by an acronym-expansion policy that makes DMARC-style keys
intrinsically entity-heaviest (`d4-q19`'s key carries 5 proper-noun tokens against 3/3/0).

---

## S5b · re-measured at the Gate 2 final pass (2026-08-20) {#s5b-final}

Instrument: `node tools/exploit-scan.mjs sy0-701 --json` for form-a scope, and the same tool run against a selection-free copy of the package for bank scope (the tool scopes to the served form whenever a `selection.json` form exists, so bank scope has to be produced deliberately). Bank revision under measurement: `questions.json` @ **`d92c587`** (blob `22dad062f1`, sha256 `9c7911cc8a71bd14…`).

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
| bank | 122 | 27.05% → **28.69%** (35/122) | ≤ 31.43% (random 23.28%) | **0.732** | ≥ 0.639 | **PASS** |
| form-a | 90 | 26.67% → **26.67%** (24/90) | ≤ 30.61% (random 22.67%) | **0.740** | ≥ 0.641 | **PASS** |

The bank is byte-identical to the revision pinned on 2026-08-19, so there is no content delta to attribute: the whole of the movement above is the stronger strategy set. The recorded figure was not wrong for the instrument that produced it; it is superseded because the instrument was.

### Residuals carried to Gate 2

- **rider inversion, small-n:** `rider-marks-key` is 0/6 bank and 0/4 form. A rider never marks the key here, which is an *inverse* cue — but at n=6 it is noise, not a finding.
- **named-entity 34.6% bank / 33.3% form** against 25% chance — the highest of the seven, under the validator's 40% warn bound but the cue most worth a future countermeasure.
- **stem-echo**, uninstrumented: 29.4% bank / 26.1% form against 25% chance — the lowest of the seven.
- `d4-q16` still needs a **ruling, not a read** (3-vs-1 surface singleton the `option-pair-similarity` metric cannot see); `d4-q02` is the one confident blind-solve miss, adjudicated `legitimately_hard` with `adjudication_status: open_proposed`.
- **No cross-model eval column exists for this bank**, in any round. The Codex CLI on this machine is bundled inside the VS Code extension and is not logged in, so the advisory cross-solve was `advisory_skipped` throughout. Author and examiner share a model family, so no blind-solve score — however clean — excludes a convergent blind spot. The deep-read sample is the compensating control, and this is a standing gap, not a finding against the bank.
