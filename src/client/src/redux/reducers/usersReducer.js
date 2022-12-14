import { FETCH_USERS } from "../types";

const initialState = {
  data: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
