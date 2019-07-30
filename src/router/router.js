import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/Main'
import Login from '../components/Login'
import A from '../components/A'
import B from '../components/B'
import C from '../components/C'
import D from '../components/D'

Vue.use(VueRouter);

export default new VueRouter({
	routes:[
		{
			path:'/',component:Login
		},
		{
			path:'/main/:userid',
			component:Main,
			children:[
				{
					path:'',
					component:A,
					name:'main'
				},
				{
					path:'b',
					component:B,
					name:'b'
				},
				{
					path:'c',
					component:C,
					name:'c'
				},
				{
					path:'d',
					component:D,
					name:'d'
				}
			]
		}
	],
	mode:'history'
})