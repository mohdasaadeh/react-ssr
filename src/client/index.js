import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./src/App";

const container = document.getElementById("root");

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  container
);
