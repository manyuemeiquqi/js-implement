/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../../index.d.ts" />

// fill 不包括end

Array.prototype.myFill = function (
  this: unknown[],
  val: unknown,
  start: number = 0,
  end: number = this.length,
): unknown[] {
  for (let i = start; i < end; i++) {
    this[i] = val;
  }
  return this;
};

const arr = [3, 3, 21, 3, 14, 12, 4, 1, 2];
console.log(arr.myFill(1, 3, 5));
console.log("arr: ", arr);
export {};
