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
         component: Home,
         meta: {
            title: 'Sumit - Vue Sandbox'
         }
      },
      {
         path: '/about',
         name: 'about',
         meta: {
            title: "Aboutie Page",
            metaTags: [
               {
                  name: "About Page",
                  content: "Another About about page content"
               }
            ]
         },
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
         path: '/eventbus',
         name: 'eventbus',
         component: () => import('./views/EventBus.vue')
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
         meta: {
            title: "Todo list without Component"
         },
         component: () => import('./views/FishUI.vue')
      },
      {
         path: '/todolist',
         name: 'todolist',
         meta: {
            title: "Todo list with Component"
         },
         component: () => import('./views/TodoList.vue')
      },
      {
         path: '/elementlayout',
         name: 'elementlayout',
         meta: {
            title: 'Element Layout'
         },
         component: () => import('./views/ElementLayout.vue')
      },
      {
         path: '/vuexninja',
         name: 'vuexninja',
         meta: {
            title: 'vuexninja'
         },
         component: () => import('./views/VuexNinja.vue')
      }
   ]
})
