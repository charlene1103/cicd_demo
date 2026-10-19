const test = require('node:test');
const assert = require('node:assert/strict');
const { add } = require('../src/calculator');

test('adds two positive numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('adds negative numbers', () => {
  assert.equal(add(-2, -3), -5);
});

test('adds zero', () => {
  assert.equal(add(0, 5), 5);
});
