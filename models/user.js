const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required:"Please enter a username"
    },
    email: {
        type: String,
        required: "Please enter an email",
        unique: true,
        trim: true
        //match: need regex here to validate email
    },
    password: {
        type: String,
        required: true,
        validate: [function(input) {
            return input.length >= 8
        }, "Password needs to be at least 8 characters"]
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;