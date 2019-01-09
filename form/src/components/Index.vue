<template>
  <div style="width:200px;border:1px solid red">
    <JForm ref="form" :model="formValidate" :rules="ruleValidate">
      <JFormItem label="用户名" prop="name">
        <JInput v-model="formValidate.name"></JInput>
      </JFormItem>
      <JFormItem label="邮箱" prop="mail">
        <JInput v-model="formValidate.mail"></JInput>
      </JFormItem>
      <JFormItem label="邮箱1" prop="check">
        <JCheckbox v-model="formValidate.check"></JCheckbox>
      </JFormItem>
      <JFormItem label="group" prop="groupcheck">
        <JCheckboxGroup v-model="formValidate.checkArr" @on-change="fun">
          <JCheckbox label="111"></JCheckbox>
          <JCheckbox label="222"></JCheckbox>
        </JCheckboxGroup>
      </JFormItem>
    </JForm>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>

<script type="text/ecmascript-6">
import JForm from '@/components/JForm'
import JFormItem from '@/components/JFormItem'
import JInput from '@/components/JInput'
import JCheckbox from '@/components/JCheckbox'
import JCheckboxGroup from '@/components/JCheckboxGroup'
export default {
  components: { JForm, JFormItem, JInput,JCheckbox,JCheckboxGroup },
  data () {
    return {
      formValidate: {
        name: '',
        check: '',
        checkArr: [],
        mail: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        check: [
          {type: 'boolean',required: true, message: 'changemust', trigger: 'change'}
        ],
        groupcheck: [
          {required: true, message: 'groupcheckmust', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    fun (v) {
      console.log(v)
    },
    handleSubmit () {
      console.log(this.formValidate.check)
      this.$refs.form.validate((valid) => {
        if (valid) {
        } else {
        }
      })
    },
    handleReset () {
      this.$refs.form.resetFields();
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
