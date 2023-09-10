function formatDate(date, format) {
  const pad = (n) => (n < 10 ? "0" + n : n);
  const dateDict = {
    YYYY: date.getFullYear(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds()),
  };

  return format.replace(
    /(YYYY|MM|DD|HH|mm|ss)/g,
    (matched) => dateDict[matched],
  );
}
const date = new Date();

console.log(formatDate(date, "YYYY-MM-DD")); // 输出形如 '2023-09-08' 的日期
console.log(formatDate(date, "YYYY/MM/DD HH:mm:ss")); // 输出形如 '2023/09/08 17:20:04'
