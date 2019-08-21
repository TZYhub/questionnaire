<template>
  <div>
    <div >
      <div class = "align-items-centerjustify-content-center">
        <div class="col-md-4">
          <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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

              <b-button type="submit" variant="primary">登录</b-button>
              <b-button type="reset" variant="secondary">注册</b-button>
            </b-form>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        userName: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // alert(JSON.stringify(this.form))
      this.$router.push('/home')
    },
    onReset () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>

</style>
