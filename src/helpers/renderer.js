import React from "react";
import { renderToString } from "react-dom/server";

import App from "../client/src/App";

module.exports = () => {
  const client = renderToString(<App />);

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
