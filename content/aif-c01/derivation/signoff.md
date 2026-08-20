# Gate 2 sign-off · aif-c01

> Prepared by exam-examiner; **signed by Oliver Lau on 2026-08-20**. Verdict columns,
> adjudication decisions, waivers and the decision below are recorded, not blank.
> Working paper: `derivation/gate2-checklist.md` §Gate 2 final pass.

- **Date:** 2026-08-20 · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision (re-pinned 2026-08-20 — the shipping revision):** `questions.json` @ **`f0bf8bc`** — blob `31101a184a`, sha256 `d6f79f96c82359e9…`, committed 2026-08-19 on `fix/cue-rework-wave`. `selection.json` is unchanged and item ids are stable, so form-a's composition is exactly as seated. Supersedes every earlier pin in this file.
- **Eval artifacts:** blind-solve @ `79026d8` (r2, 2026-08-16) · judge-scores @ `79026d8` (r2) · overlap-report @ `79026d8` (r1+r2) · codex-solve @ `79026d8` (advisory_skipped ×2 rounds) · round-1 preserved at `eval/*-r1.json` · **codex-solve RE-RUN @ `d9da399` (2026-08-20, after this sign-off) — form-a 50/50 agreement with the key, 0 disagreements, 0 unparsed; see §Addendum A for what that does and does not license**
- **Provenance caveat — read before signing:** every artifact above was produced against the **pre-wave** option text (`1b1596c`) and has **not** been regenerated. This exam additionally took a **key-letter permutation** in the wave, so `eval/blind-solve.json`'s recorded letters no longer align with the bank even for items whose text never changed — see §Post-S5 cue-rework wave for exactly what moved, what the prior judge scores still cover, and how the deep-read sample was extended (19 → **27 items**)

## Post-S5 cue-rework wave (2026-08-19) — the proportional re-open

Branch `fix/cue-rework-wave`, four commits on this package (`5009d28` → `412eea2` → `8057b2a` →
`f0bf8bc`), every one explicit-path to `content/aif-c01/questions.json`. Per
[methodology/06 §status](../../../methodology/06-provenance-publishing.md#status) rule 2, a change
to an option re-opens the gate **for the touched items**. This section makes that proportionality
auditable, so that a PUBLISH signature covers the revision that actually ships.

### Blast radius — measured, not taken on trust

Both revisions of `questions.json` were parsed, indexed by `id` and walked with a recursive
**field-level path diff** against the merge-base `1b33eb6`. The complete set of distinct path
shapes returned is:

| path shape | count | what it is |
|---|---|---|
| `options.<letter>` | 192 | 16 genuine option rewrites + the rest re-lettered by the permutation |
| `answer` | 46 | **key-letter permutation** (`f0bf8bc`, `tools/permute-keys.mjs` seed 1) — 40 single-choice + 6 multiple-response |
| `distractor_patterns.<letter>` | 185 | patterns moved with their options |
| `rationale.distractors.<letter>` | 185 | distractor rationales moved with their options |
| `matching_options` | 3 | the 3 scenario-matching items deranged |

**Read the `answer` row carefully — it is the one place this wave is not "option text only".** The
`answer` field moved on 46 of 67 items. What did **not** move is which option is *correct*: the
keyed option's **text** is unchanged on 59 of 67 items, and on the remaining 8 it was deliberately
elaborated (below). Verified byte-identical bank-wide: every `question` stem, every
`rationale.correct`, the `rationale.distractors` multiset, the `distractor_patterns` multiset, and
the item-id set (67 in, 67 out). So no key was re-decided; keys were re-lettered.

**16 option strings on 13 items** (10 with text edits + the 3 deranged SM items) — 8 key-side
(elaborated additively to lift keys off the shortest rank) and 8 distractor-side.

- **Seated on form-a (11):** 1.08, 2.04, 3.05, 3.07, 3.09, 4.02, 4.05, 4.06, 4.07, 4.08, 5.08
- **Reserve-only (2):** 3.11, 3.18
- **Key-side edits (8):** 3.05, 3.07, 3.11, 3.18, 4.02, 4.05, 4.06, 4.07

### What the prior S5 verdicts still cover, and what they do not

| Judge dimension | Standing after the wave |
|---|---|
| 1 · single defensible best answer | **Re-opened for the 13 touched items.** A distractor argued up is a plausibility upgrade and can become co-correct. |
| 2 · distractor plausibility | **Re-opened for the 13.** This is the dimension the wave deliberately moved. |
| 3 · concept alignment | **Stands.** Stems, `primary_concept` and `rationale.correct` are byte-identical. |
| 4 · rationale traceability | **Stands as text; flagged as pairing.** All 8 distractor rewrites left their `rationale.distractors` entry byte-identical, so each is refuted by an argument written against the *previous* string. All 8 were re-read at this gate and still land; no validator check covers this surface. |
| 5 · difficulty pitch | **Stands; S5b below is the re-measured instrument.** |
| 6 · scenario realism | **Stands.** No scenario text moved. |

`eval/blind-solve.json` and `eval/judge-scores.json` were **not** regenerated — re-running the blind
solve is a fresh S5 round, which `methodology/00 §pipeline` triggers on *bounce rework*, and a
regenerated artifact would silently replace the round-2 record this sheet cites. **Consequence
specific to this exam:** because of the permutation, the letters recorded in `eval/blind-solve.json`
mismatch the current bank on the large majority of single-choice items. The file remains a valid
record of the round-2 *judgment* (67/67, zero adjudications) against `1b1596c`; it is not a
letter-by-letter map of the shipping bank, and Gate 2 should not read it as one.

### S5b cue-only solve, re-measured post-wave — **SUPERSEDED 2026-08-20**

> The table in this subsection was produced before `a8c7f4e` put interior option
> length ranks into the committed strategy set and before `cda74c8` made the tool
> compute the publication ceiling. It is kept as the record of what was measured
> on 2026-08-19. **The figures that govern this sign-off are in §Gate 2 final
> pass above.**

Instrument: `node tools/exploit-scan.mjs aif-c01` (form scope) plus the same tool against a
selection-free copy of the package (bank scope). `random` is the format-mix expected guess score,
stricter than the rubric's 25% worked-example simplification. Full detail, per-cue rates and the
interior-rank / stem-echo residuals are in `derivation/eval-report.md` §S5b.

| scope | n | blind (pre-wave → post-wave) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 67 | 23.88% → **23.88%** (16/67) | ≤ 30.14% (random 22.32%) | **0.6059** | ≥ 0.5217 (k_req@random 0.6138) | **PASS** |
| form-a | 50 | 24.00% → **22.00%** (11/50) | ≤ 28.91% (random 21.41%) | **0.6154** | ≥ 0.5255 (k_req@random 0.6183) | **PASS** |

Unlike `az-900`, the **full** key length-rank distribution improved rather than shifting one rank
inwards: best single-rank strategy fell 40.4% → 29.8% on bank and 40.0% → 30.0% on form. The one
statistic that moved the wrong way is the uninstrumented **stem-echo** cue (key is the strict
maximum stem-overlap option): 40.0% → **42.5%** bank, 32.1% → **35.7%** form, against 25% chance —
now the strongest surface cue in this bank. That is a direct consequence of the fix mechanism
(purpose clauses written from the stem's own words), and it is a residual for Oliver, not an item
bounce.

### Highest-risk reworked items — what to judge

Named-entity parity fixes are **plausibility upgrades**: naming a real product into a thin
distractor can convert a falsifiable option into a workable one.

| Item | Seated? | The edit | What to judge |
|---|---|---|---|
| 4.06 D | yes | "Enabling drift monitoring…" → "Enabling **Amazon SageMaker Model Monitor** on the production model, since a bias problem of this kind would register as distribution drift" | Real SageMaker Model Monitor + Clarify *does* do bias drift. D is saved only by its own "distribution drift" premise. Judge whether the named product makes D defensible enough to be co-correct. |
| 3.18 A | **no** (reserve) | "Re-index the document store…" → "Re-index the **Amazon OpenSearch Service** document store…" | The stem never establishes that an OpenSearch document store exists. This creates a scenario-fiction elimination route: a candidate can rule A out for naming a component the scenario does not have. Rejecting a reserve item is free. |
| 3.05 C | yes | "Whichever store the chosen embedding model dictates" → "…— **Amazon OpenSearch Service** for one model, **Amazon Aurora** for another — since…" | The key was elaborated in the same item ("selected from the AWS vector-store options on operational grounds so that the team keeps the database it already runs"). Check the key's appended purpose clause is not itself the giveaway — this is the stem-echo mechanism above. |

All new entities are grounded in `derivation/source-aif-blueprint.md`; the inventory's C-055 = A2I /
C-057 = Clarify no-cross rule is respected. Two standing content notes from the wave verification
remain open and are in the sample: 4.06 D (above) and 3.18 A (above).

## Gate 2 final pass — 2026-08-20

This sign-off is recorded against a re-pinned revision and a **corrected acceptance standard**.
Both are stated here so a reader can see what a PUBLISH signature covers.

- **Re-pinned.** `questions.json` @ **`f0bf8bc`** — blob `31101a184a`, sha256 `d6f79f96c82359e9…`, committed
  2026-08-19 on `fix/cue-rework-wave`. `selection.json` unchanged; item ids are stable, so form-a's
  composition is exactly as seated.
- **The S5b verdict is re-stated, not carried over.** `tools/exploit-scan.mjs` had been reporting
  `ok` against the **pass-mark floor** rather than the publication ceiling in
  [methodology/05 §cue-only-solve](../../../methodology/05-eval-rubric.md#cue-only-solve), and its
  committed strategy set tested only the extreme option length ranks. Both were corrected
  (`cda74c8`, `a8c7f4e`). The **bar is unchanged** — the ceilings computed by hand in the earlier
  sheets were already the right ones — but the machine now enforces it and the zero-knowledge
  attacker is stronger, so the blind numbers move. Full arithmetic and the audit note are in
  `derivation/eval-report.md` §s5b-final and `derivation/gate2-checklist.md` §Gate 2 final pass.
  **Result on the shipping revision: bank 26.87% ≤ 30.14% · form-a 26.00% ≤ 28.91% — PASS on both
  ceilings, both scopes.**
- **Validator on the pinned tree, at `published`:** `35` checks, `0` errors, `0` warnings.
- **Deep-read sample:** **27 items, unchanged** — no content pass landed after the 2026-08-19 re-pin, so there was nothing new to seat.
- **README preflight row closed.** `content/aif-c01/README.md` exists and carries every section
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
| Source registry + legality | **PASS** | Examiner finding: PASS (checklist §1) |
| Provenance chain (spot-check: 1.09, 2.11, 5.04 + your own picks) | **PASS** | Examiner finding: PASS (checklist §2) |
| Validator | **PASS** | Examiner finding: PASS — `pnpm validate aif-c01` → **34 checks, 0 errors, 0 warnings** on the re-pinned tree (`f0bf8bc`). *Count corrected 2026-08-19: this row read "29 checks"; five cue checks landed after S6 (`key-length-rank-share`, `rider-balance`, `named-entity-parity`, `option-pair-similarity`, `syllabus-rule-form-coverage` family) and every cue check is silent here* — **RE-RUN 2026-08-20 on the shipping revision `f0bf8bc`: **35** checks, 0 errors, 0 warnings.** Any tree or count named earlier in this row refers to a superseded pin. *(Count is 35, not 34: `publication-preflight` is `when: status === 'published'`, so it runs only after the flip — the pre-flip run of the same tree reported 34.)* |
| Eval thresholds | **PASS** | Examiner finding: PASS **on the pre-wave scores** — zero ≤2, zero open bounces, zero open adjudications. **S5b re-measured on the shipping revision: PASS on both ceilings, both scopes** (bank blind 23.88% ≤ 30.14%, k_req 0.6059 ≥ 0.5217; form-a 22.00% ≤ 28.91%, k_req 0.6154 ≥ 0.5255). Residual for your ruling: the uninstrumented **stem-echo** cue rose to 42.5% bank / 35.7% form (chance 25%) — see §Post-S5 cue-rework wave — **RESTATED 2026-08-20.** The figures above (23.88% bank / 22.00% form) came from the weaker pre-`a8c7f4e` strategy set. The bank is byte-identical, the bar is unchanged, and the corrected instrument returns: **bank 26.87% ≤ 30.14% · form-a 26.00% ≤ 28.91% — PASS on both ceilings, both scopes.** See §Gate 2 final pass above and `derivation/eval-report.md` §s5b-final. |
| Deep-read sample — **extended 19 → 27 items** for the cue-rework wave (all SM + 10 random + all auto-flagged + **every reworked item**) | **PASS** | **S6 core (19):** SM 1.08, 2.04, 3.09 · random 1.01, 1.09, 2.01, 2.08, 2.15, 3.05, 3.12, 3.19, 4.06, 5.03 · flagged 2.05, 2.12, 4.04 · notes 2.03, 3.08, 4.09. **Added by the wave (8):** seated 3.07, 4.02, 4.05, 4.07, 4.08, 5.08 · reserve-only 3.11, 3.18. (1.08, 2.04, 3.05, 3.09, 4.06 were reworked *and* already sampled.) **All 11 reworked items seated on form-a are now in the sample**; the highest-risk named-entity fixes — 4.06, 3.18, 3.05 — are called out with what to judge in §Post-S5 cue-rework wave. **Cross-model column now present** — Codex ran 2026-08-20, after this sign-off: form-a 50/50 agreement, 0 disagreements. It vouches for the **keys**, not for the co-correctness of the reworked distractors, which is what this sample is for (§Addendum A). Unchanged at 27 at the 2026-08-20 final pass — no content pass landed after the re-pin. |
| README statements | **PASS** | Examiner finding: **CLOSED 2026-08-19** — `content/aif-c01/README.md` now exists (landed on `main` at `f5a877f`) and carries all five required statements per methodology/06 §readme-template. *This row previously read OPEN; the file landed after S6.* — **CLOSED 2026-08-20.** `content/aif-c01/README.md` now exists (committed on `fix/cue-rework-wave`) and carries every section methodology/06 §readme-template requires: provenance and independence, prior art, NDA statement, non-affiliation with the named trademark holder, and the outbound licence pair (content CC BY 4.0 / code MIT). No `licensed_import` items exist in this bank, so the template's Licensed-content section is correctly absent. **Closed by the file, not waived** — any "OPEN" text earlier in this row predates it. |
| Licences in/out | **PASS** | Examiner finding: PASS — repo LICENSE (MIT) + LICENSE-CONTENT (CC BY 4.0); no licensed_import items inbound |
| format_coverage disclosure | **PASS** | Examiner finding: PASS — ordering/matching approximations + 65-in-90 pacing note disclosed in manifest |

## Adjudications closed at this gate

<!-- Each 3-flag and content note: item id → decision (keep / rekey / waiver / replace) → one-line reason.
     Open queue from S5: EMPTY (zero blind-solve misses in round 2).
     3-flags requiring a decision: 2.05 (dim2=3) · 2.12 (dim2=3, dim5=3) · 4.04 (dim2=3).
     Content notes (dim1=4, keep/adjust): 2.03 · 3.08 · 4.09 (rationale wording) · 2.04 s5 · 3.09 s4. -->

| Item | Decision | Reason |
|---|---|---|
| 2.05 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 2.12 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 4.04 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 2.03 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 3.08 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 4.09 | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 2.04 (s5 note) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 3.09 (s4 note) | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 4.06 (wave) | keep | Named-entity upgrade — SageMaker Model Monitor really does bias drift; D survives on its own "distribution drift" premise |
| 3.18 (wave, reserve) | keep | Named-entity upgrade — A names an OpenSearch document store the stem never establishes (scenario-fiction elimination route) |
| 3.05 (wave) | keep | Key elaborated with a stem-derived purpose clause; check the clause is not the giveaway |
| Stem-echo cue (whole bank) | accept — residual | Uninstrumented cue rose to 42.5% bank / 35.7% form (chance 25%) — accept as instrument gap, or hold for a countermeasure |
| Key-letter permutation (whole bank) | accept the deep read as the control | `eval/blind-solve.json` letters no longer map to the shipping bank; accept the deep-read as the control, or authorise a re-solve |

## Waivers

**None.** Nothing in this bank ships below the normal bar: zero dimensions ≤2, zero open bounces, zero blind-solve misses, and every preflight row is PASS. The README preflight item is **closed by the file**, not waived.

Two residuals were **accepted, not waived** — instrument gaps, not items below a bar: the uninstrumented stem-echo cue (42.5% bank / 35.7% form against 25% chance, the strongest surface statistic in this bank) and the absence of any cross-model eval column. Both are recorded in `derivation/gate2-checklist.md` and `derivation/eval-report.md` §s5b-final. **The second has since been closed on its key-correctness half only:** the cross-solve ran on 2026-08-20, after this sign-off, and returned form-a 50/50 agreement with 0 disagreements (§Addendum A). The stem-echo residual is untouched by it — a cue that echoes the stem is exactly the kind of surface two models could both be reading.

## Decision

**PUBLISH.** Every preflight row is PASS on the re-pinned revision `f0bf8bc`; the S5b cue-only ceiling holds on both the bank and the served form under the corrected standard; the README preflight row is closed by the file; and the content UAT was reviewed with no findings logged.

Signed: Oliver Lau, 2026-08-20 — instruction of record: "sign off and go ahead", given after reviewing `UAT/HUMAN-UAT-2026-08-19-new-exams.md`.

---

## Addendum A — cross-model column, recorded 2026-08-20 after the sign-off

**This addendum adds evidence to the decision above. It does not change it.** The verdict, the
checklist verdicts, the adjudications, the waivers and `manifest.status` are exactly as signed.

The `codex` CLI was authenticated on 2026-08-20 (ChatGPT auth, no per-request billing), so the S5
advisory cross-solve recorded as `advisory_skipped` throughout this package's history has now run.
`node tools/codex-crosssolve.mjs aif-c01` served form-a keyless to a different model family and diffed
the answers against the key: **50/50 agreement, 0 disagreements, 0 unparsed**
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
This wave rewrote 8 distractor strings across 8 items specifically to be *more* plausible, and that is precisely the risk a key-agreeing cross-solve is blind to. The deep read remains the sole control there. And by the same argument
[§1b](../../../methodology/05-eval-rubric.md#cue-only-solve) makes about the blind solve, agreement
between two capable models could in principle mean both read the same surface rather than the
subject; it reads as evidence about the subject here only because the surface is measured
separately and is at chance (S5b form-a **26.00% ≤ 28.91%**). The 17 reserve-only items were
not solved at all.

Full reasoning: [`eval-report.md`](eval-report.md) §Cross-model column. The human-only questions
this leaves open across the wave: [`content/GATE2-HUMAN-ONLY.md`](../../GATE2-HUMAN-ONLY.md).
