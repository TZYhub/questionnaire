import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Temp from './views/Temp.vue'
import Register from './views/Register'
import Share from './views/Share'
import Statistics from './views/Statistics'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/temp',
      name: 'temp',
      component: Temp
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/share',
      name: 'share',
      component: Share
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics
    }
  ]
})
