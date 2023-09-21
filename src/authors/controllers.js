const Author = require("./model");

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

module.exports = {
  addAuthor,
};