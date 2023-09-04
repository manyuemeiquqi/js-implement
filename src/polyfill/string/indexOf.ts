// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../index.d.ts" />

String.prototype.myIndexOf = function (
  str: string,
  searchPosition: number = 0,
) {
  const searchLen = str.length;
  for (let i = searchPosition; i <= this.length - searchLen; i++) {
    let j = 0;
    for (; j < str.length; j++) {
      if (str[j] !== this[i + j]) break;
    }
    if (j === searchLen) return i;
  }
  return -1;
};

// 示例用法
const str = "Hello, world!";
console.log(str.myIndexOf("world")); // 输出: 7
console.log(str.myIndexOf("o")); // 输出: 7
console.log(str.myIndexOf("abc")); // 输出: -1
export {};
