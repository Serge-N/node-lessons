var express = require("express");

var app = express();
const port = 3000;

app.get("/random/:min/:max", function (req, res) {
    var min = parseInt(req.params.min);
    var max = parseInt(req.params.max);

    if (isNaN(min) || isNaN(max)) {
        res.status(400).json({ error: "Bad request." });
    }

    var result = Math.round((Math.random() * (max - min) + min));

    res.json({ result: result });
});


app.listen(port, () => console.log("App started on " + port));