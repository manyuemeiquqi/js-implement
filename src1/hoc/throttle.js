// 上锁节流
function throttle(fn, timeout, options) {
  let timer;
  return function (...args) {
    if (!timer) {
      setTimeout(() => {
        fn.apply(this, args);
      }, timeout);
    }
  };
}

function throttle1(fn, timeout) {
  let previous;
  let timer;
  return function (...args) {
    const now = performance.now();

    if (previous === undefined || now - previous > timeout) {
      fn.apply(this, args);
      previous = now;
    }
    if (previous)
      if (now - previous <= timeout) {
        const remain = timeout - (now - previous);
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        setTimeout(() => {
          fn.apply(this, args);
          timer = null;
          previous = performance.now();
        }, remain);
      }
  };
}
