//
// MAIN TYPES
// ==========
//

/**
 * # `Result<T, E>`
 *
 * `Result` is a type that represents either success (`Ok`) or failure (`Err`).
 *
 * For more details, refer to:
 * https://doc.rust-lang.org/std/result/index.html
 */
export type Result<T, E> = (Ok<T> | Err<E>) & ResultPrototype<T, E>;

/**
 * Union type with the two possible `Result` states.
 */
export type ResultType = 'ok' | 'err';

/**
 * Result variation that contains the success value (`Ok`).
 */
interface Ok<T> {
  readonly type: 'ok';
  readonly data: T;
}

/**
 * Result variation that contains the error value (`Err`).
 */
interface Err<E> {
  readonly type: 'err';
  readonly error: E;
}

/**
 * `Result` prototype methods.
 */
export interface ResultPrototype<T, E> {
  isOk(): this is Ok<T>;
  isErr(): this is Err<E>;

  map<U>(fn: (data: T) => U): Result<U, E>;

  expect(message?: string): T;
  unwrap(): T;

  match<Tr, Er>(matchMap: MatchMap<T, Tr, E, Er>): Tr | Er;
}

//
// EXTRA TYPES
// ===========
//

export type MatchMap<T, Tr, E, Er> = {
  ok: (data: T) => Tr;
  err: (error: E) => Er;
};
