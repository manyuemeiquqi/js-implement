function toNumber(data: string): number {
  return +data;
}

function toNumber1(data: string): number {
  return Number(data);
}

function toIntNumber(data: string): number {
  return ~~data;
}

function toIntNumber1(data: string): number {
  return parseInt(data);
}
console.log(toNumber("-2.4"));
console.log(toNumber1("-2.4"));
console.log(toIntNumber("-2.4"));
console.log(toIntNumber1("-2.4"));
