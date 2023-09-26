import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: 'Home'
      },
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: '/404',
      name: 'NotFound',
      meta: {
        title: 'NotFound'
      },
      component: () => import("@/pages/404.vue"),
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   redirect: { name: 'NotFound' }
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (to.hash) {
          return resolve({ selector: to.hash });
        } else if (savedPosition) {
          return resolve(savedPosition);
        } else {
          resolve(document.getElementById("app").scrollIntoView({ behavior: "smooth" }));
        }
      }, 500);
    })
  },
})

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
