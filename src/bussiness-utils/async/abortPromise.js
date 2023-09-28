const abort = new AbortController();

const abortP = function (timeout, signal) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      resolve();
    }, timeout);
    signal.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new Error("Promise aborted"));
    });
  });
};
const a = abort(4000, abort.signal);
