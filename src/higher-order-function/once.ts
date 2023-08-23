function once(fn: (...arg: unknown[]) => unknown) {
  let called: boolean = false;
  let res: unknown;
  return function (this: unknown, ...args: unknown[]) {
    if (!called) {
      called = true;
      res = fn.apply(this, args);
      return res;
    } else {
      return res;
    }
  };
}
function init(a: unknown, b: unknown) {
  console.log("a, b: ", a, b);
  console.log("init");
}
const onceInit = once(init);
onceInit(1, 2);
onceInit(2, 3);

export { once };
