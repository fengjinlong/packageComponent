import Vue from 'vue'
import Notification from './notification.vue';
const funObj = {
  component: null,
  fun() {
    const props = {}; // 这里可以传入一些组件的 props 选项
    let Instance = new Vue({
      render(h) {
        return h(Notification, {
          props: props
        });
      }
    })
    this.component = Instance.$mount();
    // document.getElementById('app').appendChild(component.$el)
    document.body.appendChild(this.component.$el);
    console.log(this.component)
  },
  dis () {
    console.log(1)
    this.component.$destroy()
    console.log(this.component)
    document.body.removeChild(this.component.$el);
  }
  
}
export default funObj
