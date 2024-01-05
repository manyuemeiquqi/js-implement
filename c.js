// // 示例
// let count = 1;
// let promiseFunction = () =>
//   new Promise((rs) =>
//     window.setTimeout(() => {
//       rs(count++);
//     }),
//   );
// let firstFn = firstPromise(promiseFunction);
// firstFn().then(console.log); // 1
// firstFn().then(console.log); // 1
// firstFn().then(console.log); // 1

const { T } = require("ramda");

// setTimeout(() => {}, timeout);

// for (var i = 0; i < 10; i++) {
//   setTimeout(console.log, 1, i);
// }

const arr = [
  { id: 3, name: "部门3", pid: 1 },
  { id: 5, name: "部门5", pid: 4 },
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 6, name: "部门6", pid: 0 },
];

function buildTree() {
  function TreeNode(id) {
    this.id = id;
    this.children = [];
  }
  let map = {};

  let root = {
    id: Infinity,
  };
  for (let i = 0; i < arr.length; i++) {
    const { pid, id } = arr[i];
    if (!map[id]) {
      map[id] = new TreeNode(id);
    } else {
      Object.assign(map[id], {
        pid: arr[id].pid,
        name: arr[id].name,
      });
    }

    if (!map[pid]) {
      map[pid] = new TreeNode(pid);
    }
    map[pid].children.push(map[id]);
    root = root.id < pid ? root : map[pid];
  }
  return root;
}

const sortArr = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    while (arr[l] % 2 === 1 && l < r) {
      l++;
    }
    while (arr[r] % 2 === 0 && l < r) {
      r--;
    }
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
  return arr;
};

const deepEqul = (a, b) => {
  const typeA = typeof a;
  if (typeA !== typeof b) {
    return false;
  }
  if (["object"].includes(typeA)) {
    const allKeys = [...Object.keys, Object.getOwnPropertySymbols];
  }
};
