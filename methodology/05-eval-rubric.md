# 05 · The eval rubric (S5) {#eval-rubric}

Stage manual for S5 in [`00-pipeline.md`](00-pipeline.md). Owner: exam-examiner, executing
`/exam-eval`. The validator ([`04-validation.md`](04-validation.md)) proves the bank is
*well-formed*; S5 proves it is *good* — keyed correctly, pitched right, and originally expressed.
Everything S5 produces is a git artifact under `content/<slug>/eval/` — the judgment record lives
in the repo (Opik traces are the operational lens, never the record).

## The independence rule {#independence}

**The examiner never authors.** S5 runs in a fresh session by construction (the exam-examiner
agent, not the authoring session), and `/exam-eval` **refuses to run in any session that has
edited the exam's `questions.json`** — if this session wrote or edited items, evaluating them
here would be [D20 self-review-anchoring](03-authoring-guide.md#d20) applied to ourselves. The
refusal is procedural, checked at skill start: if the session has touched
`content/<slug>/questions.json` (any Write/Edit this conversation), stop and instruct that S5 be
run in a fresh session. There is no override.

---

## 1 · Blind solve {#blind-solve}

The examiner sits the exam without the key:

1. **Generate the keyless form**: every bank item's stem and options only — no answer key, no
   rationale, no pattern tags, no concept metadata. Shuffle nothing (ids must map back).
2. **Solve every item**, recording per item: the chosen answer, a **confidence** grade
   (`high` / `medium` / `low`), and **one line of reasoning** — written *before* looking at the
   key. The one-liner is what makes adjudication possible: it captures *why* the examiner
   believed the wrong thing.
3. **Diff against the key** → `eval/blind-solve.json`: per item, chosen vs keyed, confidence,
   reasoning line, match/miss.
4. **Adjudicate every confident miss.** A high-confidence miss is a defect candidate, never noise.
   Each one goes to a human (Oliver, normally batched into Gate 2 prep) for one of three verdicts:
   - **miskeyed** — the examiner is right, the key is wrong → fix the key (authoring defect,
     counts toward the bounce/error-class record)
   - **co-correct** — the distractor is defensible enough to be a second right answer → the item
     bounces (dimension-1 failure by definition)
   - **legitimately hard** — the key stands; the item is difficult in the intended way → record
     and keep
5. Low-confidence misses are recorded as difficulty signal (they inform pitch review, dimension
   5) but do not require human adjudication — they carry the recorded verdict
   `difficulty_signal` so the artifact stays machine-checkable
   ([shape](#artifact-shapes)): every miss carries *an* adjudication verdict; only confident
   misses need a human behind theirs.

## 1b · Cue-only solve (S5b) {#cue-only-solve}

**Why this stage exists separately from the blind solve:** §1's blind solve is run by a
*knowledgeable* examiner, and that makes it structurally unable to answer one question — is the
bank solvable from its **surface** alone? A knowledgeable examiner scoring 100% blind is evidence
FOR cueing exactly as much as evidence for key correctness: a solver who knows the subject cannot
tell which channel (knowledge or surface regularity) produced each answer (aif-c01 round 1 proved
it — the 100% blind solve was cue-confounded, L-0020). The two instruments answer different
questions and need different solvers:

| | §1 blind solve | §1b cue-only solve |
|---|---|---|
| Solver | knowledgeable examiner | zero-knowledge attacker (mechanical strategies only) |
| Question answered | is the key right? is the pitch right? | does the surface leak the key? |
| 100% means | keys correct — or cues confounded (L-0020) | the exam is fully blind-passable: FAIL |

**Instrument (machine, no judgment):** `node tools/exploit-scan.mjs <slug>` — the committed
strategy set (best fixed letter, longest option, best fixed MR set, listed-order SM with wrap)
plus the per-cue rates (length rank, rider balance, named entity). The same tool runs in CI and
in the root `gate` script, exiting 1 whenever any exam's blind score reaches its pass mark — the
hard floor is enforced on every push, not just at S5.

**Report two numbers** in the eval report, for the bank AND each served form (`--json` emits both
scopes' inputs):

- **blind** — the zero-knowledge attacker's combined score as a fraction (the tool's `pct`).
- **k_req = (threshold − blind) / (1 − blind)** — the fraction of items a candidate must
  *genuinely know* to pass, given that surface strategies answer the rest: a candidate who knows
  fraction k scores k + (1 − k)·blind. k_req is the exam's real knowledge bar; cueing erodes it
  silently while the nominal pass mark stays constant.

**Publication ceiling** (Gate 2, Oliver-approved 2026-08-19). With `random` = the expected
zero-cue guessing score for the form's format mix, and `k_req@random = (threshold − random) /
(1 − random)`:

- **blind ≤ 1.35 × random**, AND
- **k_req ≥ 0.85 × k_req@random.**

Worked example (63-item form, threshold 75%, random 25%): k_req@random = (0.75 − 0.25)/0.75 =
0.667, so the ceiling requires blind ≤ 33.75% and k_req ≥ 0.567. Pre-fix ccar-p measured blind
86% → k_req = −0.79: surface strategies alone overshot the pass mark, so the exam certified
test-wiseness, not knowledge — and §1's blind solve could never have shown that.

Machine vs examiner split: the exit-1 hard floor (blind ≥ threshold) is machine-enforced by
`tools/exploit-scan.mjs` on every CI run; the 1.35×/0.85× ceiling arithmetic is computed by the
examiner at S5b, recorded in the eval report, and checked at the publication preflight
([06 · preflight](06-provenance-publishing.md#preflight) item 4). The validator's cue checks
([04 · invariants](04-validation.md#invariants)) bound the individual surface features; S5b
scores their combined *consequence* against the pass mark.

## 2 · Codex advisory cross-solve {#codex}

The author and the judge share Claude weights, so a convergent blind spot — author and examiner
both preferring the same wrong reading — is invisible to a single-family eval. The cross-model
check (plan Decision 9):

1. Feed the **same keyless form** to the `codex` CLI and collect its answers. **The instrument
   exists and is runnable: `node tools/codex-crosssolve.mjs <slug>` [`--batch N`] [`--bank`].**
   It renders each item stem-and-options only — no key, no rationale, no pattern tags, no concept
   metadata — batches them through `codex exec`, normalises all three answer formats (single
   choice, multiple response, scenario matching), diffs against the key, and writes
   `eval/codex-solve.json`. Default scope is the **served form** when a `selection.json` exists;
   `--bank` covers the whole bank. Free at the point of use under ChatGPT auth — no API spend,
   so it needs no cost approval.
2. Build the **three-way disagreement matrix** per item — Claude's blind answer, Codex's answer,
   the key:

   | Claude vs key | Codex vs key | Reading |
   |---|---|---|
   | agree | agree | clean — no action |
   | miss | agree | Claude-side miss — already handled by blind-solve adjudication |
   | agree | miss | Codex dissent — sample for Gate 2 |
   | miss (same option) | miss (same option) | **convergent miss — strongest miskey signal in the whole protocol**: two independent model families prefer the same non-keyed option |
   | miss | miss (different options) | ambiguity signal — the item may not have a single defensible best answer |

3. **ANY disagreement in any combination → the item is auto-added to the Gate 2 human sample.**
   That is the entire enforcement: Codex results are **advisory, never a blocker by themselves**
   (Stellar rule — a cross-model opinion routes to a human; it does not gate a pipeline). Record
   the matrix in `eval/blind-solve.json` alongside the Claude solve, or in `eval/codex-solve.json`
   where the tool writes it.

If the `codex` CLI is unavailable in the session, record that fact in the eval report and
proceed — an advisory instrument that is missing is noted, not blocking. Gate 2 then samples
without the cross-model signal, and says so.

### How to read agreement — the interpretation rule {#codex-interpretation}

**Agreement is not clearance.** A future examiner reading a clean cross-solve must not treat it
as a dimension score, a pass, or a substitute for any part of the Gate 2 deep read. The rule:

| The cross-solve **is** evidence about | The cross-solve is **not** evidence about |
|---|---|
| **Key correctness** — whether the keyed option is defensible to a solver that did not write the item and never saw the key | **Dimension 1 · co-correctness** — the solver reports its *best* option, and was never asked whether a second option is also defensible |
| The **specific decorrelation failure** this instrument exists to catch: author and examiner sharing weights *and* sharing a confident misreading | **Dimension 2 · distractor plausibility** — a distractor can be transparently weak or quietly co-correct and produce the same agreement |
| | **Dimension 5 · difficulty pitch** — a capable model's answer says nothing about where a human candidate sits |

**And agreement can be circular.** By the same argument [§1b](#cue-only-solve) uses to refuse a
100% blind solve as proof of unexploitability (L-0020): two capable models agreeing may mean both
read the subject, or may mean **both read the same surface**. The cross-solve cannot distinguish
those on its own. What breaks the circularity is that the **cue instruments measure that surface
independently** — `tools/exploit-scan.mjs` scores a zero-knowledge attacker who has only the
surface. So the finding that carries weight is the *conjunction*:

> surface signal at or near chance (S5b inside the publication ceiling) **AND** cross-family
> agreement on the key ⇒ the agreement is about the subject, not the surface.

Either half alone proves nothing. Record both numbers together in the eval report, or neither.

**Record with the result, every time:** the scope (form vs bank — a form-scope run leaves every
reserve-only item without a cross-model column, and the report must say how many), the exact
invocation, and — a gap in the 2026-08-20 wave worth closing — the **resolved model id, the run
timestamp, and the bank revision solved**, none of which `tools/codex-crosssolve.mjs` currently
writes into `eval/codex-solve.json`. Also note the instrument's own limits: items are batched, so
answers are not independently drawn per item; and unlike [§1](#blind-solve) the solver returns an
answer only — **no confidence grade and no reasoning line** — so a cross-solve answer can never be
adjudicated the way a blind-solve miss can.

## 3 · The judge rubric — six dimensions {#judge}

Every bank item is scored 1–5 on six dimensions → `eval/judge-scores.json`. Before scoring an
item, the judge must **argue FOR each distractor first** — write the strongest honest case that
the distractor is correct, *then* score. A judge who has not tried to defend an option cannot
score dimension 1 or 2 honestly (skipping this step is exactly the anchoring failure the
independence rule exists to prevent).

| # | Dimension | 5 looks like | 2 looks like |
|---|---|---|---|
| 1 | **Single defensible best answer** | every distractor's best case loses to the key on the concept's own terms | a distractor's best case is as strong as the key's (co-correct) |
| 2 | **Distractor plausibility** | each wrong option is a real practitioner's answer, from a distinct pattern | any option eliminable without engaging the scenario |
| 3 | **Concept alignment** | the item tests exactly its `primary_concept`; the keyed reasoning *is* the concept | the item drifts — solvable without the concept, or tests a neighbour |
| 4 | **Rationale traceability** | rationale argues in canonical vocabulary; a candidate can find the rule in their study material | rationale asserts rather than argues, or uses vocabulary the concept doesn't carry |
| 5 | **Difficulty pitch** | good-vs-best; the surface points away from the principle | right-vs-wrong; the surface hands the answer over |
| 6 | **Scenario realism** | concrete, internally consistent, professionally plausible setting | toy setup, contradictory details, or wardrobe that no practitioner would recognise |

**Thresholds (consolidated, plan-of-record):**

- **No dimension ≤2 ships.** Any 1 or 2 on any dimension → the item bounces (or, past the bounce
  cap, goes to Gate 2 for a human decision).
- **3s are flagged to Gate 2.** A 3 ships only if the Gate 2 deep-read accepts it — every item
  carrying any 3 joins the Gate 2 sample automatically.
- 4s and 5s ship silently.

## 4 · The bounce protocol {#bounce}

Below-threshold items return to exam-author **with the score report** — the report is the whole
briefing, so it must stand alone:

```jsonc
// appended to eval/judge-scores.json per bounced item
{
  "id": "3.07",
  "bounce": 1,                          // 1 or 2 — the cap is 2
  "failing_dimensions": { "2": 2 },     // dimension → score, every score ≤2 (and any 3s noted)
  "judge_case": "Option B collapses under its own terms: ... (the argued-FOR case and why it failed)",
  "defect_class": "distractor-implausible",  // the error-class label — feeds the ratchet
  "required_fix": "rebuild B from a different pattern; D19 here is a giveaway"
}
```

Rules:

- Rework follows [`03-authoring-guide.md`](03-authoring-guide.md#procedure) — the failing
  dimension maps to the procedure step to redo; the author fixes what the report indicts, not
  whatever else looks tempting.
- Re-authored items re-enter S5 and are **re-scored fresh** — full rubric, new blind-solve on the
  reworked item, no partial credit.
- **Cap: 2 bounces per item.** Still failing → human decision at Gate 2: waiver (recorded in
  `signoff.md`), human-directed rewrite, or replacement item for the same concept (coverage never
  silently drops).
- `defect_class` labels are the ratchet's raw material: a class appearing across items or exams
  climbs the enforcement ladder ([`00-pipeline.md`](00-pipeline.md#ratchet)) toward an
  authoring-guide rule or a validator check.

## 5 · The overlap screen {#overlap}

The originality check → `eval/overlap-report.md`:

- **Where source texts are lawfully held** (Tier 1 sets still accessible, licensed imports, own
  course notes): run a shingle-overlap comparison (the same n-gram shingling the validator's
  near-duplicate check uses) between every bank item's stem/options/rationale and the held
  texts. Matches beyond incidental technical phrases → the item bounces for re-expression, and
  the finding is treated as a clean-room breach to investigate, not just a rewrite.
- **Where sources were never held as text** (distilled classification-only, texts not retained):
  no comparison is possible — so the report **records the process control instead**: which
  derivation artefacts the authoring session worked from, the statement that those artefacts
  contain zero source text (the [clean-room rule](01-source-distillation.md#clean-room)), and
  the artefacts' commit hashes. The control *is* the evidence; the report says so explicitly
  rather than pretending a scan happened.
- Canonical **vocabulary terms** ([Artefact B's bounded exception](01-source-distillation.md#artefact-b))
  are expected shared strings and are excluded from overlap findings.

## Artifact shapes — the machine-checked contract {#artifact-shapes}

The `publication-preflight` check parses both JSON artifacts against these exact shapes; an
empty or `{}` file fails a published exam. This section is the authoritative shape definition —
the validator reads it as its spec.

`eval/blind-solve.json`:

```jsonc
{
  "items": [                       // REQUIRED, non-empty — one entry per bank item
    {
      "id": "3.07",                // bank item id
      "chosen": "B",               // the examiner's blind answer
      "keyed": "C",                // the answer key
      "confidence": "high",        // high | medium | low
      "reasoning": "…",            // the pre-key one-liner
      "match": false,              // REQUIRED boolean: chosen === keyed
      "codex": { "chosen": "B" },  // optional: the advisory cross-solve matrix entry
      "adjudication": "miskeyed"   // REQUIRED when match is false:
                                   // miskeyed | co_correct | legitimately_hard | difficulty_signal
    }
  ]
}
```

Machine assertions: `items[]` present and non-empty; every entry with `match: false` carries a
non-empty `adjudication`. (`difficulty_signal` is the recorded verdict for low-confidence
misses; the three human verdicts are for confident misses — the machine checks presence, Gate 2
checks substance.)

`eval/judge-scores.json`:

```jsonc
{
  "items": [                       // REQUIRED, non-empty — one entry per bank item
    {
      "id": "3.07",
      "scores": { "1": 4, "2": 3, "3": 5, "4": 4, "5": 4, "6": 5 }  // ALL six dimensions, 1–5
    }
  ],
  "bounces": [ /* bounce records, shape in §4 above */ ]            // optional
}
```

Machine assertions: `items[]` present and non-empty; every item's `scores` carries all six
dimension keys `"1"`–`"6"` as numbers; **no dimension ≤2** anywhere. `eval/overlap-report.md`
must exist and be non-empty (its content is process evidence, judged at Gate 2, not parsed).

## What S5 hands forward {#handoff}

To S6/Gate 2: `eval/blind-solve.json` (with the Codex matrix), the S5b cue-only numbers — blind,
k_req, and the ceiling verdict per bank and served form, recorded in the eval report
([§1b](#cue-only-solve)) — `eval/judge-scores.json` (scores,
bounce records, distractor cases), `eval/overlap-report.md`, and the assembled **Gate 2 sample
list** — every auto-flagged item (any 3, any cross-model disagreement, any bounce survivor, any
adjudication still open). The publication preflight
([`06-provenance-publishing.md`](06-provenance-publishing.md)) checks these artifacts exist and
the thresholds hold before any status flip.
