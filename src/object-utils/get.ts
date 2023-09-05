function get(
  data: unknown,
  path: string | unknown[],
  defaultValue: unknown = void 0,
): unknown {
  if (typeof path === "string") {
    path = path.split(".");
  }
  if ((typeof data !== "object" || data === null) && path.length) {
    return defaultValue;
  }

  const curKey = path.shift();
  console.log("curKey: ", curKey);

  const curData = (data as Record<PropertyKey, unknown>)[curKey as PropertyKey];
  if (curData !== undefined) {
    if (path.length) return get(curData, path, defaultValue);
    else return curData as unknown;
  } else {
    return defaultValue;
  }
}

const stooge = { name: "moe" };

console.log(
  get(stooge, "size", 10),
  10,
  "allows a fallback value for undefined properties",
);
console.log(
  get(stooge, "name", 10),
  "moe",
  "ignores the fallback value if the property is defined",
);

// Deep property access
console.log(get({ a: 1 }, "a"), 1, "can get a direct property");
console.log(get({ a: { b: 2 } }, ["a", "b"]), 2, "can get a nested property");
console.log(
  get({ a: { b: 2 } }, ["a", "c"], 10),
  10,
  "allows a fallback value for undefined properties",
);
console.log(
  get({ a: { b: 2 } }, ["a", "b"], 10),
  2,
  "ignores the fallback value if the property is defined",
);
console.log(get({ a: false }, ["a"]), false, "can fetch falsy values");
console.log(
  get({ x: { y: null } }, ["x", "y"]),
  null,
  "can fetch null values deeply",
);
console.log(
  get({ x: null }, ["x", "y"]),
  void 0,
  "does not crash on property access of nested non-objects",
);
console.log(
  get({ x: "y" }, []),
  void 0,
  "returns `undefined` for a path that is an empty array",
);
