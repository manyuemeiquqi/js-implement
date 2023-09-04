/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
function myNew<T extends unknown[]>(fn: (...args: T) => unknown, ...args: T) {
  const res: Record<PropertyKey, unknown> = {
    __proto__: fn.prototype,
  };
  const fnRes = fn.apply(res, args);
  //   Object.setPrototypeOf(res, fn.prototype as object);
  return fnRes !== null && typeof ["function", "object"].includes(typeof fnRes)
    ? fnRes
    : res;
}
const Person = function (
  this: {
    name: string;
    sex: string;
  },
  name: string,
  sex: string,
) {
  this.name = name;
  this.sex = sex;
};

const a = myNew(Person, "aa", "1");
console.log("a: ", Object.getPrototypeOf(a) === Person.prototype);
export {};
