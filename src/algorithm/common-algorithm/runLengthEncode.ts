// RLE 简单压缩算法

function RLECompress(str: string): string {
  let i: number = 0;
  let res: string = "";
  let count: number = 1;
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
    return "" + p1 + match.length;
  });
}
console.log(RLECompress("AAAABBBCCDEEEEH"));
console.log(RLECompress1("AAAABBBCCDEEEEH"));

function RLEDecode(str: string): string {
  let res = "";
  for (let i = 0; i < str.length; ) {
    let count = "";
    const letter = str[i++];
    while (str[i] <= "9" && str[i] >= "0") {
      count += str[i];
      i++;
    }
    res += letter.repeat(+count);
  }
  return res;
}

console.log(RLEDecode("D1O2G1")); // 输出：DOOG
console.log(RLEDecode("Z5")); // 输出：ZZZZZ
