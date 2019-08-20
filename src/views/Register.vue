<template>
    <div>
      <form>
        <p>用户名：</p><input type="text" v-model="userName"/>
        <p>密码：</p><input type="password" v-model="password"/>
        <p>再次输入密码：</p><input type="password" v-model="repeat"/>
        <button @click="register()">注册</button>
        <button @click="cancel()">取消</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      userName: '',
      password: '',
      repeat: ''
    }
  },
  methods: {
    register () {
      if (this.password !== this.repeat) {
        alert('两次密码输入不一致')
        return false
      }
      this.$router.push('/')
    },
    cancel () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
