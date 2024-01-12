const getAllLeaves = (root) => {
  const ret = [];

  const dfs = (node) => {
    const children = node.children;

    if (children === undefined || children.length === 0) {
      ret.push(node);
      return;
    } else {
      for (let i = 0; i < children.length; i++) {
        dfs(children[i]);
      }
    }
  };
  dfs(root);

  console.log("ret: ", JSON.stringify(ret));
  return ret;
};

const data1 = {
  value: "A",
  children: [
    {
      value: "B",
      children: [
        { value: "D", children: [] },
        { value: "E", children: [] },
      ],
    },
    {
      value: "C",
      children: [
        { value: "F", children: [] },
        { value: "G", children: [] },
      ],
    },
  ],
};

const data2 = {
  value: "A",
  children: [
    {
      value: "B",
      children: [
        { value: "C", children: [] },
        { value: "D", children: [] },
      ],
    },
    {
      value: "E",
      children: [{ value: "F", children: [] }],
    },
  ],
};

getAllLeaves(data1);
getAllLeaves(data2);
