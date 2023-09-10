function uniq(arr) {
  return [...new Set(arr)];
}
console.log("uniq([1, 2, 5, 3, 4, 4]): ", uniq([1, 2, 5, 3, 4, 4]));

function uniq1(arr) {
  return arr.filter((item, i) => arr.indexOf(item) === i);
}
console.log("uniq([1, 2, 5, 3, 4, 4]): ", uniq1([1, 2, 5, 3, 4, 4]));
