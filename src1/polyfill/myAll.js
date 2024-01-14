function myAll(pList) {
  return new Promise((resolve, reject) => {
    const len = pList.length;
    const ret = new Array(len);
    let count = 0;
    for (let i = 0; i < len; i++) {
      pList[i]
        .then((res) => {
          ret[i] = res;
          if (++count === len) {
            resolve(ret);
          }
        })
        .catch(reject);
    }
  });
}

const mixedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];
const p = myAll(mixedPromisesArray)
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((e) => {
    console.log("e: ", p);
    console.log("e: ", e);
  });
console.log(p);
setTimeout(() => {
  console.log("队列现在为空");
  console.log(p);
});
