import { FETCH_USERS } from "../types";

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
