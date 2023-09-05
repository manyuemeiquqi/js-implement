function mySetTimeout(
  handler: (...args: unknown[]) => unknown,
  timeout: number = 0,
  ...args: unknown[]
) {
  const timer = setInterval(() => {
    handler(...args);
    clearInterval(timer);
  }, timeout);

  return timer;
}

const timer = mySetTimeout(console.log, 1000, "jinp");
setTimeout(() => {
  console.log("timer: ", timer);
}, 2000);
