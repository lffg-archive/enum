import { Ok, Err } from './result';
import type { Result } from './result';

export { Result };

/**
 * Creates a new `Ok` result, with type `Result<T, E = never>`.
 */
export function ok<T, E = never>(data: T): Result<T, E> {
  return new Ok<T>(data);
}

/**
 * Creates a new `Err` result, with type `Result<T = never, E>`.
 */
export function err<E, T = never>(error: E): Result<T, E> {
  return new Err<E>(error);
}
