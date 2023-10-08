// https://github.com/sindresorhus/p-timeout
function timeout(pF, timeout) {
  return Promise.race([
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(5);
      }, timeout),
    ),
    pF(),
  ]);
}

timeout(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 4000);
    }),
  1000,
).then((res) => {
  console.log("res: ", res);
});
