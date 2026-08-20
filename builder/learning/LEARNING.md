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
- enforce: check → **IMPLEMENTED 2026-08-19** as `key-length-rank-share` (two-sided strict-longest/strict-shortest rank share over bank + each form, no length floor; warn-tier 0.35 / error-tier 0.45, both reported warn this wave). **The entry's proposed 0.40 bound was WRONG:** the adversarial sweep measured aif-c01's strict-shortest share at 38.6% — a 0.40 bound misses the very bank that motivated this lesson — while 0.35 catches 7/8 live banks against a 25% chance rate (clf-c02 is the only clean one). Threshold numbers proposed in a learning entry are hypotheses; calibrate against the full measured population before coding them (see L-0030).

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

## L-0025 · The staged index is shared lane state — stage-and-commit atomically or another lane's commit swallows yours
- date: 2026-08-16 · agent: tech-manager · scope: local · tier: git-hygiene
- lesson: explicit-path staging (L-0005) does not protect the window BETWEEN `git add` and `git commit` — a concurrent lane's `git commit` in the same working tree commits whatever is in the shared index, swallowing the other lane's staged files under its own message; and once the mixed commit is pushed, the split-fix loses (adopt origin, never force-push).
- why: this lane staged 12 intro-feature files, the design lane committed its Design/ bundle seconds later, and the resulting f6434b6 carried both lanes' work under the design message; a local soft-reset split was completed but the design lane pushed the mixed commit first, so the split was abandoned for origin's history (trees verified identical at every step).
- how to apply: in a shared working tree, run `git add <paths> && git commit` as ONE shell invocation (no gap), and re-read `git log -1 --stat` immediately after committing to confirm the commit contains exactly your paths; for real isolation use separate worktrees (the standing lane-hygiene rule this scaffold run consciously skipped).

## L-0026 · A green assertion walk is not a design gate — :has() state selectors out-rank graded override classes
- date: 2026-08-16 · agent: uxi-manager · scope: local · tier: fe-css
- lesson: `:has()` carries its argument's specificity, so a live-state selector like `.opt:has(input:checked)` (0,2,1) silently beats a graded override class `.opt.is-chosen-wrong` (0,2,0) — post-submit, the wrong pick kept its selected-gold dress and `.opt:has(input:disabled:not(:checked))` (0,3,1) faded the KEY row to 0.6 opacity past its `opacity: 1`. The 76/76 automated walk passed anyway: its box-shadow substring assertion matched the transition's t≈0 interpolated value (`rgba(0,0,0,0) 0px 0px 0px 0px inset` still contains "inset"), a false PASS. Only the screenshot eyeball pass caught the defect.
- why: state classes added by JS at grade time feel like "later = stronger", but the cascade ranks the :has() live selectors above them; and any computed-style read taken immediately after an action measures the transition's from-state, not the destination.
- how to apply: graded/terminal state rules that must beat live `:checked`/`:disabled` styling need explicit `:has()` variants of their own (e.g. `.opt.is-answer:has(input:disabled:not(:checked))`); in walk scripts, settle past the transition (or read a colour channel, never a substring) before asserting computed styles — and always eyeball the screenshots as a separate pass, because assertion-green and design-correct are different gates.

## L-0027 · Gate-with-build while a human's dev server owns .next: build in a throwaway worktree
- date: 2026-08-16 · agent: uxi-manager · scope: local · tier: verify-loop
- lesson: `pnpm gate` includes `next build`, and build + `next dev` share `.next/` — running the gate in the main tree mid-UAT kills the human's dev runtime (webpack chunk mismatch, L-0025-era proof). The safe split: run validate/typecheck/test in the main tree (no `.next` writes), and run the FULL gate in `git worktree add <scratch> HEAD` + `pnpm install --prefer-offline` (warm store, seconds) — same commit, real build proof, zero contact with the served `.next`. Remove the worktree after.
- why: this run had "gate green" and "do NOT restart the :4400 server, Oliver is mid-UAT" as simultaneous requirements; the worktree build satisfied both (gate green at 8f89bba while the served dev process stayed up).
- how to apply: before any build-bearing gate, `lsof -iTCP:4400` — if a dev server is listening and it is not yours to kill, worktree the build. Hot-reload of committed source edits is fine; the build artifact clash is the only hazard.

## L-0028 · The ccar-p import seam survived the incident-fix inversion — but only because both sides moved in lock-step
- date: 2026-08-19 · agent: tech-manager · scope: local · tier: content-migration
- lesson: the answer-cue incident fix ran INVERTED to L-0023's flow (Mockka's copy permuted first as SoT, then surgically ported upstream) — legal only because the port made both repos field-identical and the re-run proof was taken immediately: `node tools/import-ccar-p.mjs` against the upstream fix branch reproduced the committed Mockka content byte-for-byte (empty `git status`).
- why: the import reads the sibling working tree, so with upstream on `fix/answer-position-cues` the seam could be proven converged before either PR merged; had the port been text-sloppy (formatting, key order), the next innocent re-import would have silently reverted the exploit fix.
- how to apply: if content must be fixed Mockka-side first, the same session must port upstream AND re-run the import to an empty diff; upstream PR #7 must merge before any future re-import against `main` — until then a `main`-based re-import clobbers the permutation.

## L-0029 · Hand-formatted JSON needs a round-trip-proven printer before surgical edits
- date: 2026-08-19 · agent: tech-manager · scope: local · tier: tooling
- lesson: the public repo's `data/questions.json` carries idiosyncratic per-node layout (inline scenario objects >80 chars, multiline options, one 10-space-indent anomaly at 1.06's distractors) — no width-rule or normalizing printer can reproduce it; `JSON.stringify` churned 1683 lines for a 616-line semantic change. The fix: parse recording raw scalar text + per-entry whitespace, require `print(parse(x)) === x` byte-identical BEFORE trusting the printer with modified data, then re-stringify only values that changed.
- why: a symmetric 616/616 diff (vs 1683/797) is the difference between a reviewable surgical PR on a public artifact and formatting noise burying a correctness change; the round-trip refusal caught the anomaly that eyeballing the format rules missed.
- how to apply: before rewriting any JSON/config file not produced by a known serializer, prove the byte round-trip first and make the writer refuse on divergence; if round-trip fails, upgrade the layout model — never "close enough" it.

## L-0030 · Surface-cue checks must constrain rank, not just magnitude
- date: 2026-08-19 · agent: tech-manager · scope: local · tier: validator/authoring
- lesson: a magnitude bound (key/longest-distractor length ratio) can read perfectly compliant while the RANK statistic still gives every item away — bound the argmax/argmin form (WHO is the extreme), not just how extreme.
- why: the adversarial sweep measured median length ratios of 0.97–1.01 across all six post-aif-c01 banks (perfect `answer-length-cue` compliance) while the key was the strict LONGEST option in 35–52% of items (chance 25%, p<0.05 in five of six) — authors optimise to the measured quantity and the defect migrates to the nearest unmeasured neighbour; magnitude checks also need noise floors (MIN_KEY_LENGTH_FOR_RATIO=40 exempted 26% of sy0-701's items) that rank statistics don't.
- how to apply: when bounding a continuous surface feature, ship the rank/argmax bound alongside the magnitude bound, floor-free, computed over the bank AND each served form.
- enforce: check (`key-length-rank-share`, warn this wave → error next content wave).

## L-0031 · A one-sided cue rule manufactures its own inverse cue
- date: 2026-08-19 · agent: tech-manager · scope: local · tier: validator/authoring
- lesson: a surface rule stated one-sidedly ("only the key must not carry X") creates an optimisation gradient toward the unmeasured side — authoring evacuated riders into distractors, and a rider now marks a DISTRACTOR 57/59 times (p=2e-06), a STRONGER elimination cue than the one the rule killed.
- why: authors (human or LLM) optimise against the stated check, not the underlying symmetry; the check defines "compliant", so the habit displaces rather than dissolves — the same mechanism as L-0030, seen from the rule-design side.
- how to apply: state every surface-feature rule as a two-sided balance around chance with a sampling floor, and pair any per-item rule with an aggregate distribution bound; when writing a new cue check, ask "what does gaming this check produce?" and bound that too.
- enforce: check (`rider-balance`, widened marker list, two-sided [0.10, 0.45] band, warn this wave → error next content wave).

## L-0032 · Score a systemic surface cue once as a finding, not once per exposed item
- date: 2026-08-19 · agent: exam-examiner · scope: local · tier: eval/S5
- lesson: when a bank-wide cue (rider evacuation, named-entity parity) touches dozens of items, judge dimension 5 on each item's *conceptual* pitch and report the cue once as an S5b/validator finding with the worst-exposed items named — do not push every touched item to a 3, or the Gate 2 sample swallows the bank and stops being a sample.
- why: ccar-p S5 r1 — the trim wave left 63 items rider-asymmetric, but item-by-item measurement showed the elimination heuristic fully determines the answer in exactly **one** item (1.14, not even seated on form-a) and named-entity exposure is genuinely 2 items, not the 5 the aggregate check reports (3 are sentence-initial-capital noise). Scoring the aggregate would have flagged ~40 items and hidden the 7 that matter. The methodology already says S5b "scores their combined consequence" — double-counting in the rubric is the duplication.
- how to apply: at S5, after the aggregate cue warnings, compute the per-item exploitability (does the cue *fully determine* this item's answer?) before assigning any dimension-5 3; flag the determined and near-determined items, and disposition the rest as one named finding in the eval report and the Gate 2 checklist.

## L-0033 · A trim that strips a key's rider can silently narrow its scope — diff meaning, not just length
- date: 2026-08-19 · agent: exam-examiner · scope: local · tier: eval/S5
- lesson: length-cue remediation is judged by re-reading each trimmed key against its own rationale, not by confirming the length statistic moved; the failure mode is a key whose *scope* narrowed while the rationale still argues the wider claim.
- why: ccar-p 5.11 was trimmed from "every component in the data path — the model, retrieval, logging and any subprocessor" to "every subprocessor in the data path" while `rationale.correct` still argued the wider claim and never used the word *subprocessor*. Length checks, rationale-anti-drift and the exploit scan were all green; only a key-vs-rationale read caught it. Independent corroboration: it was also the single medium-confidence answer in an otherwise 85/85 blind solve.
- how to apply: after any option-text remediation wave, diff the keyed option content-matched across the whole chain (letter permutations make per-letter diffs lie), then for each changed key ask "is every noun in the rationale's argument still reachable from the key's wording?" — a term that appears in the key and nowhere in the rationale is a dimension-4 flag.

## L-0034 · Rewriting a distractor without touching its rationale is a silent drift surface no check covers
- date: 2026-08-19 · agent: exam-examiner · scope: local · tier: eval/S5
- lesson: an options-only cue wave that leaves `rationale.distractors` byte-identical while rewriting the distractor text creates a drift surface nothing in the pipeline tests — pair "this distractor's text changed" against "its rationale did not" and you have a precise, cheap list of the items a human must read.
- why: across the six exams in `fix/cue-rework-wave`, **120 of 120** distractor rewrites left their refuting rationale byte-identical (ai-901 17, aif-c01 8, az-900 20, ccao-f 36, gcp-cdl 22, sy0-701 17) — every one of them is now argued against by an argument written for the *previous* string. `rationale-anti-drift` checks letter references and drift *within* an item's own text, not "does this refutation still land against this option"; `key-length-rank-share` and friends measure surface only. ai-901 `d2-q53` is the shape of the failure: distractor A became a buildable Speech→Content Understanding pipeline while its rationale still argues only against "a separate transcription stage in front".
- how to apply: at S5/verification of any option-text wave, compute the pairing mechanically (for each option string that is new relative to the base revision, ask whether its `rationale.distractors[letter]` text already existed in the base item) and route the hits to the deep-read sample. It is a strictly smaller set than "every touched item" and it is where co-correctness hides.
- enforce: note → check (candidate `distractor-rationale-repair`: a changed option whose rationale is unchanged is a warn at S4).

## L-0035 · Verify a cue wave with a parsed field-level path diff, and re-measure bank scope by hand
- date: 2026-08-19 · agent: exam-examiner · scope: local · tier: eval/verification
- lesson: prove an "options only" claim by parsing both revisions of `questions.json`, indexing by `id` and walking a recursive path diff to a set of *path shapes* — never by reading `git diff` — and remember `tools/exploit-scan.mjs` scopes to the served form whenever `selection.json` holds one, so bank-scope S5b numbers must be produced deliberately.
- why: the path diff returns one line for a clean wave (`{"options.<letter>": 22}`) and it is exact where a text diff is slow and blind to field-level moves. It also caught what the lanes' own reports did not say plainly: **aif-c01 and az-900 changed the `answer` field on 46 and 49 items** (a `permute-keys` pass), so "no answers changed" is false at field level even though the keyed option *text* is preserved on all but 8 and 3 items respectively — and it makes `eval/blind-solve.json`'s recorded letters stop mapping to the shipping bank. Separately, publication covers the bank, so a form-scoped scan silently omits every reserve item.
- how to apply: three moves in order — (1) path-diff for blast radius, including a permutation-invariant count of edited option *strings* (compare option-text multisets per item, since per-letter diffs lie under permutation); (2) re-run `pnpm validate <slug>` and `exploit-scan` on **both** scopes, building bank scope from a selection-free copy of the package; (3) recompute the S5b ceilings yourself — `random` is the format-mix guess score, not a flat 25%.

## L-0036 · Every named-entity parity fix is a plausibility upgrade — hand-audit it for co-correctness
- date: 2026-08-19 · agent: exam-examiner · scope: local · tier: eval/S5
- lesson: naming a real product into a thin distractor to satisfy `named-entity-parity` is not cosmetic — it can convert a falsifiable option into a workable one, which is a dimension-1 risk that no automated check can see. Audit the before/after string pair for every entity edit, argue FOR the new distractor, and route survivors to the Gate 2 sample.
- why: two failure shapes observed in one wave. (1) *A distractor becomes buildable*: ai-901 `d2-q53` A went from "a speech capability … the transcripts that result" to "Azure Speech in Foundry Tools first, then extraction with Content Understanding" — a pipeline that produces exactly what the stem asks for, surviving only on the stem's word "directly". (2) *A distractor loses its false premise*: ai-901 `d2-q54` B stopped asserting "each content type is served by a different product" and now enumerates real products, wrong only on the word "needed". Adjacent classes found the same way: aif-c01 4.06 D (real SageMaker Model Monitor + Clarify does do bias drift), aif-c01 3.18 A (names a store the stem never establishes → scenario-fiction elimination), gcp-cdl `d5-12` C (non-canonical "Google Security Command Center", inconsistent with `d5-14` in the same bank).
- how to apply: check the entity is grounded in the exam's `derivation/master-inventory.md` or a `source-*.md` (superseded catalogues are usually released there as distractor material), then apply the drift register's standing rule — *no item may be answerable only by knowing a product was renamed* — and then argue FOR the new option on its own terms. Grounding is necessary and nowhere near sufficient.

## L-0037 · `option-pair-similarity` cannot see numeric near-duplicates — a finding can be closed by wording alone
- date: 2026-08-19 · agent: exam-examiner · scope: local · tier: validator/eval
- lesson: `shingles()` strips punctuation and then drops tokens of ≤3 characters, so IP addresses, dotted quads, ports and comma'd figures are invisible to the similarity metric — a near-duplicate finding on a numeric-heavy item can be closed by adding words while the pair a candidate actually sees is unchanged. Treat any closed similarity finding on a numeric item as unproven until read.
- why: sy0-701 `d4-q16` moved 100% → 0% by adding two words, and the reword left A as the only ACL entry phrased "deny **traffic** from … **on every** port and protocol" while B/C/D all read "…from 198.51.100.0/24 to 10.20.0.15…" — a 3-vs-1 surface singleton that lets a candidate eliminate the E05 transposition trap without ever engaging source-vs-destination direction. The metric-satisfying fix *degraded* the item's discriminator. The same tokenizer property has a benign twin: gcp-cdl `d2-08`'s C/D pair scored a perfect 1.000 because "Non-relational" → "non" (dropped) + "relational" collapses onto "Relational" — semantic opposites with an identical token stream — and there the rework was genuinely substantive (1.000 → 0.000).
- how to apply: recompute the metric on the old and new strings yourself and read both; ask whether the change moved *meaning* or only *tokens*. Where the metric provably cannot see the duplication, a recorded per-item waiver beats a cosmetic reword. Both directions are worth a validator upgrade.
- enforce: note → check (candidate: shingle on a numeric-preserving tokenizer, or exempt items whose options differ only in numeric literals).

## L-0038 · Bounding a statistic's extremes relocates the cue to its middle
- date: 2026-08-19 · agent: OA0 (from the cue-rework wave + its verification lanes) · scope: local · tier: methodology
- lesson: `key-length-rank-share` originally bounded only argmax and argmin. The 2026-08-19 rework wave complied by parking keys at **second**-longest: az-900 came out with 52% of form keys at rank 2 and rank 3 empty, so "take the second-longest option" scored **46% blind — worse than the 42% the wave was fixing** — while every check read clean. Both the check and `tools/exploit-scan.mjs` now test every rank.
- why: this is the same failure as L-0030 one level deeper. A bound on the visible edges of a distribution is not a bound on the distribution; authors (human or agent) optimise to the measured quantity, and the cue survives wherever the measurement is not looking.
- how to apply: when writing any distributional cue check, bound the WHOLE distribution, not its endpoints — and before shipping it, ask "what is the cheapest arrangement that satisfies this and keeps the advantage?" then check that arrangement too. In authoring, aim at parity (option sets where the question "which rank is the key?" is meaningless), never at avoiding a named rank: the fix that worked compressed the intra-item length spread 38 → 19 chars and let the rank fall out of the wording.
- enforce: check (shipped — all-rank statistic in validator + scan).

## L-0039 · A tool's pass verdict is not the publication standard unless it computes it
- date: 2026-08-19 · agent: OA0 · scope: local · tier: methodology
- lesson: `tools/exploit-scan.mjs` reported `ok` when a blind candidate merely failed to reach the **pass mark** (the hard floor), while `methodology/05#cue-only-solve` defines publication as **blind ≤ 1.35 × random AND k_req ≥ 0.85 × k_req@random** — a bar up to 15 points stricter. Three exams read `ok` while breaching the ceiling (ai-901 36% vs 29%, clf-c02 32% vs 30.1%, gcp-cdl 32% vs 31.7%). A README lane caught it while trying to write "clears the ceiling" and finding it could not verify the claim.
- why: the instrument and the standard lived in different documents, so nobody compared them. Everyone downstream — lanes, verifiers, and me — read the tool's verdict as the standard.
- how to apply: when a methodology names a numeric bar, the tool that measures it must compute *that* bar and fail on it; if a tool reports a different, weaker verdict, its output is a false assurance in every report that quotes it. Trace each published threshold to the line of code that enforces it.
- enforce: check (shipped — the scan computes the ceiling, exits non-zero on breach, and CI runs it).

## L-0040 · Never tell a lane "no other lane is running" unless you will also hold still
- date: 2026-08-19 · agent: OA0 · scope: local · tier: process
- lesson: the az-900 lane was briefed "no other lane is running", after which OA0 dispatched a README lane (`fa12bcb`, landed between its read and its first commit) and committed a change to its own acceptance instrument (`cda74c8`, 17 seconds after its second commit). The lane's numbers were measured against a tool that changed under it; it caught this itself and re-measured at HEAD.
- why: L-0025 recorded the shared-index hazard between lanes; this is the coordinator's version of the same mistake, and worse, because the thing that changed was the criterion the lane was being judged by.
- how to apply: the statement "no other lane is running" is a commitment by the coordinator, not a status report. Either hold the tree still for that lane's duration, put concurrent work in a worktree, or tell the lane exactly what may move under it and instruct it to re-measure at HEAD before reporting.
- enforce: note → rule.

## L-0041 · A rank histogram is an edit budget, not a percentage target
- date: 2026-08-20 · agent: exam-author (ceiling-fix lane) · scope: local · tier: methodology
- lesson: the key's length rank = the count of options strictly longer than it, so the four rank counts sum to the single-choice item count and one rank step costs exactly one distractor edit — down = lengthen a shorter option past the key, up = trim a longer one below it. A key that is already shortest can ONLY be moved by a trim, so an inverse-cue bank (clf-c02) needs the opposite tool from a second-longest bank (ai-901, gcp-cdl). Budgeting the flips as integers against both bank and form denominators before authoring landed all three exams on the first pass.
- why: treating the statistic as a percentage to be driven down invites per-item rank targeting, which is what created the rank-2 cluster (L-0038). Treating it as a fixed-sum histogram makes the work countable and the stopping point obvious.
- how to apply: stop when the best length rank equals the best fixed letter — `blind = max(letter, rank) + MR + SM`, and MR/SM cannot move without answer changes, so below the letter floor further length work buys nothing.
- enforce: note → check (candidate: have `tools/exploit-scan.mjs` print the per-rank histogram and the letter floor so a lane sees its budget without a private script).

## L-0042 · Verify a bank's JSON round-trip before scripting a whole-file write
- date: 2026-08-20 · agent: exam-author (ceiling-fix lane) · scope: local · tier: process
- lesson: the eight content banks are not formatted alike — ai-901 and clf-c02 round-trip byte-identically through `JSON.stringify(bank, null, 2)`, while gcp-cdl ships `keywords`/`distractor_patterns` prettier-compact on one line. The same 14-option edit produced a 15/15-line diff when spliced as text and an 836/187-line diff when re-serialized.
- why: a re-serialization diff buries the semantic change, defeats review, and (as the ccar-p upstream port found, L-0029) can mask a hand-edit anomaly.
- how to apply: splice option text rather than rewriting the file, or assert `print(parse(x)) === x` before writing.
- enforce: note → check (candidate: a formatting assertion in `pnpm validate`, or a `tools/edit-option.mjs` that splices).

## L-0043 · When the instrument changes, re-measure the OLD pin too — that is the audit trail
- date: 2026-08-20 · agent: exam-examiner (Gate 2 final pass) · scope: local · tier: methodology
- lesson: strengthening a measurement tool silently invalidates every verdict recorded with the weaker one, and the honest restatement needs *two* numbers, not one: the shipping revision under the corrected instrument, **and the previously pinned revision under the corrected instrument**. The second is what shows whether the old PASS was a real pass or an artefact of a blind spot — for `az-900`, `ai-901`, `clf-c02` and `gcp-cdl` the old pins turn out to breach the ceiling (46.00%, 33.33%, 32.00%, 32.53% blind), which is the evidence that the content passes were necessary rather than cosmetic.
- why: `a8c7f4e` put interior option length ranks into the exploit-scan strategy set and `cda74c8` made the tool compute the publication ceiling (L-0039). Every package's S5b section already carried the interior-rank gap as an explicit "rank-aware blind" residual table — so on the three banks that did not change (`aif-c01`, `ccao-f`, `sy0-701`) the new measured number equals, to the decimal, the figure the sheet had been carrying as a *residual*. The residual was the truth all along; only the instrument was behind.
- how to apply: at any gate that re-pins after a tool change, (1) state which of the bar and the instrument moved — here the bar never moved — (2) publish the old pin's re-measurement next to the new one, and (3) show a "before → after" arrow ONLY where the artefact is byte-identical, because across a content change the two figures are not comparable and the arrow invites a false read (`az-900` reads 24.62% → 24.62% and means nothing).
- enforce: note → rule.

## L-0044 · A residual that an instrument cannot see needs a named waiver, not a reword
- date: 2026-08-20 · agent: exam-examiner (Gate 2 final pass) · scope: local · tier: eval
- lesson: when a check structurally cannot see a defect — `option-pair-similarity` drops tokens of three characters or fewer, so `sy0-701` `d4-q16`'s dotted-quad 3-vs-1 surface singleton is invisible to it — the shippable resolution is a per-item waiver naming the defect, not an edit that moves the metric. Editing to satisfy a blind metric produces motion without evidence; the waiver produces evidence without motion.
- why: the same reasoning applies to `clf-c02`'s two `named-entity-parity` warnings, which the length pass could not close because closing them needs real sibling service names authored into distractors — an authoring lane. Recording them as "accepted, not waived" (a warn inside a passing ceiling) versus "waived" (an item shipped below bar) keeps the two categories distinct in the sign-off.
- how to apply: at Gate 2, split residuals into *waived* (item ships below a scored bar — needs an explicit waiver line), *accepted* (instrument gap or warn-level statistic, no item below bar — needs a named note), and *carried open* (a decision publication does not settle). Never collapse them into one list.
- enforce: note → rule.

## L-0045 · Cross-model agreement is evidence about keys only, and only next to a surface measurement
- date: 2026-08-20 · agent: exam-examiner (cross-model fold-in) · scope: local · tier: eval
- lesson: the S5 §codex cross-solve returned 465/465 agreement with the answer key across all eight served forms, zero disagreements. That licenses exactly one claim — the *keys* are defensible to a solver that did not write them — and no other. It says nothing about dimension 1 (co-correctness: the solver reports its best option and was never asked whether a second option also holds), dimension 2, or dimension 5. Worse, on its own it is circular for the same reason a 100% blind solve is (L-0020): two capable models agreeing may mean both read the subject, or both read the same *surface*.
- why: what breaks the circularity is that the surface is instrumented separately. `tools/exploit-scan.mjs` scores a zero-knowledge attacker who has only the surface, and every exam sits inside its publication ceiling on both scopes. Surface-at-chance **and** cross-family key agreement is a finding; either number alone is not. The conjunction is the whole argument, so the two must be recorded together or not at all.
- how to apply: never let a package present cross-model agreement as clearance. State the scope (this run was form-scope — 465 of 627 bank items; 162 reserve-only items carry no cross-model column), state the instrument's limits (batched, no confidence grade, no reasoning line, so a disagreement could not have been adjudicated the way a blind-solve miss can), and split the compensating-control claim: *partly discharged* for key correctness, *fully intact* for the co-correctness risk of any distractor the bank has argued up.
- enforce: note → rule (recorded in `methodology/05-eval-rubric.md` §codex-interpretation).

## L-0046 · Diff rewrites by text, not by option letter, once a bank has been permuted
- date: 2026-08-20 · agent: exam-examiner (cross-model fold-in) · scope: local · tier: process
- lesson: pairing "old option X" with "new option X" is wrong on any exam that took a `permute-keys` pass. Doing it on `aif-c01` produced three confident and false readings — that `3.07` B, `4.02` B and `4.08` A had been swapped for entirely different propositions, when each was in fact the same distractor with a product name added and a letter moved. `az-900` `2.08` read as "the old distractor was a verbatim duplicate of the key", which it was not.
- why: the permutation re-letters every option, so a letter-indexed diff reports the permutation as content change and hides the real edit. Match each new string to its nearest base string in the same item (token Jaccard works) and report *that* pair.
- how to apply: before describing any option-level change for a human reader, check whether `answer` moved between the two revisions; if it did, pair by text. Also treat a capitalised-token detector as a floor rather than a census — it missed `gcp-cdl` `d5-12` ("Security Command Center" → "**Google** Security Command Center") because *Google* already appeared elsewhere in that item.
- enforce: note → note.
