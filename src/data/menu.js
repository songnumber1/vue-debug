import data from "./menu.json";

const menuData = (router, routes) => {
  data.forEach((element) => {
    let newRoute = {
      path: element.path,
      name: element.name,
      component: () => import(`../views/${element.component}`),
    };

    if (routes === undefined) {
      routes = [];
    }

    routes.push(newRoute);
    router.addRoute(newRoute);
  });
};

export default menuData;
