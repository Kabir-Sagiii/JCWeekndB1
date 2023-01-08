var mongoose = require("mongoose");

var userScehma = new mongoose.Schema({
  name: String,
  city: String,
  email: {
    type: "String",
    required: true,
  },
  phone: {
    type: Number,
    default: 777777777,
  },
  gender: String,
});

var user = mongoose.model("user", userScehma);

module.exports = user;
