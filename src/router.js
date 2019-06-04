import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/cj',
      name: 'cj',
      component: () => import('./views/CodingGarden.vue')
    },
    {
      path: '/cj-score-counter',
      name: 'cj-score-counter',
      component: () => import('./views/PlayerScoreCounter.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('./views/Todo.vue')
    },
    {
      path: '/reddit',
      name: 'reddit',
      component: () => import('./views/Reddit.vue')
    },
    {
      path: '/rockets',
      name: 'rockets',
      component: () => import('./views/Rockets.vue')
    },
    {
      path: '/craigslist',
      name: 'craigslist',
      component: () => import('./views/Craigslist.vue')
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: () => import('./views/Invoice.vue')
    },
    {
      path: '/element',
      name: 'element',
      component: () => import('./views/ElementUI.vue')
    },
    {
      path: '/postcrud',
      name: 'postcrud',
      component: () => import('./views/PostCrud.vue')
    },
    {
      path: '/enhancedform',
      name: 'enhancedform',
      component: () => import('./views/EnhancedForm.vue')
    },
    {
      path: '/fishui',
      name: 'fishui',
      component: () => import('./views/FishUI.vue')
    }
  ]
})
