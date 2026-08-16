# LEARNING — project-local (siloed)

Project-specific lessons only. Generic build-practice lessons promote to the harness + global via the daily
reconcile (templates/harness/learn-loop.md#routing). Entry schema:

```
## L-XXXX · <short title>
- date: YYYY-MM-DD · agent: <who> · scope: local · tier: <area>
- lesson: <the reusable insight, one sentence>
- why: <root cause / evidence>
- how to apply: <concrete action next time>
```

## L-0001 · Enforcement claims name their check function
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: docs/validator
- lesson: any sentence claiming "the validator enforces X" or "structurally impossible" must name the check function that enforces it; enforce: rule.
- why: P0 docs claimed the provenance chain was enforced while `concept-source-registry` only checked ids existed in the manifest — the doc ran ahead of the code (review F1).
- how to apply: when writing an enforcement claim, cite the check name (`04-validation.md#invariants` is the pattern); if no check exists yet, build it first or soften the claim.

## L-0002 · Manifest-driven thresholds need bounds
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: validator
- lesson: a manifest knob that gates a check without bounds is an author-operated off-switch; enforce: check (F5 implements — `manifest-shape` bounds `near_duplicate_jaccard` ∈ (0,1] and rejects empty `pattern_caps` when the bank declares patterns).
- why: the broken-exam fixture shipped `pattern_caps: {}` and nothing objected — the cap check silently never ran.
- how to apply: every new manifest-driven threshold lands together with a bounds assertion in `manifest-shape` and a fixture exercising the disabled form.

## L-0003 · Deterministic import + byte-diff is the cheapest fidelity proof
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: content-migration
- lesson: re-running a deterministic import into scratch and byte-diffing against the committed output is the cheapest migration-fidelity proof there is (validated: 85/85 ccar-p items identical).
- why: the import script's same-input → byte-identical-output contract turns "did the migration lose anything?" into `git status` returning empty.
- how to apply: keep import scripts deterministic (stable ordering, no timestamps); after any script change, re-run twice and require an empty diff on the second run.

## L-0004 · Mojibake regexes carry raw bytes — port byte-for-byte
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: validator
- lesson: the mojibake detection regex contains raw `–¿` continuation-byte ranges that survive only if the file is copied byte-for-byte; verify with `xxd`, never retype it.
- why: retyping or "cleaning" the character class silently changes which byte sequences it matches — the check keeps passing while detecting nothing.
- how to apply: port encoding-sensitive literals by copy, then `xxd` the region in source and destination and compare; the control-byte harness check guards the rest of the tree.

## L-0005 · Explicit-path `git add` is load-bearing in shared-repo lanes
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: git-hygiene
- lesson: with concurrent lanes in one repo, `git add <explicit paths>` is load-bearing — `git add -A` in one lane commits another lane's half-done work.
- why: the P0 scaffold ran 3 lanes against one working tree; only explicit-path staging kept commits attributable to their lane.
- how to apply: always stage by explicit path (kept even in this single-lane fix wave); treat `git add -A`/`.` as forbidden while more than one workstream can touch the tree.

## L-0006 · Never `pnpm build` while `next dev` is running
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: web-tooling
- lesson: `pnpm build` while `next dev` runs corrupts the shared `.next` directory — kill the dev server before building, and restart dev after builds.
- why: both processes write `.next` concurrently; the corruption shows up as unrelated-looking build/runtime errors that vanish on a clean rebuild.
- how to apply: the gate (`pnpm gate`) must run with :4400 down; after any `pnpm build`, restart the dev server rather than trusting the running one.

## L-0007 · Effects that reset their own trigger re-fire cleanup — do DOM work post-commit
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: react
- lesson: a React effect that resets its own trigger state re-fires its cleanup mid-sequence; do the DOM work synchronously in the post-commit effect before resetting the trigger (the jump-scroll bug class).
- why: the navigator jump effect scrolls to a question and then clears `jumpTarget`; clearing first re-fired the effect and killed the scroll — same shape as the F3 timer loop (an effect whose deps change as a consequence of its own run).
- how to apply: in any effect, order = read trigger → do DOM work → reset trigger; and never put identity-unstable objects (fresh per render) in effect deps — memoize at the source.

## L-0008 · Pick bank size by tie-free largest-remainder rounding within the 1.3–1.4× band
- date: 2026-08-16 · agent: exam-author · scope: local · tier: methodology
- lesson: when sizing a bank, choose the size in the 1.3–1.4× band whose largest-remainder per-domain allocation is tie-free (aif-c01: 67 unique vs 68's d4/d5 tie); per-domain counts are validator-enforced, so an arbitrary tiebreak is indefensible at Gate 1.
- why: the validator pins bank_items per domain; a tied allocation forces an undocumented judgment call into a machine-checked number.
- how to apply: candidate rule for methodology/02 §contract (enforce: note → rule); compute allocations for each candidate size before committing the contract.

## L-0009 · Blueprint-as-syllabus inverts source-composition stats — interpret convergence accordingly
- date: 2026-08-16 · agent: exam-author · scope: local · tier: methodology
- lesson: when the blueprint IS the syllabus (no course-recap layer), practice-only share drops to ~0% (aif-c01) vs CCAR-P's 30%, and convergence measures corroboration of the blueprint rather than union breadth.
- why: every concept necessarily traces to the blueprint source, so composition percentages shift meaning between exam shapes.
- how to apply: read the source-composition table against layers.syllabus_rules; candidate explanatory line for methodology/02. (Stellar-promotion candidate from the same run — "check schemas' designed-in slots like sources[].items before proposing schema changes" — held for Oliver's named promotion confirmation per the loop gate.)

## L-0010 · Budget pattern caps per batch, not against the final bank
- date: 2026-08-16 · agent: exam-author · scope: local · tier: methodology
- lesson: pattern-frequency-caps computes over the partial bank, so a cap can trip at a domain boundary while fine at full size (D03 hit exactly 10% after d1's 39 slots).
- why: incremental batch commits run the validator on a shrinking denominator.
- how to apply: allocate cap budgets per batch during S4 (candidate rule for methodology/03 §procedure).

## L-0011 · number-drift binds unit suffixes — match the stem's exact figure+unit pairing
- date: 2026-08-16 · agent: exam-author · scope: local · tier: methodology
- lesson: "9,000 tokens" in a rationale vs "9,000 words" in the stem fails number-drift; never attach a suffix-list unit to a rationale figure unless the stem carries that exact pairing.
- why: the check normalizes figure+unit as one token.
- how to apply: quote numbers with their stem units verbatim in rationales.

## L-0012 · Structural rules can retire calibration caps
- date: 2026-08-16 · agent: exam-author · scope: local · tier: methodology
- lesson: one-pattern-per-item made all-E01 service items unrepresentable — E01 landed at 3.6% vs the sources' 21% with the 30% cap never binding.
- why: a composition rule can dominate a frequency cap; the cap becomes a guard, not a constraint.
- how to apply: when adding caps at S3, note which existing structural rules already bound the behavior.

## L-0013 · Scenario-matching stems need domain-embedded framing
- date: 2026-08-16 · agent: exam-author · scope: local · tier: methodology
- lesson: a shared "For each scenario…" template across SM items risks the near-duplicate Jaccard check.
- why: SM stems share boilerplate by construction.
- how to apply: write each SM stem with domain-specific framing before the scenario list.

## L-0014 · Distillation-stage warnings convert to checks at handoff, or they die
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: methodology/validator
- lesson: a warning recorded in a distillation artefact must be converted into an S3 checklist rule or a validator check at the S2→S3 handoff — prose warnings do not survive the stage boundary; enforce: rule → check (this wave IS the check: `answer-length-cue`).
- why: BD-2 was predicted verbatim in `content/aif-c01/derivation/source-declute-serverside.md` ("authoring must keep option shapes parallel within an item") and the bank still shipped 51/57 longest-keyed items — the warning existed, the enforcement did not.
- how to apply: at Gate 1, sweep the derivation docs for "authoring must / should / never" sentences; each one either becomes a named validator check or an S3 checklist line with an owner — an unconverted warning is logged as an accepted risk, not silently carried.

## L-0015 · Keyed options that argue for themselves mark the key
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: authoring/validator
- lesson: a keyed option embedding its own justification ("X, since Y rather than Z") is a reliable key marker — the argument belongs in `rationale.correct`, and the fix is subtractive (trim the rider), not additive (pad the distractors); enforce: check (`answer-length-cue` — length-ratio tiers + rider detection).
- why: aif-c01 S5: the keyed option was longest in 51/57 SC items (median 134% of the longest distractor) and routinely the only both-sides construction; "pick the longest, most hedged option" solved the bank with zero domain knowledge, and the trimmed argument already existed nearly verbatim in `rationale.correct`.
- how to apply: when reworking a flagged item, move the rider clause into `rationale.correct` and keep option shapes parallel; models to copy per the S5 report: 1.14, 5.08, 3.13, 1.07.

## L-0016 · Advisory instruments record a retry path, never block
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: eval-tooling
- lesson: when an advisory dependency is unavailable (codex CLI present but not logged in — auth needs an interactive session outside agent authority), record the failure mode and exact retry path in the eval artifact and continue — an advisory instrument is noted-when-missing, never a gate blocker; enforce: note (already the §codex contract in `project-brief.md`).
- why: aif-c01 S5 cross-solve: `codex login status` → "Not logged in", exec probe → 401; free-first forbids agent-side signups, and blocking S5 on it would have stalled the round for a non-gating signal — the cost is real (no 3-way disagreement matrix; author and examiner share Claude weights, so Gate 2's deep read is the compensating control).
- how to apply: on any advisory-tool failure, write the artifact with status advisory-skipped + attempts + retry command for Oliver, state the lost signal and its compensating control, and proceed; escalate only if the instrument is (or becomes) load-bearing for a gate.

## L-0017 · Ship the defect-class validator check in the same wave as the bounce fix
- date: 2026-08-16 · agent: exam-author (routed by OA0) · scope: local · tier: methodology
- lesson: the round-1 bounce fixes landed fastest because the examiner's proposed checks (key-position-distribution, answer-length-cue) went live warn-tier mid-wave — "0 warnings" became a machine-checked exit for the rework.
- why: a bounce report describes instances; a check describes the class. Fixing against the check re-measures automatically.
- how to apply: when an eval finds a defect CLASS, pair the content rework lane with a ratchet lane implementing the check, in parallel.

## L-0018 · Rider-regex nuance: contrast phrasing can express the claim without key-marking
- date: 2026-08-16 · agent: exam-author · scope: local · tier: methodology
- lesson: "instead of" carries the necessary contrast inside a keyed option without tripping the since/because/rather-than rider detector; enumerated examples and doctrine clauses belong in rationale.correct.
- why: the rider check targets self-justifying keys, not contrast per se.
- how to apply: when a key must name what it displaces, prefer "instead of X" phrasing; move any "because…" argument to the rationale.

## L-0019 · Canonical eval filenames carry the CURRENT round; prior rounds get -rN suffixes
- date: 2026-08-16 · agent: exam-examiner · scope: local · tier: methodology/eval
- lesson: the preflight parses `eval/blind-solve.json` / `eval/judge-scores.json` by name, so round 2 must live at the canonical names and round 1 moves to `*-r1.json` — writing the new round to a suffixed file would leave the machine half silently validating a stale round.
- why: methodology/05 §artifact-shapes pins filenames but has no round-versioning convention; the gap surfaced at aif-c01 round 2 and was resolved by suffix-preserving copies, noted in eval-report.
- how to apply: codify the `-rN` convention in methodology/05 §artifact-shapes; until then, every re-eval round copies the outgoing artifacts to `-r<n>.json` before overwriting the canonical names.

## L-0020 · Round-2 blind solve runs BEFORE opening any round-1 artifact — and doubles as the rekey check
- date: 2026-08-16 · agent: exam-examiner · scope: local · tier: methodology/eval
- lesson: on re-eval, round-1 eval artifacts contain keys and judgments, so the fresh blind solve must be recorded first; a cue-free 67/67 on a letter-permuted bank then serves as the zero-rekey-errors proof a mechanical key permutation otherwise lacks.
- why: aif-c01 round 2 — the round-1 100% was cue-confounded (BD-1/BD-2 visible in the keyless form); the round-2 100% on the cue-free bank is the first uncontaminated key-correctness signal, and it simultaneously verified the bank-wide permutation broke nothing.
- how to apply: add the sequencing rule to the exam-eval skill for rounds ≥2 (read harness → generate keyless form → solve → only then open keys/r1 artifacts); treat a post-permutation blind solve as the rekey regression check.

## L-0021 · Subtractive shape rework can overshoot into an inverse length cue
- date: 2026-08-16 · agent: exam-examiner · scope: local · tier: authoring/validator
- lesson: after trimming keyed-option riders bank-wide, the key is now shortest-or-tied in 25/57 SC items (~44% vs ~25% uniform) — trim toward the middle of the option-length band, not the floor.
- why: `answer-length-cue` bounds the longest-key cue only; a never-longest/mostly-shortest key is a weaker but real elimination heuristic (rule out the longest option for free).
- how to apply: next authoring wave drifts key lengths back toward parity; consider a warn-tier inverse bound in `answer-length-cue` (e.g. key strictly-shortest share ≤ 40%).

## L-0022 · The per-exam README has no owning stage — preflight item 5 arrives unowned
- date: 2026-08-16 · agent: exam-examiner · scope: local · tier: methodology/publishing
- lesson: methodology/06 §readme-template defines the README's content but no S-stage produces it; aif-c01 reached S6 preflight with `content/<slug>/README.md` simply absent, and the examiner cannot author it (outside the eval/selection surface).
- why: every preflight item needs an upstream producer; item 5 is the only one whose artifact no stage owns (ccar-p, the only prior package, never went through S5/S6 so the gap was invisible).
- how to apply: assign README authorship to a stage (natural fit: exam-author at S4-exit, from the §readme-template + manifest provenance block); until the methodology names an owner, the S6 checklist records it OPEN with owner exam-author, blocking the published flip only.

## L-0023 · Content for an import-generated package goes into the import script, never the output
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: content-migration
- lesson: any block added to a package that an import script owns (ccar-p ← import-ccar-p.mjs) must be emitted by the script — hand-editing the committed output silently breaks the same-input → byte-identical re-run contract that L-0003 relies on as the fidelity proof.
- why: the intro block landed in the script and two consecutive re-runs produced the identical single-block diff (`git diff --stat` stable at +25 lines, no other files touched) — proof the contract held; a hand edit would have been reverted by the next re-run.
- how to apply: before editing any file under `content/ccar-p/`, check whether import-ccar-p.mjs writes it; if yes, edit the script and re-run twice, requiring a stable diff.

## L-0024 · Numbered preflight items are frozen into downstream artifacts — extend, never renumber
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: methodology/publishing
- lesson: gate2-checklist.md, signoff.md and LEARNING entries reference 06's preflight items by number ("item 5", "item 6"), so inserting a new item mid-list would silently misalign every frozen artifact; the intro requirement was folded into existing item 7 (already the intro-page item via format_coverage) instead of renumbering 7→8→9.
- why: sign-off must stay last, so a pure append was impossible; the fold keeps historical references valid and the intro + format_coverage requirements are the same surface (the intro page) anyway.
- how to apply: when a stage manual's ordered checklist needs a new requirement, first look for the existing item owning the same artifact/surface and extend it; renumbering needs a sweep of every frozen reference and is almost never worth it.
