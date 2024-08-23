const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/envConfig.js");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

module.exports = app;
