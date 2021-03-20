import { resultPrototypeImpl } from './internal/result';
import type { Result, ResultPrototype } from './internal/types';

export type { Result };

export function ok<T>(data: T): Result<T, never> {
  const base: ResultPrototype<T, never> = Object.create(resultPrototypeImpl);
  return Object.assign(base, { type: 'ok', data } as const);
}

export function err<E>(error: E): Result<never, E> {
  const base: ResultPrototype<never, E> = Object.create(resultPrototypeImpl);
  return Object.assign(base, { type: 'err', error } as const);
}
