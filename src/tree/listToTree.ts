import { cloneDeep } from "lodash";

/**
 * 描述
 * 给你一个 list 节点数组，通过数组构建出树
 */
const arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
  { id: 6, name: "部门6", pid: 0 },
];

interface TreeNode {
  id: number;
  children?: TreeNode[];
  pid: number;
}
// 为保持纯函数特性，尽量不要修改源数据
function listToTree(arr: TreeNode[]): TreeNode {
  const cloneArr = cloneDeep(arr);
  const id2Children: { [pid: string]: TreeNode[] } = {};
  const root: TreeNode = {
    id: 0,
    pid: -1,
    children: [],
  };

  for (const item of cloneArr) {
    id2Children[item.pid] = id2Children[item.pid]
      ? [...id2Children[item.pid], item]
      : [item];
  }
  const dfs = (node: TreeNode) => {
    if (id2Children[node.id]) {
      node.children = id2Children[node.id];
      for (const item of node.children) {
        dfs(item);
      }
    }
  };
  dfs(root);
  return root;
}

function listToTree1(arr: TreeNode[]): TreeNode {
  const cloneArr = cloneDeep(arr);
  const id2NodeMap: { [id: number]: TreeNode } = {};
  const root: TreeNode = {
    id: 0,
    pid: -1,
    children: [],
  };

  for (const item of cloneArr) {
    id2NodeMap[item.id] = item;
  }

  for (const item of cloneArr) {
    const parent = id2NodeMap[item.pid];
    if (parent) {
      if (parent.children) parent.children.push(item);
      else parent.children = [item];
    } else {
      if (root.children) root.children.push(item);
      else root.children = [item];
    }
  }

  return root;
}

console.log(
  JSON.stringify(listToTree(arr)) === JSON.stringify(listToTree1(arr)),
);
