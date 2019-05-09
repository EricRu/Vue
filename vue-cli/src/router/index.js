import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/Login/login'
import Home from '@/view/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:"/login",
      name:'login',
      component: login
    },
    {
      path:"/home",
      name:'Home',
      component: Home
    },
  ],
  // mode:"history"
})


