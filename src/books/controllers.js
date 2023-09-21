const Book = require("./model");
const Genre = require("../genres/model");
const Author = require("../authors/model");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(201).json({ books: books, message: "Books successfully retreived" });
  } catch (error) {
    res.status(400).json({ error: error, errorMessage: error.message });
  }
};

const addABook = async (req, res) => {
  try {
    const genre = await Genre.findOne({ where: { genre: req.body.genre } });
    const author = await Author.findOne({ where: { author: req.body.author } });
    const book = await Book.create({
      title: req.body.title,
      AuthorId: author.id,
      GenreId: genre.id,
    });
    res.status(201).json({ book: book, message: "Book successfully added" });
  } catch (error) {
    res.status(400).json({ error: error, errorMessage: error.message });
  }
};

const updateAuthor = async (req, res) => {
  try {
    await Book.update({ author: req.body.author }, { where: { title: req.body.title } });
    res.status(200).json({ message: "author successfully updated" });
  } catch (error) {
    res.status(400).json({ error: error, errorMessage: error.message });
  }
};

const deleteabook = async (req, res) => {
  try {
    await Book.destroy({ where: { title: req.body.title } });
    res.status(200).json({ message: "Book successfully deleted" });
  } catch (error) {
    res.status(400).json({ error: error, errorMessage: error.message });
  }
};

module.exports = {
  getAllBooks: getAllBooks,
  addABook: addABook,
  updateAuthor: updateAuthor,
  deleteabook: deleteabook,
};
