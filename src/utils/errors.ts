/**
 * Asserts the given value `val` is of type never. Throws otherwise.
 */
export function assertNever(val: never): never {
  void val;
  unreachable();
}

/**
 * Throws `Error('Unreachable.')` when called. A custom ending message may be
 * provided for additional context.
 */
export function unreachable(message?: string): never {
  throw new Error(!message ? 'Unreachable' : `Unreachable; ${message}`);
}
