// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../index.d.ts" />
Array.prototype.myPush = function (...val: unknown[]): number {
  for (let i = 0; i < val.length; i++) {
    this[this.length] = val[i];
  }
  return this.length;
};

const a = [1, 2, 3];
console.log("a.myPush(4, 5, 6): ", a.myPush(4, 5, 6));
console.log("a: ", a);

export {};
