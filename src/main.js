import Vue from 'vue'
import vClickOutside from 'v-click-outside'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/index.scss'

Vue.use(vClickOutside)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
