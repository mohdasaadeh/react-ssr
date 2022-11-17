const express = require("express");

const client = require("./client").default;

const app = express();

app.get("/api", (req, res) => {
  res.send(client);
});

app.listen("5000", () => {
  console.log("Listening to port 5000 >>>");
});
