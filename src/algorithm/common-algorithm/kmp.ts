//    kmp 算法跳过逻辑 哪里失配了，选取失配位置前一个位置 j-1 让 next[j-1] 对准失配位置
// https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/732236/shi-xian-strstr-by-leetcode-solution-ds6y/
// 官方题解比较晦涩难懂，需要理解
// https://www.zhihu.com/question/21923021
function kmp(str: string, p: string) {
  const patternLen = p.length;
  const next: number[] = new Array(patternLen).fill(0) as number[];
  for (let i = 1, j = 0; i < patternLen; i++) {
    while (j > 0 && p[i] !== p[j]) {
      j = next[j - 1];
    }
    if (p[i] == p[j]) {
      j++;
    }
    next[i] = j;
  }
  console.log("next: ", next);

  for (let i = 0; i <= str.length - patternLen; ) {
    const searchLen = findMaxEqual(str.slice(i), p);
    if (searchLen === patternLen) {
      return i;
    } else {
      if (searchLen > 0) i += searchLen - next[searchLen - 1];
      else i++;
    }
  }

  function findMaxEqual(a: string, b: string): number {
    let ret = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        ret++;
        if (ret === b.length) {
          break;
        }
      } else {
        break;
      }
    }
    return ret;
  }
  return -1;
}
kmp("mississippi", "adeadeade");
