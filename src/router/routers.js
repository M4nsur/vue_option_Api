import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Main-component";
import About from "@/components/About-component";
import Feedback from "@/components/Feedback-component";
// import NotFound from "@/components/pages/notFoundPage";

const routerHistory = createWebHistory();
const routers = new createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "main",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/feedback",
      name: "feedback",
      component: Feedback,
    },
    // {
    //   path: "/:CatchAll(.*)",
    //   name: "notFound",
    //   component: NotFound,
    // },
  ],
});

export default routers;
