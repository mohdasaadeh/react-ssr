import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../client/src/App";

module.exports = (req) => {
  const client = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <App />
    </StaticRouter>
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
