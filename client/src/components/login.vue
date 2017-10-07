<template>
  <div class="container">
    <form class="">
      <div class="well">
        <h4>Login</h4>
        <div class="form-group">
          <label class="pull-left">Username</label>
          <input class="form-control" type="text" v-model="user.username">
        </div>
        <div class="form-group">
          <label class="pull-left">Password</label>
          <input class="form-control" type="password" v-model="user.password">
        </div>
      </div>
      <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="login">Submit</button><br>
      <router-link :to="'/register'"><button type="button" name="button" class="btn btn-large btn-block btn-primary full-width">Register</button></router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
// import router from './router'
export default {
  data () {
    return {
      user: {username: '', password: ''}
    }
  },
  methods: {
    login () {
      // console.log(this.user)
      axios.post(`http://localhost:3000/users/signin`, this.user)
      .then(data => {
        console.log(data)
        localStorage.setItem('tokenauth', data.data.token)
        this.$router.push('index')
      })
      .catch(err => {
        console.log(err)
      })
    },
    ceklogin () {
      if (localStorage.tokenauth) {
        this.$router.push('index')
      } else {
        this.$router.push('/')
      }
    }
  },
  created () {
    this.ceklogin()
  }
}
</script>

<style lang="css">
</style>
