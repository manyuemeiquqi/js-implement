const cloneDeep = (target, map = {}) => {
  const type = typeof target;
  if (type !== "object" || target === null) return target;
  else {
    let ret;
    if (Array.isArray(target)) {
      ret = [];
    } else {
      ret = {};
    }
    const keys = Object.keys(target);
    for (let i = 0; i < keys; i++) {
      const key = keys[i];
      ret[key] = target[key];
    }
    return ret;
  }
};
