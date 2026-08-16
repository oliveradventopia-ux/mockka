// The generalization acceptance test (ccar-p must pass with zero errors and
// the full check inventory must run) plus the negative test: a deliberately
// broken fixture bank must fail with the expected findings.

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadExam } from '../src/load.ts';
import { CHECK_NAMES, validateExam } from '../src/validate/index.ts';
import type { DistractorPatternRegistry } from '../src/types.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..', '..');
const registry = JSON.parse(
  readFileSync(join(ROOT, 'methodology', 'distractor-patterns.json'), 'utf8'),
) as DistractorPatternRegistry;

/** The complete check inventory, in execution order. Kept explicit so any
 *  added/removed/renamed check is a deliberate, reviewed change. */
const ALL_CHECKS = [
  'manifest-shape',
  'intro-presence',
  'concept-inventory',
  'concept-convergence',
  'concept-syllabus-rules',
  'blueprint-arithmetic',
  'bank-shape',
  'item-metadata',
  'keyword-presence',
  'single-choice-shape',
  'multiple-response-shape',
  'scenario-matching-shape',
  'rationale-anti-drift',
  'rationale-letter-reference',
  'distractor-patterns',
  'pattern-frequency-caps',
  'key-position-distribution',
  'answer-length-cue',
  'concept-coverage',
  'syllabus-rule-bank-coverage',
  'syllabus-rule-form-coverage',
  'selection-shape',
  'selection-format-mix',
  'selection-concept-uniqueness',
  'number-drift',
  'mojibake',
  'near-duplicate-stems',
  'style-policy',
  'provenance-sources',
  'licensed-import-license',
  'derivation-present',
  'concept-source-registry',
  'source-derivation-link',
  'publication-preflight',
];

test('the shared registry holds exactly D01–D20', () => {
  const ids = registry.patterns.map((p) => p.id);
  const expected = Array.from({ length: 20 }, (_, i) => `D${String(i + 1).padStart(2, '0')}`);
  assert.deepEqual(ids, expected);
  for (const p of registry.patterns) assert.ok(p.name.length > 0, `${p.id} has no name`);
});

test('the validator declares the full check inventory', () => {
  assert.deepEqual(CHECK_NAMES, ALL_CHECKS);
});

test('content/ccar-p passes with zero errors — the generalization acceptance test', () => {
  const pkg = loadExam(join(ROOT, 'content'), 'ccar-p');
  const result = validateExam(pkg, registry);

  const errors = result.findings.filter((f) => f.level === 'error');
  assert.deepEqual(errors, [], `unexpected errors:\n${JSON.stringify(errors.slice(0, 15), null, 2)}`);
  assert.equal(result.ok, true);
});

test('ccar-p surfaces its 27 known priority/convergence divergences as warnings, not errors', () => {
  // The migrated bank's priorities were hand-tuned for exam seating, so they
  // deliberately diverge from computed convergence (sources.length >= 2) on 27
  // concepts. The divergence is allowed authoring judgment — surfaced, never
  // gate-failing. A change to this count is a content decision, not noise.
  const pkg = loadExam(join(ROOT, 'content'), 'ccar-p');
  const result = validateExam(pkg, registry);

  const convergence = result.findings.filter((f) => f.check === 'concept-convergence');
  assert.equal(convergence.length, 27);
  assert.ok(convergence.every((f) => f.level === 'warn'));
  assert.equal(result.ok, true);
});

test('ccar-p runs every check except the publication preflight (status is in_review)', () => {
  const pkg = loadExam(join(ROOT, 'content'), 'ccar-p');
  const result = validateExam(pkg, registry);

  // Check-count parity: everything the original hardcoded validate.mjs
  // enforced runs here as a manifest-driven check, plus the provenance layer.
  // publication-preflight is gated on status === 'published'.
  assert.deepEqual(
    result.checksRun,
    ALL_CHECKS.filter((c) => c !== 'publication-preflight'),
  );
});

test('intro presence ratchet: silent on draft, warn on in_review, error at the published preflight', () => {
  const pkg = loadExam(join(ROOT, 'content'), 'ccar-p');
  const stripIntro = (status: 'draft' | 'in_review' | 'published') => ({
    ...pkg,
    manifest: { ...pkg.manifest, status, intro: undefined },
  });

  // draft: intro is optional — no finding at all.
  const draft = validateExam(stripIntro('draft'), registry);
  assert.deepEqual(draft.findings.filter((f) => f.check === 'intro-presence'), []);

  // in_review: a warn, never an error.
  const inReview = validateExam(stripIntro('in_review'), registry);
  const warns = inReview.findings.filter((f) => f.check === 'intro-presence');
  assert.equal(warns.length, 1);
  assert.equal(warns[0]!.level, 'warn');
  assert.match(warns[0]!.message, /manifest\.intro is missing/);

  // published: the preflight errors on the missing block.
  const published = validateExam(stripIntro('published'), registry);
  const preflight = published.findings
    .filter((f) => f.check === 'publication-preflight')
    .map((f) => f.message)
    .join('\n');
  assert.match(preflight, /manifest\.intro is missing — a published exam must carry its introduction page block/);
});

test('a present-but-malformed intro errors at any status', () => {
  const pkg = loadExam(join(ROOT, 'content'), 'ccar-p');
  const broken = {
    ...pkg,
    manifest: {
      ...pkg.manifest,
      status: 'draft' as const, // even a draft must not carry a half-filled intro
      intro: {
        about: '   ',
        audience: 'Practitioners.',
        materials: [],
        official_resources: [{ label: 'Portal', url: 'http://insecure.example.com' }],
        disclaimer: '',
      },
    },
  };
  const result = validateExam(broken, registry);
  const messages = result.findings
    .filter((f) => f.check === 'intro-presence' && f.level === 'error')
    .map((f) => f.message)
    .join('\n');
  assert.match(messages, /intro\.about is missing or empty/);
  assert.match(messages, /intro\.disclaimer is missing or empty/);
  assert.match(messages, /intro\.materials must list at least one entry/);
  assert.match(messages, /official_resources\[0\]\.url "http:\/\/insecure\.example\.com" must be an https:\/\/ URL/);
  assert.equal(result.ok, false);
});

test('the committed ccar-p and aif-c01 intros satisfy intro-presence with zero findings', () => {
  for (const slug of ['ccar-p', 'aif-c01']) {
    const pkg = loadExam(join(ROOT, 'content'), slug);
    assert.ok(pkg.manifest.intro, `${slug}: manifest.intro missing`);
    const result = validateExam(pkg, registry);
    assert.deepEqual(
      result.findings.filter((f) => f.check === 'intro-presence'),
      [],
      `${slug}: unexpected intro-presence findings`,
    );
  }
});

test('a missing theme fails when authoring.json declares a theme set', () => {
  const pkg = loadExam(join(ROOT, 'content'), 'ccar-p');
  const first = pkg.bank.questions[0]!;
  const stripped = {
    ...pkg,
    bank: {
      ...pkg.bank,
      questions: pkg.bank.questions.map((q) => (q === first ? { ...q, theme: undefined } : q)),
    },
  };
  const result = validateExam(stripped, registry);

  const messages = result.findings
    .filter((f) => f.check === 'item-metadata' && f.level === 'error')
    .map((f) => f.message)
    .join('\n');
  assert.match(messages, new RegExp(`${first.id.replace('.', '\\.')}: missing theme`));
});

test('a published package without eval artifacts fails the preflight', () => {
  const pkg = loadExam(join(ROOT, 'content'), 'ccar-p');
  const published = { ...pkg, manifest: { ...pkg.manifest, status: 'published' as const } };
  const result = validateExam(published, registry);

  assert.equal(result.ok, false);
  assert.ok(result.checksRun.includes('publication-preflight'));
  const preflight = result.findings.filter((f) => f.check === 'publication-preflight');
  const messages = preflight.map((f) => f.message).join('\n');
  assert.match(messages, /blind-solve\.json/);
  assert.match(messages, /judge-scores\.json/);
  assert.match(messages, /signoff\.md/);
});

/** Scratch package dir for on-disk preflight-artifact tests; auto-removed. */
function scratchEvalDir(t: { after(fn: () => void): void }, files: Record<string, string>): string {
  const dir = mkdtempSync(join(tmpdir(), 'mockka-preflight-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  mkdirSync(join(dir, 'eval'), { recursive: true });
  for (const [rel, content] of Object.entries(files)) {
    writeFileSync(join(dir, rel), content);
  }
  return dir;
}

test('the preflight rejects below-threshold judge scores and unadjudicated misses', (t) => {
  const pkg = loadExam(join(HERE, 'fixtures'), 'broken-exam');
  const dir = scratchEvalDir(t, {
    'eval/blind-solve.json': JSON.stringify({
      items: [
        { id: 'b1', chosen: 'B', keyed: 'B', confidence: 'high', reasoning: 'clean', match: true },
        { id: 'b2', chosen: 'A', keyed: 'C', confidence: 'high', reasoning: 'confident miss', match: false },
      ],
    }),
    'eval/judge-scores.json': JSON.stringify({
      items: [
        { id: 'b1', scores: { '1': 4, '2': 2, '3': 4, '4': 4, '5': 4, '6': 5 } },
        { id: 'b2', scores: { '1': 4, '2': 4, '3': 4, '4': 4, '5': 4 } },
      ],
    }),
    // no eval/overlap-report.md, no derivation/signoff.md
  });
  const published = { ...pkg, dir, manifest: { ...pkg.manifest, status: 'published' as const } };
  const result = validateExam(published, registry);

  const messages = result.findings
    .filter((f) => f.check === 'publication-preflight')
    .map((f) => f.message)
    .join('\n');
  assert.match(messages, /b2 misses the key with no adjudication verdict/);
  assert.match(messages, /b1 dimension 2 scored 2 — no dimension <=2 ships/);
  assert.match(messages, /b2 is missing dimension 6/);
  assert.match(messages, /overlap-report\.md is missing or empty/);
  assert.match(messages, /signoff\.md is missing or empty/);
});

test('empty {} eval artifacts fail the preflight for published exams', (t) => {
  const pkg = loadExam(join(HERE, 'fixtures'), 'broken-exam');
  const dir = scratchEvalDir(t, {
    'eval/blind-solve.json': '{}',
    'eval/judge-scores.json': '{}',
  });
  const published = { ...pkg, dir, manifest: { ...pkg.manifest, status: 'published' as const } };
  const result = validateExam(published, registry);

  const messages = result.findings
    .filter((f) => f.check === 'publication-preflight')
    .map((f) => f.message)
    .join('\n');
  assert.match(messages, /blind-solve\.json has no items\[\]/);
  assert.match(messages, /judge-scores\.json has no items\[\]/);
});

test('a registered source with no derivation artefact fails the derivation-doc link', () => {
  // The fixture ships no derivation/ directory, so a registered non-blueprint
  // source cannot resolve to source-<id>.md or a sources.md entry.
  const pkg = loadExam(join(HERE, 'fixtures'), 'broken-exam');
  const withSource = {
    ...pkg,
    manifest: {
      ...pkg.manifest,
      provenance: {
        ...pkg.manifest.provenance,
        sources: [
          {
            id: 'undocumented-source',
            type: 'own_distillation' as const,
            citation: 'Registered in the manifest but documented nowhere on disk.',
          },
        ],
      },
    },
  };
  const result = validateExam(withSource, registry);

  assert.equal(result.ok, false);
  const findings = result.findings.filter(
    (f) => f.check === 'source-derivation-link' && f.level === 'error',
  );
  assert.equal(findings.length, 1);
  assert.match(
    findings[0]!.message,
    /undocumented-source: registered but undocumented — expected derivation\/source-undocumented-source\.md/,
  );
});

test('a public_blueprint source needs no derivation doc — its facts are manifest arithmetic', () => {
  const pkg = loadExam(join(HERE, 'fixtures'), 'broken-exam');
  const withBlueprint = {
    ...pkg,
    manifest: {
      ...pkg.manifest,
      provenance: {
        ...pkg.manifest.provenance,
        sources: [
          { id: 'some-blueprint', type: 'public_blueprint' as const, citation: 'Official blueprint.' },
        ],
      },
    },
  };
  const result = validateExam(withBlueprint, registry);
  assert.deepEqual(
    result.findings.filter((f) => f.check === 'source-derivation-link'),
    [],
  );
});

test('the broken fixture bank fails with the expected findings — the gate gates', () => {
  const pkg = loadExam(join(HERE, 'fixtures'), 'broken-exam');
  const result = validateExam(pkg, registry);

  assert.equal(result.ok, false);

  const errorsBy = (check: string) =>
    result.findings.filter((f) => f.check === check && f.level === 'error');
  const messages = (check: string) => errorsBy(check).map((f) => f.message).join('\n');

  // Planted defect -> expected finding.
  assert.match(messages('single-choice-shape'), /b1: answer "E" is not an option/);
  assert.match(messages('rationale-letter-reference'), /b2/);
  assert.match(messages('rationale-anti-drift'), /b2: rationale explains \[B,C\] but the non-answer options are \[B,C,D\]/);
  assert.match(messages('distractor-patterns'), /b2: unknown distractor pattern "D99"/);
  assert.match(messages('concept-coverage'), /C-2: primary concept of 2 bank items \(b2, b3\)/);
  assert.match(messages('concept-coverage'), /C-3: no bank item tests this concept as primary/);
  assert.match(messages('selection-format-mix'), /d1 has 2 single_choice items, expected 1/);
  assert.match(messages('selection-format-mix'), /d1 has 0 multiple_response items, expected 1/);
  assert.match(messages('manifest-shape'), /near_duplicate_jaccard 1\.5 is outside \(0,1\]/);
  assert.match(messages('manifest-shape'), /pattern_caps is empty while the bank declares distractor_patterns/);
  assert.match(messages('provenance-sources'), /at least one source/);
  assert.match(messages('provenance-sources'), /nda_statement is empty/);
  assert.match(messages('derivation-present'), /missing or empty/);
  assert.match(messages('concept-source-registry'), /unregistered source id "unregistered-source"/);

  // The fixture is otherwise well-formed: its defects are planted, not noise.
  for (const clean of [
    'concept-inventory',
    'blueprint-arithmetic',
    'bank-shape',
    'item-metadata',
    'keyword-presence',
    'multiple-response-shape',
    'scenario-matching-shape',
    'pattern-frequency-caps',
    'selection-shape',
    'selection-concept-uniqueness',
    'number-drift',
    'mojibake',
    'near-duplicate-stems',
    'style-policy',
    'licensed-import-license',
  ]) {
    assert.deepEqual(errorsBy(clean), [], `expected no ${clean} errors`);
  }

  // Layer gating: syllabus_rules is off, so no rule check ran.
  assert.ok(!result.checksRun.includes('concept-syllabus-rules'));
  assert.ok(!result.checksRun.includes('syllabus-rule-bank-coverage'));
  assert.ok(!result.checksRun.includes('syllabus-rule-form-coverage'));
});
