const setValue = (list, obj, value) => {
  let i = 0;
  while (i < list.length - 1) {
    if ([null, undefined].includes(obj[list[i]])) {
      obj[list[i]] = {};
    }
    obj = obj[list[i]];
    i++;
  }
  obj[list[list.length - 1]] = value;
};

const generate = (data) => {
  const ret = {};
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    setValue(keys[i].split("."), ret, data[keys[i]]);
  }
  return ret;
};

const data1 = { "a.b.c": 1, "a.b.d": 2 };
const data2 = { "a.b.e": 3, "a.b.f": 4 };
// const tmp1 = generate({ "A.B.C": 1, "A.B.D": 2 });
const tmp1 = generate({ ...data1, ...data2 });
console.log(tmp1);
