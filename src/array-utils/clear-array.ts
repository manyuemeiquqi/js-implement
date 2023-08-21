const arr = [1, 2, 3];
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

arr.length = 0;

arr1.splice(0, arr1.length);

while (arr2.length) arr2.pop();

function clearArr(arr: unknown[]): void {
  arr.length = 0;
}

function clearArr1(arr: unknown[]): void {
  arr.splice(0, arr.length);
}

function clearArr2(arr: unknown[]): void {
  while (arr.length > 0) arr.pop();
}

console.log(clearArr(arr));
console.log(clearArr1(arr));
console.log(clearArr2(arr));

export {};
