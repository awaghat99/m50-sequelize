const { Router } = require("express");
const router = Router();
const Book = require("./model");
const { getAllBooks } = require("./conrollers");

router.post("/addabook", async (req, res) => {
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

router.get("/listallbooks", getAllBooks);

router.put("/updateauthor", async (req, res) => {
  await Book.update({ author: req.body.author }, { where: { title: req.body.title } });
  const successResponse = {
    message: "Author successfully updated",
  };
  res.status(200).json(successResponse);
});

router.delete("/deleteabook", async (req, res) => {
  await Book.destroy({ where: { title: req.body.title } });

  const successResponse = {
    message: "Book succesfully deleted",
  };
  res.status(200).json(successResponse);
});

module.exports = router;
