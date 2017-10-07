<template lang="html">
  <div class="">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Wellcome to Todo</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
        <button type="button" name="button" v-on:click="logout">Logout</button>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('tokenauth')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
