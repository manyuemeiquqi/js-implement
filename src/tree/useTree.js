const list = [
  {
    name: "文本1",
    parent: null,
    id: 1,
  },
  {
    name: "文本2",
    id: 2,
    parent: 1,
  },
  {
    name: "文本3",
    parent: 2,
    id: 3,
  },
];

const getTree = (list) => {
  function TreeNode(id) {
    this.id = id;
    this.children = [];
  }

  const nodeMap = new Map();
  for (let i = 0; i < list.length; i++) {
    const { id, parent } = list[i];
    if (!nodeMap.has(id)) {
      nodeMap.set(id, { ...list[i], children: [] });
    } else {
      Object.assign(nodeMap.get(i), {
        name: list[i].name,
        parent: list[i].parent,
      });
    }

    if (!nodeMap.has(parent)) {
      nodeMap.set(parent, new TreeNode(parent));
    }
    nodeMap.get(parent).children.push(nodeMap.get(id));
  }
  console.log(nodeMap);
};

getTree(list);

/./;
