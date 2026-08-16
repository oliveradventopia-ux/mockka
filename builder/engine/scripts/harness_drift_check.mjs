#!/usr/bin/env node
// Decoupling drift-check: markdown link + anchor integrity across the harness docs.
//   R1  anchors are unique within a file
//   R2  every local link resolves (file or dir exists)
//   R5  every `path#anchor` link points at a declared anchor in the target file
// Cite-don't-inline stays honest because a stale citation fails CI.
import { walk, readText, exists, isMain } from '../lib/fsx.mjs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
export const ROOT = resolve(HERE, '../../');
const ROOTS = ['templates/harness', 'docs', 'index', 'orchestrator', 'scaffold'];
const TOP_FILES = ['README.md', 'CLAUDE.md'];

const stripFences = (text) => text.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');

/** Declared `{#anchor}` ids in a doc, plus any duplicates. */
export function anchorsOf(text) {
  const body = stripFences(text);
  const set = new Set();
  const dups = [];
  for (const m of body.matchAll(/\{#([a-z0-9-]+)\}/g)) {
    if (set.has(m[1])) dups.push(m[1]);
    else set.add(m[1]);
  }
  return { set, dups };
}

/** Local (non-URL) markdown link targets in a doc. */
export function localLinks(text) {
  const body = stripFences(text);
  const out = [];
  for (const m of body.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const raw = m[1].trim();
    if (/^(https?:|mailto:|#)/.test(raw)) continue;
    out.push(raw);
  }
  return out;
}

function collectMarkdown() {
  const files = [];
  for (const r of ROOTS) files.push(...walk(join(ROOT, r), { ext: '.md' }));
  for (const f of TOP_FILES) if (exists(join(ROOT, f))) files.push(join(ROOT, f));
  return files;
}

const rel = (p) => p.replace(`${ROOT}/`, '');

/** Returns a list of human-readable problems (empty === clean). */
export function checkDrift() {
  const files = collectMarkdown();
  const anchorCache = new Map();
  const getAnchors = (p) => {
    if (!anchorCache.has(p)) anchorCache.set(p, anchorsOf(exists(p) ? readText(p) : ''));
    return anchorCache.get(p);
  };
  const problems = [];
  for (const file of files) {
    for (const d of getAnchors(file).dups) problems.push(`${rel(file)}: duplicate anchor {#${d}}`);
    for (const link of localLinks(readText(file))) {
      const [pathPart, anchor] = link.split('#');
      const target = resolve(dirname(file), pathPart);
      if (!exists(target)) {
        problems.push(`${rel(file)}: broken link → ${link}`);
        continue;
      }
      if (anchor && !pathPart.endsWith('/') && !getAnchors(target).set.has(anchor)) {
        problems.push(`${rel(file)}: missing anchor '#${anchor}' in ${rel(target)}`);
      }
    }
  }
  return { files: files.length, problems };
}

function main() {
  const { files, problems } = checkDrift();
  if (problems.length) {
    console.error(`harness drift-check FAIL (${problems.length}):\n - ${problems.join('\n - ')}`);
    process.exit(1);
  }
  console.log(`harness drift-check: OK (${files} docs — links + anchors resolve)`);
  process.exit(0);
}

if (isMain(import.meta.url)) main();
