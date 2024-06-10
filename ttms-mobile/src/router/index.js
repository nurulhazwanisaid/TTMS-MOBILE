import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Course from '../views/course/Course.vue'
import CourseSection from '@/views/course/CourseSection.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/course',
    name: 'course',
    component: Course
  },
  {
    path: '/course/id',
    name: 'CourseSection',
    component: CourseSection
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
