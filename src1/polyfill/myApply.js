function myApply(fn, that, arr) {
  var uniqId = Symbol("uniq");
  that[uniqId] = fn;
  var args = [];
  for (var i = 0; i < arr.length; i++) {
    console.log("i: ", i);
    args.push("arr[" + i + "]");
  }
  console.log("arr: ", arr);

  console.log("args: ", args);

  var ret = eval("that[uniqId](" + args + ")");
  delete that[uniqId];
  return ret;
}
// myApply();
const array = ["a", "b"];
const elements = [0, 1, 2];
myApply(array.push, array, elements);

console.log("array: ", array);
