import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SecondOpinion from '../pages/SecondOpinion.vue'
import HomeAi from '../pages/HomeAi.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/case-study-second-opinion',
    name: 'Second Opinion Case Study',
    component: SecondOpinion
  },
  {
    path: '/ai',
    name: 'AI Test',
    component: HomeAi
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return { top:0 };
  }
})

export default router
