import { CHECK_USER } from "../types";

const initialState = {
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};
