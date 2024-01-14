let obj = { start: performance.now() };
setInterval(() => {
  console.log(performance.now() - obj.start, obj.start);
  const count = Math.floor(10000000000 * Math.random());
  for (let i = 0; i < count; i++) {}
  obj.start = performance.now();
}, 1000);
