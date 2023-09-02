function memoize(
  fn: (...args: unknown[]) => unknown,
  keyGen: (...args: unknown[]) => unknown,
) {
  const map: Record<PropertyKey, unknown> = {};
  return function (this: unknown, ...args: unknown[]): unknown {
    const key = keyGen.apply(this, args);
    if (Object.hasOwn(map, key as PropertyKey)) {
      console.log("hash");

      return map[key as PropertyKey];
    } else {
      const val = fn.apply(this, args);
      map[key as PropertyKey] = val;
      return val;
    }
  };
}

const f = (a: unknown) => {
  return (a as number) + 1;
};

const f1 = memoize(f, f);
console.log("f1: ", f1(1));
console.log("f1: ", f1(1));
console.log("f1: ", f1({ name: "jinp" }));
console.log("f1: ", f1({ name: "jinp" }));
