"use strict";
import express from "express";
import http from "http";
import bodyParser from "body-parser";

import { router } from "./router";

const port = process.env.PORT || 8080;

const app = express();
const server = http.Server(app);

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(router);

// app.get("/", (req, res) => res.send("Hello world"));

server.listen(port, () =>
  console.log(`Contento backend app listening on port ${port}`)
);
