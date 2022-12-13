import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";

import App from "../client/src/App";

export const renderer = (req, store) => {
  const client = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {renderRoutes(App)}
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
        <head></head>
        <body>
            <div id="root">${client}</div>
            <script>
              window.INITIAL_STATE=${serialize(store.getState())}
            </script>
            <script src="client_bundle.js"></script>
        </body>
    </html>
  `;
};
