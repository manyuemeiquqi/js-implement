function lowestCommonAncestor(
  root: HTMLElement,
  a: HTMLElement,
  b: HTMLElement,
): HTMLElement | null {
  const getPath = (node: HTMLElement, target: HTMLElement): HTMLElement[] => {
    if (node === target) {
      return [target];
    } else {
      if (node.children.length) {
        for (const child of node.children) {
          const findRes = getPath(child as HTMLElement, target);
          if (findRes?.length) return [...findRes, node];
        }
      } else return [];
    }
    return [];
  };
  let p1 = getPath(root, a);
  let p2 = getPath(root, b);
  if (p1.length > p2.length) [p1, p2] = [p2, p1];
  for (let i = 0; i < p1.length; i++) {
    const cur = p1[i];
    if (p2.find((item) => item === cur)) return cur;
  }
  return null;
}

lowestCommonAncestor(
  document.body,
  document.querySelector("#id1") as HTMLHtmlElement,
  document.querySelector("#id2") as HTMLElement,
);
// 二叉树版本 lc236
// https://jsbin.com/jajilul/1/edit?html,js,console,output
