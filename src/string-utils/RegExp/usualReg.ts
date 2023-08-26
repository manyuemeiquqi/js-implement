function isValidColor(str: string): boolean {
  const res = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/g.test(str);
  return res;
}
isValidColor("#43333333");
isValidColor("#333");
isValidColor("#4333");

// 11位 对前两位限制下
function isValidPhoneNumber(str: string): boolean {
  const res = /^1[3456789]\d{9}$/.test(str);
  console.log("res: ", res);
  return res;
}
isValidPhoneNumber("138778113406");

// 顶级域名  域内部分 + @ 加 大小写不敏感的 域名  域内部分为 ASCII字符

function isValidMail(str: string): boolean {
  const res = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str);
  console.log("res: ", res);
  return res;
}
isValidMail("940495614@qq.com");
