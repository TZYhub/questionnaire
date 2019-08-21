<template>
  <div id="app">
    <app-header v-if="header_show"></app-header>
    <router-view v-on:header="header" v-on:footer="footer"></router-view>
    <!--<app-footer class="footer" v-if="footer_show"></app-footer>-->
  </div>
</template>
<script>
import Header from './components/Header'
// import Footer from './components/Footer'
export default {
  name: 'App',
  data () {
    return {
      header_show: true,
      footer_show: true
    }
  },
  components: {
    'app-header': Header
    // 'app-footer': Footer
  },
  methods: {
    header: function (bool) {
      this.header_show = bool
    }
    // footer: function (bool) {
    //   this.footer_show = bool
    // }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
footer{
  position:fixed;
  bottom:0;
}
</style>
