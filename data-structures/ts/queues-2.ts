/* eslint-disable @typescript-eslint/no-empty-function */
import Queue from './lib/queue';

export function postpone<T>(queue: Queue<T>): void {
  const frontValue = queue.dequeue();
  frontValue === undefined || queue.enqueue(frontValue);
}

export function takeValueAtIndex<T>(
  queue: Queue<T>,
  index: number
): T | undefined {
  if (queue.peek() === undefined) return undefined;
  while (index > 0) {
    const frontValue = queue.dequeue();
    queue.enqueue(frontValue as T);
    index--;
  }
  return queue.dequeue();
}
