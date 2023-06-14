import { add } from '../src/addMethod';

describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(add('')).toBe(0);
  });
});

describe('testing index file2', () => {
  test('1,2,3,4 string should result in 10', () => {
    expect(add('1,2,3,4')).toBe(10);
  });
});