const arr: number[] = [1, 2, 3];
function proxyArray<T>(arr: T[]) {
  return new Proxy(arr, {
    get(data, property: string): T {
      if (+property < 0) {
        const tailIdx = data.length + +property;
        return data[tailIdx];
      } else return data[+property];
    },
  });
}

const proxyArr = proxyArray(arr);
console.log(proxyArr[-1]);
console.log(proxyArr[0]);
