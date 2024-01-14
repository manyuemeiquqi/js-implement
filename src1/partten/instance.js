let instance;
class Func {
  constructor() {
    if (instance) {
      throw new Error("have instance");
    } else {
      instance = this;
    }
  }
  getInstance() {
    return this;
  }
}

const singletonFunc = Object.freeze(new Func());
