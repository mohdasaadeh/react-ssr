import express from "express";
import { matchRoutes } from "react-router-config";

import App from "./client/src/App";
import { renderer, createReduxStore } from "./helpers";

const app = express();

app.use(express.static("build"));

app.get("*", async (req, res) => {
  const store = createReduxStore();

  const promises = matchRoutes(App, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  await Promise.all(promises);

  res.send(renderer(req, store));
});

app.listen("5000", () => {
  console.log("Listening to port 5000 >>>");
});
