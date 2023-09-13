/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../index.d.ts" />

Array.prototype.myMap = function <T>(
  callbackFn: CallbackFn<T>,
  thisArg?: any,
): ReturnType<CallbackFn<T>>[] {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) res[i] = callbackFn.apply(thisArg, [this[i], i, this]);
  }
  return res;
};

export {};
