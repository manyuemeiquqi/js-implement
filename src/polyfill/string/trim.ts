function trim(str: string) {
  return str.replace(/(^\s+)|(\s+$)/g, "");
}

trim("  hello world  ");
// lc151
