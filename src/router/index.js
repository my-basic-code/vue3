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
      meta: {
        layout: "only-view",
      },
      component: () => import("@/pages/Login.vue"),
    },
  ]
})

export default router
