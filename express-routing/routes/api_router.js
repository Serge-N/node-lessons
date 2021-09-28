var express = require ("express");

var ALLOWED_IPS = [
    "127.0.0.1",
    "102.148.59.80"
];

var api = express.Router();

api.use(function(req, res, next){
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !==-1;
    if(!userIsAllowed){
        res.status(401).send("Not authorised!")
    } else {
        next();
    }
});

api.get("/users", function(req, res) { /* ... */ });
api.post("/user", function(req, res) { /* ... */ });

api.get("/messages", function(req, res) { /* ... */ });
api.post("/message", function(req, res) { /* ... */ });

module.exports = api;