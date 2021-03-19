/**
 * @see `Result.prototype.match`
 */
export type ResultMatchMap<T, Tr, E, Er> = {
  ok: (data: T) => Tr;
  err: (error: E) => Er;
};
