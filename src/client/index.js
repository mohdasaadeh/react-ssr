import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import axios from "axios";

import Routes from "./src/Routes";
import reducers from "./src/redux/store";

const api = axios.create({
  baseURL: "/api",
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(api))
);

const container = document.getElementById("root");

hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>,
  container
);
