const treeNode = {
  id: 1,
  name: "前端",
  children: [
    {
      id: 2,
      name: "html",
      children: [
        { id: 5, name: "vue", children: [] },
        { id: 6, name: "re", children: [] },
      ],
    },
    {
      id: 3,
      name: "html",
      children: [
        { id: 7, name: "vue", children: [] },
        { id: 8, name: "re", children: [] },
      ],
    },
  ],
};
interface TreeNode {
  name: string;
  children?: TreeNode[];
}
function getAllPath(node: TreeNode): string[] {
  const arr: string[] = [];
  const dfs = (data: TreeNode, path: string[]) => {
    if (data.children?.length) {
      for (const item of data.children) {
        dfs(item, [...path, data.name]);
      }
    } else {
      arr.push([...path, data.name].join("-"));
    }
  };
  dfs(node, []);
  return arr;
}
console.log("getAllPath(treeNode): ", getAllPath(treeNode));
export {};
