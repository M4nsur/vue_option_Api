import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Main-component";
import About from "@/components/About-component";
import Feedback from "@/components/Feedback-component";
import Community from "@/components/Community-component";
import Vacancy from "@/components/Vacancy-component";

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
    {
      path: "/community",
      name: "community",
      component: Community,
    },
    {
      path: "/vacancy",
      name: "vacancy",
      component: Vacancy,
    },
  ],
});

export default routers;
