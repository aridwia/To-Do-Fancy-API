const mongoose = require('mongoose');

userSchema = new mongoose.Schema ({
  username: {
    type: String
  },
  password: {
    type: String
  },
  fullname: {
    type: String
  }
},{
  timestamps: true
})

var User = mongoose.model('User',userSchema)

module.exports = User;
