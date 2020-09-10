import { test, expect } from '@jest/globals';
import { Calculator } from '../src';

const calculator = new Calculator();

test('Sum function', () => {
  expect(calculator.add(2, 2)).toBe(4);
});
