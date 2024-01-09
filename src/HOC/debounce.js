function debounce(fn, timeout) {
  let timer;
  return function (...arr) {
    if (!timer) clearTimeout(timer);
    timeout = setTimeout(() => {
      fn(...arr);
    }, timeout);
  };
}

const onClick = function (e) {
  console.log(this.e);
};

const debouncedClick = debounce(onClick, 500);

function debounce(inner, ms = 0) {
  let timer = null;
  let resolves = [];

  return function (...args) {
    // Run the function after a certain amount of time
    clearTimeout(timer);
    timer = setTimeout(() => {
      // Get the result of the inner function, then apply it to the resolve function of
      // each promise that has been created since the last time the inner function was run
      let result = inner(...args);
      resolves.forEach((r) => r(result));
      resolves = [];
    }, ms);

    return new Promise((r) => resolves.push(r));
  };
}

//   节流
