// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../../../index.d.ts" />

Promise.myAny = function <T>(values: T[]): Promise<Awaited<T>> {
  return new Promise((resolve, reject) => {
    let count = 0;
    if (values.length === 0)
      reject("AggregateError: All promises were rejected");
    for (let i = 0; i < values.length; i++) {
      Promise.resolve(values[i]).then(
        (res) => {
          resolve(res);
        },
        () => {
          count++;
          if (count === values.length)
            reject("AggregateError: All promises were rejected");
        },
      );
    }
  });
};

// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 100, "quick"),
// );
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(reject, 500, "slow"),
// );

// const promises = [promise1, promise2, promise3];
const promises: unknown[] = [];

Promise.any(promises)
  .then((value) => console.log(value))
  .catch((res) => {
    console.log(res);
  });

// Expected output: "quick"
