const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HabitSchema = new Schema({
  habitName: {
    type: String
  },
  history: {
    type: Array
  },
  currentStreak: {
    type: Number
  },
  maxStreak: {
    type: Number
  }
});

// module.exports.HabitSchema = HabitSchema;
module.exports = Habit = mongoose.model("habits", HabitSchema);
