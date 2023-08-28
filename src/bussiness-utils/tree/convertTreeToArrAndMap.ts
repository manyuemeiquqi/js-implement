const data = {
  id: 1,
  text: "节点1",
  parentId: 0,
  children: [
    {
      id: 2,
      text: "节点1_1",
      parentId: 1,
    },
  ],
};
interface TreeNode {
  id: number;
  children?: TreeNode[];
}
function convertTreeToArrAndMap(node: TreeNode): {
  list: TreeNode[];
  map: { [id: string]: TreeNode };
} {
  const list: TreeNode[] = [];
  const map: { [id: string]: TreeNode } = {};
  const dfs = (data: TreeNode) => {
    list.push(data);
    map[data.id] = data;
    if (data.children) {
      for (const item of data.children) {
        dfs(item);
      }
    }
  };
  dfs(node);
  return {
    list,
    map,
  };
}
console.log("treeToArrAndMap(data): ", convertTreeToArrAndMap(data));
export {};
