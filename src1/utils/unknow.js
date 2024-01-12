// 生成一个[a，b+1) 的范围，然后利用向下取整从而均匀分布
const getRangeRandomInter = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1)) + a;
};

// 生成一个随机数，4-6，保留两位有效数字
for (let i = 0; i < 10; i++) {
  console.log((getRangeRandomInter(400, 601) / 100).toFixed(2));
  //   console.log((((Math.random() * 100) >> 0) / 100).toFixed(2));
}

// 400 601
