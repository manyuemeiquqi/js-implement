// n及n以后执行
function after(n: number, fn: (...args: unknown[]) => unknown) {
  return function (this: unknown, ...args: unknown[]) {
    if (--n < 1) return fn.apply(this, args);
  };
}

const afterFn = after(1, function (this: { count: number }) {
  return ++this.count;
});
const obj = {
  after: afterFn,
  count: 0,
};

console.log("obj.after(): ", obj.after());
console.log("object.after(): ", obj.after());
console.log("object.after(): ", obj.after());
console.log("object.after(): ", obj.after());
console.log(obj.count);
