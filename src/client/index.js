import React from "react";
import { hydrate } from "react-dom";

import App from "./src/App";

const container = document.getElementById("root");

hydrate(<App />, container);
