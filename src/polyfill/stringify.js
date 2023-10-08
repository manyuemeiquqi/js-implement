// https://github.com/qianlongo/fe-handwriting/blob/master/50.JSON.stringify.js
// https://stackoverflow.com/questions/22333101/recursive-json-stringify-implementation

function myStringify(json) {
  if (typeof json !== "object" || json === null) {
    return json.toString();
  } else {
    if (Array.isArray(json)) {
      const tmp = [];
      for (const item of json) {
        tmp.push(myStringify(item));
      }
      return "[" + tmp.join(",") + "]";
    } else {
      const tmp = [];
      for (const key of Reflect.ownKeys(json)) {
        tmp.push(`"${key}":${myStringify(json[key])}`);
      }
      return "{" + tmp.join(",") + "}";
    }
  }
}

console.log("JSON.stringify([1, 2, 3]): ", JSON.stringify({ name: 1, age: 2 }));
console.log(myStringify([1, 2, 3]));
console.log(myStringify({ name: 1, age: 2 }));

// console.log(myStringify(undefined));
console.log(myStringify(() => {}));
// console.log(myStringify(Symbol("前端胖头鱼")));
// console.log(myStringify(NaN));
// console.log(myStringify(Infinity));
// console.log(myStringify(null));
console.log(
  myStringify({
    name: "前端胖头鱼",
    toJSON() {
      return {
        name: "前端胖头鱼2",
        sex: "boy",
      };
    },
  }),
);

console.log(
  JSON.stringify({
    name: "前端胖头鱼",
    toJSON() {
      return {
        name: "前端胖头鱼2",
        sex: "boy",
      };
    },
  }),
);
