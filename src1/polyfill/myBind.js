function myBind(fn, that) {
  var args = Array.prototype.slice.call(arguments, 2);
  var boundFunction = function () {
    var completeArgs = args.concat(Array.prototype.slice.call(arguments));
    return fn.apply(this instanceof boundFunction ? this : that, completeArgs);
    // return fn.apply(new.target ? this : that, completeArgs);
  };

  if (
    fn.prototype &&
    Object.prototype.toString.call(fn.prototype) === "[object Object]"
  )
    boundFunction.prototype = fn.prototype;
  return boundFunction;
}
