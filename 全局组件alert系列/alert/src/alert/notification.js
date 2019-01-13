import Alert from './alert.vue'
import Vue from 'vue'

Alert.newInstance = properties => {
  let props = {type:'alert'}
  let Instance
  if (properties === 'confirm') {
    props = {type: 'confirm'}
    Instance = new Vue({
      data: props,
      render (h) {
        return h(Alert, {
          props: props,
          on: {
            click() {
              console.log(1111)
            }
          }
        });
      }
    });
  } else {
    Instance = new Vue({
      data: props,
      render (h) {
        return h(Alert, {
          props: props,
          on: {
            click() {
              console.log(1111)
            }
          }
        });
      }
    });
  }

  const component = Instance.$mount();
  document.body.appendChild(component.$el);

  const alert = Instance.$children[0];

  return {
    add (noticeProps) {
      alert.add(noticeProps);
    },
    remove (name) {
      alert.remove(name);
    },
    addConfirm (noticeProps) {
      alert.addConfirm(noticeProps);
    },
    removeConfirm (name) {
      alert.remove(name)
    }
  }
}
export default Alert