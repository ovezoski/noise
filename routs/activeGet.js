var mongoose = require("mongoose");

module.exports = function(req, res){

  mongoose.connect("mongodb://bagi:rumilirakija@ds135798.mlab.com:35798/pirate-ships");
  var users = require("./schema/user_schema.js");

  users.find({}, function(err, data){

    if (err) throw err;

    res.render("activeUsers", {data: data});

  });
mongoose.connection.close()
}
