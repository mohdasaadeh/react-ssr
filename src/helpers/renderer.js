import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "../client/src/App";

export const renderer = (req, store) => {
  const client = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
        <head></head>
        <body>
            <div id="root">${client}</div>
            <script src="client_bundle.js"></script>
        </body>
    </html>
  `;
};
