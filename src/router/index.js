/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login.vue'
import reportlist from '../pages/report/reportlist.vue'
import reportdetail from '../pages/report/reportdetail.vue'


// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/reportlist',
      component: reportlist,
      meta: {
        showFooter: true
      }
    },{
      path: '/reportdetail',
      component: reportdetail
    },
  ]
})
