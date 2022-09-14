import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/main.css";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

// 可以直接使用router插件
createApp(App).use(router).use(pinia).mount("#app"); // vue3中创建项目的方式
