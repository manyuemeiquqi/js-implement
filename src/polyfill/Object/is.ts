// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../index.d.ts" />

// Object.is 对标的是 === 和 ==
// 1、 比较过程不会进行隐式类型转换  ==则会进行类型转换
// 2、 Object.is 认为 -0 +0 false  NaN NaN true   === 相反
// 这是Object 的静态方法
// a!==a&&b!==b 排除 NaN
// 1/0 -> Infinity 1/-0 -> -Infinity
Object.myIs = function (x: unknown, y: unknown) {
  console.log("x === y : ", x === y);

  return x === y ? x !== 0 || 1 / x === 1 / (y as number) : x !== x && y !== y;
};

console.log('Object.is("", false): ', Object.myIs("", false));
console.log('Object.is("", false): ', Object.myIs(1, 1));
console.log('Object.is("", false): ', Object.myIs(NaN, NaN));
console.log('Object.is("", false): ', Object.myIs(0, -0));
console.log('Object.is("", false): ', Object.myIs({}, {}));
