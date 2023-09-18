type ReqOptions = {
  method?: string;
  body?: XMLHttpRequestBodyInit;
  headers?: Record<string, string>;
};
function myFetch(url: string, options: ReqOptions) {
  // xhr.onreadystatechange
  // xhr.onload
  // 区别， onreadystatechange 的 state ===4  的时候 就是 onload ，也就是说，onreadystatechange 颗粒度更高
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    if (options.headers) {
      for (const key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key]);
      }
    }
    xhr.onerror = function (event) {
      reject(event);
    };
    xhr.onabort = function (event) {
      reject(event);
    };
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        // 返回的数据都是从 xhr 上进行读取
        resolve({
          status: xhr.status,
          statusText: xhr.statusText,
          headers: xhr.getAllResponseHeaders(),
          body: xhr.responseText,
        });
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    xhr.open(options.method || "GET", url);

    xhr.send(options.body);
  });
}
myFetch("https://jsonplaceholder.typicode.com/posts/1", {})
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((e) => {
    console.log("e: ", e);
  });
