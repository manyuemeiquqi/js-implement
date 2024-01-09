import assert from "assert";
import get from "../src1/utils/get.js";
describe("get", function () {
  describe("#get", function () {
    it("get string keyed property values", function () {
      assert.equal(get({ a: 1 }, ["a"]), 1);
    });

    // [-0, Object(-0), 0, Object(0)]
    it("保留 0 的符号", function () {
      assert.equal(get({ "-0": "a", 0: "b" }, ["-0"]), "a");
      assert.equal(get({ "-0": "a", 0: "b" }, ["0"]), "b");
      assert.equal(get({ "-0": "a", 0: "b" }, [Object(0)]), "b");
      assert.equal(get({ "-0": "a", 0: "b" }, [Object(-0)]), "a");
    });

    it("symbol", function () {
      var object = {};
      const symbol = Symbol("mySymbol");
      object[symbol] = 1;
      assert.equal(get(object, [symbol]), 1);
    });

    it("deep property values", function () {
      var object = { a: { b: 2 } };
      assert.equal(get(object, ["a", "b"]), 2);
    });

    it("a key over a path", function () {
      var object = { "a.b": 1, a: { b: 2 } };
      assert.equal(get(object, ["a.b"]), 1);
    });

    it("not coerce array paths to strings", function () {
      var object = { "a,b,c": 3, a: { b: { c: 4 } } };
      assert.equal(get(object, ["a", "b", "c"]), 4);
    });

    it("not coerce array paths to strings", function () {
      var object = { a: { "": 1 } };
      assert.equal(get(object, ["a,''"]), undefined);
    });
  });
});
