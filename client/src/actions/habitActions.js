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

export const updateHabit = (id, today = "00/00/00") => dispatch => {
  axios.put(`api/habits/${id}`, today).then(res => {
    dispatch({
      type: UPDATE_HABIT,
      payload: { id, today }
    });
  });
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
