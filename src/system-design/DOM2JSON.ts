type NodeJSON = {
  name: string;
  children: NodeJSON[];
};
function DOM2JSON(node: HTMLElement): NodeJSON {
  const cur: NodeJSON = {
    name: node.tagName,
    children: [],
  };

  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      const formatDOM = DOM2JSON(node.children[i] as HTMLElement);
      cur.children.push(formatDOM);
    }
  }

  return cur;
}
console.log("DOM2JSON: ", DOM2JSON(document.body));

// node.childNodes 会包含文本节点 text 和注释节点，只想loop 元素节点的话用children就足够了
