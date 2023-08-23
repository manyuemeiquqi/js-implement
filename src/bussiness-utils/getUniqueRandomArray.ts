import { shuffle } from "../algorithm/shuffle";
function getUniqueRandomArray(
  length: number,
  min: number,
  max: number,
): number[] {
  let res = Array.from({ length: max - min + 1 }, (element, idx) => {
    return min + idx;
  });
  res = shuffle(res);
  res.length = length;
  return res;
}

// getUniqueRandomArray(1, 3, 19);
console.log("getUniqueRandomArray(1, 3, 19): ", getUniqueRandomArray(7, 3, 19));
