function ListNode(key, val) {
  this.val = val === undefined ? 0 : val;
  this.key = key;
  this.prev = null;
  this.next = null;
}
const LRUCache = function (capacity) {
  this.head = new ListNode(-1, -1);
  this.tail = new ListNode(-2, -2);
  this.head.next = this.tail;
  this.tail.prev = this.head;

  this.capacity = capacity;
  this.count = 0;
  this.map = {};
};
LRUCache.prototype.insert = function (node) {
  node.next = this.head.next;
  node.prev = this.head;
  this.head.next.prev = node;
  this.head.next = node;
};

LRUCache.prototype.remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (Object.hasOwn(this.map, key)) {
    const node = this.map[key];
    this.remove(node);
    this.insert(node);
    return node.val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = new ListNode(key, value);
  if (Object.hasOwn(this.map, key)) {
    this.remove(this.map[key]);
    this.count--;
  }
  if (this.count === this.capacity) {
    const deleteNode = this.tail.prev;
    Reflect.deleteProperty(this.map, deleteNode.key);
    this.remove(deleteNode);
    this.count--;
  }
  this.map[key] = node;
  this.insert(node);
  this.count++;
};

// lc 146. LRU 缓存
//
