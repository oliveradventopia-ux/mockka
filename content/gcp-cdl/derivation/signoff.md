# Gate 2 sign-off · gcp-cdl

> Prepared by exam-examiner; **signed by Oliver Lau on 2026-08-20**. Verdict columns,
> adjudication decisions, waivers and the decision below are recorded, not blank.
> Working paper: `derivation/gate2-checklist.md` §Gate 2 final pass.

- **Date:** 2026-08-20 · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision (re-pinned 2026-08-20 — the shipping revision):** `questions.json` @ **`42ef8a9`** — blob `e2a57075e7`, sha256 `4fc6ede9b2f9222c…`, committed 2026-08-20 on `fix/cue-rework-wave`. `selection.json` is unchanged and item ids are stable, so form-a's composition is exactly as seated. Supersedes every earlier pin in this file.
- **Provenance caveat — read before signing:** the eval artifacts below were produced against the **pre-wave** option text (`42fbd3f`) and have **not** been regenerated. See §Post-S5 cue-rework wave for exactly what moved, what the prior judge scores still cover, the re-measured S5b numbers, and how the deep-read sample was extended (24 → **38 items**)
- **Eval artifacts:** blind-solve @ `252c4fb` (r2, 2026-08-18) · judge-scores @ `252c4fb` (r2) · overlap-report @ `252c4fb` (r2) · codex-solve @ `252c4fb` (**advisory_skipped ×2 rounds**) · round-1 preserved at `eval/*-r1.*` · **codex-solve RE-RUN @ `d9da399` (2026-08-20, after this sign-off) — form-a 60/60 agreement with the key, 0 disagreements, 0 unparsed; see §Addendum A for what that does and does not license**

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

### S5b cue-only solve, re-measured post-wave — **SUPERSEDED 2026-08-20**

> The table in this subsection was produced before `a8c7f4e` put interior option
> length ranks into the committed strategy set and before `cda74c8` made the tool
> compute the publication ceiling. It is kept as the record of what was measured
> on 2026-08-19. **The figures that govern this sign-off are in §Gate 2 final
> pass above.**

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

## Gate 2 final pass — 2026-08-20

This sign-off is recorded against a re-pinned revision and a **corrected acceptance standard**.
Both are stated here so a reader can see what a PUBLISH signature covers.

- **Re-pinned.** `questions.json` @ **`42ef8a9`** — blob `e2a57075e7`, sha256 `4fc6ede9b2f9222c…`, committed
  2026-08-20 on `fix/cue-rework-wave`. `selection.json` unchanged; item ids are stable, so form-a's
  composition is exactly as seated.
- **The S5b verdict is re-stated, not carried over.** `tools/exploit-scan.mjs` had been reporting
  `ok` against the **pass-mark floor** rather than the publication ceiling in
  [methodology/05 §cue-only-solve](../../../methodology/05-eval-rubric.md#cue-only-solve), and its
  committed strategy set tested only the extreme option length ranks. Both were corrected
  (`cda74c8`, `a8c7f4e`). The **bar is unchanged** — the ceilings computed by hand in the earlier
  sheets were already the right ones — but the machine now enforces it and the zero-knowledge
  attacker is stronger, so the blind numbers move. Full arithmetic and the audit note are in
  `derivation/eval-report.md` §s5b-final and `derivation/gate2-checklist.md` §Gate 2 final pass.
  **Result on the shipping revision: bank 26.51% ≤ 32.29% · form-a 25.00% ≤ 31.72% — PASS on both
  ceilings, both scopes.**
- **Validator on the pinned tree, at `published`:** `35` checks, `0` errors, `0` warnings.
- **Deep-read sample:** **38 → 48 items** — extended to cover every item the post-re-pin content pass touched: `d2-04`, `d2-09`, `d2-11`, `d3-03`, `d3-09`, `d3-12`, `d4-01`, `d5-07`, `d5-10`, `d6-08`.
- **README preflight row closed.** `content/gcp-cdl/README.md` exists and carries every section
  methodology/06 §readme-template requires. This row read OPEN in every previous version of this
  sheet; it is closed by the file, not by a waiver.
- **What Oliver's instruction was, exactly.** Publication was approved on 2026-08-20 with
  "sign off and go ahead", given after reviewing the content UAT at
  `UAT/HUMAN-UAT-2026-08-19-new-exams.md`. That run sheet's Findings table was returned **empty**
  and its checkboxes are unticked; the instruction is a blanket approval of the package as
  evidenced, not a set of item-by-item rulings. The decision cells below are filled on that basis
  and say so — every one records "published unchanged", which is what a blanket go-ahead means,
  rather than a ruling attributed to Oliver that he did not articulate.

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | **PASS** | Examiner finding: PASS (checklist §1) — 5 registered sources, all fields present; `google-skills-cdl-path` registered metadata-only, content never accessed |
| Provenance chain (spot-check: `d1-04`, `d3-11`, `d5-09`, `d6-01` + your own picks) | **PASS** | Examiner finding: PASS (checklist §2) — 83/83 concepts attributed; zero `licensed_import` items |
| Validator | **PASS** | Examiner finding: PASS — `pnpm validate gcp-cdl` → **34 checks, 0 errors, 0 warnings** on the re-pinned tree (`56c9db4`) with `form-a` built. *Count corrected 2026-08-19: this row read "30 checks"; four cue checks landed after S6 and all four are silent here* — **RE-RUN 2026-08-20 on the shipping revision `42ef8a9`: **35** checks, 0 errors, 0 warnings.** Any tree or count named earlier in this row refers to a superseded pin. *(Count is 35, not 34: `publication-preflight` is `when: status === 'published'`, so it runs only after the flip — the pre-flip run of the same tree reported 34.)* |
| Eval thresholds | **PASS** | Examiner finding: PASS **on the pre-wave scores** — blind 83/83 (both rounds), zero dimensions ≤2, zero open bounces, zero open adjudications. **S5b re-measured on the shipping revision: PASS on both ceilings, both scopes** (bank blind 27.71% ≤ 32.29%, k_req 0.5850 ≥ 0.5148; form-a 26.67% ≤ 31.72%, k_req 0.5909 ≥ 0.5167). Bank headroom is the thinnest of the six — 4.6 points — see §Post-S5 cue-rework wave — **RESTATED 2026-08-20.** The figures above (27.71% bank / 26.67% form) were produced by an exploit-scan whose committed strategy set tested only the extreme option length ranks, and whose `ok` compared against the pass-mark floor rather than the publication ceiling. Re-measured with the corrected instrument the previously pinned revision **breaches the ceiling on both scopes**, which is why a further content pass landed; on the shipping revision it returns: **bank 26.51% ≤ 32.29% · form-a 25.00% ≤ 31.72% — PASS on both ceilings, both scopes.** See §Gate 2 final pass above and `derivation/eval-report.md` §s5b-final. |
| Deep-read sample — **extended 24 → 38 items** for the cue-rework wave (all SM + 10 random + all auto-flagged + **every reworked item**; **SM contributes zero, the format is absent by design**) | **PASS** | **S6 core (24):** seated flags `d1-06`, `d1-14`, `d3-11`, `d4-10`, `d5-04`, `d5-09` · reserve-only flags `d1-01`, `d1-02`, `d1-05`, `d1-08`, `d1-12`, `d3-06`, `d5-05` · random `d1-03`, `d1-11`, `d2-05`, `d2-12`, `d3-05`, `d3-13`, `d4-07`, `d4-14`, `d5-08`, `d6-01` · notes `d3-01`, `d6-01`/RW-1. **Added by the wave (14):** seated `d1-09`, `d2-08`, `d2-13`, `d2-15`, `d3-10`, `d5-12`, `d5-14`, `d5-15`, `d6-03`, `d6-07` · reserve-only `d3-14`, `d4-12`, `d4-15`, `d6-04`. (`d2-12` was reworked *and* already in the random 10.) **All 11 reworked items seated on form-a are now in the sample**; the highest-risk named-entity fixes — `d5-12`, `d3-10`, `d5-14` — are called out with what to judge in §Post-S5 cue-rework wave. **Cross-model column now present** — Codex ran 2026-08-20, after this sign-off: form-a 60/60 agreement, 0 disagreements. It vouches for the **keys**, not for the co-correctness of the reworked distractors, which is what this sample is for (§Addendum A). Author and both blind solves share a model family, so 83/83 twice does not exclude a convergent blind spot; this deep-read is the compensating control. **Extended 38 → 48 at the 2026-08-20 final pass** — `d2-04`, `d2-09`, `d2-11`, `d3-03`, `d3-09`, `d3-12`, `d4-01`, `d5-07`, `d5-10`, `d6-08` added, so all 14 items touched by the length pass are sampled. |
| README statements | **PASS** | Examiner finding: **OPEN** — `content/gcp-cdl/README.md` does not exist (owner: exam-author). Requires close-out or explicit waiver before PUBLISH — **CLOSED 2026-08-20.** `content/gcp-cdl/README.md` now exists (committed on `fix/cue-rework-wave`) and carries every section methodology/06 §readme-template requires: provenance and independence, prior art, NDA statement, non-affiliation with the named trademark holder, and the outbound licence pair (content CC BY 4.0 / code MIT). No `licensed_import` items exist in this bank, so the template's Licensed-content section is correctly absent. **Closed by the file, not waived** — any "OPEN" text earlier in this row predates it. |
| Licences in/out | **PASS** | Examiner finding: PASS — repo `LICENSE` (MIT) + `LICENSE-CONTENT` (CC BY 4.0) outbound; no `licensed_import` items inbound, so nothing to discharge |
| format_coverage disclosure | **PASS** | Examiner finding: PASS — real exam uses 2 of Mockka's 3 formats (a subset, not an excess); `scenario_matching` zeroed and disclosed, MR share + 60-item/70% build disclosed as this mock's judgment |

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
| `d1-06` (dim2=3, MR) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| `d1-14` (dim5=3) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| `d3-11` (dim5=3) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| `d4-10` (bounce survivor) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| `d5-04` (dim5=3) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| `d5-09` (dim5=3) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| `d3-01` (dim1 note) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| `d6-01` (RW-1 watch) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| `d6-08` (reserved high concept) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| dim5 pitch class (8 bank / 4 seated) | accept — recorded residual | Not an item defect. Recorded so the residual is visible after publication; no bank change follows from this sign-off. |
| `d5-12` (wave) | keep — named residual | Distractor C now reads "**Google** Security Command Center" — not a canonical Google brand, and inconsistent with `d5-14` C "Security Command Center" in the same bank. One word; the only string the examiner would send back |
| `d3-10` (wave) | keep — named residual | Distractor C's E08 fiction became more elaborate: "Agent Registry, **the Google Cloud Console catalog** where agents are listed" now asserts a specific false fact about the Console, and carries freshness risk if Google ships an agent registry |
| `d5-14` (wave) | keep | "Security Command Center" named in — canonical here; check the pair with `d5-12` reads consistently to a candidate |
| `d2-08` (wave) | keep | Similarity fix verified **substantive, not tokenizer evasion**: engine trigram Jaccard C/D 1.000 → 0.000 by genuinely rewriting D |
| Rider inversion (form scope) | accept — residual | `rider-marks-key` moved adversely on form (2/7 = 28.6% → 2/6 = 33.3%) because the wave deleted a distractor-side rider from `d6-03` A rather than seating a key-side one. Check passes; n = 6 |

## Waivers

**None.** Zero dimensions ≤2, zero open bounces, no item at bounce 2, zero blind-solve misses in either round, every preflight row PASS. The README preflight item is **closed by the file**, not waived.

Said explicitly, as this sheet's own note required: **the S1 artefact scrub is still open** (`derivation/source-gcp-cdl-samples.md` lines 151/157). It does not put source text into the bank — the `source-phrase-reuse` screen is clean on the shipping revision — so it is a derivation-hygiene item, not a content defect, and this PUBLISH decision leaves it open knowingly.

Also accepted-not-waived: the `d5-12` C product-name inconsistency ("Google Security Command Center" against `d5-14` C's canonical "Security Command Center") and the `d3-10` C E08-fiction elaboration. Both are low-severity, both are in the deep-read sample, and neither is a threshold breach.

## Decision

**PUBLISH.** Every preflight row is PASS on the re-pinned revision `42ef8a9`; the S5b cue-only ceiling holds on both the bank and the served form under the corrected standard; the README preflight row is closed by the file; and the content UAT was reviewed with no findings logged.

Signed: Oliver Lau, 2026-08-20 — instruction of record: "sign off and go ahead", given after reviewing `UAT/HUMAN-UAT-2026-08-19-new-exams.md`.

---

## Addendum A — cross-model column, recorded 2026-08-20 after the sign-off

**This addendum adds evidence to the decision above. It does not change it.** The verdict, the
checklist verdicts, the adjudications, the waivers and `manifest.status` are exactly as signed.

The `codex` CLI was authenticated on 2026-08-20 (ChatGPT auth, no per-request billing), so the S5
advisory cross-solve recorded as `advisory_skipped` throughout this package's history has now run.
`node tools/codex-crosssolve.mjs gcp-cdl` served form-a keyless to a different model family and diffed
the answers against the key: **60/60 agreement, 0 disagreements, 0 unparsed**
(`eval/codex-solve.json` @ `d9da399`; wave-wide 465/465 across the eight exams).
[Methodology/05 §codex](../../../methodology/05-eval-rubric.md#codex) makes a disagreement the only
thing that acts — it adds the item to the Gate 2 sample. There were none, so nothing was added and
nothing was re-opened.

**What it strengthens.** The decision above was taken with the cross-model column absent and the
human deep read named as the compensating control. An independent model family has now reached the
same key on every served item, so the **key-correctness** half of that control is corroborated
rather than resting on a same-family blind solve.

**What it does not touch.** It says nothing about co-correctness, distractor plausibility or pitch:
the cross-solver reports its best option and was never asked whether a second option also holds.
This wave rewrote 36 distractor strings across 27 items specifically to be *more* plausible, and that is precisely the risk a key-agreeing cross-solve is blind to. The deep read remains the sole control there. And by the same argument
[§1b](../../../methodology/05-eval-rubric.md#cue-only-solve) makes about the blind solve, agreement
between two capable models could in principle mean both read the same surface rather than the
subject; it reads as evidence about the subject here only because the surface is measured
separately and is at chance (S5b form-a **25.00% ≤ 31.72%**). The 23 reserve-only items were
not solved at all.

Full reasoning: [`eval-report.md`](eval-report.md) §Cross-model column. The human-only questions
this leaves open across the wave: [`content/GATE2-HUMAN-ONLY.md`](../../GATE2-HUMAN-ONLY.md).
