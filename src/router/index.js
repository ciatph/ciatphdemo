import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Maps from '@/components/pages/Maps'
import Documents from '@/components/pages/Documents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },
    {
      path: '/documents',
      name: 'Documents',
      component: Documents
    }
  ]
})
