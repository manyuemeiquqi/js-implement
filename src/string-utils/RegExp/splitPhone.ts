function splitPhone(phoneNumber: string, splitStr: string = "-"): string {
  let res = "";
  //   match 并不适合捕获组,用 replace 或者 exec
  res = phoneNumber.replace(
    /(\d{3})(\d{4})(\d{4})/g,
    `$1${splitStr}$2${splitStr}$3`,
  );
  return res;
}
console.log('splitPhone("13777813406", ","): ', splitPhone("13777813406", ","));

// 适合纯11位手机
// 正向断言 这里找的是每四个位置前面的空位置
const splitMobile = (mobile: string, format = "-") => {
  return String(mobile).replace(/(?=(\d{4})+$)/g, format);
};
// 适合11位以内的分割
// 后行断言，这里一个找从前开始第三个位置空白，再找第八个位置空白（算上了分隔符）
const splitMobile2 = (mobile: string, format = "-") => {
  return String(mobile)
    .replace(/(?<=(\d{3}))/, format)
    .replace(/(?<=([\d\\-]{8}))/, format);
};

console.log(splitMobile("18379802267"));
console.log(splitMobile2("1837987654"));
