function checkDigits(str: string) {
  return /^\d|\d$/.test(str);
}
const input1 = "abc123";
console.log(checkDigits(input1)); // 输出: true

const input2 = "123abc";
console.log(checkDigits(input2)); // 输出: true

const input3 = "abc";
console.log(checkDigits(input3));
