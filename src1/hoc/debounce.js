function debounce(fn, timeout, immediate) {
  let timer;
  return function (...args) {
    if (timeout) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, timeout);
  };
}
