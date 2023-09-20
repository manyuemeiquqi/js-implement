/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
type F = (...args: any[]) => any;
type F1 = (args: any) => any;
type FunArr = [...F1[], F];
type GetLast<T extends FunArr> = T extends [...any[], infer B extends F1]
  ? Parameters<B>
  : never;

  
function compose<T extends FunArr>(
  ...fnList: T
): (...args: GetLast<T>) => ReturnType<T[0]> {
  return function (this: unknown, ...args: GetLast<T>) {
    let tmp;
    const last = fnList.length - 1;
    for (let i = last; i >= 0; i--) {
      if (i === last) tmp = fnList[last].apply(this, args);
      else tmp = fnList[i].apply(this, [tmp]);
    }
    return tmp as ReturnType<T[0]>;
  };
}
function x(this: any, val: number) {
  return this.x * val;
}
function y(this: any, val: number) {
  return this.y - val;
}
function z(this: any, val: number) {
  return this.z + val;
}
const context = {
  a: compose(x, y, z),
  x: 4,
  y: 2,
  z: 1,
};
context.a(5);
console.log("context.a(5): ", context.a(5));

export {};
