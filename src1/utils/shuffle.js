// Math.random 在大样本数据测试中发现，并不是随机的
function mathRandom(arr) {
  return [...arr].sort(() => (Math.random() < 0.5 ? 1 : -1));
}

// 洗牌算法应用，音乐播放器随机播放，扫雷的位置，斗地主洗牌 lc384

// knuth

// 怎么样算作公平，数组的每一项出现在每个位置的概率是相同的

// https://www.zhihu.com/question/26934313/answer/743798587  洗牌算法为什么是公平的
function shuffle(arr) {
  const res = [...arr];
  for (let i = res.length; i > 0; i--) {
    const idx = (Math.random() * i) >> 0;
    [res[idx], res[i - 1]] = [res[i - 1], res[idx]];
  }
  return res;
}
console.log(mathRandom([1, 2, 3]));
console.log(shuffle([1, 2, 3]));

export { shuffle };
