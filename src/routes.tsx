export const ROUTES = import.meta.globEager("./pages/**/[a-z[]*.tsx");

export const routes = Object.keys(ROUTES).map(route => {
  const path = route
    .replace(/\.\/pages|index|\.tsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");
  return { path, component: ROUTES[route].default };
});
