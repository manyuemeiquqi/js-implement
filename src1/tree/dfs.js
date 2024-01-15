function dfs(root) {
  if (root.children && root.children.length > 0) {
    let tmp = 0;
    for (let i = 0; i < root.children.length; i++) {
      tmp += dfs(root.children[i]);
    }
    return (tmp += root.val);
  } else {
    return root.val;
  }
}
const tree = {
  val: 1,
  children: [
    { val: 2, children: [] },
    {
      val: 3,
      children: [
        { val: 4, children: [] },
        { val: 5, children: [] },
      ],
    },
    { val: 6, children: [] },
  ],
};
let ret = 0;
console.log("ret: ", dfs(tree));
