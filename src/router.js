import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },  
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login')
    },    
    {
      path: '/company',
      name: 'company',     
      component: () => import('@/views/Company')
    },
    {
      path: '/partner',
      name: 'partner',     
      component: () => import('@/views/Partner')
    },
    {
      path: '/recruit',
      name: 'recruit',     
      component: () => import('@/views/Recruit')
    },
    {
      path: '/ovalhome',
      name: 'ovalhome',     
      component: () => import('@/views/Ovalhome')
    },
    {
      path: '/ovalhost',
      name: 'ovalhost',     
      component: () => import('@/views/Ovalhost')
    },
    {
      path: '/download',
      name: 'download',     
      component: () => import('@/views/Download')
    },  
    {
      path: '/pricing',
      name: 'pricing',     
      component: () => import('@/views/Pricing')
    },
    {
      path: '/notice',
      name: 'notice',     
      component: () => import('@/views/Notice')
    }
  ]
})
