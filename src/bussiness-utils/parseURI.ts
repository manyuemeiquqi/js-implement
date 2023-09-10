function parse(uri: string) {
  const query: Record<string, unknown> = {};
  uri = decodeURI(uri);
  const matchRes = uri.match(/(\w+):\/\/([^/]+)(\/[^?#]+)/);
  const protocol = matchRes?.[1];
  const domain = matchRes?.[2];
  const path = matchRes?.[3];
  const objectParamArr = uri.replace(/.+\?/, "").split("&");
  for (let i = 0; i < objectParamArr.length; i++) {
    const [key, value] = objectParamArr[i].split("=");
    query[key] = value ?? true;
  }
  return {
    protocol,
    query,
    domain,
    path,
  };
}

const url =
  "http://www.domain.com/order?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";
console.log("parse(url): ", parse(url));
