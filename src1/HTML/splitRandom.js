function* splitPkg(list) {
  for (let i = list.length; i >= 0; i--) {
    const idx = (Math.random() * i) >> 0;
    [list[i - 1], list[idx]] = [list[idx], list[i - 1]];
    yield list[i - 1];
  }
}
// 1元

// 1 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9  10
// 100 个 1 有 99 个隔板

const randomPkg = (amount, count) => {
  const gapList = new Array(amount * 100 - 1).fill(0).map((_, idx) => idx + 1);
  const ret = [];
  const pick = splitPkg(gapList);
  while (ret.length < count - 1) {
    ret.push(pick.next().value);
  }
  ret.push(amount * 100);
  ret.sort((a, b) => a - b);
  console.log("ret: ", ret);
  for (let i = count - 1; i > 0; i--) {
    ret[i] = ret[i] - ret[i - 1];
  }
  console.log(ret);
};

randomPkg(1, 100);
