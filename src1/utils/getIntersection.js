function getIntersection(arr1, arr2) {
  const compare = new Set([...arr1]);
  const ret = {};
  for (let i = 0; i < arr2.length; i++) {
    if (compare.has(arr2[i])) {
      ret[arr2[i]] = true;
    }
  }
  return Object.keys(ret).map((item) => +item);
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
console.log(getIntersection(arr1, arr2)); // 期望输出: [4, 5]

// 测试用例 2
const arr3 = [1, 2, 3, 4, 5];
const arr4 = [6, 7, 8, 9, 10];
console.log(getIntersection(arr3, arr4)); // 期望输出: []

// 测试用例 3
const arr5 = [1, 2, 3, 4, 5];
const arr6 = [1, 2, 3, 4, 5];
console.log(getIntersection(arr5, arr6)); // 期望输出: [1, 2, 3, 4, 5]

// 测试用例 4
const arr7 = [];
const arr8 = [1, 2, 3];
console.log(getIntersection(arr7, arr8)); // 期望输出: []
