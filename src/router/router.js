import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'

Vue.use(VueRouter);

export default new VueRouter({
	routes:[
		{
			path:'/',component:Login
		},
		{
			path:'/hello/:id',
			component:HelloWorld,
			name:'hello'
		}
	],
	mode:'history'
})