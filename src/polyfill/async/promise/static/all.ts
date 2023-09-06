// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../../../index.d.ts" />
Promise.myAll = function <T>(values: T[]): Promise<Awaited<T>[]> {
  return new Promise((resolve, reject) => {
    const result: Awaited<T>[] = [];
    let count = 0;
    for (let i = 0; i < values.length; i++) {
      Promise.resolve(values[i])
        .then((res) => {
          result[i] = res;
          count++;
          if (count === values.length) resolve(result);
        })
        .catch(reject);
    }
  });
};
const p = Promise.myAll([1, 2, 3]);
const p2 = Promise.myAll([1, 2, 3, Promise.reject(444)]).catch((e) => {
  console.log("e: ", e);
});
// 一个（也是唯一的一个）输入 Promise 被拒绝，因此返回的 Promise 将被拒绝
// const p3 = Promise.myAll([1, 2, 3, Promise.reject(555)]);

// 使用 setTimeout，我们可以在队列为空后执行代码
setTimeout(() => {
  console.log(p);
  console.log(p2);
});
