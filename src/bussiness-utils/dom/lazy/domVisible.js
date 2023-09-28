function getVisible(dom) {
  const rect = dom.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}

// function onVisibleChange(el, cb) {
//   var oldVisible = false;
//   return function () {
//     const visible = getVisible(el);
//     if (visible != oldVisible) {
//       oldVisible = visible;
//       cb();
//     }
//   };
// }
// const handler = onVisibleChange(el, function () {});
// document.addEventListener('scroll',handler)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
    } else {
    }
  });
});
observer.observe(dom);
// entries observe传入的dom集合，按照注册顺序排列

// https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
