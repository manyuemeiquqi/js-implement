async function asyncPool(pList, limit) {
  const execute = new Set();
  const ret = [];
  for (let i = 0; i < pList.length; i++) {
    const p = Promise.resolve().then(() => pList[i]());
    execute.add(p);
    ret.push(p);
    const clean = () => execute.delete(p);
    p.then(clean, clean);
    if (execute.size >= limit) {
      await Promise.race(Array.from(execute));
    }
  }
  return Promise.all(ret);
}

const fetchURL = (timeout, data) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, timeout);
  });
};
asyncPool(
  [
    () =>
      fetchURL(1000, "1").then((res) => {
        console.log(performance.now());

        console.log("res: ", res);
      }),
    () => fetchURL(1000, "2"),
    () => fetchURL(1000, "3"),
    () => fetchURL(1000, "4"),
    () => fetchURL(1000, "5"),
    () => fetchURL(1000, "6"),
    () =>
      fetchURL(1000, "7").then((res) => {
        console.log(performance.now());

        console.log("res: ", res);
      }),
  ],
  2,
).then((res) => {
  console.log("res: ", res);
});
