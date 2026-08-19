# ADR-0006 — Answer-position and shape cues: root cause, fix wave, ratchet

**Status:** accepted (2026-08-19) — CCAR-P remediated; seven-bank rework wave scoped
`pnpm validate ccar-p` 89-warning set · **Intended path on approval:**
`docs/decisions/0006-answer-position-and-shape-cues.md`

## Context

`pnpm validate ccar-p` emits 89 warnings in three classes: `answer-length-cue` (55),
`key-position-distribution` (7), `concept-convergence` (27). Measured on the served
63-item form-1, a zero-knowledge candidate scores **54/63 = 86% against a 75% pass
mark** ("always B" 40/44 SC, "A+B" 9/14 MR, listed-order mapping on all 5 SM items);
"pick the longest option" alone scores 41/44 SC (93%). The same bank is live publicly
at `oliveradventopia-ux/ccar-p-mock-exam` (GitHub Pages). The player's seeded display
shuffle (BD-1 render hardening, `apps/web/lib/shuffle.ts`) moves screen *positions*
only — the original letter label travels with its option
(`apps/web/components/question-card.tsx:119` renders `{key}.`), so letter-favourite
strategies survive it, and `tools/export-exam.mjs` + the public single-file build see
raw JSON order (`methodology/04-validation.md`: "data-level balance is still required
because exports and print forms see JSON order").

### Root cause (evidence, not speculation)

**1 · The import did not create the bias — it preserved it, byte-faithfully.**
`tools/import-ccar-p.mjs:193-219` copies `options`, `answer`, `distractor_patterns`
and `rationale` verbatim (field renames only: `recap_rule`→`syllabus_rule`, long
domain names→`d1..d7`). Measured stats are identical on both sides:

| | source repo `data/questions.json` | Mockka `content/ccar-p/questions.json` |
|---|---|---|
| SC keys | B 53/59 (90%), C 6/59 | identical |
| MR key sets | A+B 15/21 (71%) | identical |
| SM listed-order prefix | 5/5 | identical |
| Longest-option strategy | 55/59 SC (93%) | identical |

The import's determinism contract (L-0003: re-run → byte-identical, verified 85/85)
makes this a mechanical proof, not an assumption.

**2 · The bias was born at the PR #1 re-authoring, not in the original single-file
build.** The archived original (`archive/initial-build/Private_Mock_Exam_CCAR-P by
Oliver Lau.html`) carries a *spread* key distribution — SC answers A:6 B:14 C:7 D:17
— and its stems differ from the current bank (it is a predecessor exam, not the same
items). The 85-item bank authored fresh in the source repo's PR #1 (`966bd85`,
"Author the CCAR-P question bank and build the exam app") was **B 53/59 from its
first commit**. Nothing downstream introduced or amplified it.

**3 · The authoring cause: an LLM-session habit, unconstrained.** Two independently
authored banks each converged on a *different* constant — aif-c01 keyed **A** in
67/67 items (S5 round-1 report, `content/aif-c01/derivation/eval-report.md` BD-1);
ccar-p keyed **B** in 90%. Two authors, two constants, same mechanism: the composing
session writes the correct option first (or into a habitual slot) and composes it
most fully — the key gets the justification rider and the extra qualifying clause
(BD-2: keyed option longest in 55/59, median ratio 1.56). A per-item habit is
invisible per item and total across a bank.

**4 · The process cause: nothing forced distribution or shape parity.**
`methodology/03-authoring-guide.md` had (and has) no key-placement or shape-parity
rule; no validator check existed until 2026-08-16 (`6be7ddf`). L-0014 records the
sharper version: the S2 distillation *predicted* the cue class in prose
("authoring must keep option shapes parallel within an item",
`content/aif-c01/derivation/source-declute-serverside.md`) and the warning did not
survive the stage boundary — prose warnings die; only checks and checklist rules live.

**5 · Length cue and position cue share the authoring cause but are independent
defects.** Shared origin: both are artifacts of "compose the key first, most fully".
Independent thereafter: aif-c01's rework needed two separate commits (`ea967ce` trim,
`1b1596c` permute) because permutation cannot fix length (text is letter-invariant)
and trimming cannot fix position. They are fixed by different mechanisms and verified
by different checks. The convergence warnings (27) are unrelated to both — an
S3-inventory bookkeeping signal, not a candidate-facing cue.

### Exploit statistics, all eight banks (mechanical position/length only)

Measured on each bank and its served form (script: scratchpad `cue-stats.mjs`,
proposed as `tools/cue-stats.mjs`). ZK = best-fixed-letter SC + best-fixed-pair MR +
listed-order SM, on the served form. `ai-900` is an empty draft (0 items, excluded).

| Bank (form) | SC best letter | SC longest-pick | MR best pair | SM listed | ZK score | Pass | ZK passes? |
|---|---|---|---|---|---|---|---|
| **ccar-p** (63) | **B 40/44 (91%)** | **41/44 (93%)** | **A+B 9/14** | **5/5 prefix, 4/5 full** | **49–54/63 = 78–86%** | 75% | **YES** |
| aif-c01 (50) | B 11/40 (28%) | 8/40 (20%) | 1/7 | 0/3 | 12/50 = 24% | 70% | no |
| ai-901 (42) | B 12/34 (35%) | 17/34 (50%) | 1/5 | 0/3 | 13/42 = 31% | 70% | no |
| az-900 (50) | A 12/42 (29%) | 20/42 (48%) | 1/5 | 0/3 | 13/50 = 26% | 70% | no |
| ccao-f (60) | A 14/51 (27%) | 25/51 (49%) | 1/9 | 0/0 | 15/60 = 25% | 72% | no |
| clf-c02 (50) | D 11/41 (27%) | 11/41 (27%) | 2/9 | 0/0 | 13/50 = 26% | 70% | no |
| gcp-cdl (60) | A 14/54 (26%) | 23/54 (43%) | 1/6 | 0/0 | 15/60 = 25% | 70% | no |
| sy0-701 (90) | B 22/78 (28%) | 30/78 (38%) | 2/9 | 0/3 | 24/90 = 27% | 81% | no |

ZK range for ccar-p: 49/63 counting only the 4 SM items fully solved by
listed-order-with-wrap, 54/63 crediting all 5 (the parallel adversarial lane's
54/63 measurement stands as the headline; both clear the 75% pass mark).

Validator-warning blast radius: `answer-length-cue` fires **only on ccar-p**
(55 findings = 33 error-tier ratio >1.5 + 16 warn-tier >1.25 + 6 rider-only, across
**49 distinct items**, 36 on form-1). `key-position-distribution` fires only on
ccar-p. `concept-convergence` fires on ccar-p (27 = 18 high-with-single-source +
9 normal-despite-multi), az-900 (5, all normal-despite-multi) and ccao-f (34, all
normal-despite-multi). The 38–50% longest-pick rates on az-900/ccao-f/gcp-cdl/ai-901
sit below the check's ratio thresholds and compose to ZK 24–31% — far under any pass
mark; judgment on whether they warrant an authored pass is deferred to the
adversarial-sweep lane's findings.

## Decision

Fix ccar-p in a two-lane wave (mechanical permutation + authored trimming), applied
**upstream in the source repo and propagated by re-running the deterministic
import**; accept the convergence divergence as already-documented authoring
judgment; then ratchet both cue checks warn→error and codify
distribute-by-construction in `methodology/03`.

### 1 · Key randomization — a reusable seeded tool, run against the source repo

Build **`tools/permute-keys.mjs`** (Mockka, reusable on ANY bank — it reads only the
format-invariant fields of `questions[]`, identical in both repos' schemas):

- **Algorithm (deterministic, seeded, no diff churn):** seed string fixed in the
  tool invocation and recorded in the commit message (e.g. `ccar-p-rebalance-1`).
  Target SC letter counts are computed largest-remainder per letter, **balanced
  within the served form first** (44 SC → 11/11/11/11), then reserves (15 → 4/4/4/3);
  items are assigned target letters in an order derived by sorting item ids by
  `hash(seed + id)` (stable across re-runs, independent of file order — the L-0003
  determinism property). Each item's non-key options permute by a hash-derived
  rotation. MR: target key *sets* spread across the C(5,2) pair space so no set
  exceeds `mr_key_set_max_share` (0.5), same hash-assignment; answer arrays re-sorted
  alphabetically after mapping. SM: seeded shuffle of `matching_options` order only
  (the `answer` map is scenario-id → option *text*, so reordering the display list
  cannot touch correctness); scenario order untouched; re-shuffle until no
  listed-order prefix ≥ 3 (deterministic retry counter in the hash salt).
- **Invariant set that moves together (SC/MR):** the `options` letter→text map,
  `answer` letter(s), `distractor_patterns` keys, `rationale.distractors` keys.
  `rationale.correct` and all texts are untouched.
- **Why mechanical is safe HERE, argued not assumed:** the option-keyed rationale
  invariant (`methodology/03-authoring-guide.md` §"The option-keyed rationale
  invariant") makes re-lettering structurally sound — "Reorder options, re-letter
  them, swap the key: the rationale follows" — and the validator *enforces* it:
  `rationale-letter-reference` (error-level) forbids letter references in rationale
  text (regex trialled on the full ccar-p bank, zero false positives), and
  distractor-coverage requires exactly one option-keyed entry per non-key option.
- **Where a tool is NOT safe, scanned not assumed:** options/stems that reference
  other options by letter ("both A and B", "option C", bare "A and B"), positional
  options ("all/none/both of the above/these"), and all-numeric option sets whose
  display convention is ascending. **Measured counts across all eight banks: 0, 0
  and 0** (three regex families over every option, stem, matching_option and
  scenario text). The tool still ships these scans as a built-in preflight that
  refuses to run and lists offending items — future banks may violate what today's
  do not.
- **Verification:** (a) the tool's own post-permutation invariant check — option
  text *sets* unchanged per item, keyed-option TEXT identical before/after, each
  distractor rationale still attached to its option text, `distractor_patterns`
  values follow their texts; (b) `pnpm validate ccar-p` → all 7
  `key-position-distribution` findings gone, `rationale-*` checks green; (c)
  **`tools/cue-stats.mjs`** (the proof script used for this ADR, committed) printing
  the zero-knowledge exploit score before/after — expected drop 78–86% → ~25–30%;
  (d) upstream `tools/validate.mjs` + `tools/app-test.mjs` green; (e) a 10-item
  Gate-2-style spot read (full S5 for ccar-p remains a separately scheduled wave —
  the bank is `in_review`, S5 never ran; per L-0020 that future round's blind solve
  doubles as the definitive zero-rekey-errors proof).
- **Reusable-tool vs one-off:** reusable tool. The defect class recurred across two
  independently authored banks; aif-c01's fix was a hand wave (`1b1596c`), the third
  occurrence should not be. The tool also becomes the S4 "author then permute"
  final step (§5).

### 2 · Length/shape cues — authored trimming, not mechanical (49 items)

Per the aif-c01 wave (`ea967ce`): trim the keyed option's justification riders into
`rationale.correct` (where the argument already lives nearly verbatim — the L-0015
finding), keep option shapes parallel, occasionally argue a distractor up.
Not mechanizable: each edit is a content judgment against `keyword-presence`,
`number-drift`, en-GB style, and the L-0021 overshoot trap (trim toward the middle
of the option-length band — a never-longest key is itself a weak cue; aif-c01 landed
at 44% strictly-shortest and logged it).

- **Scope:** 49 distinct items (33 error-tier, 16 warn-tier-only, 6 rider-only);
  36 on form-1 — those first.
- **Batching:** by domain, d1→d7 (mirrors S4 batch discipline and L-0010 cap
  budgeting), validator after every batch; target "0 answer-length-cue findings"
  as the machine-checked exit (the L-0017 pattern).
- **Exam-author inputs:** the 55-finding list with ratios (validator output), the
  option-keyed rationale invariant, L-0015/L-0018/L-0021, the aif-c01 models-to-copy
  items (1.14, 5.08, 3.13, 1.07), and the source-repo working path (edits land
  upstream, §4). Clean-room holds — the bank is authored material, not source text.

### 3 · Convergence (27) — accept as documented authoring judgment; no data change

`methodology/02-master-inventory.md` §method already blesses exactly this
divergence, naming ccar-p's 27 ("divergence (e.g. hand-tuned exam seating, as in
ccar-p's 27) is allowed as documented authoring judgment, but it is always visible,
never silent"). The priority field seats the exam form at S6; recomputing from
`sources[]` would flip 18 high→normal + 9 normal→high, invalidating the shipped
form-1 seating and its selection notes for zero candidate-facing benefit (priority
is never rendered to candidates). The warnings stay visible by design — silencing
them via an annotation field would be an author-operated off-switch (L-0002 class).
Same policy covers az-900 (5) and ccao-f (34): their S3 sessions shipped with the
check live. This check does **not** promote to error — computed-vs-asserted
divergence is legitimate; the other two classes are not.

### 4 · Upstream propagation — source repo stays source of truth for this wave

The public repo (`~/LifeOS/ccar-p-mock-exam`, GitHub Pages) is the live defective
artifact. Both fix lanes execute **there**, on a feature branch:
trim commits (§2) → permute run (§1) → `node tools/build.mjs` (rebuilds
`index.html`; it inlines only the 63 selected items) → its `tools/validate.mjs` +
`tools/app-test.mjs` → PR through its normal flow. Mockka syncs by re-running
`node tools/import-ccar-p.mjs` (twice, requiring a stable diff — the L-0003/L-0023
contract), committing the regenerated `content/ccar-p/*.json` in a Mockka PR.
This needs **zero new sync tooling** and keeps L-0023 intact ("content for an
import-generated package goes into the import script, never the output" — here,
into the import's *input*).

**Source-of-truth going forward:** upstream remains SoT for ccar-p substance
*until ccar-p enters its own S5/S6 wave* (bounce loops are impractical cross-repo).
At that point — a separate, flagged decision — the cord is cut: retire
`import-ccar-p.mjs` to `archive/`, declare Mockka's copy SoT, and propagate outward
via a small reverse-export (renames inverted), or freeze the public repo with a
pointer to the Mockka player. The Mockka-side divergences (manifest intro block,
`syllabus_rule` renames) are import-*generated*, not hand-maintained, so nothing is
lost either way.

### 5 · Ratchet — promote warn→error, and distribute-by-construction in 03

Sequenced strictly **after** §1+§2 land and `pnpm validate` shows zero findings of
both classes across all packages (per `methodology/04-validation.md` #adding-a-check
step 4, already pre-committed in both checks' code comments: "promote to error once
the content waves land, never weaken"):

- `key-position-distribution` and `answer-length-cue`: warn→error (one-line tier
  flips in `packages/engine/src/validate/index.ts`), plus fixtures.
- `methodology/03-authoring-guide.md` additions: (a) **author options in argument
  order, then permute as the final S4 batch step** with `tools/permute-keys.mjs`
  (deterministic seed recorded in the batch commit) — distribution by construction,
  not by vigilance; (b) shape-parity rule: compose the key to the same grammatical
  shape and length band as the distractors, argument goes to `rationale.correct`
  (L-0015/L-0018 codified); (c) cite both checks by name (L-0001).
- Optional follow-up (not this wave): L-0021's inverse-cue bound (key
  strictly-shortest share ≤ 40%, warn) as a new check.

### 6 · Blast radius

The content wave is **ccar-p only**. Every other bank measures near-uniform on
position (§table), and `answer-length-cue`/`key-position-distribution` fire on no
other package, so the warn→error flip is safe for all eight the moment ccar-p's
wave lands. The elevated raw longest-pick rates (az-900 48%, ccao-f 49%, ai-901
50%, gcp-cdl 43%) compose to ZK 24–31% and sit below the check's thresholds; whether
they merit a later polish pass is deferred to the adversarial-sweep lane's report.

### 7 · Effort and sequencing

| Step | Depends on | Est. |
|---|---|---|
| A · `tools/permute-keys.mjs` + `tools/cue-stats.mjs` + `node --test` coverage | — | 1 session |
| B · trim wave upstream, 49 items in 7 domain batches | — (parallel with A) | 2–3 sessions |
| C · permute run upstream + re-import + proofs + `build.mjs` + both PRs | A and B | 1 session |
| D · ratchet flip + methodology/03 edits + fixtures | C merged | ½ session |

A ∥ B parallel; C strictly after both (permute after trim, mirroring aif-c01's
commit order — trims edit text under stable letters, then re-keying is one clean
mechanical diff); D strictly after C. No spend, no new dependencies, no accounts.

## Consequences

- Zero-knowledge score on ccar-p falls from 78–86% to ~25–30% (chance), proven by a
  committed measurement script, and the class is closed by construction for every
  future bank (S4 permute step + error-tier checks) — not by author vigilance.
- The public artifact gets the same fix through its own build, and the deterministic
  import remains the single seam between the repos until ccar-p's S5/S6 wave forces
  the SoT flip (pre-decided in principle here, executed as its own decision).
- The 27/5/34 convergence warnings remain visible in `pnpm validate` output
  permanently — accepted cost; visibility is the design.
- ccar-p's rationales/`distractor_patterns` were never letter-referencing
  (validator-enforced), so the permutation carries no rekey risk beyond what the
  invariant checker + spot read cover; the definitive blind-solve proof rides the
  already-owed ccar-p S5 round.

## Decisions Oliver must make

1. **Approve the wave shape** — mechanical permutation via reusable
   `tools/permute-keys.mjs` (recommended) vs authored re-keying.
2. **SoT ruling** — upstream-first now, flip to Mockka at ccar-p's S5/S6 wave
   (recommended), vs cutting the cord immediately.
3. **Convergence** — accept-as-documented (recommended, no data change) vs
   recompute-and-reseat (invalidates shipped form-1 seating).
4. **Public-repo PR approval** — the upstream merge changes the live public exam
   under Oliver's name (treated as a one-way door: public artifact).
5. **Ratchet timing** — flip warn→error immediately after the wave (recommended,
   pre-committed in the check comments) vs holding at warn.
6. **Schedule ccar-p S5/S6** — out of scope here, but flagged: the bank is
   `in_review`/unaudited, and its S5 round is the definitive rekey proof (L-0020).
