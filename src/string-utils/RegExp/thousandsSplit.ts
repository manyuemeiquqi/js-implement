function thousandSplit(num: string, format: string = ",") {
  let [front, end] = num.split(".");
  console.log("front, end: ", front, end);
  front = front.replace(/\B(?=((\d{3})+$))/g, format);
  if (end) {
    end = end.replace(/(?<=(^\d{3})+)\B/g, format);
    return `${front}.${end}`;
  } else {
    return front;
  }
}
// \B非单词边界
console.log('thousandSplit("2112313.123123"): ', thousandSplit("1.121"));
console.log('thousandSplit("2112313.123123"): ', thousandSplit("1.1212"));
console.log('thousandSplit("2112313.123123"): ', thousandSplit("11212.11221"));
