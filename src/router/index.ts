import { createRouter, createWebHashHistory } from 'vue-router';

// createRouter创建一个路由
const router = createRouter({
  history: createWebHashHistory(), // 直接使用创建历史记录的方法
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/todos',
      name: 'Todos',
      component: () => import('../views/TodoListView/index.vue'),
    },
  ],
});

export default router;
