import { combineReducers } from "redux";

import { usersReducer, authReducer, adminsReducer } from "./reducers";

const reducers = combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
});

export default reducers;
