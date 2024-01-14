let middleware = [];
middleware.push((next) => {
  console.log(1);
  next();
  console.log(1.1);
});
middleware.push((next) => {
  console.log(2);
  next();
  console.log(2.1);
});
middleware.push((next) => {
  console.log(3);
  next();
  console.log(3.1);
});

function composeMiddleware(list, innerExecute) {
  const ret = list.reduceRight((prev, cur) => {
    return () => {
      cur(prev);
    };
  }, innerExecute);

  return ret;
}

const fn1 = composeMiddleware(middleware, () => {
  console.log("start");
});

fn1();
function execute(list) {
  let i = 0;
  const run = () => {
    while (i < list.length) {
      const cur = list[i];
      i++;
      cur(run);
    }
  };
  run();
}
execute(middleware);
