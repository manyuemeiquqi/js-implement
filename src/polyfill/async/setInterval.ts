function mySetInterval(
  handler: (...args: unknown[]) => unknown,
  timeout: number = 0,
  ...args: unknown[]
) {
  let timer: number;
  function loop() {
    timer = setTimeout(function () {
      handler(...args);
      loop();
    }, timeout);
    return loop;
  }
  loop();

  return {
    clear() {
      clearTimeout(timer);
    },
  };
}
const logName = function (name: string) {
  console.log("name: ", name);
};
const interval = mySetInterval(
  logName as (...args: unknown[]) => unknown,
  1000,
  "jinp",
);
setTimeout(() => {
  interval.clear();
}, 10000);
export {};
