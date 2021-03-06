import {
  GET_HABITS,
  ADD_HABIT,
  DELETE_HABIT,
  UPDATE_HABIT
} from "../actions/types";

const initialState = {
  habits: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_HABITS: {
      return {
        ...state,
        habits: action.payload
      };
    }
    case ADD_HABIT:
      return {
        ...state,
        habits: [action.payload, ...state.habits]
      };
    case UPDATE_HABIT:
      return {
        ...state,
        habits: state.habits.map(habit => {
          if (habit._id === action.payload.id) {
            return {
              ...habit,
              history: [...habit.history, action.payload.today],
              currentStreak: action.payload.currentStreak,
              maxStreak: action.payload.maxStreak,
              totalDays: action.payload.totalDays
            };
          }
          return habit;
        })
      };
    case DELETE_HABIT:
      return {
        ...state,
        habits: state.habits.filter(habit => habit._id !== action.payload)
      };

    default:
      return state;
  }
}
