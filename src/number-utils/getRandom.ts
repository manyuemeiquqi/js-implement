function getRandomNumber(min: number, max: number): number {
  // [0,1)=> [0,max+1)
  // [0,1) -> 0
  //   ...
  // [max-min-1,max-min)->max-min-1
  // [max-min,max-min+1)->max-min
  // 生成一个取值分布均匀的 [0,max-min] 然后向前挪动 min 个位置
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(5, 10));
