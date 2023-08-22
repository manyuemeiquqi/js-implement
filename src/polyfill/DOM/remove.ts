function remove<T extends HTMLElement>(node: T): T | undefined {
  return node.parentNode?.removeChild(node);
}
const el = document.getElementById("div-02");

remove(el as HTMLElement);
