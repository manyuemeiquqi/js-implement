//  hof版本
function delay(fn: (...args: unknown[]) => unknown, timeout: number) {
  return function (this: unknown, ...args: unknown[]) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let res;
        try {
          res = fn.apply(this, args);
        } catch (e) {
          reject(e);
        }
        resolve(res);
      }, timeout);
    });
  };
}
// lodash delay的 promise 版本

const log = function (this: unknown) {
  console.log((this as { name: "string" }).name);
  return "done";
};

const obj = {
  log: delay(log, 2000),
  name: "jinp",
};
obj
  .log()
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err: ", err);
  });

function delay1(
  fn: (...args: unknown[]) => unknown,
  timeout = 0,
  ...args: unknown[]
) {
  return setTimeout(fn, timeout, ...args);
}
delay1((text) => console.log(text), 1000, "later");
function delay2(
  fn: (...args: unknown[]) => unknown,
  timeout = 0,
  ...args: unknown[]
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(fn(...args));
      } catch (e) {
        reject(e);
      }
    }, timeout);
  });
}

function returnError(name: string) {
  throw Error("it error");
  return name;
}
delay2(returnError as (...args: unknown[]) => unknown, 1000, "jinp")
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((e) => {
    console.log("e: ", e);
  });
export {};
