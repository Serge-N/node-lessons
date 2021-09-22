var express = require("express");
var path = require("path");
var fs = require("fs");
var morgan = require("morgan");

const port = 3000;

// create an express app
var app = express();

app.use(morgan("short"));

app.use(function (req, res, next) {
  var filePath = path.join(__dirname, "static", req.url);

  console.log(filePath);
  fs.stat(filePath, function (err, fileInfo) {
    if (err) {
      next();
      return;
    }

    if (fileInfo.isFile()) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });
});

app.use(function(req, res){
  res.status(404);
  res.send("File not found");
});

app.listen(port, function () {
  console.log("App started on port " + port);
});