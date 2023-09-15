/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../index.d.ts" />

// 函数内部的 this 是何值取决于函数式如何调用的
Array.prototype.myForEach = function <T>(
  callbackFn: CallbackFn<T, void>,
  thisArg?: any,
): void {
  // 用变量保存下来，因为 callback 可能会改变数组
  const length = this.length;
  for (let i = 0; i < length; i++) {
    // 判断 empty slots
    // https://stackoverflow.com/questions/40752434/how-to-tell-between-undefined-array-elements-and-empty-slots
    if (i in this) callbackFn.apply(thisArg, [this[i], i, this]);
  }
};
Array.prototype.myMap = function <T>(
  callbackFn: CallbackFn<T, any>,
  thisArg?: any,
): ReturnType<CallbackFn<T, any>>[] {
  const res = [];
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) res[i] = callbackFn.apply(thisArg, [this[i], i, this]);
  }
  return res;
};
Array.prototype.myFilter = function <T>(
  predicate: CallbackFn<T, any>,
  thisArg?: any,
): any[] {
  const res = [];
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (predicate.apply(thisArg, [this[i], i, this])) res.push(this[i]);
    }
  }
  return res;
};
// some every find findIndex 同理
