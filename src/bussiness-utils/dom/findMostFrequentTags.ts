function findMostFrequentTags() {
  const countMap: Record<string, number> = {};
  const domArr = document.querySelectorAll("*");
  for (let i = 0; i < domArr.length; i++) {
    countMap[domArr[i].tagName] = countMap[domArr[i].tagName] || 0;
    countMap[domArr[i].tagName]++;
  }
  const res = Object.entries(countMap).sort((a, b) => b[1] - a[1]);

  return res;
}

findMostFrequentTags();
