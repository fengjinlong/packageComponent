<template>
  <div class="hello">
    <HocButton 
      @click="HOCclick" 
      type="primary"
      :btnName="btnName"
      size="small">
      <div>111</div>
      </HocButton>
    <HocButton 
      @click="HOCclick2" 
      type="error"></HocButton>
  </div>
</template>

<script>
import HocButton from './HocButton.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      btnName: '按钮'
    }
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
    HocButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
