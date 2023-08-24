function isPlainObject(data: unknown): boolean {
  console.log(
    "Object.toString.call(data): ",
    Object.prototype.toString.call(data),
  );

  return Object.prototype.toString.call(data) === "[object Object]";
}

isPlainObject(new Date());
isPlainObject(/\d/);
