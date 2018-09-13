import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import(/* webpackChunkName: "landing" */ './views/Landing.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/survey/:stage',
      name: 'survey',
      component: () => import(/* webpackChunkName: "survey" */ './views/Survey.vue')
    },
  ]
})
