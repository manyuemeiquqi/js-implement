/* eslint-disable @typescript-eslint/no-this-alias */
function debounce(
  fn: (...args: unknown[]) => unknown,
  wait: number,
  immediate: boolean = false,
) {
  let timeout: number | null;
  // result 也需要作为一个闭包，当immediate的时候第二次调用需要第一次的value返回
  let result: unknown;

  function debounced(this: unknown, ...args: unknown[]) {
    // 内部可能多层函数 ， 先用变量保存当前this
    const context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      const notCalled = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      // 这里涉及到一个递归的问题， 函数的执行一定要放在定义timeout的后面
      if (notCalled) result = fn.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        if (!immediate) fn.apply(context, args);
        timeout = null;
      }, wait);
    }
    return result;
  }
  debounced.cancel = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounced;
}
let counter = 0;
const debouncedIncr = debounce(
  function () {
    counter++;
    if (counter < 10) debouncedIncr();
  },
  32,
  true,
);
debouncedIncr();
console.log(counter, 1, "incr was called immediately");
setTimeout(function () {
  console.log(counter, 1, "incr was debounced");
}, 96);
export {};
