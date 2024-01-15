// function myApply(fn, that, arr) {
//   var uniqId = Symbol("uniq");
//   that[uniqId] = fn;
//   var args = [];
//   for (var i = 0; i < arr.length; i++) {
//     console.log("i: ", i);
//     args.push("arr[" + i + "]");
//   }
//   console.log("arr: ", arr);

//   console.log("args: ", args);

//   var ret = eval("that[uniqId](" + args + ")");
//   delete that[uniqId];
//   return ret;
// }
// // myApply();
// const array = ["a", "b"];
// const elements = [0, 1, 2];
// myApply(array.push, array, elements);

// console.log("array: ", array);

function myCall(fn, that, ...args) {
  // var uniq = Symbol("call");
  // that[uniq] = fn;
  var idx = 0;
  var uniq = "uniq" + idx;
  while (Object.hasOwn(that, uniq)) {
    uniq = "uniq" + ++idx;
  }
  that[uniq] = fn;
  var list = args.map((item, index) => "args[" + index + "]");
  var ret = eval("that[uniq](" + list + ")");
  delete that[uniq];
  return ret;
}
const f = function (sex) {
  console.log(this.name);
  console.log(this.age);
  console.log(sex);
};
const obj = {
  name: "jinp  ",
  age: 24,
};
myCall(f, obj, "boy");

console.log(obj);
