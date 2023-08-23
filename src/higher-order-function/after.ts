function after(n: number, fn: (...args: unknown[]) => unknown) {
  return function (this: unknown, ...args: unknown[]) {
    if (n-- < 1) return fn.apply(this, args);
  };
}

const consoleLog = (str: unknown) => {
  console.log("log: ", str);
};
const after3Log = after(3, consoleLog);
after3Log(1);
after3Log(2);
after3Log(3);
after3Log(4);
after3Log(5);
