/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-explicit-any */

// 基本上所有数组方法内部都会有稀疏的判断，由于flat 的特殊性，反而会把空槽删除掉
function flat(array: any[], depth: number = 1): any[] {
  const len = array.length;
  let res: any[] = [];
  for (let i = 0; i < len; i++) {
    if (i in array) {
      if (Array.isArray(array[i]) && depth > 0) {
        res = res.concat(flat(array[i] as any[], depth - 1));
      } else {
        res.push(array[i]);
      }
    }
  }
  return res;
}
flat([12, 3, 4, 5], Infinity);
export {};
