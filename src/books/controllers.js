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

const getByAuthor = async (req, res) => {
  try {
    const author = await Author.findOne({ where: { author: req.body.author } });
    if (author) {
      const books = await Book.findAll({
        where: {
          AuthorId: author.id,
        },
      });
      res.status(200).json({ message: `These are the books with author: ${req.body.author}`, books: books });
    } else {
      res.status(404).json({ message: `Author ${req.body.author} not found` });
    }
  } catch (error) {
    res.status(400).json({ error: error, errorMessage: error.message });
  }
};

const updateBookByTitle = async (req, res) => {
  try {
    await Book.update(req.body, { where: { title: req.body.title } });
    res.status(200).json({ message: "Book successfully updated" });
  } catch (error) {
    res.status(400).json({ error: error, errorMessage: error.message });
  }
};

const addABook = async (req, res) => {
  try {
    let genre = await Genre.findOne({ where: { genre: req.body.genre } });
    let author = await Author.findOne({ where: { author: req.body.author } });
    if (!author) {
      author = await Author.create({ author: req.body.author });
    }
    if (!genre) {
      genre = await Genre.create({ genre: req.body.genre });
    }
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      AuthorId: author.id,
      GenreId: genre.id,
    });
    res.status(201).json({ book: book, message: "Book successfully added" });
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

const deleteAllBooks = async (req, res) => {
  try {
    await Book.destroy({ truncate: true });
    res.status(200).json({ message: "All books deleted" });
  } catch (error) {
    res.status(400).json({ error: error, errorMessage: error.message });
  }
};

module.exports = {
  getAllBooks: getAllBooks,
  addABook: addABook,
  deleteabook: deleteabook,
  getByAuthor: getByAuthor,
  updateBookByTitle: updateBookByTitle,
  deleteAllBooks: deleteAllBooks,
};
