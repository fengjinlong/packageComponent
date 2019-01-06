<template>
  <div style="width:200px;border:1px solid red">
    <JForm ref="form" :model="formValidate" :rules="ruleValidate">
      <JFormItem label="用户名" prop="name">
        <JInput v-model="formValidate.name"></JInput>
      </JFormItem>
      <JFormItem label="邮箱" prop="mail">
        <JInput v-model="formValidate.mail"></JInput>
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
export default {
  components: { JForm, JFormItem, JInput },
  data () {
    return {
      formValidate: {
        name: '',
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
      }
    }
  },
  methods: {
    handleSubmit () {
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
