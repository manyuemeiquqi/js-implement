class MyMap {
  constructor(iterator = []) {
    this._data = [];
    for (const item of iterator) {
      this.add(item);
    }
  }
  add(data) {
    if (!this.has(data)) {
      this._data.push(data);
    }
    return this;
  }
  has(data) {
    for (const iterator of this._data) {
      if (sameValueZero(data, iterator)) {
        return false;
      }
    }
    return true;
  }
  get size() {
    return this._data.length;
  }
  *[Symbol.iterator]() {
    for (const iterator of this._data) {
      yield iterator;
    }
  }
}

function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x 和 y 相等（可能是 -0 和 0）或它们都是 NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
