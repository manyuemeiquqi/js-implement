// https://github.com/hughsk/flat/blob/master/test/test.js

function flat(data, trimKey = [], ret = {}) {
  function isObject(o) {
    return typeof o === "object" && o !== null;
  }
  const keys = Reflect.ownKeys(data);
  for (const key of keys) {
    if (isObject(data[key])) {
      flat(data[key], [...trimKey, key], ret);
    } else {
      ret[[...trimKey, key].join(".")] = data[key];
    }
  }
  return ret;
}

const obj = {
  hello: {
    world: {
      again: "good morning",
    },
  },
  lorem: {
    ipsum: {
      dolor: "good evening",
    },
  },
};
console.log(flat(obj));
