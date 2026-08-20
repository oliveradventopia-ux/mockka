# Gate 2 — the human-only review set

**Owner:** exam-examiner · **Assembled:** 2026-08-20 · **Reader:** Oliver (principal)
**Scope:** all eight published exams — `ai-901`, `aif-c01`, `az-900`, `ccao-f`, `ccar-p`,
`clf-c02`, `gcp-cdl`, `sy0-701`.

This file exists to make a signature mean something precise. Everything below is a claim that
**no instrument in this repo can settle** — not the validator, not `tools/exploit-scan.mjs`, not
the blind solve, and not the cross-model cross-solve that landed on 2026-08-20. Read in one
sitting: roughly 20 minutes.

**Nothing here blocks anything.** All eight exams are published and signed. This is the list of
things a future reader should know were decided by a person, not by a check.

---

## 0 · What the new cross-model evidence did and did not remove

On 2026-08-20 the `codex` CLI was authenticated and `node tools/codex-crosssolve.mjs <slug>` ran
the S5 advisory cross-solve that every package had recorded as `advisory_skipped` all week.

| | |
|---|---|
| Result | **465 / 465 agreement with the answer key · 0 disagreements · 0 unparsed**, across all eight exams |
| Scope | the **served forms only** — 465 of 627 bank items. **162 reserve-only items were never solved** |
| Effect on the gate | none. Codex is advisory; its only enforcement is that a disagreement joins the Gate 2 sample. There were none, so no sample changed, no verdict changed, no `manifest.status` changed |

**It removed one thing from this list: doubt about the keys.** A solver from a different model
family, which did not write these items and never saw the key, chose the keyed option every time.
That is the decorrelation check working — author and examiner share Claude weights, and the
specific failure it exists to catch (both preferring the same wrong reading) did not fire.

**It removed nothing else, and it must not be read as clearance.** The cross-solver reports its
*best* option; it was never asked whether a second option is also defensible. A bank in which
every item had two right answers would return exactly this result. And by the same argument
[`methodology/05` §1b](../methodology/05-eval-rubric.md#cue-only-solve) uses to refuse a 100%
blind solve as proof of unexploitability, two capable models agreeing could mean both read the
same *surface* rather than the subject. What makes the agreement meaningful rather than circular
is that the surface is measured separately and sits at chance — every exam's S5b blind score is
inside its publication ceiling on both scopes. The pair is the finding; neither half carries it.

So the questions below survive the cross-solve intact.

---

## 1 · The measured size of the plausibility change (and one correction)

Measured by a recursive field-level path diff of `questions.json`, `HEAD` against the branch
merge-base `1b33eb6` — i.e. **the whole branch**: the 2026-08-19 cue-rework wave *plus* the
2026-08-20 length pass. (The per-exam sheets quote wave-only figures, which are smaller.)

| | count |
|---|---|
| New option strings across the eight banks | **201** on 130 items |
| of which **key-side** | 20 |
| of which **distractor-side — argued up, the co-correctness risk** | **181** on **127 items** |
| distractor rewrites that named a product the item did not previously name (the named-entity tier) | **29** strings on **28 items** |
| distractor rewrites whose paired `rationale.distractors` entry was **not** rewritten with them | **177 of 181** |

> **Correction to the brief that commissioned this file.** The figure "37 rewritten distractors"
> does not reconcile with anything in the repo. The verified numbers are **181 distractor strings
> on 127 items** overall, and **29 strings on 28 items** for the named-entity tier specifically.
> Neither is 37, and §2 below lists the tier item by item so the count can be checked rather than
> trusted.
>
> A second honesty note on the same instrument: the automated detector found 28 of the 29 by
> looking for capitalised tokens absent from the item's previous options. It **missed**
> `gcp-cdl` `d5-12` C ("Security Command Center" → "**Google** Security Command Center"), because
> the word *Google* already appeared in two other options of that item. That one was found by
> reading the sign-off sheets. Assume the tier is a floor, not a census.

**The 177/181 line is its own finding.** For all but four rewrites the argument that refutes the
new distractor was written against the *previous* string. Each package records that these pairs
were re-read at the gate and still land; **no validator tests this surface** and
`rationale-anti-drift` does not cover it. If you want one spot-check that would be worth more than
any other, it is opening three of the §2 items and reading the option against its own rationale.

---

## 2 · Co-correctness of the argued-up distractors — 28 items

**The question, in every case:** the option was deliberately made *more* plausible. Is it now a
second defensible answer (judge dimension 1 = co-correct → the item should have bounced), or is it
a better wrong answer (dimension 2 improved, which is what the wave was for)?

### 2a · The twelve that need a real reading

> Pairings below are matched **by text**, not by option letter — `ai-901`, `aif-c01` and `az-900`
> took key-letter permutations in the same wave, so letters do not line up across revisions.
> "→" means the same distractor before and after; the letter given is the **current** one.

| Exam | Item · option | Seated | What changed | The question to answer |
|---|---|---|---|---|
| ai-901 | `d2-q53` A | yes | "Transcribe every recording with **a speech capability** first, then run extraction over the transcripts **that result**" → "…with **Azure Speech in Foundry Tools** first, then run extraction over the transcripts **with Content Understanding**" | A is now a fully specified, buildable two-stage pipeline that produces exactly what the stem asks for. The key survives on the stem's word *"directly"*. Is one word enough for a single defensible best answer? |
| ai-901 | `d2-q54` B | yes | "Four services are needed, **as each content type is served by a different product on the platform**" → "Four services are needed: **Azure AI Vision** for the photograph, **Azure Speech** for the voicemail, and document products for the rest" | B lost its overt false premise and is now wrong only on the word *"needed"*. Does the key still win on the concept, or on integration economy? |
| ai-901 | `d2-q51` D | yes | "**Read the characters off each note** and write parsing rules per supplier layout" → "**Use Azure AI Document Intelligence to** read the characters off each note, then write parsing rules per supplier layout". In the same item the **key lost its own entity**: "Azure Content Understanding in Foundry Tools" → "Content Understanding" | Two things. D must fail on OCR-plus-per-layout-rules, **not** on knowing a product was renamed. And is the shortened key still self-sufficient without its brand? |
| aif-c01 | `4.06` D | yes | "Enabling **drift monitoring** on the production model, since a bias problem of this kind would register as distribution drift" → "Enabling **Amazon SageMaker Model Monitor** on the production model, since…" | Model Monitor with Clarify genuinely does bias analysis. D is now saved only by its own "distribution drift" premise. Co-correct, or a good wrong answer? |
| aif-c01 | `3.07` B | yes | "An AI agent's addition is retrieval: connecting the chatbot to live work-order records" → "…live work-order records **through Amazon Bedrock Knowledge Bases**" | The retrieval answer now names a real AWS service. Does "retrieval is grounding, not agency" still discriminate for a foundational candidate, or has B become a defensible answer to "what would an agent add"? |
| aif-c01 | `4.02` B | yes | "**A system-prompt instruction** listing the prohibited topics, relying on the model to follow it" → "A system-prompt instruction **stored in Amazon Bedrock Prompt Management**, listing…" | B is now a named, real practice rather than a generic one. The key wins on "an instruction is a request, not an enforcement point". Does that land at foundational level? |
| aif-c01 | `4.08` A | yes | "AWS KMS encryption of the model artifacts **and CloudTrail logging of every API call**" → "…**and AWS Config tracking configuration changes**, establishing a complete audited record" | The security/audit distractor is now a three-service enumeration and reads like a complete governance answer. Confirm "audited ≠ explained" is the discrimination a candidate is expected to make. |
| aif-c01 | `3.05` C | yes | "Whichever store the chosen embedding model dictates" → "…dictates — **Amazon OpenSearch Service** for one model, **Amazon Aurora** for another —"; the **key** was separately elaborated with a stem-derived purpose clause ("so that the team keeps the database it already runs") | Two risks in one item: is C still plainly false, and is the key's appended clause now the giveaway? This is the stem-echo mechanism, and stem-echo is this bank's strongest surface statistic (42.5%). |
| az-900 | `3.16` C | yes | "**Each surface** applies its own copy of the permission and policy rules, so the three configurations have to be kept aligned" → "Each surface — **the portal, Azure CLI and Azure PowerShell** — applies its own copy of the permission and policy rules" | C now names the three surfaces the stem describes. Confirm the enumeration is not doing the discriminating work by itself — i.e. that C is still wrong on the architecture, not merely less specific. |
| az-900 | `2.08` C | yes | "Azure Virtual Desktop, which delivers **managed instances** to reservation staff" → "…which delivers **managed Windows desktops** to reservation staff" | The old wording shared the phrase *"managed instances"* verbatim with the key. Removing it was the point. Confirm the replacement has not created a give-away contrast in the other direction. |
| gcp-cdl | `d3-10` C | yes | "Agent Registry, **the catalog** where deployed agents are listed and approved" → "Agent Registry, **the Google Cloud Console catalog** where agents are listed and approved" | The E08 fiction now asserts a specific false fact about the Console. Two questions: is a candidate expected to know no such catalog exists, and what happens to this item if Google ships an agent registry? |
| gcp-cdl | `d5-12` C | yes | "Cloud Armor for the assistant, and **Security Command Center** for alert triage" → "…and **Google Security Command Center** for alert triage" | Not a canonical Google brand, and inconsistent with `d5-14` C's canonical "Security Command Center" **in the same bank**. Already an accepted residual; one word. Accept a candidate-facing product-name inconsistency, or send it back? |

### 2b · The seventeen that are specificity parity — a scan, not a reading

Each gained a brand name to match the key's specificity. The judgement is the same each time:
**does the added name hand the key over by contrast, and does the unchanged rationale still refute
the new string?**

| Exam | Items |
|---|---|
| ai-901 | `d2-q40` B (gained "Microsoft Foundry") · `d2-q30` D ("Foundry SDK") · `d2-q51` C ("deployed in Microsoft Foundry") · `d2-q42` C (**reserve** — "a speech capability" → "Azure Speech in Foundry Tools"; this item also took a key-side edit) |
| aif-c01 | `5.08` D (Config's timeline now scoped to "Amazon SageMaker model endpoints") · `3.11` C (**reserve** — "Bedrock Model Evaluation") · `3.18` A (**reserve** — "the document store" → "the Amazon OpenSearch Service document store"; note the stem never establishes an OpenSearch store, so A may now be eliminable as scenario-fiction) |
| az-900 | `2.18` D (**reserve** — "Azure Migrate and the AzCopy command line") · `3.18` A (**reserve** — "the public Azure status view" → "the public Azure **Status** page", i.e. a real product name against the key's "Azure Service Health") |
| gcp-cdl | `d2-12` A ("a data warehouse" → "a BigQuery warehouse") · `d2-15` B ("into Cloud Storage") · `d5-14` C ("the provider's security console" → "the Security Command Center console" — read as a pair with `d5-12`) · `d3-14` B, `d4-12` D, `d4-15` A, `d6-04` B (all four **reserve-only**) |
| sy0-701 | `d1-q11` D (**reserve** — gained the word "March"; length parity, not a product) |

### 2c · Two banks with no named-entity tier but real plausibility upgrades

- **ccao-f** — 36 distractor rewrites, **zero new capitalised tokens**. The risk class here is
  *overclaim by intensifier*: **`d1-q10` A · `d4-q48` B · `d7-q77` C**, plus the closest
  co-correctness call in the bank, **`d2-q12` B**. Sheet: `content/ccao-f/derivation/signoff.md`
  §Post-S5 cue-rework wave.
- **clf-c02** — 12 rewrites, all length parity, no new entities: `1.01`, `1.07`, `2.03`, `2.14`,
  `2.17`, `2.19`, `3.01`, `3.08`, `3.09`, `3.10`, `3.16`, `4.07`. All 12 are in the extended
  deep-read sample (22 → 32).
- **az-900** carries the largest raw count (44 strings on 22 items) and took a key-letter
  permutation in the same wave, so `eval/blind-solve.json`'s recorded letters no longer map to the
  bank. The four entity rewrites are in §2a/§2b; the rest are length parity.

---

## 3 · Rulings already recorded that only a person could have made

These are in the signed sheets. They are listed here so that a reader knows the signature covered
them specifically, and so a future wave reworks rather than rediscovers them.

| # | Exam | Subject | The question a human answered — and where it lives |
|---|---|---|---|
| 1 | **sy0-701** | **`d4-q16` — the one waiver in the wave** | The `option-pair-similarity` fix left A as the only ACL entry phrased "deny traffic from … on every port and protocol" while B/C/D all read "…from 198.51.100.0/24 to 10.20.0.15…". A 3-vs-1 surface singleton lets a candidate eliminate the E05 transposition trap without engaging direction. **The metric provably cannot see it** — it drops tokens ≤3 characters after stripping punctuation, so dotted quads vanish. Ruling taken: **per-item waiver, ships as authored with the defect named**, on the argument that a cosmetic reword would satisfy the metric and hide the problem. `signoff.md` §Waivers. **Re-affirm or reverse.** |
| 2 | **ccar-p** | **`5.11` — accepted narrowing** | A machine-assisted trim narrowed the key to "every **subprocessor** in the data path" while its own rationale argues the wider "every **component** in the data path" and never uses the word *subprocessor*. Accepted as-is at the 2026-08-19 UAT (section D3) and logged for a future reword. `signoff.md` Verdict — Entry 1. **Still acceptable, or reword now?** |
| 3 | **clf-c02** | **2 open `named-entity-parity` warnings** | Bank 11/27 = **41%**, form-a 9/21 = **43%**, against a 40% warn bound and 25% chance: the option naming the most proper-noun AWS services is the key more often than chance. **Untouched by the length pass and still open** — closing it needs real sibling service names *authored into* distractors, which is an authoring lane, not an examiner edit. Warn, not error; S5b consequence is inside the ceiling on both scopes. **The only exam shipping with open validator warnings of this class.** |
| 4 | **gcp-cdl** | **S1 artefact scrub still open** | `derivation/source-gcp-cdl-samples.md` lines 151/157. No source text reaches the bank (`source-phrase-reuse` is clean on the shipping revision), so it is derivation-doc hygiene, not a content defect — but PUBLISH was taken **knowingly leaving it open**. |
| 5 | **ccao-f** | **Clean-room finding F-3** and **`d7-q75`** | F-3: the Artefact A derivation doc quotes vendor stems as craft evidence; no vendor text reaches the bank, and the ≥5-word quoted-span validator ratchet that would catch it **remains unbuilt**. `d7-q75` is the bank's weakest item, **reserved off form-a** — it ships in the bank but is never served, and was not covered by the cross-solve either. |
| 6 | **sy0-701** | **`d4-q02` — the only confident blind-solve miss in the wave** | Closed at the gate as **`legitimately_hard`**: only company ownership (COPE) satisfies all three stated constraints, which is concept C-066's own claim. `eval/blind-solve.json` still carries `adjudication_status: open_proposed` as the as-measured record; the sheet is where it closed. |
| 7 | **aif-c01** | **Stem-echo at 42.5% bank / 35.7% form** (chance 25%) | The strongest surface statistic in any of the eight banks, and **uninstrumented** — no validator check and no exploit-scan strategy measures it. Accepted, not waived. This is exactly the surface a cross-model agreement could be sitting on, which is why the 465/465 does not close it. |
| 8 | **ai-901** | **Four items with no substitute** | `d1-q21`, `d1-q23`, `d2-q41`, `d2-q50` occupy format-forced seats. Rejecting any one of them means **re-authoring a replacement and rebuilding form-a**, not re-seating. Kept at the gate. |
| 9 | **ccar-p** | **`1.01` and `2.01` — named-entity key cue** | The key is the only option naming a concrete product ("Claude") / tier ("Sonnet"), and in `2.01` also the longest. Documented next-wave scope rather than a defect. Also open: the **seating residual** — 6 of 8 unseated high-priority concepts have a free swap; the examiner left the recap-only seats in place and Oliver confirmed. |
| 10 | **sy0-701** | **Rider channel fully inverted** | `rider-marks-key` is **0/6 bank and 0/4 form** — 0% against 25% chance. Every rider in this bank sits on a distractor. Sibling lanes seated a key-side rider in the same wave; sy0-701 did not. Accepted as a residual. |
| 11 | **sy0-701** | **Gate-1 6c** | Re-check the CompTIA blueprint revision against the vendor's own download before relying on it. **Not waived — carried open**; the manifest's recorded revision is unchanged by the sign-off. |
| 12 | **ai-901** | **Gate-1 D5 / D6** | D5: authorise or decline a Microsoft sign-in for the official practice assessment — the only source that would give the implementation half an independent reading (one ruling also covers `aif-c01` and `ai-900`). D6: `kittoyeah-ai901-prep` registered, cleared, deliberately **not** distilled on a convergence-honesty argument. Both carried open. |

---

## 4 · What this file deliberately does not cover

So that the signature is bounded rather than blanket:

- **Anything a check already proves.** `pnpm validate` (0 errors, 8 packages), `pnpm test`,
  `node tools/exploit-scan.mjs` and the harness drift check are machine evidence and are not
  re-litigated here.
- **Key correctness on the served forms.** Now carried by the 465/465 cross-model column *in
  conjunction with* surface-at-chance, per §0. It is no longer a human-only claim.
- **The 162 reserve-only bank items.** They were not cross-solved and are not individually listed
  here — the exams' own deep-read samples cover the flagged ones. If a future reader wants
  bank-wide cross-model coverage, the instrument supports it: `node tools/codex-crosssolve.mjs
  <slug> --bank`.
- **Re-opening any published verdict.** Every sheet's decision stands. This is a reading list, not
  a bounce report.

---

### Where to look

| For | Read |
|---|---|
| The full argument on what the cross-solve licenses | any `content/<slug>/derivation/eval-report.md` §Cross-model column |
| The wave's blast radius, item by item | `content/<slug>/derivation/signoff.md` §Post-S5 cue-rework wave |
| The rulings in §3, in their signed context | `content/<slug>/derivation/signoff.md` §Waivers, §Adjudications closed at this gate |
| The rule that stops agreement being read as clearance | [`methodology/05` §codex-interpretation](../methodology/05-eval-rubric.md#codex-interpretation) |
