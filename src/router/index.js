import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "@/pages/Welcome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/story",
    name: "Home",
    component: () =>
      import("../pages/Home.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
