// 链式调用思想的应用，解决异步的回调地狱
class Calculator {
  res: number = 0;

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

// 这里不要用this，只能将 innerSum当成一个对象，然后访问当前val
function accumlator(...args: number[]) {
  const val = args.reduce((a, b) => a + b);
  function innerSum(...args1: number[]) {
    innerSum.val += args1.reduce((a, b) => a + b, 0);
    return innerSum;
  }
  innerSum.val = val;
  return innerSum;
}

const result1 = accumlator(1, 2, 3, 4, 5)(2)(4)(4).val;
console.log(result1); //

export {};
