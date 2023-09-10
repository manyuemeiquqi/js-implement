/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
function hasCycle(data: unknown, map = new Set()) {
  if (data === null || typeof data !== "object") return false;
  if (map.has(data)) return true;

  map.add(data);
  for (const key in data) {
    if (Object.hasOwn(data, key)) {
      if (hasCycle((data as Record<string, unknown>)[key], map)) {
        return true;
      }
    }
  }
  map.delete(data);

  return false;
}

const obj1: any = {};
const obj2: any = {};
const obj3: any = {};

obj1.obj2 = obj2;
obj2.obj3 = obj3;
obj3.obj1 = obj1;

console.log(hasCycle(obj1)); // 输出: true

const arr1: any[] = [];
const arr2: any[] = [];

arr1.push(arr2);
arr2.push(arr1);

console.log(hasCycle(arr1)); // 输出: true

const obj4 = { prop1: "value1", prop2: "value2" };
console.log(hasCycle(obj4)); // 输出: false
