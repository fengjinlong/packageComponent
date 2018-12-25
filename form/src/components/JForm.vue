<template>
  <form>
    <slot></slot>
  </form>
</template>
<script>
  export default {
    name: 'JForm',
    // model：表单控件绑定的数据对象，在校验或重置时会访问该数据对象下对应的表单数据，类型为 Object。
    // rules：表单验证规则，即上面介绍的 async-validator 所使用的校验规则，类型为 Object。
    props: {
      model: {
        type: Object
      },
      rules: {
        type: Object
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
