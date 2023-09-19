// 使用示例
function myCallback() {
  console.log("定时器回调函数");
}

accurateTimer(myCallback, 1000);

function accurateTimer(fn, timeout, ...args) {
  const now = new Date();
  function f() {
    const diff = new Date() - now;
    if (diff >= timeout) {
      fn(...args);
      return;
    } else {
      requestAnimationFrame(f);
    }
  }
  f();
}

// 提问，setTimeout 不准确，为什么 requestAnimationFrame 时间间隔比 setTimeout 的最小时间间隔大反而更加准确
