function f() {
  console.log("hello world");
}

// const f1 = (f) =>
//   setTimeout(() => {
//     f();
//   }, 4000);

// const f2 = async () => {
//   await f1(f);
//   await f1(f);
//   await f1(f);
// };

// f2();

// 递归
function repeatAsync(
  fn: (...args: unknown[]) => unknown,
  times: number,
  seconds: number,
) {
  if (times <= 0) {
    return;
  } else {
    setTimeout(() => {
      fn();
      repeatAsync(fn, times - 1, seconds);
    }, seconds * 1000);
  }
}

async function repeatAsync1(
  fn: (...args: unknown[]) => unknown,
  times: number,
  seconds: number,
) {
  for (let i = 1; i <= times; i++) {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        fn();
        resolve();
      }, seconds * 1000);
    });
  }
}
function repeatAsync2(
  fn: (...args: unknown[]) => unknown,
  times: number,
  seconds: number,
) {
  const interval = setInterval(() => {
    fn();
    if (--times === 0) clearInterval(interval);
  }, seconds * 1000);
}
repeatAsync(f, 3, 4);
repeatAsync1(f, 3, 4).catch(() => {});
repeatAsync2(f, 3, 4);

export {};
