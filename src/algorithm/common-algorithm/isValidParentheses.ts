function isValidParentheses(str: string): boolean {
  const stk: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (["(", "[", "{"].includes(str[i])) {
      stk.push(str[i]);
    } else {
      if (stk.length === 0) return false;
      switch (stk[stk.length - 1]) {
        case "(":
          if (str[i] !== ")") return false;
          break;
        case "{":
          if (str[i] !== "}") return false;
          break;
        case "[":
          if (str[i] !== "]") return false;
          break;
        default:
          break;
      }
      stk.pop();
    }
  }
  return stk.length === 0;
}

isValidParentheses("()[]{}");

// leetcode 20https://leetcode.cn/problems/valid-parentheses/description/
