const { Router } = require("express");
const router = Router();
const Book = require("./model");
const { getAllBooks, addABook, updateAuthor } = require("./controllers");

router.post("/addabook", addABook);

router.get("/listallbooks", getAllBooks);

router.put("/updateauthor", updateAuthor);

router.delete("/deleteabook", async (req, res) => {
  await Book.destroy({ where: { title: req.body.title } });

  const successResponse = {
    message: "Book succesfully deleted",
  };
  res.status(200).json(successResponse);
});

module.exports = router;
