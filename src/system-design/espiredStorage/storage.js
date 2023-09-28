class ExpiredStorage {
  constructor(storage) {
    this._storage = storage || localStorage;
    this._expiration_key_prefix = "__expired_storage_ts__";
  }

  getTimestamp() {
    return new Date().getTime();
  }
  getExpirationKey(key) {
    return this._expiration_key_prefix + key;
  }
  isExpired(key) {
    const expiredKey = this.getExpirationKey(key);
    const timestamp = this._storage.getItem(expiredKey);
    if (timestamp) {
      return timestamp - this.getTimestamp() <= 0;
    }
    return false;
  }
  getItem(key) {
    if (this.isExpired(key)) {
      this.removeItem(key);
      return null;
    }
    return this._storage.getItem(key);
  }

  setItem(key, value, expiration) {
    const ret = this._storage.setItem(key, value);
    if (expiration) {
      this._storage.setItem(
        this.getExpirationKey(key),
        this.getTimestamp() + expiration,
      );
    }
    return ret;
  }
  removeItem(key) {
    const ret = this._storage.removeItem(key);
    this._storage.removeItem(this.getExpirationKey(key));
    return ret;
  }
  clear() {
    this._storage.clear();
  }
}
const storageManager = new ExpiredStorage(localStorage);
console.log("storageManager: ", storageManager);
// export {}
