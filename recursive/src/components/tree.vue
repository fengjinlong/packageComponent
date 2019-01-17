<template>
  <div>
    <tree-node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      @on-toggle-expand="ttt"
      @on-check-change="ttt1"
      :show-checkbox="showCheckbox"
    ></tree-node>
  </div>
</template>
<script>
  import TreeNode from './node.vue';
  import { deepCopy } from './assist.js';

  export default {
    name: 'Tree',
    components: { TreeNode },
    props: {
      data: {
        type: Array,
        default () {
          return [];
        }
      },
      showCheckbox: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        cloneData: []
      }
    },
    created () {
      this.rebuildData();
    },
    watch: {
      data () {
        this.rebuildData();
      }
    },
    methods: {
      rebuildData () {
        this.cloneData = deepCopy(this.data);
      },
      emitEvent (eventName, data) {
        this.$emit(eventName, data, this.cloneData);
      },
      ttt1 () {},
      ttt () {
        console.log('ttt')
      }
    }
  }
</script>