function curry(fn) {
  const target = fn.length;
  let tmp = [];
  const collectParams = function (...args1) {
    tmp = tmp.concat(args1);
    if (tmp.length >= target) {
      return fn.apply(this, tmp);
    } else {
      return collectParams;
    }
  };
  return collectParams;
}

const f = function (a, b, c) {
  return [a, b, c];
};

const g = curry(f);

const ret = g(1)(2)(3);
console.log("ret: ", ret);
