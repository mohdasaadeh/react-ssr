import { FETCH_ADMINS } from "../types";

const initialState = {
  data: [],
};

export const adminsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
