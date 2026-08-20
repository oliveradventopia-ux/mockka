# Gate 2 sign-off · clf-c02

> Prepared by exam-examiner; **signed by Oliver Lau on 2026-08-20**. Verdict columns,
> adjudication decisions, waivers and the decision below are recorded, not blank.
> Working paper: `derivation/gate2-checklist.md` §Gate 2 final pass.

- **Date:** 2026-08-20 · **Reviewer:** Oliver Lau (the human, not an agent)
- **Bank revision (re-pinned 2026-08-20 — the shipping revision):** `questions.json` @ **`793dde2`** — blob `cb76d1e9ae`, sha256 `8eb8213c81458f18…`, committed 2026-08-20 on `fix/cue-rework-wave`. `selection.json` is unchanged and item ids are stable, so form-a's composition is exactly as seated. Supersedes every earlier pin in this file.
- **Eval artifacts:** blind-solve @ `10ccb89` (r2, 2026-08-18) · judge-scores @ `10ccb89` (r2) · overlap-report @ `10ccb89` (r1 + r2 delta) · codex-solve @ `10ccb89` (**advisory_skipped ×2 rounds**) · round-1 preserved at `eval/*-r1.json` · **codex-solve RE-RUN @ `d9da399` (2026-08-20, after this sign-off) — form-a 50/50 agreement with the key, 0 disagreements, 0 unparsed; see §Addendum A for what that does and does not license**
- **Exam form under review:** `form-a`, 50 items — d1 12 (10 SC + 2 MR) · d2 15 (12 + 3) · d3 17 (14 + 3) · d4 6 (5 + 1); 41 single_choice + 9 multiple_response + 0 scenario_matching

## Gate 2 final pass — 2026-08-20

This sign-off is recorded against a re-pinned revision and a **corrected acceptance standard**.
Both are stated here so a reader can see what a PUBLISH signature covers.

- **Re-pinned.** `questions.json` @ **`793dde2`** — blob `cb76d1e9ae`, sha256 `8eb8213c81458f18…`, committed
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
  **Result on the shipping revision: bank 25.00% ≤ 29.87% · form-a 26.00% ≤ 30.14% — PASS on both
  ceilings, both scopes.**
- **Validator on the pinned tree, at `published`:** `35` checks, `0` errors, `2` warnings.
- **Deep-read sample:** **22 → 32 items** — extended to cover every item the post-re-pin content pass touched: 1.01, 2.03, 2.14, 2.17, 3.01, 3.08, 3.09, 3.10, 3.16, 4.07.
- **README preflight row closed.** `content/clf-c02/README.md` exists and carries every section
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
| Source registry + legality | **PASS** | Examiner finding: PASS (checklist §1) — note `aws-official-question-set` registered but never accessed; the two TheServerSide sources count as one voice |
| Provenance chain (spot-check: 1.03, 2.16, 3.15, 4.06 + your own picks) | **PASS** | Examiner finding: PASS (checklist §2) |
| Validator | **PASS** | Examiner finding: PASS — 30 checks, 0 errors, 0 warnings on this tree at `in_review` — **RE-RUN 2026-08-20 on the shipping revision `793dde2`: **35** checks, 0 errors, 2 warnings.** Any tree or count named earlier in this row refers to a superseded pin. *(Count is 35, not 34: `publication-preflight` is `when: status === 'published'`, so it runs only after the flip — the pre-flip run of the same tree reported 34.)* |
| Eval thresholds | **PASS** | Examiner finding: PASS — 68/68 blind, zero dimensions ≤2, zero open bounces, zero open adjudications — **RESTATED 2026-08-20 — this row carried no S5b figure at all.** S5 and S6 both closed before the cue-only-solve instrument existed, and this exam was not in the cue-rework wave. Re-measured with the corrected instrument, the previously pinned revision `168ae1f` **breaches the ceiling on the served form** (form-a 32.00% against 30.14%; bank 29.41% cleared by 0.46 pt), which is why a length pass landed. The first recorded verdict is: **bank 25.00% ≤ 29.87% · form-a 26.00% ≤ 30.14% — PASS on both ceilings, both scopes.** See §Gate 2 final pass above and `derivation/eval-report.md` §s5b-final. |
| Deep-read sample (22 items; no scenario_matching exists for this exam) — 3s: 1.05, 1.07, 1.09, 2.01, 2.04, 2.05, 2.06, 2.19, 3.11, 3.14 · bounce survivor: 1.10 · dim1-4 referred: 4.05 · 10 random: 1.02, 1.11, 1.15, 2.07, 2.11, 2.20, 3.05, 3.12, 3.17, 4.02 | **PASS** | **Cross-model column now present** — Codex ran 2026-08-20, after this sign-off: form-a 50/50 agreement, 0 disagreements. It vouches for the **keys**, not for the co-correctness of the reworked distractors, which is what this sample is for (§Addendum A). A convergent author/examiner blind spot is not excluded by 68/68; this deep read is the compensating control. **Extended 22 → 32 at the 2026-08-20 final pass** — 1.01, 2.03, 2.14, 2.17, 3.01, 3.08, 3.09, 3.10, 3.16, 4.07 added, so all 12 items touched by the length pass are sampled. |
| README statements | **PASS** | Examiner finding: **OPEN** — `content/clf-c02/README.md` does not exist (owner: exam-author; worked reference at `content/aif-c01/README.md`). Requires close-out or an explicit waiver below before PUBLISH — **CLOSED 2026-08-20.** `content/clf-c02/README.md` now exists (committed on `fix/cue-rework-wave`) and carries every section methodology/06 §readme-template requires: provenance and independence, prior art, NDA statement, non-affiliation with the named trademark holder, and the outbound licence pair (content CC BY 4.0 / code MIT). No `licensed_import` items exist in this bank, so the template's Licensed-content section is correctly absent. **Closed by the file, not waived** — any "OPEN" text earlier in this row predates it. |
| Licences in/out | **PASS** | Examiner finding: PASS — repo `LICENSE` (MIT) + `LICENSE-CONTENT` (CC BY 4.0); zero `licensed_import` items inbound |
| format_coverage disclosure | **PASS** | Examiner finding: PASS — real exam's two item types are a strict subset of Mockka's three (100% coverage), with the two uncalibrated-MR-width and MR-share caveats disclosed |

## Adjudications closed at this gate

<!-- Each 3-flag, bounce survivor and referred item: id → decision (keep / rekey / waiver / replace) → one-line reason.
     Open queue from S5: EMPTY (zero blind-solve misses in round 2).
     "seated" = on form-a; "reserve" = in the bank only. Substitutes are listed in the checklist table. -->

| Item | On form? | Decision | Reason |
|---|---|---|---|
| 1.05 | seated | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 1.07 | reserve | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 1.09 | seated | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 2.01 | reserve | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 2.04 | seated | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 2.05 | reserve | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 2.06 | seated | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 2.19 | reserve | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 3.11 | seated | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 3.14 | reserve | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 1.10 (bounce survivor) | seated | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| 4.05 (dim1 = 4) | seated | keep | Published unchanged. The examiner's recorded finding stands, no dimension is ≤2, no rework was requested, and Oliver's 2026-08-20 instruction was to sign off and go ahead. |
| Pitch line (1.08 / 3.19 near-misses — keep at 4, or move the line?) | both seated | keep at 4 | The line is not moved by this sign-off; both items ship as scored. |

## Selection decisions to confirm or overturn

<!-- The three hand-adjustments where the examiner exercised judgment (selection.json $comment,
     checklist §"The exam form"). Confirm, or name the substitute. -->

| Decision | Confirm / change |
|---|---|
| d1 second MR seat: `1.05` (WA pillars) seated, `1.12` (on-prem hidden costs) reserved | confirmed |
| d3 MR seats: `3.04`, `3.11`, `3.19` seated, `3.14` reserved | confirmed |
| d4 MR seat: `4.06` (support tiers) seated, `4.03` (charged data movements) reserved | confirmed |
| Repeated verticals across domains (8 of 50 items) — accept, or re-shuffle / ask the author for more verticals | accept — no re-shuffle |

## Gate 1 defaults carried forward (amendable here)

<!-- Ratified by batch approval 2026-08-17; amend any of them at this gate or leave as-is. -->

| Gate 1 decision | Standing default | Amend? |
|---|---|---|
| Skill Builder top-up (free official 20-question set) | Approved in principle, **never run** — 50% of concepts remain blueprint-only | carried open — never run |
| Pass threshold | 70% raw proxy for scaled 700/1,000 | no amendment |
| Pacing | 90 minutes kept for 50 items, disclosed (~28% generous) | no amendment |
| MR share | 18%, all choose-2-of-5 | no amendment |
| Tutorials Dojo sampler | Accepted, classification-only, `[UNVERIFIED]` originality statement | no amendment |

## Waivers

**None.** Zero dimensions ≤2, zero open bounces, zero blind-solve misses in round 2, every preflight row PASS. The README preflight item is **closed by the file**, not waived.

One residual is **accepted, not waived**, and a reader should see it plainly: the two `named-entity-parity` warnings (bank 11/27 = 41%, form-a 9/21 = 43%, against a 40% warn bound and 25% chance). The option naming the most proper-noun AWS services is the key more often than chance. The 2026-08-20 length pass did not touch it and could not — closing it needs real sibling service names authored into distractors, which is an authoring lane, not an examiner edit. It is a warn rather than an error, and the combined S5b consequence sits inside the publication ceiling on both scopes.

## Decision

**PUBLISH.** Every preflight row is PASS on the re-pinned revision `793dde2`; the S5b cue-only ceiling holds on both the bank and the served form under the corrected standard; the README preflight row is closed by the file; and the content UAT was reviewed with no findings logged.

Signed: Oliver Lau, 2026-08-20 — instruction of record: "sign off and go ahead", given after reviewing `UAT/HUMAN-UAT-2026-08-19-new-exams.md`.

---

## Addendum A — cross-model column, recorded 2026-08-20 after the sign-off

**This addendum adds evidence to the decision above. It does not change it.** The verdict, the
checklist verdicts, the adjudications, the waivers and `manifest.status` are exactly as signed.

The `codex` CLI was authenticated on 2026-08-20 (ChatGPT auth, no per-request billing), so the S5
advisory cross-solve recorded as `advisory_skipped` throughout this package's history has now run.
`node tools/codex-crosssolve.mjs clf-c02` served form-a keyless to a different model family and diffed
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
This wave rewrote 12 distractor strings across 12 items specifically to be *more* plausible, and that is precisely the risk a key-agreeing cross-solve is blind to. The deep read remains the sole control there. And by the same argument
[§1b](../../../methodology/05-eval-rubric.md#cue-only-solve) makes about the blind solve, agreement
between two capable models could in principle mean both read the same surface rather than the
subject; it reads as evidence about the subject here only because the surface is measured
separately and is at chance (S5b form-a **26.00% ≤ 30.14%**). The 18 reserve-only items were
not solved at all.

Full reasoning: [`eval-report.md`](eval-report.md) §Cross-model column. The human-only questions
this leaves open across the wave: [`content/GATE2-HUMAN-ONLY.md`](../../GATE2-HUMAN-ONLY.md).
