/* eslint-disable @typescript-eslint/no-empty-function */
import Stack from './lib/stack';

export function getTop<T>(stack: Stack<T>): T | undefined {
  const top = stack.peek();
  return top;
}

export function addToTop<T>(stack: Stack<T>, value: T): void {
  stack.push(value);
}

export function takeTop<T>(stack: Stack<T>): T | undefined {
  return stack.pop();
}

export function isEmpty<T>(stack: Stack<T>): boolean {
  return stack.peek() !== undefined ? false : true;
}
