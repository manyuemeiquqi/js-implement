function deepEqual(a: unknown, b: unknown) {
  if (isObj(a) && isObj(b)) {
    const arr1 = Object.keys(a);
    const arr2 = Object.keys(b);
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      const key = arr1[i];
      if (!Object.hasOwn(b, key)) {
        return false;
      }
      if (!deepEqual(a[key], b[key])) return false;
    }
  } else {
    return a === b;
  }
}
function isObj(a: unknown): a is Record<string, unknown> {
  return a !== null && typeof a === "object";
}
