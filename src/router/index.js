import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

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
    meta: {layout:"DefaultLayout", isAuthenticated: false},
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/someone',
    name: 'Someone',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Someone.vue')
  },
  {
    path: '/general/xxx',
    name: 'general-xxx',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/general/xxx.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
