// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../index.d.ts" />
String.prototype.myTrim = function () {
  return this.replace(/(^\s+)|(\s+$)/g, "");
};
console.log("  hello world  ".myTrim());
