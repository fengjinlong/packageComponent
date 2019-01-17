<template>
  <div>
    <myComponent :render="render"></myComponent>
  </div>
</template>
<script>
  import myComponent from './myComponent.vue';
  
  export default {
    components: { myComponent },
    data () {
      return {
        render: (h) => {
          return h('div', {
            style: {
              color: 'red'
            }
          }, '自定义内容');
        }
      }
    }
  }
</script>