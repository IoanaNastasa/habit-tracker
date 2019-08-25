const express = require("express");
const router = express.Router();

// Habit Model
const Habit = require("../../models/Habit");

// @route GET api/habits
// @desc GET All habits

router.get("/", (req, res) => {
  Habit.find().then(habits => res.json(habits));
});

// @route POST api/habits
// @desc POST new habit
router.post("/", (req, res) => {
  const newHabit = new Habit({
    habitName: req.body.habitName,
    history: req.body.history
  });
  newHabit.save().then(habit => res.json(habit));
});

// @route DELETE api/habits
// @desc DELETE habit

router.delete("/:id", (req, res) => {
  Habit.findById(req.params.id)
    .then(habit => habit.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route PUT api/habits
// @route PUT api/habits ---> update habit dates and values

router.put("/:id", (req, res) => {
  Habit.findByIdAndUpdate(
    { _id: req.params.id },
    { $addToSet: { history: req.body.el } },
    { new: true }
  )
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
