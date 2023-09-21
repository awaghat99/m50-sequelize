const { DataTypes, STRING } = require("sequelize");
const connection = require("../db/connection");

const Author = connection.define("Author", {
  author: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Author;
