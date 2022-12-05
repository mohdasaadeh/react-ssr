import { combineReducers } from "redux";

import { usersReducer } from "./reducers";

const reducers = combineReducers({
  users: usersReducer,
});

export default reducers;
