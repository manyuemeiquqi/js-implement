function template(str, data) {
  function findPlaceHolder(template) {
    const ret = [];

    const reg = /{{(.+?)}}/gs;
    let searchRes;
    while ((searchRes = reg.exec(template)) !== null) {
      ret.push({
        placeHolder: searchRes[1].trim(),
        match: searchRes[0],
      });
    }
    // 如果紧跟在任何量词 *、 +、? 或 {} 的后面，将会使量词变为非贪婪（匹配尽量少的字符），和缺省使用的贪婪模式（匹配尽可能多的字符）正好相反。例如，对 "123abc" 使用 /\d+/ 将会匹配 "123"，而使用 /\d+?/ 则只会匹配到 "1"。

    return ret;
  }
  function searchValue(val, key) {
    const curKey = key.shift();
    const getRes = Reflect.get(val, curKey);
    if (key.length === 0) return getRes;
    return searchValue(getRes, key);
  }

  const placeHolderArr = findPlaceHolder(str);
  let ret = str;
  console.log("str: ", str);

  for (const placeHolderData of placeHolderArr) {
    const { match, placeHolder } = placeHolderData;
    const start = ret.indexOf(match);
    const end = start + match.length - 1;
    ret =
      ret.slice(0, start) +
      (searchValue(data, placeHolder.split(".")) || eval(placeHolder)) +
      ret.slice(end + 1);
  }
  return ret;
}
// with 并不被 浏览器推荐了 接近于弃用

var tpl = template("<p>hey there {{ user.name }}++{{ name }}</p>", {
  name: "Neo",
  user: {
    name: "jinp",
  },
});
console.log("tpl: ", tpl);
