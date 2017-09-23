const mongoose = require('mongoose');
const Schema = mongoose.Schema;

todoSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  createdby: {
    type: Schema.Types.ObjectId, ref: "User"
  }
},{
  timestamps: true
})

var Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;
