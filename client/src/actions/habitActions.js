import axios from "axios";
import { GET_HABITS, UPDATE_HABIT, ADD_HABIT, DELETE_HABIT } from "./types";

export const getHabits = () => dispatch => {
  axios
    .get("/api/habits")
    .then(res =>
      dispatch({
        type: GET_HABITS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const addHabit = habit => dispatch => {
  axios
    .post("api/habits", habit)
    .then(res => {
      dispatch({
        type: ADD_HABIT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const updateHabit = (id, today = "00/00/00") => (dispatch, getState) => {
  const habit = getState().habits.habits.find(habit => habit._id === id);
  console.log(habit);
  // decide new value of currentStreak. If habit was also done yesterday, curentStreak++ else reset it to 1.
  let todayDate = new Date(today);
  let yesterday = new Date(new Date(todayDate - 1).setHours(0, 0, 0, 0));
  let lastDay = new Date(habit.history[habit.history.length - 1]); // last day when habit was done
  let currentStreak =
    yesterday.getTime() === lastDay.getTime() ? habit.currentStreak + 1 : 1;
  console.log(currentStreak);
  // /new
  axios
    .put(`api/habits/${id}`, { today: today, currentStreak: currentStreak })
    .then(res => {
      dispatch({
        type: UPDATE_HABIT,
        payload: { id, today }
      });
    })
    .catch(err => console.log(err));
};

export const deleteHabit = id => dispatch => {
  console.log(id);
  axios
    .delete(`api/habits/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_HABIT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
