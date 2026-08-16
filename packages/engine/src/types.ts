// @mockka/engine — content-package types.
//
// Everything the CCAR-P validator hardcoded (format mix, totals, themes,
// pattern caps, option counts, spelling policy, …) is data here, carried by
// the per-exam manifest and authoring config. The invariants live in
// validate/index.ts; these types are the contract they run against.

export type ExamStatus = 'draft' | 'in_review' | 'published';

export type QuestionFormat =
  | 'single_choice'
  | 'multiple_response'
  | 'scenario_matching';

export type ProvenanceSourceType =
  | 'public_blueprint'
  | 'public_syllabus'
  | 'public_practice_set'
  | 'own_course_notes'
  | 'own_distillation'
  | 'licensed_import';

/** Per-domain slice of the exam's format mix. Missing format = 0 items. */
export interface FormatMix {
  single_choice: number;
  multiple_response: number;
  scenario_matching: number;
}

export interface DomainSpec {
  /** Short id, e.g. 'd1'. Questions and concepts reference this. */
  id: string;
  /** Display title, e.g. 'Solution Design & Architecture'. */
  title: string;
  weight_pct: number;
  exam_items: number;
  bank_items: number;
  format_mix: FormatMix;
}

export interface ProvenanceSource {
  id: string;
  type: ProvenanceSourceType;
  citation: string;
  /** Required for licensed_import; checked against the commercial-compatible allowlist. */
  license?: string;
  /** Required for licensed_import; attribution per the license terms. */
  attribution?: string;
}

/** One "what this mock provides" entry on the intro page. */
export interface IntroMaterial {
  title: string;
  description: string;
}

/** One official-vendor link on the intro page. https only. */
export interface IntroResource {
  label: string;
  url: string;
}

/** The per-exam introduction page block (methodology/06-provenance-publishing.md#intro).
 *  Rendered by the player intro tab and the standalone export. Optional for
 *  draft; `intro-presence` warns when missing on in_review; the publication
 *  preflight errors when missing on published. */
export interface ExamIntro {
  /** Executive summary: what the certification validates, domains covered. */
  about: string;
  /** Who the certification is for (roles). */
  audience: string;
  /** What THIS mock provides (bank size, formats, dashboard, review depth). */
  materials: IntroMaterial[];
  /** Official cert portal / guide links. */
  official_resources: IntroResource[];
  /** Attribution / independence / personal-use notice — exam-specific wording,
   *  aligned with the package README (cite, don't contradict). */
  disclaimer: string;
}

export interface ExamManifest {
  slug: string;
  title: string;
  vendor: string;
  status: ExamStatus;
  version: string;
  blueprint_version?: string;
  source_checked_date?: string;
  exam: {
    item_count: number;
    time_limit_minutes: number;
    pass_threshold_pct: number;
  };
  bank: { item_count: number };
  domains: DomainSpec[];
  formats: {
    single_choice: { options: number };
    multiple_response: { options: number; select_count: number[] };
    scenario_matching: {
      min_options: number;
      min_scenarios: number;
      require_option_reuse: boolean;
    };
  };
  style: { locale: string; emoji: boolean };
  validation: {
    /** Pattern id -> max share of all declared distractor patterns (0..1). */
    pattern_caps: Record<string, number>;
    /** Jaccard similarity threshold for the near-duplicate stem check. */
    near_duplicate_jaccard: number;
    /** BD-1 knob (`key-position-distribution`): max share of single_choice
     *  items any one key letter may carry. Optional — defaults to 0.4;
     *  manifest-shape bounds it to [0.25, 0.6] (an unbounded knob is an
     *  author-operated off-switch — the near_duplicate_jaccard lesson). */
    key_letter_max_share?: number;
    /** BD-1 knob: max share of multiple_response items sharing one exact key
     *  set. Optional — defaults to 0.5; bounded to [0.25, 0.75]. */
    mr_key_set_max_share?: number;
    /** BD-2 knobs (`answer-length-cue`): keyed-option vs longest-distractor
     *  length-ratio tiers. Optional — default 1.25 (warn tier) / 1.5 (error
     *  tier); bounded to [1.05, 1.5] and [1.2, 2.0], warn <= error. */
    answer_length_ratio_warn?: number;
    answer_length_ratio_error?: number;
  };
  layers: {
    /** When true, syllabus-rules.json must exist and coverage checks run. */
    syllabus_rules: boolean;
  };
  /** Introduction page content. Presence rules: see ExamIntro. */
  intro?: ExamIntro;
  /** Disclosure rendered on the intro page when the real exam's format profile
   *  exceeds the supported formats (plan Decision 7). */
  format_coverage?: string;
  provenance: {
    sources: ProvenanceSource[];
    nda_statement: string;
  };
}

// ---------------------------------------------------------------- questions

interface QuestionBase {
  id: string;
  /** Short domain id (matches DomainSpec.id). */
  domain: string;
  primary_concept: string;
  secondary_concepts?: string[];
  /** Renamed from CCAR-P's recap_rule. Required when layers.syllabus_rules. */
  syllabus_rule?: string;
  /** Per-exam theme id declared in authoring.json. */
  theme?: string;
  /** Industry vertical; presence enforced when authoring.json declares verticals. */
  vertical?: string;
  keywords: string[];
  question: string;
}

export interface SingleChoiceQuestion extends QuestionBase {
  type: 'single_choice';
  options: Record<string, string>;
  answer: string;
  /** Non-answer option key -> distractor pattern id (registry + extensions). */
  distractor_patterns: Record<string, string>;
  rationale: { correct: string; distractors: Record<string, string> };
}

export interface MultipleResponseQuestion extends QuestionBase {
  type: 'multiple_response';
  options: Record<string, string>;
  select_count: number;
  answer: string[];
  distractor_patterns: Record<string, string>;
  rationale: { correct: string; distractors: Record<string, string> };
}

export interface Scenario {
  id: string;
  text: string;
}

export interface ScenarioMatchingQuestion extends QuestionBase {
  type: 'scenario_matching';
  matching_options: string[];
  scenarios: Scenario[];
  /** Scenario id -> matching option text. */
  answer: Record<string, string>;
  /** Matching items take no per-option distractor rationales. */
  rationale: { correct: string };
}

export type Question =
  | SingleChoiceQuestion
  | MultipleResponseQuestion
  | ScenarioMatchingQuestion;

export interface QuestionBank {
  version?: string;
  questions: Question[];
}

// ---------------------------------------------------------------- concepts

export interface ConceptSourceRef {
  /** Registered provenance source id (manifest.provenance.sources[].id). */
  artefact: string;
  /** Item references inside the source's derivation doc, when applicable. */
  items?: string[];
}

export interface Concept {
  id: string;
  /** Short domain id. */
  domain: string;
  statement: string;
  vocabulary: string[];
  priority: 'high' | 'normal';
  sources: ConceptSourceRef[];
  syllabus_rule?: string;
}

export interface ConceptInventory {
  version?: string;
  concepts: Concept[];
}

// ------------------------------------------------------- selection / layers

export interface SelectionForm {
  id: string;
  /** Ordered question ids; the paper is served in this order. */
  items: string[];
  /** Free-form selection provenance (method, hand-adjustments). Not validated. */
  notes?: unknown;
}

export interface Selection {
  version?: string;
  forms: SelectionForm[];
}

export interface SyllabusRule {
  id: string;
  title: string;
  gloss: string;
  module?: string;
}

export interface SyllabusRules {
  version?: string;
  modules?: Record<string, string>;
  rules: SyllabusRule[];
}

export interface PatternExtension {
  id: string;
  name: string;
}

export interface AuthoringConfig {
  version?: string;
  /** Theme ids valid for this exam's items. */
  themes: string[];
  /** Per-exam additions to the shared distractor-pattern registry. */
  pattern_extensions: PatternExtension[];
  verticals: string[];
}

export interface DistractorPattern {
  id: string;
  name: string;
}

/** The shared registry at methodology/distractor-patterns.json. */
export interface DistractorPatternRegistry {
  version?: string;
  patterns: DistractorPattern[];
}

// ---------------------------------------------------------------- package

/** A fully loaded content package (content/<slug>/). */
export interface ExamPackage {
  /** Absolute directory of the package; filesystem checks (derivation/, eval/) use it. */
  dir: string;
  manifest: ExamManifest;
  concepts: ConceptInventory;
  bank: QuestionBank;
  selection: Selection;
  syllabusRules?: SyllabusRules;
  authoring?: AuthoringConfig;
}

// ------------------------------------------------------------ attempt state

/** "B" | ["A","C"] | { s1: "fixed workflow", … } — matches the CCAR-P app.js shape. */
export type AnswerValue = string | string[] | Record<string, string>;

export interface AttemptState {
  answers: Record<string, AnswerValue>;
  flags: Record<string, boolean>;
  submitted: boolean;
  timed: boolean;
  /** Epoch ms. */
  endsAt: number | null;
  startedAt: number | null;
  finishedAt: number | null;
  /** Per-attempt display-shuffle seed (BD-1 render hardening, S5 eval-report
   *  §8). Null until the client mints one at hydration — the server render
   *  keeps JSON order, so first paint never mismatches. Persisted so option
   *  order is stable across refresh within an attempt and varies between
   *  attempts. Display-only: grading and stored answers stay letter-keyed. */
  seed: number | null;
}

// ---------------------------------------------------------------- grading

export interface DomainScore {
  domainId: string;
  correct: number;
  total: number;
  pct: number;
}

export interface WeakRule {
  ruleId: string;
  correct: number;
  total: number;
  missedItemIds: string[];
}

export interface GradeReport {
  totalCorrect: number;
  totalItems: number;
  /** Math.round((correct / total) * 100) — CCAR-P rounding, so 47/63 -> 75. */
  pct: number;
  passed: boolean;
  perDomain: DomainScore[];
  /** Only populated when the syllabus-rules layer is on and rules are supplied. */
  weakRules: WeakRule[];
}

// -------------------------------------------------------------- validation

export type FindingLevel = 'error' | 'warn';

export interface Finding {
  check: string;
  level: FindingLevel;
  message: string;
}

export interface ValidationResult {
  ok: boolean;
  findings: Finding[];
  /** Names of the checks that actually ran (layer-gated checks may be skipped). */
  checksRun: string[];
}
