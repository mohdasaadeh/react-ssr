import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";

import Routes from "../client/src/Routes";

export const renderer = (req, store, context) => {
  const client = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
    <html>
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
        </head>
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
