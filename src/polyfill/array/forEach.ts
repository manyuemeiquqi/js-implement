/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../index.d.ts" />

type CallbackFn<T> = (val: T, index: number, arr: T[]) => void;

// 函数内部的 this 是何值取决于函数式如何调用的
Array.prototype.myForEach = function <T>(
  callbackFn: CallbackFn<T>,
  thisArg?: any,
): void {
  for (let i = 0; i < this.length; i++) {
    // 判断 empty slots
    // https://stackoverflow.com/questions/40752434/how-to-tell-between-undefined-array-elements-and-empty-slots
    if (i in this) callbackFn.apply(thisArg, [this[i], i, this]);
  }
};
// [12, 3, 4].myForEach(,thisArg?:any);
const arraySparse = [1, 3 /* empty */, , 7];
let numCallbackRuns = 0;

arraySparse.myForEach((element: any) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

export {};
