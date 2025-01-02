import express from "express";
import morgan from "morgan";
import colors from "colors";

const app = express();
const PORT = 4000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.get("/furqan", (req, res) => {
  res.send("Hello from furqan and reeb");
});

app.listen(PORT, () => {
  console.log(`the app is listening on port no: ${PORT}`.bgCyan);
});
