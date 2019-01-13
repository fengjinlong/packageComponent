<template>
  <div class="con">
    <div v-show="!confirm" class="alert">
      <div class="alert-main" v-for="item in notices" :key="item.name">
        <div class="alert-content">{{ item.content }}</div>
      </div>
    </div>
    <div v-show="confirm" class="confirm">
      <div class="confirm-main" v-for="item in notices2" :key="item.name">
        <div class="confirm-content">
          <div>{{ item.content }}？</div>
          <div>
            <button>确认</button>
            <button @click="confirmConcle(item.name)">取消1</button>
          </div>
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
      console.log(this.$options.parent.type)
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
        // 定时移除，单位：秒
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
        console.log(name)
        console.log(notices2)
        for (let i = 0; i < notices2.length; i++) {
          if (notices2[i].name === name) {
            this.notices2.splice(i, 1);
            break;
          }
        }
      }
    }
  }

</script>
<style>
  .con {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .alert,.confirm {
    position: fixed;
    width: 100%;
    top: 16px;
    left: 0;
    text-align: center;
    pointer-events: none;
  }

  .alert-content,.confirm-content {
    display: inline-block;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    margin-bottom: 8px;
  }

</style>
