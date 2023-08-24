function runCount(fn: (...args: unknown[]) => unknown) {
  let count = 0;
  return function (this: unknown, ...args: unknown[]) {
    console.log("count: ", ++count);
    fn.apply(this, args);
  };
}
function log() {
  console.log("log: ");
}
const f = runCount(log);
f();
f();
f();

export {};
