import Vue from 'vue'
import App from './App.vue'
import Alert from './alert/alert.js'
import Confirm from './alert/confirm.js'
Vue.prototype.$Alert = Alert
Vue.prototype.$Confirm = Confirm

new Vue({
  el: '#app',
  render: h => h(App)
})
