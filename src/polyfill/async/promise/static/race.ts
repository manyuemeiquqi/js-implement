// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../../../index.d.ts" />
// 一个空的可迭代对象会导致返回的 Promise 一直处于待定状态，因此不用传入空数组的情况

Promise.myRace = function <T>(values: T[]): Promise<Awaited<T>> {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < values.length; i++) {
      Promise.resolve(values[i]).then(resolve, reject);
    }
  });
};
