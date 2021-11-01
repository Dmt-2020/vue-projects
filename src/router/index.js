import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Layout from '../layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/program',
        component: () => import('../views/Program.vue'),
        children: [
          { path: '/program/table', component: () => import('../views/program/ProgramTable.vue') },
          { path: '/program/form', component: () => import('../views/program/ProgramForm.vue') },
          { path: '/program/video', component: () => import('../views/program/Video.vue') },
          { path: '/program/preproject', component: () => import('../views/program/PreProject.vue') },
          { path: '/program/virtualtable', component: () => import('../views/program/VirtualTable.vue') },
          { path: '/program/selftable', component: () => import('../views/program/SelfTable.vue') },
        ]
      },
      {
        path: '/echarts',
        component: () => import('../views/Echarts.vue')
      }
    ]
  },
  // {
  //   path: '/home/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})


//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
