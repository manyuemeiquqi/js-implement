function a(str) {
  return str.toString().replace(/\/$/, "").replace(/^\//, "");
}
console.log(a("/awfeawef//"));
