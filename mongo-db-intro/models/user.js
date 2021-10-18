var mongoose = require("mongoose");
var bcrypt = require ("bcryptjs");

var SALT_FACTOR = 10;

// create schema
var userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    displayName: String,
    bio: String
});

// create methods
userSchema.methods.name = function () {
    return this.displayName || this.username;
}

// for passwords use a one-way hash