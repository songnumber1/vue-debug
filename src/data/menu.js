import data from "./menu.json";

const menuData = (router) => {
  data.forEach((element) => {
    router.addRoute({
      path: element.path,
      name: element.name,
      component: () => import(`../${element.component}`),
    });
  });
};

export default menuData;
