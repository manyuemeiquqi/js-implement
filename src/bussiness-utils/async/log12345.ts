/* eslint-disable no-var */
// for (let i = 0; i < 5; i++) {
//   setTimeout(
//     () => {
//       console.log(i + 1);
//     },
//     1000 * (i + 1),
//   );
// }
// 同步的思维执行异步

// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
//   //   这里第二个i 12345
//   // 第一个队列塞完后，i在取值，取得直接是循环终止条件6
// }

// 利用 setTimeout param参数
// for (var i = 1; i <= 5; i++) {
//   setTimeout(
//     (i: number) => {
//       console.log(i);
//     },
//     1000 * i,
//     i,
//   );
// }

// 制造一个iife，然后利用闭包传入
// for (var i = 1; i <= 5; i++) {
//   ((num: unknown) =>
//     setTimeout(() => {
//       console.log(num);
//     }, 1000 * i))(i);
// }
async function main() {
  for await (const iterator of [1, 2, 3, 4, 5].map(
    (item) =>
      new Promise<number>((resolve) => {
        resolve(item);
      }),
  )) {
    setTimeout(() => {
      console.log(iterator);
    }, iterator * 1000);
  }
}
main().catch(() => {});
export {};
