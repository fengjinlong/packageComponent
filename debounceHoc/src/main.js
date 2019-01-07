import Vue from 'vue'
import App from './App'
import iView from 'iview'

Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
