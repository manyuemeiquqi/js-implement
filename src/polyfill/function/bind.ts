/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
function myBind(
  fn: (...args: any[]) => any,
  thisArg: unknown,
  ...args1: unknown[]
) {
  const prototype = fn.prototype;
  const fBound = function (this: unknown, ...args2: unknown[]) {
    const arg = args1.concat(args2);
    if (this instanceof fBound) {
      return fn.apply(this, arg);
    } else {
      fBound.prototype = Function;
      return fn.apply(thisArg, arg);
    }
  };

  if (prototype !== null && typeof prototype === "object") {
    fBound.prototype = prototype;
  }
  return fBound;
}

function log(this: unknown, ...args: any[]) {
  console.log(this);

  console.log(...args);
}
const boundLog = myBind(log, "this value", 1, 2);
const boundLog2 = myBind(boundLog, "new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
// 连续绑定取第一个 this ，这里就可见一斑，连续包装，离 apply 最近的依然是第一次的 this 值
