<template>
  <div class="container">

    <form class="">
      <div class="well">
        <h4>Add User</h4>
        <div class="form-group">
          <label class="pull-left">Username</label>
          <input class="form-control" type="text" v-model="user.username">
        </div>
        <div class="form-group">
          <label class="pull-left">Password</label>
          <input class="form-control" type="password" v-model="user.password">
        </div>
        <div class="form-group">
          <label class="pull-left">Full name</label>
          <input class="form-control" type="text" v-model="user.fullname">
        </div>
      </div>

      <button type="submit" class="btn btn-large btn-block btn-primary full-width" @click="addUser">Submit</button>

    </form>

  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello ari',
      user: {username: '', password: '', fullname: ''}
    }
  },
  methods: {
    addUser () {
      let newUser = {
        username: this.user.username,
        password: this.user.password,
        fullname: this.user.fullname
      }
      // console.log(newUser)
      axios.post('http://35.200.25.235/users/signup', newUser)
      .then(result => {
        this.$router.push('/')
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
