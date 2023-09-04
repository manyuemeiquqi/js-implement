function myInstanceof(someObject, fn) {
  // 这里是为了排除三条case
  // null instanceof Object
  // 1 instanceof Object
  // Function instanceof Object
  if (
    someObject === null ||
    !["function", "object"].includes(typeof someObject)
  )
    return false;
  while (
    Object.getPrototypeOf(someObject) !== null &&
    Object.getPrototypeOf(someObject) !== fn.prototype
  ) {
    someObject = Object.getPrototypeOf(someObject);
  }
  return (
    Object.getPrototypeOf(someObject) !== null &&
    Object.getPrototypeOf(someObject) === fn.prototype
  );
}

// 定义构造函数

console.log(myInstanceof(Function, Object));
console.log(myInstanceof(Function.prototype, Object));
console.log(myInstanceof("1", Object));
