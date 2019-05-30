import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/Login/login'
import Home from '@/view/home/home.vue'
import School from '@/view/home/school.vue'
import Program from '@/view/home/program.vue'
import Sports from  '@/view/home/sports.vue'

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
    {
      path:"/school",
      name:'School',
      component: School
    },
    {
      path:"/program",
      name:'Program',
      component: Program
    },
    {
      path:"/sports",
      name:'Sports',
      component: Sports
    },
  ],
  // mode:"history"
})


