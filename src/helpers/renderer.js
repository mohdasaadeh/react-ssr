import React from "react";
import { renderToString } from "react-dom/server";

import App from "../client/src/App";

const Wrapper = () => {
  return (
    <html>
      <head></head>
      <body>
        <div id="root">
          <App />
        </div>
        <script src="client_bundle.js"></script>
      </body>
    </html>
  );
};

module.exports = () => {
  return renderToString(<Wrapper />);
};
