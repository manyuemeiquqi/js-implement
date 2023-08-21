/* eslint-disable prefer-rest-params */
function getArr<T extends unknown[]>(...arg: T): T {
  console.log("arg: ", arg);
  return Array.from(arguments) as T;
}

function getArr1<T extends unknown[]>(...arg: T): T {
  console.log("arg: ", arg);
  const tmp: IArguments = arguments;
  return Array.prototype.slice.call(tmp) as T;
}
function getArr2<T extends unknown[]>(...arg: T): T {
  console.log("arg: ", arg);
  return [...arguments] as T;
}
console.log("getArr: ", getArr(1, 2));
console.log("getArr: ", getArr1(1, 2));
console.log("getArr: ", getArr2(1, 2));
