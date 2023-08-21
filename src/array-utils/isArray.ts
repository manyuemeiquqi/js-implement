// lodash 源码
//github.com/lodash/lodash/blob/4.17.15/lodash.js#L11286
function isArray(data: unknown): data is unknown[] {
  return Array.isArray(data);
}

function isArray1(data: unknown): data is unknown[] {
  return Object.prototype.toString.call(data) === "[object Array]";
}
console.log("isArray: ", isArray(1));
console.log("isArray: ", isArray1([1]));
