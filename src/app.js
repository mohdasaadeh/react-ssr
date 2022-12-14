import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";

import Routes from "./client/src/Routes";
import { renderer, createReduxStore } from "./helpers";

const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";

      return opts;
    },
  })
);

app.use(express.static("build"));

app.get("*", async (req, res) => {
  const store = createReduxStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map((promise) => {
      return (
        promise &&
        new Promise((resolve) => {
          promise.then(resolve).catch(resolve);
        })
      );
    });

  await Promise.all(promises);

  const context = {};

  const client = renderer(req, store, context);

  if (context.url) {
    return res.redirect(301, context.url);
  }

  if (context.notFound) {
    res.status(404);
  }

  res.send(client);
});

app.listen("3000", () => {
  console.log("Listening to port 3000 >>>");
});
