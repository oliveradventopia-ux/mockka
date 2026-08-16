#!/usr/bin/env node
/**
 * PostToolUse trace hook (ADR-0004): logs each tool event of a pipeline session
 * as JSONL under .claude/traces/ (gitignored) and forwards a span to local Opik
 * when it is reachable (project "mockka-pipeline", one trace per session).
 *
 * Fail-silent by contract: tracing must never break or slow a session. Any
 * error exits 0, and each Opik POST is capped at 800 ms.
 */

import { appendFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OPIK_URL = process.env.OPIK_URL ?? 'http://localhost:5173';
const OPIK_PROJECT = process.env.OPIK_PROJECT ?? 'mockka-pipeline';
const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TRACE_DIR = join(REPO_ROOT, '.claude', 'traces');

/** Opik requires time-ordered (v7) UUIDs. */
function uuidv7() {
  const ts = Date.now();
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[0] = (ts / 2 ** 40) & 0xff;
  bytes[1] = (ts / 2 ** 32) & 0xff;
  bytes[2] = (ts / 2 ** 24) & 0xff;
  bytes[3] = (ts / 2 ** 16) & 0xff;
  bytes[4] = (ts / 2 ** 8) & 0xff;
  bytes[5] = ts & 0xff;
  bytes[6] = (bytes[6] & 0x0f) | 0x70;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const h = [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('');
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

async function post(path, body, timeoutMs = 800) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(`${OPIK_URL}/api/v1/private/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify(body),
    });
  } finally {
    clearTimeout(timer);
  }
}

/** One Opik trace per session, persisted so every hook invocation reuses it. */
async function sessionTraceId(sessionId, startedAt) {
  const marker = join(TRACE_DIR, `${sessionId}.trace`);
  try {
    return readFileSync(marker, 'utf8').trim();
  } catch {
    /* first event of the session */
  }
  const traceId = uuidv7();
  await post('traces', {
    id: traceId,
    project_name: OPIK_PROJECT,
    name: `session ${sessionId.slice(0, 8)}`,
    start_time: startedAt,
  }).catch(() => {});
  try {
    writeFileSync(marker, traceId);
  } catch {
    /* fail-silent */
  }
  return traceId;
}

function summarize(input) {
  if (input == null) return null;
  const s = typeof input === 'string' ? input : JSON.stringify(input);
  return s.length > 400 ? s.slice(0, 400) + '…' : s;
}

async function main() {
  let raw = '';
  for await (const chunk of process.stdin) raw += chunk;
  if (!raw) return;

  let event;
  try {
    event = JSON.parse(raw);
  } catch {
    return;
  }

  const record = {
    ts: new Date().toISOString(),
    session_id: event.session_id ?? 'unknown',
    event: event.hook_event_name ?? 'PostToolUse',
    tool: event.tool_name ?? 'unknown',
    input_summary: summarize(event.tool_input),
    cwd: event.cwd,
  };

  try {
    mkdirSync(TRACE_DIR, { recursive: true });
    appendFileSync(join(TRACE_DIR, `${record.session_id}.jsonl`), JSON.stringify(record) + '\n');
  } catch {
    /* fail-silent */
  }

  try {
    const traceId = await sessionTraceId(record.session_id, record.ts);
    await post('spans', {
      id: uuidv7(),
      trace_id: traceId,
      project_name: OPIK_PROJECT,
      name: record.tool,
      type: 'tool',
      start_time: record.ts,
      end_time: record.ts,
      input: { summary: record.input_summary },
      metadata: { session_id: record.session_id, cwd: record.cwd, source: 'mockka-trace-hook' },
    }).catch(() => {});
  } catch {
    /* fail-silent */
  }
}

main().then(
  () => process.exit(0),
  () => process.exit(0),
);
