// 示例中间件函数

// 执行中间件洋葱模型
// 中间件的关键点，传入的 next 不仅要是第二个函数，而且要让第二个函数执行

class Middleware {
  constructor() {
    this.middlewareStack = [];
  }
  use(fn) {
    this.middlewareStack.push(fn);
  }
  execute(context) {
    const len = this.middlewareStack.length;
    let i = 0;
    const next = () => {
      if (i < len) {
        const cur = this.middlewareStack[i++];
        cur(context, next);
      }
    };
    next();
  }
}

const middleware1 = (context, next) => {
  console.log("Middleware 1 - Before");
  next();
  console.log("Middleware 1 - After");
};

const middleware2 = (context, next) => {
  console.log("Middleware 2 - Before");
  next();
  console.log("Middleware 2 - After");
};

const middleware3 = (context, next) => {
  console.log("Middleware 3 - Before");
  next();
  console.log("Middleware 3 - After");
};

// 创建中间件实例
const app = new Middleware();

// 注册中间件
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.execute();
