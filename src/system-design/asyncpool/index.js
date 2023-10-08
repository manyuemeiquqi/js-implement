class Schedular {
  constructor(limit) {
    this.size = 0;
    this.limit = limit;
    this.queue = [];
  }
  add(time, order) {
    this.queue.push(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            console.log("order: ", order);

            resolve(order);
          }, time);
        }),
    );
  }
  taskStart() {
    for (let i = 0; i < this.limit; i++) {
      this.run();
    }
  }
  run() {
    if (this.queue.length === 0 || this.size >= this.limit) return;
    this.size++;

    this.queue
      .shift()()
      .then(() => {
        this.size--;
        this.run();
      });
  }
}

const scheduler = new Schedular(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();
