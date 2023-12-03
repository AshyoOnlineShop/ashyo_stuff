import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import admin from './admin'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    admin.adminLogin, admin.adminPage
  ]
})

export default router
