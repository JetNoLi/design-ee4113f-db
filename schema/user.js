const mongoose = require("mongoose")

const User = new mongoose.model("User",mongoose.Schema({
  name: String,
  id: String,
  age: Number,
  dob: Date,
  role: String,
  dateOfInitialEmployment: Date

}))

module.exports = User;
