import LoadableRoute from "@/router/loadableroute";

export const newsRoutes = [
  {
    path: "/news/index",
    component: LoadableRoute(() => import("./views/index"))
  },
  {
    path: "/news/newNotice",
    component: LoadableRoute(() => import("./views/newNotice"))
  },
  {
    path: "/news/newsMain",
    component: LoadableRoute(() => import("./views/newsMain"))
  }
];
