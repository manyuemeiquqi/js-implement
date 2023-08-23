/**
 *
 * @desc n 次执行以前运行 fn，之后 返回undefined
 */
// function before(n, func) {
//   let result;
//   if (typeof func != "function") {
//     throw new TypeError(FUNC_ERROR_TEXT);
//   }
//   n = toInteger(n);
//   return function () {
//     if (--n > 0) {
//       result = func.apply(this, arguments);
//     }
//     if (n <= 1) {
//       func = undefined;
//     }
//     return result;
//   };
// }

// https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10042
// function once(fn) {
//   return before(2, fn);
// }

function before(n: number, fn: (...args: unknown[]) => unknown) {
  return function (this: unknown, ...args: unknown[]) {
    if (n <= 1) return undefined;
    else {
      n--;
      return fn.apply(this, args);
    }
  };
}
const consoleLog = (str: unknown) => {
  console.log("log: ", str);
};

const limit2Log = before(3, consoleLog);
limit2Log(1);
limit2Log(2);
limit2Log(3);
limit2Log(4);
limit2Log(5);
export {};
