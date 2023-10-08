// Promise.retry = function (promiseFn, times = 3) {
//   return new Promise(async (resolve, reject) => {
//     // 重试次数
//     while (times--) {
//       try {
//         let ret = await promiseFn()
//         // 执行成功直接返回
//         resolve(ret)
//         break
//       } catch (error) {
//         // 重试机会
//         console.log(`还剩${times}`)
//         if (!times) {
//           // 重试结束，抛出错误
//           reject(error)
//         }
//       }
//     }
//   })
// }
// 也可以不需要构造闭包 ，直接写一个循环去run
function retry(p, count) {
  function a() {
    return Promise.resolve(p()).then(
      (ret) => {
        return ret;
      },
      (reason) => {
        console.log("count: ", count);
        if (count === 0) throw reason;
        else {
          count--;
          return a();
        }
      },
    );
  }
  return a;
}
let a = 5;

const p = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      a--;
      console.log("a: ", a);
      if (a === 0) resolve(1);
      else reject(2);
    }, 1000);
  });
const b = retry(p, 2);
b()
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((e) => {
    console.log("eeeee: ", e);
  });
