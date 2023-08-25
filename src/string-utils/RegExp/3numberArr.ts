function getNumberArr(str: string) {
  console.log("str.match(/d{3}/g): ", str.match(/\d{3}/g));
}
// {n,m} n到m次
// + {1，}
// * {0,}
getNumberArr("013d1we22ewfa33rr4rwq0dsf00dsf9fas999");
