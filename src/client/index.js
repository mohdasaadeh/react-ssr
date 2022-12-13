import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./src/App";
import reducers from "./src/redux/store";

const store = createStore(reducers, {}, applyMiddleware(thunk));

const container = document.getElementById("root");

hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(App)}</BrowserRouter>
  </Provider>,
  container
);
