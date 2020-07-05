import LoadableRoute from "@/router/loadableroute";

export const excelRoutes = [
  {
    path: "/procedure/procedureForm",
    component: LoadableRoute(() => import("./views/index"))
  }
];
