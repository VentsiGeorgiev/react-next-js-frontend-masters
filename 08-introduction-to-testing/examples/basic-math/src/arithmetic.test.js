import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic.js';

describe('add', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });
  it('should add negative numbers correctly', () => {
    expect(add(-2, -3)).toBe(-5);
  });
  it('should add a positive and a negative number correctly', () => {
    expect(add(2, -3)).toBe(-1);
  });
  it('should add zero correctly', () => {
    expect(add(2, 0)).toBe(2);
    expect(add(0, 3)).toBe(3);
  });
  it('should account for floating-point precision with decimal numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
  it('should add decimal numbers correctly', () => {
    expect(add(2.5, 3.1)).toBeCloseTo(5.6);
  });
  it('should add mixed numbers correctly', () => {
    expect(add(2, 3.5)).toBe(5.5);
  });
  it('should convert string numbers to numbers and add them correctly', () => {
    expect(add('2', '3')).toBe(5);
    expect(add('2.5', '3.1')).toBeCloseTo(5.6);
  });
  it('should trhow an error when adding non-numeric strings', () => {
    expect(() => add('apple', 1)).toThrow();
  });
  it('should throw an error when adding non-numeric strings', () => {
    expect(() => add(1, 'tomato')).toThrow();
  });
});
describe('subtract', () => {
  it('should subtract two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });
  it('should subtract negative numbers correctly', () => {
    expect(subtract(-2, -3)).toBe(1);
  });
  it('should subtract decimal numbers correctly', () => {
    expect(subtract(5.6, 3.1)).toBeCloseTo(2.5);
  });
  it('should subtract zero correctly', () => {
    expect(subtract(2, 0)).toBe(2);
    expect(subtract(0, 3)).toBe(-3);
  });
});

describe('multiply', () => {
  it('should multiply two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });
  it('should multiply negative numbers correctly', () => {
    expect(multiply(-2, -3)).toBe(6);
    expect(multiply(2, -3)).toBe(-6);
  });
  it('should multiply decimal numbers correctly', () => {
    expect(multiply(2.5, 3.1)).toBeCloseTo(7.75);
  });
  it('should multiply by zero correctly', () => {
    expect(multiply(2, 0)).toBe(0);
    expect(multiply(0, 3)).toBe(0);
  });
});

describe('divide', () => {
  it('should divide two numbers correctly', () => {
    expect(divide(6, 3)).toBe(2);
  });
  it('should divide negative numbers correctly', () => {
    expect(divide(-6, -3)).toBe(2);
    expect(divide(6, -3)).toBe(-2);
  });
  it('should divide decimal numbers correctly', () => {
    expect(divide(7.75, 2.5)).toBeCloseTo(3.1);
  });
  it('should divide zero correctly', () => {
    expect(divide(0, 3)).toBe(0);
  });
  it('should return Infinity when dividing by zero', () => {
    expect(divide(3, 0)).toBe(Infinity);
  });
});
