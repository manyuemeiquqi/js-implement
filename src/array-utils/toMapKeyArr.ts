// arr = [
//   {
//     name: "可乐",
//     categories: ["热门", "饮料"],
//   },
//   {
//     name: "苹果",
//     categories: ["热门", "食物"],
//   },
//   {
//     name: "洗衣液",
//     categories: ["生活用品"],
//   },
// ];

// // [
// //     { name: "热门", categories: ["可乐", "苹果"] },
// //     { name: "饮料", categories: ["可乐"] },
// //     { name: "食物", categories: ["苹果"] },
// //     { name: "生活用品", categories: ["洗衣液"] },
// // ];

interface Goods {
  name: string;
  categories: string[];
}

function toNameKeyArr(arr: Goods[]): Goods[] {
  const res = arr.reduce((prev: Record<string, Omit<Goods, "name">>, cur) => {
    for (const type of cur.categories) {
      if (prev[type]) {
        prev[type].categories.push(cur.name);
      } else {
        prev[type] = {
          categories: [cur.name],
        };
      }
    }
    return prev;
  }, {});
  return Object.entries(res).map((item) => {
    return {
      name: item[0],
      categories: item[1].categories,
    };
  });
}

console.log(
  toNameKeyArr([
    {
      name: "可乐",
      categories: ["热门", "饮料"],
    },
    {
      name: "苹果",
      categories: ["热门", "食物"],
    },
    {
      name: "洗衣液",
      categories: ["生活用品"],
    },
  ]),
);
