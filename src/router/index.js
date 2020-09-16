import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    component: () => import('../views/Main.vue')
  }
];

const router = new VueRouter({
  // 路由模式
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
