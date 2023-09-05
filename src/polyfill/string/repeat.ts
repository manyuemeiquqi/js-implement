// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../index.d.ts" />
// 快速幂
String.prototype.myRepeat = function (count: number): string {
  if (count <= 0) return "";
  let res = "";
  do {
    if (count % 2 === 1) {
      res += this as string;
    }
    count >>= 1;
    if (count !== 0) res += res;
  } while (count !== 0);
  return res;
};

console.log("myRepeat(1): ", "abc".myRepeat(7));

// 5 -> 2 -> 1 -> 0

// ''  (a+a)*2  aaaa+a
