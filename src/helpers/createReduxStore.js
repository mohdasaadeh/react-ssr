import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../client/src/redux/store";

export const createReduxStore = () => {
  return createStore(reducers, {}, applyMiddleware(thunk));
};
