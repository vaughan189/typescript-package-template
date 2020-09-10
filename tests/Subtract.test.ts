import { test, expect } from '@jest/globals';
import { Calculator } from '../src';

const calculator = new Calculator();

test('Subtraction function', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});
