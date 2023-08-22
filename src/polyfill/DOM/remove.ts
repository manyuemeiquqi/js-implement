function remove<T extends HTMLElement>(node: T): T | undefined {
  return node.parentNode?.removeChild(node);
}
const el = document.getElementById("div-02");

remove(el as HTMLElement);

// (function (arr) {
//   arr.forEach(function (item) {
//     if (item.hasOwnProperty("remove")) {
//       return;
//     }
//     Object.defineProperty(item, "remove", {
//       configurable: true,
//       enumerable: true,
//       writable: true,
//       value: function remove() {
//         this.parentNode.removeChild(this);
//       },
//     });
//   });
// })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
