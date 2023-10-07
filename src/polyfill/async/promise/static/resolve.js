function myResolve(resolveValue) {
  function isThenable(data) {
    return data.then && typeof data.then === "function";
  }

  return new Promise((resolve) => {
    resolve(resolveValue);
  });
}
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // The thenable is fulfilled with another thenable
      then(onFulfilled, onRejected) {
        onFulfilled({
          // The thenable is fulfilled with another thenable
          then(onFulfilled, onRejected) {
            onFulfilled(42);
          },
        });
      },
    });
  },
};

myResolve(thenable).then((res) => {
  console.log("res: ", res);
});
// 开始写了一个递归调用的resolve 版本，实际上需要么， resolve内部以及对 thenable 的value 进行了处理，实际上直接resolve既可以
