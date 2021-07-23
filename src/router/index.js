import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import ContactUs from '@/views/ContactUs.vue'
import Success from '@/views/Success'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/testimonie',
    name: 'Testimonies',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Testimonies.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUs
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
