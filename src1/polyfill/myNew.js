function myNew(fn) {
  var ret;
  if (
    Object.prototype &&
    Object.prototype.toString.call(fn.prototype) === "[object Object]"
  ) {
    ret = {
      __proto__: fn.prototype,
    };
  } else {
    ret = {};
  }

  console.log(" Array.prototype.slice(arguments, 1): ", arguments);

  const fnRet = fn.apply(ret, Array.prototype.slice.call(arguments, 1));

  // fnRet 为非原始值
  if (fnRet !== null && ["function", "object"].includes(typeof fnRet))
    return fnRet;
  return ret;
}
