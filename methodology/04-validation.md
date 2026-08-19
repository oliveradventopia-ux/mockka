# 04 · Validation — what the machine enforces {#validation}

The validator is the always-on backstop under S4 and the first line of every preflight. It lives
in `packages/engine/src/validate/` and runs as `pnpm validate [slug]` (all content packages when
no slug is given). This document explains the *design* of the checks — the authoritative list is
the validator source itself plus the JSON Schemas in `methodology/schema/` and the pattern
registry `methodology/distractor-patterns.json` (link into those files; never duplicate their
contents here or they will drift).

The organizing principle, from the plan of record: **one engine, manifest-driven**. Universal
invariants are code; everything exam-specific is data in that exam's `manifest.json` /
`authoring.json`. The acceptance test for the split is that the migrated `content/ccar-p/`
package reproduces every check of the original hardcoded CCAR-P validator with identical results.

---

## Universal invariants (code — the same for every exam) {#invariants}

These hold for any exam, so they are not configurable. Each claim below names the check
function(s) in `packages/engine/src/validate/index.ts` that enforce it — a project rule: an
enforcement claim without a named check is a claim, not a fact.

- **Referential integrity** — `manifest-shape`, `concept-inventory`, `item-metadata`,
  `bank-shape`, `blueprint-arithmetic`. Every id unique; every reference resolves:
  `primary_concept` → `concepts.json`, syllabus-rule tags → the rules file (when the layer is
  on: `concept-syllabus-rules`), theme tags → the declared theme set, pattern tags → the shared
  registry or the exam's declared extensions (`distractor-patterns`); every answer key resolves
  to a real option (`single-choice-shape`, `multiple-response-shape`, `scenario-matching-shape`);
  every selection entry resolves to a bank item (`selection-shape`).
- **The anti-drift rationale invariant** — `rationale-anti-drift` + `rationale-letter-reference`.
  `rationale.correct` never names an option letter (checked case-insensitively, in
  `rationale.distractors` values too); `rationale.distractors` has exactly one entry per
  non-answer option. Together the two checks reject any bank whose rationale argues against its
  own answer key ([why](03-authoring-guide.md#procedure)).
- **Distractor-pattern completeness** — `distractor-patterns` (+ `pattern-frequency-caps` for
  the histogram caps). `distractor_patterns` keys == exactly the non-answer options, and no
  pattern repeats within one item.
- **Coverage contract** — `concept-coverage`, `syllabus-rule-bank-coverage`,
  `syllabus-rule-form-coverage`. Every concept in the inventory is the `primary_concept` of
  exactly one bank item ([the contract](02-master-inventory.md#contract)); with the
  `syllabus_rules` layer on, every rule is referenced by at least one selected item, and concepts
  covered only by reserve items are reported as blind spots.
- **Convergence surfaced** — `concept-convergence` (warn-level, never fails the gate). Computes
  `sources.length >= 2` per concept and warns where the authored `priority` diverges from the
  computed signal — divergence is allowed as documented authoring judgment, but it is always
  visible, never silent.
- **Selection composition** — `selection-shape`, `selection-format-mix`,
  `selection-concept-uniqueness`. Each form in `selection.json` matches the manifest's exam
  total, per-domain counts, and per-domain format mix; `select_count` matches the key size on
  multiple-response items (`multiple-response-shape`).
- **Structural answer-cue bounds** — `key-position-distribution` + `answer-length-cue` (BD-1/BD-2
  from aif-c01 S5 round 1) + `key-length-rank-share` + `rider-balance` + `named-entity-parity` +
  `option-pair-similarity` (E1–E7 from the 2026-08-19 adversarial cue sweep; consequences measured
  by `tools/exploit-scan.mjs`, the committed instrument behind [S5b](05-eval-rubric.md#cue-only-solve)).
  Scope rule (E7): the aggregate share statistics run over the **bank AND every selection form** —
  candidates sit a form, and a balanced bank can still serve a skewed paper — and every finding
  names its scope (`[bank]` / `[form <id>]`); per-item findings stay bank-scoped because the bank
  pass subsumes the forms.
  - `key-position-distribution` (**error since 2026-08-19** — ccar-p, its only violator, was
    key-rebalanced upstream and re-imported; promoted per [the adding-a-check
    procedure](#adding-a-check) step 4): no key letter carries an outsized share of single-choice
    items, no exact key set dominates multiple-response items, and no scenario-matching item maps
    its scenarios to `matching_options` in listed order. The listed-order rule generalises to
    **rotations** (scenario *i* → option *(i+k) mod L*): k=0 is the error-tier original; k>0 is new
    detection this wave and reports at **warn** (4 live items map at k=2) — it promotes with the
    next content wave.
  - `answer-length-cue` (**warn, promotion pinned to the ccar-p trim lane**: the key permutation
    fixed position but the served form still keyed the longest option in 41/44 SC items at the
    sweep; trim batches d1–d3 are committed, d4–d7 in flight — both tiers flip to warn/error the
    moment that lane lands with zero findings of this class): keyed-option length bounded relative
    to the longest distractor (two ratio tiers), plus the narrow per-item rider rule.
  - `key-length-rank-share` (**warn this wave**): the key must not be the strict longest — or,
    two-sided, the strict shortest — option in an outsized share of items (warn 0.35 / error-tier
    0.45, chance 0.25, **no length floor**). Rank, not magnitude: the sweep measured median length
    ratios of 0.97–1.01 (perfect `answer-length-cue` compliance) while the key was strict-longest
    in 35–52% of items (L-0030).
  - `rider-balance` (**warn this wave**): two-sided — among rider-carrying options (widened marker
    list: since/because/rather than/instead of/so that/to ensure/in order to/whereas), the share
    attached to the key stays inside [0.10, 0.45] around chance, because the one-sided per-item
    rule manufactured its inverse: a rider marked a distractor 57/59 times after it shipped
    (L-0031).
  - `named-entity-parity` (**warn this wave**): when exactly one option names the most proper-noun
    entities, that option must not be the key in an outsized share of qualifying items (warn 0.40 /
    error-tier 0.55, floor 6 qualifying items) — the dominant tell on vendor certifications
    (ai-901 measured 9/9).
  - `option-pair-similarity` (**warn this wave**): intra-item option pairs above the shingle-jaccard
    tiers (warn 0.6 / error-tier 0.75, the near-duplicate-stems machinery on option text) collapse
    a 4-way item into a 2-way guess.

  All share/ratio/jaccard numbers are manifest knobs (table below) with code-enforced bounds and
  defaults, so no check can be knob-disabled; checks promote per [the adding-a-check
  procedure](#adding-a-check) step 4 and are never weakened to fit content. The player-side
  complement is the seeded render-shuffle (`apps/web/lib/shuffle.ts`), which makes JSON order
  immaterial on screen — data-level balance is still required because exports and print forms see
  JSON order.
- **Text hygiene** — `near-duplicate-stems` (shingle comparison across stems),
  `keyword-presence` (each item's declared `keywords` actually appear in its stem/rationale —
  the tie to canonical vocabulary), `number-drift` (figures cited in a rationale match the
  stem), `mojibake`, `style-policy` (locale spelling + emoji policy).
- **Provenance chain** — `provenance-sources`, `concept-source-registry`,
  `source-derivation-link`, `derivation-present`, `licensed-import-license`. Every question
  resolves to a concept whose `sources[]` resolve to registered sources; every registered
  non-`public_blueprint` source resolves to a derivation artefact on disk
  (`derivation/source-<id>.md`, or its id appearing in `derivation/sources.md`) —
  `source-derivation-link`; `derivation/` is non-empty; import licences sit on the
  commercial-compatible allowlist. (The publication-preflight half of this list —
  `publication-preflight` — is in
  [`06-provenance-publishing.md`](06-provenance-publishing.md).)

## Manifest-driven data (per exam) {#manifest-data}

Everything the CCAR-P validator hardcoded is data here, so a new exam is a new manifest — not a
code fork:

| Manifest/authoring data | Drives |
|---|---|
| domains, weights, exam/bank totals | composition + arithmetic checks |
| per-domain format mix | selection composition check |
| option counts per format | option-count check |
| theme set (`authoring.json`) | theme-tag resolution |
| pattern caps + extensions | pattern-histogram caps ([calibration](03-authoring-guide.md#calibration)) |
| option-reuse rule (scenario matching) | reuse legality |
| locale + emoji policy | spelling/style checks |
| structural-cue knobs (`key_letter_max_share`, `mr_key_set_max_share`, `answer_length_ratio_warn`/`_error`, `key_length_rank_warn_share`/`_error_share`, `rider_balance_min_share`/`_max_share`, `named_entity_parity_warn_share`/`_error_share`, `option_pair_jaccard_warn`/`_error`) | the six structural answer-cue checks' bounds — all optional, defaulted, and range-bounded by `manifest-shape` so an out-of-range value can never disable a check |
| time limit, pass mark | player data sanity |
| `layers.syllabus_rules` | whether rule-coverage checks run at all ([degradation path](02-master-inventory.md#single-source)) |
| provenance block, licence allowlist | provenance chain + preflight |

A missing format is a `0` in the mix — the three supported formats (`single_choice`,
`multiple_response`, `scenario_matching`) are the v1 contract, and anything beyond them is a
`format_coverage` disclosure, not a new format.

---

## How to read findings {#findings}

`pnpm validate <slug>` reports per check, per item:

- **Errors fail the run** — an invariant is violated; the content cannot ship. Fix the content
  (or, if the manifest mis-states the blueprint, fix the manifest — but that reopens Gate 1
  territory: blueprint numbers are Oliver-verified data, not a knob to make red go green).
- **Reports inform judgment** — the pattern histogram, the reserve-only-coverage list, the
  blind-spot report. Nothing to "fix" mechanically; they exist to make S6 selection and Gate
  reviews informed. A skewed histogram inside caps is a *warning sign*, not a failure.
- Read findings bottom-up: referential errors first (they cascade — one bad concept id can light
  up coverage, selection, and provenance at once), composition second, text hygiene last.

The discipline from [`00-pipeline.md`](00-pipeline.md): validate after **every authoring batch**.
A red validator with one batch in flight is a to-do list; a red validator after five batches is
an archaeology project.

---

## Adding a new check — the structural rung {#adding-a-check}

When a recurring error class climbs the enforcement ladder
([`00-pipeline.md`](00-pipeline.md#ratchet)) to **check**, this is the procedure:

1. **Name the error class from evidence** — at least two real occurrences (score reports, Gate 2
   findings, bounce reports), recorded as a learning entry with `enforce: rule → check`.
2. **Decide the split**: is the invariant *universal* (true for every exam → code in
   `packages/engine/src/validate/`) or *per-exam* (a new manifest/authoring key → schema update
   in `methodology/schema/` + code that reads it)? Default to manifest data when any second exam
   could plausibly want a different value.
3. **Write the negative fixture first.** The repo keeps a deliberately-broken fixture bank the
   validator must reject; add a fixture exhibiting the new error class and assert the check
   catches it (`node --test`, LIGHT harness). A check without a failing fixture is a hope.
4. **Wire and classify** — error (blocks) vs report (informs). New checks over existing shipped
   content start as reports for one run if they would instantly redline published exams, then
   promote to errors once the content is fixed — never weaken the check to fit the content.
5. **Document**: one line in the relevant stage doc (usually
   [`03-authoring-guide.md`](03-authoring-guide.md)) naming the rule the check enforces, and
   close the learning entry at its new rung.

The hard rule from `CLAUDE.md` applies in both directions: provenance checks are never weakened,
and a check once landed is removed only by an Oliver-approved decision — the ratchet turns one
way.
