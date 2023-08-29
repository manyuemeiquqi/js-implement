function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

isPrime(2);
// 为什么  为什么遍历到开根后就可以判断  假设不是数组 且一个因子< sprt(num) 那么就存在一个因子>sqrt(num) 是的xy===num ,因此遍历到开根就可以
// ? 如果测试用例有超过最大安全整数，该如何处理
