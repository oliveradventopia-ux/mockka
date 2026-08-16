# Artefact A · `jealarue/exam90` SY0-701 question set distillation

**What this is.** The public GitHub repository `jealarue/exam90` ships a browser-based SY0-701
practice exam whose data file contains **145 questions** (the repository's own header comment still
describes the original 90-item form; the bank has since grown). This document records, for each
item, **the concept it tests** and **how each wrong option is constructed**.

**Why it exists.** It is one input to the master concept inventory. It answers the question "what
does an independent author, reading the same public blueprint, believe is tested?" — and, because it
is the only accessible source of any size, it is the only convergence signal available against the
blueprint.

**What it is not.** It is not a copy of the source material. No question text, option text or
rationale prose is reproduced here — only the analytical classification. Nothing in this document
can be used to reconstruct the original questions.

> Source: `jealarue-exam90` in [sources.md](sources.md). **No licence file — see the Gate 1 legality
> item in the registry.** Credited in the exam README if it survives Gate 1.

## Dump screening — what was checked, and what it proves

Security+ is the most dump-saturated exam in this catalogue, so this source was screened before it
was read, using the method proven on AIF-C01 (screen by content, lowest ids first, never by licence
file):

1. **Against the official sample corpus.** Every one of the 145 stems was token-compared against all
   ten `comptia-practice-v7` items. Highest Jaccard similarity found anywhere in the 1,450 pairs:
   **0.14**, and that pair is two unrelated items that both happen to use the word "incident".
   This matters because the ExamTopics SY0-701 corpus is *seeded with the official ten* in its
   lowest-id band — a dump-derived bank almost always carries them, and this one carries none.
2. **Lowest ids, verbatim.** Items 1 and 4 were searched verbatim on the open web with their
   distinguishing option text. No hit in any dump corpus, mirror or aggregator.
3. **Style markers.** The data carries per-item `wrongHint` annotations, an `[ACRONYM]` item class,
   a `(Scenario)` stem prefix, capitalised qualifiers (PRIMARY/BEST/MOST) and en-dashed topic
   labels. None of these appear in the recalled-item corpus, whose house style is a numbered
   `topic N question M` stem with no author apparatus.
4. **Self-declared provenance.** The data file's header names its own generation input (a dated
   markdown practice-exam file in the same repository lineage) and states the domain weighting it
   was built to — not a dump export.

**Screening is evidence of absence, not proof of originality — recorded as such.** Two
counter-indications are recorded honestly below: the bank's own objective sub-numbering is
frequently wrong, and a substantial minority of items test terms the blueprint never names. Neither
is a dumps signal; both are signals that the author worked from general security knowledge as much
as from the objectives document, which is exactly why this source is a convergence input and not an
authority.

## Proposed theme set and pattern extensions

Both Artefact-A documents in this package use the S1–S7 theme set and the E01–E05 pattern extensions
proposed in [`source-comptia-practice-v7.md`](source-comptia-practice-v7.md); **declaring them is
S3's call**, not this session's. D-patterns from the shared registry used below: D01
over-engineering, D05 symptom-treatment, D06 wrong-layer, D07 detective-for-preventative, D11
non-architectural-criteria, D14 dogma, D19 false-technical-claim.

## Format mix observed

| Domain | Single choice | Multiple response | Scenario matching | Total | of which scenario-led | of which acronym-expansion |
|---|---|---|---|---|---|---|
| d1 General Security Concepts | 18 | 0 | 0 | 18 | 4 | 4 |
| d2 Threats, Vulnerabilities, and Mitigations | 30 | 2 | 0 | 32 | 8 | 4 |
| d3 Security Architecture | 26 | 0 | 0 | 26 | 5 | 6 |
| d4 Security Operations | 39 | 1 | 0 | 40 | 11 | 6 |
| d5 Security Program Management and Oversight | 28 | 1 | 0 | 29 | 7 | 4 |
| **Total** | **141** | **4** | **0** | **145** | **35** | **24** |

Asymmetries worth preserving or correcting, explicitly:

- **The domain mix is the best-calibrated thing about this source.** Observed
  12.4 / 22.1 / 17.9 / 27.6 / 20.0 % against the blueprint's 12 / 22 / 18 / 28 / 20 — within half a
  point everywhere. The author weighted deliberately and it worked. **This is the one asymmetry to
  inherit rather than correct.**
- **Multiple response is under-used at 4 items (2.8%).** All four are "select two" of five options.
  CompTIA does not publish a per-type ratio, so there is no evidence this is wrong — but 2.8% is
  almost certainly below the real paper, and a bank with four multiple-response items cannot
  rehearse the format.
- **Zero performance-based approximation.** No item asks the candidate to read a configuration,
  order a sequence, or map several prompts onto a set of responses. The one construction in any
  accessible source that approximates a PBQ is the official set's access-list item — this source has
  no equivalent. **This is the format gap the manifest's `format_coverage` disclosure has to own.**
- **24 items (17%) are acronym expansions.** They test the SY0-701 acronym table, not an objective:
  three of the four options are invented expansions that a candidate eliminates on sight. They
  inflate the item count without adding concept coverage, and they are 72 of the 435 wrong-option
  slots. **Do not inherit; see the E04 ban proposed in the official set's distillation.**
- **35 items (24%) are scenario-led, and the scenarios are one sentence long.** The `(Scenario)`
  prefix mostly buys a described situation rather than a genuine judgment — in about a third of them
  the scenario names the answer's own vocabulary. Correct by making the scenario's surface features
  point *away* from the right principle, per the authoring guide.
- **Option shapes are parallel and full-sentence throughout.** No bare-label padding of the kind the
  AIF-C01 build had to ban. Craft credit where it is due.

## Domain 1 · General Security Concepts (18 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 1.1 | least privilege limits how far a compromised account reaches (b-2.5-7) | S1 | D11 ×3 non-architectural-criteria (cost, database performance, workflow convenience offered against a security question) |
| 1.2 | continuous verification with no implicit network trust is Zero Trust (b-1.2-7) | S1 | E01 ×3 sibling-term-substitution (three other architecture postures) |
| 1.3 | acronym expansion — ZTNA | — | E04 ×3 acronym-decoy-expansion — **off-blueprint: ZTNA appears nowhere in the objectives or acronym list** |
| 1.4 | policy-and-training artefacts are managerial controls (b-1.1-1) | S1 | E01 ×3 sibling-term-substitution (the other three categories) — **key is contestable: the blueprint's *Operational* category covers people-executed activity such as awareness training; see craft note** |
| 1.5 | a physical barrier that removes the option is a preventive control (b-1.1-2) | S1 | E01 ×3 sibling-term-substitution (three other control types) |
| 1.6 | silent unauthorised modification violates integrity (b-1.2-1) | S1 | E01 ×2 sibling-term-substitution (the other two CIA properties), E02 ×1 adjacent-control-swap (an accounting concept offered as a CIA property) |
| 1.7 | a review board assessing proposal, risk and rollback is the approval step (b-1.3-1) | S5 | E03 ×3 lifecycle-stage-slip (three other change-management elements from the same bullet list) |
| 1.8 | a signature that prevents later denial achieves non-repudiation (b-1.2-2, b-1.4-11) | S1 | E01 ×3 sibling-term-substitution (three other fundamental security properties) |
| 1.9 | acronym-framed — the published list of revoked certificates is the CRL (b-1.4-14) | S1 | E02 ×3 adjacent-control-swap (three other real PKI components that do not publish revocations) |
| 1.10 | real-time single-certificate status without downloading a list is OCSP (b-1.4-14) | S2 | E01 ×1 sibling-term-substitution (the list-based alternative), E02 ×2 adjacent-control-swap (two unrelated directory/enrolment protocols) |
| 1.11 | an HSM's advantage is tamper-resistant generation and storage of keys (b-1.4-7) | S2 | D11 ×2 non-architectural-criteria (performance, licensing cost), E02 ×1 adjacent-control-swap (backup convenience) |
| 1.12 | full-disk encryption deployed by software is a technical control (b-1.1-1) | S1 | E01 ×3 sibling-term-substitution (the other three categories) |
| 1.13 | a volumetric flood that denies legitimate use violates availability (b-1.2-1) | S3 | E01 ×2 sibling-term-substitution (two other CIA properties), E02 ×1 adjacent-control-swap (non-repudiation offered as a CIA property) |
| 1.14 | acronym expansion — MFA | — | E04 ×3 acronym-decoy-expansion |
| 1.15 | issuing from an intermediate rather than the offline root limits what must be revoked on compromise (b-1.4-13) | S4 | D19 ×2 false-technical-claim (a performance claim, a browser-behaviour claim), D19 ×1 false-consequence-claim (that it removes the need for revocation checking) |
| 1.16 | acronym expansion — AAA (b-1.2-3) | — | E04 ×3 acronym-decoy-expansion |
| 1.17 | hashing is one-way and fixed-length; encryption is reversible with the key (b-1.4-9) | S1 | D19 ×3 false-technical-claim (a key-length claim, a speed claim, a confidentiality claim) |
| 1.18 | an emergency change still goes through change management, on an expedited track (b-1.3-1) | S5 | E03 ×1 lifecycle-stage-slip (the standard track applied to an emergency), D14 ×1 dogma (skip the process because it is an outage), D15 ×1 deferral (wait for the next window) |

**Domain 1 observation.** Competent and blueprint-shaped, with two structural problems. First, item
1.4's key is arguably wrong: the objectives place *awareness training* and other people-executed
activity under **Operational**, while *policies* are Managerial — the item bundles both and keys to
Managerial. An item whose stem mixes two categories and keys to one is unanswerable as written;
**S3 should take the concept (b-1.1-1) and drop this item's framing**, and the authoring guide should
require that a category item name exactly one artefact. Second, four of eighteen items are pure
acronym expansions contributing nothing to concept coverage. Nothing here tests the two-axis
category/type judgment (b-1.1-3), the Zero Trust plane components (b-1.2-8/9), deception technology
(b-1.2-12), physical sensors (b-1.2-11), key escrow (b-1.4-2), encryption level (b-1.4-3), or the
obfuscation family (b-1.4-8).

## Domain 2 · Threats, Vulnerabilities, and Mitigations (32 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 2.1 | encrypting files and demanding payment identifies ransomware (b-2.4-1) | S1 | E01 ×3 sibling-term-substitution (three other malware families) |
| 2.2 | processes hidden from user-mode tools but visible at kernel level indicate a rootkit (b-2.4-1) | S3 | E01 ×3 sibling-term-substitution (three other malware families) |
| 2.3 | registering a lookalike domain to catch mistyping is typosquatting (b-2.2-12) | S1 | E01 ×3 sibling-term-substitution (three other name-abuse techniques) |
| 2.4 | acronym-framed — APT as a sustained, stealthy, well-resourced adversary (b-2.1-2) | — | E04 ×3 acronym-decoy-expansion |
| 2.5 | direct financial gain as a motivation points to organised crime (b-2.1-3, b-2.1-4) | S3 | E01 ×3 sibling-term-substitution (three other actors, each with a different motivation) |
| 2.6 | unsanitised concatenation of input into a query enables SQL injection (b-2.3-5) | S3 | E01 ×1 sibling-term-substitution (the other web flaw), E02 ×2 adjacent-control-swap (two non-web memory/session attacks) |
| 2.7 | a script persisted server-side and executed for every visitor is stored XSS (b-2.3-5) | S3 | E01 ×2 sibling-term-substitution (two other XSS variants), E01 ×1 (the sibling web flaw) |
| 2.8 | a rogue AP mimicking a legitimate SSID is an evil twin (b-2.4-5) | S3 | E02 ×3 adjacent-control-swap (three other wireless/replay attacks) — **off-blueprint: "evil twin" is not named in the objectives; carry the concept as b-2.4-5 wireless on-path, drop the term** |
| 2.9 | many failed logons from one source across many accounts, then one success (b-2.4-9) — *multiple response* | S3 | E02 ×2 adjacent-control-swap (a post-authentication technique, a privilege technique), E02 ×1 (a volumetric attack) |
| 2.10 | segmentation limits lateral movement (b-2.5-1) | S1 | D11 ×2 non-architectural-criteria (bandwidth, password hygiene), D14 ×1 dogma (that it eliminates phishing) |
| 2.11 | an urgent payment request appearing to come from an executive is BEC (b-2.2-10) | S3 | E01 ×3 sibling-term-substitution (three other phishing variants distinguished by target or channel) |
| 2.12 | acronym-framed — IOC | — | E04 ×3 acronym-decoy-expansion |
| 2.13 | ARP replies mapping the gateway IP to the attacker's MAC (b-2.4-5) | S3 | E01 ×3 sibling-term-substitution (three other layer-2/3 attacks) — **off-blueprint term; keep the on-path concept** |
| 2.14 | removing unused services, default accounts and features is hardening (b-2.5-10) | S1 | E02 ×3 adjacent-control-swap (patching, tokenization, sandboxing offered against a surface-reduction question) |
| 2.15 | a guest breaking hypervisor isolation is VM escape (b-2.3-7) | S1 | E01 ×3 sibling-term-substitution (three other isolation-failure terms) |
| 2.16 | memory marked non-executable blocks code execution there (—) | S2 | E01 ×3 sibling-term-substitution (three other memory mitigations) — **off-blueprint: DEP/NX, ASLR, stack canaries are not in the objectives** |
| 2.17 | acronym-framed — CVSS (b-4.3-8) | — | E04 ×3 acronym-decoy-expansion |
| 2.18 | compromising a trusted vendor's update channel to reach its customers is a supply-chain attack (b-2.2-7, b-2.3-9) | S1 | E02 ×2 adjacent-control-swap (physical logistics, hardware theft offered as "supply chain"), E01 ×1 (a courier-themed phishing framing) |
| 2.19 | unknown, unpatched, unsignatured is a zero-day (b-2.3-13) | S1 | E01 ×3 sibling-term-substitution (three other vulnerability classes) |
| 2.20 | a compromised industry site targeting a sector's visitors is a watering-hole attack (b-2.2-11) | S3 | E01 ×3 sibling-term-substitution (three other targeting techniques) |
| 2.21 | signing DNS records defends resolvers against forged responses (b-2.4-4) | S2 | E02 ×3 adjacent-control-swap (three real DNS privacy/extension protocols that do not authenticate records) — **off-blueprint terms; keep the b-2.4-4 concept** |
| 2.22 | acronym expansion — DDoS (b-2.4-3) | — | E04 ×3 acronym-decoy-expansion |
| 2.23 | a bank-themed text message with a shortened link is smishing (b-2.2-8) | S1 | E01 ×3 sibling-term-substitution (three other social-engineering channels) |
| 2.24 | exploiting a flaw to move from a low-privileged account to system rights is vertical privilege escalation (b-2.4-7) | S1 | E01 ×2 sibling-term-substitution (lateral movement, horizontal escalation), E02 ×1 adjacent-control-swap (a credential-reuse technique) |
| 2.25 | heap versus stack corruption told apart by which memory region is involved (—) | S1 | D19 ×3 false-technical-claim (a language claim, an exploitability claim, a privilege claim) — **off-blueprint** |
| 2.26 | a state-changing request ridden on an authenticated session is CSRF (b-2.4-7 forgery) | S3 | E01 ×3 sibling-term-substitution (three other browser/session attacks) — CSRF is acronym-list-only; **carry b-2.4-7 *forgery* as the concept** |
| 2.27 | executing an unknown file in a constrained, instrumented environment is sandboxing (b-4.1-8) | S2 | E02 ×3 adjacent-control-swap (segmentation, allowlisting, patching offered against a detonation requirement) |
| 2.28 | strong phishing indicators are urgency-plus-threat and a near-miss sender domain (b-5.6-1) — *multiple response* | S3 | D19 ×2 false-indicator-claim (two legitimate-mail properties framed as suspicious), E02 ×1 adjacent-control-swap (a personalisation cue offered as an indicator) |
| 2.29 | a departing employee bulk-copying customer records is the malicious insider (b-2.1-1) | S3 | E01 ×3 sibling-term-substitution (three external actor types) |
| 2.30 | time-of-check/time-of-use flaws are race conditions (b-2.3-2) | S1 | E01 ×3 sibling-term-substitution (three other application vulnerability classes) |
| 2.31 | a sentinel value guarding the saved return address detects stack smashing (—) | S1 | E01 ×3 sibling-term-substitution (three other memory mitigations) — **off-blueprint** |
| 2.32 | a voice call impersonating a help desk is vishing (b-2.2-8) | S1 | E01 ×3 sibling-term-substitution (three other social-engineering channels) |

**Domain 2 observation.** The strongest domain for coverage and the weakest for blueprint discipline.
It tests the malware family list, the actor list and the social-engineering channel list thoroughly
— all three are exactly the enumerated bullets the objective supplies, which is right. But **six of
thirty-two items (2.8, 2.13, 2.16, 2.21, 2.25, 2.31) are keyed to terms the objectives document
never uses**: evil twin, ARP poisoning, DEP/NX, DNSSEC/DoT/DoH, heap-versus-stack, stack canaries.
The underlying concepts (wireless on-path, DNS attacks, application vulnerability classes) are sound
and portable; the terms are not. The whole attack-surface half of objective 2.2 (message/image/file
vectors, unsecure networks, open ports, default credentials, unsupported systems) is untested, as
are the indicator families of 2.4 (impossible travel, concurrent sessions, missing logs) and most of
mitigations 2.5.

## Domain 3 · Security Architecture (26 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 3.1 | the customer carries OS, runtime and application responsibility in the least-managed model (b-3.1-1) | S4 | E01 ×3 sibling-term-substitution (three other service models) — **frame by the responsibility matrix, not by the IaaS/PaaS/SaaS acronyms the blueprint never uses** |
| 3.2 | encrypting cloud-stored regulated data with customer-controlled, revocable keys (b-1.4-1, b-3.3-6) | S2 | E02 ×3 adjacent-control-swap (a rights-management control, a transport-security header, a tagging feature) — **BYOK is off-blueprint as a term; the key-control concept is not** |
| 3.3 | inspecting HTTP payloads to block injection-class attacks is a WAF (b-3.2-6) | S2 | E01 ×2 sibling-term-substitution (two other firewall generations), E02 ×1 adjacent-control-swap (a routing feature) |
| 3.4 | acronym-framed — NGFW adds application awareness, deep inspection and integrated IPS (b-3.2-6) | — | E04 ×3 acronym-decoy-expansion |
| 3.5 | replacing card numbers with vault-resolvable references is tokenization (b-3.3-6, b-1.4-8) | S2 | E01 ×3 sibling-term-substitution (encryption, hashing, masking — the three neighbours in the same bullet) |
| 3.6 | protecting inter-site traffic across the public internet with a site-to-site IPSec VPN (b-3.2-7) | S4 | D19 ×3 false-security-claim (three unencrypted or obsolete protocols offered as the secure option) |
| 3.7 | striping with distributed parity tolerating one disk loss (—) | S1 | E01 ×3 sibling-term-substitution (three other RAID levels) — **off-blueprint: RAID is acronym-list-only and no objective names RAID levels** |
| 3.8 | redundant deployment across regions so a regional outage does not stop service (b-3.4-2) | S4 | E02 ×3 adjacent-control-swap (a scaling technique, a packaging technique, a provisioning technique) |
| 3.9 | acronym-framed — SDN decouples the control plane from the data plane (b-3.1-7) | — | E04 ×3 acronym-decoy-expansion |
| 3.10 | an inline device that can block, versus a passive one that can only alert (b-3.2-3, b-3.2-4) | S2 | E01 ×1 sibling-term-substitution (the passive sibling), E02 ×2 adjacent-control-swap (a deception asset, a monitoring port) |
| 3.11 | salting plus a slow adaptive hash defeats precomputed cracking (b-1.4-9, b-1.4-10) | S4 | D19 ×2 false-security-claim (encoding presented as protection, an unsalted fast hash), E02 ×1 adjacent-control-swap (symmetric encryption with a static key) |
| 3.12 | isolating each workload so compromise does not spread laterally (b-2.5-1, b-3.1-6) | S1 | E02 ×3 adjacent-control-swap (three routing/switching concepts) — **microsegmentation is off-blueprint as a term; the segmentation concept is not** |
| 3.13 | the backup type that captures everything changed since the last full (—) | S1 | E01 ×3 sibling-term-substitution (three other backup types) — **off-blueprint: the objective names snapshots, frequency, replication and journaling, never differential/incremental** |
| 3.14 | acronym-framed — RPO is the tolerable data loss expressed in time (b-5.2-12) | — | E04 ×3 acronym-decoy-expansion |
| 3.15 | verifying bootloader and kernel integrity before OS load, anchored in hardware (b-1.4-7) | S2 | E02 ×3 adjacent-control-swap (an AV scan, a BIOS password, an unbound disk encryption configuration) |
| 3.16 | an externally hosted environment dedicated to one organisation (b-3.1-2) | S4 | E01 ×3 sibling-term-substitution (three other deployment models) — **off-blueprint: cloud deployment models are not enumerated by the objectives** |
| 3.17 | acronym expansion — SASE (b-3.2-8) | — | E04 ×3 acronym-decoy-expansion |
| 3.18 | centralised policy with dynamic path selection across mixed transports is SD-WAN (b-3.2-8) | S4 | D19 ×1 false-technical-claim (that it removes encryption), D19 ×2 false-capability-claim (that it removes routers, that it replaces firewalls) |
| 3.19 | VMs isolate at the hypervisor; containers share the host kernel (b-3.1-9) | S4 | E05 ×2 attribute-inversion (the isolation strengths swapped; the kernel-sharing claim reversed), D14 ×1 dogma (that there is no difference) |
| 3.20 | microsegmentation restricts east-west flows between workloads (b-2.5-1) | S1 | D11 ×1 non-architectural-criteria (address consumption), D14 ×2 dogma (that it replaces endpoint protection, that it replaces IAM) |
| 3.21 | in the most-managed model the customer still owns identity, classification and tenant configuration (b-3.1-1) | S4 | E02 ×3 adjacent-control-swap (three provider-side responsibilities) |
| 3.22 | acronym expansion — CASB | — | E04 ×3 acronym-decoy-expansion — **acronym-list-only term** |
| 3.23 | the TLS handshake establishes an authenticated, integrity-protected session with negotiated keys (b-3.2-7) | S1 | D19 ×3 false-technical-claim (three understatements of what the handshake produces) |
| 3.24 | split tunnelling improves performance and removes corporate inspection from non-corporate traffic (b-3.2-7) | S4 | E01 ×1 sibling-term-substitution (full tunnel), D19 ×2 false-capability-claim (an always-on claim, an invented VPN mode) — **split tunnelling is off-blueprint as a term** |
| 3.25 | the SDN controller centralises the control plane and programs the forwarding devices (b-3.1-7) | S1 | E05 ×1 attribute-inversion (the controller described as forwarding data-plane packets), D14 ×2 dogma (that it replaces firewalls, that it replaces NAC) |
| 3.26 | acronym-framed — a TPM as a hardware root of trust for measured boot and key sealing (b-1.4-7) | — | E04 ×3 acronym-decoy-expansion |

**Domain 3 observation.** The weakest domain for blueprint fit: **six of twenty-six items are keyed
to terms the objectives never name** (RAID levels, differential/incremental backups, cloud
deployment models, BYOK, split tunnelling, CASB), and the two responsibility items are framed by
IaaS/PaaS/SaaS acronyms rather than by the *responsibility matrix* the objective actually names.
Where it is on-blueprint it is good — items 3.19 and 3.25 are the only two items in the entire
source built on `E05 attribute-inversion`, and they are the two hardest to answer by vocabulary
recognition. Untested: the whole of 3.1's comparison axes (b-3.1-11, including *inability to
patch*), the ICS/RTOS/embedded block (b-3.1-10), fail-open versus fail-closed (b-3.2-2), port
security and 802.1X (b-3.2-5), data types and classification altitude (b-3.3-1/2), sovereignty
(b-3.3-5), and almost all of resilience 3.4 (site temperatures, capacity planning, the four testing
methods, power).

## Domain 4 · Security Operations (40 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 4.1 | baselining with continuous monitoring keeps systems in a known-good state and surfaces drift (b-4.1-1) | S2 | E02 ×1 adjacent-control-swap (allowlisting alone), D05 ×1 symptom-treatment (ad-hoc patching), D13 ×1 blast-radius-expansion (disabling logging) |
| 4.2 | correlating firewall, endpoint, DNS and identity signals to spot lateral movement is what a SIEM does (b-4.4-6) | S7 | E02 ×3 adjacent-control-swap (three real controls that see only one signal class) |
| 4.3 | the first phase of the incident-response process is preparation (b-4.8-1) | S5 | E03 ×3 lifecycle-stage-slip (three later phases) — **frame to CompTIA's seven-step list, not the four-phase grouping this item uses** |
| 4.4 | acronym-framed — SOAR orchestrates and automates response workflows across tools (b-4.7-1) | — | E04 ×3 acronym-decoy-expansion |
| 4.5 | disconnecting the affected segment to stop spread is containment (b-4.8-2) | S5 | E03 ×3 lifecycle-stage-slip (three adjacent phases) |
| 4.6 | a credentialed scan sees more than an unauthenticated one (b-4.3-1) | S2 | E02 ×3 adjacent-control-swap (three lower-fidelity discovery methods) |
| 4.7 | a fingerprint is "something you are" (b-4.6-9) | S1 | E01 ×3 sibling-term-substitution (the other three factor categories) |
| 4.8 | authenticate once, reach many applications, is SSO (b-4.6-5) | S1 | E01 ×1 sibling-term-substitution (federation), E02 ×2 adjacent-control-swap (step-up auth, JIT provisioning) |
| 4.9 | time-boxed, approved elevation that does not persist between incidents is just-in-time privilege (b-4.6-12) | S2 | D19 ×1 false-security-claim (a permanent shared admin account), D13 ×1 blast-radius-expansion (credentials in a wiki), E02 ×1 adjacent-control-swap (a MAC-based control) |
| 4.10 | a TCP-based AAA protocol encrypting the whole payload and separating the three functions (b-4.1-6) | S2 | E01 ×3 sibling-term-substitution (three other identity protocols) — **TACACS+ is acronym-list-only; keep the AAA-protocol-selection concept** |
| 4.11 | acronym expansion — PAM (b-4.6-12) | — | E04 ×3 acronym-decoy-expansion |
| 4.12 | mandated documented review and approval before production change is change management (b-1.3-1) | S5 | E02 ×3 adjacent-control-swap (three other disciplines with review steps) |
| 4.13 | validating a vendor patch in a representative non-production tier before broad rollout (b-4.3-10) | S5 | D19 ×1 false-practice-claim (push straight to production), D14 ×1 dogma (skip testing when critical), D05 ×1 symptom-treatment (test on one machine) |
| 4.14 | recursive resolver query logs are the source that reveals DNS-tunnelled exfiltration (b-4.9-1) | S7 | E02 ×3 adjacent-control-swap (three other real log sources that cannot see DNS payloads) |
| 4.15 | capturing volatile memory before power-off follows the order of volatility (b-4.8-6) | S5 | E02 ×3 adjacent-control-swap (three other forensic/legal obligations) — **"order of volatility" is off-blueprint as a term; the acquisition/preservation concept is not** |
| 4.16 | the record of who handled evidence, when and why, is chain of custody (b-4.8-6) | S1 | E02 ×3 adjacent-control-swap (an artefact, a scoring log, a planning document) |
| 4.17 | acronym-framed — EDR provides endpoint detection, behavioural analytics and response (b-4.5-11) | — | E04 ×3 acronym-decoy-expansion |
| 4.18 | blocking any executable not explicitly approved is application allowlisting (b-2.5-3) | S2 | E02 ×3 adjacent-control-swap (a deception asset, a monitoring port, a segmentation concept) |
| 4.19 | counter-based one-time passwords versus clock-based (b-4.6-8) | S1 | E01 ×3 sibling-term-substitution (the time-based sibling and two hardware authenticator standards) — **HOTP/TOTP are acronym-list-only** |
| 4.20 | the standard secure replacement for an unencrypted remote shell (b-4.5-5) | S2 | D19 ×3 false-security-claim (three cleartext or unrelated protocols) |
| 4.21 | ranking a large finding set by exploitability, exposure and business impact is risk-based prioritisation (b-4.3-9) | S6 | E03 ×3 lifecycle-stage-slip (three other vulnerability-management activities) |
| 4.22 | proactively hunting for adversary activity detection missed, from TTP hypotheses, is threat hunting (b-4.8-5) | S1 | E02 ×3 adjacent-control-swap (three scheduled, non-hypothesis-driven activities) |
| 4.23 | acronym-framed — STIX as a structured threat-intelligence representation (b-4.3-3) | — | E04 ×3 acronym-decoy-expansion — **acronym-list-only** |
| 4.24 | rebuilding hosts from known-good images and validating before return to service is recovery (b-4.8-2) | S5 | E03 ×3 lifecycle-stage-slip (three adjacent phases) |
| 4.25 | securing server-to-server mail transport with opportunistic or implicit TLS (b-4.5-5) | S2 | E02 ×3 adjacent-control-swap (two mailbox-retrieval protocols and a management protocol) |
| 4.26 | a phased patch cycle — staging tier, monitoring window, timed promotion (b-4.3-10) | S5 | E02 ×3 adjacent-control-swap (three adjacent operational disciplines) |
| 4.27 | RTO is tolerable downtime; RPO is tolerable data loss in time (b-5.2-12) | S1 | E05 ×1 attribute-inversion (the two definitions swapped), D14 ×1 dogma (that they are the same), D19 ×1 false-technical-claim (that they measure network properties) |
| 4.28 | acronym expansion — SIEM (b-4.4-6) | — | E04 ×3 acronym-decoy-expansion |
| 4.29 | one source, many accounts, rapid failures then a success — the alert came from cross-source correlation (b-4.4-6) | S7 | E02 ×3 adjacent-control-swap (three unrelated detection capabilities) |
| 4.30 | chain of custody exists to keep evidence admissible and trustworthy (b-4.8-6) | S1 | D11 ×2 non-architectural-criteria (speed, storage), D19 ×1 false-practice-claim (bypassing write blockers) |
| 4.31 | SOAR adds orchestration, automation and case management on top of detection (b-4.7-1) | S1 | D19 ×1 false-technical-claim (a signature/ML contrast), D14 ×2 dogma (that it replaces firewalls; that there is no difference) |
| 4.32 | disagreeing timestamps across sources are prevented by centralised time synchronisation (b-4.9-1) | S7 | E02 ×3 adjacent-control-swap (three real controls that do not affect clocks) — **NTP is off-blueprint as a term; log-correlation integrity is the concept** |
| 4.33 | default-deny execution permitting only a curated binary set (b-2.5-3) | S2 | E02 ×2 adjacent-control-swap (heuristic AV, patching), E02 ×1 (a memory mitigation) |
| 4.34 | acronym expansion — DLP (b-4.5-9) | — | E04 ×3 acronym-decoy-expansion |
| 4.35 | scans identify likely flaws automatically; a pen test exploits and chains them (b-4.3-1, b-4.3-4) | S1 | E05 ×1 attribute-inversion (the automation claims swapped), D14 ×1 dogma (that they are the same), D19 ×1 false-technical-claim (a physical-access claim) |
| 4.36 | posture-checking a device before it joins the production network is NAC (b-4.5-10) | S2 | E02 ×3 adjacent-control-swap (three real controls that inspect traffic rather than device state) |
| 4.37 | three copies, two media, one offsite or immutable (—) | S1 | D19 ×3 false-definition-claim (three invented backup schedules) — **off-blueprint: the "3-2-1 rule" is not named by the objectives** |
| 4.38 | vaulting privileged credentials, brokering sessions and recording them is PAM (b-4.6-12) | S2 | E02 ×3 adjacent-control-swap (three other identity/management tools) |
| 4.39 | containment-phase actions are isolating affected hosts and cutting the attacker's control channel (b-4.8-2) — *multiple response* | S5 | E03 ×3 lifecycle-stage-slip (a recovery action, a lessons-learned action, a preparation action) |
| 4.40 | a vendor-agnostic prescriptive hardening configuration set (b-4.4-4 *Benchmarks*) | S2 | E02 ×3 adjacent-control-swap (a standards document, a vulnerability identifier, a contract type) |

**Domain 4 observation.** The best-covered domain and the one that most repays reading. Incident
response is the standout: six items place activities across the phases (4.3, 4.5, 4.24, 4.39, plus
the two forensics items), which is exactly the discrimination objective 4.8 asks for — though the
phase *naming* follows the NIST four-phase grouping rather than CompTIA's seven steps, and **S3 must
re-key to CompTIA's list**. The three evidence-selection items (4.14, 4.29, 4.32) are the best-built
items in the whole source: each names a symptom and asks which data source can answer it, and each
distractor is a real log that genuinely cannot. Nothing here tests **any** of objective 4.7's
automation content beyond two SOAR definitions, **any** of objective 4.2's asset management, the
mobile/wireless block of 4.1, the five access-control models (b-4.6-7), password policy levers
(b-4.6-10), email authentication (b-4.5-7), web filtering (b-4.5-3), file integrity monitoring
(b-4.5-8), user behaviour analytics (b-4.5-12), or alert tuning (b-4.4-3).

## Domain 5 · Security Program Management and Oversight (29 items)

| Item | Concept tested | Theme | Distractor patterns |
|---|---|---|---|
| 5.1 | the agreement that sets minimum acceptable service levels (b-5.3-3) | S6 | E01 ×3 sibling-term-substitution (three other agreement types from the same bullet) |
| 5.2 | the artefact specifying how long records are kept and when destroyed (b-5.4-6, b-4.2-4) | S6 | E02 ×3 adjacent-control-swap (three other governance documents) |
| 5.3 | a risk below tolerance, formally documented with no further action, is acceptance (b-5.2-9) | S6 | E01 ×3 sibling-term-substitution (the other three treatments) |
| 5.4 | acronym expansion — PII | — | E04 ×3 acronym-decoy-expansion — **acronym-list-only** |
| 5.5 | the expected loss from a single occurrence is SLE (b-5.2-4) | S6 | E01 ×2 sibling-term-substitution (the annualised siblings), E02 ×1 adjacent-control-swap (a recovery metric) |
| 5.6 | buying insurance against breach cost is risk transfer (b-5.2-9) | S6 | E01 ×3 sibling-term-substitution (the other three treatments) |
| 5.7 | objective verification by an independent outside party (b-5.5-3) | S6 | E01 ×2 sibling-term-substitution (internal audit, self-assessment), E02 ×1 adjacent-control-swap (a penetration test) |
| 5.8 | reviewing a prospective vendor's attestation report, questionnaire and contractual safeguards (b-5.3-1, b-5.3-2) | S6 | E02 ×3 adjacent-control-swap (three unrelated operational disciplines) |
| 5.9 | the named US regulation governing health information privacy and security (—) | S6 | E01 ×3 sibling-term-substitution (three other named regimes) — **off-blueprint: no statute is named by the objectives; the concept is b-5.4-4 jurisdictional scope** |
| 5.10 | acronym-framed — which regime regulates health information (—) | — | E04 ×3 acronym-decoy-expansion — **off-blueprint** |
| 5.11 | sustained reduction in phishing success comes from recurring awareness plus simulation and feedback (b-5.6-5) | S6 | D05 ×2 symptom-treatment (a single annual video, a one-off orientation slide), D11 ×1 non-architectural-criteria (password rotation offered against a phishing question) |
| 5.12 | a non-binding statement of mutual goals and responsibilities is an MOU (b-5.3-3) | S6 | E01 ×3 sibling-term-substitution (three other agreement types) |
| 5.13 | the clause granting a customer the ability to inspect a vendor's controls (b-5.3-1) | S6 | E02 ×3 adjacent-control-swap (three other real contract clauses) |
| 5.14 | the register exists as a living tracking artefact, not a historical record (b-5.2-6) | S6 | D19 ×1 false-purpose-claim (that it replaces insurance), E03 ×1 lifecycle-stage-slip (documenting only past incidents), D11 ×1 non-architectural-criteria (password rules) |
| 5.15 | executives and finance staff need role-specific social-engineering training (b-5.6-4) | S6 | D14 ×3 dogma (three "only this group" absolutes) |
| 5.16 | acronym-framed — an NDA protects confidential information shared between parties (b-5.3-3) | — | E04 ×3 acronym-decoy-expansion |
| 5.17 | the control catalogue widely used by US federal systems (—) | S6 | E01 ×3 sibling-term-substitution (three other named frameworks) — **off-blueprint: no framework is named by the objectives** |
| 5.18 | a control costing far more than the expected annual loss, with no regulatory driver, is not defensible (b-5.2-3, b-5.2-4) | S6 | D14 ×1 dogma (implement regardless of cost), D01 ×1 over-engineering (outsource everything), D19 ×1 false-practice-claim (delete the risk from the register) |
| 5.19 | extraterritorial scope — the regime follows the data subject, not the organisation's location (b-5.4-4) | S6 | D19 ×3 false-scope-claim (three understatements of scope) — **off-blueprint framing via a named statute; keep the b-5.4-4 concept, drop the name** |
| 5.20 | attestation report versus management-system certification (—) | S6 | E05 ×1 attribute-inversion (the two labels swapped), D14 ×1 dogma (that they are the same), D19 ×1 false-scope-claim — **off-blueprint as named schemes; the b-5.5-1 attestation concept survives** |
| 5.21 | what does *not* belong in a risk register — operational configuration detail (b-5.2-6) | S6 | E02 ×3 adjacent-control-swap (three items that legitimately do belong) — the source's only "least likely" item stem |
| 5.22 | ALE is SLE multiplied by ARO (b-5.2-4) | S6 | E05 ×3 arithmetic-inversion (the two operands halved, taken singly, and mis-summed) — the only computational item in any accessible source |
| 5.23 | acronym expansion — BCP (b-5.1-2) | — | E04 ×3 acronym-decoy-expansion |
| 5.24 | a BIA identifies critical processes and impact thresholds; the DR plan says how to restore (b-5.2-12) | S6 | E05 ×1 attribute-inversion (the two artefacts swapped), D14 ×1 dogma (that they are the same), D19 ×1 false-scope-claim |
| 5.25 | requesting a vendor's attestation report, sub-processor list and IR procedures is due diligence (b-5.3-2) | S6 | E02 ×2 adjacent-control-swap (a test activity, a modelling activity), E01 ×1 sibling-term-substitution (a supply-chain *attack* offered for a supply-chain *activity*) |
| 5.26 | an SLA codifies measurable commitments and the consequence of missing them (b-5.3-3) | S6 | E02 ×2 adjacent-control-swap (a tax framing, an agreement-hierarchy framing), D19 ×1 false-purpose-claim (concealment) |
| 5.27 | individually identifying clinical records carry the most restrictive classification (b-3.3-3, b-5.4-5) | S6 | E02 ×3 adjacent-control-swap (three genuinely public or de-identified datasets) |
| 5.28 | mitigation and transference are valid treatments; the invented options are not (b-5.2-9) — *multiple response* | S6 | D19 ×3 false-strategy-claim (three fabricated "strategies") — **craft defect: the wrong options are jokes, so the item is answerable without knowing the taxonomy** |
| 5.29 | retraining the users who clicked and re-testing monthly is a continuous reinforcement loop (b-5.6-5) | S6 | E02 ×3 adjacent-control-swap (three other programme activities) |

**Domain 5 observation.** Well-weighted and thematically narrow: twelve of twenty-nine items are risk
management (5.2) or third-party risk (5.3), which is defensible since those are the two objectives
with the most enumerated vocabulary. Item 5.22 is the only item in any accessible source that
requires a *calculation*, and the only one whose distractors are arithmetic transformations of the
key — worth copying, because a candidate cannot eliminate any of them by reading. Item 5.28 is the
source's clearest craft defect: three of five options are obviously invented, so the item measures
nothing. **Five items (5.9, 5.10, 5.17, 5.19, 5.20) are keyed to named statutes and frameworks the
objectives document never mentions** — the concepts behind them (jurisdictional scope, attestation
versus certification) are on-blueprint; the names are not. Untested: the entire governance document
hierarchy (b-5.1-1), the four data roles (b-5.1-8), governance structures (b-5.1-7), risk appetite
postures (b-5.2-8), exception versus exemption (b-5.2-10), vendor monitoring (b-5.3-4), almost all
of compliance 5.4 at blueprint altitude, and the penetration-testing knowledge levels (b-5.5-5) and
reconnaissance modes (b-5.5-6).

## Distractor-pattern frequency across the 145 items

Total distractor slots = **435** (141 single-choice × 3 wrong + 4 multiple-response × 3 wrong).

| Pattern | Count | Share | Note |
|---|---|---|---|
| E01 `sibling-term-substitution` | 168 | 39% | the workhorse — and healthy at this level, because the blueprint's own enumerated lists *are* the sibling sets. Produces flat, scenario-free items when used outside definitional stems |
| E02 `adjacent-control-swap` | 92 | 21% | the second workhorse, reaching one objective sideways. The best instances are the evidence-selection items (a real log that genuinely cannot see the thing) |
| E04 `acronym-decoy-expansion` | 72 | 17% | **over-used and low-value** — 24 whole items whose wrong options are fabricated expansions. Eliminable on sight; contributes no concept coverage |
| D19 false-technical-claim | 20 | 5% | mostly absolutes and capability overstatements — cheap to eliminate |
| D11 non-architectural-criteria | 18 | 4% | cost, performance and convenience offered against security questions; effective when the plausible business answer is the wrong one |
| E03 `lifecycle-stage-slip` | 31 | 7% | **the most diagnostic pattern in the set** — concentrated in incident response and vulnerability management, and it separates candidates who know a process from those who know its words |
| E05 `attribute-inversion` | 14 | 3% | **under-used and the highest-signal pattern available** — used in only six items (containers/VMs, SDN controller, RTO/RPO, scan/pen test, BIA/DR, the ALE arithmetic). Cannot be defeated by vocabulary recognition |
| D14 dogma | 4 | 1% | "always"/"there is no difference" absolutes |
| D05 symptom-treatment | 6 | 1% | under-used given how well incident response and awareness training support it |
| D06 wrong-layer | 5 | 1% | present but incidental |
| D01 over-engineering | 3 | <1% | |
| D07 detective-for-preventative | 2 | <1% | almost absent, despite objective 1.1 naming both control types explicitly |
| **Total** | **435** | 100% | |

**Consequences for authoring.**

1. **Ban `E04 acronym-decoy-expansion` as an item's primary construction.** 17% of wrong options
   here, 0% in the vendor's own sample set. It tests the acronym table, not an objective; a
   fabricated expansion is eliminable by anyone who has read the list once; and it inflates a bank
   without adding coverage. Acronyms remain legitimate *vocabulary* in stems and rationales.
2. **Cap `E01 sibling-term-substitution` at ≈0.35 of items** (proposed `validation.pattern_caps`
   entry). It is the correct and unavoidable pattern for a vocabulary-dense exam — 39% here, 40% in
   the vendor set — but left uncapped it turns the bank into flashcards. The cap forces scenario
   reasoning into the middle of the paper. S3 sets the number.
3. **Raise `E05 attribute-inversion` hard.** At 3% it is the most under-used high-signal pattern
   available, and it is the only one that survives a candidate who has memorised every term: swapping
   the two halves of a genuine pairing (RTO/RPO, BIA/DR, hypervisor/kernel isolation, source/destination
   in a rule) cannot be spotted by recognition. It is also the natural PBQ approximation — see the
   official set's access-list item.
4. **Raise `E03 lifecycle-stage-slip`** across incident response (4.8), change management (1.3) and
   vulnerability management (4.3). The blueprint hands you three ordered processes; a wrong-stage
   distractor is never eliminable by surface reading.
5. **Raise `D07 detective-for-preventative`** — objective 1.1 names both control functions
   explicitly, and this source uses the pattern twice in 435 slots. A detective control offered
   against a "reduce the likelihood" requirement is the exact discrimination the vendor's own
   sample item 1.2 tests.
6. **Ban joke distractors.** Item 5.28's three invented "strategies" make the item answerable
   without knowledge. Every wrong option must be a real thing that a reasonable practitioner could
   propose. This is a candidate for an authoring-guide rule, not just a note.
7. **Enforce the off-blueprint filter.** Twenty-one of 145 items (14%) are keyed to terms the
   objectives document never names. S3 must carry the *concept* and drop the *term* in each case —
   the filter list is in [`source-comptia-sy0701-objectives.md`](source-comptia-sy0701-objectives.md).
8. **Re-key incident-response items to CompTIA's seven steps**, not the NIST four-phase grouping
   this source uses.
9. **Inherit the domain mix** — uniquely among the sources here, this one is already within half a
   point of the blueprint weights.

## Concepts this source tests that other sources do not spell out

- **evidence selection under a named symptom** (b-4.9-1) — three items that name a symptom and ask
  which log can answer it; no other accessible source builds this shape, and it is the natural
  `scenario_matching` seed
- **quantitative risk arithmetic** (b-5.2-4) — the only computational item anywhere, with
  arithmetic-transformation distractors
- **incident-response phase placement across four separate items** (b-4.8-2) — the only sustained
  process-stage discrimination in any accessible source
- **shared-responsibility framing at two different managed-service altitudes** (b-3.1-1)
- **container versus VM isolation boundary** (b-3.1-9) and **SDN control/data plane** (b-3.1-7) —
  built with attribute inversion rather than sibling substitution
- **change management as an emergency track** (b-1.3-1) — a real judgment about *which* process
  applies, not what the process is
- **"least likely to appear" stem framing** (item 5.21) — a negative-selection construction absent
  from every other source and worth one or two items in the bank

## Concepts other sources hold that this source does not test

See the reconciliation in `master-inventory.md` (S3). In outline: the firewall-rule-direction
construction and the rules-of-engagement discrimination from
[`source-comptia-practice-v7.md`](source-comptia-practice-v7.md), plus the large blueprint-only
inventory listed in [`source-comptia-sy0701-objectives.md`](source-comptia-sy0701-objectives.md) —
most notably the whole of objective 4.7 (automation), objective 4.2 (asset management), the
mobile/wireless block of 4.1, the five access-control models, the governance document hierarchy, and
the compliance objective at blueprint altitude. None of that is reachable from any accessible
practice source, which is precisely where an originally-authored bank beats the market for this
exam.
