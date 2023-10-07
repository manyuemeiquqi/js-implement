// 生成器可以视为迭代器的语法糖
const obj = {
  data: {
    name: "jinp",
    age: "a",
    value: "we",
  },
  // [Symbol.iterator]() {
  //   const keys = Object.keys(this.data);
  //   let index = 0;
  //   return {
  //     next: () => {
  //       if (index < keys.length) {
  //         return {
  //           value: this.data[keys[index++]],
  //           done: false,
  //         };
  //       } else {
  //         return { done: true };
  //       }
  //     },
  //   };
  // },
  *[Symbol.iterator]() {
    const keys = Object.keys(this.data);
    for (let i = 0; i < keys.length; i++) {
      yield this.data[keys[i]];
    }
  },
};
for (const iterator of obj) {
  console.log("iterator: ", iterator);
}
console.log([1, 2, 3][Symbol.iterator]());

// function getIterator(array) {
//   let idx = 0;
//   const len = array.length;
//   return {
//     next: () => {
//       if (idx < len) {
//         return {
//           value: array[idx++],
//           done: false,
//         };
//       }
//       return {
//         value: undefined,
//         done: true,
//       };
//     },
//   };
// }
// const a = getIterator([1, 2, 3, 4, 5]);
// console.log("a: ", a);
// console.log("a: ", a.next());
// console.log("a: ", a.next());
// console.log("a: ", a.next());
// console.log("a: ", a.next());
// console.log("a: ", a.next());
// console.log("a: ", a.next());
