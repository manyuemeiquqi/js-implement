const quickSort = (arr, l, r) => {
  const mid = arr[(l + r) >> 1];
  let i = l - 1;
  let j = r + 1;
  while (i < j) {
    do {
      i++;
    } while (arr[i] < mid);
    do {
      j--;
    } while (arr[j] > mid);
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  quickSort(arr, l, mid);
  quickSort(arr, mid + 1, r);
};
