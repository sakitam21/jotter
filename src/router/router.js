import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Main from '../components/Main'
import Login from '../components/Login'
import Index from '../components/Index'
import B from '../components/B'
import C from '../components/C'
import D from '../components/D'
import Userinfo from '../components/Userinfo'
import Newdot from '../components/Newdot'

export default new VueRouter({
	routes:[
		//login
		{
			path:'/',component:Login
		},

		//main
		{
			path:'/main/:userid',
			component:Main,
			children:[
				{
					path:'index',
					component:Index,
					name:'index'
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
		},

		//userinfo
		{
			path:'/userinfo/:userid',
			component:Userinfo,
			name:'userinfo'
		},

		//newdots
		{
			path:'/newdot/:dot_id',
			component:Newdot,
			name:'newdot'
		},
	],
	mode:'history'
})