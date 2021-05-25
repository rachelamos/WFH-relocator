const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
//Discuss with team and see which info needs to be here
})

const Location = mongoose.model("Location", locationSchema )

module.exports = Location