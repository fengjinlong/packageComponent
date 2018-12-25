<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import Emitter from '@/components/mixins/emitter.js'
  export default {
    name: 'JFormItem',
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
