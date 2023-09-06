// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../../../index.d.ts" />
Promise.myAll = function <T>(values: T[]): Promise<Awaited<T>[]> {
  return new Promise((resolve, reject) => {
    const result: Awaited<T>[] = [];
    let count = 0;
    if (values.length === 0) resolve(result);
    for (let i = 0; i < values.length; i++) {
      Promise.resolve(values[i]).then((res) => {
        result[i] = res;
        count++;
        if (count === values.length) resolve(result);
      }, reject);
    }
  });
};

// 使用 .catch:
const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const p = Promise.myAll(mixedPromisesArray).catch((e) => {
  console.log("e: ", p);
  console.log("e: ", e);
});
console.log(p);
setTimeout(() => {
  console.log("队列现在为空");
  console.log(p);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// 队列现在为空
// Promise { <state>: "fulfilled", <value>: Array[2] }
