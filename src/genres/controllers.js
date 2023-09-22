const Genre = require("./model");
const Book = require("../books/model");
const Author = require("../authors/model");

const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create({
      genre: req.body.genre,
    });
    res.status(201).json({ genre: genre, message: "successfully added genre" });
  } catch (error) {
    res.status(500).json({ error: error, errorMessage: error.message });
  }
};

const getBooksByGenre = async (req, res) => {
  try {
    const genre = await Genre.findOne({
      where: {
        genre: req.body.genre,
      },
    });
    const books = await Book.findAll({
      where: {
        GenreId: genre.id,
      },
    });
    res.status(200).json({ message: `Successfully found books from ${req.body.genre} genre`, genre: genre, books: books });
  } catch (error) {
    res.status(400).json({ error: error, errorMessage: error.message });
  }
};

const getGenreByParams = async (req, res) => {
  try {
    const genre = await Genre.findOne({
      where: { genre: req.params.genre },
    });

    const books = await Book.findAll({
      where: {
        GenreId: genre.id,
      },
    });

    const booksAndAuthors = [];

    for (let book of books) {
      const author = await Author.findOne({ where: { id: book.AuthorId } });
      booksAndAuthors.push({ book: book, author: author });
    }
    res.status(200).json({ message: `Found books from ${req.params.genre} genre`, genre: genre, books: booksAndAuthors });
  } catch (error) {
    res.status(400).json({ error: error, errorMessage: error.message });
  }
};

module.exports = {
  addGenre,
  getBooksByGenre,
  getGenreByParams,
};
