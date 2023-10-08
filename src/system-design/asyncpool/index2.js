class TaskConcurrent {
  constructor(size) {
    this.max = size;
    this.size = 0; // 并发数量控制
    this.taskQueue = []; // 任务队列
  }

  // 生成异步任务对象
  taskFactory(fn, params, resolve, reject) {
    return {
      fn, // 异步任务
      params, // 函数参数
      resolve, // 异步完成
      reject, // 异步错误
    };
  }

  // 添加任务
  addTask(fn, ...params) {
    return new Promise((resolve, reject) => {
      const taskObj = this.taskFactory(fn, params, resolve, reject);
      // 添加到栈尾
      this.taskQueue.push(taskObj);
      if (this.size !== this.max) {
        this.queueOutTask();
      }
    });
  }

  // 从栈中取出任务
  queueOutTask() {
    // 任务池 没有任务了
    if (this.taskQueue.length === 0) {
      return;
    }
    // 开始异步任务 增加当前同时并发的任务数量
    this.size++;
    const { resolve, fn, params, reject } = this.taskQueue.shift(); // 先进先出
    const taskPromise = this.runTask(fn, params, reject);
    // 返回一个promise promise resolve出一个promise 会自动链式调用
    resolve(taskPromise);
  }

  // 执行任务
  runTask(fn, params, reject) {
    // 执行任务 如果返回值不是异步 包装返回值成异步
    const taskPromise = Promise.resolve(fn(...params));
    taskPromise
      .then((res) => {
        console.log("异步结束", res);
        this.pullTask(); // 取出新的回调
      })
      .catch((err) => {
        this.pullTask(); // 取出新的回调
        reject(err); // 异步失败
      });
    return taskPromise;
  }

  // 异步结束 添加新的异步任务
  pullTask() {
    // 上一个任务有结果了 开放一个并发名额出来
    this.size--;
    // 从任务池中取出任务 自动执行异步任务
    this.queueOutTask();
  }
}

// 调用addTask一个一个添加异步任务
const task = (timeout) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(timeout); // 返回值
    }, timeout),
  );

// 模拟异步任务1
// const taskList = [5000, 3000, 1000, 10300, 8000, 2000, 4000, 5000]
// async function startNoConcurrentControl() {
//   // 初始化并发池
//   const cc = new TaskConcurrent(2)
//   console.time('异步执行时间')
//   // 添加所有异步任务
//   const resArr = await Promise.all(taskList.map((item) => cc.addTask(task, item)))
//   console.log('异步任务返回值', resArr)
//   console.timeEnd('异步执行时间')
// }
// startNoConcurrentControl()

// 模拟异步2 循环添加异步任务
function start() {
  const taskConcurrent2Instance = new TaskConcurrent(2);
  let count = 10;
  // 组织参数
  while (count--) {
    const p = taskConcurrent2Instance.addTask(task, count * 1000);
    p.then((res) => {
      console.log("p", res);
    });
  }
}
start();
