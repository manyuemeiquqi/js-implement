/* eslint-disable @typescript-eslint/no-this-alias */
function throttle(
  fn: (...args: unknown[]) => unknown,
  wait: number,
  option: {
    leading?: boolean;
    trailing?: boolean;
  } = {},
) {
  // leading 为调用立刻触发，trailing为最后一次调用触发，两者不能同时为false
  option = Object.assign(
    {
      leading: true,
      trailing: true,
    },
    option,
  );
  let timeout: number | null;
  let result: unknown;
  let previous: number | undefined;
  function throttled(this: unknown, ...args: unknown[]) {
    const context = this;
    const now = Date.now();

    if (option.leading && (previous === undefined || now - previous > wait)) {
      previous = now;
      result = fn.apply(context, args);
    } else if (option.trailing) {
      const remain = previous === undefined ? wait : wait - (now - previous);
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        result = fn.apply(context, args);
        previous = Date.now();
        timeout = null;
        // 这里需要再remain时间后调用
      }, remain);
    }
    return result;
  }
  throttled.cancel = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    previous = undefined;
  };
  return throttled;
}

let counter = 0;
const incr = function () {
  return ++counter;
};
const throttledIncr = throttle(incr, 100);
const results: unknown[] = [];
const saveResult = function () {
  results.push(throttledIncr());
};
saveResult();
saveResult();
setTimeout(saveResult, 50);
// ---
setTimeout(saveResult, 150);
setTimeout(saveResult, 160);
// -----
setTimeout(saveResult, 230);
setTimeout(function () {
  console.log(results[0], 1, "incr was called once");

  console.log(results[1], 1, "incr was throttled");

  console.log(results[2], 1, "incr was throttled");

  console.log(results[3], 2, "incr was called twice");

  console.log(results[4], 2, "incr was throttled");

  console.log(results[5], 3, "incr was called trailing");
  console.log("results: ", results);
}, 500);

export {};
