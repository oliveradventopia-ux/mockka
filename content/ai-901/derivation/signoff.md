# Gate 2 sign-off · ai-901

> Pre-filled by exam-examiner at S6 (2026-08-18) per methodology/06 §signoff-template.
> **Verdict columns, adjudication decisions, waivers, and the final decision are
> Oliver's — left blank.** Working paper: `derivation/gate2-checklist.md`.

- **Date:** ____ · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision (re-pinned 2026-08-19, after the cue-rework wave):** `questions.json` @ **`b3851b9`** — blob `717f441939`, sha256 `d8f6d2ce0a891e27…`, committed 2026-08-19 on `fix/cue-rework-wave`. **Supersedes the S6 pin `e2434ad`**, which is no longer what ships. `selection.json` @ `12378b6` — untouched by the wave; item ids are stable, so form-a's composition is exactly as seated at S6
- **Eval artifacts:** blind-solve @ `2df3bb4` (r2, 2026-08-18, 56/56) · judge-scores @ `2df3bb4` (r2; `round`/`gate2_sample.count` metadata corrected in the S6 commit, scores untouched) · overlap-report @ `2df3bb4` (r1+r2) · codex-solve @ `2df3bb4` (**`advisory_skipped` in BOTH rounds — this exam carries no cross-model signal**) · round-1 preserved at `eval/blind-solve-r1.json` + `eval/judge-scores-r1.json`
- **Provenance caveat — read before signing:** every artifact above was produced against the **pre-wave** option text (`e2434ad`) and has **not** been regenerated. §Post-S5 cue-rework wave below states exactly what moved, which judge dimensions the prior scores still cover, and which items are re-opened. The deep-read sample has been extended so that every reworked item is in front of you

## Post-S5 cue-rework wave (2026-08-19) — the proportional re-open

Branch `fix/cue-rework-wave`, three commits on this package (`6341f38` → `31d0ad7` → `b3851b9`),
every one explicit-path to `content/ai-901/questions.json`. Per
[methodology/06 §status](../../../methodology/06-provenance-publishing.md#status) rule 2, a change
to an option re-opens the gate **for the touched items**. This section is what makes that
proportionality auditable, so that a PUBLISH signature covers the revision that actually ships.

### Blast radius — measured, not taken on trust

Both revisions of `questions.json` were parsed, indexed by `id`, and walked with a recursive
**field-level path diff** against the merge-base `1b33eb6`. The complete set of distinct path
shapes returned is:

| path shape | count |
|---|---|
| `options.<letter>` | 22 |

Nothing else. Verified byte-identical bank-wide across all 56 items: every `question` stem, every
`answer`, every `rationale.correct`, the `rationale.distractors` multiset, the
`distractor_patterns` multiset, and the item-id set (56 in, 56 out). **No key letter moved on this
exam** (unlike `aif-c01` and `az-900`, which took a key permutation in the same wave).

**22 option strings on 16 items** — 5 key-side (justification riders appended to keys, `b3851b9`)
and 17 distractor-side (length parity + named-entity parity).

- **Seated on form-a (12):** `d1-q16`, `d2-q26`, `d2-q30`, `d2-q31`, `d2-q33`, `d2-q36`, `d2-q40`,
  `d2-q48`, `d2-q51`, `d2-q53`, `d2-q54`, `d2-q55`
- **Reserve-only (4):** `d1-q09`, `d2-q37`, `d2-q38`, `d2-q42`
- **Key-side edits (5):** `d2-q26`, `d2-q42`, `d2-q51`, `d2-q54`, `d2-q55`

### What the prior S5 verdicts still cover, and what they do not

| Judge dimension | Standing after the wave |
|---|---|
| 1 · single defensible best answer | **Re-opened for the 16 touched items.** A distractor argued up is a plausibility upgrade and can become co-correct. This is what the extended deep-read is for. |
| 2 · distractor plausibility | **Re-opened for the 16.** This is the dimension the wave deliberately moved. |
| 3 · concept alignment | **Stands.** Stems, `primary_concept` and `rationale.correct` are byte-identical; no item can have drifted off its concept. |
| 4 · rationale traceability | **Stands as text; flagged as pairing.** Every `rationale.distractors` entry is byte-identical, so all **17** distractor rewrites are now refuted by an argument written against the *previous* string. Each pair was re-read at this gate and all 17 still land — but no validator check tests this, and `rationale-anti-drift` does not cover it. |
| 5 · difficulty pitch | **Stands; S5b below is the re-measured instrument.** |
| 6 · scenario realism | **Stands.** No scenario text moved. |

`eval/blind-solve.json` and `eval/judge-scores.json` were **not** regenerated. Re-running the blind
solve is a fresh S5 round, which `methodology/00 §pipeline` triggers on *bounce rework*; an
options-only wave with zero bounces does not qualify, and a regenerated artifact would silently
replace the round-2 record this sheet cites. Because no key letter moved here, the file's
`chosen`/`keyed` letters are still valid; what changed underneath 22 of those letters is the
wording. The compensating control is the extended deep-read.

### S5b cue-only solve, re-measured post-wave

Instrument: `node tools/exploit-scan.mjs ai-901` (form scope) plus the same tool run against a
selection-free copy of the package (bank scope — the tool scopes to the served form when one
exists). These numbers **replace** the pre-wave figures; `random` is the format-mix expected guess
score, which is stricter than the rubric's 25% worked-example simplification.

| scope | n | blind (pre-wave → post-wave) | ceiling (1.35 × random) | k_req | floor (0.85 × k_req@random) | verdict |
|---|---|---|---|---|---|---|
| bank | 56 | 46.43% → **25.00%** (14/56) | ≤ 30.17% (random 22.35%) | **0.6000** | ≥ 0.5216 (k_req@random 0.6137) | **PASS** |
| form-a | 42 | 42.86% → **30.95%** (13/42) | ≤ 28.97% (random 21.46%) | **0.5655** | ≥ 0.5253 (k_req@random 0.6180) | **blind FAIL** · k_req PASS |

**The one thing on this sheet that needs a ruling before PUBLISH.** form-a's blind score of 30.95%
exceeds the strict format-mix ceiling of 28.97% by ~0.8 items, while the bank passes comfortably.
It passes against the rubric's 25% simplification (ceiling 33.75%) and k_req clears its floor on
both scopes, so this is a ceiling-arithmetic call, not a machine failure — `tools/exploit-scan.mjs`
exits 0 (the hard floor is the 70% pass mark). **The driver is not the wave.** The wave halved the
length cue (longest-option 17/34 → 7/34 on form); what remains is the *letter* cue —
`always B` scores 12/34 = 35.3% on form-a, exactly as it did pre-wave, because ai-901's keys were
never permuted. Options: (a) accept, with the bank-scope pass and k_req as the argument; (b) run
`tools/permute-keys.mjs` over form-a's SC items — the same fix `aif-c01` and `az-900` took in this
wave — and re-verify; (c) waive with the reason recorded below.

### Highest-risk reworked items — what to judge

Named-entity parity fixes are **plausibility upgrades**: naming a real product into a thin
distractor can convert a falsifiable option into a workable one. All three below are seated.

| Item | The edit | What to judge |
|---|---|---|
| `d2-q53` A | "a speech capability … the transcripts that result" → "**Azure Speech in Foundry Tools** first, then extraction with **Content Understanding**" | A is now a fully buildable pipeline that produces exactly what the stem's auditors ask for. The item survives on the stem's word *"directly"* alone. Is one qualifying adverb enough to keep a single defensible best answer? Its rationale still argues only against the *architecture* ("a separate transcription stage in front"), which is byte-identical to the pre-wave text. |
| `d2-q54` B | "each content type is served by a different product" → "**Azure AI Vision** for the photograph, **Azure Speech** for the voicemail, and document products for the rest" | B **lost its false premise**. Pre-wave it asserted something untrue; post-wave it enumerates real products and is wrong only on the word *"needed"*. Judge whether the key still wins on the concept's own terms or only on economy of integration. |
| `d2-q51` D | "Read the characters off each note…" → "Use **Azure AI Document Intelligence** to read the characters off each note…" | Passes the drift register's standing rule (`master-inventory.md:230`): D turns on OCR-plus-per-layout-rules, not on knowing a product was renamed. Note the key **lost** its entity in the same edit ("Azure Content Understanding in Foundry Tools" → "Content Understanding") — confirm the key is still self-sufficient. |

Grounding was checked and is clean: `derivation/master-inventory.md:221` releases the superseded
Document Intelligence catalogue as distractor material and `:222` blesses "Azure Speech in Foundry
Tools", so no product was invented.

## Checklist verdicts

| Preflight item | Verdict | Note |
|---|---|---|
| Source registry + legality | | Examiner finding: PASS (checklist §1) — 3 registered sources, all fields present, exclusions screened with evidence |
| Provenance chain (spot-check: `d1-q11`, `d2-q41`, `d2-q34`, `d1-q13` + your own picks) | | Examiner finding: PASS (checklist §2) |
| Validator | | Examiner finding: PASS — `pnpm validate ai-901` → **34 checks, 0 errors, 0 warnings** on the re-pinned tree (`b3851b9`). The count moved 30 → 34 because the cue-check ratchet landed after S6: `key-length-rank-share`, `rider-balance`, `named-entity-parity` and `option-pair-similarity` are new since the original checklist was written, and all four are silent here |
| Eval thresholds | | Examiner finding: PASS **on the pre-wave scores** — zero dimensions ≤2, zero open bounces (cap 2, max reached 1), zero open adjudications. **One post-wave concern for your ruling:** S5b form-a blind is **30.95% against a strict format-mix ceiling of 28.97%** (bank passes at 25.00% ≤ 30.17%). See §Post-S5 cue-rework wave |
| Deep-read sample — **extended 22 → 33 items** for the cue-rework wave (all SM + 10 random + all auto-flagged + **every reworked item**) | | **S6 core (22):** SM `d1-q13`, `d2-q34` · random `d1-q01`, `d1-q07`, `d1-q14`, `d1-q17`, `d2-q25`, `d2-q30`, `d2-q39`, `d2-q44`, `d2-q48`, `d2-q52` · flagged `d1-q11`, `d1-q12`, `d1-q21`, `d1-q23`, `d2-q36`, `d2-q37`, `d2-q38`, `d2-q41`, `d2-q47`, `d2-q50`. **Added by the wave (11):** seated `d1-q16`, `d2-q26`, `d2-q31`, `d2-q33`, `d2-q40`, `d2-q51`, `d2-q53`, `d2-q54`, `d2-q55` · reserve-only `d1-q09`, `d2-q42`. (`d2-q30`, `d2-q36`, `d2-q37`, `d2-q38`, `d2-q48` were reworked *and* already sampled.) **All 12 reworked items seated on form-a are now in the sample**; the three highest-risk named-entity fixes — `d2-q51`, `d2-q53`, `d2-q54` — are called out with what to judge in §Post-S5 cue-rework wave. **No cross-model column — Codex unauthenticated in both rounds.** `d2-q37`/`d2-q38`/`d2-q47`/`d1-q09`/`d2-q42` are bank-only (not in form-a). `d1-q21`, `d1-q23`, `d2-q41`, `d2-q50` have **no substitute** — rejecting any forces a re-authored replacement and a form rebuild |
| README statements | | Examiner finding: **OPEN** — `content/ai-901/README.md` does not exist (owner: exam-author; shape to copy: `content/aif-c01/README.md` @ `f5a877f`). Requires close-out or an explicit waiver below before PUBLISH |
| Licences in/out | | Examiner finding: PASS — repo `LICENSE` (MIT) + `LICENSE-CONTENT` (CC BY 4.0); zero `licensed_import` items inbound; the MIT community bank was classified only, no text reused |
| format_coverage disclosure | | Examiner finding: PASS (required and present) — 8 real item types vs 3 supported; build list / hot area / active screen / case studies / problem-solution **not rehearsed at all**; MR scoring stricter than the vendor's partial credit; 42-item count, 70% threshold and 45-minute limit disclosed as chosen-or-proxy |

## Gate-1 decisions ratified here

`derivation/gate1-checklist.md` was written to be ratified retroactively at this gate.

| Decision | Verdict | Note |
|---|---|---|
| D1 · weight split 42/58 (published ranges 40–45 / 55–60) | | In force in the manifest. Alternative: 43/57 |
| D2 · `exam.item_count = 42` (vendor band 40–60, no published count) | | In force; disclosed as chosen in `format_coverage` |
| D3 · `pass_threshold_pct = 70` as a disclosed proxy (real: scaled 1–1,000 / 700) | | In force; disclosed in `format_coverage` and the intro block |
| D4 · RAG / Foundry IQ admitted at 2 of 56 concepts, mechanics rejected | | In force; = 1 of 42 seats in form-a (`d2-q36`, itself a flagged item) |
| D5 · Microsoft sign-in for the official practice assessment — authorise / decline | | **OPEN.** The only source that would give the implementation half an independent reading; behind a sign-in, so nothing was read (free-first). One ruling also covers `aif-c01` and `ai-900` |
| D6 · `kittoyeah-ai901-prep` — distil / hold the exclusion | | **OPEN.** Registered, cleared, deliberately not distilled on a convergence-honesty argument. Research-manager recommends holding; examiner concurs |

## Adjudications closed at this gate

<!-- Each 3-flag and referral: item id → decision (keep / rekey / waiver / replace) → one-line reason.
     Open queue from S5: EMPTY (zero blind-solve misses in round 2).
     3-flags: d1-q11 · d1-q21 · d1-q23 · d2-q36 · d2-q37 · d2-q38 · d2-q41 · d2-q47.
     Referrals: d1-q12 (dim1 4) · d2-q50 (contaminated blind-solve evidence).
     Cue-rework wave (2026-08-19): d2-q51 · d2-q53 · d2-q54 are named-entity plausibility upgrades;
     the other 13 reworked items are in the extended deep-read sample.
     NOTE: d1-q21, d1-q23, d2-q41 and d2-q50 occupy format-forced seats with no substitute —
     "replace" on any of them means re-author + rebuild form-a, not re-seat. -->

| Item | Decision | Reason |
|---|---|---|
| `d2-q41` | | |
| `d1-q11` | | |
| `d1-q21` | | |
| `d1-q23` | | |
| `d1-q12` | | |
| `d2-q36` | | |
| `d2-q50` | | |
| `d2-q37` | | |
| `d2-q38` | | |
| `d2-q47` | | |
| `d2-q53` (wave) | | Named-entity upgrade — A is now a buildable Speech→Content Understanding pipeline, surviving on the stem's "directly" |
| `d2-q54` (wave) | | Named-entity upgrade — B lost its false premise; now wrong only on "needed" |
| `d2-q51` (wave) | | Named-entity upgrade — Document Intelligence named into D; key lost its own entity in the same edit |
| S5b form-a blind ceiling (whole form) | | 30.95% vs the strict format-mix ceiling 28.97% — accept / permute form-a's key letters and re-verify / waive |
| Cross-model gap (whole bank) | | Accept the deep-read as the compensating control, or authorise `codex login` and re-run the advisory cross-solve before signing |

## Waivers

<!-- Any item shipped below the normal bar, with the explicit reason — or "none".
     Examiner expectation: none required by the eval (zero ≤2, zero bounce-cap survivors).
     Preflight item 5 (README) needs either close-out or a waiver line here if PUBLISH is
     signed before it lands. -->

## Decision

**PUBLISH / DO NOT PUBLISH.** ____

Signed: ____, ____
