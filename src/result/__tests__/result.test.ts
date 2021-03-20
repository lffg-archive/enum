import { ok, err } from '..';

describe('Ok', () => {
  test('Ok', () => {
    const okR = ok(123);
    expect(okR.type).toBe('ok');
  });

  test('Ok.prototype.data', () => {
    expect.assertions(3);
    const okR = ok(123);

    expect(okR.isOk()).toBeTruthy();
    expect(okR.isErr()).toBeFalsy();
    if (okR.isOk()) {
      expect(okR.data).toBe(123);
    }
  });
});

describe('Err', () => {
  test('Err', () => {
    const errR = err('error');
    expect(errR.type).toBe('err');
  });

  test('Err.prototype.error', () => {
    expect.assertions(3);
    const errR = err('error');

    expect(errR.isOk()).toBeFalsy();
    expect(errR.isErr()).toBeTruthy();
    if (errR.isErr()) {
      expect(errR.error).toBe('error');
    }
  });
});

describe('Result.prototype', () => {
  test('Result.prototype.map', () => {
    expect.assertions(1);
    const r1 = ok(1);
    const r2 = r1.map((n) => n + 1);
    if (r2.isOk()) {
      expect(r2.data).toBe(2);
    }
  });
});
