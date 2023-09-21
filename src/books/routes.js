const { Router } = require("express");
const router = Router();
const Book = require("./model");
const { getAllBooks, addABook } = require("./controllers");

router.post("/addabook", addABook);

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
