var express = require("express");
var path = require("path");
var fs = require("fs");
var morgan = require("morgan");

const port = 3000;

// create an express app
var app = express();

app.use(morgan("tiny"));

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use(function (req, res) {
  res.status(404);
  res.send("File not found");
});

app.listen(port, function () {
  console.log("App started on port " + port);
});