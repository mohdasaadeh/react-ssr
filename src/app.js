import express from "express";

import client from "./helpers/renderer";

const app = express();

app.use(express.static("build"));

app.get("/api", (req, res) => {
  res.send(client());
});

app.listen("5000", () => {
  console.log("Listening to port 5000 >>>");
});
