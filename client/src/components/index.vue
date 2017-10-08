<template lang="html">
  <div class="">
    <NavBar/>
    <Todo :datatodocomponent="todo"/>
  </div>
</template>

<script>
import axios from 'axios'
import Todo from '@/components/Todo'
import NavBar from '@/components/NavBar'
export default {
  data () {
    return {
      todo: []
    }
  },
  components: {
    NavBar,
    Todo
  },
  methods: {
    ceklogin () {
      if (localStorage.tokenauth) {
        if (localStorage.tokenauth === 'undefined') {
          this.$router.push('/')
        } else {
          this.$router.push('/index')
        }
      } else {
        this.$router.push('/')
      }
    },
    gettodo () {
      var config = {
        headers: {'token': localStorage.getItem('tokenauth')}
      }
      axios.get(`http://35.200.25.235/todo`, config)
      .then(result => {
        console.log(result.data)
        this.todo = result.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.ceklogin()
    // var token = localStorage.getItem(localStorage.tokenauth)
    // console.log(localStorage.tokenauth)

    if ('tokenauth' in localStorage) {

    } else {
      this.$router.push('/')
    }

    // if (localStorage.tokenauth === 'undefined' || localStorage.tokenauth === '') {
    //   this.$router.push('/')
    //     // Code for localStorage/sessionStorage.
    // } else {
    //
    // }
    this.gettodo()
  }
}
</script>

<style lang="css">
</style>
