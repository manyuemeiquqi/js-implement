function sortArray(nums: number[]): number[] {
  function insertSort(nums: number[]) {
    const length = nums.length;
    for (let i = 1; i < length; i++) {
      const element = nums[i];
      let j = i;
      while (j > 0 && element < nums[j - 1]) {
        nums[j] = nums[--j];
      }
      if (j !== i) {
        nums[j] = element;
      }
    }
    console.log("nums: ", nums);

    return nums;
  }
  function mergeSort(nums: number[]): number[] {
    console.log("nums: ", nums);
    function merge(nums: number[], l: number, r: number) {
      if (r <= l) return;
      const mid = (l + r) >> 1;
      merge(nums, l, mid);
      merge(nums, mid + 1, r);

      let k = 0,
        i = l,
        j = mid + 1;
      const tmp = [];
      while (i <= mid && j <= r) {
        if (nums[i] <= nums[j]) tmp[k++] = nums[i++];
        else tmp[k++] = nums[j++];
      }
      while (i <= mid) {
        tmp[k++] = nums[i++];
      }
      while (j <= r) {
        tmp[k++] = nums[j++];
      }
      for (let i = l, j = 0; i < r; i++, j++) {
        nums[i] = tmp[j];
      }
    }
    merge(nums, 0, nums.length - 1);
    console.log("nums: ", nums);

    return nums;
  }
  function timSort(array: number[]): number[] {
    const length = array.length;
    const middle = Math.floor(length / 2);
    console.log("middle: ", middle);
    return length < 8
      ? insertSort(array)
      : mergeSort(
          timSort(array.slice(0, middle)).concat(timSort(array.slice(middle))),
        );
  }
  return timSort(nums);
}

// console.log(sortArray([-4, 0, 7, 4, 9, -5, -1, 0, -7, -1]));
