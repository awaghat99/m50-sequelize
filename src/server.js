require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());

const { DataTypes } = require("sequelize");
const connection = require("./db/connection");

const Book = connection.define("Book", {
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
  },
  genre: {
    type: DataTypes.STRING,
  },
});

const syncTables = () => {
  Book.sync();
};

app.post("/addabook", async (req, res) => {
  const book = await Book.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
  });
  const successResponse = {
    book: book,
    message: "Book successfully added",
  };
  res.status(201).json(successResponse);
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "App is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`App is listening on port ${port}`);
});
