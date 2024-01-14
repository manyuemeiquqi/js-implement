function retry(p, maxTimes = 2) {
  return new Promise(async (resolve, reject) => {
    let ret;
    while (maxTimes--) {
      try {
        ret = await p();
        resolve(ret);
      } catch (err) {
        if (maxTimes === 0) {
          reject(err);
        }
      }
    }
  });
}
function pRetry(p, maxTimes = 2) {
  console.log("maxTimes: ", maxTimes);

  return new Promise((resolve, reject) => {
    Promise.resolve(p())
      .then(resolve)
      .catch((e) => {
        if (maxTimes === 0) {
          reject(e);
        } else {
          pRetry(p, --maxTimes).then(resolve, reject);
        }
      });
  });
}

function getProm() {
  const n = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => (n > 0.1 ? resolve(n) : reject(n)), 1000);
    // setTimeout(() => (n > 1 ? resolve(n) : reject(n)), 1000);
  });
}

pRetry(getProm)
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
