import axios from "axios";
import { GET_HABITS, UPDATE_HABIT, ADD_HABIT } from "./types";

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
