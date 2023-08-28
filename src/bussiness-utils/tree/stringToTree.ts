const treeMap = {
  "a-b-c-d": 1,
  "a-b-c-e": 2,
  "a-b-f": 3,
  "a-j": 4,
};
const obj = {
  a: {
    b: {
      c: {
        d: 1,
        e: 2,
      },
      f: 3,
    },
    j: 4,
  },
};

function pathToTree(pathObj: Record<string, unknown>) {
  const res = {};
  const arr = Object.entries(pathObj);
  for (const [path, val] of arr) {
    const pathArr = path.split("-");
    setAttribute(pathArr, res, val);
  }

  function setAttribute(
    path: string[],
    obj: Record<string, unknown>,
    val: unknown,
  ) {
    if (path.length === 1) {
      obj[path[0]] = val;
      return;
    } else {
      const item = path.shift() as string;
      obj[item] = obj[item] || {};
      setAttribute(path, obj[item] as Record<string, unknown>, val);
    }
  }
  return res;
}
console.log(JSON.stringify(pathToTree(treeMap)) === JSON.stringify(obj));

export {};
