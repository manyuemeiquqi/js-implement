class Router {
  constructor(dom, option) {
    const { mode = "hash", routes = [] } = option;
    this.mode = mode;
    this.routes = routes;
    this.viewDom = dom;
  }
  navigate(name) {
    const route = this.routes.find((item) => item.name === name);
    const path = route.path;
    if (this.mode === "history") {
      history.pushState(null, null, this.baseURL + "/" + path);

      // history.pushState(null, null, path);
      const popStateEvent = new PopStateEvent("popstate", { state: null });
      window.dispatchEvent(popStateEvent);
    } else {
      window.location.hash = route.path;
    }
  }

  handleInitialLoad() {
    // 检查 URL，执行正确的路由逻辑
    this.updateHTML();
    if (this.mode === "history") {
      const event = new PopStateEvent("popstate", { state: null });
      window.dispatchEvent(event);
    }
  }
  updateHTML() {
    let path;
    if (this.mode === "hash") {
      path = window.location.hash.replace(/^#/, "");
    } else {
      path = window.location.pathname
        .replace(this.baseURL, "")
        .replace(/^\//, "");
    }
    console.log("path: ", path);

    const route = this.routes.find((item) => item.path === path);
    this.viewDom.innerHTML = route?.innerHTML || "404";
  }
  listen() {
    window.addEventListener("popstate", this.updateHTML.bind(this));
    window.addEventListener("load", this.updateHTML.bind(this));
    window.addEventListener("hashchange", this.updateHTML.bind(this));
  }
  init() {
    console.log(window.location);
    this.baseURL = window.location.pathname;
    const aLinks = document.querySelectorAll("a");
    const that = this;
    aLinks.forEach((item) => {
      item.onclick = function (event) {
        console.log("event: ", event);
        event.preventDefault();
        const routeName = event.target.dataset.routename;
        that.navigate.call(that, routeName);
      };
    });
    return this;
  }
}

const dom = document.querySelector(".view");
const routes = [
  {
    name: "",
    path: "/",
    innerHTML: `<div>it's /</div>`,
  },
  {
    name: "blog",
    path: "blog",
    innerHTML: `<div>it's blog</div>`,
  },
  {
    name: "document",
    path: "document",
    innerHTML: `<div>it's document</div>`,
  },
  {
    name: "home",
    path: "home",
    innerHTML: `<div>it's home</div>`,
  },
];

const router = new Router(dom, {
  mode: "history",
  routes,
});
router.init().listen();
