require("dotenv").config();
const express = require("express");

const Book = require("./books/model");
const Genre = require("./genres/model");

const router = require("./books/routes");
const genreRouter = require("./genres/routes");

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());

app.use("/books", router);
app.use("/genres", genreRouter);

const syncTables = () => {
  Book.sync();
  Genre.sync();
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "App is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`App is listening on port ${port}`);
});
