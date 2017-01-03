var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var md = require('md5');


/*
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
var users = mongoose.model("Users", userSchema);
//Mongoose stuff ending
*/


var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();
app.use("/assets", express.static("assets"));
app.set("view engine", "ejs");


app.get("/", require("./routs/home.js"));

app.get("/login", require("./routs/loginGet.js"));
app.post("/login",urlencodedParser , require("./routs/loginPost.js"));

app.get("/register", require("./routs/registerGet.js"));
app.post("/register", urlencodedParser, require("./routs/registerPost.js"));

app.get("/active", require("./routs/activeGet.js"));

app.get("/profile/:user", require("./routs/profileGet.js"));


app.listen(process.env.PORT || 8080);
