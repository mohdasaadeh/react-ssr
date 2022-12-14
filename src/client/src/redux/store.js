import { combineReducers } from "redux";

import { usersReducer, authReducer } from "./reducers";

const reducers = combineReducers({
  users: usersReducer,
  auth: authReducer,
});

export default reducers;
