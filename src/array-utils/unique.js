// // set
// // filter
// // indexOf
// // object key
// // map

// // set 零值相等算法

// // 四种 相等算  == === 零值 跟 Object.is

// // Set 采用 零值相等，如果不是基本类型，那就是对指针的比较
// console.log(typeof String);
// console.log(typeof /a/);

var array = [
  1,
  1,
  "1",
  "1",
  null,
  null,
  undefined,
  undefined,
  new String("1"),
  new String("1"),
  /a/,
  /a/,
  /b/,
  NaN,
  NaN,
];

// // console.log(/a/ === /a/);
// // console.log(String === String);
// // let a = () => {};
// // console.log(a === a);

// // function unique(array) {
// //   var res = array.filter(function (item, index, array) {
// //     console.log("item: ", item);
// //     return array.indexOf(item) === index;
// //   });
// //   return res;
// // }

// // console.log(unique(array));

// // function unique(array) {
// //   return array
// //     .concat()
// //     .sort()
// //     .filter(function (item, index, array) {
// //       return !index || item !== array[index - 1];
// //     });
// // }

// // 键值对

// function unique(array) {
//   var obj = {};
//   return array.filter(function (item, index, array) {
//     console.log(typeof item + JSON.stringify(item));
//     return Object.hasOwn(obj, typeof item + JSON.stringify(item))
//       ? false
//       : (obj[typeof item + JSON.stringify(item)] = true);
//   });
// }

// console.log(unique(array)); // [{value: 1}, {value: 2}]
function unique(array, fn = (val) => val) {
  return [...new Set(array.map(fn))];
}


function quickSort(l,r){
  if
}
console.log(unique(array));
