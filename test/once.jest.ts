import { describe, expect, it } from "@jest/globals";
import { once } from "../src/higher-order-function/once";
import assert from "assert";
describe("once", function () {
  it("should invoke `func` once", function () {
    let count = 0;
    const f1 = once(function () {
      return ++count;
    });

    f1();
    expect(f1()).toBe(1);
    expect(count).toBe(1);
  });

  it("should ignore recursive calls", function () {
    let count = 0;

    const f2 = once(function () {
      f2();
      return ++count;
    });

    expect(f2()).toBe(1);
    expect(count).toBe(1);
  });

  it("should not throw more than once", function () {
    const f3 = once(function () {
      throw new Error();
    });

    assert.throws(f3);

    f3();
    assert.ok(true);
  });
});
