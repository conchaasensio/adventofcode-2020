const { test, expect } = require('@jest/globals');

import { countValidPasswords } from './passwords';

describe('password is valid when', () => {
  test('contains the minimum number of times the required letter', () => {
    expect(countValidPasswords('1-2 m: m')).toBe(1);
    expect(countValidPasswords('10-12 m: mmmmmmmmmm')).toBe(1);
  });

  test('contains the maximum number of times the required letter', () => {
    expect(countValidPasswords('1-2 m: mm')).toBe(1);
    expect(countValidPasswords('1-3 m: mmm')).toBe(1);
  });

  test('contains extra letters and the required letters', () => {
    expect(countValidPasswords('1-2 m: mam')).toBe(1);
    expect(countValidPasswords('1-3 m: mmam')).toBe(1);
  });
});

describe('password is not valid when', () => {
  test('does not contain the required letter', () => {
    expect(countValidPasswords('1-2 m: a')).toBe(0);
  });

  test('has the letter less than the required number of times', () => {
    expect(countValidPasswords('2-3 m: m')).toBe(0);
  });

  test('excedes the maximum number of times the required letter', () => {
    expect(countValidPasswords('1-2 m: mmm')).toBe(0);
  });
});

describe('multiples passwords', () => {
  test('sum more than one password valid', () => {
    expect(countValidPasswords('1-2 m: m\n1-2 m: m')).toBe(2);
  });
});

test('with provided input', () => {
  const fs = require('fs');
  const file = fs.readFileSync('input.txt', 'utf8');

  console.log(countValidPasswords(file));
});
