function pipe(...fnList) {
  return function (...args) {
    const context = this;
    return fnList.reduce((prev, cur, idx) => {
      if (idx === 1) {
        return cur.apply(context, [prev.apply(context, args)]);
      } else {
        return cur.apply(context, [prev]);
      }
    });
  };
}

const fn = pipe(
  (a) => a + 1,
  (a) => a + 2,
  (a) => a + 3,
  (a) => a + 4,
); // 传入pipe的四个函数都是已实现的
const ret = fn(1); // 1 + 1 + 2 + 3 + 4 = 11，输出11
console.log("ret: ", ret);
