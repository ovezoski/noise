var bcrypt = require('bcrypt-nodejs');
var mongoose = require("mongoose");
register = function(data){
  return {username: data.username, firstname: data.firstname, lastname: data.lastname, email: data.email, password: bcrypt.hashSync(data.password1), gender: data.gender}
}


module.exports= function(req, res){

  mongoose.connect("mongodb://bagi:rumilirakija@ds135798.mlab.com:35798/pirate-ships");
  var user = require("./schema/user_schema.js");

  if(register(req.body)){
    new user(register(req.body)).save(function (err){
      res.render("login-fail", {fail: 'Register failed'})
    });
    res.render("users", {"data": req.body});
  }

  mongoose.connection.close();
}
