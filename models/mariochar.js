const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const marioCharSchema = new Schema({
  name: String,
  weight: Number
});

const marioChar = mongoose.model("marioChar", marioCharSchema);


module.exports = marioChar;
