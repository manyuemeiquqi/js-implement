class Router {
  constructor() {
    this.mode = "hash";
    this.root = "/";
    this.routes = {};
  }
  navigate(path) {
    path = path || "";
    if (this.mode === "history") {
      history.pushState(null, null, path);
    } else {
      window.location.hash = path;
    }
  }
  add(route) {
    this.routes[route.path] = route;
    return this;
  }

  remove() {}
  init() {}
  updateHTML() {
    const current = this.routes[window.location.hash];
    const dom = document.querySelector(".div");
    dom.innerHTML = current.innerHTML;
  }
  listen() {
    window.addEventListener("popstate");
    window.addEventListener("load");
    window.addEventListener("hashchange");
  }
}
