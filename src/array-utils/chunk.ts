function chunk(arr: unknown[], size?: number) {
  if (size == undefined || size <= 0) return [];
  const res = [];
  for (let i = 0; i < arr.length; ) {
    let j = 1;
    const tmp = [];
    while (i < arr.length && j <= size) {
      tmp.push(arr[i]);
      i++;
      j++;
    }
    res.push(tmp);
  }
  return res;
}
chunk([1, 2, 3], 2);
