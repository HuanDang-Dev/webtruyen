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
      component: () => import('./views/About.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('./views/CategoryView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/SearchView.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('./feedback/AboutFeedBack.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./news/AboutNews.vue')
    }
  ]
})
