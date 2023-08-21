function getMax<T extends number[]>(arr: T): T[number] {
  return Math.max(...arr);
}

function getMax1<T extends number[]>(arr: T): T[number] {
  return [...arr].sort((a, b) => b - a)[0];
}

const a = [1, 2];
console.log(getMax(a));
console.log(getMax1(a));
console.log(" a: ", a);

export {};
