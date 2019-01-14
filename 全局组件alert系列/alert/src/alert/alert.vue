<template>
    <div class="alert">
      <div v-show="!confirm" class="alert-main" v-for="item in notices" :key="item.name">
        <div class="alert-content">{{ item.content }}</div>
      </div>
      <div v-show="confirm" class="alert-main" v-for="item in notices2" :key="item.name">
        <div class="alert-content">
          <div>{{ item.content }}？</div>
          <div>
            <button>确认</button>
            <button @click="confirmConcle(item.name)">取消1</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  let seed = 0;
  function getUuid() {
    return 'alert_' + (seed++);
  }
  export default {
    data() {
      return {
        notices: [],
        notices2: [],
        confirm: 0
      }
    },
    created() {
      if (this.$options.parent.type === 'confirm') {
        this.confirm = 1
      } else {
        this.confirm = 0
      }
    },
    methods: {
      add(notice) {
        const name = getUuid();
        let _notice = Object.assign({
          name: name
        }, notice);
        this.notices.push(_notice);
        const duration = notice.duration;
        setTimeout(() => {
          this.remove(name);
        }, duration * 1000);
      },
      remove(name) {
        const notices = this.notices;
        for (let i = 0; i < notices.length; i++) {
          if (notices[i].name === name) {
            this.notices.splice(i, 1);
            break;
          }
        }
      },
      addConfirm(content){
        const name = getUuid()
        let _confirm = Object.assign({name}, content)
        this.notices2.push(_confirm)
      },
      confirmConcle (name) {
        let notices2 = this.notices2;
        for (let i = 0; i < notices2.length; i++) {
          if (notices2[i].name === name) {
            this.notices2.splice(i, 1);
            // this.$emit('ppp2',1)
            break;
          }
        }
      }
    }
  }
</script>
<style>
  #alert {
    width: 400px
  }
  .alert {
    width: 100%;
    border: 1px solid red;
  }
  .alert-content{
    display: block;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    margin-bottom: 8px;
  }

</style>
