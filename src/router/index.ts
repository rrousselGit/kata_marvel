import Details from "@/details/index.vue";
import Home from "@/home/index.vue";
import Router from "vue-router";

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/characters/:id",
      name: "Details",
      component: Details,
    },
  ],
});
