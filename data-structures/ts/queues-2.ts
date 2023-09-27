/* eslint-disable @typescript-eslint/no-empty-function */
import Queue from './lib/queue';

export function postpone<T>(queue: Queue<T>): void {}

export function takeValueAtIndex<T>(
  queue: Queue<T>,
  index: number
): T | undefined {
  return undefined;
}
