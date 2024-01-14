// 特点，第二个跟第三个参数可以拿到 resolve， reject

function myPromisify(fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    return new Promise((res, rej) => {
      const cb = (err, data) => {
        if (err) rej(err);
        res(data);
      };
      fn.apply(this, args.concat([cb]));
    });
  };
}
