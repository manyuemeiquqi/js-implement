function createArr<T>(length: number, num: T): T[] {
  return new Array(length).fill(num) as T[];
}
function createArr1<T>(length: number, num: T): T[] {
  return Array.from({ length }, () => num);
}

function createArr3<T>(length: number, num: T): T[] {
  const res = [];
  while (length-- != 0) {
    res.push(num);
  }
  return res;
}

const a = Array.of(1, 1, 1, 1);

const b = [1, 1, 1, 1];

// 错误方法 map 跳过为分配值的索引

//https://stackoverflow.com/questions/20333654/array-map-doesnt-seem-to-work-on-uninitialized-arrays
function createArr2<T>(length: number, num: T): T[] {
  return new Array(length).map(() => num);
}

console.log("b: ", a, b);
console.log("createArr: ", createArr(4, 1));
console.log("createArr1: ", createArr1(4, 1));
console.log("createArr2: ", createArr2(4, 1));
console.log("createArr3: ", createArr3(4, 1));

export {};
