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
