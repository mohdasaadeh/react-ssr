import express from "express";

import { renderer, createReduxStore } from "./helpers";

const app = express();

app.use(express.static("build"));

app.get("*", (req, res) => {
  const store = createReduxStore();

  res.send(renderer(req, store));
});

app.listen("5000", () => {
  console.log("Listening to port 5000 >>>");
});
