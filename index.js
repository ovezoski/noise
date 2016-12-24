var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


// Mongoose stuff
mongoose.connect("mongodb://bagi:rumilirakija@ds135798.mlab.com:35798/pirate-ships");

var userSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  gender: String
});
var ship = mongoose.model("Users", userSchema);
//Mongoose stuff ending


var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();
app.use("/assets", express.static("assets"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("index");
});


app.get("/login", function(req, res){
  res.render("login");
});
app.post("/login",urlencodedParser , function(req, res){

  ship.find({username: req.body.username}, function(err, data){
if (err) throw err;
console.log(data[0].password);
    if(data[0].password==req.body.password){
            res.render("login-success", {data: data});
            console.log("success");
    }else{
        res.render("login-fail", {data: data, fail: "fail"});
    }
  });
});



app.get("/register", function(req, res){
  res.render("register");
});
app.post("/register", urlencodedParser, function(req, res){
  if(require("./modules/register")(req.body)){
    new ship(require("./modules/register")(req.body)).save(function(err){
      res.render("users", {"data": req.body});
    });
  };


  console.log(req.body);
});



app.listen(process.env.PORT || 8080);
console.log("Listening at https:localhost/8080")
