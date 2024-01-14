// A=[111 000 1111 0]

// 2
// 6

// A = [00 11 00 111 0 11 000 1111]

const longestOnes = (nums, k) => {
  let ret = 0;
  const numsList = Array.from({ length: nums.length }, () =>
    new Array(nums.length).fill(0),
  );
  for (let i = 0; i < numsList.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      numsList[i][j] = nums[j];
    }
  }
  for (let i = 0; i < numsList.length; i++) {
    for (let j = i, rest = k; j < nums.length; j++) {
      if (rest === 0) break;
      const cur = numsList[i][j];
      if (cur === 1) {
        continue;
      } else {
        rest--;
        numsList[i][j] = 1;
      }
    }
  }

  const getLongOne = (arr) => {
    let ret = 0;
    let i = 0;
    let tmp = 0;

    while (i < arr.length) {
      if (arr[i] === 1) {
        tmp++;
      } else {
        if (tmp) {
          ret = Math.max(ret, tmp);
        }
        tmp = 0;
      }
      i++;
    }
    ret = Math.max(ret, tmp);
    return ret;
  };

  for (let i = 0; i < numsList.length; i++) {
    ret = Math.max(getLongOne(numsList[i]), ret);
  }
  console.log(ret);
  return ret;
};

longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);

// const getLongOne = (arr) => {
//   let ret = 0;
//   let i = 0;
//   let tmp = 0;

//   while (i < arr.length) {
//     if (arr[i] === 1) {
//       tmp++;
//       ret = Math.max(ret, tmp);
//     } else {
//       ret = Math.max(ret, tmp);
//       tmp = 0;
//     }
//     i++;
//   }
//   ret = Math.max(ret, tmp);
//   return ret;
// };
// getLongOne([1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0]);
