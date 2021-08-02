import { createWebHistory, createRouter } from "vue-router";
import Delete from "@/views/Delete.vue";
import Add from "@/views/Add.vue";
import update from "@/views/update.vue";

const routes = [
  
    {
    path: "/Delete",
    name: "Delete Product",
    component: Delete,
  },
  {
    path: "/Add",
    name: "Add Product",
    component: Add,
    },
  {
    path: "/upadete",
    name: "update Product",
    component: update,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;