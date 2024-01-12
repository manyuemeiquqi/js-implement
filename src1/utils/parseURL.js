const url = "http://www.getui.com?user=superman&id=345&id=678&user=superman2";
const parse = (url) => {
  let query = url.match(/\?([^#]+)/);
  let ret = {};
  if (query) {
    query = query[1];
    query = query.split("&");

    for (let i = 0; i < query.length; i++) {
      const idx = query[i].indexOf("=");
      let key;
      let value;
      if (idx === -1) {
        key = query[i];
        value = "";
      } else {
        key = query[i].slice(0, idx);
        value = query[i].slice(idx + 1);
      }
      key = decodeURIComponent(key);
      value = decodeURIComponent(value);
      if (Object.hasOwn(ret, key)) {
        if (!Array.isArray(ret[key])) {
          ret[key] = [ret[key]];
        }
        ret[key].push(value);
      } else {
        ret[key] = value;
      }
    }
  }
  return ret;
};
parse(url);
// {}
parse("https://shanyue.tech");

// {a: ''}
parse("https://shanyue.tech?a");

// {name: '山月'}
parse("https://shanyue.tech?name=%E5%B1%B1%E6%9C%88");

// {name: '山月', a: 3}
parse("https://shanyue.tech?name=%E5%B1%B1%E6%9C%88&a=3");

// {name: '山月', a: [3, 4]}
parse("https://shanyue.tech?name=%E5%B1%B1%E6%9C%88&a=3&a=4");

// {name: '山月', a: 3}
parse("https://shanyue.tech?name=%E5%B1%B1%E6%9C%88&a=3#hash");

// {name: '1+1=2'}
parse("https://shanyue.tech?name=1%2B1%3D2");

//
