import Vue from 'vue'
import Router from 'vue-router'
import Record from './pages/Record.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Record',
      component: Record
    },
    {
      path: '/record',
      name: 'Record',
      component: Record
    }
  ]
})
