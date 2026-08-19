# Gate 2 sign-off · gcp-cdl

> Pre-filled by exam-examiner at S6 (2026-08-18) per methodology/06 §signoff-template.
> **Verdict columns, adjudication decisions, waivers, and the final decision are
> Oliver's — left blank.** Working paper: `derivation/gate2-checklist.md`.

- **Date:** ____ · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision (re-pinned 2026-08-19, after the cue-rework wave):** `questions.json` @ **`56c9db4`** — blob `5aaa81d3f1`, sha256 `ea3b5980d44f9243…`, committed 2026-08-19 on `fix/cue-rework-wave`. **Supersedes the S6 pin `42fbd3f`**, which is no longer what ships. `selection.json` @ the S6 commit on `feat/exam-factory` — untouched by the wave; item ids are stable, so form-a's composition is exactly as seated
- **Provenance caveat — read before signing:** the eval artifacts below were produced against the **pre-wave** option text (`42fbd3f`) and have **not** been regenerated. See §Post-S5 cue-rework wave for exactly what moved, what the prior judge scores still cover, the re-measured S5b numbers, and how the deep-read sample was extended (24 → **38 items**)
- **Eval artifacts:** blind-solve @ `252c4fb` (r2, 2026-08-18) · judge-scores @ `252c4fb` (r2) · overlap-report @ `252c4fb` (r2) · codex-solve @ `252c4fb` (**advisory_skipped ×2 rounds**) · round-1 preserved at `eval/*-r1.*`

## Post-S5 cue-rework wave (2026-08-19) — the proportional re-open

Branch `fix/cue-rework-wave`, four commits on this package (`1e418e9` → `415cfba` → `5c67971` →
`56c9db4`), every one explicit-path to `content/gcp-cdl/questions.json`. Per
[methodology/06 §status](../../../methodology/06-provenance-publishing.md#status) rule 2, a change
to an option re-opens the gate **for the touched items**. This section makes that proportionality
auditable, so that a PUBLISH signature covers the revision that actually ships.

### Blast radius — measured, not taken on trust

Both revisions of `questions.json` were parsed, indexed by `id` and walked with a recursive
**field-level path diff** against the merge-base `1b33eb6`. The complete set of distinct path
shapes returned is:

| path shape | count |
|---|---|
| `options.<letter>` | 22 |

Nothing else. Verified byte-identical bank-wide across all 83 items: every `question` stem, every
`answer` (**no key letter moved**), every `rationale.correct`, the `rationale.distractors`
multiset, the `distractor_patterns` multiset, and the item-id set (83 in, 83 out).

**22 option strings on 15 items, and not one of them is a keyed option** — this wave changed
distractors only, so the key text a candidate sees is exactly what S5 round 2 judged.

- **Seated on form-a (11):** `d1-09`, `d2-08`, `d2-12`, `d2-13`, `d2-15`, `d3-10`, `d5-12`,
  `d5-14`, `d5-15`, `d6-03`, `d6-07`
- **Reserve-only (4):** `d3-14`, `d4-12`, `d4-15`, `d6-04`

### What the prior S5 verdicts still cover, and what they do not

| Judge dimension | Standing after the wave |
|---|---|
| 1 · single defensible best answer | **Re-opened for the 15 touched items.** |
| 2 · distractor plausibility | **Re-opened for the 15** — the dimension the wave deliberately moved. |
| 3 · concept alignment | **Stands.** Stems, keys, `primary_concept` and `rationale.correct` byte-identical. |
| 4 · rationale traceability | **Stands as text; flagged as pairing.** All 22 distractor rewrites left their `rationale.distractors` entry byte-identical — every one is refuted by an argument written against the *previous* string. All 22 pairs were re-read at this gate and still land; `rationale-anti-drift` does not test this. |
| 5 · difficulty pitch | **Stands; S5b below is the re-measured instrument.** |
| 6 · scenario realism | **Stands.** No scenario text moved. |

`eval/blind-solve.json` and `eval/judge-scores.json` were **not** regenerated — re-running the blind
solve is a fresh S5 round, which `methodology/00 §pipeline` triggers on *bounce rework*, and a
regenerated artifact would silently replace the round-2 record this sheet cites. Because no key
letter and no key string moved, the recorded `chosen`/`keyed` letters remain valid; what changed
underneath 22 distractor letters is the wording. As an additional control, all 15 touched items
were re-solved blind under a random letter permutation (to de-bias the key exposure the path diff
creates) at the wave verification: **15/15 agreement**, no co-correctness introduced.

### S5b cue-only solve, re-measured post-wave

Instrument: `node tools/exploit-scan.mjs gcp-cdl` (form scope) plus the same tool against a
selection-free copy of the package (bank scope). Full detail and per-cue rates are in
`derivation/eval-report.md` §S5b.

| scope | n | blind (pre-wave → post-wave) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 83 | 39.76% → **27.71%** (23/83) | ≤ 32.29% (random 23.92%) | **0.5850** | ≥ 0.5148 (k_req@random 0.6057) | **PASS** |
| form-a | 60 | 40.00% → **26.67%** (16/60) | ≤ 31.72% (random 23.50%) | **0.5909** | ≥ 0.5167 (k_req@random 0.6078) | **PASS** |

Bank headroom on the binding constraint is 4.6 points of blind score (about 3.8 items) — real but
the thinnest of the six reworked exams. Two residuals, neither gating: `rider-marks-key` moved
*adversely* on form (2/7 = 28.6% → 2/6 = 33.3%) because the wave deleted a distractor-side rider
from `d6-03` A rather than seating a key-side one; and the bank's **rank-aware** blind (best
interior length rank, an uninstrumented strategy) is 32.53%, marginally above the 32.29% ceiling
while the committed strategy set reads 27.71%. `key-shortest-rank` on form is byte-identical
pre- and post-wave at 7/47 = 14.9%, so the inverse cue was neither created nor removed.

### Highest-risk reworked items — what to judge

| Item | Seated? | The edit | What to judge |
|---|---|---|---|
| `d5-12` C | yes | "Cloud Armor …, and **Security Command Center** for alert triage" → "…and **Google Security Command Center**…" | Not a canonical Google brand, and inconsistent with `d5-14` C, which says "Security Command Center" in the same bank. One word — the only string this examiner would send back. |
| `d3-10` C | yes | "Agent Registry, the catalog where deployed agents are listed" → "Agent Registry, **the Google Cloud Console catalog** where agents are listed" | The E08 fiction is now a specific false assertion about the Google Cloud Console (its own rationale says "No Google Cloud offering carries that name"). Valid E08, but a more elaborate fiction and a freshness risk if Google ships an agent registry. |
| `d5-14` C | yes | "Security Command Center" named in | Canonical here; judge the pair with `d5-12` for candidate-facing consistency. |
| `d2-08` D | yes | "Non-relational for accounts and the catalog, with object storage for the media" → "Non-relational for the accounts as well as the catalog, keeping media files in object storage" | The similarity fix is **substantive, not tokenizer evasion**: the old C/D pair scored Jaccard 1.000 because `shingles()` strips punctuation then drops tokens ≤3 chars, collapsing "Non-relational" onto "Relational"; the rewrite takes it to 0.000. Confirm the semantics still oppose. |
| `d1-11`, `d1-10`, `d1-12`, `d3-06` | yes/reserve | untouched | Still carry 55/38/38/31-character option spreads the lane's own ≤18 band never reached, with zero measured cue impact. Advisory only. |

Every entity introduced is a real Google Cloud product except the deliberate `d3-10` fiction; all
grep-hit the derivation docs.

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | Examiner finding: PASS (checklist §1) — 5 registered sources, all fields present; `google-skills-cdl-path` registered metadata-only, content never accessed |
| Provenance chain (spot-check: `d1-04`, `d3-11`, `d5-09`, `d6-01` + your own picks) | | Examiner finding: PASS (checklist §2) — 83/83 concepts attributed; zero `licensed_import` items |
| Validator | | Examiner finding: PASS — `pnpm validate gcp-cdl` → **34 checks, 0 errors, 0 warnings** on the re-pinned tree (`56c9db4`) with `form-a` built. *Count corrected 2026-08-19: this row read "30 checks"; four cue checks landed after S6 and all four are silent here* |
| Eval thresholds | | Examiner finding: PASS **on the pre-wave scores** — blind 83/83 (both rounds), zero dimensions ≤2, zero open bounces, zero open adjudications. **S5b re-measured on the shipping revision: PASS on both ceilings, both scopes** (bank blind 27.71% ≤ 32.29%, k_req 0.5850 ≥ 0.5148; form-a 26.67% ≤ 31.72%, k_req 0.5909 ≥ 0.5167). Bank headroom is the thinnest of the six — 4.6 points — see §Post-S5 cue-rework wave |
| Deep-read sample — **extended 24 → 38 items** for the cue-rework wave (all SM + 10 random + all auto-flagged + **every reworked item**; **SM contributes zero, the format is absent by design**) | | **S6 core (24):** seated flags `d1-06`, `d1-14`, `d3-11`, `d4-10`, `d5-04`, `d5-09` · reserve-only flags `d1-01`, `d1-02`, `d1-05`, `d1-08`, `d1-12`, `d3-06`, `d5-05` · random `d1-03`, `d1-11`, `d2-05`, `d2-12`, `d3-05`, `d3-13`, `d4-07`, `d4-14`, `d5-08`, `d6-01` · notes `d3-01`, `d6-01`/RW-1. **Added by the wave (14):** seated `d1-09`, `d2-08`, `d2-13`, `d2-15`, `d3-10`, `d5-12`, `d5-14`, `d5-15`, `d6-03`, `d6-07` · reserve-only `d3-14`, `d4-12`, `d4-15`, `d6-04`. (`d2-12` was reworked *and* already in the random 10.) **All 11 reworked items seated on form-a are now in the sample**; the highest-risk named-entity fixes — `d5-12`, `d3-10`, `d5-14` — are called out with what to judge in §Post-S5 cue-rework wave. **No cross-model column — Codex unauthenticated in both rounds.** Author and both blind solves share a model family, so 83/83 twice does not exclude a convergent blind spot; this deep-read is the compensating control |
| README statements | | Examiner finding: **OPEN** — `content/gcp-cdl/README.md` does not exist (owner: exam-author). Requires close-out or explicit waiver before PUBLISH |
| Licences in/out | | Examiner finding: PASS — repo `LICENSE` (MIT) + `LICENSE-CONTENT` (CC BY 4.0) outbound; no `licensed_import` items inbound, so nothing to discharge |
| format_coverage disclosure | | Examiner finding: PASS — real exam uses 2 of Mockka's 3 formats (a subset, not an excess); `scenario_matching` zeroed and disclosed, MR share + 60-item/70% build disclosed as this mock's judgment |

## Adjudications closed at this gate

<!-- Each 3-flag, content note and bounce survivor: item id → decision (keep / rekey / waiver / replace) → one-line reason.
     Open queue from S5: EMPTY (zero blind-solve misses in either round).
     Seated 3-flags requiring a decision: d1-06 (dim2) · d1-14 (dim5) · d3-11 (dim5) · d5-04 (dim5) · d5-09 (dim5).
     Bounce survivor: d4-10 (r1 source-phrase-reuse, reworked and discharged at r2).
     Content notes: d3-01 (dim1 5->4, true-but-incomplete option D) · d6-01 (RW-1 TCO phrase watch).
     Form-composition call: d6-08, the one convergent concept left in reserve.
     Reserve-only 3-flags (bank health, not this form): d1-01, d1-02, d1-05, d1-08, d1-12, d3-06, d5-05. -->

| Item | Decision | Reason |
|---|---|---|
| `d1-06` (dim2=3, MR) | | |
| `d1-14` (dim5=3) | | |
| `d3-11` (dim5=3) | | |
| `d4-10` (bounce survivor) | | |
| `d5-04` (dim5=3) | | |
| `d5-09` (dim5=3) | | |
| `d3-01` (dim1 note) | | |
| `d6-01` (RW-1 watch) | | |
| `d6-08` (reserved high concept) | | |
| dim5 pitch class (8 bank / 4 seated) | | |
| `d5-12` (wave) | | Distractor C now reads "**Google** Security Command Center" — not a canonical Google brand, and inconsistent with `d5-14` C "Security Command Center" in the same bank. One word; the only string the examiner would send back |
| `d3-10` (wave) | | Distractor C's E08 fiction became more elaborate: "Agent Registry, **the Google Cloud Console catalog** where agents are listed" now asserts a specific false fact about the Console, and carries freshness risk if Google ships an agent registry |
| `d5-14` (wave) | | "Security Command Center" named in — canonical here; check the pair with `d5-12` reads consistently to a candidate |
| `d2-08` (wave) | | Similarity fix verified **substantive, not tokenizer evasion**: engine trigram Jaccard C/D 1.000 → 0.000 by genuinely rewriting D |
| Rider inversion (form scope) | | `rider-marks-key` moved adversely on form (2/7 = 28.6% → 2/6 = 33.3%) because the wave deleted a distractor-side rider from `d6-03` A rather than seating a key-side one. Check passes; n = 6 |

## Waivers

<!-- Any item shipped below the normal bar, with the explicit reason — or "none".
     Examiner expectation: none required by the eval (zero dimensions <=2, zero open bounces,
     no item at bounce 2). The README preflight item needs either close-out or a waiver line
     here if PUBLISH is signed before it lands. The open S1 artefact scrub
     (source-gcp-cdl-samples.md lines 151/157) does not put source text into the bank, but a
     PUBLISH decision that leaves it open should say so here explicitly. -->

## Decision

**PUBLISH / DO NOT PUBLISH.** ____

Signed: ____, ____
