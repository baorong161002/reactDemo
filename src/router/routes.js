import LoadableRoute from "./loadableroute";
import { excelRoutes } from "@/views/excel/excelRoutes";
import { newsRoutes } from "@/views/news/newsRoutes";
import { procedureRoutes } from "@/procedure/procedureRoutes";
import { GlobalEnvParams } from "@/core/envconfig";

let routes = [
  {
    path: "/home",
    component: LoadableRoute(() => import("@/views/home/index")),
  },
  { path: "/", redirect: { path: "/home" } },
  // {
  //   path: "/common/data/:id",
  //   component: LoadableRoute(() => import("../views/data/FunctionData"))
  // },
  {
    path: "/general/about",
    component: LoadableRoute(() => import("@/views/about/index")),
  },
  {
    path: "/general/dailySheet",
    component: LoadableRoute(() => import("@/views/dailySheet/index")),
  },
  {
    path: "/general/useInfo",
    component: LoadableRoute(() => import("@/views/useInfo/index")),
  },
  {
    path: "/404",
    component: LoadableRoute(() => import("@/views/page/404/index")),
  },
];

let notFound = [
  {
    path: "*",
    component: LoadableRoute(() => import("@/views/page/404/index")),
  },
];

if (GlobalEnvParams.NEWS_MENU) {
  routes.push(...newsRoutes);
}
if (GlobalEnvParams.EXCEL_MENU) {
  routes.push(...excelRoutes);
}
if (GlobalEnvParams.PRO_MENU) {
  routes.push(...procedureRoutes);
}

routes.push(...notFound);

export default routes;
