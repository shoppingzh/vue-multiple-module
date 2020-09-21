import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@admin/views/index')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
