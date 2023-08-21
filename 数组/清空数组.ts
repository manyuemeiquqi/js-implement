const arr = [1, 2, 3];
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
arr.length = 0;
console.log("arr: ", arr);
arr1.splice(0, arr1.length);
console.log("arr1: ", arr1);

while (arr2.length) arr2.pop();
console.log("arr2: ", arr2);

// 1 length 2 splice 3 构造一个循环
// 涉及知识点
// 哪些数组方法会改变数组本身
// pop push shift unshift
// reverse
// sort
// splice
// fill
// copyWithin
