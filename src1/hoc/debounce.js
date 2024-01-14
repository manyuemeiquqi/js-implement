function debounce(fn, timeout, immediate) {
  let timer;
  let called = false;
  let ret;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (immediate) {
      if (!called) {
        called = true;
        ret = fn.apply(this, args);
        setTimeout(() => {
          called = false;
          timeout = null;
        }, timeout);
      }
      return ret;
    } else {
      timer = setTimeout(() => {
        ret = fn.apply(this, args);
        timeout = null;
      }, timeout);
      return ret;
    }
  };
}

let counter = 0;
const debouncedIncr = debounce(
  function () {
    counter++;
    if (counter < 10) debouncedIncr();
  },
  32,
  true,
);
debouncedIncr();
console.log(counter, 1, "incr was called immediately");
setTimeout(function () {
  console.log(counter, 1, "incr was debounced");
}, 96);
