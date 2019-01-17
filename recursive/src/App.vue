<template>
  <div id="app">
    <Tree 
    :data="msg" 
    @on-toggle-expand="ttt"
    @on-check-change="check"
    :showCheckbox="true"></Tree>
  </div>
</template>

<script>
import Tree from './components/tree.vue';
export default {
  components: {
    Tree
  },
  methods: {
    ttt (a,b) {
      // console.log(a)
      // console.log(b)
    },
    check(data,a) {
      console.log(data)
      console.log(a)
    }
  },
  name: 'app',
  data () {
    return {
      msg: [
        {
          title: 'parent 1',
          expand: true,
          id: '1',
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              id: '2',
              children: [
                {
                  id: '3',
                  title: 'leaf 1-1-1'
                },
                {
                  id: '4',
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: '11111',
              id: '5',
            }
          ]
        }
      ],
      msg2: [
        {
          title: 'parent 1',
          expand: true,
          id: '1'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
