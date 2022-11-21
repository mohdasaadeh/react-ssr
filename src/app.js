import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";

import App from "./client/src/App";

const app = express();

app.use(express.static("build"));

app.get("/api", (req, res) => {
  const client = renderToString(<App />);
  const html = `<div id="root">${client}</div><script src="client_bundle.js"></script>`;
  //   const html = `
  //         <html>
  //             <body>
  //               <div id="root">
  //                   ${client}
  //               </div>
  //               <script src="client_bundle.js"></script>
  //             </body>
  //         </html>
  //       `;

  res.send(html);
});

app.listen("5000", () => {
  console.log("Listening to port 5000 >>>");
});
