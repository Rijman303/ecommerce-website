const mongoose = require('mongoose');
const userSchema =  new mongoose.Schema({
    phoneNumber: {type:Number},
    userName: {type:String}, 
    password: {type:String},
    email: {type:String},
    cartList: [{type:String}],
    favList: [{type:String}]
  });
  const User = mongoose.model('User', userSchema);

  module.exports =User
