<template>
  <div>
    <div>home</div>
    <router-view/>
    <router-link to="/temp"><span>新增问卷</span></router-link>

    <b-button>Button</b-button>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>
