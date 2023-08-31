/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
type F = (...args: any[]) => any;
type F1 = (args: any) => any;
type FunArr = [F, ...F1[]];
type GetLast<T extends FunArr> = T extends [...any[], infer B extends F1]
  ? ReturnType<B>
  : never;

function pipe<T extends FunArr>(
  ...fnList: T
): (...args: Parameters<T[0]>) => GetLast<T> {
  return function (this: unknown, ...args: Parameters<T[0]>) {
    let tmp;
    for (let i = 0; i < fnList.length; i++) {
      if (i === 0) tmp = fnList[0].apply(this, args);
      else tmp = fnList[i].apply(this, [tmp]);
    }
    return tmp as GetLast<T>;
  };
}

function x(this: any, val: number) {
  return this.x * val;
}
function y(this: any, val: number) {
  return this.y * val;
}
function z(this: any, val: number) {
  return this.z * val;
}
const context = {
  a: pipe(x, y, z),
  x: 4,
  y: 2,
  z: 1,
};
context.a(5);
console.log("context.a(5): ", context.a(5));
