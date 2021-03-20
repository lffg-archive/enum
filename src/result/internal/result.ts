import { ok, err } from '..';
import { assertNever } from '../../utils/errors';
import type { Result, ResultPrototype, MatchMap } from './types';

export const resultPrototypeImpl: ResultPrototype<unknown, unknown> = {
  isOk<T, E>(this: Result<T, E>): boolean {
    return this.type === 'ok';
  },

  isErr<T, E>(this: Result<T, E>): boolean {
    return this.type === 'err';
  },

  map<U, T, E>(this: Result<T, E>, fn: (data: T) => U): Result<U, E> {
    return this.match({
      ok: (data) => ok(fn(data)),
      err: (error) => err(error)
    });
  },

  expect<T, E>(this: Result<T, E>, message: string): T {
    return this.match({
      ok: (data) => data,
      err: () => {
        throw new Error(message);
      }
    });
  },

  unwrap<T, E>(this: Result<T, E>): T {
    return this.expect('Called `Result.prototype.unwrap()` on an `Err` value');
  },

  match<Tr, Er, T, E>(
    this: Result<T, E>,
    matchMap: MatchMap<T, Tr, E, Er>
  ): Tr | Er {
    switch (this.type) {
      case 'ok':
        return matchMap.ok(this.data);
      case 'err':
        return matchMap.err(this.error);
      default:
        assertNever(this);
    }
  }
};
