function changeCase(line: string): string {
  line = line.replace(/[-_][a-z]/g, (content) => {
    return content[1].toUpperCase();
  });
  line = line.replace(/^[a-z]/, (content) => content.toUpperCase());
  const arr = [
    line,
    line.replace(/^[A-Z]/, (content) => content.toLowerCase()),
    line
      .replace(/[a-z][A-Z]/g, (content) =>
        content.toLowerCase().split("").join("_"),
      )
      .toLowerCase(),
    line
      .replace(/[a-z][A-Z]/g, (content) =>
        content.toLowerCase().split("").join("-"),
      )
      .toLowerCase(),
  ];
  console.log("arr: ", arr);

  return arr.join("");
}
changeCase("hello-world");
