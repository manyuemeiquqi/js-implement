/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

// https://github.com/jonschlinkert/is-plain-object/blob/master/is-plain-object.js
function isPlainObject(data: unknown): boolean {
  return Object.prototype.toString.call(data) === "[object Object]";
}

isPlainObject(new Date());
isPlainObject(/\d/);

console.log(isPlainObject(Object.create({})));
console.log(isPlainObject(Object.create(Object.prototype)));
console.log(isPlainObject({ foo: "bar" }));
console.log(isPlainObject({}));
console.log(isPlainObject(Object.create(null)));

function Foo(this: any): any {
  this.abc = {};
}

console.log(isPlainObject(/foo/));
console.log(isPlainObject(function () {}));
console.log(isPlainObject(1));
console.log(isPlainObject(["foo", "bar"]));
console.log(isPlainObject([]));
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
console.log(isPlainObject(new (Foo as any)()));
console.log(isPlainObject(null));
