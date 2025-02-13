import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/moments',
  //   name: 'moments',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "moments" */ '../views/MomentsView.vue')
  // },
  // {
  //   path: '/years',
  //   name: 'years',
  //   component: () => import('../views/YearsView.vue')
  // },
  // {
  //   path: '/months',
  //   name: 'months',
  //   component: () => import('../views/MonthsView.vue')
  // }

    { path: '/', component: () => import('../views/HomeView.vue') },
    { path: '/moments', component: () => import('../views/MomentsView.vue') },
    { path: '/moments/:year', component: () => import('../views/YearView.vue') },
    { path: '/moments/:year/:month', component: () => import('../views/MonthView.vue') }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
