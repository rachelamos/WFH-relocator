const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({

    city: {
        type: String,
        required: "please enter a city name"
    },
    state: {
        type: String,
        required: "please enter a state",
        maxlength: 2
    },
    providerCount: {
        type: Number
    },
    planCount: {
        type: Number
    },
    topSpeed: {
        type: Number
    },
    avgPrice: {
        type: String
    },
    costOfLiving: {
        type: String
    }

})

const Location = mongoose.model("Location", locationSchema )

module.exports = Location