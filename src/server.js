const express = require("express");

const port = 80;

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "App is healthy" });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
