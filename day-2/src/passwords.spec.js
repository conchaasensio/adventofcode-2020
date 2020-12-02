const { test, expect } = require('@jest/globals');

import { countValidPasswords } from './passwords';

test('blabla', () => {
  countValidPasswords('13-15 c: cqbhncccjsncqcc');
  expect(countValidPasswords('13-15 c: cqbhncccjsncqcc')).toBe(0);
});
