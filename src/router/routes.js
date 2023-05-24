const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  {
    path: "/news",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/newsPage.vue") }],
  },
  {
    path: "/fast",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/fastPage.vue") }],
  },
  {
    path: "/wallet",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/walletPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
