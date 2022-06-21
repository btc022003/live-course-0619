import { createApp } from 'vue';
import './assets/main.css';
import App from './App.vue';
import router from './router';

// 可以直接使用router插件
createApp(App).use(router).mount('#app'); // vue3中创建项目的方式
