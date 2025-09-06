import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './sum.js';

test('suma 2 + 3 debe ser 5', () => {
  assert.strictEqual(sum(2, 3), 5);
});
