import Vue from 'vue'
import Vuex from 'vuex'

import footerStatus from './modules/footerStatus'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		footerStatus
	}
})
export default store;