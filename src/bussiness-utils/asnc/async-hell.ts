const t = setTimeout(() => {
  console.log(111);
  const t1 = setTimeout(() => {
    console.log(222);
    const t2 = setTimeout(() => {
      console.log(333);
      clearTimeout(t);
      clearTimeout(t1);
      clearTimeout(t2);
    }, 3000);
  }, 2000);
}, 1000);

new Promise<void>((resolve) => {
  setTimeout(() => {
    console.log(111);
    resolve();
  }, 1000);
})
  .then(() => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(222);
        resolve();
      }, 2000);
    });
  })
  .then(() => {
    setTimeout(() => {
      console.log(333);
    }, 3000);
  })
  .catch(() => {});
//   .then(() => {
//     setTimeout(() => {
//       console.log(333);
//     }, 3000);
//   });
