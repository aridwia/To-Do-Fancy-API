<template>
  <div id="app">
    <!-- <login></login> -->
<!-- <NavBar/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar'
import login from '@/components/login'
// import NavBar from '@/components/NavBar'
export default {
  name: 'app',
  components: {
    login
  }
}
</script>

<style>
#app {

}
</style>
