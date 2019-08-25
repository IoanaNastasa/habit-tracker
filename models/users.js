// Will use with auth later

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const HabitSchema = require("./Habit");
// Create Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  habits: [HabitSchema]
});

module.exports = User = mongoose.model("user", HabitSchema);
