<template>
  <div class="page" @em="fun">
    <JForm>
      'from'
    </JForm>
    <button @click="btn">1</button>
  </div>
</template>

<script type="text/ecmascript-6">
import JForm from '@/components/JForm'
export default {
  data () {
    return {
      data: []
    }
  },
  mounted() {
    this.$on('em',this.fun)
  },
  methods: {
    btn () {
      console.log(1)
      this.$emit('em','$emit')
    },
    fun (mes) {
      console.log(11)
      console.log(mes)
    }
  },
  components: {
    JForm
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
