<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="click">$Alert</button>
    <button @click="click2">$Alert2</button>
    <button @click="click3">$Confirm</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    click () {
      let ob = {
        content: '我是提示信息 alert',
        duration: 3
      }
      this.$Alert.info(ob)
    },
    click2 () {
      let ob = {
        content: '我是提示信息 alert2'
      }
      this.$Alert.info(ob)
    },
    click3 () {
      this.$Confirm({content: '我是confirm'})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
