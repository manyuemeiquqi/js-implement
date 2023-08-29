function repeatAsync(
  fn: (...args: unknown[]) => unknown,
  times: number,
  seconds: number,
) {
  return function (this: unknown, ...arg: unknown[]) {
    const interval = setInterval(() => {
      fn.apply(this, arg);
      if (--times === 0) clearInterval(interval);
    }, seconds * 1000);
  };
}
function f1(a: unknown) {
  console.log(a);
}
repeatAsync(f1, 3, 4)("abc");

export {};
