import data from "./menu.json";

const menuData = {
  menuUnShiftData(routes) {
    data.forEach((element) => {
      let newRoute = {
        path: element.path,
        name: element.name,
        component: () => import(`../views/${element.component}`),
        meta: element.meta,
      };

      if (routes === undefined) {
        routes = [];
      }

      routes.unshift(newRoute);
    });
  },

  menuPushData(routes) {
    data.forEach((element) => {
      let newRoute = {
        path: element.path,
        name: element.name,
        component: () => import(`../views/${element.component}`),
        meta: element.meta,
      };

      if (routes === undefined) {
        routes = [];
      }

      routes.push(newRoute);
    });
  },
};

export default menuData;
