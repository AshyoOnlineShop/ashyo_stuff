export default {
  adminLogin: {
    path: "/",
    name: "login",
    //@ts-ignore
    component: () => import("@/pages/auth/Login.vue"),
  },
  adminPage: {
    path: "/admin",
    name: "admin",
    //@ts-ignore
    component: () => import("@/pages/staff/admin/Admin.vue"),
    children: [
      {
        path: "/products",
        name: "products",
        component: () =>
          //@ts-ignore
          import("@/pages/staff/admin/products/Products.vue"),
      },
      {
        path: "/admin-profile",
        name: "profile",
        component: () =>
          //@ts-ignore
          import("@/pages/staff/admin/profile/Profile.vue"),
      },
      {
        path: "/categories",
        name: "category",
        component: () =>
          //@ts-ignore
          import("@/pages/staff/admin/categories/Category.vue"),
      },
      {
        path: "/brands",
        name: "brands",
        component: () =>
          //@ts-ignore
          import("@/pages/staff/admin/brands/Brand.vue"),
      },
    ],
  },
};
