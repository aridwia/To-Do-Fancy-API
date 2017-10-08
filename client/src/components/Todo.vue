<template lang="html">
  <div class="">
    <div class="container">

      <div class="rows">
        <button class="btn btn-primary" type="button" name="button" data-toggle="modal" data-target="#myModal">New Task</button>

          <!-- Modal -->
          <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">

              <!-- Modal content-->
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">Add Task</h4>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                     <label for="inputEmail" class="col-lg-2 control-label">Title</label>
                     <div class="col-lg-10">
                       <input class="form-control" id="inputEmail" placeholder="Title" type="text" v-model='post.title'>
                     </div>
                   </div><br><br>

                   <div class="form-group">
                     <label for="textArea" class="col-lg-2 control-label">Content</label>
                     <div class="col-lg-10">
                       <textarea class="form-control" rows="5" id="content" v-model="post.content"></textarea>
                     </div>
                   </div><br><br>
                   <div class="rows">
                     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="posttodo()">Add</button>

                   </div>
                </div>
              </div>

            </div>
          </div>

      </div><br>
<!-- ini data todo nya -->
      <div class="rows">
        <div class="col-md-4">
          <div class="panel panel-default" v-for="(todo,index) in datatodocomponent">
            <div class="panel-body">
              <div class="panel panel-primary">
                <div class="panel-heading">
                  <h3 class="panel-title">{{todo.title}}</h3>
                </div>
                <div class="panel-body">
                  {{todo.content}}
                </div>
              </div>
              <button class="btn btn-primary" type="button" name="button" data-toggle="modal" data-target="#edit" @click="operedit(todo)">Edit</button>
              <button class="btn btn-danger" type="button" name="button" v-on:click="deletetodo(todo._id, index)">Delete</button>
              <!-- Modal -->
              <div class="modal fade" id="edit" role="dialog">
                <div class="modal-dialog">

                  <!-- Modal content-->
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title">Edit Task</h4>
                    </div>
                    <div class="modal-body">
                      <div class="form-group">
                         <label for="inputEmail" class="col-lg-2 control-label">Title</label>
                         <div class="col-lg-10">
                           <input class="form-control" id="inputEmail" placeholder="Title" type="text" v-model='edit.title'>
                         </div>
                       </div><br><br>

                       <div class="form-group">
                         <label for="textArea" class="col-lg-2 control-label">Content</label>
                         <div class="col-lg-10">
                           <textarea class="form-control" rows="5" id="content" v-model="edit.content"></textarea>
                         </div>
                       </div><br><br>
                       <div class="rows">
                         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="edittodo">Update</button>

                       </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div><!-- tutup container  -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['datatodocomponent'],
  data () {
    return {
      post: {title: '', content: ''},
      todo: [],
      todoedit: {title: '', content: ''},
      edit: {
        _id: null,
        title: '',
        content: ''
      }
    }
  },
  methods: {
    operedit (todo) {
      this.edit = todo
    },
    posttodo () {
      console.log('ini todo', this.todo)
      var config = {
        headers: {'token': localStorage.getItem('tokenauth')}
      }
      axios.post(`http://localhost:3000/todo`, this.post, config)
      .then(newtodo => {
        this.datatodocomponent.push(this.post)
        console.log(newtodo)
      })
      .catch(err => {
        console.log(err)
      })
    },
    edittodo () {
      var config = {
        headers: {'token': localStorage.getItem('tokenauth')}
      }
      console.log('ini id dari function', this.edit._id)
      axios.put(`http://localhost:3000/todo/${this.edit._id}`, this.edit, config)
      .then(dataedit => {
        console.log(dataedit)
      })
      .catch(err => {
        console.log(err)
      })
    },
    deletetodo (id, index) {
      console.log('ini isinya', this.todo)
      var config = {
        headers: {'token': localStorage.getItem('tokenauth')}
      }
      var self = this
      axios.delete(`http://localhost:3000/todo/${id}`, config)
      .then(responhapus => {
        console.log('ini resposnhapus', responhapus)
        console.log('tes', self.todo)
        self.datatodocomponent.splice(index, 1)
      })
      .catch(err => {
        console.log(err, 'ini')
      })
    }
  },
  created () {
    // this.ceklogin()
    // console.log('inidata', this.datatodocomponent)
    console.log('inithis.localStorage', localStorage.tokenauth)
  },
  watch: {
    id () {
      this.deletetodo(this.id)
    }
  }
}
</script>

<style lang="css">
.modal-footer {
    padding: 15px;
    text-align: right;
    border-top: 0px;
}
</style>



<!-- <div class="panel panel-primary" v-for="todo in datatodocomponent">
  <div class="panel-heading">
    <h3 class="panel-title">{{todo.title}}</h3>
  </div>
  <div class="panel-body">
    <div class="panel panel-default">
      <div class="panel-body">
        {{todo.content}}
      </div>
    </div>
    <div>
      <button class="btn btn-primary" type="button" name="button">Edit</button>
      <button class="btn btn-primary"  type="button" name="button">Delete</button>
    </div>
  </div>
</div> -->

<!-- ceklogin () {
  if (localStorage.tokenauth) {
    this.$router.push('index')
  } else {
    this.$router.push('/')
  }
}
}, -->
