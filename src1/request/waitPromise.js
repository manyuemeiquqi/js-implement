const promiseTimeout = (p, timeout) => {
  return new Promise((res, rej) => {
    p().then(res);
    setTimeout(() => {
      rej("more than timeout");
    }, timeout);
  });
};

const req = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("code");
    }, 1000);
  });

promiseTimeout(req, 1001)
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((e) => {
    console.log("e: ", e);
  });
