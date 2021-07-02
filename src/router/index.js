import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import store from '@/store/index.js';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {layout:"LoginLayout", isAuthenticated: false}
  },
  {
    path: '/home',
    name: 'Home',
    meta: {layout:"DefaultLayout"},
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.getters.isLogin) {
          next()
      } else {
          next('/')
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
