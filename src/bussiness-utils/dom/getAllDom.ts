function getAllDom(node: HTMLElement | Document): HTMLElement[] {
  return Array.from(node.querySelectorAll("*"));
}

function getAllTag(node: HTMLElement | Document): string[] {
  const domArr = Array.from(node.querySelectorAll("*"));
  const res = domArr.map((item) => item.localName);
  console.log("res: ", res);
  return Array.from(new Set(res));
}

getAllDom(document);

getAllTag(document);

// exec 属于 RegExp 的 prototype ，用在只匹配一个字符串，但同时又有捕获组的时候
function getAllTagReg(): string[] {
  const innerHtml = document.body.innerHTML;
  let match;
  const domArr = [];

  const reg = /<(\w+)>/g;
  do {
    match = reg.exec(innerHtml);
    if (match) domArr.push(match[1]);
  } while (match);
  return Array.from(new Set(domArr));
}
getAllTagReg();
