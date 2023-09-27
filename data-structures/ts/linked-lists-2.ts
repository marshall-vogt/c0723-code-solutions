/* eslint-disable @typescript-eslint/no-empty-function */
import LinkedList from './lib/linked-list';

export function getLength<T>(list: LinkedList<T>): number {
  return list.next === null ? 1 : 1 + getLength(list.next);
}

export function append<T>(list: LinkedList<T>, value: T): void {
  const newNode = new LinkedList(value);
  list.next === null ? (list.next = newNode) : append(list.next, value);
}

export function getTail<T>(list: LinkedList<T>): T | null {
  return list.next === null ? list.data : getTail(list.next);
}

export function includes<T>(list: LinkedList<T>, value: T): boolean {
  if (list.data === value) return true;
  if (list.next === null) return false;
  return includes(list.next, value);
}
