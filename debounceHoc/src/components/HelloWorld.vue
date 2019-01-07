<template>
  <div class="hello">
    <HocButton 
      @click="HOCclick" 
      type="primary"
      :btnName="btnName"
      size="small">btn
      </HocButton>
    <HocButton 
      @click="HOCclick2" 
      type="error">btn</HocButton>


    <div>
      基础组件
      <base-component :test="test">
        <h2 slot="slot1">BaseComponent slot</h2>
        <p>default slot</p>
      </base-component>
      HOC组件
      <enhanced-com>
        <h2 slot="slot1">EnhancedComponent slot</h2>
        <p>default slot</p>
      </enhanced-com>
    </div>
  </div>
</template>

<script>
import HocButton from './HocButton.js'

import BaseComponent from './Qq.vue'
import hoc from './Qq.js'
const EnhancedCom = hoc(BaseComponent)
export default {
  name: 'HelloWorld',
  data () {
    return {
      btnName: '按钮',
      test: '1111111111',
    }
  },
  created () {
  },
  methods: {
    HOCclick2 () {
      console.log(8888)
    },
    HOCclick () {
      console.log('6666')
    }
  },
  components: {
    HocButton,
    BaseComponent,
    EnhancedCom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
