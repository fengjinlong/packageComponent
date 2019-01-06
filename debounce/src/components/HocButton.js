function debounce (func, delay, context) {
  if (func.timer) {
    clearTimeout(func.timer)
  }
  func.timer = setTimeout(function () {
    func.call(context)
  }, delay)
}
export default {
  props: {
    btnName: {
      type: String,
      default () {
        return "btn"
      }
    }
  },
  name: 'ButtonHoc',
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    handleClickLink () {
      debounce(this.$listeners.click, 300, this)
    }
  },
  render(h) {
    const slots = Object.keys(this.$slots).reduce((arr, key) => arr.concat(this.$slots[key]), []).map(vnode => {
      vnode.context = this._self
      return vnode
    })
    return h('Button', {
      on: {
        click: this.handleClickLink
      },
      attrs: this.$attrs,
      scopedSlots: this.$scopedSlots
    // }, slots)
    }, this.btnName)
  },
}