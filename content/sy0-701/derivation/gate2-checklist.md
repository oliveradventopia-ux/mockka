# Gate 2 checklist — sy0-701 (CompTIA Security+)

Assembled by exam-examiner at S6 (`/exam-publish` step 3), 2026-08-18, on the S5 round-1
bank revision (`questions.json` @ `4090ed3`; eval artifacts @ `eacb373`; `selection.json`
built in this S6 commit). `manifest.status` is now **`in_review`** — the flip to
`published` is Oliver's alone and must be recorded first in `derivation/signoff.md`.
Verdict columns in the sign-off are blank; this checklist pre-fills the evidence.

> **Re-pinned 2026-08-19 after the post-S6 cue-rework wave.** The bank under review is now
> `content/sy0-701/questions.json` @ **`d92c587`** (blob `22dad062f1`, sha256
> `9c7911cc8a71bd14…`) on `fix/cue-rework-wave` — **not** `4090ed3`, which this checklist
> originally pinned. `selection.json` is unchanged (item ids are stable). The eval artifacts in
> `eval/` still date from `eacb373` and were produced against the **pre-wave option text**;
> `derivation/signoff.md` §Post-S5 cue-rework wave states what moved, what the prior judge
> scores still cover, the re-measured S5b numbers, and how the deep-read sample was extended
> (27 → **42 items**). Validator count also moved 30 → **34 checks** (four cue checks landed
> after S6; all silent). `manifest.status` is still `in_review` — nothing was flipped.

## Exam form built at this stage

`selection.json` form-a — **90 items**: d1 11 (10 SC + 1 MR + 0 SM) · d2 20 (17+2+1) ·
d3 16 (15+1+0) · d4 25 (21+3+1) · d5 18 (15+2+1), exactly the manifest's per-domain counts
and format mix. **81 of the 82 high-priority (convergent) concepts are seated**; the 9
normal-priority seats, the one reserved high and the five merit-reserved flagged items are
argued item by item in the `selection.json` `$comment` (hand-adjustments 1–6). 32
reserve-only concepts = bank 122 − exam 90, as `selection-shape` requires.

**Structural note the reviewer should know before reading the selection argument:** the bank
holds exactly 9 `multiple_response` and 3 `scenario_matching` items and the exam mix asks for
exactly 9 and 3, domain by domain. Every MR and SM item is therefore force-seated, and the
only real choices at S6 were the 78 single-choice seats out of 110 SC bank items.

Surface-cue check re-run **on the shipped form** (not just the bank): SC key letters
A 20 / B 22 / C 19 / D 17 against an expected 19.5 — flat; the nine MR key sets are
BE · BCE · AD · CE · AC · ACE · AC · CE · BCE — no constant.

## The 7 preflight checks (methodology/06 §preflight), with evidence

| # | Check | Examiner finding | Evidence |
|---|---|---|---|
| 1 | Source registry complete, with licence basis | **PASS (one residual risk, carried from Gate 1)** | `derivation/sources.md` §Registered sources: 3 entries, each with type, author, URL, `date_accessed` 2026-08-16, licence/permission basis and usage constraint. §Blueprint authenticity records the sha256 (`64e5a75d…`, 191,074 B, 21 pp) and the byte-identical partner-mirror cross-check; the exclusions table records the ExamTopics corpus + mirrors, five self-declared dump repos, the Hamada-khairi MIT repo, a recall-lineage repo and the Quizlet/Anki class, each with evidence. Machine checks `provenance-sources`, `concept-source-registry`, `source-derivation-link` green. **Residual:** `jealarue-exam90` has **no licence file** — author retains copyright; basis is public GitHub publication + classification-only use (Gate 1 decision 1; open decision 6 below, and read it with the concentration finding under this table) |
| 2 | Every concept source-attributed (join chain resolves) | **PASS** | Validator `concept-source-registry` + `source-derivation-link` green on this exact tree. S6 spot-check, seven chains re-walked by hand across all five domains and both priorities — C-001 (d1-q01) → `b-1.1-1` + jealarue 1.4/1.12; C-041 (d2-q26 MR) → `b-2.5-10` + jealarue 2.14; C-064 (d3-q22 MR) → `b-3.4-7`/`-8` + practice-v7 3.2; C-097 (d4-q33 SM) → `b-4.9-1` + jealarue 4.14/4.32; C-112 (d5-q14 SM) → `b-5.3-3` + jealarue 5.1/5.12/5.16/5.26; and the two blueprint-only normal fills C-088 (d4-q24) → `b-4.6-7`, C-115 (d5-q17) → `b-5.4-3`. All resolve to registered ids with a derivation doc |
| 3 | Validator green | **PASS** | `pnpm validate sy0-701` → **34 checks, 0 errors, 0 warnings** on the re-pinned tree `d92c587` (status `in_review`, selection built). *Count corrected 2026-08-19 from "30 checks"; the four cue checks that landed after S6 are all silent.* Zero warnings is the correct state here, not luck: priorities are computed rather than asserted, so `concept-convergence` has nothing to flag. The aif-c01 ratchet checks `key-position-distribution` and `answer-length-cue` are both green — they were engineered against before authoring (bank keys A 28 / B 26 / C 29 / D 27; keyed-option length median 0.97× the longest distractor) |
| 4 | Eval artifacts present, thresholds met | **PASS** | `eval/blind-solve.json` (122 items, **121/122**, 120 high / 2 medium confidence, one confident miss `d4-q02` carrying `adjudication: legitimately_hard`, `adjudication_status: open_proposed` → the single open adjudication), `eval/judge-scores.json` (122 items × 6 dimensions, distractor cases argued FOR each option before scoring, **zero dimensions ≤2**, no `bounces[]`), `eval/overlap-report.md` (no finding), `eval/codex-solve.json` (`status: advisory_skipped`, four probes recorded). Bounce cap (2) untouched — **no item has ever bounced; this is the first Mockka bank to clear round 1 clean**. Full reasoning: `derivation/eval-report.md` |
| 5 | Per-exam README statements present | **OPEN — not written** | `content/sy0-701/README.md` does not exist. Required before the `published` flip (template: methodology/06 §readme-template — provenance, prior art, NDA, non-affiliation, licence). The manifest's machine-checked `nda_statement` and the intro `disclaimer` already carry the substance, including CompTIA's Authorized Materials Use Policy; what is missing is the human-facing package README that cites them, plus the **prior-art credit** the template demands for the two practice sets (CompTIA's own free V7 sampler and `jealarue/exam90`, both classification-only). **Owner: exam-author** — the examiner does not author package content beyond its `eval/` + `selection.json` surface. Does not block `in_review`. **Model to copy: `content/aif-c01/README.md`** |
| 6 | Licences recorded, both directions | **PASS (outbound), PASS (inbound, vacuous)** | Outbound: repo `LICENSE` (MIT, code) + `LICENSE-CONTENT` (CC BY 4.0, content) exist at root; the per-package restatement folds into item 5. Inbound: **zero `licensed_import` items** — the string does not occur anywhere in the package; `licensed-import-license` green with nothing to discharge. All three registered sources are read-only inputs (one blueprint distillation, two classification-only annotations), never imported text. The `jealarue-exam90` permission question is item 1's residual, not an import obligation |
| 7 | Intro block complete + `format_coverage` disclosure where required | **PASS** | `intro-presence` green: all five fields present (`about`, `audience`, 3 × `materials`, 2 × https `official_resources`, `disclaimer`). `format_coverage` **is required** — the Artefact A format analysis shows the real exam carries performance-based questions on top of the supported three — and is present and specific: MC-one-correct → `single_choice` (four options, as in every item of CompTIA's own sampler); select-two/select-three → `multiple_response` (five options, all-or-nothing, count stated in the stem); **PBQs explicitly NOT supported**, approximated two ways (genuine mappings → `scenario_matching`; one-defensible-outcome configuration reading → scenario-led `single_choice`), with the consequence stated plainly: "the underlying judgment is rehearsed, the interaction is not." Two further divergences disclosed in the same field: "maximum of 90" means a live form may be shorter, and the 81% bar is a linear proxy for the scaled 750-of-900 mark |

**Modelled numbers that survive into publication** (all three are stated in the manifest
`$comment`, the intro page and `format_coverage`): `exam.item_count: 90` is the vendor's own
stated **maximum**, not a fixed length; `pass_threshold_pct: 81` is the linear proxy
(750−100)/(900−100) = 81.25% for a scaled mark CompTIA publishes no raw conversion for
(Gate 1 decision 2); `time_limit_minutes: 90` is the vendor's real figure.

**Concentration finding — the one thing that could invalidate this form.** Selection seats
high-priority concepts first, and priority here is computed from source convergence.
Recounted at S6 on the merged concept rows: **72 of the 82 high-priority concepts have
`jealarue-exam90` as their only second source, and 71 of those 72 are seated on form-a.**
Only 10 highs (C-002, C-005, C-016, C-031, C-057, C-064, C-073, C-080, C-093, C-113) survive
on the vendor sampler. So if Gate 2 amends Gate-1 decision 1 and drops that source, the bank
does not change but **the priority field that this form was built from collapses, and form-a
must be rebuilt on a different criterion**. (The Gate 1 checklist states 68; the S6 recount
on the merged rows is 72 — the difference is counting method, and 72 is the number that
governs selection.)

## Gate 2 deep-read sample — **42 items** (was 27; 28 seated on form-a)

Per methodology/05 §handoff (every auto-flagged item + the open adjudication) ∪
`/exam-publish` step 3 (all scenario-matching + 10 random) ∪ **every item touched by the
2026-08-19 cue-rework wave** (added at the re-pin). The lists are disjoint — and the S6 sample
and the wave set turned out to be **fully disjoint**, which is exactly why the extension matters
here: before it, not one reworked item was in front of Oliver.

**D · Wave extension (15 new items).** All 9 reworked items seated on form-a are now in the
sample, plus the 6 reserve-only reworked items, because publication covers the bank:

| Added | On form? | Wave edit | What to judge |
|---|---|---|---|
| `d4-q16` | yes | `option-pair-similarity` fix: A/B trigram Jaccard 100% → 0% by adding two words | **Needs a ruling, not just a read.** A is now the only entry phrased "deny **traffic** from … **on every** port and protocol" while B/C/D all read "…from 198.51.100.0/24 to 10.20.0.15…": a 3-vs-1 surface singleton that lets a candidate eliminate the E05 transposition trap without engaging direction. The metric cannot see dotted quads (it drops tokens ≤3 chars after stripping punctuation), so a per-item waiver beats the cosmetic reword |
| `d4-q19` | yes | distractor reworded ("own hosts" → "own sending hosts") | The key still carries 5 proper-noun tokens against 3/3/0 — an acronym-expansion-policy artefact, not an item defect |
| `d1-q05`, `d2-q23`, `d3-q04`, `d4-q01`, `d5-q07`, `d5-q19`, `d5-q23` | yes | length / near-duplicate parity | distractor argued up — check it did not become co-correct |
| `d1-q11`, `d3-q09`, `d4-q05`, `d4-q21`, `d5-q04`, `d5-q22` | **no** (reserve) | length parity (`d1-q11` D gained "March") | bank coverage; rejecting a reserve item is free. Note `d1-q11` is why the bank `named-entity` rate appears to fall — it is a **denominator artifact**, hits stayed at 9 |

Not one of the 17 edited strings is a keyed option — the key text a candidate sees is exactly what
S5 round 1 judged. **The pairing that tells you which items need human reading:** all 17 distractor
rewrites left their `rationale.distractors` entry **byte-identical**, so each is refuted by an
argument written against the pre-wave string. All 17 pairs were re-read at this gate and still
land, but no validator check covers this surface.

**A · Auto-flagged + adjudication (14 — the S5 sample, unchanged).** 6 are seated; 8 are
reserve-only and can be judged last, since rejecting them costs the form nothing:

| Item | On form? | Flag | What to judge |
|---|---|---|---|
| `d4-q02` | reserve | Confident blind miss; adjudication `open_proposed` | **The one open adjudication.** Examiner chose C (BYOD handset + managed container); the key is A (COPE). Proposed verdict `legitimately_hard`: only company ownership satisfies all three stated constraints (full-device encryption, remote wipe via MDM, legal's refusal to impose either on hardware the distributor does not own). Confirm `legitimately_hard`, or rule `miskeyed` / `co_correct`. Reserved from form-a precisely so a rekey would not force a form rebuild |
| `d5-q16` | reserve | **dim1 = 3** | The bank's only dimension-1 three: option A (remediation cost) is a strong reading of "most likely to have missed"; the key wins only on the blueprint's consequences taxonomy. Accept, or bounce for a stem that asks which consequence the plan is most *exposed* to |
| `d1-q10` | seated | dim2 = 3 | Options B and C announce their own defectiveness (prose assertions, not terms). Accept, or rebuild one option as a straight practitioner answer |
| `d2-q13` | seated | dim2 = 3 | Option D is an assertion ("a hypervisor misconfiguration **must exist**"), not a candidate answer |
| `d3-q15` | seated | dim2 = 3 | Option D invents "data in archive, the fourth state in the model". Accept (sparse D19 is sanctioned) or rebuild |
| `d2-q12` | reserve (structural) | dim2 = 3 **and** dim5 = 3 | The weakest item in the bank on two axes: self-contradicting option D ("a legacy system that remains vendor-supported") over a stem that recites the EOL definition. Off-form because d2 has zero normal SC seats, not because it was dodged |
| `d2-q14` | reserve (structural) | dim2 = 3 | Option C's "side loading **alone**" rider marks it as partial |
| `d3-q08` | reserve | dim2 = 3 | Option D is self-marking ("wherever is convenient — a device this capable protects the network regardless of position") |
| `d3-q16` | reserve | dim2 = 3 | Option D is a non-parallel "notify the passengers" remedy |
| `d1-q04` | seated | dim5 = 3 | Stem's "nothing was copied out / stayed online" eliminates two options on the surface. Accept as a foundational CIA item, or re-pitch |
| `d1-q06` | seated | dim5 = 3 | Stem recites the accounting definition |
| `d2-q15` | seated | dim5 = 3 | Stem states the zero-day definition term by term — **the clearest instance of the class, and deliberately seated** |
| `d2-q04` | reserve | dim5 = 3 | "text messages" hands the channel over (also the one high-priority concept reserved from the form, per hand-adjustment 1) |
| `d2-q07` | reserve (structural) | dim5 = 3 | "plugs in a USB stick" hands the vector over |

**How the flags landed on the form, stated plainly so the reviewer can audit the selection's
independence:** 6 of 14 seated; 3 (`d2-q07`, `d2-q12`, `d2-q14`) are off the form
structurally — d2 offers 18 high-priority SC concepts for 17 SC seats, so no normal-priority
d2 single-choice item can be seated at all; the remaining 5 were reserved on merit, each
being the lowest-scoring candidate in the competition set it lost (arguments in
`selection.json` hand-adjustments 1 and 6). **Neither policy question is dodged:** the dim-5
vocabulary-recognition decision keeps 3 of its 5 instances on the form, the dim-2
throwaway-option decision keeps 3 of its 7.

**B · All scenario-matching items (3, all seated — force-seated by the format mix):**
**`d2-q25`** (indicator families onto observations), **`d4-q33`** (investigative question
onto log source), **`d5-q14`** (situation onto agreement type — the seven-agreement concept
C-112). None carries a flag; they are in the sample because scenario-matching is both the
format with the most room for a defensible second reading and this package's **PBQ
approximation** — if the approximation is unconvincing, `format_coverage` is where it shows.

**C · 10 random (deterministic rule, documented so it is reproducible):** seated form-a ids
sorted, stride ⌊90/10⌋ = 9 from index 0; when a pick is already in list A or B, advance to
the next unsampled index → **`d1-q01`, `d1-q14`, `d2-q16`, `d2-q24`, `d3-q07`, `d3-q21`,
`d4-q10`, `d4-q23`, `d5-q01`, `d5-q15`** (two per domain). Raw picks `d2-q13` and `d5-q14`
collided with lists A and B and advanced by one. `d3-q07` and `d3-q21` are additionally two
of the six normal-priority fills, so the spot-audit also tests the fill judgment.

**Suggested reading order if time is short:** `d4-q02` (the adjudication) → `d5-q16` (the
dim-1 three) → the three SM items → one representative of each policy class (`d2-q15` for
dim-5, `d2-q13` for dim-2) → the ten random → the rest of list A only if a policy ruling
comes back "unacceptable".

## Codex status (cross-model signal)

**Absent this round — the fourth consecutive exam on this machine.**
`eval/codex-solve.json` records: `which codex` → not found; the binary bundled with the
VS Code ChatGPT extension (`codex-cli 0.148.0-alpha.9`) → "Not logged in"; `codex exec` →
401 Unauthorized on both wss and https transports. Authenticating is an account action
outside this session's authority (free-first). **Consequence, stated plainly:** author and
examiner share Claude weights, so 121/122 blind agreement does *not* exclude a miskey both
models prefer. This deep read is the compensating control and carries that extra load — it
should weight the vocabulary-taxonomy items hardest, since that is where a shared-family
misreading would be least visible. Retry path: if Oliver runs `codex login` before signing,
the same keyless form is regenerable from `questions.json` and the matrix can be filled in
without re-running S5.

## Bounce ledger (cap = 2)

**Empty.** Round 1 produced zero bounces — no item scored ≤2 on any dimension, so nothing was
returned to exam-author and no item sits at bounce 1, let alone the cap. **No waiver is
required by the eval.** The 13-item quality tail in list A is a set of decisions, not defects.

## Open decisions for Oliver

1. **The dim-5 class — how much pure vocabulary recognition does a Security+ mock owe its
   candidate?** Five items (`d1-q04`, `d1-q06`, `d2-q04`, `d2-q07`, `d2-q15`; three seated)
   answerable by term-matching because the stem hands over the discriminating keyword.
   Examiner position: they ship — correctly keyed, correctly pitched *for what they are*, and
   a 122-item bank containing none of them would misrepresent a paper whose own sampler
   carries items of exactly this shape (the manifest's `intro.audience` already commits to
   near-neighbour discrimination). **This is a policy call that should be made once and
   recorded, not re-litigated per exam.**
2. **The dim-2 class — one throwaway option in seven items** (`d1-q10`, `d2-q12`, `d2-q13`,
   `d2-q14`, `d3-q08`, `d3-q15`, `d3-q16`; three seated). Each runs on three real options
   instead of four. Accept, or bounce for rebuilt options. Note the provenance: S3 rule 1
   ("every distractor is a real term from the objectives body or acronym list") was written
   down and still leaked into 7 items — which is the ratchet's input condition. **Ratchet
   proposal filed in `eval-report.md` §7:** a warning-level `distractor-term-shape` check for
   self-marking riders ("… alone", "… must exist", "the Nth thing in the model", "wherever is
   convenient"). Promote to error on a second occurrence across exams.
3. **`d4-q02` adjudication** — confirm `legitimately_hard`, or rule `miskeyed` / `co_correct`.
   A rekey does not touch form-a (the item is reserved) but does change the bank and would
   need a fresh eval entry for the touched item.
4. **`d5-q16`** — the bank's only dim-1 three (contested best answer). Accept, or bounce.
5. **Codex cross-solve** — sign off without a cross-model column, or run `codex login` first
   and have the matrix filled in (no S5 re-run needed).
6. **Gate 1 decisions carried forward** — ratified 2026-08-17 by batch "Approve all", with
   that sign-off expressly allowing amendment at Gate 2:
   (a) **`jealarue-exam90` kept** despite having no licence file (classification-only use of a
   public repository). Read with the concentration finding above: this is the load-bearing
   decision of the whole package, because dropping the source rebuilds the form.
   (b) **81% pass proxy** ratified — disclosed in three places.
   (c) **Blueprint revision 5.0 vs the alleged "Version 6.0".** Gate 1 accepted 5.0 *with a
   pre-publication re-check* from CompTIA's own download. **That re-check has not happened
   and is a publish-blocking action, not a decision** — every secondary description reports
   identical domains, weights and test details, so the data is not at risk, but the manifest
   asserts `blueprint_version: "5.0 (© 2023)"` and methodology/06 §status rule 3 drops an exam
   to `draft` if the manifest misstates the real exam's shape. Fetching it needs CompTIA's
   lead-capture form, which is a signup-adjacent action requiring Oliver's say-so.
   (d) **Retirement horizon** — SY0-701 launched 2023-11-07 and CompTIA estimates retirement
   in 2026; an SY0-801 preview is reported for ~Oct 2026 `[UNVERIFIED]`. Publishing is still
   worth it (the derivation machinery makes the re-run cheap), but the shelf life is months.
   (e) **Convergence top-up declined** (Messer pop-quiz, ExamCompass) — keeps the 40
   blueprint-only concepts single-source.
7. **README (preflight item 5)** — land `content/sy0-701/README.md` before the `published`
   flip, or record an explicit waiver line in the sign-off. A PUBLISH decision with item 5
   open and no waiver is not a sign-off (methodology/06 §signoff-template).
8. **House style vs vendor shape (informational, no blocker).** S3 rule 3 says stems should be
   short — six of ten vendor items are one sentence. This bank's stems are median 47 words /
   3 sentences. The judge scoring says the extra length buys difficulty rather than giving it
   away (it is scenario wardrobe, not a second discriminating attribute), but it is a visible
   divergence from CompTIA's own item shape. Rule it house style or drift — it is an
   authoring-guide question for every exam after this one.

**Repo-level item, unrelated to this exam and not part of this sign-off:** the ccar-p
latent-defect escalation raised in `content/aif-c01/derivation/gate2-checklist.md` is still
open — ccar-p remains `in_review` with 89 warn findings on an unaudited legacy bank.

## What Oliver signs

`derivation/signoff.md` is pre-filled with the revision hashes, the checklist items and this
sample list; **verdict columns, the adjudication decisions, waivers and the
PUBLISH / DO-NOT-PUBLISH decision are blank and his.** Two things must close before the
`published` flip: preflight item 5 (README) and open decision 6(c) (the blueprint revision
re-check) — each either done or waived in writing.
