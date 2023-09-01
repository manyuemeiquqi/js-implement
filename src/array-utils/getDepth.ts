function getDepth(data: unknown): number {
  let dep = 1;
  if (data instanceof Array) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] instanceof Array) {
        dep = Math.max(dep, getDepth(data[i] as unknown[]) + 1);
      }
    }
  }
  return dep;
}

const a1 = [1, undefined, [null, { name: 1 }], 2, [1], [1, [2, 3]]];
getDepth(a1);
console.log("getDepth(a1): ", getDepth(a1));
