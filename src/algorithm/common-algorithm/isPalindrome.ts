function isPalindrome(data: string): boolean {
  let i = 0;
  let j = data.length - 1;
  while (i <= j) {
    if (!/[a-zA-Z\d]/.test(data[i])) {
      i++;
      continue;
    }
    if (!/[a-zA-Z\d]/.test(data[j])) {
      j--;
      continue;
    }
    if (data[i].toLocaleLowerCase() == data[j].toLocaleLowerCase()) {
      i++;
      j--;
    } else return false;
  }
  return true;
}

console.log(isPalindrome("nowcoder Is Best tsebsi: redoc won"));
