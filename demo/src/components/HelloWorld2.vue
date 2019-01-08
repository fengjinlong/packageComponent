<template>
  <div class="hello">
    <CC v-model="single"></CC>
  </div>
</template>

<script>
import CC from './checkbox/Checkbox'
export default {
  name: 'HelloWorld2',
  data () {
    return {
      single: true
    }
  },
  watch: {
    single (n,v) {
      console.log(n)
      console.log(v)
    }
  },
  components: {
    CC
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
