// // function a(str) {
// //   return str.toString().replace(/\/$/, "").replace(/^\//, "");
// // }
// // console.log(a("/awfeawef//"));

// const changeCase = (name) => {
//   const ret = name
//     .split("-")
//     .map((item) => (item[0] + "").toUpperCase() + item.slice(1));

//   console.log(ret);
//   return ret;
// };

// const changeCase1 = (name) => {
//   const ret = name.replace(/^{a}-{a-z}/);
// };
// changeCase("abc-bac-we");

// const arr = [
//   { id: 1, name: "部门1", pid: 0 },
//   { id: 2, name: "部门2", pid: 1 },
//   { id: 3, name: "部门3", pid: 1 },
//   { id: 4, name: "部门4", pid: 3 },
//   { id: 5, name: "部门5", pid: 4 },
//   { id: 6, name: "部门6", pid: 0 },
// ];

// function TreeNode(id) {
//   this.id = id || undefined;
//   this.children = [];
// }
// const buildTree = (list) => {
//   const root = new TreeNode();
//   const nodeMap = {};
//   for (let i = 0; i < list.length; i++) {
//     const node = list[i];
//     if (nodeMap[node.pid]) {
//       nodeMap[node.pid].children = nodeMap[node.pid].children ?? [];
//       nodeMap[node.pid].children.push(node);
//     }
//   }
// };

function generate(amount, count) {
  let ret = [amount];

  while (count > 1) {
    //挑选出最大一块进行切分
    let cake = Math.max(...ret),
      idx = ret.indexOf(cake),
      part = 1 + Math.floor((cake / 2) * Math.random()),
      rest = cake - part;

    ret.splice(idx, 1, part, rest);

    count--;
  }
  return ret;
}

const generate = (amount, count) => {
  const ret = [amount];
  while (count > 1) {
    let cake = Mah;
  }
};
