import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/pages/Auth/Home.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/Auth/Login.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/pages/Auth/Register.vue"),
    },
    {
      path: "/find-id",
      name: "FindId",
      component: () => import("@/pages/Auth/FindId.vue"),
    },
    {
      path: "/find-password",
      name: "FindPassword",
      component: () => import("@/pages/Auth/FindPassword.vue"),
    },
    {
      path: "/list-story",
      name: "ListStory",
      component: () => import("@/pages/Story/ListStory.vue"),
    },
    {
      path: "/search-detail/:slug",
      name: "SearchDetail",
      component: () => import("@/pages/SearchDetail.vue"),
    },
    {
      path: "/product-detail/:id",
      name: "ProductDetail",
      component: () => import("@/pages/Product/Detail.vue"),
    },
  ]
})

export default router
