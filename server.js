var express = require('express');
var app = express();

//set port
var port = process.env.PORT || 8080

//allow static files in the current_dir/public to run
app.use(express.static(__dirname + "/public"));

//routes
app.get("/", function(req, res) {
  //renders html file
  res.render("index");
})

//listen for requests at the appropriate port
app.listen(port, function() {
  console.log("app running");
})
