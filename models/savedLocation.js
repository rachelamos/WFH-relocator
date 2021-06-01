const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedLocationSchema = new Schema({

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
    },
    userID: {
        type: Number
    }

});

const SavedLocation = mongoose.model("SavedLocation", savedLocationSchema );

module.exports = SavedLocation;