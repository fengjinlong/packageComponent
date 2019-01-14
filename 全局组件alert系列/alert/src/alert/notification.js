import Alert from './alert.vue';
import Vue from 'vue';

Alert.newInstance = properties => {
  console.log('have')
  let props = {type:'alert'}
  let Instance
  if (properties === 'confirm') {
    props = {type: 'confirm'}
  }

  Instance = new Vue({
    data: props,
    methods: {
      ppp1 () {
        // this.props['pro'] = new Promise()
        // console.log(this.props['pro'])
        console.log(5)
      }
    },

    render (h) {
      return h(Alert, {
        props: props,
        on: {
          // ppp2: this.ppp1()
        }
      });
    }
  });

  const component = Instance.$mount();
  if (document.getElementById('alert') === 'null' || document.getElementById('alert') === null) {
    let a = document.createElement('div')
    a.setAttribute('id', 'alert')
    document.body.appendChild(a)
  }
  document.getElementById('alert').appendChild(component.$el);

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
      return alert
    },
    removeConfirm (name) {
      alert.confirmConcle(name)
    },
    confirmStatus () {
      return props.status
    }
  }
};

export default Alert;