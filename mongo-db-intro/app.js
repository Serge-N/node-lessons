var express = require("express");
var app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.send("you made a GET request, here.");
});

app.post("/", function (req, res) {
    res.send("you made a get POST , gotta save this.");
});

app.put("/", function (req, res) {
    res.send("you made a PUT request, some is old.");
});

app.delete("/", function (req, res) {
    res.send("A delete request, she gotta go?");
});

app.listen(port, () => {
    console.log("app is runing on " + port);
});

// don't forget to version api.