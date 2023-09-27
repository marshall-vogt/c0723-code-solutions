import Stack from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  let count = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    count++;
  }
  return count;
}

export function maxValue(stack: Stack<number>): number {
  if (stack.peek() === undefined) return -Infinity;
  let largestNumber = stack.pop();
  while (stack.peek() !== undefined && largestNumber !== undefined) {
    largestNumber =
      (stack.peek() as number) > largestNumber ? stack.peek() : largestNumber;
    stack.pop();
  }
  return largestNumber as number;
}
