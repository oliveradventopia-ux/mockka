// Determinism contract for the seeded display shuffle (BD-1 render hardening):
// same seed -> same order (refresh-stable within an attempt), different seed ->
// different order (varies between attempts), null seed -> identity (server
// render / pre-hydration paint), and a shuffle is always a permutation.

import test from 'node:test';
import assert from 'node:assert/strict';
import { hashString, seededOrder } from '../lib/shuffle.ts';

const KEYS = ['A', 'B', 'C', 'D', 'E', 'F'];

test('same seed and salt produce the same order every time', () => {
  for (const seed of [0, 1, 42, 0xdeadbeef]) {
    const first = seededOrder(KEYS, seed, 'q1');
    for (let run = 0; run < 5; run++) {
      assert.deepEqual(seededOrder(KEYS, seed, 'q1'), first, `seed ${seed} drifted`);
    }
  }
});

test('different seeds produce different orders', () => {
  // Deterministic PRNG: this pair differs today and forever. The wider sweep
  // guards against a degenerate hash collapsing many seeds onto one order.
  assert.notDeepEqual(seededOrder(KEYS, 1, 'q1'), seededOrder(KEYS, 2, 'q1'));
  const distinct = new Set(
    Array.from({ length: 30 }, (_, seed) => seededOrder(KEYS, seed, 'q1').join('')),
  );
  assert.ok(distinct.size > 20, `only ${distinct.size} distinct orders from 30 seeds`);
});

test('different salts (question ids) shuffle independently under one seed', () => {
  const distinct = new Set(
    Array.from({ length: 30 }, (_, i) => seededOrder(KEYS, 7, `q${i}`).join('')),
  );
  assert.ok(distinct.size > 20, `only ${distinct.size} distinct orders from 30 salts`);
});

test('a null seed is the identity order — server render and pre-hydration paint', () => {
  assert.deepEqual(seededOrder(KEYS, null, 'q1'), KEYS);
});

test('a shuffle is a permutation and never mutates its input', () => {
  const input = [...KEYS];
  const out = seededOrder(input, 123, 'q1');
  assert.deepEqual(input, KEYS, 'input mutated');
  assert.deepEqual([...out].sort(), [...KEYS].sort(), 'not a permutation');
});

test('option entries keep their key–text pairing through the shuffle', () => {
  const entries = Object.entries({ A: 'alpha', B: 'bravo', C: 'charlie', D: 'delta' });
  const out = seededOrder(entries, 99, 'q1');
  for (const [key, text] of out) {
    assert.equal(text, Object.fromEntries(entries)[key], `${key} lost its text`);
  }
});

test('hashString is stable and 32-bit', () => {
  assert.equal(hashString('mockka'), hashString('mockka'));
  assert.notEqual(hashString('1:q1'), hashString('1:q2'));
  for (const s of ['', 'a', '1:q1']) {
    const h = hashString(s);
    assert.ok(Number.isInteger(h) && h >= 0 && h <= 0xffffffff);
  }
});
