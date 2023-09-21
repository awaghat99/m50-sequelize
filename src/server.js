require("dotenv").config();
const express = require("express");

const router = require("./books/routes")

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());

app.use("/books", router)

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
};s

app.get("/health", (req, res) => {
  res.status(200).json({ message: "App is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`App is listening on port ${port}`);
});
