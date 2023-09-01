/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
// 虚拟dom转真实dom

const jump = () => {
  alert(666);
};
const vnode = {
  tagName: "div",
  attrs: {
    id: "box",
    style: "width:100px; color:red",
  },
  children: [
    {
      tagName: "a",
      attrs: {
        onClick: jump,
      },
      children: ["hahaha"],
    },
  ],
};

type VDOM =
  | {
      tagName: string;
      attrs?: Record<string, any>;
      children: VDOM[];
    }
  | string;

function JSON2DOM(node: VDOM | string): HTMLElement | Text {
  let dom;
  if (typeof node === "object") {
    dom = document.createElement(node.tagName);
    if (node.attrs) {
      for (const key in node.attrs) {
        const event = key.match(/^on(\w+)/)?.[1];
        if (event) {
          dom.addEventListener(
            event.toLowerCase(),
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            node.attrs[key],
          );
        } else {
          dom.setAttribute(key, node.attrs[key] as string);
        }
      }
    }
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        const curChild = node.children[i];
        const childNode = JSON2DOM(curChild);

        dom.appendChild(childNode);
      }
    }
  } else {
    dom = document.createTextNode(node);
  }
  return dom;
}
const container = document.querySelector("body");
container?.appendChild(JSON2DOM(vnode));
