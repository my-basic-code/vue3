import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("@/pages/Home.vue"),
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
      component: () => import("@/pages/Product/SearchDetail.vue"),
    },
    {
      path: "/product-detail/:id",
      name: "ProductDetail",
      component: () => import("@/pages/Product/Detail.vue"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("@/pages/Product/Cart.vue"),
    },
    {
      path: "/payment",
      name: "Payment",
      component: () => import("@/pages/Payment/Payment.vue"),
    },
    {
      path: "/order",
      name: "Order",
      component: () => import("@/pages/Payment/Order.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("@/pages/Profile/index.vue"),
      beforeEnter: (to, from, next) => {
        if (to.matched.length === 1) { next({ name: "Home" }); } else { next(); }
      },
      children: [
        {
          path: "information",
          name: "Information",
          component: () => import("@/pages/Profile/Information/index.vue"),
          beforeEnter: (to, from, next) => {
            if (to.matched.length === 2) { next({ name: "Home" }); } else { next(); }
          },
          children: [
            {
              path: "edit-profile",
              name: "EditProfile",
              component: () => import("@/pages/Profile/Information/EditProfile.vue"),
            },
            {
              path: "show-information",
              name: "ShowInformation",
              component: () => import("@/pages/Profile/Information/ShowInformation.vue"),
            },
          ]
        },
        {
          path: "rating",
          name: "Rating",
          component: () => import("@/pages/Profile/Rating.vue"),
        },
        {
          path: "order-detail",
          name: "OrderDetail",
          component: () => import("@/pages/Profile/OrderDetail.vue"),
        },
      ]
    },
    {
      path: "/customer-service",
      name: "CustomerService",
      component: () => import("@/pages/CustomerService/index.vue"),
      beforeEnter: (to, from, next) => {
        if (to.matched.length === 1) { next({ name: "Home" }); } else { next(); }
      },
      children: [
        {
          path: "how-to-use",
          name: "HowToUse",
          component: () => import("@/pages/CustomerService/HowToUse.vue"),
        },
        {
          path: "qa",
          name: "Qa",
          component: () => import("@/pages/CustomerService/QA/index.vue"),
          beforeEnter: (to, from, next) => {
            if (to.matched.length === 2) { next({ name: "Home" }); } else { next(); }
          },
          children: [
            {
              path: "listQa",
              name: "List",
              component: () => import("@/pages/CustomerService/QA/List.vue"),
            },
            {
              path: "detail/:id",
              name: "DetailQa",
              component: () => import("@/pages/CustomerService/QA/Detail.vue"),
            },
          ]
        },
        {
          path: "notification",
          name: "Notification",
          component: () => import("@/pages/CustomerService/Notification/index.vue"),
          beforeEnter: (to, from, next) => {
            if (to.matched.length === 2) { next({ name: "Home" }); } else { next(); }
          },
          children: [
            {
              path: "list",
              name: "ListNotification",
              component: () => import("@/pages/CustomerService/Notification/List.vue"),
            },
            {
              path: "detail/:id",
              name: "DetailNotification",
              component: () => import("@/pages/CustomerService/Notification/Detail.vue"),
            },
          ]
        },
        {
          path: "rules",
          name: "Rules",
          component: () => import("@/pages/CustomerService/Rules/index.vue"),
          beforeEnter: (to, from, next) => {
            if (to.matched.length === 2) { next({ name: "Home" }); } else { next(); }
          },
          children: [
            {
              path: "list",
              name: "ListRules",
              component: () => import("@/pages/CustomerService/Rules/List.vue"),
            },
            {
              path: "detail/:id",
              name: "DetailRules",
              component: () => import("@/pages/CustomerService/Rules/Detail.vue"),
            },
          ]
        },
      ]
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   redirect: { name: 'Home' }
    // },
  ]
})

export default router
