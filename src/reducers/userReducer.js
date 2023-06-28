import { SET_USER } from "../action/actionType";

// Define the initial state for the user
const INITIAL_STATE = {
  user: null,
};

// Define the userReducer function
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      // Update the state with the user from the action
      return {
        ...state,
        user: action.user,
      };
    default:
      // If the action type doesn't match any case, return the current state
      return state;
  }
};

export default userReducer;
