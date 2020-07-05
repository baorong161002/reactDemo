import LoadableRoute from "@/router/loadableroute";

export const procedureRoutes = [
  {
    path: "/procedure/procedureList",
    component: LoadableRoute(() => import("./views/procedureList.js"))
  },
  {
    path: "/procedure/form",
    component: LoadableRoute(() => import("./views/form.js"))
  },
  {
    path: "/procedure/procedureSearch",
    component: LoadableRoute(() => import("./views/procedureSearch.js"))
  },
  {
    path: "/procedure/procedureDone",
    component: LoadableRoute(() => import("./views/procedureDone.js"))
  },
  {
    path: "/procedure/ERForm",
    component: LoadableRoute(() => import("./views/ERForm.js"))
  },
  {
    path: "/procedure/EntryConfirmForm",
    component: LoadableRoute(() => import("./views/EntryConfirmForm.js"))
  },
  {
    path: "/procedure/RAForm",
    component: LoadableRoute(() => import("./views/RAForm.js"))
  }
];
