import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

import reducers from "../client/src/redux/store";

export const createReduxStore = (req) => {
  const api = axios.create({
    baseURL: "http://react-ssr-api.herokuapp.com/",
    headers: { Cookie: req.get("cookie") },
  });

  return createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(api))
  );
};
