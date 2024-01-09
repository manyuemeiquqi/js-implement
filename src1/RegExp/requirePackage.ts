const requireStr = `const packageA = require("eslint");`;

const getPackage = (str: string) => {
  const ret = str.match(/require\(['\"](.+?)['\"]\)/m);

  console.log("ret: ", ret);
  if (ret) {
    return ret[1];
  } else return null;
};

getPackage(requireStr);
