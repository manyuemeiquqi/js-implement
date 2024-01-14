function once(fn) {
  let called = false;
  let ret;
  return function (...args) {
    if (!called) {
      ret = fn.apply(this, args);
      called = true;
    }
    return ret.finally(() => {
      called = false;
    });
  };
}
let count = 1;
let promiseFunction = () =>
  new Promise((rs) =>
    setTimeout(() => {
      rs(count++);
    }),
  );
let firstFn = once(promiseFunction);
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1

setTimeout(() => {
  firstFn().then(console.log); // 2
  firstFn().then(console.log); // 2
  firstFn().then(console.log); // 2
}, 3000);
