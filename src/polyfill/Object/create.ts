/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// function myCreate(fn,)
// const o = Object.create(Object.prototype, {
//   // foo 是一个常规数据属性
//   foo: {
//     writable: true,
//     configurable: true,
//     value: "hello",
//   },
//   // bar 是一个访问器属性
//   bar: {
//     configurable: false,
//     get() {
//       return 10;
//     },
//     set(value) {
//       console.log("Setting `o.bar` to", value);
//     },
//   },
// });
//  create 可以跟 new 进行对比，区别就是 new 会接收执行内部的函数
function myCreate(
  proto: object | null,
  properties?: PropertyDescriptorMap & ThisType<any>,
) {
  const res = {
    __proto__: proto,
  };
  Object.setPrototypeOf(res, proto);
  if (properties) Object.defineProperties(res, properties);
  return res;
}
// console.log("let: ", o);
// console.log(
//   "let: ",
//   myCreate(Object.prototype, {
//     // foo 是一个常规数据属性
//     foo: {
//       writable: true,
//       configurable: true,
//       value: "hello",
//     },
//     // bar 是一个访问器属性
//     bar: {
//       configurable: false,
//       get() {
//         return 10;
//       },
//       set(value) {
//         console.log("Setting `o.bar` to", value);
//       },
//     },
//   }),
// );

function Car() {}
const b = Object.create(Car.prototype);
const c = myCreate(Car.prototype);
console.log("c: ", c, c.constructor);
console.log("b: ", b.constructor);

export {};
