import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav/TypeNav.vue'

import './plugins/swiper' // 加载swiper的配置
import './mock/mockServer'


Vue.component('TypeNav',TypeNav)

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },

  render: h => h(App),
  router,
  store,
}).$mount('#app')
