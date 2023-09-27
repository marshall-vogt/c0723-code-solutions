import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

// test('removes odd numbers from an array', () => {
//   expect(evenNumbers([2, 5, 7])).toBe([2]);
// });

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('works with empty array', () => {
    const data: any[] = [];
    const result = evenNumbers(data);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('formats integers as dollars and cents', () => {
    const result = toDollars(3);
    expect(result).toEqual('$3.00');
  });
  it('rounds up decimal numbers and formats to two decimals', () => {
    const result = toDollars(3.6567);
    expect(result).toEqual('$3.66');
  });
});

describe('divideBy', () => {
  it('each element is divided by divisor', () => {
    const numbers = [2, 4, 6, 8, 10];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it('does not modify original array', () => {
    const numbers = [2, 4, 6, 8, 10];
    const result = divideBy(numbers, 2);
    expect(numbers).not.toBe(result);
  });
});

describe('multiplyBy', () => {
  it('modifies object by multiplying values of each key if key value is a number', () => {
    const object = { one: 2, three: 4, five: 6, seven: 8, nine: 10 };
    const result = multiplyBy(object, 2);
    expect(result).toEqual({ one: 4, three: 8, five: 12, seven: 16, nine: 20 });
  });
  it('does not multiply string values', () => {
    const data = { one: 1, two: 2, three: 'three' };
    const result = multiplyBy(data, 3);
    expect(result).toEqual({ one: 3, two: 6, three: 'three' });
  });
  it('modifies the original object', () => {
    const data = { one: 1, two: 2, three: 'three' };
    const result = multiplyBy(data, 3);
    expect(data).toBe(result);
  });
});
