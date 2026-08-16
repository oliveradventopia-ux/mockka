// Content-package loader. Node fs only — used at build time by Next server
// components (via transpilePackages) and by the validator CLI.

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import type {
  AuthoringConfig,
  ConceptInventory,
  ExamManifest,
  ExamPackage,
  Question,
  QuestionBank,
  Selection,
  SyllabusRules,
} from './types.ts';

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, 'utf8')) as T;
}

/** Slugs of every package under contentDir (a directory with a manifest.json). */
export function listExams(contentDir: string): string[] {
  if (!existsSync(contentDir)) return [];
  return readdirSync(contentDir)
    .filter((name) => {
      const dir = join(contentDir, name);
      return statSync(dir).isDirectory() && existsSync(join(dir, 'manifest.json'));
    })
    .sort();
}

/** Load content/<slug>/ into memory. Throws on missing required files or bad JSON. */
export function loadExam(contentDir: string, slug: string): ExamPackage {
  const dir = join(contentDir, slug);
  if (!existsSync(join(dir, 'manifest.json'))) {
    throw new Error(`no content package at ${dir} (manifest.json missing)`);
  }
  const rulesPath = join(dir, 'syllabus-rules.json');
  const authoringPath = join(dir, 'authoring.json');
  return {
    dir,
    manifest: readJson<ExamManifest>(join(dir, 'manifest.json')),
    concepts: readJson<ConceptInventory>(join(dir, 'concepts.json')),
    bank: readJson<QuestionBank>(join(dir, 'questions.json')),
    selection: readJson<Selection>(join(dir, 'selection.json')),
    syllabusRules: existsSync(rulesPath) ? readJson<SyllabusRules>(rulesPath) : undefined,
    authoring: existsSync(authoringPath) ? readJson<AuthoringConfig>(authoringPath) : undefined,
  };
}

/** Resolve a selection form into its ordered exam paper. Defaults to the first form. */
export function buildPaper(bank: QuestionBank, selection: Selection, formId?: string): Question[] {
  const form = formId
    ? selection.forms.find((f) => f.id === formId)
    : selection.forms[0];
  if (!form) {
    throw new Error(formId ? `unknown form "${formId}"` : 'selection has no forms');
  }
  const byId = new Map(bank.questions.map((q) => [q.id, q]));
  return form.items.map((id) => {
    const q = byId.get(id);
    if (!q) throw new Error(`form "${form.id}" references unknown item "${id}"`);
    return q;
  });
}
