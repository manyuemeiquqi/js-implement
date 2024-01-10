// javascript
// 复制代码const template = '嗨，{{ info.name.value }}您好，今天是星期 {{ day.value }}';

// const data = {
//   info: {
//     name: {
//       value: '张三'
//     }
//   },
//   day: {
//     value: '三'
//   }
// };

// render(template, data); // 嗨，张三您好，今天是星期三

import get from "./get.js";
const render = (string, dataSource) => {
  const ret = string.replaceAll(/\{\{\s*(.+?)\s*\}\}/g, (val, p1) => {
    const attrList = p1.split(".");

    return get(dataSource, attrList);
  });

  return ret;
};

const template = "嗨，{{ info.name.value }}您好，今天是星期 {{ day.value }}";
const data = {
  info: {
    name: {
      value: "张三",
    },
  },
  day: {
    value: "三",
  },
};

render(template, data); // 嗨，张三您好，今天是星期 三

export default {};
