function traverseDomTree(node: HTMLElement): HTMLElement[] {
  const res: HTMLElement[] = [];
  const dfs = (element: HTMLElement) => {
    res.push(element);
    if (element.children) {
      for (const child of element.children) {
        dfs(child as HTMLElement);
      }
    }
  };
  dfs(node);
  return res;
}

traverseDomTree(document.body);
// iteration
