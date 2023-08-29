function logDate(f: () => unknown) {
  return function () {
    setInterval(() => {
      f();
    }, 2000);
  };
}
logDate(() => console.log(Date.now()))();
