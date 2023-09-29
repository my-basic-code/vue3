import { createRouter, createWebHistory } from 'vue-router'

/**
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in title (recommend set)
    layout : "default"           the name of layout
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home'
    },
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login',
      layout: 'only-view'
    },
    component: () => import("@/pages/Login.vue"),
  },
  {
    path: '/404',
    name: 'NotFound',
    meta: {
      title: 'NotFound'
    },
    component: () => import("@/pages/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: 'NotFound' }
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: constantRoutes,
  /**
   * Scrolls to a specific position on the page with smooth behavior.
   *
   * @param {any} to - The target position to scroll to.
   * @param {any} from - The current position to scroll from.
   * @param {any} savedPosition - The saved position to scroll to.
   * @return {Promise} A promise that resolves when the scrolling is complete.
   */
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({ selector: to.hash });
        } else if (savedPosition) {
          resolve(savedPosition);
        } else {
          const appElement = document.getElementById("app");
          resolve(appElement.scrollIntoView({ behavior: "smooth" }));
        }
      }, 500);
    });
  }
})

/**
 * Resets the router by creating a new router instance and assigning its matcher to the existing router.
 *
 * @return {void} This function does not return a value.
 */
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
