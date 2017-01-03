module.exports = function(req, res){
  console.log(req.params.user);
  res.render("profile", {data: req});
}
