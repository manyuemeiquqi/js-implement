function myRace(pList) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < pList.length; i++) {
      pList[i].then(resolve, reject);
    }
  });
}
