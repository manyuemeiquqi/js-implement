// // function iteratorFn(arg) {
// //   console.log("running iteratorFn with argument " + arg);
// // }

// // console.log("executing original code");
// // const p = Promise.resolve(iteratorFn("p"));
// // console.log("p has been assigned");

// // console.log("executing customised code");
// // const q = Promise.resolve().then((res) => iteratorFn(res));
// // console.log("q has been assigned");
// // console.log("------------- end of synchronous code -----------------");

// function myCall(fn, thisArg, ...argArr) {
//   return fn.bind(thisArg, ...argArr)();
// }

// function myBind(fn, thisArg, ...argArr) {}

// function myApply(fn, thisArg, argArr) {
//   return fn.bind(thisArg, ...argArr)();
// }

// const a = () => {};
// a.call();
// a.apply();

// function consumer(fn, time) {
//   let tasks = [],
//     timer;

//   return function (...args) {
//     tasks.push(fn.bind(this, ...args));
//     if (timer == null) {
//       timer = setInterval(() => {
//         tasks.shift().call(this);
//         if (tasks.length <= 0) {
//           clearInterval(timer);
//           timer = null;
//         }
//       }, time);
//     }
//   };
// }

// function add(ref, x) {
//   const v = ref.value + x;
//   console.log(`${ref.value} + ${x} = ${v}`);
//   ref.value = v;
//   return ref;
// }

// let consumerAdd = consumer(add, 1000);

// const ref = { value: 0 };
// for (let i = 0; i < 10; i++) {
//   consumerAdd(ref, i);
// }

// 异步加法
function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b);
  }, Math.random() * 100);
}

async function total() {
  const res1 = await sum(1, 2, 3, 4, 5, 6, 4);
  const res2 = await sum(1, 2, 3, 4, 5, 6, 4);
  console.log("[res1, res2]: ", [res1, res2]);

  return [res1, res2];
}

total();

// 实现下 sum 函数。注意不能使用加法，在 sum 中借助 asyncAdd 完成加法。尽可能的优化这个方法的时间。
function sum(...args) {
  const ret = { value: 0, count: 0 };
  const taskQueue = [];

  for (let i = 0; i < args.length; i++) {
    const leaveCb = (_, tmp) => {
      ret.value = tmp;
      ret.count++;
      console.log("count: ", count);
    };
    taskQueue.push(
      Promise.resolve().then(() => asyncAdd(ret.value, args[i], leaveCb)),
    );
  }
  return new Promise((resolve) => {
    while (ret.count !== taskQueue.length) {}
    resolve(ret.value);
  });
}
