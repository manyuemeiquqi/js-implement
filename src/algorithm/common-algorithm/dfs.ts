interface TreeNode {
  children?: TreeNode[];
  label?: unknown;
}
function deepFirstSearch(data: TreeNode): void {
  console.log("data: ", data.label);
  if (data.children)
    for (let i = 0; i < data.children.length; i++) {
      deepFirstSearch(data.children[i]);
    }
}
const data: TreeNode = {
  label: "root",
  children: [
    {
      label: "Level one 1",
      children: [
        {
          label: "Level two 1-1",
          children: [
            {
              label: "Level three 1-1-1",
            },
          ],
        },
      ],
    },
    {
      label: "Level one 2",
      children: [
        {
          label: "Level two 2-1",
          children: [
            {
              label: "Level three 2-1-1",
            },
          ],
        },
        {
          label: "Level two 2-2",
          children: [
            {
              label: "Level three 2-2-1",
            },
          ],
        },
      ],
    },
    {
      label: "Level one 3",
      children: [
        {
          label: "Level two 3-1",
          children: [
            {
              label: "Level three 3-1-1",
            },
          ],
        },
        {
          label: "Level two 3-2",
          children: [
            {
              label: "Level three 3-2-1",
            },
          ],
        },
      ],
    },
  ],
};

deepFirstSearch(data);
