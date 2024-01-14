function myAny(pList) {
  return new Promise((resolve, reject) => {
    const len = pList.length;
    const ret = new Array(len);
    let count = 0;
    for (let i = 0; i < len; i++) {
      pList[i].then(resolve).catch((e) => {
        ret[i] = e;
        if (++count === len) {
          reject({
            errors: ret,
            message: "all rejected",
          });
        }
      });
    }
  });
}

const promise1 = Promise.resolve(0);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "quick"),
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 500, "slow"),
);

const promises = [promise1, promise2, promise3];

myAny(promises)
  .then((value) => console.log(value))
  .catch((e) => {
    console.log("e: ", e);
  });
