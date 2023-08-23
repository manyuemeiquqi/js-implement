function reverseCase(str: string) {
  return str.replace(/[A-Za-z]/g, (content) => {
    if (content <= "z" && content >= "a") return content.toUpperCase();
    return content.toLowerCase();
  });
}

const a = reverseCase(' "QIANDUANGOngchengshi猕猴桃Jquery很帅！哈哈 haha";');
console.log("a: ", a);
