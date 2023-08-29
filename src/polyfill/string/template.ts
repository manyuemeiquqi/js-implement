const template = "My name is ${name} and I am ${age} years old.";

// ? 量词表明前面模式出现的次数
// .+?尽可能少的匹配，属于只用非贪婪模式 比如 abc d 匹配出就是 a b c   d
// . 匹配的是除了换行符的任意单个字符，使用修饰符 s 可以让 . 补充\n  === [.\s]
// 这里期望的是{{}}内部的内容，可以创建一个捕获组，然后传递个replace cb 的第二个参数

// 这里进行规定 #开头为表达式，没有#为索引取值

function templateString(str: string, data: Record<string, unknown>): string {
  const res = str.replace(/\{\{(.+?)\}\}/gs, (match, key) => {
    const matchKey = (key as string).trim();
    if (matchKey[0] === "#") {
      try {
        let res = "";
        res = eval(matchKey.slice(1)) + "";
        return res;
      } catch (e) {
        return "";
      }
    } else {
      if (data[matchKey]) {
        return (data[matchKey] as string) + "";
      }
      return "";
    }
  });

  return res;
}
templateString(template, { name: "John", age: 30 });

const data = {
  name: "小明",
  age: 16,
  school: "第三中学",
  classroom: "教室2",
};

console.log(
  templateString(
    "{{ name }} 今年 {{ age }} 岁，就读于 {{ school }} 今天在 {{ classroom }} 上课，{{ name }} {{ #data.age >= 18 ? '成年了' : '未成年' }}",
    data,
  ),
);
// 小明 今年 16 岁，就读于 第三中学 今天在 教室2 上课，小明 未成年

console.log(
  templateString(
    `{{name}}说了句{{#
      if (data.age >= 18) {
          "我已经成年了！"
      } else {
          "我还没有成年！"
      }
  }}`,
    data,
  ),
);

export {};
