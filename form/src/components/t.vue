<template>
  <div class="">
    <input type="checkbox" id="jack1" value="Jack1" v-model="checkedNames">
    <label for="jack1">Jack</label>
    <input type="checkbox" id="jack2" value="Jack2" v-model="checkedNames">
    <label for="jack2">Jack</label>
    <input type="checkbox" id="jack3" value="Jack3" v-model="checkedNames">
    <label for="jack3">Jack</label>
    <p>{{checkedNames}}</p>
  </div>
</template>

<script>
  export default {
    name: '',
    created() {

    },
    data() {
      return {
        checkedNames: []
      }
    }
  }

</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>

</style>
