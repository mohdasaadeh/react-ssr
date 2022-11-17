import React from "react";
import { renderToString } from "react-dom/server";

import App from "./src/app";

const client = renderToString(<App />);

export default client;
