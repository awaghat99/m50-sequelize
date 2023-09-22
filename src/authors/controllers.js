const Author = require("./model");
const Book = require("../books/model");

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      author: req.body.author,
    });
    res.status(201).json({ author: author, message: "successfully added author" });
  } catch (error) {
    res.status(500).json({ error: error, errorMessage: error.message });
  }
};

const getBooksByAuthor = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: {
        author: req.body.author,
      },
    });
    const books = await Book.findAll({
      where: { AuthorId: author.id },
    });

    res.status(200).json({ message: `Successfully found books from ${req.body.author}`, author: author, books: books });
  } catch (error) {}
};

module.exports = {
  addAuthor,
  getBooksByAuthor,
};
