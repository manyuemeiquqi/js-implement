function once(fn: (...arg: unknown[]) => unknown) {
  let called: boolean = false;
  return function (this: unknown, ...args: unknown[]) {
    if (!called) {
      fn.apply(this, args);
      called = true;
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
