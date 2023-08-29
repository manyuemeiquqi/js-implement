// Reflect.deleteProperty 对比 delete 可以处理捕获异常
function removeEmptyProperty(data: Record<string, unknown>): void {
  for (const key in data) {
    if ([null, undefined].includes(data[key] as null | undefined)) {
      Reflect.deleteProperty(data, key);
    }
  }
}

const obj = { a: null, b: "哈哈哈" };

removeEmptyProperty(obj);
console.log("obj: ", obj);
export {};
