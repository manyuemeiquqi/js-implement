/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
type F = (...args: unknown[]) => unknown;

const _ = "_";
function curry<T extends F>(fn: T) {
  const len = fn.length;
  return function collectParam(this: unknown, ...args: unknown[]): any {
    const hasPlaceHolder = (arr: unknown[]) => {
      return arr.find((item) => item === _);
    };
    if (args.length >= len && !hasPlaceHolder(Array.from(args).slice(0, len))) {
      return fn.apply(this, args) as ReturnType<T>;
    } else
      return function (this: unknown, ...args1: unknown[]) {
        let combined = [];
        let j = 0;
        for (let i = 0; i < Math.min(args.length, len); i++) {
          if (args[i] === _) {
            if (j < args1.length) combined.push(args1[j++]);
          } else {
            combined.push(args[i]);
          }
        }
        if (j < args1.length) combined = combined.concat(args1.slice(j));

        return collectParam.apply(this, combined);
      };
  };
}

const f = function (a: any, b: any, c: any) {
  return [a, b, c];
};
const g = curry(f);

console.log(g(1)(2)(3), [1, 2, 3]);
console.log(g(1)(2, 3), [1, 2, 3]);
console.log(g(1, 2)(3), [1, 2, 3]);
console.log(g(1, 2, 3), [1, 2, 3]);

console.log(g(_, 2, 3)(1), [1, 2, 3]);
console.log(g(1, _, 3)(2), [1, 2, 3]);
console.log(g(1, 2, _)(3), [1, 2, 3]);

console.log(g(1, _, _)(2)(3), [1, 2, 3]);
console.log(g(_, 2, _)(1)(3), [1, 2, 3]);
console.log(g(_, _, 3)(1)(2), [1, 2, 3]);

console.log(g(1, _, _)(2, 3), [1, 2, 3]);
console.log(g(_, 2, _)(1, 3), [1, 2, 3]);
console.log(g(_, _, 3)(1, 2), [1, 2, 3]);

console.log(g(1, _, _)(_, 3)(2), [1, 2, 3]);
console.log(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
console.log(g(_, _, 3)(_, 2)(1), [1, 2, 3]);

console.log(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
console.log(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);

export {};
