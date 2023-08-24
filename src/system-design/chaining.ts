// 链式调用思想的应用，解决异步的回调地狱
class Calculator {
  res: number;
  constructor() {
    this.res = 0;
  }
  add(num: number) {
    this.res += num;
    return this;
  }
  minus(num: number) {
    this.res -= num;
    return this;
  }

  multiply(num: number) {
    this.res *= num;
    return this;
  }
  divide(num: number) {
    this.res /= num;
    return this;
  }
  getValue() {
    return this.res;
  }
}
const result = new Calculator().add(5).multiply(2).divide(2).getValue();

console.log("Result:", result);
