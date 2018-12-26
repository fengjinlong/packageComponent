<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import AsyncValidator from 'async-validator'
  import Emitter from '@/components/mixins/emitter.js'
  export default {
    name: 'JFormItem',
    mixins: [ Emitter ],
    inject: ['form'],
    data () {
      return {
        validateState: '',  // 校验状态
        validateMessage: '',  // 校验不通过时的提示信息
      }
    },
    // label：单个表单组件的标签文本，类似原生的 <label> 元素，类型为 String。
    // prop：对应表单域 Form 组件 model 里的字段，用于在校验或重置时访问表单组件绑定的数据，类型为 String。
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    computed: {
      // 从 Form 的 model 中动态得到当前表单组件的数据
      fieldValue () {
        return this.form.model[this.prop];
      }
    },
    // 组件渲染时，将实例缓存在 Form 中
    mounted () {
      // 如果没有传入 prop，则无需校验，也就无需缓存
      if (this.prop) {
        this.dispatch('iForm', 'on-form-item-add', this);
        this.setRules();
      }
    },
    methods: {
      setRules () {
        this.$on('on-form-blur', this.onFieldBlur)
        this.$on('on-form-change', this.onFieldChange)
      },
      // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
      getRules () {
        let formRules = this.form.rules;
        formRules = formRules ? formRules[this.prop] : [];
        return [].concat(formRules || []);
      },
    },
    // 组件销毁前，将实例从 Form 的缓存中移除
    beforeDestroy () {
      this.dispatch('iForm', 'on-form-item-remove', this);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
