/* eslint-disable @typescript-eslint/no-unsafe-return */
function myReject(reason: unknown) {
  return new Promise((resolve, reject) => reject(reason));
}

myReject(new Error("错误")).then(
  () => {
    // 不会被调用
  },
  (error) => {
    console.error(error); // Stacktrace
    return error;
  },
);
