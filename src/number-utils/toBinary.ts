function toBinary(num: number): number {
  return +num.toString(2);
}

// 10转2算法
function toBinary1(num: number): number {
  let res: string = "";
  let sign = "+";
  if (num < 0) {
    sign = "-";
    num = Math.abs(num);
  }
  while (num != 0) {
    res = (num % 2) + res;
    num = (num / 2) >> 0;
  }
  return +(sign + res);
}
console.log("toBinary(646): ", toBinary(-646));
console.log("toBinary(646): ", toBinary(10));
console.log("toBinary(646): ", toBinary1(10));
console.log("toBinary(646): ", toBinary1(-646));
