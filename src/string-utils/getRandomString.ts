function getRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const res = [];

  for (let i = 0; i < length; i++) {
    res.push(characters[(Math.random() * characters.length) >> 0]);
  }
  //   += 拼接字符串涉及对象的构建以及字符串的拼接，时间效率比开新空间要高
  console.log("str: ", res);
  return res.join("");
}

getRandomString(50);
