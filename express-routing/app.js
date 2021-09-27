var express = require("express");
var morgan = require("morgan");

const port = 3000;

// create an express app
var app = express();

app.use(morgan("tiny"));

app.get("/test", (req, res) => {
  res.send("Welcome to the test page");
});


// regular expressions can also be used to solve this problem
app.get("/user/:userid", (req, res) => {
  var base = 10;
  var userId = parseInt(req.params.userid, base);
  console.log("user is id is :", userId);
  res.end();
});

app.get("/search", (req, res) => {
  var question = req.query.q;
  console.log(question);
  res.end();
});

app.use(function (req, res) {
  res.send("Page Not Found!").status(404);
});

app.listen(port, function () {
  console.log("App started on port " + port);
});