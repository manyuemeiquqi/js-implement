/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../index.d.ts" />

// https://medium.com/@ankur_anand/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b
Function.prototype.myBind = function (that: unknown, ...args: unknown[]) {
  const boundTargetFunction = this;
  return function (...args1: unknown[]) {
    return boundTargetFunction.apply(that, [...args, ...args1]) as unknown;
  };
};

const module1 = {
  x: 42,
  getX: function () {
    return this?.x;
  },
};

const unboundGetX = module1.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX: any = unboundGetX.myBind(module1);
console.log(boundGetX());
// Expected output: 42

export {};
