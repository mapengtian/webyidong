import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')路由懒加载方式
]

const router = new VueRouter({
  routes
})

export default router
