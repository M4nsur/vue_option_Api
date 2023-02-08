import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store/index";
import "./styles/css/main.css";
import routers from "@/router/routers";

const app = createApp(App);
app.use(routers);
app.use(store);
app.mount("#App");
