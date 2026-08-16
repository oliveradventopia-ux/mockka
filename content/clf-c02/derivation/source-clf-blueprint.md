# Artefact B · AWS Certified Cloud Practitioner (CLF-C02) exam guide concepts

**What this is.** The CLF-C02 exam guide states **135 objective bullets across 19 task statements
in 4 content domains**. Most bullets carry more than one testable idea, and several are bare lists
of example terms where each term is separately examinable. This document splits each bullet into
its constituent concepts and records the **canonical vocabulary** attached to each.

**Why it exists.** It is the authoritative half of the master concept inventory: where a practice
source records what an author *believed* is tested, this records what the vendor's blueprint
*actually declares* — and supplies the exact terminology a candidate will recognise from study.

**Vocabulary is quoted verbatim** from the exam guide. That is deliberate and is the only verbatim
content permitted in any artefact (`methodology/01-source-distillation.md#clean-room`): a question
that uses the guide's own terms lets a candidate trace a missed item straight back to the
objective. No objective prose, no example sentences and no service descriptions are reproduced —
only the terms themselves.

> Source: `clf-blueprint` in [sources.md](sources.md) — exam guide PDF (32 pp., build date
> 2026-08-14, **no vendor version string**), read in full 2026-08-16. Credited in the exam README.

## Guide structure → exam domain mapping

The mapping is 1:1 — the guide *is* the blueprint, so its content domains are the manifest's
domains and no reconciliation is needed. What needs recording is the task-statement layer beneath
each domain, because that is the level the concept inventory is built at and the level a per-item
"concept tested" claim should resolve to.

| Guide content domain | Manifest domain | Weight (of scored content) | Task statements | Objective bullets |
|---|---|---|---|---|
| Domain 1 · Cloud Concepts | `d1` | 24% | 1.1, 1.2, 1.3, 1.4 | 18 |
| Domain 2 · Security and Compliance | `d2` | 30% | 2.1, 2.2, 2.3, 2.4 | 31 |
| Domain 3 · Cloud Technology and Services | `d3` | 34% | 3.1 – 3.8 | 58 |
| Domain 4 · Billing, Pricing, and Support | `d4` | 12% | 4.1, 4.2, 4.3 | 28 |
| — | — | **100%** | **19** | **135** |

Weights sum to 100. At 50 scored items the per-domain counts are **12 · 15 · 17 · 6**, which sums
back to 50 exactly — no rounding judgment needed for this exam.

Three structural facts that shape authoring, all stated by the guide:

1. **The candidate recognises; the candidate does not build.** The guide declares *coding*,
   *designing cloud architecture*, *troubleshooting*, *implementation* and *load and performance
   testing* out of scope for the target candidate (up to 6 months' exposure, possibly non-IT).
   Items must test *recognition, positioning and selection*, never implementation. Any item whose
   key requires designing or debugging something is off-blueprint. This is a **lower altitude than
   AIF-C01**: even "judgment under trade-off" items must stay at the level of naming the right
   service or the right cost model.
2. **The service lists are the answer space, and they are unusually large.** The guide publishes
   an in-scope list of **100 offerings across 19 categories** and an out-of-scope list of **46
   offerings across 19 categories**. Distractors drawn from the *in-scope* list are fair;
   distractors naming *out-of-scope* services are cheap, because a prepared candidate eliminates
   them without reasoning about the scenario. The out-of-scope list is best used as a **screen on
   our own bank**, not as a distractor source.
3. **Two item types only.** Multiple choice (one key, three distractors) and multiple response
   (two or more keys among five or more options). Nothing else exists on this exam.

**In-scope service list, verbatim, as the authoring answer space.**
*(Analytics)* Amazon Athena, Amazon EMR, AWS Glue, Amazon Kinesis, Amazon OpenSearch Service,
Amazon Quick Sight, Amazon Redshift ·
*(Application Integration)* Amazon EventBridge, Amazon Simple Notification Service (Amazon SNS),
Amazon Simple Queue Service (Amazon SQS), AWS Step Functions ·
*(Business Applications)* Amazon Connect, Amazon Simple Email Service (Amazon SES) ·
*(Cloud Financial Management)* AWS Budgets, AWS Cost and Usage Reports, AWS Cost Explorer,
AWS Marketplace ·
*(Compute)* AWS Batch, Amazon EC2, AWS Elastic Beanstalk, Amazon Lightsail, AWS Outposts ·
*(Containers)* Amazon Elastic Container Registry (Amazon ECR), Amazon Elastic Container Service
(Amazon ECS), Amazon Elastic Kubernetes Service (Amazon EKS) ·
*(Customer Enablement)* AWS Support ·
*(Database)* Amazon Aurora, Amazon DocumentDB, Amazon DynamoDB, Amazon ElastiCache, Amazon Neptune,
Amazon RDS ·
*(Developer Tools)* AWS CLI, AWS CodeBuild, AWS CodePipeline, AWS X-Ray ·
*(End User Computing)* Amazon AppStream 2.0, Amazon WorkSpaces, Amazon WorkSpaces Secure Browser ·
*(Frontend Web and Mobile)* AWS Amplify ·
*(Internet of Things)* AWS IoT Core ·
*(Machine Learning)* Amazon Comprehend, Amazon Lex, Amazon Polly, Amazon Q, Amazon Rekognition,
Amazon SageMaker AI, Amazon Textract, Amazon Transcribe, Amazon Translate ·
*(Management and Governance)* AWS Auto Scaling, AWS CloudFormation, AWS CloudTrail,
Amazon CloudWatch, AWS Compute Optimizer, AWS Config, AWS Control Tower, AWS Health Dashboard,
AWS License Manager, AWS Management Console, AWS Organizations, AWS Service Catalog, Service
Quotas, AWS Systems Manager, AWS Trusted Advisor, AWS Well-Architected Tool ·
*(Migration and Transfer)* AWS Application Discovery Service, AWS Application Migration Service,
AWS Database Migration Service (AWS DMS), Migration Evaluator, AWS Migration Hub, AWS Schema
Conversion Tool (AWS SCT) ·
*(Networking and Content Delivery)* Amazon API Gateway, Amazon CloudFront, AWS Direct Connect,
AWS Global Accelerator, AWS PrivateLink, Amazon Route 53, AWS Transit Gateway, Amazon VPC, AWS VPN,
AWS Site-to-Site VPN, AWS Client VPN ·
*(Security, Identity, and Compliance)* AWS Artifact, AWS Certificate Manager (ACM), AWS CloudHSM,
Amazon Cognito, Amazon Detective, AWS Directory Service, AWS Firewall Manager, Amazon GuardDuty,
AWS Identity and Access Management (IAM), AWS IAM Identity Center, Amazon Inspector, AWS Key
Management Service (AWS KMS), Amazon Macie, AWS Resource Access Manager (AWS RAM), AWS Secrets
Manager, AWS Security Hub, AWS Shield, AWS WAF ·
*(Serverless)* AWS Fargate, AWS Lambda ·
*(Storage)* AWS Backup, Amazon Elastic Block Store (Amazon EBS), Amazon Elastic File System
(Amazon EFS), AWS Elastic Disaster Recovery, Amazon FSx, Amazon S3, Amazon S3 Glacier, AWS Storage
Gateway.

**Out-of-scope services worth naming, because practice sources keep testing them:** AWS Wavelength,
AWS Copilot (Compute) · AWS Device Farm, AWS CodeDeploy, Amazon CodeGuru, AWS CloudShell,
AWS CodeArtifact, AWS Application Composer (Developer Tools) · Amazon Personalize, Amazon Fraud
Detector, AWS Panorama, Amazon Lookout for Metrics (Machine Learning) · Amazon MemoryDB for Redis
OSS, Amazon Keyspaces, AWS AppConfig (Database) · Amazon FSx for Lustre (Storage) · AWS Data
Exchange, AWS Clean Rooms, Amazon DataZone, Amazon MSK, Amazon AppFlow (Analytics) · AWS Managed
Services (AMS), AWS IQ, AWS Activate (Customer Enablement) · AWS Network Firewall, Amazon Cloud
Directory (Security) · AWS Transfer Family, AWS Migration Hub Refactor Spaces (Migration) ·
AWS Cloud Map, Amazon VPC Lattice, AWS Ground Station, AWS Network Access Analyzer (Networking) ·
AWS Chatbot, AWS Launch Wizard, Amazon Data Lifecycle Manager, Amazon Elastic Transcoder
(Management) · the whole Media Services, Game Tech and Robotics categories.

**Also absent from the in-scope list, and therefore off-blueprint despite being famous:** the
AWS Snow family (Snowball / Snowball Edge / Snowmobile), AWS Local Zones, AWS Nitro Enclaves,
Amazon Kendra, Amazon Bedrock, AWS AppSync, Amazon DynamoDB Accelerator (DAX), Amazon Managed
Grafana, AWS Audit Manager, AWS Security Hub *is* in scope but AWS Audit Manager is not. Note the
guide's own prose contradicts its list once: Task Statement 1.3's skills bullet gives *database
replication* as the migration-strategy example and names no transfer appliance, yet three of the
registered practice sources reach for Snowball — see the coverage annotations below.

**Technologies and concepts named separately by the guide** (a flat list the guide publishes
outside the domain outline, useful as a vocabulary check): *APIs*, *Benefits of migrating to the
AWS Cloud*, *AWS Cloud Adoption Framework (AWS CAF)*, *AWS Compliance*, *Compute*, *Cost
management*, *Databases*, *Amazon EC2 instance types*, *AWS global infrastructure*, *Infrastructure
as code (IaC)*, *AWS Knowledge Center*, *Machine learning*, *Management and governance*, *Migration
and data transfer*, *Network services*, *AWS Partner Network (APN)*, *AWS Prescriptive Guidance*,
*AWS Pricing Calculator*, *AWS Professional Services*, *AWS re:Post*, *AWS SDKs*, *Security*,
*AWS Security Blog*, *AWS shared responsibility model*, *AWS solutions architects*, *Storage*,
*AWS Support Center*, *AWS Support plans*, *AWS Well-Architected Framework*.

---

## Domain 1 · Cloud Concepts (24%)

### Task Statement 1.1 — Define the benefits of the AWS Cloud (3 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.1-1 | What the cloud sells that a server room cannot: the value statement itself | *value proposition of the AWS Cloud* |
| b-1.1-2 | Why a globally distributed platform is a benefit and not just a topology | *global infrastructure*, *speed of deployment*, *global reach* |
| b-1.1-3 | Separating three benefits candidates routinely conflate | *high availability*, *elasticity*, *agility* |

> **Practice-source coverage: partial and skewed.** All three sources test b-1.1-3, always as a
> four-way discrimination between elasticity / scalability / high availability / fault tolerance
> (`tss-declute` items 5 and 27; `tss-mckenzie` item 15). b-1.1-2 appears once. b-1.1-1 as a stated
> value proposition is never tested directly — it is always instantiated as a cost or agility item.

### Task Statement 1.2 — Identify design principles of the AWS Cloud (3 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.2-1 | That a named framework exists and what it is for | *AWS Well-Architected Framework* |
| b-1.2-2 | Naming the six pillars | *operational excellence*, *security*, *reliability*, *performance efficiency*, *cost optimization*, *sustainability* |
| b-1.2-3 | Telling the pillars apart — which concern a given design statement belongs to | *identifying differences between the pillars* |

> **Practice-source coverage: none.** Not one of the 80 registered practice items tests the
> Well-Architected pillars, despite this being 3 of D1's 18 bullets and the flat technologies list
> naming the framework separately. **The single largest blind spot in the practice corpus** —
> authoring must supply this from the blueprint alone. Note the excluded ExamTopics corpus *does*
> test it (its question 4 is a reliability-pillar item), which is a reminder that a dump corpus and
> a blueprint can agree about coverage while remaining unusable.

### Task Statement 1.3 — Understand the benefits of and strategies for migration (4 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.3-1 | That adoption is a planned strategy, not a lift event | *cloud adoption strategies* |
| b-1.3-2 | Which published resources support a migration journey | *resources to support the cloud migration journey* |
| b-1.3-3 | What the adoption framework is composed of | *AWS Cloud Adoption Framework (AWS CAF)* |
| b-1.3-4 | The four business outcomes the guide attaches to CAF | *reduced business risk*, *improved environmental, social, and governance [ESG] performance*, *increased revenue*, *increased operational efficiency* |
| b-1.3-5 | Recognising a migration strategy from a described situation | *identifying appropriate migration strategies*, *database replication* |

> **Practice-source coverage: `tutorialsdojo-sampler` only.** Its items 1–3 are the only practice
> items in the corpus touching CAF and AWS Professional Services' role in it (item 3 tests a CAF
> *perspective*, a level of detail the guide does not itself enumerate — see the over-reach note
> in that artefact). Single-source; carry as such.

### Task Statement 1.4 — Understand concepts of cloud economics (8 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-1.4-1 | That cloud economics is a subject with named aspects | *aspects of cloud economics* |
| b-1.4-2 | Where the saving actually comes from when moving off-premises | *cost savings of moving to the cloud* |
| b-1.4-3 | The cost-structure change: which spend is fixed and which varies with use | *fixed costs*, *variable costs* |
| b-1.4-4 | Costs a data centre carries that a cloud bill does not itemise | *costs that are associated with on-premises environments* |
| b-1.4-5 | Whether a licence travels with the workload or comes with the service | *Bring Your Own License [BYOL] model*, *included licenses* |
| b-1.4-6 | Matching provisioned capacity to observed demand as a cost action | *rightsizing* |
| b-1.4-7 | Automation as a cost lever, not only a speed lever | *benefits of automation* |
| b-1.4-8 | Why a provider's scale shows up in a customer's unit price | *economies of scale* |

> **Practice-source coverage: heavy but repetitive.** Cost-structure items dominate the corpus —
> `tss-mckenzie` 4 and 28, `tss-declute` 9, 16 and 21, `tutorialsdojo-sampler` 10 all test the same
> CAPEX→OPEX / pay-as-you-go idea (b-1.4-3), three of them by asking which statement is *false*.
> b-1.4-5 (BYOL) is tested once, from the purchasing-option side (`tutorialsdojo-sampler` 6).
> b-1.4-4, b-1.4-6, b-1.4-7 and b-1.4-8 are **never tested** — four untested bullets in the most
> over-drilled task statement in the corpus. Correct this at authoring: cap the CAPEX/OPEX concept
> at one bank item and spend the rest on rightsizing, automation and on-premises cost composition.

---

## Domain 2 · Security and Compliance (30%)

### Task Statement 2.1 — Understand the AWS shared responsibility model (6 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.1-1 | That the model exists and what question it answers | *AWS shared responsibility model* |
| b-2.1-2 | Naming the two sides of the boundary | *recognizing the components* |
| b-2.1-3 | Which duties sit with the customer | *describing the customer's responsibilities on AWS* |
| b-2.1-4 | Which duties sit with AWS | *describing AWS responsibilities* |
| b-2.1-5 | Duties that are genuinely shared rather than assigned | *responsibilities that the customer and AWS share* |
| b-2.1-6 | That the boundary **moves with the service model** — the same duty can be AWS's on one service and the customer's on another | *Amazon RDS*, *AWS Lambda*, *Amazon EC2* |

> **Practice-source coverage: strong, and the corpus's second-most-tested idea.** `tss-declute` 7,
> 12, 28 and 32 plus `tss-mckenzie` 4's fourth option all test b-2.1-3/b-2.1-4 as a
> which-side-is-this question. **b-2.1-6 — the boundary shifting between EC2, RDS and Lambda — is
> never tested**, though it is the only bullet in this task statement that requires reasoning
> rather than recall. High-value authoring seed.

### Task Statement 2.2 — Understand security, governance, and compliance concepts (9 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.2-1 | The vocabulary of governance as distinct from security controls | *AWS compliance and governance concepts* |
| b-2.2-2 | What the platform gives you that a server room does not | *benefits of cloud security*, *encryption* |
| b-2.2-3 | Where security-relevant logs land and how they are found | *where to capture and locate logs that are associated with cloud security* |
| b-2.2-4 | Where a compliance artefact (audit report, attestation) is obtained | *AWS Artifact* |
| b-2.2-5 | That obligations differ by geography and by industry | *compliance needs among geographic locations or industries*, *AWS compliance* |
| b-2.2-6 | Which service detects which class of security problem | *Amazon Inspector*, *AWS Security Hub*, *Amazon GuardDuty*, *AWS Shield* |
| b-2.2-7 | The two states data can be encrypted in | *encryption in transit*, *encryption at rest* |
| b-2.2-8 | Which service answers a governance question: monitoring vs auditing vs configuration vs reporting | *monitoring with Amazon CloudWatch*, *auditing with AWS CloudTrail and AWS Config*, *reporting with access reports* |
| b-2.2-9 | That a service's own compliance posture varies — not every service is in every programme | *compliance requirements that vary among AWS services* |

> **Practice-source coverage: partial.** b-2.2-6 and b-2.2-8 are well covered (`tss-mckenzie` 6 and
> 22, `tutorialsdojo-sampler` 7 — all four-way service discriminations). b-2.2-7 appears once, at
> the hardware-module end (`tss-declute` 1, CloudHSM vs KMS). **b-2.2-4 (AWS Artifact), b-2.2-5 and
> b-2.2-9 are never tested** — the entire compliance-evidence half of the task statement is
> missing from the practice corpus while representing 3 of D2's 31 bullets.

### Task Statement 2.3 — Identify AWS access management capabilities (10 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.3-1 | The service that decides who may do what | *identity and access management*, *AWS Identity and Access Management [IAM]* |
| b-2.3-2 | Why the root user is a special risk | *importance of protecting the AWS root user account* |
| b-2.3-3 | The principle that sizes a permission set | *principle of least privilege* |
| b-2.3-4 | The workforce single-sign-on service, as distinct from IAM | *AWS IAM Identity Center* |
| b-2.3-5 | Which credential type is used for which access path, and where secrets belong | *access keys*, *password policies*, *credential storage*, *AWS Secrets Manager*, *AWS Systems Manager* |
| b-2.3-6 | Recognising an authentication method from its description | *multi-factor authentication [MFA]*, *IAM Identity Center*, *cross-account IAM roles* |
| b-2.3-7 | The four IAM building blocks and how permissions are attached | *groups*, *users*, *custom policies*, *managed policies* |
| b-2.3-8 | Actions no other identity can perform | *tasks that only the account root user can perform* |
| b-2.3-9 | The concrete measures that protect the root user | *methods can achieve root user protection* |
| b-2.3-10 | Identity that originates outside AWS | *types of identity management*, *federated* |

> **Practice-source coverage: the corpus's strongest area.** `tss-mckenzie` 1, 11, 19, 23, 27 and
> 32 and `tss-declute` 12, 14, 19 and 23 cover b-2.3-1, b-2.3-3 through b-2.3-7 densely, including
> the credential-family discrimination (access keys vs console password vs EC2 key pair) and the
> role-vs-user distinction. **b-2.3-2, b-2.3-8 and b-2.3-9 — the entire root-user cluster — are
> never tested**, which is striking given the guide devotes three of ten bullets to it. Second
> high-value authoring seed.

### Task Statement 2.4 — Identify components and resources for security (6 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-2.4-1 | The catalogue of protective capabilities the platform offers | *security capabilities that AWS provides* |
| b-2.4-2 | That AWS publishes security documentation as a resource class | *security-related documentation that AWS provides* |
| b-2.4-3 | Matching a protective service to the threat it addresses | *AWS WAF*, *AWS Firewall Manager*, *AWS Shield*, *Amazon GuardDuty* |
| b-2.4-4 | That third-party security products are procured through a marketplace | *third-party security products*, *AWS Marketplace* |
| b-2.4-5 | Where to look for security information — three named destinations | *AWS Knowledge Center*, *AWS Security Center*, *AWS Security Blog* |
| b-2.4-6 | Which service surfaces security issues as recommendations | *AWS Trusted Advisor* |

> **Practice-source coverage: partial.** b-2.4-3 is covered (`tss-mckenzie` 14, `tss-declute` 11).
> b-2.4-6 is covered from the cost side rather than the security side (`tss-mckenzie` 24,
> `tss-declute` 6, `tutorialsdojo-sampler` 5 — all three treat Trusted Advisor as a cost/quota
> tool). b-2.4-2, b-2.4-4 and b-2.4-5 are **never tested**: the "where do I find it" bullets, which
> are cheap to author and genuinely examinable at this altitude.

---

## Domain 3 · Cloud Technology and Services (34%)

### Task Statement 3.1 — Define methods of deploying and operating in the AWS Cloud (6 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.1-1 | That there is more than one way to create a resource | *various ways of provisioning and operating in the AWS Cloud* |
| b-3.1-2 | The access surfaces themselves | *various ways to access AWS services* |
| b-3.1-3 | Choosing among console, programmatic and declarative access | *programmatic access*, *APIs*, *SDKs*, *CLI*, *AWS Management Console*, *infrastructure as code (IaC)* |
| b-3.1-4 | When a task justifies being made repeatable | *one-time operations*, *repeatable processes* |
| b-3.1-5 | The three deployment models | *cloud*, *hybrid*, *on-premises* |
| b-3.1-6 | Recognising a deployment model from a described estate | *identifying deployment models* |

> **Practice-source coverage: thin.** `tss-declute` 2 covers b-3.1-3 from the IaC side
> (CloudFormation / Elastic Beanstalk). b-3.1-4 and b-3.1-5 are never tested. Note that both
> TheServerSide sources test **IaaS / PaaS / SaaS / FaaS** service-model identification
> (`tss-mckenzie` 10 and 34) — vocabulary the CLF-C02 guide **does not use anywhere**. That is an
> off-blueprint import from older cloud syllabi; do not carry it into the inventory.

### Task Statement 3.2 — Define the AWS global infrastructure (8 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.2-1 | The three physical units of the platform | *AWS Regions*, *Availability Zones*, *edge locations* |
| b-3.2-2 | What availability means as a property of a deployment | *high availability* |
| b-3.2-3 | Why an estate would span Regions at all | *use of multiple Regions* |
| b-3.2-4 | What an edge location buys | *benefits of edge locations* |
| b-3.2-5 | How the three units nest and relate | *describing relationships among Regions, Availability Zones, and edge locations* |
| b-3.2-6 | Multi-AZ as the mechanism of high availability | *achieve high availability by using multiple Availability Zones* |
| b-3.2-7 | The specific guarantee an AZ boundary provides | *Availability Zones do not share single points of failure* |
| b-3.2-8 | The four reasons to reach for a second Region | *disaster recovery*, *business continuity*, *low latency for end users*, *data sovereignty* |

> **Practice-source coverage: good.** `tss-mckenzie` 7 and 13 and `tss-declute` 11, 26 and 34 cover
> b-3.2-1, b-3.2-4, b-3.2-5 and b-3.2-7. b-3.2-8's *data sovereignty* and *business continuity*
> motivations are absent — every multi-Region item in the corpus is a latency item.

### Task Statement 3.3 — Identify AWS compute services (6 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.3-1 | The compute family as a category | *AWS compute services* |
| b-3.3-2 | Matching a workload profile to an instance family | *Amazon EC2 instance types*, *compute optimized*, *storage optimized* |
| b-3.3-3 | Choosing between the two container orchestrators | *Amazon Elastic Container Service [Amazon ECS]*, *Amazon Elastic Kubernetes Service [Amazon EKS]* |
| b-3.3-4 | Choosing a serverless compute mode | *AWS Fargate*, *AWS Lambda* |
| b-3.3-5 | That elasticity is delivered by a named mechanism | *auto scaling provides elasticity* |
| b-3.3-6 | What a load balancer is for | *purposes of load balancers* |

> **Practice-source coverage: good but instance-type-blind.** b-3.3-4 and b-3.3-6 are well covered
> (`tss-mckenzie` 18, 33, 35; `tss-declute` 22, 33). **b-3.3-2 — matching a workload to an instance
> family — is never tested by any source**, though the guide names it explicitly and repeats
> "Amazon EC2 instance types" in its flat technologies list. Note `tss-mckenzie` 18 tests the
> **NLB / ALB / CLB** discrimination, a level of detail the guide does not enumerate (it says only
> "purposes of load balancers"); treat as over-reach, keep at most one such item.

### Task Statement 3.4 — Identify AWS database services (7 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.4-1 | The database family as a category | *AWS database services* |
| b-3.4-2 | That moving a database is a distinct problem | *database migration* |
| b-3.4-3 | When to keep the database on an instance you administer | *EC2 hosted databases*, *AWS managed databases* |
| b-3.4-4 | Recognising the relational options | *Amazon RDS*, *Amazon Aurora* |
| b-3.4-5 | Recognising the non-relational option | *NoSQL databases*, *Amazon DynamoDB* |
| b-3.4-6 | Recognising the in-memory option | *memory-based databases*, *Amazon ElastiCache* |
| b-3.4-7 | The two migration tools and what each does | *AWS Database Migration Service [AWS DMS]*, *AWS Schema Conversion Tool [AWS SCT]* |

> **Practice-source coverage: good on selection, absent on migration.** b-3.4-3 through b-3.4-6 are
> covered (`tss-declute` 31, 35; `tutorialsdojo-sampler` 4; `tss-mckenzie` 16, 20). **b-3.4-2 and
> b-3.4-7 — DMS and SCT — are never tested by any source**, despite being 2 of 7 bullets and DMS
> appearing in the guide's own migration-strategy example. Third high-value authoring seed.

### Task Statement 3.5 — Identify AWS network services (5 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.5-1 | The network family as a category | *AWS network services* |
| b-3.5-2 | What a VPC is made of | *components of a VPC*, *subnets*, *gateways* |
| b-3.5-3 | The two stateful/stateless filters and where scanning fits | *network ACLs*, *security groups*, *Amazon Inspector* |
| b-3.5-4 | What the DNS service is for | *purpose of Amazon Route 53* |
| b-3.5-5 | The two ways to reach AWS privately from elsewhere | *AWS VPN*, *AWS Direct Connect* |

> **Practice-source coverage: partial.** b-3.5-5 is covered twice (`tss-mckenzie` 5;
> `tutorialsdojo-sampler` 9). b-3.5-2 is covered once, weakly. **b-3.5-3 — security groups vs
> network ACLs, the classic practitioner discrimination — is never tested as a comparison**; it
> appears only as a shared-responsibility answer (`tss-declute` 7). b-3.5-4 is never tested
> directly (Route 53 appears three times, always as a *distractor*).

### Task Statement 3.6 — Identify AWS storage services (8 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.6-1 | The storage family as a category | *AWS storage services* |
| b-3.6-2 | What object storage is for | *uses for object storage* |
| b-3.6-3 | Telling the S3 storage classes apart by access pattern and cost | *differences in Amazon S3 storage classes* |
| b-3.6-4 | The two block options and their lifetimes | *block storage*, *Amazon Elastic Block Store [Amazon EBS]*, *instance store* |
| b-3.6-5 | The two file options | *file services*, *Amazon Elastic File System [Amazon EFS]*, *Amazon FSx* |
| b-3.6-6 | Where an on-premises cache of cloud storage fits | *cached file systems*, *AWS Storage Gateway* |
| b-3.6-7 | Moving data between classes automatically | *use cases for lifecycle policies* |
| b-3.6-8 | Centralised backup as a distinct service | *use cases for AWS Backup* |

> **Practice-source coverage: the corpus's densest area after IAM.** b-3.6-2 through b-3.6-5 are
> covered repeatedly (`tss-declute` 4, 8, 18, 29; `tss-mckenzie` 25, 29; `tutorialsdojo-sampler` 8),
> including three separate storage-class/retrieval-tier items. **b-3.6-6, b-3.6-7 and b-3.6-8 —
> Storage Gateway, lifecycle policies and AWS Backup — are never tested**, i.e. the data-management
> half of the task statement. Also note `tss-mckenzie` 29 tests **S3 Glacier retrieval tiers**
> (Expedited / Standard / Bulk) — retrieval-tier granularity is not named in the guide, which says
> only "differences in Amazon S3 storage classes". Over-reach; keep at most one.

### Task Statement 3.7 — Identify AI/ML and analytics services (4 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.7-1 | The AI/ML family as a category | *AWS AI/ML services* |
| b-3.7-2 | The analytics family as a category | *AWS analytics services* |
| b-3.7-3 | Which AI/ML service performs which task | *Amazon SageMaker AI*, *Amazon Lex* |
| b-3.7-4 | Which analytics service answers which data question | *Amazon Athena*, *Amazon Kinesis*, *AWS Glue*, *Amazon Quick Sight* |

> **Practice-source coverage: good.** `tss-mckenzie` 12 and 34 and `tss-declute` 20 and 24 cover
> b-3.7-3 and b-3.7-4. Watch the naming: the guide writes *Amazon SageMaker AI* and *Amazon Quick
> Sight*; two practice sources still write "Amazon SageMaker", "QuickSight" and "Amazon Kendra"
> (Kendra is not in the in-scope list at all). Canonical vocabulary comes from the guide, not from
> the practice sources.

### Task Statement 3.8 — Identify services from other in-scope categories (14 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-3.8-1 | The three application-integration services and what each does | *Amazon EventBridge*, *Amazon Simple Notification Service (Amazon SNS)*, *Amazon Simple Queue Service (Amazon SQS)* |
| b-3.8-2 | The two business-application services | *Amazon Connect*, *Amazon Simple Email Service (Amazon SES)* |
| b-3.8-3 | What customer enablement covers | *customer enablement services*, *AWS Support* |
| b-3.8-4 | The three developer-tool services and their stages | *AWS CodeBuild*, *AWS CodePipeline*, *AWS X-Ray* |
| b-3.8-5 | The three end-user-computing services | *Amazon AppStream 2.0*, *Amazon WorkSpaces*, *Amazon WorkSpaces Secure Browser* |
| b-3.8-6 | The frontend/mobile service | *AWS Amplify* |
| b-3.8-7 | The IoT service | *AWS IoT Core* |
| b-3.8-8 | Choosing a delivery mechanism for messages, alerts and notifications | *deliver messages*, *send alerts and notifications* |
| b-3.8-9 | Choosing a service for a business-application need | *meet business application needs* |
| b-3.8-10 | Choosing a support option for a business need | *business support assistance* |
| b-3.8-11 | Choosing a tool by software-lifecycle stage | *develop, deploy, and troubleshoot applications* |
| b-3.8-12 | Presenting a remote machine's output to a user | *present the output of virtual machines (VMs) on end-user machines* |
| b-3.8-13 | Standing up frontend and mobile delivery | *create and deploy frontend and mobile services* |
| b-3.8-14 | Managing a device fleet | *services that manage IoT devices* |

> **Practice-source coverage: SNS/SQS/EventBridge only.** `tss-mckenzie` 2 and 26 cover b-3.8-1 and
> b-3.8-8. **Everything else in the largest task statement in the exam — end-user computing,
> frontend/mobile, IoT, business applications, developer tools — is untested by all three
> sources**, 11 of 14 bullets. This task statement alone is a plausible 5–6 scored items and the
> practice corpus is silent on it. Largest coverage gap in the build; the inventory must be
> blueprint-driven here.

---

## Domain 4 · Billing, Pricing, and Support (12%)

### Task Statement 4.1 — Compare AWS pricing models (7 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-4.1-1 | The seven compute purchasing options as a set | *On-Demand Instances*, *Reserved Instances*, *Spot Instances*, *AWS Savings Plans*, *Dedicated Hosts*, *Dedicated Instances*, *Capacity Reservations* |
| b-4.1-2 | That storage is also tiered and priced by tier | *storage options and tiers* |
| b-4.1-3 | Matching a workload's tolerance and commitment to a purchasing option | *identifying when to use various compute purchasing options* |
| b-4.1-4 | The dimensions along which a reservation can flex | *Reserved Instance flexibility* |
| b-4.1-5 | How a reservation applies across a multi-account organisation | *Reserved Instance behavior in AWS Organizations* |
| b-4.1-6 | Which data movements are charged and which are not | *incoming data transfer costs*, *outgoing data transfer costs*, *from one AWS Region to another Region*, *within the same Region* |
| b-4.1-7 | Pricing as it differs by storage option and tier | *pricing options for various storage options and tiers* |

> **Practice-source coverage: strong, including the hardest item in the corpus.** b-4.1-3 is
> covered three times (`tss-mckenzie` 3, 8; `tutorialsdojo-sampler` 6), b-4.1-6 once
> (`tss-declute` 25) and b-4.1-5 once (`tss-declute` 30, an RI-in-consolidated-billing item that is
> materially harder than the rest of the corpus). b-4.1-4 (RI flexibility) is never tested. Note
> `tss-declute` 10 tests **per-second billing granularity for Windows On-Demand**, a fact the guide
> does not state and which has changed over the platform's history — do not carry it. `[UNVERIFIED]`

### Task Statement 4.2 — Understand resources for billing, budget, cost management (8 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-4.2-1 | Where billing help and billing information come from | *billing support and information* |
| b-4.2-2 | Where a service's price list lives | *pricing information for AWS services* |
| b-4.2-3 | The multi-account container | *AWS Organizations* |
| b-4.2-4 | Tagging as the mechanism that attributes cost | *AWS cost allocation tags* |
| b-4.2-5 | Budgets vs Cost Explorer — alerting vs analysis | *AWS Budgets*, *AWS Cost Explorer* |
| b-4.2-6 | Estimating a design before it exists | *AWS Pricing Calculator* |
| b-4.2-7 | What consolidating billing actually does to charges | *AWS Organizations consolidated billing*, *allocation of costs* |
| b-4.2-8 | How tags surface in the billing record | *types of cost allocation tags*, *AWS Cost and Usage Report* |

> **Practice-source coverage: over-concentrated on Cost Explorer.** b-4.2-5 is tested four times
> across the corpus (`tss-mckenzie` 30; `tss-declute` 3, 17; plus Cost Explorer as a distractor in
> four more items), always as "analysis vs alerting vs estimation". **b-4.2-4 and b-4.2-8 — cost
> allocation tags and the Cost and Usage Report — are never tested**, and b-4.2-7 only inside the
> hard RI item. Cap the Cost-Explorer-vs-Budgets concept at one bank item.

### Task Statement 4.3 — Identify technical resources and Support options (13 bullets)

| id | Concept | Vocabulary |
|---|---|---|
| b-4.3-1 | That AWS publishes an official documentation estate | *resources and documentation available on official AWS websites* |
| b-4.3-2 | That support is sold in named plans | *AWS Support plans* |
| b-4.3-3 | What the partner network is and who is in it | *AWS Partner Network*, *independent software vendors*, *system integrators* |
| b-4.3-4 | Where a support case is raised | *AWS Support Center* |
| b-4.3-5 | Finding written guidance by type | *AWS whitepapers*, *blogs*, *documentation* |
| b-4.3-6 | The three named technical-resource destinations | *AWS Prescriptive Guidance*, *AWS Knowledge Center*, *AWS re:Post* |
| b-4.3-7 | Telling the five support tiers apart | *customer service and communities*, *AWS Developer Support*, *AWS Business Support*, *AWS Enterprise On-Ramp Support*, *AWS Enterprise Support* |
| b-4.3-8 | Which tool reports account health, and which reports optimisation | *AWS Trusted Advisor*, *AWS Health Dashboard*, *AWS Health API*, *cost optimization* |
| b-4.3-9 | Where abuse of AWS resources is reported | *AWS Trust and Safety team* |
| b-4.3-10 | What a partner or the marketplace is used for | *AWS Partners*, *AWS Marketplace*, *independent software vendors*, *system integrators* |
| b-4.3-11 | What being a partner earns | *partner training and certification*, *partner events*, *partner volume discounts* |
| b-4.3-12 | What the marketplace offers beyond software | *cost management*, *governance and entitlement* |
| b-4.3-13 | Which paid human help exists and when to buy it | *AWS Professional Services*, *AWS solutions architects* |

> **Practice-source coverage: `tutorialsdojo-sampler` carries this task statement almost alone.**
> Its items 1, 2 and 5 cover b-4.3-13, b-4.3-3/b-4.3-10 and b-4.3-8; `tss-mckenzie` 17 covers
> b-4.3-7 from the Basic-plan end. **b-4.3-6 (Prescriptive Guidance / Knowledge Center / re:Post),
> b-4.3-9 (Trust and Safety), b-4.3-11 and b-4.3-12 are never tested** — four of thirteen bullets,
> all of them pure recall and cheap to author well.

---

## The named-risk register

The CLF-C02 guide **names no failure modes** — unlike a practice syllabus, it declares only what a
candidate should recognise. There is therefore no named-risk register for this exam and no
diagnostic-item seed set derived from one. The equivalent high-value seeds here are the
**never-tested bullets** flagged in the coverage annotations above, which are collected for S3:

| Seed | Bullets | Why it is high value |
|---|---|---|
| Well-Architected pillars | b-1.2-1 … b-1.2-3 | 3 bullets, zero practice coverage, unambiguous vocabulary |
| Root-user cluster | b-2.3-2, b-2.3-8, b-2.3-9 | 3 bullets, zero coverage, and the one place this exam has a genuinely security-critical fact |
| Responsibility boundary shifting by service | b-2.1-6 | the only reasoning-shaped bullet in D2's most-tested task statement |
| Migration tooling | b-3.4-2, b-3.4-7 | DMS/SCT named by the guide twice, tested by nobody |
| Task statement 3.8's long tail | b-3.8-2 … b-3.8-7, b-3.8-9 … b-3.8-14 | 11 untested bullets in the exam's largest task statement |
| Compliance evidence | b-2.2-4, b-2.2-5, b-2.2-9 | AWS Artifact and the geography/industry axis, entirely absent |
| Cost mechanics beyond CAPEX/OPEX | b-1.4-4, b-1.4-6, b-1.4-7, b-1.4-8 | the practice corpus drills one idea six times and these four never |
| Support/marketplace long tail | b-4.3-6, b-4.3-9, b-4.3-11, b-4.3-12 | pure recall, cheap, and D4 is small enough that these matter |

## Off-blueprint concepts to reject at S3

Concepts the practice sources test that this guide does **not** support. Recording them here is the
point of writing Artefact B first — without it, three of them would look like convergence.

| Off-blueprint concept | Seen in | Why it fails |
|---|---|---|
| IaaS / PaaS / SaaS / FaaS service-model identification | `tss-mckenzie` 10, 34 | the vocabulary appears nowhere in the CLF-C02 guide; the guide's models are *cloud / hybrid / on-premises* |
| AWS Wavelength, 5G carrier edge | `tss-mckenzie` 31 | Wavelength is on the guide's **out-of-scope** list |
| AWS Device Farm | `tss-declute` 15 | Device Farm is on the guide's **out-of-scope** list |
| Amazon FSx for Lustre, Amazon Managed Grafana, AWS Nitro Enclaves, Amazon Kendra, AWS AppSync, Snowball/Snowball Edge, AWS Local Zones, DynamoDB DAX | distractors across all three sources | not on the in-scope list; fair as *recognition* noise only if never keyed, and better avoided entirely |
| S3 Glacier retrieval tiers (Expedited/Standard/Bulk timings) | `tss-mckenzie` 29 | finer than "differences in Amazon S3 storage classes"; retain at most one item |
| NLB vs ALB vs CLB by OSI layer | `tss-mckenzie` 18 | finer than "purposes of load balancers" |
| AWS CAF *perspectives* (business/people/governance/platform/security/operations) | `tutorialsdojo-sampler` 3 | the guide names CAF and its four business outcomes, not its perspectives |
| Per-second billing granularity for Windows On-Demand | `tss-declute` 10 | not a guide fact, and a moving one `[UNVERIFIED]` |
