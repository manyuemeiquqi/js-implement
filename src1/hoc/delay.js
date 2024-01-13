function sleep(timeout) {
  return new Promise((r) => setTimeout(r, timeout));
}

sleep(1000).then((r) => {
  console.log("ret");
});

function delay(fn, timeout) {
  return function (...args) {
    const ctx = this;
    return new Promise((r) =>
      setTimeout(() => {
        const ret = fn.apply(ctx, args);
        r(ret);
      }, timeout),
    );
  };
}

// export { delay };
// top module has async
// await new Promise((r) => setTimeout(r, timeout));
