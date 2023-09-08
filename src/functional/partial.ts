/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
type F = (...args: unknown[]) => unknown;
function partial<T extends F>(fn: T, args: unknown[]) {
  return function (this: unknown, ...args1: unknown[]): ReturnType<T> {
    return fn.apply(this, [...args, ...args1]) as ReturnType<T>;
  };
}
const addOne = partial(add, [1]);
function add(this: any, a: any, b: any) {
  return a + b + this.value;
}
const value = 1;
const obj = {
  value: 2,
  addOne: addOne,
};
console.log("obj.addOne(2): ", obj.addOne(2));

export {};
