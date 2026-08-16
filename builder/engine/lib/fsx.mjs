// Tiny fs helpers — dependency-free, shared by the engine scripts.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

export function readText(p) {
  return readFileSync(p, 'utf8');
}

export function readJSON(p) {
  return JSON.parse(readFileSync(p, 'utf8'));
}

export function exists(p) {
  return existsSync(p);
}

/** Recursively list files under `dir`, skipping node_modules/.git/out. */
export function walk(dir, { ext } = {}) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.git') || name === 'out') continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p, { ext }));
    else if (!ext || name.endsWith(ext)) out.push(p);
  }
  return out;
}

/** True when this module file is the process entrypoint (so a script's main() runs on
 *  `node x.mjs` but not when imported by a test). */
export function isMain(importMetaUrl) {
  return importMetaUrl === pathToFileURL(process.argv[1]).href;
}
