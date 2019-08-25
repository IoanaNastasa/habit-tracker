import { GET_HABITS } from "../actions/types";

const initialState = {
  habits: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_HABITS:
      return {
        ...state,
        habits: action.payload
      };
    default:
      return state;
  }
}
