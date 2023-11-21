import data from "./menu.json";

const menuData = (router) => {
  data.forEach((element) => {
    let newRoute = {
      path: element.path,
      name: element.name,
      component: () => import(`../views/${element.component}`),
    };

    if (router.options.routes !== undefined) {
      router.options.routes.push(newRoute);
    }

    router.addRoute(newRoute);
  });
};

export default menuData;
