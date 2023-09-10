/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// https://gist.github.com/liqiang372/48b26fc4fe5cd808ad5b9aba63d11b88
// https://stackoverflow.com/questions/15594905/difference-between-observer-pub-sub-and-data-binding
type F = (...args: unknown[]) => unknown;
class PubSub {
  eventCenter: Record<string, F[]>;
  constructor() {
    this.eventCenter = {};
  }
  subscribe(event: string, cb: F) {
    this.eventCenter[event] = this.eventCenter[event] || [];
    this.eventCenter[event].push(cb);
  }
  publish(event: string) {
    if (this.eventCenter[event]) {
      this.eventCenter[event].forEach((fn) => fn());
    }
  }
  unSubscribe(event: string, cb: F) {
    if (this.eventCenter[event]) {
      const idx = this.eventCenter[event].findIndex((item) => item === cb);
      if (idx !== -1) this.eventCenter[event].splice(idx, 1);
    }
  }
}
const pubsub = new PubSub();

const eat = function () {
  console.log("I am eating");
};

const drink = function () {
  console.log("I am drinking");
};
const running = function () {
  console.log("I am running");
};

pubsub.subscribe("dinner", eat);
pubsub.subscribe("dinner", drink);
pubsub.subscribe("sports", running);

pubsub.publish("dinner");
// should log
// I am drinking
// I am eating

pubsub.publish("sports");
export {};
