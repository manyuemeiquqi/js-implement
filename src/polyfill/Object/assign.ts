/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
type Obj = Record<PropertyKey, any>;
function myAssign(target: Obj, ...sources: Obj[]) {
  sources.forEach((source) => {
    const descriptors: Obj = Object.keys(source).reduce((props: Obj, key) => {
      props[key] = Object.getOwnPropertyDescriptor(source, key);
      return props;
    }, {});

    // 默认情况下，Object.assign 也会复制可枚举的 Symbol 属性
    // 过滤掉不可枚举的
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      const descriptor = Object.getOwnPropertyDescriptor(
        source,
        sym,
      ) as PropertyDescriptor;
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

const object: any = { a: "a" };
const c = Symbol("c");
const d = Symbol("d");
object[c] = "c";
Object.defineProperty(object, "b", { value: "b" });
Object.defineProperty(object, d, { value: "d" });
const object2 = myAssign({}, object);
console.log(object2.a, "a", "a");
console.log(object2.b, undefined, "b");
console.log(object2[c], "c", "c");
console.log(object2[d], undefined, "d");
export {};
