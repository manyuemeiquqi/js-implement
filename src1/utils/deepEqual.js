function isEqual(a, b, aStack, bStack) {
  let typeA = Object.prototype.toString.call(a);
  let typeB = Object.prototype.toString.call(b);
  if (typeA !== typeB) return false;
  aStack = aStack || [];
  bStack = bStack || [];

  const AItem = aStack.findLast((item) => item[0] === a);
  const BItem = bStack.findLast((item) => item[1] === b);
  if (AItem && BItem) {
    return AItem[1] === b && BItem[0] === a;
  }
  switch (typeA) {
    case "[object Error]":
      return a.name == b.name && a.message == b.message;
    case "[object Symbol]": {
      return (
        Symbol.prototype.valueOf.call(a) === Symbol.prototype.valueOf.call(b)
      );
    }
    case "[object Uint8Array]": {
      if (Buffer.isBuffer(a)) {
        if (!Buffer.isBuffer(b)) return false;
      }
      if (Buffer.isBuffer(b)) {
        if (!Buffer.isBuffer(a)) return false;
      }
    }
    case "[object Arguments]":
    case "[object Array]": {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!isEqual(a[i], b[i], [...aStack, [a, b]], [...bStack, [a, b]])) {
          return false;
        }
      }

      return true;
    }
    case "[object Object]": {
      const keysA = Reflect.ownKeys(a).filter((item) =>
        Object.prototype.propertyIsEnumerable.call(a, item),
      );

      const keysB = Reflect.ownKeys(b).filter((item) =>
        Object.prototype.propertyIsEnumerable.call(b, item),
      );

      if (keysA.length !== keysB.length) return false;

      const conA = a.constructor;
      const conB = b.constructor;
      if (
        conA &&
        Object.prototype.toString.call(conA) === "[object Object]" &&
        conA !== conB
      )
        return false;
      else {
        if (!isEqual(conA, conB, [...aStack, [a, b]], [...bStack, [a, b]]))
          return false;
      }
      for (let i = 0; i < keysA.length; i++) {
        const key = keysA[i];
        if (
          !Object.hasOwn(b, key) ||
          !isEqual(a[key], b[key], [...aStack, [a, b]], [...bStack, [a, b]])
        ) {
          return false;
        }
      }
      return true;
    }
    case "[object ArrayBuffer]":
      if (
        a.byteLength != b.byteLength ||
        !isEqual(
          new Uint8Array(a),
          new Uint8Array(b),
          [...aStack, [a, b]],
          [...bStack, [a, b]],
        )
      ) {
        return false;
      }
      return true;
    case "[object Date]":
    case "[object Boolean]":
    case "[object Number]": {
      (a = +a), (b = +b);
      return a === b || (a !== a && b !== b);
    }
    case "[object RegExp]":
    case "[object String]": {
      return a + "" === b + "";
    }
    case "[object Map]":
    case "[object Set]": {
      const toArr = (data) => {
        const ret = [];
        data.forEach((element, key) => {
          if (typeA === "[object Set]") {
            ret.push(element);
          } else {
            ret.push([key, element]);
          }
        });
        ret.sort((a, b) => {
          if (Array.isArray(a)) return a[0].charCodeAt() - b[0].charCodeAt();
          else return a.charCodeAt() - b.charCodeAt();
        })

        return ret
      };
      return isEqual(
        toArr(a),
        toArr(b),
        [...aStack, [a, b]],
        [...bStack, [a, b]],
      );
    }
    default:
      break;
  }

  return a === b;
}

var map1 = new Map(),
map2 = new Map();

  map1.set('a', 1);
  map2.set('b', 2);
  // console.log(isEqual(map1, map2), false);

  map1.set('b', 2);
  map2.set('a', 1);
  console.log(isEqual(map1, map2), true);

  // map1.delete('a');
  // map1.set('a', 1);
  // console.log(isEqual(map1, map2), true);

  // map2.delete('a');
  // console.log(isEqual(map1, map2), false);


  