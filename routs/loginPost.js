//Mongoose stuff
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs")

//Mongoose stuff ending


module.exports = function(req, res){

  mongoose.connect("mongodb:bagi:rumilirakija@ds135798.mlab.com:35798/pirate-ships");
  var user = require("./schema/user_schema.js");

  user.find({username: req.body.username}, function(err, data){

    if (err) throw err;

    if(data[0]){

      bcrypt.compare(req.body.password, data[0].password, function(err, result) {


        if(result){

          res.render("login-success", {"data": data[0]} );

        }else if(!result){

          res.render("login-fail", {data: data, fail: "Your password is incorect"});

        }

      });
    }else{
      res.render("login-fail", {data: data, fail: "No such username"});
    }
  });
  mongoose.connection.close();
};
