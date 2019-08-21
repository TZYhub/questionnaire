<template>
  <div class="align-items-centerjustify-content-center">
    <div class="col-md-4">
      <div>
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group
            id="input-group-1"
            label="用户名:"
            label-for="input-1"
            class="text-left"
          >
            <b-form-input
              id="input-1"
              v-model="form.userName"
              type="email"
              required
              placeholder="请输入用户名"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="密码:" label-for="input-2" class="text-left">
            <b-form-input
              id="input-2"
              type="password"
              v-model="form.password"
              required
              placeholder="请输入密码"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="确认密码:" label-for="input-2" class="text-left">
            <b-form-input
              id="input-2"
              type="password"
              v-model="form.repeat"
              required
              placeholder="请输入密码"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">注册</b-button>
          <b-button @click="onCancel()" variant="secondary">取消</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      form: {
        userName: '',
        password: '',
        repeat: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      if (this.form.password !== this.form.repeat) {
        alert('两次密码输入不一致')
        return false
      }
      this.$router.push('/')
    },
    onCancel () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
