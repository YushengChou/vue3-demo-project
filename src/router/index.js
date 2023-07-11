import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/courseOne',
      name: 'courseOne',
      component: () => import('../views/CourseOneView.vue'),
    },
    {
      path: '/courseTwo',
      name: 'courseTwo',
      component: () => import('../views/CourseTwoView.vue'),
    },
    {
      path: '/courseThree',
      name: 'courseThree',
      component: () => import('../views/CourseThreeView.vue'),
    },
    {
      path: '/courseFour',
      name: 'courseFour',
      component: () => import('../views/CourseFourView.vue'),
    },
    {
      path: '/courseFive',
      name: 'courseFive',
      component: () => import('../views/CourseFiveView.vue'),
    },
    {
      path: '/courseSix',
      name: 'courseSix',
      component: () => import('../views/CourseSixView.vue'),
    },
  ],
})

export default router
