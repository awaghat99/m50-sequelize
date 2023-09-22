const { Router } = require("express");
const router = Router();
const Book = require("./model");
const { getAllBooks, addABook, updateAuthor, deleteabook, getByAuthor, updateBookByTitle } = require("./controllers");

router.post("/addabook", addABook);

router.get("/listallbooks", getAllBooks);

router.get("/getbyauthor", getByAuthor);

router.put("/updatebookbytitle", updateBookByTitle);

router.put("/updateauthor", updateAuthor);

router.delete("/deleteabook", deleteabook);

module.exports = router;
