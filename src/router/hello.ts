import { Test } from "@/components/Test.vue";
import Router from "vue-router";

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Test,
    },
  ],
});
