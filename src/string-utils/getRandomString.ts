function getRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += characters[(Math.random() * characters.length) >> 0];
  }
  console.log("str: ", str);

  return str;
}

getRandomString(50);
