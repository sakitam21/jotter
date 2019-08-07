import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './store/store'

Vue.use(iView)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
