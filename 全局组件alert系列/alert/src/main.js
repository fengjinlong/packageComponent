import Vue from 'vue'
import App from './App.vue'
import Alert from './alert/alert.js'
Vue.prototype.$Alert = Alert

new Vue({
  el: '#app',
  render: h => h(App)
})
