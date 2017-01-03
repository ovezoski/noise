var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  username: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  gender: String
});
module.exports = mongoose.model('Users', schema);
