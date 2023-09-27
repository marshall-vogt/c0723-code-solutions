/* eslint-disable @typescript-eslint/no-empty-function */
import Stack from './lib/stack';

export function get2ndFromTop<T>(stack: Stack<T>): T | undefined {
  if (stack.peek() === undefined) return undefined;
  const firstValue = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(firstValue as T);
    return undefined;
  }
  const secondValue = stack.peek();
  stack.push(firstValue as T);
  return secondValue;
}

export function insertUnderTop<T>(stack: Stack<T>, value: T): void {}
