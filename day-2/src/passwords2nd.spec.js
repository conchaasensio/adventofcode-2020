const { test, expect } = require('@jest/globals');

import { countValidPasswords } from './passwords2nd';

describe('password is valid when', () => {
  test('has the letter in the first position and not the second one', () => {
    expect(countValidPasswords('1-2 m: mamm')).toBe(1);
    expect(countValidPasswords('10-12 m: mmmmmmmmmmasmmm')).toBe(1);
  });

  test('has the letter in the second position and not the first one', () => {
    expect(countValidPasswords('1-2 m: amm')).toBe(1);
    expect(countValidPasswords('1-3 m: ammmm')).toBe(1);
  });

  test('contains extra letters and the required letters', () => {
    expect(countValidPasswords('1-2 m: mamam')).toBe(1);
    expect(countValidPasswords('1-3 m: mmamam')).toBe(1);
  });
});

describe('password is not valid when', () => {
  test('does not contain the letter in any of the two positions', () => {
    expect(countValidPasswords('1-2 m: abmm')).toBe(0);
  });

  test('contains the letter in both positions', () => {
    expect(countValidPasswords('2-3 m: amm')).toBe(0);
  });
});

describe('multiples passwords', () => {
  test('sum more than one password valid', () => {
    expect(countValidPasswords('1-2 m: ma\n1-2 m: ma')).toBe(2);
  });
});

test('with provided input', () => {
  const fs = require('fs');
  const file = fs.readFileSync('input.txt', 'utf8');

  console.log(countValidPasswords(file));
});
