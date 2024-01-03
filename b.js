function min_e(b, H) {
  let l = 1;
  let r = Math.max(...b);

  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (b.map((i) => Math.ceil(i / m)).reduce((a, b) => a + b, 0) > H) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  if (b.map((i) => Math.ceil(i / l)).reduce((a, b) => a + b, 0) > H) {
    return -1;
  }

  return l;
}

let b = [
  /* input your list of integers here */
];
let H = 8;
console.log(min_e([30, 12, 25, 8, 19], H));
