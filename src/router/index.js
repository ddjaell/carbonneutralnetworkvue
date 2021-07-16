import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/test.vue')
  },
  {
    path: '/board',
    name: 'board',
    component: () => import(/* webpackChunkName: "about" */ '../views/board/index.vue')
  },
  {
    path: '/storage',
    name: 'storage',
    component: () => import(/* webpackChunkName: "about" */ '../views/storage.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import(/* webpackChunkName: "about" */ '../views/editor.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import('../views/error')
  },
  {
    path: '/:collection/:document/:action',
    name: 'collection-document-action',
    component: () => import('../views/renderer')
  },
  {
    path: '/:collection/:document',
    name: 'collection-document',
    component: () => import('../views/renderer')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
