/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-explicit-any */
function mySplice<T>(
  array: T[],
  start: number,
  deleteCount: number = array.length,
  ...args: any[]
): T[] {
  const items = Array.from(args);
  const removeItems: T[] = [];
  removeItems.length = deleteCount;
  const len = array.length;
  for (let i = 0; i < deleteCount; i++) {
    const idx = i + start;
    if (idx in array) removeItems[i] = array[idx];
  }
  if (removeItems.length > items.length) {
    for (let i = 0; i < items.length; i++) {
      array[start + i] = items[i];
    }
  } else {
        
  }
  return removeItems;
}
const myFish: (string | undefined)[] = ["angel", "clown", , "sturgeon"];
const removed = mySplice(myFish, 2, 1);
console.log("removed: ", removed.length);
console.log("removed: ", removed);
export {};
