const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HabitSchema = new Schema({
  habitName: {
    type: String
  },
  history: {
    type: Array // {date, value: true/false}
  }
});

// module.exports.HabitSchema = HabitSchema;
module.exports = Habit = mongoose.model("habits", HabitSchema);
