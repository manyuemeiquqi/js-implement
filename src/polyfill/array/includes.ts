// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../index.d.ts" />

// includes
// 涉及知识点 JavaScript的相等性判断

Array.prototype.myIncludes = function (
  ele: unknown,
  findIndex: number = 0,
): boolean {
  function zeroEqual(a: unknown, b: unknown) {
    return a === b ? true : a !== a && b !== b;
  }
  for (let i = findIndex; i < this.length; i++) {
    if (zeroEqual(ele, this[i])) return true;
  }
  return false;
};

const object = {};
const array = [1, 2, 3, -0, object];
console.log(array.includes(1));
console.log(array.includes(-0));
console.log(array.includes(0));
console.log(array.includes(object));
console.log(array.includes(4));
console.log(array.includes(-0.5));
console.log(array.includes({}));
console.log(Array(1).includes(undefined));
console.log([1].includes(NaN));
