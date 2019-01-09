<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  import { findComponentsDownward } from '../utils/assist.js';
  import Emitter from '../mixins/emitter.js';

  export default {
    name: 'JCheckboxGroup',
    mixins: [ Emitter ],
    props: {
      value: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    data () {
      return {
        currentValue: this.value,
        childrens: []
      };
    },
    methods: {
      updateModel (update) {
        this.childrens = findComponentsDownward(this, 'JCheckbox');
        if (this.childrens) {
          console.log(this)
          const { value } = this;
          console.log(value)
          this.childrens.forEach(child => {
            child.model = value;

            if (update) {
              child.currentValue = value.indexOf(child.label) >= 0;
              child.group = true;
            }
          });
        }
      },
      change (data) {
        this.currentValue = data;
        this.$emit('input', data);
        this.$emit('on-change', data);
        this.dispatch('JFormItem', 'on-form-change', data);
      }
    },
    mounted () {
      this.updateModel(true);
    },
    watch: {
      value () {
        this.updateModel(true);
      }
    }
  };
</script>