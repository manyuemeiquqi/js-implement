// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../index.d.ts" />

// 易错点 1、过长char 需要截取 2、是从左往右依次填入

// https://github.dev/zloirock/core-js/tree/master/packages  corejs 实现

String.prototype.myPadStart = function (length: number, char: string) {
  const fillLen = length - this.length;
  let stringFiller = char.repeat(Math.ceil(fillLen / char.length));
  if (stringFiller.length > fillLen) {
    stringFiller = stringFiller.slice(0, fillLen);
  }
  return stringFiller + (this as string);
};

const str1 = "5";

console.log(str1.padStart(14, "01234"));
// Expected output: "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// Expected output: "************5581"

export {};
