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
