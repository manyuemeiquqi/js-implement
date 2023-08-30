function traverseDomTree(
  node: HTMLElement | ChildNode,
): HTMLElement | ChildNode[] {
  const res: HTMLElement | ChildNode[] = [];
  const dfs = (element: HTMLElement | ChildNode) => {
    res.push(element);
    if (element.childNodes) {
      for (const child of element.childNodes) {
        dfs(child);
      }
    }
  };
  dfs(node);
  return res;
}

traverseDomTree(document.body);
// iteration
