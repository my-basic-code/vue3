import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/Login.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/pages/Register.vue"),
    },
  ]
})

export default router
