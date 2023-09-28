// 思路 delay 不要跟函数绑定，单纯用来阻塞时间
// 持续执行通过 循环也可以实现，不一定非要进行递归
// 这个就像任务队列的模板了
const traffic = document.getElementById("traffic");

function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}
function setState(state) {
  traffic.className = state;
}
async function run() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    setState("wait");
    await delay(1000);
    setState("stop");
    await delay(3000);
    setState("pass");
    await delay(5000);
  }
}

run();
