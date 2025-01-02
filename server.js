import express from "express";
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(PORT, () => {
  console.log(`the app is listening on port ${PORT}`);
});
