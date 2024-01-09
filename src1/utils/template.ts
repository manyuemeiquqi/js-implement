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

const render = (string: string, dataSource: Record<string, any>) => {
  const getValue = (list: string[], data: Record<string, any>): any => {
    const attr = list.shift();
    if (attr) {
      if (Reflect.has(data, attr)) {
        if (list.length === 0) {
          return data[attr];
        } else {
          return getValue(list, data[attr]);
        }
      } else return undefined;
    } else return undefined;
  };

  const ret = string.replaceAll(/\{\{\s*(.+?)\s*\}\}/g, (val, p1) => {
    console.log("p1: ", p1);
    console.log(val);
    const attrList = p1.split(".");
    console.log("attrList: ", attrList);

    return getValue(attrList, dataSource);
  });

  console.log("ret: ", ret);

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

render(template, data); // 嗨，张三您好，今天是星期三

export default {};
