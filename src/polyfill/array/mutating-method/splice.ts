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
  const insertItems = Array.from(args);
  const insertCount = insertItems.length;
  const removeItems: T[] = [];
  removeItems.length = deleteCount;
  const len = array.length;
  for (let i = 0; i < deleteCount; i++) {
    const idx = i + start;
    if (idx in array) removeItems[i] = array[idx];
  }
  if (deleteCount > insertCount) {
    // 后半部分左移
    for (let i = start; i < len - deleteCount; i++) {
      const from = i + deleteCount;
      const to = i + insertCount;
      if (from in array) {
        array[to] = array[from];
      } else {
        Reflect.deleteProperty(array, to);
      }
    }
    array.length = len - deleteCount + insertCount;
  } else if (deleteCount < insertCount) {
    // 后半部分右移

    for (let i = len - deleteCount; i > start; i--) {
      const from = i + deleteCount - 1;
      const to = i + insertCount - 1;
      if (from in array) {
        array[to] = array[from];
      } else {
        Reflect.deleteProperty(array, to);
      }
    }
  }

  for (let i = 0; i < insertCount; i++) {
    array[start + i] = insertItems[i];
  }
  return removeItems;
}

export {};
