import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import BlogView from '../views/BlogView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogView
  },
  {
    path: '/blogs/:id',
    name: 'blog-detail',
    component: BlogDetailView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  if (to.name == 'login') {
    store.dispatch('isLogin', false)
    if (localStorage.getItem("auth")) return {name: 'blogs'}
  } else {
    store.dispatch('isLogin', true)
    if (!localStorage.getItem("auth")) return {name: 'login'}
  }
})

export default router
