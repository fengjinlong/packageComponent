<template>
  <div>
    <label v-if="label" :class="{ 'i-form-item-label-required': isRequired }">{{ label }}</label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
    </div>
  </div>
</template>
<script>
  import AsyncValidator from 'async-validator'
  import Emitter from '@/mixins/emitter.js'
  export default {
    name: 'JFormItem',
    mixins: [ Emitter ],
    inject: ['form'],
    data () {
      return {
        isRequired: false,  // 是否为必填
        validateState: '',  // 校验状态
        validateMessage: '',  // 校验不通过时的提示信息
      }
    },
    // label：单个表单组件的标签文本，类似原生的 <label> 元素，类型为 String。
    // prop：对应表单域 Form 组件 model 里的字段，用于在校验或重置时访问表单组件绑定的数据，类型为 String。
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    computed: {
      // 从 Form 的 model 中动态得到当前表单组件的数据
      fieldValue () {
        return this.form.model[this.prop];
      }
    },
    // 组件渲染时，将实例缓存在 Form 中
    mounted () {
      // 如果没有传入 prop，则无需校验，也就无需缓存
      if (this.prop) {
        this.dispatch('JForm', 'on-form-item-add', this)
        // 设置初始值，以便在重置时恢复默认值
        this.initialValue = this.fieldValue
        this.setRules()
        this.$on('on-form-blur', this.onFieldBlur)
        this.$on('on-form-change', this.onFieldChange)
      }
    },
    methods: {
      setRules () {
        let rules = this.getRules();
        if (rules.length) {
          rules.every((rule) => {
            // 如果当前校验规则中有必填项，则标记出来
            this.isRequired = rule.required;
          });
        }
        // this.$on('on-form-blur', this.onFieldBlur)
        // this.$on('on-form-change', this.onFieldChange)
      },
      onFieldBlur() {
        this.validate('blur');
      },
      onFieldChange() {
        this.validate('change');
      },
      // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
      getRules () {
        let formRules = this.form.rules;
        formRules = formRules ? formRules[this.prop] : [];
        return [].concat(formRules || []);
      },
      // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
      getFilteredRule (trigger) {
        const rules = this.getRules()
        // !rule.trigger 用于提交按钮验证的
        // rule.trigger.indexOf(trigger) !== -1 用于失去焦点和改变值验证的
        return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
      },
      
      validate(trigger, callback = function () {}) {
        let rules = this.getFilteredRule(trigger);
        if (!rules || rules.length === 0) {
            return true;
        }
        // 设置状态为校验中
        this.validateState = 'validating';
        // 以下为 async-validator 库的调用方法
        let descriptor = {};
        descriptor[this.prop] = rules;
        const validator = new AsyncValidator(descriptor);
        let model = {};
        model[this.prop] = this.fieldValue;
        validator.validate(model, { firstFields: true }, errors => {
            this.validateState = !errors ? 'success' : 'error';
            this.validateMessage = errors ? errors[0].message : '';
            callback(this.validateMessage);
        });
      },
      resetField () {
        this.validateState = '';
        this.validateMessage = '';

        this.form.model[this.prop] = this.initialValue;
      },
    },
    // 组件销毁前，将实例从 Form 的缓存中移除
    beforeDestroy () {
      this.dispatch('iForm', 'on-form-item-remove', this);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .i-form-item-label-required:before {
    content: '*';
    color: red;
  }
  .i-form-item-message {
    color: red;
  }
</style>
