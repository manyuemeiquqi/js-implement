/* eslint-disable @typescript-eslint/ban-types */
function isWrapperType(data: String | Number | Boolean): boolean {
  console.log(
    '["string", "boolean", "number"].includes(typeof data): ',
    ["string", "boolean", "number"].includes(typeof data),
  );

  return ["string", "boolean", "number"].includes(typeof data);
}

isWrapperType("123");
isWrapperType(new String("123"));
isWrapperType(new Boolean("123"));
isWrapperType(true);
isWrapperType(new Number(1));
isWrapperType(1);
isWrapperType(Number("1"));

// const a = Number(1);
// a.name = "ji";
// console.log("a.name: ", a.name);
