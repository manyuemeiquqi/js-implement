// RLE 简单压缩算法

function RLECompress(str: string): string {
  let i: number = 1;
  let res: string = "";
  let count: number = 0;
  while (i < str.length) {
    while (i + 1 < str.length && str[i] === str[i + 1]) {
      i++;
      count++;
    }
    res += `${str[i]}${count}`;
    count = 1;
    i++;
  }
  return res;
}
function RLECompress1(str: string): string {
  return str.replace(/(.)\1*/g, function (match, p1) {
    console.log("match: ", match);
    return "" + p1 + match.length;
  });
}
console.log(RLECompress("AAAABBBCCDEEEEH"));
console.log(RLECompress1("AAAABBBCCDEEEEH"));
