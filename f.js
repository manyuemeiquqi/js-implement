const { apply } = require("ramda");

var name = "window";
function Person(name) {
  this.name = name;
  (this.foo1 = function () {
    console.log(this.name);
  }),
    (this.foo2 = () => console.log(this.name)),
    (this.foo3 = function () {
      return function () {
        console.log(this.name);
      };
    }),
    (this.foo4 = function () {
      return () => {
        console.log(this.name);
      };
    });
}
var person1 = new Person("person1");
var person2 = new Person("person2");

// object.create
// new

// call

// apply
// bind

function myNew(fn, ...params) {
  const ret = {
    __proto__: fn.prototype,
  };
  fn.apply(ret, params);
  return ret;
}

function myCreate() {}
