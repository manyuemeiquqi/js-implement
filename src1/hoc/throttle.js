function throttle(fn, timeout) {
  let prevTime = performance.now();
  return function (...args) {
    if (performance.now() - prevTime >= timeout) {
    }
  };
}
