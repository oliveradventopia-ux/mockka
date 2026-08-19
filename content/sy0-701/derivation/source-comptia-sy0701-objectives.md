# Artefact B · CompTIA Security+ (SY0-701) exam objectives concepts

**What this is.** The SY0-701 objectives document states **28 objectives across 5 content domains**,
almost all of them expressed as multi-level bullet lists of example terms where each term is
separately examinable. This document splits each objective into its constituent concepts and records
the **canonical vocabulary** attached to each.

**Why it exists.** It is the authoritative half of the master concept inventory: where a practice
source records what an author *believed* is tested, this records what the vendor's blueprint
*actually declares* — and supplies the exact terminology a candidate will recognise from study.

**Vocabulary is quoted verbatim** from the objectives document. That is deliberate and is the only
verbatim content permitted in any artefact (`methodology/01-source-distillation.md#clean-room`): a
question that uses CompTIA's own terms lets a candidate trace a missed item straight back to the
objective. No objective prose and no explanatory text is reproduced — only the terms themselves.

> Source: `comptia-sy0701-objectives` in [sources.md](sources.md) — Exam Objectives Version 5.0,
> © 2023 CompTIA, read in full 2026-08-16. Credited in the exam README.

## Document structure → exam domain mapping

The mapping is 1:1 — the objectives document *is* the blueprint, so its content domains are the
manifest's domains and no reconciliation is needed. What needs recording is the **objective** layer
beneath each domain, because that is the level the concept inventory is built at and the level a
per-item "concept tested" claim should resolve to.

| Blueprint domain | Manifest domain | Weight | Objectives | Concepts split out below |
|---|---|---|---|---|
| 1.0 General Security Concepts | `d1` | 12% | 1.1–1.4 (4) | 37 |
| 2.0 Threats, Vulnerabilities, and Mitigations | `d2` | 22% | 2.1–2.5 (5) | 52 |
| 3.0 Security Architecture | `d3` | 18% | 3.1–3.4 (4) | 35 |
| 4.0 Security Operations | `d4` | 28% | 4.1–4.9 (9) | 69 |
| 5.0 Security Program Management and Oversight | `d5` | 20% | 5.1–5.6 (6) | 44 |
| — | — | **100%** | **28** | **237** |

Four structural facts that shape authoring, all stated by the document:

1. **The verbs are the difficulty dial.** Nine objectives open with *"Given a scenario"*
   (2.4, 3.2, 4.1, 4.5, 4.6, 5.6) or are framed as applied analysis; the rest open with *"Explain"*,
   *"Summarize"*, or *"Compare and contrast"*. The scenario-verb objectives are where the real exam
   puts its situational items — and, on the SY0-701, where the performance-based questions live.
   Authoring should mirror that: definitional items against *Explain/Summarize* objectives, scenario
   items against *Given a scenario* objectives.
2. **"Compare and contrast" is a two-sided instruction.** Objectives 1.1, 2.1, 3.1, 3.3 and 5.x
   ask a candidate to *separate near neighbours*, not to recite one. Items against those objectives
   should be built so the distractors are the neighbours the objective itself lists.
3. **The bullet lists are not exhaustive — CompTIA says so.** The PLEASE NOTE block states that the
   bulleted examples are not exhaustive and other technologies may appear on the exam. So an item
   testing a term outside the lists is not automatically invalid — but it *is* unverifiable against
   the blueprint, so this build's rule should be: **the term must appear in the objectives body or
   the acronym list**, and anything else is off-blueprint (see the off-blueprint filter at the end).
4. **The acronym list is a second, weaker surface.** The document ships a multi-page acronym table
   and tells candidates to "attain a working knowledge of all listed acronyms". Dozens of terms
   appear *only* there and in no objective bullet (RAID, ASLR, TACACS+, STIX, CASB, GDPR, TOTP/HOTP,
   PCI DSS, SOAR, CSRF, PII…). Those are legitimate vocabulary but **not** legitimate as an item's
   primary concept: an item whose whole content is expanding an acronym tests the glossary, not the
   objective. Recorded because the largest practice source in this build does exactly that 24 times.

---

## Domain 1 · General Security Concepts (12%)

### Objective 1.1 — Compare and contrast various types of security controls

| id | Concept | Vocabulary |
|---|---|---|
| b-1.1-1 | Control **categories** answer "what kind of thing implements this" | *Technical*, *Managerial*, *Operational*, *Physical* |
| b-1.1-2 | Control **types** answer "what this control does relative to the event" | *Preventive*, *Deterrent*, *Detective*, *Corrective*, *Compensating*, *Directive* |
| b-1.1-3 | Category and type are independent axes — every control carries one of each | *Categories*, *Control types* |
| b-1.1-4 | Deterrent versus preventive: influencing an attacker's decision versus removing the option | *Deterrent*, *Preventive* |
| b-1.1-5 | Compensating as the stand-in when the intended control is not feasible | *Compensating* |
| b-1.1-6 | Directive as the control that instructs rather than enforces | *Directive* |

> **Practice-source coverage: strong.** `comptia-practice-v7` tests b-1.1-2 directly (which type
> reduces likelihood). `jealarue-exam90` tests b-1.1-1 twice and b-1.1-2 once. **b-1.1-3 (the
> two-axis judgment) is untested by both** — and it is the discrimination the objective's own
> "compare and contrast" verb is asking for, so it is a high-value original item.

### Objective 1.2 — Summarize fundamental security concepts

| id | Concept | Vocabulary |
|---|---|---|
| b-1.2-1 | The three properties, told apart by what an attack destroys | *Confidentiality, Integrity, and Availability (CIA)* |
| b-1.2-2 | Proving an actor cannot disown an action | *Non-repudiation* |
| b-1.2-3 | Three separate functions bundled under one acronym | *Authentication, Authorization, and Accounting (AAA)* |
| b-1.2-4 | Authenticating a person is not the same problem as authenticating a machine | *Authenticating people*, *Authenticating systems* |
| b-1.2-5 | How an authorization decision is expressed | *Authorization models* |
| b-1.2-6 | Measuring current state against a required state | *Gap analysis* |
| b-1.2-7 | Zero Trust splits the deciding plane from the enforcing plane | *Zero Trust*, *Control Plane*, *Data Plane* |
| b-1.2-8 | The control-plane components and what each decides | *Adaptive identity*, *Threat scope reduction*, *Policy-driven access control*, *Policy Administrator*, *Policy Engine* |
| b-1.2-9 | The data-plane components and why implicit trust is the thing being removed | *Implicit trust zones*, *Subject/System*, *Policy Enforcement Point* |
| b-1.2-10 | Physical barriers that stop or channel movement | *Bollards*, *Access control vestibule*, *Fencing*, *Lighting*, *Access badge* |
| b-1.2-11 | Physical detection, chosen by what the sensor actually senses | *Video surveillance*, *Security guard*, *Sensors*, *Infrared*, *Pressure*, *Microwave*, *Ultrasonic* |
| b-1.2-12 | Deception assets graded by scope — a file, a host, a whole network, a credential | *Honeypot*, *Honeynet*, *Honeyfile*, *Honeytoken* |

> **Practice-source coverage: partial.** Both sources cover b-1.2-2; `jealarue-exam90` covers
> b-1.2-1 twice, b-1.2-3 and b-1.2-7 (Zero Trust, as a definition). **b-1.2-8/9 (the Zero Trust
> plane components — the objective's most enumerated sub-list), b-1.2-4, b-1.2-5, b-1.2-6, b-1.2-11
> and b-1.2-12 are untested by both.** Deception technology (b-1.2-12) is the standout gap: four
> named terms separated by scope is a textbook compare-and-contrast item and nobody writes it.

### Objective 1.3 — Explain the importance of change management processes and the impact to security

| id | Concept | Vocabulary |
|---|---|---|
| b-1.3-1 | The business-process spine of a change and the role each step plays | *Approval process*, *Ownership*, *Stakeholders*, *Impact analysis*, *Test results*, *Maintenance window*, *Standard operating procedure* |
| b-1.3-2 | The undo path as a precondition, not an afterthought | *Backout plan* |
| b-1.3-3 | Technical consequences a change actually causes | *Allow lists/deny lists*, *Restricted activities*, *Downtime*, *Service restart*, *Application restart*, *Legacy applications*, *Dependencies* |
| b-1.3-4 | What must be updated *after* the change or the environment drifts from its record | *Updating diagrams*, *Updating policies/procedures* |
| b-1.3-5 | Change traceability for configuration and code | *Version control* |

> **Practice-source coverage: partial.** `jealarue-exam90` covers b-1.3-1 twice (a change advisory
> board as the approval step; an emergency-change track). Neither source touches **b-1.3-3
> (technical implications), b-1.3-4 (documentation drift) or b-1.3-5** — and b-1.3-3 is where the
> *security* consequence of change management actually lives, which is what the objective title says
> it is about.

### Objective 1.4 — Explain the importance of using appropriate cryptographic solutions

| id | Concept | Vocabulary |
|---|---|---|
| b-1.4-1 | The key pair and what each half may never do | *Public key infrastructure (PKI)*, *Public key*, *Private key* |
| b-1.4-2 | Holding a recoverable copy of a key, and the risk that creates | *Key escrow* |
| b-1.4-3 | Choosing the *level* at which data is encrypted | *Full-disk*, *Partition*, *File*, *Volume*, *Database*, *Record* |
| b-1.4-4 | Protecting data on the wire rather than at rest | *Transport/communication* |
| b-1.4-5 | Symmetric versus asymmetric, and the problem each solves | *Symmetric*, *Asymmetric*, *Key exchange* |
| b-1.4-6 | Algorithm and key length as separate strength decisions | *Algorithms*, *Key length* |
| b-1.4-7 | Hardware roots of trust and what each is for | *Trusted Platform Module (TPM)*, *Hardware security module (HSM)*, *Key management system*, *Secure enclave* |
| b-1.4-8 | Hiding data in plain sight versus substituting it | *Obfuscation*, *Steganography*, *Tokenization*, *Data masking* |
| b-1.4-9 | One-way digests, and why an unsalted digest is weak | *Hashing*, *Salting* |
| b-1.4-10 | Making a fast hash deliberately slow | *Key stretching* |
| b-1.4-11 | Signing as authenticity plus integrity plus non-repudiation | *Digital signatures* |
| b-1.4-12 | Distributed tamper-evident records | *Blockchain*, *Open public ledger* |
| b-1.4-13 | Certificate issuance and the trust chain behind it | *Certificates*, *Certificate authorities*, *Root of trust*, *Self-signed*, *Third-party*, *Wildcard*, *Certificate signing request (CSR) generation* |
| b-1.4-14 | Two ways to ask "is this certificate still valid", with different cost profiles | *Certificate revocation lists (CRLs)*, *Online Certificate Status Protocol (OCSP)* |

> **Practice-source coverage: strong on tooling, absent on judgment.** `jealarue-exam90` covers
> b-1.4-7 (TPM twice, HSM), b-1.4-9 (salting and slow hashing), b-1.4-13 (intermediate CA), b-1.4-14
> (CRL and OCSP as separate items) and hashing-versus-encryption. **b-1.4-2 (key escrow), b-1.4-3
> (encryption level), b-1.4-8 (obfuscation family), b-1.4-11 (digital signatures) and b-1.4-12
> (blockchain/ledger) are untested by both.** b-1.4-3 is the best unwritten item in this objective:
> "which encryption level actually protects this data given how it is accessed" is a real decision
> with real wrong answers.

---

## Domain 2 · Threats, Vulnerabilities, and Mitigations (22%)

### Objective 2.1 — Compare and contrast common threat actors and motivations

| id | Concept | Vocabulary |
|---|---|---|
| b-2.1-1 | Naming the actor from what the description implies about them | *Nation-state*, *Unskilled attacker*, *Hacktivist*, *Insider threat*, *Organized crime*, *Shadow IT* |
| b-2.1-2 | Actor attributes as the evidence you reason from | *Internal/external*, *Resources/funding*, *Level of sophistication/capability* |
| b-2.1-3 | Motivation as a separate axis from identity | *Data exfiltration*, *Espionage*, *Service disruption*, *Blackmail*, *Financial gain*, *Philosophical/political beliefs*, *Ethical*, *Revenge*, *Disruption/chaos*, *War* |
| b-2.1-4 | Reading actor *from* motivation and capability together, not from either alone | *Threat actors*, *Motivations*, *Attributes of actors* |
| b-2.1-5 | Shadow IT counted as a threat actor rather than a misconfiguration | *Shadow IT* |

> **Practice-source coverage: strong.** `comptia-practice-v7` tests b-2.1-1/2 (tooling
> sophistication implies the unskilled attacker) — the official set's clearest demonstration that
> the *attribute* is the evidence. `jealarue-exam90` covers b-2.1-1 and b-2.1-3. **b-2.1-5 (shadow
> IT) is untested by both**, and it is the entry in the list a candidate is most likely to misfile
> as a vulnerability rather than an actor.

### Objective 2.2 — Explain common threat vectors and attack surfaces

| id | Concept | Vocabulary |
|---|---|---|
| b-2.2-1 | Message channels as distinct vectors | *Email*, *Short Message Service (SMS)*, *Instant messaging (IM)* |
| b-2.2-2 | Payload-carrying vectors that are not messages | *Image-based*, *File-based*, *Voice call*, *Removable device* |
| b-2.2-3 | Whether the vulnerable software needs an agent to be reached | *Client-based vs. agentless* |
| b-2.2-4 | Software the vendor no longer fixes | *Unsupported systems and applications* |
| b-2.2-5 | Network media as an attack surface | *Wireless*, *Wired*, *Bluetooth* |
| b-2.2-6 | Surface created by leaving things on or as shipped | *Open service ports*, *Default credentials* |
| b-2.2-7 | Trusted third parties as a vector into you | *Supply chain*, *Managed service providers (MSPs)*, *Vendors*, *Suppliers* |
| b-2.2-8 | Social engineering named by the channel it arrives on | *Phishing*, *Vishing*, *Smishing* |
| b-2.2-9 | Manipulating belief rather than credentials | *Misinformation/disinformation* |
| b-2.2-10 | Pretending to be someone, at three different levels of specificity | *Impersonation*, *Business email compromise*, *Pretexting*, *Brand impersonation* |
| b-2.2-11 | Compromising a site the target trusts rather than the target | *Watering hole* |
| b-2.2-12 | Exploiting a mistyped name | *Typosquatting* |

> **Practice-source coverage: strong on the human vectors, thin on the surfaces.**
> `jealarue-exam90` covers b-2.2-8 (vishing, smishing as separate items), b-2.2-10 (BEC/spear
> phishing), b-2.2-11 and b-2.2-12, plus a multiple-response phishing-indicator item.
> **b-2.2-2 through b-2.2-7 — the entire attack-surface half of the objective — are untested by
> both**, which is a 22%-weighted domain leaving half an objective uncovered. Supply chain
> (b-2.2-7) appears in `jealarue-exam90` only under 2.3 as a vulnerability, not as a vector.

### Objective 2.3 — Explain various types of vulnerabilities

| id | Concept | Vocabulary |
|---|---|---|
| b-2.3-1 | Writing past the intended boundary, and injecting into memory | *Memory injection*, *Buffer overflow* |
| b-2.3-2 | Two operations that assume nothing changed in between | *Race conditions*, *Time-of-check (TOC)*, *Time-of-use (TOU)* |
| b-2.3-3 | A trusted delivery channel that delivers the wrong thing | *Malicious update* |
| b-2.3-4 | Flaws in the platform rather than the application | *Operating system (OS)-based* |
| b-2.3-5 | The two classic web flaws, separated by *who* executes the injected content | *Structured Query Language injection (SQLi)*, *Cross-site scripting (XSS)* |
| b-2.3-6 | Hardware you cannot patch, or no longer may | *Firmware*, *End-of-life*, *Legacy* |
| b-2.3-7 | Breaking the isolation the hypervisor is supposed to guarantee | *Virtual machine (VM) escape*, *Resource reuse* |
| b-2.3-8 | Weaknesses that only exist because it is cloud | *Cloud-specific* |
| b-2.3-9 | Which link of the supply chain was compromised | *Service provider*, *Hardware provider*, *Software provider* |
| b-2.3-10 | Weak or misused cryptography as a vulnerability class | *Cryptographic* |
| b-2.3-11 | The most common cause with the least glamour | *Misconfiguration* |
| b-2.3-12 | Removing the platform's own restrictions | *Side loading*, *Jailbreaking* |
| b-2.3-13 | No patch, no signature, no warning | *Zero-day* |

> **Practice-source coverage: partial.** `jealarue-exam90` covers b-2.3-2 (TOC/TOU as a race
> condition), b-2.3-5 (SQLi, stored XSS), b-2.3-7 (VM escape), b-2.3-9 (supply chain) and b-2.3-13.
> **b-2.3-3 (malicious update), b-2.3-8 (cloud-specific), b-2.3-10 (cryptographic), b-2.3-11
> (misconfiguration) and b-2.3-12 (mobile side loading/jailbreaking) are untested by both.**
> b-2.3-11 is worth an item precisely because it is the boring answer that candidates talk
> themselves out of.

### Objective 2.4 — Given a scenario, analyze indicators of malicious activity

| id | Concept | Vocabulary |
|---|---|---|
| b-2.4-1 | Naming the malware family from what it *does*, not what it is called | *Ransomware*, *Trojan*, *Worm*, *Spyware*, *Bloatware*, *Virus*, *Keylogger*, *Logic bomb*, *Rootkit* |
| b-2.4-2 | Attacks that need physical proximity | *Brute force* (physical), *Radio frequency identification (RFID) cloning*, *Environmental* |
| b-2.4-3 | Volumetric attacks and how the volume is manufactured | *Distributed denial-of-service (DDoS)*, *Amplified*, *Reflected* |
| b-2.4-4 | Attacking name resolution rather than the host | *Domain Name System (DNS) attacks* |
| b-2.4-5 | Sitting between two parties, on the wire or over the air | *Wireless*, *On-path* |
| b-2.4-6 | Reusing captured authentication material | *Credential replay* |
| b-2.4-7 | Application-layer attack techniques, told apart by mechanism | *Injection*, *Buffer overflow*, *Replay*, *Privilege escalation*, *Forgery*, *Directory traversal* |
| b-2.4-8 | Attacking the cryptography instead of the secret | *Downgrade*, *Collision*, *Birthday* |
| b-2.4-9 | Two password attacks that look identical in a log until you count | *Spraying*, *Brute force* |
| b-2.4-10 | Account-state indicators | *Account lockout*, *Concurrent session usage*, *Impossible travel* |
| b-2.4-11 | Resource indicators | *Resource consumption*, *Resource inaccessibility*, *Blocked content* |
| b-2.4-12 | Logging indicators — including the absence of logs as evidence | *Out-of-cycle logging*, *Missing logs*, *Published/documented* |

> **Practice-source coverage: strong on naming, weak on reading indicators.**
> `comptia-practice-v7` covers b-2.4-1 (ransomware read from behaviour, not from the word).
> `jealarue-exam90` covers b-2.4-1 (rootkit, ransomware), b-2.4-7 (privilege escalation, CSRF,
> directory-traversal-adjacent), b-2.4-9 (spraying versus brute force, as a multiple-response item)
> and on-path/DNS variants. **b-2.4-2, b-2.4-8, b-2.4-10, b-2.4-11 and b-2.4-12 are untested by
> both.** The **indicator** half of this objective — the part the "Given a scenario" verb is
> actually pointing at — is almost entirely unwritten, and *missing logs as an indicator* (b-2.4-12)
> is the single most diagnostic idea in the domain: the evidence is the absence of evidence.

### Objective 2.5 — Explain the purpose of mitigation techniques used to secure the enterprise

| id | Concept | Vocabulary |
|---|---|---|
| b-2.5-1 | Splitting the network so a compromise cannot travel | *Segmentation* |
| b-2.5-2 | Expressing who may do what to which object | *Access control list (ACL)*, *Permissions* |
| b-2.5-3 | Default-deny for executables | *Application allow list* |
| b-2.5-4 | Cutting a system off from everything else | *Isolation* |
| b-2.5-5 | Closing known holes on a cadence | *Patching* |
| b-2.5-6 | Making stolen data useless, and noticing that it moved | *Encryption*, *Monitoring* |
| b-2.5-7 | Granting only what the role requires | *Least privilege* |
| b-2.5-8 | Making the intended configuration the enforced configuration | *Configuration enforcement* |
| b-2.5-9 | Retiring a system so it stops being an attack surface | *Decommissioning* |
| b-2.5-10 | Hardening as a checklist of removals and additions | *Hardening techniques*, *Installation of endpoint protection*, *Host-based firewall*, *Host-based intrusion prevention system (HIPS)*, *Disabling ports/protocols*, *Default password changes*, *Removal of unnecessary software* |

> **Practice-source coverage: partial.** `jealarue-exam90` covers b-2.5-1, b-2.5-3, b-2.5-7 and
> b-2.5-10, plus sandboxing. **b-2.5-2, b-2.5-4, b-2.5-8 and b-2.5-9 are untested by both**, and
> b-2.5-8 (configuration enforcement — the answer to "the baseline exists but nobody applies it") is
> the mitigations concept most often confused with plain patching.

---

## Domain 3 · Security Architecture (18%)

### Objective 3.1 — Compare and contrast security implications of different architecture models

| id | Concept | Vocabulary |
|---|---|---|
| b-3.1-1 | Who secures what, once you are in someone else's cloud | *Cloud*, *Responsibility matrix* |
| b-3.1-2 | Running in two places at once, and what that doubles | *Hybrid considerations*, *Third-party vendors* |
| b-3.1-3 | Infrastructure defined as code, and what that makes reviewable | *Infrastructure as code (IaC)* |
| b-3.1-4 | No server to patch — and what you gain and lose | *Serverless* |
| b-3.1-5 | Many small services versus one large one | *Microservices* |
| b-3.1-6 | Separation by physics versus separation by configuration | *Physical isolation*, *Air-gapped*, *Logical segmentation* |
| b-3.1-7 | Programmable networking | *Software-defined networking (SDN)* |
| b-3.1-8 | Keeping it yourself, and centralising or spreading control | *On-premises*, *Centralized vs. decentralized* |
| b-3.1-9 | Sharing a kernel versus sharing hardware | *Containerization*, *Virtualization* |
| b-3.1-10 | Systems that cannot be treated like servers | *IoT*, *Industrial control systems (ICS)/supervisory control and data acquisition (SCADA)*, *Real-time operating system (RTOS)*, *Embedded systems* |
| b-3.1-11 | The comparison axes the objective supplies for every model above | *Availability*, *Resilience*, *Cost*, *Responsiveness*, *Scalability*, *Ease of deployment*, *Risk transference*, *Ease of recovery*, *Patch availability*, *Inability to patch*, *Power*, *Compute* |

> **Practice-source coverage: partial.** `jealarue-exam90` covers b-3.1-1 (responsibility split at
> IaaS and at SaaS — its two strongest architecture items), b-3.1-7 and b-3.1-9. **b-3.1-2 through
> b-3.1-6, b-3.1-8, b-3.1-10 and the whole of b-3.1-11 are untested by both.** b-3.1-10 and
> b-3.1-11 together are the most valuable gap in the domain: *inability to patch* as a stated
> architecture consequence of ICS/RTOS/embedded is exactly the trade-off item practice sources never
> write, and it is a genuine compare-and-contrast.

### Objective 3.2 — Given a scenario, apply security principles to secure enterprise infrastructure

| id | Concept | Vocabulary |
|---|---|---|
| b-3.2-1 | Where a control physically or logically sits determines what it can see | *Device placement*, *Security zones*, *Attack surface*, *Connectivity* |
| b-3.2-2 | What the device does when it dies — and which choice is right when | *Failure modes*, *Fail-open*, *Fail-closed* |
| b-3.2-3 | Whether the device can act, and whether traffic must pass through it | *Active vs. passive*, *Inline vs. tap/monitor* |
| b-3.2-4 | Appliances chosen by the job they do | *Jump server*, *Proxy server*, *Intrusion prevention system (IPS)/intrusion detection system (IDS)*, *Load balancer*, *Sensors* |
| b-3.2-5 | Authenticating the endpoint before the port carries traffic | *Port security*, *802.1X*, *Extensible Authentication Protocol (EAP)* |
| b-3.2-6 | Firewall variants, separated by the layer they understand | *Web application firewall (WAF)*, *Unified threat management (UTM)*, *Next-generation firewall (NGFW)*, *Layer 4/Layer 7* |
| b-3.2-7 | Carrying private traffic across networks you do not own | *Virtual private network (VPN)*, *Remote access*, *Tunneling*, *Transport Layer Security (TLS)*, *Internet protocol security (IPSec)* |
| b-3.2-8 | Cloud-era connectivity and its security overlay | *Software-defined wide area network (SD-WAN)*, *Secure access service edge (SASE)* |
| b-3.2-9 | Choosing among the above against the stated requirement | *Selection of effective controls* |

> **Practice-source coverage: strong.** `jealarue-exam90` covers b-3.2-4 (IPS versus IDS by
> inline-ness), b-3.2-6 (WAF, NGFW), b-3.2-7 (site-to-site IPSec, TLS handshake, split tunnelling)
> and b-3.2-8 (SASE, SD-WAN). **b-3.2-1, b-3.2-2, b-3.2-3 and b-3.2-5 are untested by both**, and
> **b-3.2-2 (fail-open versus fail-closed) is the highest-value untested concept in Domain 3** —
> it is a genuine judgment with a defensible answer either way depending on whether the asset is a
> door or a firewall, which is exactly the shape of a good diagnostic item.

### Objective 3.3 — Compare and contrast concepts and strategies to protect data

| id | Concept | Vocabulary |
|---|---|---|
| b-3.3-1 | Data typed by the obligation attached to it | *Regulated*, *Trade secret*, *Intellectual property*, *Legal information*, *Financial information* |
| b-3.3-2 | Whether a machine or a person is the intended reader | *Human- and non-human-readable* |
| b-3.3-3 | Classification labels and the handling each demands | *Sensitive*, *Confidential*, *Public*, *Restricted*, *Private*, *Critical* |
| b-3.3-4 | The three states, and the fact that each needs a different control | *Data at rest*, *Data in transit*, *Data in use* |
| b-3.3-5 | Whose law applies to the bytes, and where they physically are | *Data sovereignty*, *Geolocation* |
| b-3.3-6 | Controls that make data unusable if taken | *Encryption*, *Hashing*, *Masking*, *Tokenization*, *Obfuscation* |
| b-3.3-7 | Controls that stop the data being reached at all | *Geographic restrictions*, *Segmentation*, *Permission restrictions* |

> **Practice-source coverage: partial.** `comptia-practice-v7` covers b-3.3-4 (a VPN protects data
> *in transit* — the official set's cleanest state-discrimination item). `jealarue-exam90` covers
> b-3.3-3 and b-3.3-6 (tokenization versus hashing versus masking). **b-3.3-1, b-3.3-2 and b-3.3-5
> are untested by both.** b-3.3-2 (human- versus non-human-readable) is unusual enough that a
> candidate meets it for the first time in the exam.

### Objective 3.4 — Explain the importance of resilience and recovery in security architecture

| id | Concept | Vocabulary |
|---|---|---|
| b-3.4-1 | Two different answers to "more than one machine" | *Load balancing vs. clustering* |
| b-3.4-2 | Recovery sites, priced by how ready they are | *Hot*, *Cold*, *Warm*, *Geographic dispersion* |
| b-3.4-3 | Not putting all the eggs on one vendor or one platform | *Platform diversity*, *Multi-cloud systems* |
| b-3.4-4 | Keeping the business running when IT does not | *Continuity of operations* |
| b-3.4-5 | Capacity as a resilience input, including the human kind | *Capacity planning*, *People*, *Technology*, *Infrastructure* |
| b-3.4-6 | Proving the plan works, at four increasing levels of realism | *Tabletop exercises*, *Fail over*, *Simulation*, *Parallel processing* |
| b-3.4-7 | Backup design decisions | *Onsite/offsite*, *Frequency*, *Encryption*, *Snapshots*, *Recovery*, *Replication*, *Journaling* |
| b-3.4-8 | Keeping the lights on for minutes versus for days | *Generators*, *Uninterruptible power supply (UPS)* |

> **Practice-source coverage: weak.** `comptia-practice-v7` covers b-3.4-7 (backups as the answer to
> ransomware recovery). `jealarue-exam90` covers b-3.4-2 partially (geographic redundancy) and
> misfires on backups (see the off-blueprint filter — it tests differential-versus-incremental and
> the "3-2-1 rule", neither of which the objective names). **b-3.4-1, b-3.4-3, b-3.4-4, b-3.4-5,
> b-3.4-6 and b-3.4-8 are untested by both.** b-3.4-6 is the best seed here: four testing methods
> ordered by realism and cost is a compare-and-contrast the exam explicitly asks for.

---

## Domain 4 · Security Operations (28%)

### Objective 4.1 — Given a scenario, apply common security techniques to computing resources

| id | Concept | Vocabulary |
|---|---|---|
| b-4.1-1 | A baseline as a three-verb lifecycle, not a document | *Secure baselines*, *Establish*, *Deploy*, *Maintain* |
| b-4.1-2 | What gets hardened, and why the list is that long | *Hardening targets*, *Mobile devices*, *Workstations*, *Switches*, *Routers*, *Cloud infrastructure*, *Servers*, *ICS/SCADA*, *Embedded systems*, *RTOS*, *IoT devices* |
| b-4.1-3 | Designing wireless coverage before securing it | *Site surveys*, *Heat maps* |
| b-4.1-4 | Who owns the device, and what that lets you enforce | *Mobile device management (MDM)*, *Bring your own device (BYOD)*, *Corporate-owned, personally enabled (COPE)*, *Choose your own device (CYOD)* |
| b-4.1-5 | The radio the device is using | *Cellular*, *Wi-Fi*, *Bluetooth* |
| b-4.1-6 | The wireless security stack, layer by layer | *Wi-Fi Protected Access 3 (WPA3)*, *AAA/Remote Authentication Dial-In User Service (RADIUS)*, *Cryptographic protocols*, *Authentication protocols* |
| b-4.1-7 | Securing the application at build time and at run time | *Input validation*, *Secure cookies*, *Static code analysis*, *Code signing* |
| b-4.1-8 | Containing unknown code and watching what it does | *Sandboxing*, *Monitoring* |

> **Practice-source coverage: weak for a 28% domain.** `jealarue-exam90` covers b-4.1-1 (baselines
> with drift detection) and touches secure protocols. **b-4.1-3, b-4.1-4, b-4.1-5, b-4.1-6 and
> b-4.1-7 are untested by both.** The **entire mobile block (b-4.1-4) and the entire wireless block
> (b-4.1-3, b-4.1-5, b-4.1-6) are uncovered by any accessible practice source**, which is the single
> largest concentration of untested objective surface in the build.

### Objective 4.2 — Explain the security implications of proper hardware, software, and data asset management

| id | Concept | Vocabulary |
|---|---|---|
| b-4.2-1 | Security decisions that happen before you own the asset | *Acquisition/procurement process* |
| b-4.2-2 | Every asset has a named owner and a classification | *Assignment/accounting*, *Ownership*, *Classification* |
| b-4.2-3 | You cannot protect what is not on the list | *Monitoring/asset tracking*, *Inventory*, *Enumeration* |
| b-4.2-4 | Ending an asset's life without leaking it | *Disposal/decommissioning*, *Sanitization*, *Destruction*, *Certification*, *Data retention* |

> **Practice-source coverage: near-absent.** `jealarue-exam90` touches b-4.2-4 only through a data
> retention *policy* item filed under governance. **b-4.2-1, b-4.2-2 and b-4.2-3 are untested by
> both** — a whole objective in the heaviest domain with effectively no practice-source signal.
> Sanitization versus destruction versus certification (b-4.2-4) is a clean three-way discrimination
> nobody writes.

### Objective 4.3 — Explain various activities associated with vulnerability management

| id | Concept | Vocabulary |
|---|---|---|
| b-4.3-1 | Finding weaknesses by scanning | *Vulnerability scan* |
| b-4.3-2 | Finding weaknesses in code, running and not running | *Static analysis*, *Dynamic analysis*, *Package monitoring* |
| b-4.3-3 | Learning about weaknesses from outside, by source reliability | *Threat feed*, *Open-source intelligence (OSINT)*, *Proprietary/third-party*, *Information-sharing organization*, *Dark web* |
| b-4.3-4 | Finding weaknesses by attacking | *Penetration testing* |
| b-4.3-5 | Letting outsiders report weaknesses safely, paid or unpaid | *Responsible disclosure program*, *Bug bounty program* |
| b-4.3-6 | Finding weaknesses in the process rather than the system | *System/process audit* |
| b-4.3-7 | Deciding whether a finding is real | *Confirmation*, *False positive*, *False negative* |
| b-4.3-8 | The two identifiers, and what each one is for | *Common Vulnerability Scoring System (CVSS)*, *Common Vulnerability Enumeration (CVE)* |
| b-4.3-9 | Why the same CVSS score ranks differently in two organisations | *Prioritize*, *Vulnerability classification*, *Exposure factor*, *Environmental variables*, *Industry/organizational impact*, *Risk tolerance* |
| b-4.3-10 | Fixing it — or deliberately not fixing it | *Patching*, *Insurance*, *Segmentation*, *Compensating controls*, *Exceptions and exemptions* |
| b-4.3-11 | Proving the fix landed | *Rescanning*, *Audit*, *Verification* |
| b-4.3-12 | Telling someone the result | *Reporting* |

> **Practice-source coverage: partial.** `comptia-practice-v7` covers b-4.3-5 (bug bounty named from
> a paid-researcher description). `jealarue-exam90` covers b-4.3-1 (credentialed versus
> unauthenticated scans), b-4.3-4 (scan versus pen test), b-4.3-8 (CVSS, acronym-level) and b-4.3-9
> (risk-based prioritisation). **b-4.3-2, b-4.3-3, b-4.3-6, b-4.3-7, b-4.3-10, b-4.3-11 and
> b-4.3-12 are untested by both.** b-4.3-7 (false positive versus false negative, and which one
> costs you more) and b-4.3-10 (exceptions and exemptions as a *legitimate* response) are the
> strongest unwritten items — the second one because "accept it, document it" reads like the wrong
> answer and is not.

### Objective 4.4 — Explain security alerting and monitoring concepts and tools

| id | Concept | Vocabulary |
|---|---|---|
| b-4.4-1 | What is being watched | *Monitoring computing resources*, *Systems*, *Applications*, *Infrastructure* |
| b-4.4-2 | The monitoring pipeline, stage by stage | *Log aggregation*, *Alerting*, *Scanning*, *Reporting*, *Archiving* |
| b-4.4-3 | What happens after the alert fires, including reducing the noise | *Alert response and remediation/validation*, *Quarantine*, *Alert tuning* |
| b-4.4-4 | Machine-readable configuration compliance | *Security Content Automation Protocol (SCAP)*, *Benchmarks* |
| b-4.4-5 | Whether the tool needs software on the host | *Agents/agentless* |
| b-4.4-6 | Correlating many sources into one timeline | *Security information and event management (SIEM)* |
| b-4.4-7 | Endpoint and content controls that also feed monitoring | *Antivirus*, *Data loss prevention (DLP)* |
| b-4.4-8 | Network-derived telemetry | *Simple Network Management Protocol (SNMP) traps*, *NetFlow* |
| b-4.4-9 | Scanners as an ongoing monitoring input, not a one-off | *Vulnerability scanners* |

> **Practice-source coverage: partial.** `jealarue-exam90` covers b-4.4-6 (SIEM twice, plus
> cross-source correlation as its own item) and b-4.4-7 (DLP, acronym-level). **b-4.4-2, b-4.4-3,
> b-4.4-4, b-4.4-5, b-4.4-8 and b-4.4-9 are untested by both.** **b-4.4-3 (alert tuning) is the best
> unwritten item in the domain**: the scenario writes itself — the alert is accurate, the analysts
> ignore it because volume is too high, and the fix is neither "buy a new tool" nor "hire analysts".

### Objective 4.5 — Given a scenario, modify enterprise capabilities to enhance security

| id | Concept | Vocabulary |
|---|---|---|
| b-4.5-1 | Expressing intent as a firewall configuration | *Rules*, *Access lists*, *Ports/protocols*, *Screened subnets* |
| b-4.5-2 | Detection tuned by what it matches on | *IDS/IPS*, *Trends*, *Signatures* |
| b-4.5-3 | Controlling what the browser may reach, and how the decision is made | *Web filter*, *Agent-based*, *Centralized proxy*, *Universal Resource Locator (URL) scanning*, *Content categorization*, *Block rules*, *Reputation* |
| b-4.5-4 | Enforcing configuration from inside the OS | *Group Policy*, *SELinux* |
| b-4.5-5 | Choosing the secure variant of a protocol, and the port that follows | *Protocol selection*, *Port selection*, *Transport method* |
| b-4.5-6 | Blocking by name resolution | *DNS filtering* |
| b-4.5-7 | The three records that prove an email's sender, and what each adds | *Sender Policy Framework (SPF)*, *DomainKeys Identified Mail (DKIM)*, *Domain-based Message Authentication Reporting and Conformance (DMARC)*, *Gateway* |
| b-4.5-8 | Noticing that a file changed when it should not have | *File integrity monitoring* |
| b-4.5-9 | Stopping data leaving | *DLP* |
| b-4.5-10 | Deciding whether a device may join at all | *Network access control (NAC)* |
| b-4.5-11 | Detection and response at the endpoint, and beyond it | *Endpoint detection and response (EDR)/extended detection and response (XDR)* |
| b-4.5-12 | Detecting the account rather than the malware | *User behavior analytics* |

> **Practice-source coverage: partial.** `comptia-practice-v7` covers b-4.5-1 with its one
> genuinely operational item — reading four candidate ACL lines and picking the one whose
> source/destination direction actually blocks the traffic. That item is also the closest thing in
> any accessible source to a **performance-based question rendered as multiple choice**, and it is
> the pattern to copy for PBQ approximation. `jealarue-exam90` covers b-4.5-10, b-4.5-11 and
> b-4.5-2. **b-4.5-3, b-4.5-4, b-4.5-6, b-4.5-7, b-4.5-8 and b-4.5-12 are untested by both** —
> b-4.5-7 (SPF/DKIM/DMARC told apart by what each one actually asserts) is the most examinable
> three-way discrimination in the whole domain.

### Objective 4.6 — Given a scenario, implement and maintain identity and access management

| id | Concept | Vocabulary |
|---|---|---|
| b-4.6-1 | Account lifecycle at both ends | *Provisioning/de-provisioning user accounts* |
| b-4.6-2 | What a permission grant actually implies downstream | *Permission assignments and implications* |
| b-4.6-3 | Establishing that the person is who they claim before issuing identity | *Identity proofing* |
| b-4.6-4 | Trusting another organisation's authentication | *Federation* |
| b-4.6-5 | Authenticate once, reach many — and the protocols that carry it | *Single sign-on (SSO)*, *Lightweight Directory Access Protocol (LDAP)*, *Open authorization (OAuth)*, *Security Assertions Markup Language (SAML)* |
| b-4.6-6 | Making identity systems work together, and proving state | *Interoperability*, *Attestation* |
| b-4.6-7 | Access control models, separated by what decides | *Mandatory*, *Discretionary*, *Role-based*, *Rule-based*, *Attribute-based*, *Time-of-day restrictions*, *Least privilege* |
| b-4.6-8 | The things a second factor can physically be | *Biometrics*, *Hard/soft authentication tokens*, *Security keys* |
| b-4.6-9 | The four factor categories, and why two of the same are not MFA | *Something you know*, *Something you have*, *Something you are*, *Somewhere you are* |
| b-4.6-10 | Password policy levers, and which ones actually help | *Length*, *Complexity*, *Reuse*, *Expiration*, *Age* |
| b-4.6-11 | Removing the password as a control, or hiding it behind a tool | *Password managers*, *Passwordless* |
| b-4.6-12 | Privileged access that exists only when needed | *Just-in-time permissions*, *Password vaulting*, *Ephemeral credentials* |

> **Practice-source coverage: strong.** `jealarue-exam90` covers b-4.6-5, b-4.6-9, b-4.6-12 and PAM
> twice. **b-4.6-1, b-4.6-2, b-4.6-3, b-4.6-6, b-4.6-7 and b-4.6-10 are untested by both.**
> **b-4.6-7 (the five access-control models) is the largest single-objective gap in Domain 4** —
> five named, contrastable models with a *"compare and contrast"*-shaped structure, and not one
> accessible source tests them. b-4.6-10 is the other one worth writing, because the defensible
> modern answer (length beats complexity, expiration is mostly harmful) is the option a candidate
> is least likely to pick.

### Objective 4.7 — Explain the importance of automation and orchestration related to secure operations

| id | Concept | Vocabulary |
|---|---|---|
| b-4.7-1 | Where automation is applied in security operations | *User provisioning*, *Resource provisioning*, *Guard rails*, *Security groups*, *Ticket creation*, *Escalation*, *Enabling/disabling services and access*, *Continuous integration and testing*, *Integrations and Application programming interfaces (APIs)* |
| b-4.7-2 | What automation buys, in the objective's own terms | *Efficiency/time saving*, *Enforcing baselines*, *Standard infrastructure configurations*, *Scaling in a secure manner*, *Employee retention*, *Reaction time*, *Workforce multiplier* |
| b-4.7-3 | What automation costs — the half candidates forget | *Complexity*, *Cost*, *Single point of failure*, *Technical debt*, *Ongoing supportability* |

> **Practice-source coverage: absent.** **No accessible practice source tests any concept in this
> objective.** `jealarue-exam90`'s nearest items are SOAR definitions filed elsewhere. b-4.7-3 is
> the highest-value seed: an automation that becomes a single point of failure is a competent-looking
> design that fails, which is exactly the diagnostic item shape the methodology prizes.

### Objective 4.8 — Explain appropriate incident response activities

| id | Concept | Vocabulary |
|---|---|---|
| b-4.8-1 | The seven-step process, in CompTIA's order | *Preparation*, *Detection*, *Analysis*, *Containment*, *Eradication*, *Recovery*, *Lessons learned* |
| b-4.8-2 | Which step an action belongs to — the discrimination the exam actually tests | *Containment*, *Eradication*, *Recovery* |
| b-4.8-3 | Rehearsing the plan before the incident | *Training*, *Tabletop exercise*, *Simulation* |
| b-4.8-4 | Finding the cause rather than the symptom | *Root cause analysis* |
| b-4.8-5 | Looking for what detection missed | *Threat hunting* |
| b-4.8-6 | Preserving evidence so it survives challenge | *Legal hold*, *Chain of custody*, *Acquisition*, *Preservation*, *Reporting*, *E-discovery* |

> **Practice-source coverage: strong — the best-converged objective in the build.**
> `comptia-practice-v7` covers b-4.8-1 (lessons learned as the *final* step). `jealarue-exam90`
> covers b-4.8-1, b-4.8-2 (containment and recovery as separate scenario items plus a
> multiple-response containment item), b-4.8-5 and b-4.8-6 (chain of custody twice, order of
> volatility). Note one divergence to correct: `jealarue-exam90` frames the lifecycle in **NIST
> four-phase terms**, not CompTIA's seven-step list — see the off-blueprint filter. **b-4.8-3
> (tabletop versus simulation) and b-4.8-4 are untested by both.**

### Objective 4.9 — Given a scenario, use data sources to support an investigation

| id | Concept | Vocabulary |
|---|---|---|
| b-4.9-1 | Choosing the log that can answer the question asked | *Firewall logs*, *Application logs*, *Endpoint logs*, *OS-specific security logs*, *IPS/IDS logs*, *Network logs* |
| b-4.9-2 | Data about the data as evidence | *Metadata* |
| b-4.9-3 | Non-log investigative sources | *Vulnerability scans*, *Automated reports*, *Dashboards*, *Packet captures* |

> **Practice-source coverage: partial.** `jealarue-exam90` covers b-4.9-1 (which log answers a DNS
> tunnelling question — its single best-designed item) and touches correlation. **b-4.9-2 and
> b-4.9-3 are untested by both.** This objective is the natural home of PBQ-approximating
> `scenario_matching` items: map several investigative questions onto the log source that answers
> each, with sources reused.

---

## Domain 5 · Security Program Management and Oversight (20%)

### Objective 5.1 — Summarize elements of effective security governance

| id | Concept | Vocabulary |
|---|---|---|
| b-5.1-1 | Four document classes ordered by how binding they are | *Guidelines*, *Policies*, *Standards*, *Procedures* |
| b-5.1-2 | The named policies an organisation is expected to hold | *Acceptable use policy (AUP)*, *Information security policies*, *Business continuity*, *Disaster recovery*, *Incident response*, *Software development lifecycle (SDLC)*, *Change management* |
| b-5.1-3 | The named standards | *Password*, *Access control*, *Physical security*, *Encryption* |
| b-5.1-4 | The named procedures | *Change management*, *Onboarding/offboarding*, *Playbooks* |
| b-5.1-5 | Obligations imposed from outside, by scope | *Regulatory*, *Legal*, *Industry*, *Local/regional*, *National*, *Global* |
| b-5.1-6 | Governance as something maintained, not written once | *Monitoring and revision* |
| b-5.1-7 | Who governs, and whether that authority is pooled or distributed | *Boards*, *Committees*, *Government entities*, *Centralized/decentralized* |
| b-5.1-8 | The four data roles, separated by what each may decide | *Owners*, *Controllers*, *Processors*, *Custodians/stewards* |

> **Practice-source coverage: weak.** `jealarue-exam90` covers b-5.1-2 partially (a retention and
> disposal policy) and b-5.1-3 indirectly. **b-5.1-1, b-5.1-4, b-5.1-5, b-5.1-6, b-5.1-7 and
> b-5.1-8 are untested by both.** **b-5.1-1 (guideline versus policy versus standard versus
> procedure) is the most reliably examined governance idea on any GRC exam and no accessible source
> tests it**, and b-5.1-8 (owner versus controller versus processor versus custodian) is the second.

### Objective 5.2 — Explain elements of the risk management process

| id | Concept | Vocabulary |
|---|---|---|
| b-5.2-1 | Finding the risk before assessing it | *Risk identification* |
| b-5.2-2 | Assessment cadence as a design choice | *Ad hoc*, *Recurring*, *One-time*, *Continuous* |
| b-5.2-3 | Two analysis modes and when each is honest | *Qualitative*, *Quantitative* |
| b-5.2-4 | The three quantitative quantities and how they compose | *Single loss expectancy (SLE)*, *Annualized rate of occurrence (ARO)*, *Annualized loss expectancy (ALE)* |
| b-5.2-5 | The qualitative inputs | *Probability*, *Likelihood*, *Exposure factor*, *Impact* |
| b-5.2-6 | The register as the living artefact | *Risk register*, *Key risk indicators*, *Risk owners*, *Risk threshold* |
| b-5.2-7 | How much risk is bearable, versus how much is wanted | *Risk tolerance*, *Risk appetite* |
| b-5.2-8 | Appetite stated as a posture | *Expansionary*, *Conservative*, *Neutral* |
| b-5.2-9 | The four treatments | *Transfer*, *Accept*, *Avoid*, *Mitigate* |
| b-5.2-10 | Acceptance done properly, with a paper trail | *Exemption*, *Exception* |
| b-5.2-11 | Telling the business what the risk position is | *Risk reporting* |
| b-5.2-12 | Impact analysis and the four recovery metrics | *Business impact analysis*, *Recovery time objective (RTO)*, *Recovery point objective (RPO)*, *Mean time to repair (MTTR)*, *Mean time between failures (MTBF)* |

> **Practice-source coverage: the strongest in Domain 5.** `jealarue-exam90` covers b-5.2-3/4 (SLE
> definition plus an ALE arithmetic item), b-5.2-6 twice, b-5.2-7 (a risk below tolerance,
> accepted), b-5.2-9 (transfer via insurance, plus a multiple-response treatment item) and b-5.2-12
> (RTO versus RPO twice). **b-5.2-1, b-5.2-2, b-5.2-5, b-5.2-8, b-5.2-10 and b-5.2-11 are untested
> by both.** b-5.2-8 (expansionary versus conservative versus neutral appetite) is the crispest
> untested three-way in the domain; b-5.2-10 (exception versus exemption) is the subtlest.

### Objective 5.3 — Explain the processes associated with third-party risk assessment and management

| id | Concept | Vocabulary |
|---|---|---|
| b-5.3-1 | Assessing a vendor before trusting them | *Penetration testing*, *Right-to-audit clause*, *Evidence of internal audits*, *Independent assessments*, *Supply chain analysis* |
| b-5.3-2 | Choosing between vendors without being captured | *Due diligence*, *Conflict of interest* |
| b-5.3-3 | Which paper does which job | *Service-level agreement (SLA)*, *Memorandum of agreement (MOA)*, *Memorandum of understanding (MOU)*, *Master service agreement (MSA)*, *Work order (WO)/statement of work (SOW)*, *Non-disclosure agreement (NDA)*, *Business partners agreement (BPA)* |
| b-5.3-4 | Trust as an ongoing measurement | *Vendor monitoring*, *Questionnaires* |
| b-5.3-5 | Agreeing the boundaries of a test before it starts | *Rules of engagement* |

> **Practice-source coverage: strong.** `comptia-practice-v7` covers b-5.3-5 (rules of engagement
> distinguished from right-to-audit and due diligence — the official set's hardest item, because
> three of the four options are real third-party artefacts). `jealarue-exam90` covers b-5.3-1
> (right-to-audit), b-5.3-2 (due diligence twice) and b-5.3-3 (SLA twice, MOU, NDA). **b-5.3-4 is
> untested by both.** b-5.3-3 carries seven named agreement types and is the objective most likely
> to justify a `scenario_matching` item — map situations onto the agreement that fits, with reuse.

### Objective 5.4 — Summarize elements of effective security compliance

| id | Concept | Vocabulary |
|---|---|---|
| b-5.4-1 | Who the report is for | *Compliance reporting*, *Internal*, *External* |
| b-5.4-2 | What non-compliance costs, beyond the fine | *Fines*, *Sanctions*, *Reputational damage*, *Loss of license*, *Contractual impacts* |
| b-5.4-3 | Proving compliance continuously | *Compliance monitoring*, *Due diligence/care*, *Attestation and acknowledgement*, *Internal and external*, *Automation* |
| b-5.4-4 | Privacy obligations scoped by jurisdiction | *Legal implications*, *Local/regional*, *National*, *Global* |
| b-5.4-5 | The three privacy roles | *Data subject*, *Controller vs. processor*, *Ownership* |
| b-5.4-6 | Knowing what personal data you hold and for how long | *Data inventory and retention* |
| b-5.4-7 | The data subject's erasure right | *Right to be forgotten* |

> **Practice-source coverage: weak, and what exists is off-blueprint.** `jealarue-exam90` reaches
> this objective only through **named regulations** (GDPR, HIPAA, PHI, PII) — none of which appear
> in the objectives body; GDPR and PII are acronym-list-only and HIPAA appears nowhere in the
> document. **Every concept b-5.4-1 through b-5.4-7 is untested by any accessible source at the
> blueprint's own altitude.** This objective will be a blueprint-only build, and that is the right
> outcome: the exam tests *controller versus processor*, not *which US statute covers health data*.

### Objective 5.5 — Explain types and purposes of audits and assessments

| id | Concept | Vocabulary |
|---|---|---|
| b-5.5-1 | Asserting compliance formally | *Attestation* |
| b-5.5-2 | Looking at yourself, at three levels of independence | *Internal*, *Compliance*, *Audit committee*, *Self-assessments* |
| b-5.5-3 | Being looked at by someone else | *External*, *Regulatory*, *Examinations*, *Assessment*, *Independent third-party audit* |
| b-5.5-4 | Testing by attacking, and from which side | *Penetration testing*, *Physical*, *Offensive*, *Defensive*, *Integrated* |
| b-5.5-5 | How much the tester is told before starting | *Known environment*, *Partially known environment*, *Unknown environment* |
| b-5.5-6 | Gathering information without touching, and with touching | *Reconnaissance*, *Passive*, *Active* |

> **Practice-source coverage: partial.** `jealarue-exam90` covers b-5.5-3 (independent external
> audit) and b-5.5-4 partially. **b-5.5-1, b-5.5-2, b-5.5-5 and b-5.5-6 are untested by both.**
> b-5.5-5 (known/partially known/unknown) is a three-way the exam names explicitly and no accessible
> source writes; b-5.5-6 (passive versus active recon, and why passive is chosen) is the other.

### Objective 5.6 — Given a scenario, implement security awareness practices

| id | Concept | Vocabulary |
|---|---|---|
| b-5.6-1 | Running the simulation, and what the user should do when they spot one | *Campaigns*, *Recognizing a phishing attempt*, *Responding to reported suspicious messages* |
| b-5.6-2 | Three kinds of behaviour worth flagging, only one of them malicious | *Risky*, *Unexpected*, *Unintentional* |
| b-5.6-3 | Getting guidance in front of people | *Policy/handbooks*, *Situational awareness* |
| b-5.6-4 | The named training topics | *Insider threat*, *Password management*, *Removable media and cables*, *Social engineering*, *Operational security*, *Hybrid/remote work environments* |
| b-5.6-5 | Awareness as a cycle, not an event | *Reporting and monitoring*, *Initial*, *Recurring* |
| b-5.6-6 | The programme's own lifecycle | *Development*, *Execution* |

> **Practice-source coverage: partial.** `jealarue-exam90` covers b-5.6-1 and b-5.6-5 (a
> click-then-retrain reinforcement loop) and role-targeted training. **b-5.6-2, b-5.6-3, b-5.6-4 and
> b-5.6-6 are untested by both.** b-5.6-2 is the interesting one: *risky*, *unexpected* and
> *unintentional* are three different diagnoses of the same observed behaviour and imply three
> different responses.

---

## The named-risk register

The objectives document names failure modes rather than leaving them implicit. Each is a high-value
diagnostic-item seed, because each names a specific way a competent-looking design fails.

| Named risk | Objective | Diagnostic question shape |
|---|---|---|
| *Implicit trust zones* | 1.2 | the perimeter was authenticated once and everything inside is trusted — name what that violates and what replaces it |
| *Fail-open* / *fail-closed* | 3.2 | the device died; which behaviour was correct here, and the answer flips depending on whether the asset is a door or a firewall |
| *Inability to patch* | 3.1 | an ICS/RTOS asset cannot take the patch — the fix is compensating, not corrective |
| *Legacy applications* / *dependencies* | 1.3 | the change is safe in isolation and breaks something two systems away |
| *Missing logs* / *out-of-cycle logging* | 2.4 | the evidence is the absence of evidence |
| *Impossible travel* / *concurrent session usage* | 2.4 | two facts that are individually normal and jointly impossible |
| *Resource reuse* / *VM escape* | 2.3 | isolation was assumed and the shared substrate did not honour it |
| *Alert tuning* | 4.4 | the detection is correct and useless because nobody reads it |
| *False negative* | 4.3 | the scan came back clean, and that is the finding |
| *Exceptions and exemptions* | 4.3, 5.2 | not fixing it is the defensible answer, provided it is recorded and owned |
| *Single point of failure* (of the automation) | 4.7 | the control that removed toil became the thing that takes everything down |
| *Shadow IT* | 2.1 | the threat actor is your own department |
| *Right to be forgotten* / *data sovereignty* | 5.4, 3.3 | the data is safe, legal and in the wrong country |
| *Conflict of interest* | 5.3 | the assessor is not independent, and the assessment is worthless |

**The strongest seed in the set** is *exceptions and exemptions* (4.3 with 5.2): the family of
"patch it now / escalate it / buy insurance" responses is exactly the plausible-looking wrong answer,
and the correct action — a recorded, owned, time-boxed exception with a compensating control — reads
like an excuse and is not.

## Concepts this source holds that no accessible practice source tests

Carried into the master inventory as blueprint-only entries (S3 will mark them single-source,
lower-confidence per `methodology/02-master-inventory.md#single-source`). Grouped by where the gap
is largest:

- **The whole of objective 4.7** (automation and orchestration — use cases, benefits, and the
  cost side) — no accessible source tests any of it, in the heaviest-weighted domain
- **Objective 4.2 almost entirely** (asset acquisition, ownership/classification, inventory,
  sanitization versus destruction versus certification)
- **The mobile and wireless block of 4.1** (b-4.1-3 through b-4.1-6: site surveys and heat maps,
  MDM, BYOD/COPE/CYOD, WPA3, RADIUS)
- **The five access-control models** (b-4.6-7) and **password policy levers** (b-4.6-10)
- **Governance document hierarchy** (b-5.1-1) and **the four data roles** (b-5.1-8)
- **Compliance at blueprint altitude** (all of 5.4 — controller versus processor, right to be
  forgotten, consequences of non-compliance) rather than as named statutes
- **The attack-surface half of 2.2** (b-2.2-2 through b-2.2-7)
- **The indicator half of 2.4** (b-2.4-10, b-2.4-11, b-2.4-12)
- **Zero Trust internals** (b-1.2-8, b-1.2-9) and **deception technology** (b-1.2-12)
- **Judgment concepts with no product attached** — b-3.2-2 (fail-open versus fail-closed), b-4.4-3
  (alert tuning), b-4.3-7 (false positive versus false negative), b-3.4-6 (four resilience test
  methods), b-5.5-5 (known/partially known/unknown), b-5.2-8 (risk appetite postures)

These are also, not coincidentally, the concepts a candidate is least likely to have drilled — which
makes them the highest-value items in the bank, and the reason a blueprint-first build beats a
practice-set-first build for this exam.

## Off-blueprint filter — terms the practice sources test that this document does not

Recorded here so the reconciliation in `master-inventory.md` shows the decision was made rather than
missed. CompTIA states its bullet lists are not exhaustive, so these are not *wrong* — but they are
unverifiable against the blueprint and must not enter the inventory as primary concepts.

**Acronym-list only** (present in the SY0-701 acronym table, absent from every objective bullet — legitimate vocabulary, illegitimate as an item's primary concept): *RAID*, *ASLR*, *TACACS+*, *STIX*,
*CASB*, *GDPR*, *TOTP*, *HOTP*, *PCI DSS*, *SOAR*, *CSRF*, *PII*, *APT*, *IOC*, *MFA*, *DDoS*.

**Absent from the document entirely** — do not author against these: *Kerberos*, *DNSSEC*,
*DoT/DoH*, *bcrypt*/*Argon2*, *microsegmentation*, *split tunnelling*, the *3-2-1 backup rule*,
*differential* versus *incremental* backups, *pass-the-hash*, *MAC flooding*, *VLAN hopping*,
*evil twin*, *stack canaries*, *DEP/NX*, *Control Flow Guard*, *heap versus stack overflow*,
*SOC 2*, *ISO/IEC 27001*, *NIST SP 800-53*, *NIST SP 800-61*, *CIS Benchmarks* (the objectives say
*Benchmarks* generically), *HIPAA*, *BYOK*, *SCEP*, *HSTS*, *MTD*, *NTP*, *ZTNA*,
*public/private/community cloud deployment models*, *SaaS/PaaS/IaaS service models*.

Two of these deserve a specific warning for S3:

1. **Incident-response phase naming.** `jealarue-exam90` frames the lifecycle in NIST's four-phase
   terms (Preparation → Detection and Analysis → Containment, Eradication and Recovery →
   Post-Incident Activity). CompTIA's objective 4.8 lists **seven** steps and separates *detection*
   from *analysis* and *containment* from *eradication* from *recovery*. Author to CompTIA's list; a
   candidate keyed to NIST's grouping will misplace at least one boundary.
2. **Cloud service models.** IaaS/PaaS/SaaS are not named anywhere in the objectives — the document
   speaks of a *responsibility matrix* instead. Items should test *who is responsible for what*,
   framed by the matrix, not by a service-model acronym the blueprint never uses.

## Concepts other sources hold that this source does not spell out

See the reconciliation in `master-inventory.md` (S3). In outline: the off-blueprint list above, plus
`jealarue-exam90`'s heavy use of acronym-expansion items, which test the acronym table rather than
any objective and should not survive into the bank as primary concepts — though the acronyms
themselves remain legitimate *vocabulary* for rationales.

## Consequence for S3 — the inventory is larger than the bank

237 concepts against an exam of 90 items and a methodology bank target of ≈1.35× (122 items). The
methodology's rule — every concept is the primary concept of exactly one bank item — **cannot hold
at this ratio.** This is a structural fact about a breadth exam, not a distillation error, and it is
a Gate 1 decision, not an authoring one. The three honest options:

1. **Merge to fit** — collapse the 237 concepts to ≈122 by merging the enumerated sub-lists (e.g.
   b-1.2-10 and b-1.2-11 become one "physical security" concept), accepting that a bank item then
   covers a family rather than a term.
2. **Grow the bank** — author ≈237 items (≈2.6× exam size) so every concept keeps its own item, at
   roughly double the authoring cost.
3. **Weight-proportional selection** — keep all 237 in `concepts.json` for traceability but mark
   ≈122 as bank-eligible, chosen to preserve the 12/22/18/28/20 weighting and to prioritise the
   blueprint-only concepts listed above (they are the ones no other practice resource covers).

Option 3 is the recommendation this artefact would defend: it preserves the full blueprint map for a
later top-up pass, it keeps the bank at methodology size, and it spends the authoring budget exactly
where Mockka has an advantage over every dump site — the concepts nobody else writes.
