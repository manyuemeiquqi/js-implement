// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../index.d.ts" />
const a = [12, 2, 1];
console.log("a: ", a.unshift(1, 2));
console.log("a: ", a);
Array.prototype.myUnshift = function (...val: unknown[]): number {
  const startLen = this.length;
  for (let i = startLen - 1; i >= 0; i--) {
    this[i + val.length] = this[i] as unknown;
  }
  for (let i = 0; i < val.length; i++) {
    this[i] = val[i];
  }
  return this.length;
};
console.log("a: ", a.myUnshift(1, 2));
console.log("a: ", a);
export {};
