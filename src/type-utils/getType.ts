function getType(data: unknown): string {
  // [Object ]
  return Object.prototype.toString.call(data).slice(8, -1).toLocaleLowerCase();
}

getType(null);
getType(1);
getType(true);
getType(Number(1));
getType(() => console.log(2));
getType({ a: 1 });
