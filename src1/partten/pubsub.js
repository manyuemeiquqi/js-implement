// const shop = {
//     apple: 5, // 苹果 5 元
//     potato: 2, // 马铃薯 2 元
//     tomato: 3, // 西红柿 3 元
//     orange: 7, // 橙子 7 元
//     }

//         /**
//         * 现在我们有一个便利店的实例对象，目标是需要增加对商品价格的监听，当商品价格发生变化时，触发对应的事件。
//         * 1、小明关注苹果价格变化
//         * 2、小刚关注橙子价格变化
//         * 3、当价格变化时，自动触发对应的事件
//         */

class Pubsub {
  constructor() {
    this.pubsubMap = {};
  }
  subscribe(eventName, fn) {
    if (this.pubsubMap[eventName]) {
      this.pubsubMap[eventName].push(fn);
    } else {
      this.pubsubMap[eventName] = [fn];
    }
  }
  unsubscribe(eventName, fn) {
    const fnList = this.pubsubMap[eventName];
    if (fnList) {
      const idx = fnList.findIndex((item) => item === fn);
      if (idx !== -1) {
        fnList.splice(idx, 1);
      }
    }
  }
  publish(eventName, ...args) {
    const ctx = this;
    const fnList = this.pubsubMap[eventName];
    if (fnList)
      fnList.forEach((fn) => {
        fn.apply(ctx, args);
      });
  }
}
const fruitPubsub = new Pubsub();
const xiaomingCb = (val) => {
  console.log("小明 apple: ", val);
};
const xiaogangCb = (val) => {
  console.log("小刚 orange:", val);
};

const fruitShop = {
  apple: 5, // 苹果 5 元
  potato: 2, // 马铃薯 2 元
  tomato: 3, // 西红柿 3 元
  orange: 7, // 橙子 7 元
};

const proxyFruitShop = new Proxy(fruitShop, {
  set(obj, prop, val) {
    obj[prop] = val;
    fruitPubsub.publish(prop + "Event", val);
    return true;
  },
});

fruitPubsub.subscribe("appleEvent", xiaomingCb);
fruitPubsub.subscribe("orangeEvent", xiaogangCb);

proxyFruitShop.apple = 8;
proxyFruitShop.orange = 8;

fruitPubsub.unsubscribe("orangeEvent", xiaogangCb);

proxyFruitShop.apple = 12;
proxyFruitShop.orange = 12;
