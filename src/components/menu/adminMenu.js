import { mdiPackage } from "@mdi/js";
import { mdiAccountCogOutline } from "@mdi/js";
import { mdiOctagramOutline } from "@mdi/js";
import { mdiFolder } from "@mdi/js";

export const adminMenu = [
  {
    path: "/products",
    label: "Products",
    name: "products",
    icon: mdiPackage,
  },
  
  {
    path: "/categories",
    label: "Categories",
    name: "categories",
    icon: mdiFolder,
  },
  
  {
    path: "/brands",
    label: "Brands",
    name: "brands",
    icon: mdiOctagramOutline,
  },

  {
    path: "/admin-profile",
    label: "Profile",
    name: "Profile",
    icon: mdiAccountCogOutline,
  },
];
