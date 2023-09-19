class lazyMan {
  constructor(name) {
    this.taskQueue = [];
    const fn = () => {
      console.log("Hi! This is " + name + "!");
      this.next();
    };
    this.taskQueue.push(fn);
    setTimeout(() => {
      this.next();
    }, 0);
    return this;
  }
  sleepFirst(seconds) {
    const fn = () => {
      setTimeout(() => {
        console.log(`wake up after ${seconds} seconds`);
        this.next();
      }, seconds);
    };
    this.taskQueue.unshift(fn);
    return this;
  }
  sleep(seconds) {
    const fn = () => {
      setTimeout(() => {
        console.log(`wake up after ${seconds} seconds`);
        this.next();
      }, seconds);
    };
    this.taskQueue.push(fn);
    return this;
  }
  next() {
    const fn = this.taskQueue.shift();
    fn && fn();
  }
  eat(food) {
    const fn = () => {
      console.log("Eat " + food + "~");
      this.next();
    };
    this.taskQueue.push(fn);
    return this; // 实现链式调用
  }
}
new lazyMan("John").eat("breakfast").sleep(2000).eat("lunch");
