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

var noop = function(){}

// function that runs before mode is saved
userSchema.pre("save", function(done){
    var user = this;

    if(!user.isModified("password")){
        return done();
    }

    // for passwords use a one-way hash
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        if(err) return done(err);

        bcrypt.hash(user.password, salt, noop, function(err, hashedPassword){
            if(err) return done(err);

            user.password = hashedPassword;
            done();
        })
    });
});

userSchema.methods.checkPassword = function (guess, done){
    bcrypt.compare(guess, this.password, function(err, isMatch){
        done(err, isMatch);
    });
};

var User = mongoose.model("User",userSchema);

module.exports = User;