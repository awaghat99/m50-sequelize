const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const Book = connection.define("Book", {
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Book;
