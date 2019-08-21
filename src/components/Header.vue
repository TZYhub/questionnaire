<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <span class="navbar-brand">调查问卷系统</span>
        <!-- 这个 div 加上 justify-content-end 样式即可 -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav" id="headerNav">
            <li class="nav-item" id="navMainPage">
              <b-nav-item to="/home">主页</b-nav-item>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>

</style>
