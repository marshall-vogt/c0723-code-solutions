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
});

test('evenNumbers', () => {
  const data: any[] = [];
  const result = evenNumbers(data);
  expect(result).toEqual([]);
});

describe('toDollars', () => {
  it('returns a formatted dollar amount', () => {
    const result = toDollars(3);
    expect(result).toEqual('$3.00');
  });
});

describe('divideBy', () => {
  it('returns a new array where each elemet is divided by divisor', () => {
    const numbers = [2, 4, 6, 8, 10];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('multiplyBy', () => {
  it('modifies object by multiplying values of each key if key value is a number', () => {
    const object = { one: 2, three: 4, five: 6, seven: 8, nine: 10 };
    const result = multiplyBy(object, 2);
    expect(result).toEqual({ one: 4, three: 8, five: 12, seven: 16, nine: 20 });
  });
});

test('multiplyBy', () => {
  const data = { one: 1, two: 2, three: 'three' };
  const result = multiplyBy(data, 3);
  expect(result).toEqual({ one: 1, two: 2, three: 'three' });
});
