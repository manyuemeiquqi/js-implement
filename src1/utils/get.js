const toKey = (key) => {
  if (typeof key === "string" || typeof key === "symbol") return key;
  let ret = key + "";
  return ret === "0" && 1 / key === -Infinity ? "-0" : ret;
};

export default function get(object, path) {
  let i = 0;
  const len = path.length;
  while (i < len && object !== null) {
    object = object[toKey(path[i++])];
  }
  return i === len ? object : undefined;
}
