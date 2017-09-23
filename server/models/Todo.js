const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  createby: {
    type: new mongoose.Types.ObjectId
  }
},{
  timestamps: true
})

var Todo = mongoose.model("Todo", todoSchema)

module.exports = {Todo};
