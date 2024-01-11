const noop = function () {};
const create = Object.create;
function toArgs(array) {
  return function () {
    return arguments;
  }.apply(undefined, array);
}
const realm = {};
const args = toArgs([1, 2, 3]);
const arrayViews = typedArrays.concat("DataView");
const map = Map ? new Map() : undefined;
const promise = Promise ? Promise.resolve(1) : undefined;
const set = Set ? new Set() : undefined;

const root = (typeof global === "object" && global) || this;
const phantom = root.phantom;
const defineProperty = Object.defineProperty;
const document = phantom ? undefined : root.document;
const stubFalse = function () {
  return false;
};
