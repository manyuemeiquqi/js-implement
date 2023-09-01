function memoizeWith(fn: (...args: unknown[]) => unknown) {
  const map = new WeakMap();
  return function (this: unknown, ...args: unknown[]): unknown {
    if (map.has(args)) {
      console.log("args: ", args);
      return map.get(args) as unknown;
    } else {
      const res = fn.apply(this, args);
      return map.set(args, res);
    }
  };
}
// const withAge = memoizeWith(
//   (o: any) => `${o.birth}/${o.death}`,
//   ({ birth, death }) => {
//     console.log(`computing age for ${birth}/${death}`);
//     return { birth, death, age: death - birth };
//   },
// );

// withAge({ birth: 1921, death: 1999 });

// withAge({ birth: 1921, death: 1999 });
// //=> {birth: 1921, death: 1999, age: 78} (returned from cache)

const f = (a: unknown) => {
  console.log(a);
};

const f1 = memoizeWith(f);
console.log("f1: ", f1(1));
console.log("f1: ", f1(1));
console.log("f1: ", f1({ name: "jinp" }));
console.log("f1: ", f1({ name: "jinp" }));
