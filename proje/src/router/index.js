import Vue from 'vue'
import Router from 'vue-router'
import CreateItem from '../components/CreateItem.vue';
import DisplayItem from '../components/DisplayItem.vue';
import EditItem from '../components/EditItem.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DisplayItem',
      component: DisplayItem
    },
    {
    	path: '/create/item',
    	name: 'CreateItem',
    	component: CreateItem
    },
    {
    	path: '/edit/:id',
    	name: 'EditItem',
    	component: EditItem
    }
  ]
})
