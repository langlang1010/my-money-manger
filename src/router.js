import Vue from 'vue'
import Router from 'vue-router'
import Record from './pages/Record.vue'
import Tag from './pages/Tag.vue'
import Edit from './pages/Edit.vue'
import Stastic from './pages/Stastic.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Record',
      component: Record
    }, {
      path: '/tag',
      name: 'Tag',
      component: Tag
    }, {
      path: '/stastic',
      name: 'Stastic',
      component: Stastic
    },{
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
