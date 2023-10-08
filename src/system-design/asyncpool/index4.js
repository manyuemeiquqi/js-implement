async function asyncPool(poolLimit, iterable, iteratorFn) {
  const ret = [];
  //   为什么用set 结构，可以删除自己
  const runQueue = new Set();
  for (const item of iterable) {
    const p = Promise.resolve().then(() => iteratorFn(item));

    ret.push(p);
    runQueue.add(p);
    const deleteItem = () => runQueue.delete(p);
    p.then(deleteItem, deleteItem);
    if (runQueue.length >= poolLimit) {
      await Promise.race(runQueue);
    }
  }

  return Promise.all(ret);
}
