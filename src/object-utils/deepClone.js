// JSON.parse(JSON.stringify());
// structuredClone();
let a = [1, 2, 34];
// 浏览器端
// console.log(structuredClone(a));

// https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L11087
function isObject(a) {
  return typeof a === "object" && a !== null;
}
// 还需要深入
function deepClone(a, map = new Map()) {
  if (isObject(a) === false) {
    return a;
  } else {
    const constructor = a.constructor;
    if (/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name))
      return new constructor(a);

    const ret = Array.isArray(a) ? [] : Object.create(null);
    const keys = Reflect.ownKeys(a);
    if (map.has(a)) {
      throw new Error("has cycle reference");
    }
    map.set(a, true);
    for (const key of keys) {
      ret[key] = deepClone(a[key], map);
    }
    return ret;
  }
}
const obj1 = {
  foo: new Date(),
};

const b = deepClone(obj1);
console.log("b: ", b);
console.log("b: ", JSON.stringify(b));
console.log(b === obj1);
