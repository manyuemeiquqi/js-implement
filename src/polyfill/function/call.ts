type F = (...args: any[]) => any;

function myCall(fn: F, thisArg: unknown, ...args: unknown[]) {
  var uniqueId = Symbol();
  thisArg = thisArg || globalThis;
  while (Object.hasOwn(thisArg as object, uniqueId)) {
    uniqueId = Symbol();
  }
  const arr = [];
  for (let i = 2; i < 2 + args.length; i++) {
    arr.push("arguments[" + i + "]");
  }
  (thisArg as Record<symbol, unknown>)[uniqueId] = fn;
  const res = eval("thisArg[uniqueId](" + arr + ")");
  Reflect.deleteProperty(thisArg as object, uniqueId);
  return res;
}

export {};
